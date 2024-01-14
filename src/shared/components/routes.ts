interface Route {
  to: string;
  name: string;
}

export const routes: Route[] = [
  {
    to: 'home',
    name: 'All products',
  },
  {
    to: '/home/electronics',
    name: 'electronics',
  },
  {
    to: '/home/jewelery',
    name: 'jewelery',
  },
  {
    to: '/home/men-clothing',
    name: `men's clothing`,
  },
  {
    to: '/home/women-clothing',
    name: `women's clothing`,
  },
];
