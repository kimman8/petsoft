'use client';

import { Pet } from '@/lib/types';
import { useState, createContext } from 'react';

type TPetContext = {
  pets: Pet[];
  selectedPetId: string | null;
  handleChangeSelectedPetId: (id: string) => void;
  selectedPet: Pet | undefined;
};

type PetContextProviderProps = {
  data: Pet[];
  children: React.ReactNode;
};
export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({
  data,
  children,
}: PetContextProviderProps) {
  const [pets, setPets] = useState(data);
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);
  const selectedPet = pets.find((pet) => pet.id === selectedPetId);
  const handleChangeSelectedPetId = (id: string) => {
    setSelectedPetId(id);
  };
  return (
    <PetContext.Provider
      value={{
        pets,
        selectedPetId,
        handleChangeSelectedPetId,
        selectedPet,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}
