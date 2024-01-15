import { Badge } from '@mui/material';
import { useState } from 'react';

export const ShoppingCart = () => {
  const [addCart, setAddCart] = useState<number>(0);

  return (
    <>
      <Badge badgeContent={addCart} color="success">
        <img src="/cart.svg" alt="logo" className="logo-image" />
      </Badge>
    </>
  );
};
