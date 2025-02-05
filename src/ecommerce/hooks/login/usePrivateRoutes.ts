import { useEffect } from 'react';
import { useSelectorAndDispatch } from '../useSelectorAndDispatch';
import { useNavigate } from 'react-router-dom';

export const usePrivateRoutes = () => {
  const navigate = useNavigate();
  const { users } = useSelectorAndDispatch();
  const { authenticationToken, isLogged } = users;
  const { token } = authenticationToken;

  useEffect(() => {
    if (token.length == 0) {
      navigate('/home', { replace: true });
    }
  }, [isLogged, navigate, token]);

  return {
    token,
  };
};
