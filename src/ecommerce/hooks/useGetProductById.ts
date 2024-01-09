import { Product } from '../interfaces/interfaces';
import { useSelectorAndDispatch } from './useSelectorAndDispatch';

export const useGetProductById = (id: number) => {
  const { products } = useSelectorAndDispatch();
  const { product } = products;

  const productGetById = product.find((product: Product) => product.id === +id);

  return {
    productGetById,
  };
};
