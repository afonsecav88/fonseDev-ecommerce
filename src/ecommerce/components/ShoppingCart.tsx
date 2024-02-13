import { Badge } from '@mui/material';
import { useSelectorAndDispatch } from '../hooks/useSelectorAndDispatch';
import { useEffect } from 'react';

export const ShoppingCart = () => {
  const { cartsProducts } = useSelectorAndDispatch();
  const { cantProdInCart } = cartsProducts;

  useEffect(() => {
    cantProdInCart;
  }, []);

  return (
    <>
      <Badge sx={{ top: '10px' }} badgeContent={cantProdInCart} color="success">
        <img
          src="/shopping-cart.svg"
          alt="logo"
          className="shopping-cart-image"
        />
      </Badge>
    </>
  );
};
