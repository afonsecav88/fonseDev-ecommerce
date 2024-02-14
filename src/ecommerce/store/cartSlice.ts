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
  },
});
// Action creators are generated for each case reducer function
export const { addProduct } = cartSlice.actions;
