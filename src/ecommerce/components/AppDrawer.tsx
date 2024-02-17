import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { ListItemDrawer } from '../routes/routerDrawer';
import { NavLink } from 'react-router-dom';
import { Logo } from '../shared/components/Logo';
import { ShoppingCart } from './ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

type Anchor = 'left';

export const AppDrawer = () => {
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

  const listItemDrawer = ListItemDrawer;

  const list = (anchor: Anchor) => (
    <Box
      sx={{ auto: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <NavLink to={'/ecommerce'}>
        <Logo />
      </NavLink>
      <List>
        {listItemDrawer.map(({ id, path, icon }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-active' : 'disable-visited-color'
                }
                style={{ textDecoration: 'none' }}
                to={path.toLocaleLowerCase()}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={path} />
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ShoppingCart />
          </ListItemButton>
        </ListItem>
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
