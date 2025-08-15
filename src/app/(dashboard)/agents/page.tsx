import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { SearchParams } from 'nuqs';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

import { getQueryClient, trpc } from '@/trpc/server';
import { auth } from '@/lib/auth';
import {
  AgentsView,
  AgentsViewError,
  AgentsViewLoading
} from '@/modules/agents/ui/views/agents-view';
import { AgentsListHeader } from '@/modules/agents/ui/components/agents-list-header';
import { loadSearchParams } from '@/modules/agents/params';

interface Props {
  searchParams: Promise<SearchParams>;
}

const Agents = async ({ searchParams }: Props) => {
  const params = await loadSearchParams(searchParams);

  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect('/sign-in');
  }

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.agents.getMany.queryOptions({ ...params })
  );

  return (
    <>
      <AgentsListHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<AgentsViewLoading />}>
          <ErrorBoundary fallback={<AgentsViewError />}>
            <AgentsView />
          </ErrorBoundary>
        </Suspense>
      </HydrationBoundary>
    </>
  );
};
export default Agents;
