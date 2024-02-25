import { Typography, TextField, Button } from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { useLoginUser } from '../../hooks/login/useLoginUser';

export const Login = () => {
  const { username, password, handleOnSubmit } = useLoginUser();

  return (
    <>
      <Typography
        variant="button"
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <SentimentSatisfiedAltIcon />
      </Typography>
      <form
        autoComplete="false"
        onSubmit={(e) => handleOnSubmit(e)}
        className="form-login"
      >
        <label htmlFor="username">
          <Typography variant="h6">Login : </Typography>
        </label>

        <TextField
          sx={{ width: { xs: 150, sm: 200, md: 300 } }}
          id="username"
          label="username"
          type="text"
          value={username}
          autoComplete="false"
        />

        <TextField
          sx={{ width: { xs: 150, sm: 200, md: 300 } }}
          id="password"
          label="password"
          type="password"
          value={password}
          autoComplete="false"
        />

        <Button type="submit" variant="contained" color="primary">
          Iniciar Sesión
        </Button>
      </form>
    </>
  );
};
