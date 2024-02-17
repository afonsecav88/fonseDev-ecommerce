import { Badge, Card, Container, Typography } from '@mui/material';
import { useSelectorAndDispatch } from '../hooks/useSelectorAndDispatch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProductCartDetails from '../components/ProductCartDetails';
import { NotProductInCart } from '../components/NotProductInCart';
export const ProductCartDetailsPage = () => {
  const { cartsProducts } = useSelectorAndDispatch();
  const { cartProducts, cantProdInCart } = cartsProducts;

  return (
    <Container sx={{ display: 'flex' }}>
      {cantProdInCart ? (
        <Card
          sx={{
            width: '66%',
            backgroundColor: '#E2E2E2',
          }}
        >
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              gap: 2,
              padding: 1,
              backgroundColor: '#51D27F',
              flexWrap: 'wrap',
            }}
            gutterBottom
            variant="overline"
            component="div"
          >
            <strong>Productos en el carrito</strong>
            <Badge
              sx={{ marginTop: '10px' }}
              badgeContent={cantProdInCart}
              color="primary"
            >
              <ShoppingCartIcon color="action" />
            </Badge>
          </Typography>
          {cartProducts.map((product) => (
            <ProductCartDetails key={product.id} product={product} />
          ))}
        </Card>
      ) : (
        <NotProductInCart />
      )}
    </Container>
  );
};
