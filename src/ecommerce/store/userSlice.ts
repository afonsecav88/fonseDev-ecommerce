import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserLoginInitialState } from './models/UserLoginInitialState';
import { AutenticationToken } from './models/AutenticationToken';

const initialState: UserLoginInitialState = {
  isLogin: false,
  autenticationToken: { token: localStorage.getItem('userToken') || '' },
  userLogin: {
    username: 'johnd',
    password: 'm38rmF$',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoginState: (state) => {
      state.isLogin = true;
    },
    loginUser: (state, action: PayloadAction<AutenticationToken>) => {
      setLoginState();
      state.autenticationToken = action.payload;
    },
  },
});

export const { setLoginState, loginUser } = userSlice.actions;
