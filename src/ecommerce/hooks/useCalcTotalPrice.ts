import { useEffect } from 'react';
import { useSelectorAndDispatch } from './useSelectorAndDispatch';

export const useCalcTotalPrice = () => {
  const { cartsProducts } = useSelectorAndDispatch();
  const { cartProducts } = cartsProducts;

  const calcTotalPrice = () => {
    let productPrice = 0;
    let totalPrice = 0;
    cartProducts.map((product) => {
      productPrice = product.count * product.price;
      totalPrice += productPrice;
    });
    return totalPrice;
  };

  //   useEffect(() => {
  //     calcTotalPrice();
  //   }, []);
  return {
    calcTotalPrice,
  };
};
