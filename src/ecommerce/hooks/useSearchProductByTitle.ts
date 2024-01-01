import { useSelectorAndDispatch } from './useSelectorAndDispatch';
import { searchProduct } from '../store/slices/product/productSlice';
import { ChangeEvent } from 'react';

export const useSearchProductByTitle = () => {
  const { dispatch, products } = useSelectorAndDispatch();
  const { product } = products;

  const HandleOnchange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const { value } = e.target;
    const termSearch = value.trim().toLowerCase();
    dispatch(searchProduct(termSearch));
  };
  return {
    product,
    HandleOnchange,
  };
};
