import { AppBar, Typography, Button, Container } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from './Logo';
import { ShoppingCart } from '../../components/ShoppingCart';
import { Search } from './Search';

export const Header = () => {
  return (
    <AppBar
      position="sticky"
      color="primary"
      sx={{
        padding: 1,
        cursor: 'pointer',
        marginBottom: 5,
      }}
    >
      <Container maxWidth="xl">
        <Container
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            gap: { xs: 0, md: 4 },
            flexWrap: 'wrap',
            marginRight: 10,
          }}
        >
          <Typography variant="h6" sx={{ ml: 1, flexGrow: 1 }}>
            <Link to={'/ecommerce'}>
              <Logo />
            </Link>
          </Typography>
          <Button
            color="inherit"
            component={NavLink}
            to="electronics"
            sx={{
              mt: 3.5,
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
              mt: 3.5,
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
              mt: 3.5,
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
              mt: 3.5,
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
        <Container sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <Search />
        </Container>
      </Container>
    </AppBar>
  );
};
