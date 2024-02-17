import { ProductEntity } from '../store/models/ProductEntity';
import { useSelectorAndDispatch } from './useSelectorAndDispatch';

export const useGetProductById = () => {
  const { products } = useSelectorAndDispatch();
  const { product } = products;

  const productGetById = (id: number) => {
    return product.find((product: ProductEntity) => product.id === +id);
  };

  return { productGetById };
};
