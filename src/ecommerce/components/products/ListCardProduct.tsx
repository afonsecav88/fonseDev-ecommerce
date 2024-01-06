import { Container, Input } from '@mui/material';
import { useGetAllProducts } from '../../hooks/useGetAllProducts';
import { useSearchProductByTitle } from '../../hooks/useSearchProductByTitle';
import { CardProduct } from './CardProduct';
import { NotProductsLoaded } from './NotProductsLoaded';

export const ListCardProduct = () => {
  const { isLoading, product } = useGetAllProducts();
  const { HandleOnchange, searchValue, searchProducts } =
    useSearchProductByTitle();

  const productListRender = () => {
    return searchValue.length < 1 ? product : searchProducts;
  };

  return (
    <>
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
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
      </Container>

      {!isLoading && searchProducts.length !== 0 ? (
        productListRender().map((productItem) => (
          <CardProduct key={productItem.id} productItem={productItem} />
        ))
      ) : (
        <NotProductsLoaded />
      )}
    </>
  );
};
