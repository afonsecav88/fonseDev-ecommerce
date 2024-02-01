import { ProductCategory as ProductCategory } from './ProductCategory';
import { ProductEntity } from './ProductEntity';

export interface ProductsInitialState {
  isLoading: boolean;
  searchTermValue?: string;
  category?: ProductCategory;
  product: ProductEntity[];
}
