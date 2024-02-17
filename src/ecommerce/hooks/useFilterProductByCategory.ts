import { useEffect } from 'react';
import { ProductCategory } from '../store/models/ProductCategory';
import { ProductEntity } from '../store/models/ProductEntity';
import { getAllProducts } from '../store/thunks';
import { useSelectorAndDispatch } from './useSelectorAndDispatch';

export const useFilterProductByCategory = (category: ProductCategory) => {
  const { products, dispatch } = useSelectorAndDispatch();
  const { product } = products;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const filteredProduct = (): ProductEntity[] => {
    return product.filter(
      (itemProduct: ProductEntity) => itemProduct.category === category,
    );
  };

  return {
    filteredProduct,
  };
};
