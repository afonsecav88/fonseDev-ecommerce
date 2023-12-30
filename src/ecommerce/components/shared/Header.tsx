import { AppBar, Toolbar, Typography } from '@mui/material';
import { SearchProduct } from '../products/SearchProduct';

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
        <Typography
          variant="h5"
          sx={{
            display: 'flex',
            flexGrow: 1,
            ':hover': { color: '#363636' },
            padding: 3,
          }}
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
        </Typography>

        <SearchProduct />
      </Toolbar>
    </AppBar>
  );
};
