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
    setLoadingProducts: (state) => {
      state.isLoading = true;
    },
    setAllProducts: (state, action: PayloadAction<ProductEntity[]>) => {
      state.isLoading = false;
      state.product = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setLoadingProducts, setAllProducts } = productSlice.actions;
