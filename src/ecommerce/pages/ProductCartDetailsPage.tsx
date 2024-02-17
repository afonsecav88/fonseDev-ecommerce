import { Container } from '@mui/material';
import { useSelectorAndDispatch } from '../hooks/useSelectorAndDispatch';
import { NotProductInCart } from '../components/NotProductInCart';
import ProductCartDetails from '../components/ProductCartDetails';
export const ProductCartDetailsPage = () => {
  const { cartsProducts } = useSelectorAndDispatch();
  const { cartProducts, cantProdInCart } = cartsProducts;

  return (
    <Container sx={{ display: 'flex' }}>
      {cantProdInCart ? (
        <ProductCartDetails
          cartProducts={cartProducts}
          cantProdInCart={cantProdInCart}
        />
      ) : (
        <NotProductInCart />
      )}
    </Container>
  );
};
