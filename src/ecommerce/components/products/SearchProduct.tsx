import { Input } from '@mui/material';
import { useSearchProductByTitle } from '../../hooks/useSearchProductByTitle';
export const SearchProduct = () => {
  const { HandleOnchange, searchValue, searchProducts } =
    useSearchProductByTitle();
  console.log(searchProducts);
  return (
    <>
      <Input
        id="search"
        value={searchValue}
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
