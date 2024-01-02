import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import { SearchProduct } from '../products/SearchProduct';
import { Logo } from './Logo';

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
            <Logo />
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

          <SearchProduct />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
