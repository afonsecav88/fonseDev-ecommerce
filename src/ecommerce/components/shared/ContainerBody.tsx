import Container from '@mui/material/Container';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from '../../routes';
import { Search } from './Search';
import { ProductsDetails } from '../products/ProductsDetails';

export const ContainerBody = () => {
  return (
    <>
      <Container sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Search />
      </Container>
      <Container
        sx={{
          display: 'flex',
          gap: 5,
          flexWrap: 'wrap',
        }}
      >
        <Routes>
          {routes.map(({ to, path, Component }) => (
            <Route key={to} path={path} element={<Component />} />
          ))}
          {/* <Route key="detail" path="/detail:id" element={<Navigate to={<ProductsDetails/>}  />} */}
          <Route path="/details/:id" element={<ProductsDetails />} />
          <Route path="/*" element={<Navigate to={routes[0].path} replace />} />
        </Routes>
      </Container>
    </>
  );
};
