import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './Styles.css';
import { store } from './ecommerce/shared/store/store.ts';
import { RouterProvider } from 'react-router-dom';
import { router } from './ecommerce/routes/router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
