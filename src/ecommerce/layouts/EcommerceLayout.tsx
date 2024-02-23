import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '../shared/components/Header';
import { ListProductsInCart } from '../components/ListProductsInCart';
import { useNotifications } from '../hooks/useNotifications';
import { Zoom } from 'react-toastify';

export const EcommerceLayout = () => {
  const { ToastContainer } = useNotifications();
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
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
