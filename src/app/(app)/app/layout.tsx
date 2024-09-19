import AppFooter from '@/components/app-footer';
import AppHeader from '@/components/app-header';
import BackgroundPattern from '@/components/background-pattern';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackgroundPattern />
      <div className="mx-auto max-w-[1100px] px-4">
        <AppHeader />
        {children}
        <AppFooter />
      </div>
    </>
  );
}
