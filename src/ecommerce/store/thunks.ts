import { UnknownAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { setAllProducts, setLoadingProducts } from './productSlice';
import { ProductEntity } from './models/ProductEntity';
import { productsApi } from '../shared/api/productsApi';
import { UserLogin } from './models/UserLogin';
import { loginUser, setLoggedState } from './userSlice';
import { AutenticationToken } from './models/AutenticationToken';

export const getAllProducts = () => {
  return async (dispatch: Dispatch<UnknownAction>) => {
    dispatch(setLoadingProducts());
    await productsApi
      .get<ProductEntity[]>(`/products`)
      .then(({ data }) => {
        dispatch(setAllProducts(data));
      })
      .catch((error: Error) => {
        throw new Error(`Ha ocurrido un error  ${error.message} `);
      });
  };
};

export const loginUserAgainBackend = (userCredentials: UserLogin) => {
  return async (dispatch: Dispatch<UnknownAction>) => {
    await productsApi
      .post<AutenticationToken>(`/auth/login`, userCredentials)
      .then(({ data }) => {
        dispatch(loginUser(data));
        dispatch(setLoggedState(true));
      })
      .catch((error: Error) => {
        throw new Error(`Ha ocurrido un error  ${error} `);
      });
  };
};
