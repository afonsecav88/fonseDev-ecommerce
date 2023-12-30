import { UnknownAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { setAllProducts, setLoadingProducts } from './productSlice';
import { productsApi } from '../../../../api/productsApi';
import { Product } from '../../../interfaces/interfaces';

export const getAllProducts = () => {
  return async (dispatch: Dispatch<UnknownAction>) => {
    dispatch(setLoadingProducts());
    await productsApi
      .get<Product[]>(`/products`)
      .then(({ data }) => {
        dispatch(setAllProducts(data));
      })
      .catch((error: Error) => {
        throw new Error(`Ha ocurrido un error  ${error.message} `);
      });
  };
};
