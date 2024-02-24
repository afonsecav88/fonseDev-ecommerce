import { RootState } from '../shared/store/store';
import { useAppDispatch, useAppSelector } from './useConfigSelectorAndDispatch';

export const useSelectorAndDispatch = () => {
  const products = useAppSelector((state: RootState) => state.products);
  const cartsProducts = useAppSelector(
    (state: RootState) => state.cartProducts,
  );
  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  return {
    products,
    cartsProducts,
    users,
    dispatch,
  };
};
