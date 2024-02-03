import { ProductCategory as ProductCategory } from './ProductCategory';
import { ProductEntity } from './ProductEntity';

export interface ProductsInitialState {
  isLoading: boolean;
  category?: ProductCategory;
  product: ProductEntity[];
}
