import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '../shared/components/Header';
import { ListProductsInCart } from '../components/ListProductsInCart';
import { useNotifications } from '../hooks/useNotifications';

export const EcommerceLayout = () => {
  const { ToastContainer } = useNotifications();
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <ListProductsInCart />
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
