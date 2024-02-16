import { useLocation } from 'react-router-dom';

export const useCheckRoute = () => {
  const { pathname } = useLocation();
  const isRouteCartDetails = pathname === '/ecommerce/cart/details';

  return { isRouteCartDetails };
};
