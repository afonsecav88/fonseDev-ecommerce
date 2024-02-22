import { createTheme } from '@mui/material';

export const themeEcommerce = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    error: {
      main: '#DBB1BC',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: 'Verdana, Roboto, Raleway',
    fontSize: 12,
  },
});

themeEcommerce.typography.h6 = {
  [themeEcommerce.breakpoints.up('md')]: {
    fontFamily: 'Verdana, Roboto, Raleway',
    fontSize: '17px',
    letterSpacing: 1,
  },

  [themeEcommerce.breakpoints.between('sm', 'md')]: {
    fontFamily: 'Verdana, Roboto, Raleway',
    fontSize: '15px',
    letterSpacing: 1,
  },
  [themeEcommerce.breakpoints.down('sm')]: {
    fontFamily: 'Verdana, Roboto, Raleway',
    fontSize: '14px',
    letterSpacing: 2,
  },
};

themeEcommerce.typography.body1 = {
  [themeEcommerce.breakpoints.up('md')]: {
    fontFamily: 'Verdana, Roboto, Raleway',
    fontSize: '14px',
    letterSpacing: 1,
  },

  [themeEcommerce.breakpoints.between('sm', 'md')]: {
    fontFamily: 'Verdana, Roboto, Raleway',
    fontSize: '15px',
    letterSpacing: 1,
  },
  [themeEcommerce.breakpoints.down('sm')]: {
    fontFamily: 'Verdana, Roboto, Raleway',
    fontSize: '15px',
    letterSpacing: 2,
  },
};
