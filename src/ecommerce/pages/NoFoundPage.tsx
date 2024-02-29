import { Alert, AlertTitle, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const NoFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        display: { xs: 'flex', lg: 'flex', xl: 'flex' },
        justifyContent: {
          xs: 'start',
          md: 'center',
          lg: 'center',
          xl: 'center',
        },
        minWidth: { xs: '60%', sm: '60%', md: '50%', lg: '50%' },
        gap: 2,
        mt: 2,
      }}
    >
      <Alert
        severity="error"
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: { xs: 'start', md: 'center' },
          alignItems: 'center',
          flexWrap: 'wrap',
          backgroundColor: '#CAF0F8',
        }}
      >
        <AlertTitle
          sx={{
            display: 'flex',
            alignContent: 'center ',
            justifyContent: 'center',
            mt: 2,
          }}
        >
          <strong> Página no encontrada !!!</strong>
        </AlertTitle>

        <img
          src="/not-found.svg"
          alt="not found page"
          title="not found page"
          width={250}
        />

        <Button
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            marginX: 4,
            marginY: 2,
            minWidth: '205px',
          }}
          onClick={() => navigate('/')}
          variant="contained"
          color="success"
          size="small"
          startIcon={<ArrowBackIcon />}
        >
          Regresar
        </Button>
      </Alert>
    </Container>
  );
};
