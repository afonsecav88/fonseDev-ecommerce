import { createBrowserRouter } from 'react-router-dom';

import { App } from '../../App';
import { ElectronicProduct } from '../pages/ElectronicProduct';
import { JeweleryProduct } from '../pages/JeweleryProduct';
import { MenClothesProduct } from '../pages/MenClothesProduct';
import { WomenClothesProduct } from '../pages/WomenClothesProduct';
import { ProductsDetails } from '../components/ProductsDetails';
import { EcommerceLayout } from '../layouts/EcommerceLayout';
import { ListCardProduct } from '../pages/ListCardProduct';
import { NoFoundPage } from '../pages/NoFoundPage';

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
            element: <ListCardProduct />,
          },
          {
            path: 'electronics',
            element: <ElectronicProduct />,
          },
          {
            path: 'jewelery',
            element: <JeweleryProduct />,
          },
          {
            path: 'men-clothing',
            element: <MenClothesProduct />,
          },
          {
            path: 'women-clothing',
            element: <WomenClothesProduct />,
          },
          {
            path: 'details/:id',
            element: <ProductsDetails />,
          },
          {
            path: '*',
            element: <NoFoundPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NoFoundPage />,
  },
]);
