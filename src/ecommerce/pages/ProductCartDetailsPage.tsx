import { Badge, Card, Container, Divider, Typography } from '@mui/material';
import { useSelectorAndDispatch } from '../hooks/useSelectorAndDispatch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProductCartDetails from '../components/ProductCartDetails';
import { NotProductInCart } from '../components/NotProductInCart';
import { CartTotalPrice } from '../components/CartTotalPrice';
export const ProductCartDetailsPage = () => {
  const { cartsProducts } = useSelectorAndDispatch();
  const { cartProducts, cantProdInCart } = cartsProducts;

  return (
    <Container sx={{ display: 'flex', maxWidth: 900 }}>
      {cantProdInCart ? (
        <Card
          sx={{
            width: '100%',
            backgroundColor: '#E2E2E2',
          }}
        >
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              gap: 2,
              padding: 1,
              backgroundColor: '#90e0ef',
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
          <Divider />
          <CartTotalPrice />
        </Card>
      ) : (
        <NotProductInCart />
      )}
    </Container>
  );
};
