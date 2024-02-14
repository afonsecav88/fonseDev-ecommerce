import {
  Avatar,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { useSelectorAndDispatch } from '../hooks/useSelectorAndDispatch';

export const AddedProductsToCart = () => {
  const { cartsProducts } = useSelectorAndDispatch();
  const { cantProdInCart, cartProducts } = cartsProducts;

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignContent: 'center',
        textJustify: 'center',
        flexDirection: 'column',
        margin: '0px',
        minWidth: '100%',
        position: 'sticky',
        top: '185px',
      }}
    >
      {cartProducts &&
        cartProducts.map((product) => (
          <List key={product.id}>
            <ListItem
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="subtitle2" gutterBottom fontWeight="bold">
                {product.title}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Precio: $ {product.price}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Cantidad: {product.price}
              </Typography>
            </ListItem>
          </List>
        ))}
    </Container>
  );
};
