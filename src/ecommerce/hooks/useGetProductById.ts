import { IProductEntity } from '../store/models/IProductEntity';
import { useSelectorAndDispatch } from './useSelectorAndDispatch';

export const useGetProductById = (id: number) => {
  const { products } = useSelectorAndDispatch();
  const { product } = products;

  const productGetById = product.find((product: IProductEntity) => product.id === +id);

  return {
    productGetById,
  };
};
