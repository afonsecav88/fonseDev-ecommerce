import { createBrowserRouter } from 'react-router-dom';

import { App } from '../../App';
import { ElectronicProductPage } from '../pages/ElectronicProductPage';
import { JeweleryProductPage } from '../pages/JeweleryProductPage';
import { MenClothesProductPage } from '../pages/MenClothesProductPage';
import { WomenClothesProductPage } from '../pages/WomenClothesProductPage';
import { ProductsDetails } from '../components/ProductsDetails';
import { EcommerceLayout } from '../layouts/EcommerceLayout';
import { ListCardProductPage } from '../pages/ListCardProductPage';
import { NoFoundPage } from '../pages/NoFoundPage';
import { ProductCartDetailsPage } from '../pages/ProductCartDetailsPage';
import { LoginLayout } from '../layouts/LoginLayout';
import { LoginPage } from '../pages/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'ecommerce',
        element: <EcommerceLayout />,
        children: [
          {
            path: '',
            element: <ListCardProductPage />,
          },
          {
            path: 'electronics',
            element: <ElectronicProductPage />,
          },
          {
            path: 'jewelry',
            element: <JeweleryProductPage />,
          },
          {
            path: 'men-clothing',
            element: <MenClothesProductPage />,
          },
          {
            path: 'women-clothing',
            element: <WomenClothesProductPage />,
          },
          {
            path: 'details/:id',
            element: <ProductsDetails />,
          },
          {
            path: 'cart/details',
            element: <ProductCartDetailsPage />,
          },
        ],
      },
    ],
  },
  {
    path: 'home',
    element: <LoginLayout />,
    children: [
      {
        path: '',
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NoFoundPage />,
  },
]);
