import { ProductCategory } from '../store/models/ProductCategory';
import { ProductEntity } from '../store/models/ProductEntity';
import { useSelectorAndDispatch } from './useSelectorAndDispatch';

export const useFilterByCategory = (category: ProductCategory) => {
  const { products } = useSelectorAndDispatch();
  const { product } = products;

  const filteredProduct = (): ProductEntity[] => {
    return product.filter((itemProduct) => itemProduct.category === category);
  };

  return {
    filteredProduct,
  };
};
