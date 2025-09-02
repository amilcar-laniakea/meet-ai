import { Suspense } from 'react';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { ErrorBoundary } from 'react-error-boundary';
import { SearchParams } from 'nuqs';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getQueryClient, trpc } from '@/trpc/server';
import { auth } from '@/lib/auth';
import { MeetingsListHeader } from '@/modules/meetings/ui/components/meetings-list-header';
import {
  MeetingsView,
  MeetingsViewError,
  MeetingsViewLoading
} from '@/modules/meetings/ui/views/meetings-view';

import { loadSearchParams } from '@/modules/meetings/params';

interface Props {
  searchParams: Promise<SearchParams>;
}

const Meetings = async ({ searchParams }: Props) => {
  const params = await loadSearchParams(searchParams);

  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect('/sign-in');
  }

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.meetings.getMany.queryOptions({ ...params })
  );

  return (
    <>
      <MeetingsListHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<MeetingsViewLoading />}>
          <ErrorBoundary fallback={<MeetingsViewError />}>
            <MeetingsView />
          </ErrorBoundary>
        </Suspense>
      </HydrationBoundary>
    </>
  );
};
export default Meetings;
