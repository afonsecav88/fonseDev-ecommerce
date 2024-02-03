import { Input } from '@mui/material';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

export const Search = () => {
  const { searchTermValue, setSearchTermValue } = useContext(SearchContext);
  return (
    <>
      <Input
        id="search"
        value={searchTermValue}
        name="search"
        onChange={(e) => setSearchTermValue(e.target.value)}
        placeholder="Busque un producto"
        autoComplete="off"
        sx={{
          background: '#CECECE',
          paddingX: 1,
        }}
      />
    </>
  );
};
