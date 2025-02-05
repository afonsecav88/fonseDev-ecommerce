import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductsInitialState } from './models/ProductsInitialState';
import { ProductEntity } from './models/ProductEntity';

const initialState: ProductsInitialState = {
  isLoading: false,
  product: [],
};

export const productSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    setLoadingProducts: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setAllProducts: (state, action: PayloadAction<ProductEntity[]>) => {
      state.isLoading = false;
      state.product = action.payload;
    },
    decrementProduct: (state, action: PayloadAction<number>) => {
      state.product.filter((product) => {
        if (product.id === action.payload) {
          product.rating.count -= 1;
        }
      });
    },
  },
});
// Action creators are generated for each case reducer function
export const { setLoadingProducts, setAllProducts, decrementProduct } =
  productSlice.actions;
