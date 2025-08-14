'use client';
import { Card, CardContent } from '@/components/ui/card';

import Link from 'next/link';
import { z } from 'zod';
import { Loader2Icon, OctagonAlertIcon } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import Image from 'next/image';

import { authClient } from '@/lib/auth-client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Alert, AlertTitle } from '@/components/ui/alert';

const formSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: 'Name must be at least 2 characters long' })
      .max(100, {
        message: 'Name must not exceed 100 characters'
      }),
    email: z.email({ message: 'Invalid email address' }),
    password: z.string().min(1, {
      message: 'Password is required'
    }),
    confirmPassword: z.string().min(1, {
      message: 'Confirm Password is required'
    })
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  });

export const SignUpView = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setError(null);
    setLoading(true);
    try {
      await authClient.signUp.email(
        {
          name: data.name,
          email: data.email,
          password: data.password,
          callbackURL: '/'
        },
        {
          onSuccess: () => {
            router.push('/');
          },
          onError: ({ error }) => {
            setError(error.message);
          }
        }
      );
    } catch {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const onSocial = async (provider: 'google' | 'github') => {
    setError(null);
    setLoading(true);
    try {
      await authClient.signIn.social(
        {
          provider: provider,
          callbackURL: '/'
        },
        {
          onError: ({ error }) => {
            setError(error.message);
          }
        }
      );
    } catch {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0 w-full">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">
                    Let&apos;s get started!
                  </h1>
                  <p className="text-muted-foreground text-balance">
                    Create your account
                  </p>
                </div>
                <div className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="px-1">Name:</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Jhon Doe"
                            disabled={loading}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="px-1">Email:</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="example@example.com"
                            disabled={loading}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="px-1">Password:</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="********"
                            disabled={loading}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="px-1">
                          Confirm Password:
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="********"
                            disabled={loading}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {!!error && (
                  <Alert
                    variant="destructive"
                    className="bg-destructive/10 border-none"
                  >
                    <OctagonAlertIcon className="h-4 w-4 text-destructive" />
                    <AlertTitle>{error}</AlertTitle>
                  </Alert>
                )}
                <Button disabled={loading} type="submit" className="w-full">
                  {loading ? (
                    <>
                      <Loader2Icon className="animate-spin" />
                      Please wait
                    </>
                  ) : (
                    'Sign Up'
                  )}
                </Button>
                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:items-center after:border-t">
                  <span className="bg-card text-muted-foreground relative z-10 px-2">
                    Or continue with
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    type="button"
                    disabled={loading}
                    variant="outline"
                    className="w-full"
                    onClick={() => onSocial('google')}
                  >
                    {loading ? (
                      <Loader2Icon className="animate-spin" />
                    ) : (
                      <FaGoogle />
                    )}
                  </Button>
                  <Button
                    type="button"
                    disabled={loading}
                    variant="outline"
                    className="w-full"
                    onClick={() => onSocial('github')}
                  >
                    {loading ? (
                      <Loader2Icon className="animate-spin" />
                    ) : (
                      <FaGithub />
                    )}
                  </Button>
                </div>
                <div className="text-center text-sm">
                  Already have an account?{' '}
                  <Link
                    href="/sign-in"
                    className="underline underline-offset-4 text-blue-800"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </form>
          </Form>
          <div className="bg-radial from-blue-900 to-blue-950 relative hidden md:flex flex-col gap-y-4 items-center justify-center p-4">
            <Image
              src={'/logo.svg'}
              width={100}
              height={100}
              alt="Logo"
              className="w-[100px] h-[100px]"
              priority
            />
            <p className="text-2xl font-semibold text-white">Meet.AI</p>
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        {' '}
        By clicking continue, you agree to our <a href="#">
          Terms of Service
        </a>{' '}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
};
