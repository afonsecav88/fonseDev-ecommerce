import { Alert, AlertTitle, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const NotProductInCart = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '450px',
          gap: 2,
        }}
      >
        <Alert
          severity="info"
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <AlertTitle>
            {' '}
            <strong>Aca se mostraran tus productos </strong>
          </AlertTitle>
          <svg
            style={{ width: '200px' }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>

          <Button
            onClick={() => navigate('/')}
            variant="contained"
            color="success"
            size="small"
            sx={{ display: 'flex', marginTop: '10px' }}
          >
            Descubre productos
          </Button>
        </Alert>
      </Container>
    </>
  );
};
