import {
  Container,
  Drawer,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Chip,
  Avatar,
  Typography,
} from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useState } from 'react';
import { ShoppingCart } from './ShoppingCart';
import { useUpdateProductInCart } from '../hooks/useUpdateProductInCart';
import { CartProduct } from '../store/models/CartProducts';

interface ProductInCartProps {
  cartProducts: CartProduct[];
}

export const CartDrawer = ({ cartProducts }: ProductInCartProps) => {
  const { navigate } = useUpdateProductInCart();
  const [open, setOpen] = useState(false);

  return (
    <Container sx={{ display: 'grid', gap: 4 }}>
      <Chip
        sx={{
          float: 'right',
          width: '200px',
          height: '50px',
          right: '10px',
          position: 'fixed',
          marginBottom: 10,
        }}
        icon={<ShoppingCartCheckoutIcon />}
        color="primary"
        label="Ver carrito"
        variant="outlined"
        onClick={() => setOpen(true)}
      />

      <Drawer
        sx={{ display: 'flex' }}
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        {/* <ProductInCartCard cartProducts={cartProducts} /> */}

        <Box
          sx={{ display: 'flex', flexDirection: 'column', auto: 250 }}
          role="presentation"
        >
          <List>
            <ListItemButton onClick={() => navigate(`cart/details`)}>
              <ListItem sx={{ display: 'flex', gap: 3 }}>
                <ShoppingCart />

                <ListItemText>
                  {' '}
                  <strong> Ver detalles de los productos en el carrito</strong>
                </ListItemText>
              </ListItem>
            </ListItemButton>
          </List>
          <Divider />
          <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {cartProducts.map(({ id, count, image, price, title }) => (
              <div key={id}>
                <ListItem disablePadding>
                  <Avatar src={image} sx={{ marginX: 2 }} />
                  <ListItemText
                    sx={{ width: '140px', marginX: 2 }}
                    primary={title}
                  />
                  <ListItemText sx={{ width: '120px', marginX: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Precio: $ </strong> {price}
                    </Typography>
                  </ListItemText>

                  <ListItemText sx={{ width: '120px', marginX: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Cantidad:</strong> {count}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </Box>
      </Drawer>
    </Container>
  );
};
