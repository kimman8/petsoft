'use client';

import { usePetContext } from '@/lib/hooks';

export default function Stats() {
  const { petLength } = usePetContext();

  return (
    <section className="text-center">
      <p className="text-2xl font-bold leading-6">{petLength}</p>
      <p className="opacity-80">Current Guests</p>
    </section>
  );
}
