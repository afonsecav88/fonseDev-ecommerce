import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Product, Products } from '../../../interfaces/interfaces';

const initialState: Products = {
  isLoading: false,
  product: [
    {
      id: 0,
      title: '',
      price: 0,
      description: '',
      category: '',
      image: '',
      rating: {
        rate: 0,
        count: 0,
      },
    },
  ],
};

export const productSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    setLoadingProducts: (state) => {
      state.isLoading = true;
    },
    setAllProducts: (state, action: PayloadAction<Product[]>) => {
      state.isLoading = false;
      state.product = action.payload;
    },
    searchProduct: (state, action: PayloadAction<string>) => {
      state.product.filter((product) => product.title.includes(action.payload));
    },
    filterByCategory: (state, action: PayloadAction<string>) => {
      state.product.filter((product) => product.category === action.payload);
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setLoadingProducts,
  setAllProducts,
  searchProduct,
  filterByCategory,
} = productSlice.actions;
