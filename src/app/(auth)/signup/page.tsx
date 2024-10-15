import AuthForm from '@/components/auth-form';
import H1 from '@/components/h1';
import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <H1 className="text-center mb-4">Sign Up</H1>
      <AuthForm type="signup" />
      <p className="mt-6 text-sm text-zinc-500">
        Already have an account?{' '}
        <Link href="/login" className="font-medium ">
          Log In
        </Link>
      </p>
    </main>
  );
}
