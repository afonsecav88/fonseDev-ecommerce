import { UnknownAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { setAllProducts, setLoadingProducts } from './productSlice';
import { productsApi } from '../../shared/api/productsApi';
import { IProductEntity } from './models/IProductEntity';

export const getAllProducts = () => {
  return async (dispatch: Dispatch<UnknownAction>) => {
    dispatch(setLoadingProducts());
    await productsApi
      .get<IProductEntity[]>(`/products`)
      .then(({ data }) => {
        dispatch(setAllProducts(data));
      })
      .catch((error: Error) => {
        throw new Error(`Ha ocurrido un error  ${error.message} `);
      });
  };
};
