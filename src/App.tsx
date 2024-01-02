import { BrowserRouter } from 'react-router-dom';
import { ContainerBody } from './ecommerce/components/shared/ContainerBody';
import { Header } from './ecommerce/components/shared/Header';
import { CssBaseline } from '@mui/material';

export const App = () => {
  return (
    <BrowserRouter>
      <>
        <CssBaseline />
        <Header />
        <ContainerBody />
      </>
    </BrowserRouter>
  );
};
