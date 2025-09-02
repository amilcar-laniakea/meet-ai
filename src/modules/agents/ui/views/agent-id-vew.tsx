'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { VideoIcon } from 'lucide-react';
import {
  useQueryClient,
  useSuspenseQuery,
  useMutation
} from '@tanstack/react-query';

import { useConfirm } from '@/hooks/use-confirm';
import { useTRPC } from '@/trpc/client';
import LoadingState from '@/components/loading-state';
import ErrorState from '@/components/error-state';
import { GeneratedAvatar } from '@/components/generated-avatar';
import { Badge } from '@/components/ui/badge';

import { AgentIdViewHeader } from '../components/agent-view-header';

import { UpdateAgentDialog } from '../components/update-agent-dialog';

interface Props {
  agentId: string;
}

export const AgentIdView = ({ agentId }: Props) => {
  const trpc = useTRPC();
  const router = useRouter();
  const queryClient = useQueryClient();

  const [updateAgentDialogOpen, setUpdateAgentDialogOpen] = useState(false);

  const { data } = useSuspenseQuery(
    trpc.agents.getOne.queryOptions({ id: agentId })
  );

  const removeAgent = useMutation(
    trpc.agents.remove.mutationOptions({
      onSuccess: async () => {
        toast.success('Agent removed successfully', {
          position: 'top-right',
          richColors: true,
          closeButton: true
        });

        await queryClient.invalidateQueries(
          trpc.agents.getMany.queryOptions({})
        );

        await queryClient.invalidateQueries(
          trpc.premium.getFreeUsage.queryOptions()
        );

        router.push('/agents');
      },
      onError: error => {
        toast.error(error.message || 'Failed to remove agent', {
          position: 'bottom-right',
          richColors: true,
          closeButton: true
        });
      }
    })
  );

  const [RemoveConfirmation, confirmRemove] = useConfirm(
    'Are you sure?',
    `The following action will take ${data.meetingCount} associated meetings into account.`
  );

  const handleRemoveAgent = async () => {
    const confirmed = await confirmRemove();

    if (!confirmed) return;

    await removeAgent.mutateAsync({ id: agentId });
  };

  return (
    <>
      <RemoveConfirmation />
      <UpdateAgentDialog
        open={updateAgentDialogOpen}
        onOpenChange={setUpdateAgentDialogOpen}
        initialValues={data}
      />
      <div className="flex-1 py-3 px-3 md:px-6 flex flex-col gap-y-3">
        <AgentIdViewHeader
          agentId={agentId}
          agentName={data.name}
          onEdit={() => setUpdateAgentDialogOpen(true)}
          onRemove={handleRemoveAgent}
        />
        <div className="bg-white rounded-lg border">
          <div className="px-4 py-5 gap-y-5 flex flex-col col-span-5">
            <div className="flex items-center gap-x-3">
              <GeneratedAvatar
                variant="botttsNeutral"
                seed={data.name}
                className="size-10"
              />
              <h2 className="text-2xl font-medium">{data.name}</h2>
            </div>
            <Badge
              variant="outline"
              className="flex items-center gap-x-2 [&>svg]:size-4 py-2"
            >
              <VideoIcon className="text-blue-700" />
              {data.meetingCount}{' '}
              {data.meetingCount === 1 ? 'Meeting' : 'Meetings'}
            </Badge>
            <div className="flex flex-col gap-y-4">
              <p className="text-lg font-medium">Instructions</p>
              <p className="text-neutral-800">{data.instructions}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const AgentsIdViewLoading = () => {
  return (
    <LoadingState
      title="Loading agent..."
      description="Please wait while we fetch the agent."
    />
  );
};

export const AgentsIdViewError = () => {
  return (
    <ErrorState
      title="Error loading agent"
      description="Please try again later."
    />
  );
};
