import { Alert, AlertTitle, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const NoFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container maxWidth="xs">
        <Alert
          severity="info"
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <AlertTitle>Info</AlertTitle>
          <strong> Página no encontrada ! </strong>
          <Button
            onClick={() => navigate('/')}
            variant="contained"
            color="success"
            size="small"
            sx={{ marginLeft: '20px' }}
          >
            Back
          </Button>
        </Alert>
      </Container>
    </>
  );
};
