import { Product } from '../interfaces/interfaces';
import { useSelectorAndDispatch } from './useSelectorAndDispatch';

export const useFilterByCategory = (category: string) => {
  const { products } = useSelectorAndDispatch();
  const { product } = products;

  const filteredProduct = (): Product[] => {
    return product.filter((itemProduct) => itemProduct.category === category);
  };

  return {
    filteredProduct,
  };
};
