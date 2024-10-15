import AuthForm from '@/components/auth-form';
import H1 from '@/components/h1';
import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <H1 className="text-center mb-4">Log In</H1>
      <AuthForm type="login" />
      <p className="mt-6 text-sm text-zinc-500">
        Don't have an account?{' '}
        <Link href="/signup" className="font-medium ">
          Sign up
        </Link>
      </p>
    </main>
  );
}
