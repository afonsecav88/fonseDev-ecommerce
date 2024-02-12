import { Badge } from '@mui/material';
import { useState } from 'react';

export const ShoppingCart = () => {
  const [addCart, setAddCart] = useState<number>(1);

  return (
    <>
      <Badge sx={{ top: '10px' }} badgeContent={addCart} color="success">
        <img
          src="/shopping-cart.svg"
          alt="logo"
          className="shopping-cart-image"
        />
      </Badge>
    </>
  );
};
