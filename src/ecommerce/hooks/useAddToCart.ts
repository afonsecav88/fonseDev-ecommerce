import { addProduct } from '../store/cartSlice';
import { ProductEntity } from '../store/models/ProductEntity';
import { decrementProduct } from '../store/productSlice';
import { useSelectorAndDispatch } from './useSelectorAndDispatch';

export const useAddToCart = (productItem: ProductEntity) => {
  const { dispatch } = useSelectorAndDispatch();
  const { id, price, title, image, rating } = productItem;
  const { count } = rating;

  const handleClick = () => {
    dispatch(decrementProduct(id));
    dispatch(addProduct({ id, price, title, image, count }));
  };

  return {
    handleClick,
  };
};
