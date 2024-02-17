import { useSelectorAndDispatch } from '../hooks/useSelectorAndDispatch';
import { ProductInCartCard } from './ProductInCartCard';
import { CartMoreDetailsButton } from './CartMoreDetailsButton';
import { useCheckRoute } from '../hooks/useCheckRoute';

export const ListProductsInCart = () => {
  const { cartsProducts } = useSelectorAndDispatch();
  const { cartProducts } = cartsProducts;
  const { isRouteCartDetails } = useCheckRoute();

  return (
    <>
      {!isRouteCartDetails && cartProducts.length <= 2 ? (
        <ProductInCartCard cartProducts={cartProducts} />
      ) : (
        <CartMoreDetailsButton />
      )}
    </>
  );
};
