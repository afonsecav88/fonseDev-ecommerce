import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { SearchProvider } from './ecommerce/context/SearchProvider';
import { EcommerceTheme } from './ecommerce/theme';

export const App = () => {
  const { pathname } = useLocation();

  if (pathname === '/') {
    return <Navigate to="/ecommerce" />;
  }

  return (
    <main>
      <EcommerceTheme>
        <SearchProvider>
          <Outlet />
        </SearchProvider>
      </EcommerceTheme>
    </main>
  );
};
