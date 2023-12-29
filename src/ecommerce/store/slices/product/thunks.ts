import { UnknownAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { setAllProducts, setLoadingProducts } from './productSlice';
import { productsApi } from '../../../../api/productsApi';
import { Product } from '../../../interfaces/interfaces';

export const getAllProducts = () => {
  return async (dispatch: Dispatch<UnknownAction>) => {
    dispatch(setLoadingProducts());
    const allProducts = await productsApi.get<Product[]>(`/products`);
    const { data } = await allProducts;
    dispatch(setAllProducts(data));
  };
};
