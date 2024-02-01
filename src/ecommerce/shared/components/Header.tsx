import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from './Logo';
import { ShoppingCart } from '../../components/ShoppingCart';

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
        <Toolbar
          sx={{
            display: 'flex',
            gap: 4,
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};
