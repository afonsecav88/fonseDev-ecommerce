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
    setLoadingUsers: (state) => {
      state.isLoading = true;
    },
    setAllProducts: (state, action: PayloadAction<Product[]>) => {
      state.isLoading = false;
      state.product = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setLoadingUsers, setAllProducts } = productSlice.actions;