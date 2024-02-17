import { addProduct } from '../store/cartSlice';
import { ProductEntity } from '../store/models/ProductEntity';
import { decrementProduct } from '../store/productSlice';
import { useNotifications } from './useNotifications';
import { useSelectorAndDispatch } from './useSelectorAndDispatch';

export const useAddToCart = () => {
  const { dispatch } = useSelectorAndDispatch();
  const { productAdded } = useNotifications();

  const addCartProduct = (productItem: ProductEntity) => {
    const { id, price, title, image, rating } = productItem;
    const { count } = rating;
    dispatch(decrementProduct(id));
    dispatch(addProduct({ id, price, title, image, count }));
    productAdded();
  };

  return { addCartProduct };
};
