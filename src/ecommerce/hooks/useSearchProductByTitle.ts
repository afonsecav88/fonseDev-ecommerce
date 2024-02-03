import { useSelectorAndDispatch } from './useSelectorAndDispatch';

import { ProductEntity } from '../store/models/ProductEntity';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

export const useSearchProductByTitle = () => {
  const { products } = useSelectorAndDispatch();

  const { product } = products;

  const { searchTermValue } = useContext(SearchContext);
  const searchProducts = () => {
    return product.filter(
      (product: ProductEntity) =>
        searchTermValue &&
        product.title.toLowerCase().trim().includes(searchTermValue),
    );
  };
  return {
    searchTermValue,
    searchProducts,
  };
};
