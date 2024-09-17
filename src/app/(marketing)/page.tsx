import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-[#5DC9A8] min-h-screen flex items-center justify-center gap-10 flex-col xl:flex-row">
      <Image
        src="https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png"
        alt="Preview of petsoft"
        height={472}
        width={519}
      />
      <div>
        <Logo />
        <h1 className="text-5xl font-semibold my-6 max-w-[500px]">
          Manage your <span className="font-extrabold">pet daycare</span> with
          ease
        </h1>
        <p className="text-2xl font-medium max-w-[600px]">
          Use Petsoft to easily keep track of pets under your care. Get Lifetime
          access for $399.
        </p>
        <div className="mt-10 space-x-3">
          <Button asChild>
            <Link href="./signup">Get Started</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="./login">Log In</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
