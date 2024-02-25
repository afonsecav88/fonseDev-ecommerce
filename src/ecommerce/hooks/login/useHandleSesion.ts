import { useNavigate } from 'react-router-dom';
import { useSelectorAndDispatch } from '../useSelectorAndDispatch';
import {
  removeTokenInLocalStorage,
  setLoggedState,
} from '../../store/userSlice';

export const useHandleSesion = () => {
  const navigate = useNavigate();
  const { users, dispatch } = useSelectorAndDispatch();
  const { userLogin, isLogged } = users;
  const { username } = userLogin;

  const handleOnClick = () => {
    dispatch(removeTokenInLocalStorage());
    dispatch(setLoggedState(false));
    navigate('/home');
  };

  return {
    username,
    handleOnClick,
    isLogged,
  };
};
