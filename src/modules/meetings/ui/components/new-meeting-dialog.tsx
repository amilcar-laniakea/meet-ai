import { useRouter } from 'next/navigation';
import { ResponsiveDialog } from '@/components/responsive-dialog';
import { MeetingForm } from './meeting-form';

interface NewMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NewAMeetingDialog = ({
  open,
  onOpenChange
}: NewMeetingDialogProps) => {
  const router = useRouter();

  return (
    <ResponsiveDialog
      open={open}
      onOpenChange={onOpenChange}
      title="New Meeting"
      description="Create a new meeting"
    >
      <MeetingForm
        onSuccess={id => {
          onOpenChange(false);
          router.push(`/meetings/${id}`);
        }}
        onCancel={() => onOpenChange(false)}
      />
    </ResponsiveDialog>
  );
};
