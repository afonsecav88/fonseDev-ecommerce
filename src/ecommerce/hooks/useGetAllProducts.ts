import { useEffect } from 'react';
import { useSelectorAndDispatch } from './useSelectorAndDispatch';
import { getAllProducts } from '../store/thunks';

export const useGetAllProducts = () => {
  const { dispatch, products } = useSelectorAndDispatch();
  const { isLoading, product } = products;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return {
    isLoading,
    product,
  };
};
