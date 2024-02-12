import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CartProduct } from './models/CartProducts';
import { CartInitialState } from './models/CartInitialState';

const initialState: CartInitialState = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartProduct[]>) => {
      state.cartProducts = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { addProduct } = cartSlice.actions;
