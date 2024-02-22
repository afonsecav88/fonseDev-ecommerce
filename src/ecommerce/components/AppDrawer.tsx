import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { useState } from 'react';
import { ListItemRouter } from '../routes/routerDrawer';
import { NavLink } from 'react-router-dom';
import { Logo } from '../shared/components/Logo';
import { ShoppingCart } from './ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { useUpdateProductInCart } from '../hooks/useUpdateProductInCart';
import { Button } from '@mui/material';

type Anchor = 'left';

export const AppDrawer = () => {
  const { navigate } = useUpdateProductInCart();
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const listItemRouter = ListItemRouter;

  const list = (anchor: Anchor) => (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', auto: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <NavLink to={'/ecommerce'}>
        <Logo />
      </NavLink>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginY: 2,
          gap: 2,
        }}
      >
        {listItemRouter.map(({ id, path, name, icon }) => (
          <NavLink
            key={id}
            to={path}
            className={({ isActive }) =>
              isActive ? 'nav-active' : 'disable-visited-color'
            }
          >
            <Button
              sx={{
                paddingX: 2,
                width: '100%',
                justifyContent: 'flex-start',
              }}
              color="inherit"
              fullWidth
              startIcon={icon}
            >
              {name}
            </Button>
          </NavLink>
        ))}
      </Box>
      <Divider />
      <List>
        <ListItemButton onClick={() => navigate(`cart/details`)}>
          <ListItem sx={{ display: 'flex' }}>
            <ShoppingCart />
          </ListItem>
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      <IconButton onClick={toggleDrawer('left', true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </>
  );
};
