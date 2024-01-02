import { Input } from '@mui/material';

import { useSearchProductByTitle } from '../../hooks/useSearchProductByTitle';
export const SearchProduct = () => {
  const { HandleOnchange } = useSearchProductByTitle();

  return (
    <>
      <Input
        id="search"
        name="search"
        onChange={(e) => HandleOnchange(e)}
        placeholder="Busque un producto"
        autoComplete="off"
        sx={{
          background: '#CECECE',
          paddingX: 1,
          mt: 0.5,
        }}
      />
    </>
  );
};
