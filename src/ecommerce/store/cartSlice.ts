import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CartProduct } from './models/CartProducts';
import { CartInitialState } from './models/CartInitialState';

const initialState: CartInitialState = {
  cantProdInCart: 0,
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartProduct>) => {
      state.cantProdInCart += 1;
      const product = state.cartProducts.find(
        (product) => product.id === action.payload.id,
      );
      if (product) {
        product.count += 1;
      } else {
        const count = 1,
          product = { ...action.payload, count };
        state.cartProducts.push(product);
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.cantProdInCart -= 1;
      const product = state.cartProducts.find(
        (product) => product.id === action.payload,
      );
      if (product && product?.count > 1) {
        product.count -= 1;
      } else {
        state.cartProducts = state.cartProducts.filter(
          (prod) => prod.id !== product!.id,
        );
        // another way to implement  this method
        // const indexProduct = state.cartProducts.indexOf(product!);
        // state.cartProducts.splice(indexProduct, 1);
      }
    },
  },
});
// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct } = cartSlice.actions;
