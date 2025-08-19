'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import { useConfirm } from '@/hooks/use-confirm';
import LoadingState from '@/components/loading-state';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery
} from '@tanstack/react-query';

import { useTRPC } from '@/trpc/client';
import ErrorState from '@/components/error-state';
import { MeetingIdViewHeader } from './components/meeting-id-view-header';
import { UpdateMeetingDialog } from './components/update-meeting-dialog';
import { UpcomingState } from './components/upcoming-state';
import { ActiveState } from './components/active-state';
import { CancelledState } from './components/cancelled-state';
import { ProcessingState } from './components/processing-state';
import { CompletedState } from './components/completed-state';

interface Props {
  meetingId: string;
}

export const MeetingIdView = ({ meetingId }: Props) => {
  const trpc = useTRPC();
  const router = useRouter();
  const queryClient = useQueryClient();

  const [updateMeetingDialogOpen, setUpdateMeetingDialogOpen] = useState(false);

  const { data } = useSuspenseQuery(
    trpc.meetings.getOne.queryOptions({ id: meetingId })
  );

  const removeMeeting = useMutation(
    trpc.meetings.remove.mutationOptions({
      onSuccess: async () => {
        toast.success('Meeting removed successfully', {
          position: 'top-right',
          richColors: true,
          closeButton: true
        });
        await queryClient.invalidateQueries(
          trpc.meetings.getMany.queryOptions({})
        );
        // TODO: Invalidate free tier usage
        router.push('/meetings');
      },
      onError: error => {
        toast.error(error.message || 'Failed to remove meeting', {
          position: 'bottom-right',
          richColors: true,
          closeButton: true
        });
      }
    })
  );

  const [RemoveConfirmation, confirmRemove] = useConfirm(
    'Are you sure?',
    `The following action will delete the meeting.`
  );

  const handleRemoveMeeting = async () => {
    const confirmed = await confirmRemove();

    if (!confirmed) return;

    await removeMeeting.mutateAsync({ id: meetingId });
  };

  const isActive = data.status === 'active';
  const isUpcoming = data.status === 'upcoming';
  const isCancelled = data.status === 'cancelled';
  const isCompleted = data.status === 'completed';
  const isProcessing = data.status === 'processing';

  return (
    <>
      <RemoveConfirmation />
      <UpdateMeetingDialog
        open={updateMeetingDialogOpen}
        onOpenChange={setUpdateMeetingDialogOpen}
        initialValues={data}
      />
      <div className="flex-1 py-4 px-4 md:px-8 flex flex-col gap-y-4">
        <MeetingIdViewHeader
          meetingId={meetingId}
          meetingName={data.name}
          onEdit={() => setUpdateMeetingDialogOpen(true)}
          onRemove={handleRemoveMeeting}
        />
        <div>
          {isActive && <ActiveState meetingId={meetingId} />}
          {isUpcoming && (
            <UpcomingState
              meetingId={meetingId}
              onCancelMeeting={() => {}}
              isCancelling={false}
            />
          )}
          {isCancelled && <CancelledState />}
          {isCompleted && <CompletedState data={data} />}
          {isProcessing && <ProcessingState />}
        </div>
      </div>
    </>
  );
};

export const MeetingsIdViewLoading = () => {
  return (
    <LoadingState
      title="Loading meeting..."
      description="Please wait while we fetch the meeting."
    />
  );
};

export const MeetingsIdViewError = () => {
  return (
    <ErrorState
      title="Error loading meeting"
      description="Please try again later."
    />
  );
};
