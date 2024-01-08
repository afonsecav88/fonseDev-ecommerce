import { ChangeEvent, useEffect, useState } from 'react';
import { useSelectorAndDispatch } from './useSelectorAndDispatch';
import { setTermSearch } from '../store/slices/product/productSlice';

export const useSearchProductByTitle = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { products, dispatch } = useSelectorAndDispatch();
  const { searchTermValue } = products;

  const HandleOnchange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setSearchValue(e.target.value.toLowerCase().trim());
  };

  useEffect(() => {
    dispatch(setTermSearch(searchValue));
  }, [searchValue]);

  const { product } = products;

  const searchProducts = () => {
    return product.filter(
      (product) =>
        searchTermValue &&
        product.title.toLowerCase().trim().includes(searchTermValue),
    );
  };

  return {
    searchTermValue,
    HandleOnchange,
    searchProducts,
  };
};
