import Link from 'next/link';
import { StepBackIcon } from 'lucide-react';

import EmptyState from '@/components/empty-state';
import { Button } from '@/components/ui/button';

export const ProcessingState = () => {
  return (
    <div className="bg-white rounded-lg px-4 py-5 flex flex-col gap-y-8 items-center justify-center">
      <EmptyState
        image="/processing.svg"
        title="Meeting Completed"
        description="This Meeting was completed, a summary will appear soon."
      />
      <div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-6 w-full">
        <Button asChild className="w-full lg:w-auto">
          <Link href={'/meetings'}>
            <StepBackIcon />
            Back to meetings
          </Link>
        </Button>
      </div>
    </div>
  );
};
