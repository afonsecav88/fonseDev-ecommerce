import { TProductCategoryVO } from "./IProductCategoryVO";
import { IProductEntity } from "./IProductEntity";

export interface IProductsInitialState {
    isLoading: boolean;
    searchTermValue?: string;
    category?: TProductCategoryVO;
    product: IProductEntity[];
  }