import { ElectronicProduct } from './components/products/ElectronicProduct';
import { JeweleryProduct } from './components/products/JeweleryProduct';
import { ListCardProduct } from './components/products/ListCardProduct';

interface Route {
  to: string;
  path: string;
  Component: () => JSX.Element;
  name: string;
}

export const routes: Route[] = [
  {
    to: 'home',
    path: '/home',
    Component: ListCardProduct,
    name: 'Ecommerce',
  },
  {
    to: 'electronics',
    path: '/electronics',
    Component: ElectronicProduct,
    name: 'electronics',
  },
  {
    to: '/jewelery',
    path: '/jewelery',
    Component: JeweleryProduct,
    name: 'jewelery',
  },
  // {
  //   to: '/men-clothing',
  //   path: 'men-clothing',
  //   Component: ContainerBody,
  //   name: 'men-clothing',
  // },
  // {
  //   to: '/women-clothing',
  //   path: '/women-clothing',
  //   Component: ContainerBody,
  //   name: 'women-clothing',
  // },
];
