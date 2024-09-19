import Branding from '@/components/branding';
import Stats from '@/components/stats';

export default function Page() {
  return (
    <main>
      <div className="flex items-center justify-between text-white py-8">
        <Branding />
        <Stats />
      </div>
    </main>
  );
}
