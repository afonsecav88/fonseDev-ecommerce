import { Input } from '@mui/material';
import { useSearchContext } from '../../hooks/useSearchContext';

export const Search = () => {
  const { searchTermValue, setSearchTermValue } = useSearchContext();
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
