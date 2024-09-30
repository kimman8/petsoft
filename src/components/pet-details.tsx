'use client';

import { usePetContext } from '@/lib/hooks';
import { Pet } from '@/lib/types';
import Image from 'next/image';
import PetButton from './pet-button';

export default function PetDetails() {
  const { selectedPet } = usePetContext();

  return (
    <section className="flex flex-col h-full w-full ">
      {selectedPet ? (
        <>
          <TopBar pet={selectedPet} />
          <InfoBar pet={selectedPet} />
          <Notes pet={selectedPet} />
        </>
      ) : (
        <EmptyView />
      )}
    </section>
  );
}

type Props = {
  pet: Pet | undefined;
};

function TopBar({ pet }: Props) {
  const { handleDelete } = usePetContext();

  return (
    <div className="flex items-center px-8 py-5 bg-white border-b border-light">
      <Image
        src={pet?.imageUrl}
        alt="Selected Pet image"
        width={75}
        height={75}
        className="w-[75px] h-[75px] rounded-full object-cover"
      />
      <h2 className="text-3xl font-semibold ml-5 leading-7">{pet?.name}</h2>
      <div className="flex ml-auto space-x-2">
        <PetButton actionType="edit">Edit Pet</PetButton>
        <PetButton actionType="checkout" onClick={() => handleDelete(pet?.id)}>
          Checkout
        </PetButton>
      </div>
    </div>
  );
}

function InfoBar({ pet }: Props) {
  return (
    <div className="flex py-10 px-5 justify-around text-center">
      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">
          Owner name
        </h3>
        <p className="mt-1 text-zinc-800 text-lg">{pet?.ownerName}</p>
      </div>
      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">Age</h3>
        <p className="mt-1 text-zinc-800 text-lg">{pet?.age}</p>
      </div>
    </div>
  );
}

function Notes({ pet }: Props) {
  return (
    <section className="flex-grow bg-white px-7 py-5 rounded-md mb-9 mx-8 border border-light">
      {pet?.notes}
    </section>
  );
}

function EmptyView() {
  return (
    <p className="h-full flex items-center justify-center text-2xl font-medium text-zinc-800">
      Select a pet to view details
    </p>
  );
}
