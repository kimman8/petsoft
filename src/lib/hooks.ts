import { PetContext } from '@/contexts/pet-context-provider';
import { SearchContext } from '@/contexts/search-context-provider';
import { useContext } from 'react';

export function usePetContext() {
  const context = useContext(PetContext);
  if (context === undefined || context === null) {
    throw new Error('usePetContext must be used within a PetContextProvider');
  }
  return context;
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (context === undefined || context === null) {
    throw new Error(
      'useSearchContext must be used within a SearchContextProvider'
    );
  }
  return context;
}
