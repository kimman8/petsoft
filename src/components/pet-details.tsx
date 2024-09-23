'use client';

import { usePetContext } from '@/lib/hooks';
import Image from 'next/image';

export default function PetDetails() {
  const { selectedPet } = usePetContext();

  return (
    <section className="flex flex-col h-full w-full ">
      <div className="flex items-center px-8 py-5 bg-white border-b border-black/[0.08]">
        <Image
          src={selectedPet?.imageUrl}
          alt="Selected Pet image"
          width={75}
          height={75}
          className="w-[75px] h-[75px] rounded-full object-cover"
        />
        <h2 className="text-3xl  font-semibold ml-5 leading-7">
          {selectedPet?.name}
        </h2>
      </div>
      <div className="flex py-10 px-5 justify-around text-center">
        <div>
          <h3 className="text-[13px] font-medium uppercase text-zinc-700">
            Owner name
          </h3>
          <p className="mt-1 text-zinc-800 text-lg">{selectedPet?.ownerName}</p>
        </div>
        <div>
          <h3 className="text-[13px] font-medium uppercase text-zinc-700">
            Age
          </h3>
          <p className="mt-1 text-zinc-800 text-lg">{selectedPet?.age}</p>
        </div>
      </div>
      <section className="flex-grow bg-white px-7 py-5 rounded-md mb-9 mx-8 border border-black/[0.08]">
        {selectedPet?.notes}
      </section>
    </section>
  );
}
