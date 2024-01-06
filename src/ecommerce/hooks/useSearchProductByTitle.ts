import { ChangeEvent, useState } from 'react';
import { useSelectorAndDispatch } from './useSelectorAndDispatch';

export const useSearchProductByTitle = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { products } = useSelectorAndDispatch();
  const { product } = products;

  const HandleOnchange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setSearchValue(e.target.value.toLowerCase().trim());
  };

  const searchProducts = product.filter(product =>
    product.title.toLowerCase().trim().includes(searchValue),
  );

  return {
    searchProducts,
    searchValue,
    HandleOnchange,
  };
};
