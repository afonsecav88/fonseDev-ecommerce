import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserLoginInitialState } from './models/UserLoginInitialState';
import { AuthenticationToken } from './models/AuthenticationToken';

const initialState: UserLoginInitialState = {
  isLogged: false,
  authenticationToken: { token: localStorage.getItem('userToken') || '' },
  userLogin: {
    username: 'johnd',
    password: 'm38rmF$',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedState: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
    removeTokenInLocalStorage: (state) => {
      state.authenticationToken.token = '';
      localStorage.removeItem('userToken');
    },
    loginUser: (state, action: PayloadAction<AuthenticationToken>) => {
      state.authenticationToken = action.payload;
    },
  },
});

export const { setLoggedState, loginUser, removeTokenInLocalStorage } =
  userSlice.actions;
