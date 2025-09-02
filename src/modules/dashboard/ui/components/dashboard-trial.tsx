import Link from 'next/link';
import { RocketIcon } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

import { useTRPC } from '@/trpc/client';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export const DashboardTrial = () => {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.premium.getFreeUsage.queryOptions());

  if (
    !data ||
    Number(data?.product?.metadata.agents) === 0 ||
    Number(data?.product?.metadata.meetings) === 0
  )
    return null;

  return (
    <div className="border border-border/10 rounded-lg w-full bg-white/5 flex flex-col gap-y-2 ">
      <div className="p-3 flex flex-col gap-y-4">
        <div className="flex items-center gap-2">
          <RocketIcon className="size-4" fill="currentColor" />
          <p className="text-sm font-medium">
            {data.product?.metadata.title ?? 'Free Trial'}
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-xs">
            {data.agentCount}/{Number(data.product?.metadata.agents)} Agents
          </p>
          <Progress
            value={
              (data.agentCount / Number(data.product?.metadata.agents)) * 100
            }
            className="bg-cyan-800"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-xs">
            {data.meetingCount}/{Number(data.product?.metadata.meetings)}{' '}
            Meetings
          </p>
          <Progress
            value={
              (data.meetingCount / Number(data.product?.metadata.meetings)) *
              100
            }
            className="bg-cyan-800"
          />
        </div>
      </div>
      <Button
        asChild
        className="bg-transparent border-t border-border/10 hover:bg-white/10 rounded-t-none"
      >
        <Link href="/upgrade" className="w-full">
          Upgrade
        </Link>
      </Button>
    </div>
  );
};
