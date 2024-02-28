import { useSelectorAndDispatch } from './useSelectorAndDispatch';
import { ProductEntity } from '../store/models/ProductEntity';
import { useSearchContext } from './useSearchContext';
import { useCallback, useEffect } from 'react';

export const useSearchProductByTitle = () => {
  const { products } = useSelectorAndDispatch();
  const { searchTermValue } = useSearchContext();
  const { product } = products;

  const searchProducts = useCallback((): ProductEntity[] => {
    return product.filter(
      (product: ProductEntity) =>
        searchTermValue &&
        product.title.toLowerCase().trim().includes(searchTermValue),
    );
  }, [product, searchTermValue]);

  useEffect(() => {
    searchProducts();
  }, [searchProducts, product, searchTermValue]);

  return {
    searchProducts,
  };
};
