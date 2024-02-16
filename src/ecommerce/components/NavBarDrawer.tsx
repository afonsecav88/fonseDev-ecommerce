import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import { ListItemDrawer } from '../routes/routerDrawer';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from '../shared/components/Logo';
import { ShoppingCart } from './ShoppingCart';
import { Search } from '../shared/components/Search';

type Anchor = 'left';

export default function NavBarDrawer() {
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
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={path} />
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
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
