import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '../shared/components/Header';

import { useNotifications } from '../hooks/useNotifications';
import { Zoom } from 'react-toastify';
import { ListProductsInCart } from '../components/ListProductsInCart';
import { usePrivateRoutes } from '../hooks/login/usePrivateRoutes';
import { LoggedSpiner } from '../shared/components/LoggedSpiner';

export const EcommerceLayout = () => {
  const { ToastContainer } = useNotifications();
  const { token } = usePrivateRoutes();

  if (token.length == 0) {
    return <LoggedSpiner />;
  }
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
          justifyContent: {
            xs: 'center',
            sm: 'center',
            md: 'center',
            lg: 'center',
          },
        }}
      >
        <Outlet />
      </Container>
    </>
  );
};
