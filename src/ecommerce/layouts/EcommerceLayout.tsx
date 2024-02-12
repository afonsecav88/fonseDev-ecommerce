import { Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '../shared/components/Header';
import { AddedProductsToCart } from '../components/AddedProductsToCart';

export const EcommerceLayout = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <AddedProductsToCart />
      <Container
        sx={{
          display: 'flex',
          gap: 5,
          flexWrap: 'wrap',
        }}
      >
        <Outlet />
      </Container>
    </>
  );
};
