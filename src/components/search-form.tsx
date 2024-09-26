'use client';

import { useSearchContext } from '@/lib/hooks';

export default function SearchForm() {
  const { searchQuery, handleChangeSearchQuery } = useSearchContext();

  return (
    <form className="w-full h-full">
      <input
        placeholder="search pet.."
        className="w-full h-full bg-white/20 rounded-md outline-none px-5 transition focus:bg-white/50 hover:bg-white/30 placeholder:text-white/50"
        type="search"
        value={searchQuery}
        onChange={(e) => handleChangeSearchQuery(e.target.value)}
      />
    </form>
  );
}
