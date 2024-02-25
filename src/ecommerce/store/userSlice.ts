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
    setLoggedState: (state, action: PayloadAction<boolean>) => {
      state.isLogged === action.payload;
    },
    removeTokenInLocalStorage: (state) => {
      state.autenticationToken.token = '';
      localStorage.removeItem('userToken');
    },
    loginUser: (state, action: PayloadAction<AutenticationToken>) => {
      state.autenticationToken = action.payload;
    },
  },
});

export const { setLoggedState, loginUser, removeTokenInLocalStorage } =
  userSlice.actions;
