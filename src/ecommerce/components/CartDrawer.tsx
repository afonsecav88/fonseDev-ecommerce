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
} from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../shared/components/Logo';
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
          width: '281px',
          height: '50px',
          right: '10px',
          position: 'fixed',
        }}
        icon={<ShoppingCartCheckoutIcon />}
        color="primary"
        label="Ver productos en el carrito"
        variant="outlined"
        onClick={() => setOpen(true)}
      />

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        {/* <ProductInCartCard cartProducts={cartProducts} /> */}

        <Box sx={{ auto: 250 }} role="presentation">
          <NavLink to={'/ecommerce'}>
            <Logo />
          </NavLink>
          <List>
            {cartProducts.map(({ id, count, image, price, title }) => (
              <ListItem key={id} disablePadding>
                <ListItemButton>
                  {/* <NavLink
                    className={({ isActive }) =>
                      isActive ? 'nav-active' : 'disable-visited-color'
                    }
                    style={{ textDecoration: 'none' }}
                    to={path.toLocaleLowerCase()}
                  > */}
                  <ListItemIcon>{image}</ListItemIcon>
                  <ListItemText primary={title} />
                  {/* </NavLink> */}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItemButton onClick={() => navigate(`cart/details`)}>
              <ListItem sx={{ display: 'flex' }}>
                <ShoppingCart />
              </ListItem>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </Container>
  );
};
