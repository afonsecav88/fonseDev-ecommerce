import { Alert, AlertTitle } from '@mui/material';

export const NotProductsLoaded = () => {
  return (
    <Alert severity="info">
      <AlertTitle>Info</AlertTitle>
      <strong> No se encontraron productos ! </strong>
    </Alert>
  );
};
