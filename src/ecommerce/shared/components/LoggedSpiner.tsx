import { Container, CircularProgress } from '@mui/material';

export const LoggedSpiner = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
        paddingTop: 10,
        backgroundColor: 'white',
      }}
    >
      <CircularProgress sx={{ display: 'flex' }} color="success" />
    </Container>
  );
};
