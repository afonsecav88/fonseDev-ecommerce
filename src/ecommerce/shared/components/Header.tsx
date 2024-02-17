import { AppBar, Typography, Button, Container, Box } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from './Logo';
import { ShoppingCart } from '../../components/ShoppingCart';
import { Search } from './Search';
import AppDrawer from '../../components/AppNavbarDrawer';

export const Header = () => {
  return (
    <>
      <AppBar
        position="sticky"
       color={'primary'}
        sx={{
          display: {
            xs: 'none',
            md: 'block',
            lg: 'block',
            xl: 'block',
          },
          padding: 1,
          cursor: 'pointer',
          marginBottom: '20px',
          minWidth: '100%',
          alignItems: 'center',
          height: '120px',
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: { xs: 0, md: 1, xl: 3 },
            flexWrap: 'wrap',
            marginRight: 10,
            height: '50px',
          }}
        >
          <Typography variant="h1" sx={{ flexGrow: 1 }}>
            <Link to={'/ecommerce'}>
              <Logo />
            </Link>
          </Typography>
          <Button
            color="inherit"
            component={NavLink}
            to="electronics"
            sx={{
              mt: 1,
              color: '#fff',
              '&:hover': {
                color: 'rgb(226, 194, 145)',
              },
            }}
          >
            electronics
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="jewelery"
            sx={{
              mt: 1,
              color: '#fff',
              '&:hover': {
                color: 'rgb(226, 194, 145)',
              },
            }}
          >
            jewelery
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="men-clothing"
            sx={{
              mt: 1,
              color: '#fff',
              '&:hover': {
                color: 'rgb(226, 194, 145)',
              },
            }}
          >
            men's clothing
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="women-clothing"
            sx={{
              mt: 1,
              color: '#fff',
              '&:hover': {
                color: 'rgb(226, 194, 145)',
              },
            }}
          >
            women's clothing
          </Button>
          <ShoppingCart />
        </Container>
        <Container sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
          <Search />
        </Container>
      </AppBar>

      <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
        <AppDrawer />
      </Box>
    </>
  );
};
