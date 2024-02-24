import { AutenticationToken } from './AutenticationToken';
import { UserLogin } from './UserLogin';

export interface UserLoginInitialState {
  autenticationToken: AutenticationToken;
  isLogin: boolean;
  userLogin: UserLogin;
}
