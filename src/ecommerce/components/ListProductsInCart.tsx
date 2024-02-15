import { useSelectorAndDispatch } from '../hooks/useSelectorAndDispatch';
import { ProductInCart } from './ProductInCart';
import { ProductCartDetailsButton } from './ProductCartDetailsButton';

export const ListProductsInCart = () => {
  const { cartsProducts } = useSelectorAndDispatch();
  const { cantProdInCart, cartProducts } = cartsProducts;

  return (
    <>
      {cartProducts.length <= 3 ? (
        <ProductInCart cartProducts={cartProducts} />
      ) : (
        <ProductCartDetailsButton />
      )}
    </>
  );
};
