'use client';

import { Pet } from '@/lib/types';
import { useState, createContext } from 'react';

type TPetContext = {
  pets: Pet[];
  selectedPetId: string | null;
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
  const [selectedPetId, setSelectedPetId] = useState(null);

  return (
    <PetContext.Provider
      value={{
        pets,
        selectedPetId,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}
