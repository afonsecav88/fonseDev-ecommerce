import Container from '@mui/material/Container';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from '../../routes';

export const ContainerBody = () => {
  return (
    <>
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
          <Route path="/*" element={<Navigate to={routes[0].path} replace />} />
        </Routes>
      </Container>
    </>
  );
};
