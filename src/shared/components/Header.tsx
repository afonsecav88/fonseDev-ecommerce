import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { routes } from './routes';
import { Logo } from './Logo';
import { ShoppingCart } from '../../ecommerce/components/ShoppingCart';

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
            <Link to={'/home'}>
              <Logo />
            </Link>
          </Typography>
          {routes.map(({ to, name }) => (
            <Button
              key={to}
              color="inherit"
              component={NavLink}
              to={to}
              sx={{
                mt: 3.5,
                color: '#fff',
                '&:hover': {
                  color: 'rgb(226, 194, 145)',
                },
              }}
            >
              {name}
            </Button>
          ))}
          <ShoppingCart />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
