import { Alert, AlertTitle, Container } from '@mui/material';

export const NotProductsLoaded = () => {
  return (
    <Container maxWidth="xs">
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        <strong> No se encontraron productos ! </strong>
      </Alert>
    </Container>
  );
};
