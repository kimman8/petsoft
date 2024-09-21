import { PetContext } from '@/contexts/pet-context-provider';
import { useContext } from 'react';

export function usePetContext() {
  const context = useContext(PetContext);
  if (context === undefined) {
    throw new Error('usePetContext must be used within a PetContextProvider');
  }
  return context;
}
