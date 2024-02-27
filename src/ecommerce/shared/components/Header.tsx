import {
  AppBar,
  Typography,
  Button,
  Container,
  Box,
  Stack,
} from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from './Logo';
import { ShoppingCart } from '../../components/ShoppingCart';
import { Search } from './Search';
import AppDrawer from '../../components/AppNavbarDrawer';
import { ListItemRouter } from '../../routes/routerDrawer';
import { UserSesion } from '../../components/login/UserSesion';

export const Header = () => {
  const listItemRouter = ListItemRouter;
  return (
    <>
      <AppBar
        position="sticky"
        color={'primary'}
        sx={{
          display: {
            xs: 'none',
            md: 'flex',
            lg: 'flex',
            xl: 'flex',
          },
          paddingX: 1,
          cursor: 'pointer',
          marginBottom: '20px',
          minWidth: '100%',
          alignItems: 'center',
          height: '75px',
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: { xs: 1, md: 1, lg: 3, xl: 4 },
            marginTop: 2,
            height: '50px',
          }}
        >
          <Typography variant="h2" sx={{ paddingLeft: 1, marginTop: '-18px' }}>
            <Link to={'/ecommerce'}>
              <Logo />
            </Link>
          </Typography>
          <Box
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
          >
            {listItemRouter.map(({ id, path, name }) => (
              <NavLink
                key={id}
                to={path.toLocaleLowerCase()}
                className={({ isActive }) =>
                  isActive ? 'nav-active' : 'disable-visited-color'
                }
              >
                <Button sx={{ color: 'white', padding: 1 }}>{name}</Button>
              </NavLink>
            ))}
          </Box>
          <Stack>
            <Search />
          </Stack>
          <Stack sx={{ marginRight: 1 }}>
            <ShoppingCart />
          </Stack>
          <Stack
            sx={{
              display: 'flex',
              gap: 0.5,
              marginRight: 4,
              marginTop: -1,
            }}
          >
            <UserSesion />
          </Stack>
        </Container>
      </AppBar>
      <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
        <AppDrawer />
      </Box>
    </>
  );
};
