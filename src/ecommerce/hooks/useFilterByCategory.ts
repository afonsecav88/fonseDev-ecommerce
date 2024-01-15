import { TProductCategoryVO } from '../store/models/IProductCategoryVO';
import { IProductEntity } from '../store/models/IProductEntity';
import { useSelectorAndDispatch } from './useSelectorAndDispatch';

export const useFilterByCategory = (category: TProductCategoryVO) => {
  const { products } = useSelectorAndDispatch();
  const { product } = products;

  const filteredProduct = (): IProductEntity[] => {
    return product.filter((itemProduct) => itemProduct.category === category);
  };

  return {
    filteredProduct,
  };
};
