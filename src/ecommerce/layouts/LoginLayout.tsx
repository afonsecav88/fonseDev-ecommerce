import { Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const LoginLayout = () => {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          backgroundColor: 'info.light',
          minHeight: '100vh',
          minWidth: '120%wh',
          margin: 0,
          padding: 0,
        }}
      >
        <Outlet />
      </Container>
    </>
  );
};
