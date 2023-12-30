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
    console.log(dispatch(searchProduct(value)));
  };
  return {
    product,
    HandleOnchange,
  };
};
