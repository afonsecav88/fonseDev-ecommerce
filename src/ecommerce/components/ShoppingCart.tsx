import { Badge } from '@mui/material';
import { useSelectorAndDispatch } from '../hooks/useSelectorAndDispatch';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ShoppingCart = () => {
  const { cartsProducts } = useSelectorAndDispatch();
  const { cantProdInCart } = cartsProducts;
  const navigate = useNavigate();

  useEffect(() => {
    cantProdInCart;
  }, [cantProdInCart]);

  return (
    <>
      <Badge sx={{ top: '10px' }} badgeContent={cantProdInCart} color="success">
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
