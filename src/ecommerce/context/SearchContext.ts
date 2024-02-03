import { Dispatch, createContext } from 'react';
interface SearchContextProps {
  searchTermValue?: string;
  setSearchTermValue: Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextProps>(
  {} as SearchContextProps,
);
