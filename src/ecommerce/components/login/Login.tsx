import { Typography, TextField, Button } from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { loginUserAgainBackend } from '../../store/thunks';
import { FormEvent } from 'react';
import { useSelectorAndDispatch } from '../../hooks/useSelectorAndDispatch';

export const Login = () => {
  const { dispatch, users } = useSelectorAndDispatch();
  const { userLogin } = users;
  const { username, password } = userLogin;
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUserAgainBackend(userLogin));
  };

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
          onChange={() => {}}
        />

        <TextField
          sx={{ width: { xs: 150, sm: 200, md: 300 } }}
          id="password"
          label="password"
          type="password"
          value={password}
          onChange={() => {}}
        />

        <Button type="submit" variant="contained" color="primary">
          Iniciar Sesión
        </Button>
      </form>
    </>
  );
};
