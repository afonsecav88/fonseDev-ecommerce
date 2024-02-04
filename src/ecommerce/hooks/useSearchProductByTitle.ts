import { useSelectorAndDispatch } from './useSelectorAndDispatch';
import { ProductEntity } from '../store/models/ProductEntity';
import { useSearchContext } from './useSearchContext';

export const useSearchProductByTitle = () => {
  const { products } = useSelectorAndDispatch();
  const { searchTermValue } = useSearchContext();

  const { product } = products;

  const searchProducts = (): ProductEntity[] => {
    return product.filter(
      (product: ProductEntity) =>
        searchTermValue &&
        product.title.toLowerCase().trim().includes(searchTermValue),
    );
  };

  return {
    searchProducts,
  };
};
