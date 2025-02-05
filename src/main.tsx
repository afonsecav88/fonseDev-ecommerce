import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './Styles.css';
import { store } from './ecommerce/shared/store/store.ts';
import { RouterProvider } from 'react-router-dom';
import { router } from './ecommerce/routes/router.tsx';
import { EcommerceTheme } from './ecommerce/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <EcommerceTheme>
      <Provider store={store}>
        <RouterProvider
          router={router}
          future={{
            v7_startTransition: true,
          }}
        />
      </Provider>
    </EcommerceTheme>
  </React.StrictMode>,
);
