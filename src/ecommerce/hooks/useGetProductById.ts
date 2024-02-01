import { ProductEntity } from '../store/models/ProductEntity';
import { useSelectorAndDispatch } from './useSelectorAndDispatch';

export const useGetProductById = (id: number) => {
  const { products } = useSelectorAndDispatch();
  const { product } = products;

  const productGetById = product.find(
    (product: ProductEntity) => product.id === +id,
  );

  return {
    productGetById,
  };
};
