'use client';
import { authClient } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function Home() {
  const { data: session, isPending } = authClient.useSession();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    authClient.signUp.email(
      {
        email, // user email address
        password, // user password -> min 8 characters by default
        name // user display name
      },
      {
        onSuccess: ctx => {
          window.alert(`User created successfully! Welcome, ${ctx.data.name}!`);
        },
        onError: ctx => {
          window.alert(`Error creating user: ${ctx.error.message}`);
        }
      }
    );
  };

  const onSignIn = () => {
    authClient.signIn.email(
      {
        email,
        password
      },
      {
        onSuccess: () => {
          console.log(`User signed in successfully! Welcome!`);
        },
        onError: ctx => {
          window.alert(`Error sign in user: ${ctx.error.message}`);
        }
      }
    );
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <div>
        <h2>Welcome back, {session.user.name}!</h2>
        <Button onClick={() => authClient.signOut()}>Sign Out</Button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center max-w-xs m-auto">
      <div className="p-4 flex flex-col gap-y-4 w-full">
        <div className="text-green-700">Test Log In Session:</div>
        <Input
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button onClick={() => onSubmit()}>Create User</Button>
      </div>
      <div className="p-4 flex flex-col gap-y-4 w-full m-4">
        <div className="text-green-700">If you have already an Accout:</div>
        <Input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button onClick={() => onSignIn()}>Sign In</Button>
      </div>
    </div>
  );
}
