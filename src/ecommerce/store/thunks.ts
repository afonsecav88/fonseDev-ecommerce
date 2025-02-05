import { UnknownAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { setAllProducts, setLoadingProducts } from './productSlice';
import { ProductEntity } from './models/ProductEntity';
import { productsApi } from '../shared/api/productsApi';
import { UserLogin } from './models/UserLogin';
import { loginUser, setLoggedState } from './userSlice';
import { AuthenticationToken } from './models/AuthenticationToken';

export const getAllProducts = () => {
  return async (dispatch: Dispatch<UnknownAction>) => {
    dispatch(setLoadingProducts(true));
    await productsApi
      .get<ProductEntity[]>(`/products`)
      .then(({ data }) => {
        dispatch(setAllProducts(data));
      })
      .finally(() => dispatch(setLoadingProducts(false)))
      .catch((error: Error) => {
        throw new Error(`Ha ocurrido un error  ${error.message} `);
      });
  };
};

export const loginUserAgainBackend = (userCredentials: UserLogin) => {
  return async (dispatch: Dispatch<UnknownAction>) => {
    await productsApi
      .post<AuthenticationToken>(`/auth/login`, userCredentials)
      .then(({ data }) => {
        dispatch(loginUser(data));
        const { token } = data;
        localStorage.setItem('userToken', token);
      })
      .catch((error: Error) => {
        throw new Error(`Ha ocurrido un error  ${error} `);
      })
      .finally(() => {
        dispatch(setLoggedState(true));
      });
  };
};
