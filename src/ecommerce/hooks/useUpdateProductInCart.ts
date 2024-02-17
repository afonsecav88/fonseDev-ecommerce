import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelectorAndDispatch } from './useSelectorAndDispatch';

export const useUpdateProductInCart = () => {
  const { cartsProducts } = useSelectorAndDispatch();
  const { cantProdInCart } = cartsProducts;
  const navigate = useNavigate();

  useEffect(() => {
    cantProdInCart;
  }, [cantProdInCart, cartsProducts]);

  return { navigate, cantProdInCart };
};
