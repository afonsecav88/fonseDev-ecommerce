import { Avatar, Container, List, ListItem, Typography } from '@mui/material';
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
        minWidth: '5%',
        width: '250px',
        position: 'fixed',
        top: '80px',
        right: '0px',
        backgroundColor: '#CECECE',
        borderRadius: '5px',
        zIndex: '1500',
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
                maxHeight: 200,
                overflow: 'auto',
              }}
            >
              <Avatar
                sx={{ width: '80px', height: '80px' }}
                alt={product.title}
                src={product.image}
                title={product.title}
              />
              <Typography
                sx={{ width: '180px', height: '40px' }}
                variant="subtitle2"
                gutterBottom
                fontWeight="bold"
              >
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
