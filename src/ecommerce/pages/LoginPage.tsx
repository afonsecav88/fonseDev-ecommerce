import { Box, Button, Container, TextField, Typography } from '@mui/material';

import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

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
        <Typography
          variant="button"
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <SentimentSatisfiedAltIcon />
        </Typography>
        <form className="form-login">
          <label htmlFor="user">
            <Typography variant="h6">Login : </Typography>
          </label>

          <TextField
            sx={{ width: { xs: 150, sm: 200, md: 300 } }}
            id="user"
            label="user"
            type="text"
            value="hola"
            onChange={() => {}}
          />

          <TextField
            sx={{ width: { xs: 150, sm: 200, md: 300 } }}
            id="password"
            label="password"
            type="password"
            value="hola"
            onChange={() => {}}
          />

          <Button type="submit" variant="contained" color="primary">
            Iniciar Sesión
          </Button>
        </form>
      </Box>
    </Container>
  );
};
