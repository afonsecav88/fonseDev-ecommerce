import { useSelectorAndDispatch } from '../hooks/useSelectorAndDispatch';
import { useCheckRoute } from '../hooks/useCheckRoute';
import { CartDrawer } from './CartDrawer';

export const ListProductsInCart = () => {
  const { cartsProducts } = useSelectorAndDispatch();
  const { cartProducts } = cartsProducts;
  const { isRouteCartDetails } = useCheckRoute();

  return (
    <>
      {!isRouteCartDetails && cartProducts.length >= 1 && (
        <CartDrawer cartProducts={cartProducts} />
      )}
    </>
  );
};
