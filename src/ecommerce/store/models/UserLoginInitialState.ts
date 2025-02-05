import { AuthenticationToken } from './AuthenticationToken';
import { UserLogin } from './UserLogin';

export interface UserLoginInitialState {
  authenticationToken: AuthenticationToken;
  isLogged: boolean;
  userLogin: UserLogin;
}
