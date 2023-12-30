import { Input } from '@mui/material';

export const SearchProduct = () => {
  return (
    <>
      <Input
        id="search"
        name="search"
        placeholder="Busque un producto"
        autoComplete="off"
        sx={{
          background: '#CECECE',
          paddingX: 1,
          //  color: '#BDA187',
          //  border: '1px solid #BDA187',
        }}
      />
    </>
  );
};
