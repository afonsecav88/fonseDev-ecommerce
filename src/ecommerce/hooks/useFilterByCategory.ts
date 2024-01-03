import { useSelectorAndDispatch } from './useSelectorAndDispatch';
import { filterByCategory } from '../store/slices/product/productSlice';
import { useEffect } from 'react';

export const useFilterByCategory = (category: string) => {
  const { dispatch, products } = useSelectorAndDispatch();
  const { product, isLoading } = products;

  useEffect(() => {
    dispatch(filterByCategory(category));
  }, []);

  return {
    product,
    isLoading,
  };
  // switch (product[0].category) {
  //   case `'electronics'`:
  //     return dispatch(filterByCategory('electronics'));
  //   case `'jewelery'`:
  //     return dispatch(filterByCategory('jewelery'));
  //   case `men's clothing`:
  //     return dispatch(filterByCategory(`men's clothing`));
  //   case `women's clothing`:
  //     return dispatch(filterByCategory(`women's clothing`));
  //   default:
  //     break;
  // }
};
