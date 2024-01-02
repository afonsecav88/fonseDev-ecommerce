import { ElectronicProduct } from './components/products/ElectronicProduct';
import { JeweleryProduct } from './components/products/JeweleryProduct';
import { ListCardProduct } from './components/products/ListCardProduct';
import { MenClothesProduct } from './components/products/MenClothesProduct';
import { WomenClothesProduct } from './components/products/WomenClothesProduct';

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
    name: 'All products',
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
  {
    to: '/men-clothing',
    path: 'men-clothing',
    Component: MenClothesProduct,
    name: `men's clothing`,
  },
  {
    to: '/women-clothing',
    path: '/women-clothing',
    Component: WomenClothesProduct,
    name: `women's clothing`,
  },
];
