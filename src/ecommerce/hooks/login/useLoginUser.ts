import { FormEvent, useEffect } from 'react';
import { loginUserAgainBackend } from '../../store/thunks';
import { useSelectorAndDispatch } from '../useSelectorAndDispatch';
import { useNavigate } from 'react-router-dom';

export const useLoginUser = () => {
  const navigate = useNavigate();
  const { dispatch, users } = useSelectorAndDispatch();
  const { userLogin, isLogged, autenticationToken } = users;
  const { username, password } = userLogin;
  const { token } = autenticationToken;

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUserAgainBackend(userLogin));
    console.log('guarde el token');
  };

  useEffect(() => {
    localStorage.setItem('userToken', token);
    if (token.length > 0) {
      return navigate('/ecommerce', { replace: true });
    }
  }, [isLogged, navigate, token]);

  return {
    username,
    password,
    handleOnSubmit,
  };
};
