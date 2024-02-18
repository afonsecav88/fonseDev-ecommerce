import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { themeEcommerce } from './index';

interface EcommerceThemeProps {
  children: JSX.Element | JSX.Element[];
}

export const EcommerceTheme = ({ children }: EcommerceThemeProps) => {
  return (
    <ThemeProvider theme={themeEcommerce}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
