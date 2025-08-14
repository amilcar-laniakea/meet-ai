'use client';
import { authClient } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const HomeView = () => {
  const router = useRouter();

  const { data: session } = authClient.useSession();

  if (!session) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Welcome back, {session.user.name}!</h2>
      <Button
        onClick={() =>
          authClient.signOut({
            fetchOptions: {
              onSuccess: () => router.push('/sign-in')
            }
          })
        }
      >
        Sign Out
      </Button>
    </div>
  );
};
export default HomeView;
