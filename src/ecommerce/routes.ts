import { ContainerBody } from './components/shared/ContainerBody';

interface Route {
  to: string;
  path: string;
  Component: () => JSX.Element;
  name: string;
}

export const routes: Route[] = [
  {
    to: '/',
    path: '/',
    Component: ContainerBody,
    name: 'home',
  },
];
