import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import HomeView from '@/modules/home/ui/views/home-view';
import { auth } from '@/lib/auth';

/* The comments related  with the tag TRPCServer is a demostration that is possible fetch information from a server component, but  with some insigts, related with caching */

// import { caller } from '@/trpc/server'; #TRPCServer

const Home = async () => {
  // const data = await caller.hello({ text: 'Antonio from Server!' }); #TRPCServer

  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect('/sign-in');
  }

  // return <p>{data.greeting}</p>; #TRPCServer
  return <HomeView />;
};

export default Home;
