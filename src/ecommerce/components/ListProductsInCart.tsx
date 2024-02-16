import { useSelectorAndDispatch } from '../hooks/useSelectorAndDispatch';
import { ProductInCart } from './ProductInCart';
import { ProductCartDetailsButton } from './ProductCartDetailsButton';
import { useCheckRoute } from '../hooks/useCheckRoute';

export const ListProductsInCart = () => {
  const { cartsProducts } = useSelectorAndDispatch();
  const { cartProducts } = cartsProducts;
  const { isRouteCartDetails } = useCheckRoute();

  console.log(isRouteCartDetails);
  return (
    <>
      {!isRouteCartDetails && cartProducts.length <= 2 ? (
        <ProductInCart cartProducts={cartProducts} />
      ) : (
        <ProductCartDetailsButton />
      )}
    </>
  );
};
