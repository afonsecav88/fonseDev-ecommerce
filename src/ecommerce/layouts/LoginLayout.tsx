import { Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useLoginUser } from '../hooks/login/useLoginUser';
import { LoggedSpiner } from '../shared/components/LoggedSpiner';

export const LoginLayout = () => {
  const { token } = useLoginUser();

  if (token.length > 0) {
    return <LoggedSpiner />;
  }

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          backgroundColor: 'primary.main',
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
