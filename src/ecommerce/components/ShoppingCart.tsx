import { Badge } from '@mui/material';
import { useUpdateProductInCart } from '../hooks/useUpdateProductInCart';

export const ShoppingCart = () => {
  const { cantProdInCart, navigate } = useUpdateProductInCart();

  return (
    <>
      <Badge badgeContent={cantProdInCart} color="success">
        <img
          src="/shopping-cart.svg"
          alt="logo"
          className="shopping-cart-image"
          onClick={() => navigate(`cart/details`)}
        />
      </Badge>
    </>
  );
};
