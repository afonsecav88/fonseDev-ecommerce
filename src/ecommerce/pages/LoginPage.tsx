import { Box, Container } from '@mui/material';

import { Login } from '../components/login/Login';

export const LoginPage = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '200px',
        width: '400px',
        marginTop: '200px',
        gap: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'warning.main',
          maxHeight: '285px',
          padding: 3,
          marginY: 2,
          borderRadius: 3,
        }}
      >
        <Login />
      </Box>
    </Container>
  );
};
