'use client';

import { useState } from 'react';
import { PlusIcon, XCircleIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { NewAMeetingDialog } from './new-meeting-dialog';
import { MeetingsSearchFilter } from './meetings-search-filter';
import { StatusFilter } from './status-filter';
import { AgentIdFilter } from './agent-id-filter';
import { useMeetingsFilters } from '../../hooks/use-meetings-filters';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export const MeetingsListHeader = () => {
  const [filters, setFilters] = useMeetingsFilters();
  const [dialogOpen, setDialogOpen] = useState(false);

  const isAnyFilterModified =
    !!filters.status || !!filters.search || filters.agentId;

  const onClearFilters = () => {
    setFilters({
      status: null,
      agentId: '',
      search: '',
      page: 1
    });
  };

  return (
    <>
      <NewAMeetingDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <div className="py-4 px-4 md:px-8 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-xl">My Meetings</h5>
          <Button onClick={() => setDialogOpen(true)}>
            <PlusIcon />
            New Meeting
          </Button>
        </div>
        <ScrollArea>
          <div className="flex items-center gap-x-2 p-1">
            <MeetingsSearchFilter />
            <StatusFilter />
            <AgentIdFilter />
            {isAnyFilterModified && (
              <Button variant="outline" onClick={onClearFilters}>
                <XCircleIcon className="size-4" />
                Clear
              </Button>
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
};
