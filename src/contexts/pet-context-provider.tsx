'use client';

import { addPet } from '@/actions/actions';
import { Pet } from '@/lib/types';
import { useState, createContext } from 'react';

type TPetContext = {
  pets: Pet[];
  selectedPetId: string | null;
  handleChangeSelectedPetId: (id: string) => void;
  selectedPet: Pet | undefined;
  numberOfPets: number | undefined;
  handleDelete: (id: string) => void;
  handleAddPet: (newPet: Omit<Pet, 'id'>) => void;
  handleEditPet: (petId: string, newPetData: Omit<Pet, 'id'>) => void;
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
  const handleDelete = (id: string) => {
    setPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
    setSelectedPetId(null);
  };

  const handleAddPet = async (newPet: Omit<Pet, 'id'>) => {
    // setPets((prevPets) => [
    //   ...prevPets,
    //   {
    //     id: Date.now().toString(),
    //     ...newPet,
    //   },
    // ]);
    await addPet(newPet);
  };

  const handleEditPet = (petId: string, newPetData: Omit<Pet, 'id'>) => {
    setPets((prevPets) =>
      prevPets.map((pet) =>
        pet.id === petId
          ? {
              id: petId,
              ...newPetData,
            }
          : pet
      )
    );
  };

  const numberOfPets = pets.length;
  return (
    <PetContext.Provider
      value={{
        pets,
        selectedPetId,
        handleChangeSelectedPetId,
        selectedPet,
        numberOfPets,
        handleDelete,
        handleAddPet,
        handleEditPet,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}
