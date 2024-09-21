import AppFooter from '@/components/app-footer';
import AppHeader from '@/components/app-header';
import BackgroundPattern from '@/components/background-pattern';
import PetContextProvider, {
  PetContext,
} from '@/contexts/pet-context-provider';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await fetch(
    'https://bytegrad.com/course-assets/projects/petsoft/api/pets'
  );
  if (!response.ok) {
    throw new Error('Failed to fetch pets');
  }
  const data = await response.json();
  return (
    <>
      <BackgroundPattern />
      <div className="mx-auto max-w-[1100px] px-4 flex flex-col min-h-screen">
        <AppHeader />
        <PetContextProvider data={data}>{children}</PetContextProvider>
        <AppFooter />
      </div>
    </>
  );
}
