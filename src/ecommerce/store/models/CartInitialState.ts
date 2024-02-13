import { CartProduct } from './CartProducts';

export interface CartInitialState {
  cantProdInCart: number;
  cartProducts: CartProduct[];
}
