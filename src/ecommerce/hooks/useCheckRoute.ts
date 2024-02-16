import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useCheckRoute = () => {
  const { pathname } = useLocation();
  const isRouteCartDetails = pathname === '/ecommerce/cart/details';

  useEffect(() => {
    isRouteCartDetails;
    console.log('me ejecute');
  }, [isRouteCartDetails]);

  return { isRouteCartDetails };
};
