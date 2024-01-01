import { AppBar, Toolbar, Typography } from '@mui/material';
import { SearchProduct } from '../products/SearchProduct';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

export const Header = () => {
  return (
    <AppBar
      position="sticky"
      color="primary"
      sx={{
        padding: 0,
        cursor: 'pointer',
        marginBottom: 5,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          gap: 4,
          marginRight: 10,
        }}
      >
        {routes.map(({ to, name }) => (
          <Typography
            key={to}
            variant="h5"
            sx={{
              display: 'flex',
              underline: 'none',
              ':hover': { color: '#363636' },
              padding: 3,
            }}
          >
            <NavLink
              to={to}
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              {name}
            </NavLink>
          </Typography>
        ))}

        {/* <Router>
          <Button component={} to="/">
            With prop forwarding
          </Button>
          <br />
          <Button component={}>With inlining</Button>
        </Router> */}

        {/* <Typography
          variant="h5"
          
        >
          Ecommerce
        </Typography>
        <Typography
          sx={{
            ':hover': { color: '#363636' },
          }}
          variant="h6"
        >
          Hola
        </Typography>
        <Typography
          sx={{
            ':hover': { color: '#363636' },
          }}
          variant="h6"
        >
          Hola
        </Typography>
        <Typography
          sx={{
            ':hover': { color: '#363636' },
          }}
          variant="h6"
        >
          Hola
        </Typography>
        <Typography
          sx={{
            ':hover': { color: '#363636' },
          }}
          variant="h6"
        >
          Hola
        </Typography> */}

        <SearchProduct />
      </Toolbar>
    </AppBar>
  );
};
