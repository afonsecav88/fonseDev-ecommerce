import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProductsInitialState } from './models/IProductsInitialState';
import { IProductEntity } from './models/IProductEntity';

const initialState: IProductsInitialState = {
  isLoading: false,
  searchTermValue: '',
  category: 'electronics',
  product: [],
};

export const productSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    setLoadingProducts: (state) => {
      state.isLoading = true;
    },
    setAllProducts: (state, action: PayloadAction<IProductEntity[]>) => {
      state.isLoading = false;
      state.product = action.payload;
    },
    setTermSearch: (state, action: PayloadAction<string>) => {
      state.searchTermValue = action.payload.toLowerCase().trim();
    },
    searchProduct: (state, action: PayloadAction<string>) => {
      state.product.filter((product) =>
        product.title.toLowerCase().trim().includes(action.payload),
      );
    },
    filterByCategory: (state, action: PayloadAction<string>) => {
      state.product.filter(
        (product) => product.category == action.payload.trim(),
      );
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setLoadingProducts,
  setAllProducts,
  setTermSearch,
  searchProduct,
  filterByCategory,
} = productSlice.actions;
