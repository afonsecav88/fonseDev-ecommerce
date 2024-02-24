import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from '../../store/productSlice';
import { cartSlice } from '../../store/cartSlice';
import { userSlice } from '../../store/userSlice';

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cartProducts: cartSlice.reducer,
    users: userSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
