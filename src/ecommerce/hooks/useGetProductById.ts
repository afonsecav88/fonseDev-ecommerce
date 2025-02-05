import { useSelectorAndDispatch } from './useSelectorAndDispatch';
import { ProductEntity } from '../store/models/ProductEntity';

export const useGetProductById = () => {
  const { products } = useSelectorAndDispatch();
  const { isLoading } = products;
  const { product } = products;

  const productGetById = (id: number) => {
    if (!product) return null;
    const foundProduct = product.find((p: ProductEntity) => p.id === id);
    return foundProduct;
  };

  return { productGetById, isLoading };
};
