'use client';

import { useState, createContext } from 'react';

type TSearchContext = {
  searchQuery: string | null;
  handleChangeSearchQuery: (newValue: string) => void | null;
};

type SearchContextProviderProps = {
  children: React.ReactNode;
};
export const SearchContext = createContext<TSearchContext | null>(null);

export default function SearchContextProvider({
  children,
}: SearchContextProviderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const handleChangeSearchQuery = (newValue: string) => {
    setSearchQuery(newValue);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        handleChangeSearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
