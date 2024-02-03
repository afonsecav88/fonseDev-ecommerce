import { useState } from 'react';
import { SearchContext } from './SearchContext';

interface SearchProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchTermValue, setSearchTermValue] = useState<string>('');
  return (
    <SearchContext.Provider value={{ searchTermValue, setSearchTermValue }}>
      {children}
    </SearchContext.Provider>
  );
};
