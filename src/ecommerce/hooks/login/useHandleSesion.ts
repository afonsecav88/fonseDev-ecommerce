import { useNavigate } from 'react-router-dom';
import { useSelectorAndDispatch } from '../useSelectorAndDispatch';
import { setTokenLocalStorage } from '../../store/userSlice';

export const useHandleSesion = () => {
  const navigate = useNavigate();
  const { users, dispatch } = useSelectorAndDispatch();
  const { userLogin, isLogged } = users;
  const { username } = userLogin;

  const handleOnClick = () => {
    dispatch(setTokenLocalStorage());
    navigate('/home');
  };

  return {
    username,
    handleOnClick,
    isLogged,
  };
};
