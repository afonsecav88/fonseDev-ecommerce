import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { EcommerceApp } from './App.tsx';
import './Styles.css';
import { store } from './ecommerce/store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <EcommerceApp />
    </Provider>
  </React.StrictMode>
);
