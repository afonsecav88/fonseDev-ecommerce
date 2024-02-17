import { deleteProduct } from '../store/cartSlice';
import { useNotifications } from './useNotifications';
import { useSelectorAndDispatch } from './useSelectorAndDispatch';

export const useDeleteProductById = () => {
  const { dispatch } = useSelectorAndDispatch();
  const { productUpdated } = useNotifications();

  const deleteProductById = (id: number) => {
    dispatch(deleteProduct(id));
    productUpdated();
  };

  return { deleteProductById };
};
