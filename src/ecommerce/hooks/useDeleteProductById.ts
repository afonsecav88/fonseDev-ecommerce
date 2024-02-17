import { deleteProduct } from '../store/cartSlice';
import { useSelectorAndDispatch } from './useSelectorAndDispatch';

export const useDeleteProductById = () => {
  const { dispatch } = useSelectorAndDispatch();

  const deleteProductById = (id: number) => {
    dispatch(deleteProduct(id));
  };

  return { deleteProductById };
};
