import { Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '../shared/components/Header';

export const EcommerceLayout = () => {
  return (
    <>
      <CssBaseline />
      <Header />
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
