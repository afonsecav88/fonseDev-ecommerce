import { FormEvent, useEffect } from 'react';
import { loginUserAgainBackend } from '../../store/thunks';
import { useSelectorAndDispatch } from '../useSelectorAndDispatch';
import { useNavigate } from 'react-router-dom';

export const useLoginUser = () => {
  const navigate = useNavigate();
  const { dispatch, users } = useSelectorAndDispatch();
  const { userLogin, autenticationToken } = users;
  const { username, password } = userLogin;
  const { token } = autenticationToken;

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    dispatch(loginUserAgainBackend(userLogin));
    e.preventDefault();
  };

  useEffect(() => {
    if (token.length > 0) {
      localStorage.setItem('userToken', token);
      return navigate('/ecommerce');
    }
  }, [token]);

  return {
    username,
    password,
    handleOnSubmit,
  };
};
