import { FormEvent, useEffect } from 'react';
import { loginUserAgainBackend } from '../../store/thunks';
import { useSelectorAndDispatch } from '../useSelectorAndDispatch';
import { useNavigate } from 'react-router-dom';

export const useLoginUser = () => {
  const navigate = useNavigate();
  const { dispatch, users } = useSelectorAndDispatch();
  const { userLogin, authenticationToken, isLogged } = users;
  const { username, password } = userLogin;
  const { token } = authenticationToken;

  useEffect(() => {
    if (token.length > 0) {
      navigate('/ecommerce', { replace: true });
    }
  }, [isLogged, token, navigate]);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUserAgainBackend(userLogin));
  };

  return {
    isLogged,
    username,
    password,
    token,
    handleOnSubmit,
  };
};
