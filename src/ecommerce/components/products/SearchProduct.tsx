import { Input } from '@mui/material';

import { useSearchProductByTitle } from '../../hooks/useSearchProductByTitle';
import { Product } from '../../interfaces/interfaces';

type PropsSearch = {
  product: Product[];
};

export const SearchProduct = ({ product }: PropsSearch) => {
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
        }}
      />
    </>
  );
};
