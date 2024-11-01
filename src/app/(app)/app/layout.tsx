import AppFooter from '@/components/app-footer';
import AppHeader from '@/components/app-header';
import BackgroundPattern from '@/components/background-pattern';
import PetContextProvider from '@/contexts/pet-context-provider';
import SearchContextProvider from '@/contexts/search-context-provider';
import prisma from '@/lib/db';
import { Toaster } from '@/components/ui/sonner';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) {
    redirect('/login');
  }
  console.log(session.user);
  const pets = await prisma.pet.findMany({
    where: {
      userId: session.user.id, // Replace this with the actual user ID you want to find
    },
  });
  const users = await prisma.user.findUnique({
    where: {
      email: 'example@example.com', // Replace this with the actual email you want to find
    },
  });

  return (
    <>
      <BackgroundPattern />
      <div className="mx-auto max-w-[1100px] px-4 flex flex-col min-h-screen">
        <AppHeader />

        <SearchContextProvider>
          <PetContextProvider data={pets}>{children}</PetContextProvider>
        </SearchContextProvider>

        <AppFooter />
      </div>
      <Toaster position="top-right" />
    </>
  );
}
