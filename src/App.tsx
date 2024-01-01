import { BrowserRouter } from 'react-router-dom';
import { ContainerBody } from './ecommerce/components/shared/ContainerBody';
import { Header } from './ecommerce/components/shared/Header';

export const App = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <ContainerBody />
      </>
    </BrowserRouter>
  );
};
