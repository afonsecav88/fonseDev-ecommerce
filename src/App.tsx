import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { SearchProvider } from './ecommerce/context/SearchProvider';

export const App = () => {
  const { pathname } = useLocation();

  if (pathname === '/') {
    return <Navigate to="/home" />;
  }

  return (
    <main>
      <SearchProvider>
        <Outlet />
      </SearchProvider>
    </main>
  );
};
