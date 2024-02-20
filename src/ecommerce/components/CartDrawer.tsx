import {
  Container,
  Button,
  Drawer,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';
import { useSelectorAndDispatch } from '../hooks/useSelectorAndDispatch';
import { NavLink } from 'react-router-dom';
import { Logo } from '../shared/components/Logo';
import { ShoppingCart } from './ShoppingCart';
import { useUpdateProductInCart } from '../hooks/useUpdateProductInCart';

export default function CartDrawer() {
  const { navigate } = useUpdateProductInCart();
  const { cartsProducts } = useSelectorAndDispatch();
  const { cartProducts } = cartsProducts;
  const [open, setOpen] = useState(false);

  return (
    <Container sx={{ display: 'grid', gap: 4 }}>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>

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
}
