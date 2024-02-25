import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { SearchProvider } from './ecommerce/context/SearchProvider';
import { useSelectorAndDispatch } from './ecommerce/hooks/useSelectorAndDispatch';
import { useEffect } from 'react';

export const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { users } = useSelectorAndDispatch();
  const { isLogged } = users;

  useEffect(() => {
    if (pathname === '/') {
      return navigate('/home');
    }
  }, [isLogged, navigate, pathname]);

  return (
    <main>
      <SearchProvider>
        <Outlet />
      </SearchProvider>
    </main>
  );
};
