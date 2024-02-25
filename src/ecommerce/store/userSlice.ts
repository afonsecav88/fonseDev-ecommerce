import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserLoginInitialState } from './models/UserLoginInitialState';
import { AutenticationToken } from './models/AutenticationToken';

const initialState: UserLoginInitialState = {
  isLogged: false,
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
      state.isLogged = true;
    },
    loginUser: (state, action: PayloadAction<AutenticationToken>) => {
      state.autenticationToken = action.payload;
    },
  },
});

export const { setLoginState, loginUser } = userSlice.actions;
