import { Box, Container, TextField } from '@mui/material';

export const LoginPage = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '60vh',
        width: '100%',
        marginTop: '200px',
        gap: 2,
      }}
    >
      <Box>
        <form className="form-login">
          <label htmlFor="user"> Login : </label>
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
        </form>
      </Box>
    </Container>
  );
};
