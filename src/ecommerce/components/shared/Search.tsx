import { Input } from '@mui/material';
import { useSearchProductByTitle } from '../../hooks/useSearchProductByTitle';

export const Search = () => {
  const { HandleOnchange, searchTermValue } = useSearchProductByTitle();

  return (
    <>
      <Input
        id="search"
        value={searchTermValue}
        name="search"
        onChange={HandleOnchange}
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
