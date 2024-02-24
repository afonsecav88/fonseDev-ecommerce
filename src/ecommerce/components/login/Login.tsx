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
      <form onSubmit={(e) => handleOnSubmit(e)} className="form-login">
        <label htmlFor="user">
          <Typography variant="h6">Login : </Typography>
        </label>

        <TextField
          sx={{ width: { xs: 150, sm: 200, md: 300 } }}
          id="user"
          label="user"
          type="text"
          value={username}
        />

        <TextField
          sx={{ width: { xs: 150, sm: 200, md: 300 } }}
          id="password"
          label="password"
          type="password"
          value={password}
        />

        <Button type="submit" variant="contained" color="primary">
          Iniciar Sesión
        </Button>
      </form>
    </>
  );
};
