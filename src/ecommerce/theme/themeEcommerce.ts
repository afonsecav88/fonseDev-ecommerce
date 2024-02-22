import { createTheme } from '@mui/material';

export const themeEcommerce = createTheme({
  palette: {
    mode: 'light',
    primary: {
      // main: '#1976d2',
      main: '#118ab2',
    },
    secondary: {
      main: '#9c27b0',
    },
    error: {
      main: '#DBB1BC',
    },
    info: {
      main: '#caf0f8',
    },
    success: {
      main: '#81b29a',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: 'Aptos,Verdana, Roboto, Raleway',
    fontSize: 13,
  },
});

themeEcommerce.typography.h6 = {
  [themeEcommerce.breakpoints.up('md')]: {
    fontFamily: 'Aptos,Verdana, Roboto, Raleway',
    fontSize: '17px',
    letterSpacing: 1,
  },

  [themeEcommerce.breakpoints.between('sm', 'md')]: {
    fontFamily: 'Aptos,Verdana, Roboto, Raleway',
    fontSize: '15px',
    letterSpacing: 1,
  },
  [themeEcommerce.breakpoints.down('sm')]: {
    fontFamily: 'Aptos,Verdana, Roboto, Raleway',
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
