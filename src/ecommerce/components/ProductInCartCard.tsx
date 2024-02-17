import { Avatar, Card, CardContent, Divider, Typography } from '@mui/material';
import { CartProduct } from '../store/models/CartProducts';
import { CartMoreDetailsButton } from './CartMoreDetailsButton';
import { useCheckRoute } from '../hooks/useCheckRoute';

interface ProductInCartProps {
  cartProducts: CartProduct[];
}

export const ProductInCartCard = ({ cartProducts }: ProductInCartProps) => {
  const { isRouteCartDetails } = useCheckRoute();
  return (
    <>
      {!isRouteCartDetails && cartProducts.length >= 1 && (
        <Card
          sx={{
            display: {
              xs: 'none',
              md: 'block',
              lg: 'block',
              xl: 'block',
            },
            maxWidth: 280,
            position: 'fixed',
            top: '80px',
            right: '1px',
            zIndex: '1500',
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
            }}
            gutterBottom
            variant="overline"
            component="div"
          >
            <strong>Productos en el carrito</strong>
          </Typography>
          {cartProducts.map((product) => (
            <div key={product.id}>
              <CardContent>
                <Typography
                  sx={{ display: 'inline-flex', gap: 2 }}
                  gutterBottom
                  variant="subtitle1"
                  component="div"
                >
                  <Avatar src={product.image} />
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Precio: $ </strong> {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Cantidad:</strong> {product.count}
                </Typography>
              </CardContent>
              <Divider />
            </div>
          ))}
          <CartMoreDetailsButton />
        </Card>
      )}
    </>
  );
};
