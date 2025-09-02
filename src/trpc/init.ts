import { cache } from 'react';
import { headers } from 'next/headers';
import { count, eq } from 'drizzle-orm';

import { db } from '@/db';
import { agents, meetings } from '@/db/schema';
import { auth } from '@/lib/auth';
import { polarClient } from '@/lib/polar';
import { initTRPC, TRPCError } from '@trpc/server';

import {
  MAX_FREE_AGENTS,
  MAX_FREE_MEETINGS
} from '@/modules/premium/constants';

export const createTRPCContext = cache(async () => {
  /**
   * @see: https://trpc.io/docs/server/context
   */
  return { userId: 'user_123' };
});
// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  // transformer: superjson,
});
// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;

// Protected custom procedure!
export const protectedProcedure = baseProcedure.use(async ({ ctx, next }) => {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session)
    throw new TRPCError({ code: 'UNAUTHORIZED', message: 'unauthorized' });

  return next({ ctx: { ...ctx, auth: session } });
});

export const premiumProcedure = (entity: 'meetings' | 'agents') =>
  protectedProcedure.use(async ({ ctx, next }) => {
    const customer = await polarClient.customers.getStateExternal({
      externalId: ctx.auth.user.id
    });

    const [userMeetings] = await db
      .select({ count: count(meetings.id) })
      .from(meetings)
      .where(eq(meetings.userId, ctx.auth.user.id));

    const [userAgents] = await db
      .select({ count: count(agents.id) })
      .from(agents)
      .where(eq(agents.userId, ctx.auth.user.id));

    const isPremium = customer.activeSubscriptions.length > 0;

    let product = null;

    if (isPremium) {
      product = await polarClient.products.get({
        id: customer.activeSubscriptions[0].productId
      });

      if (!product) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Product not found'
        });
      }

      if (!product.metadata?.meetings || !product.metadata?.agents) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Product metadata is incomplete'
        });
      }
    }

    const meetingsQuantity = Number(product?.metadata.meetings);
    const agentsQuantity = Number(product?.metadata.agents);

    const isFreeAgentLimitReached = userAgents.count >= MAX_FREE_AGENTS;
    const isFreeMeetingLimitReached = userMeetings.count >= MAX_FREE_MEETINGS;

    const shouldThrowFreeMeetingError =
      entity === 'meetings' && isFreeMeetingLimitReached && !isPremium;

    const shouldThrowFreeAgentError =
      entity === 'agents' && isFreeAgentLimitReached && !isPremium;

    const isPaidAgentLimitReached =
      agentsQuantity === 0 ? false : userAgents.count >= agentsQuantity;
    const isPaidMeetingLimitReached =
      meetingsQuantity === 0 ? false : userMeetings.count >= meetingsQuantity;

    const shouldThrowPaidMeetingError =
      entity === 'meetings' && isPaidMeetingLimitReached;

    const shouldThrowPaidAgentError =
      entity === 'agents' && isPaidAgentLimitReached;

    if (shouldThrowPaidMeetingError) {
      throw new TRPCError({
        code: 'FORBIDDEN',
        message: `You have reached the maximum number of meetings (${meetingsQuantity}).`
      });
    }

    if (shouldThrowPaidAgentError) {
      throw new TRPCError({
        code: 'FORBIDDEN',
        message: `You have reached the maximum number of agents (${agentsQuantity}).`
      });
    }

    if (shouldThrowFreeMeetingError) {
      throw new TRPCError({
        code: 'FORBIDDEN',
        message: 'You have reached the maximum number of free meetings.'
      });
    }

    if (shouldThrowFreeAgentError) {
      throw new TRPCError({
        code: 'FORBIDDEN',
        message: 'You have reached the maximum number of free agents.'
      });
    }

    return next({ ctx: { ...ctx, customer } });
  });
