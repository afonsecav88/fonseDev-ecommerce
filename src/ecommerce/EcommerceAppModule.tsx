import { Route, Routes } from 'react-router-dom';
import { ProductsDetails } from './components/ProductsDetails';
import { EcommerceLayout } from './layout/EcommerceLayout';
import { ListCardProduct } from './pages/ListCardProduct';
import { ElectronicProduct } from './pages/ElectronicProduct';
import { JeweleryProduct } from './pages/JeweleryProduct';
import { MenClothesProduct } from './pages/MenClothesProduct';
import { WomenClothesProduct } from './pages/WomenClothesProduct';
import { NoMatch } from './pages/NoMatch';

export const EcommerceAppModule = () => {
  return (
      <Routes>
        <Route path="/" element={<EcommerceLayout />}>
          <Route index path="/" element={<ListCardProduct />} />
          <Route path="/electronics" element={<ElectronicProduct />} />
          <Route path="/jewelery" element={<JeweleryProduct />} />
          <Route path="/men-clothing" element={<MenClothesProduct />} />
          <Route path="/women-clothing" element={<WomenClothesProduct />} />
          {/* <Route key="detail" path="/detail:id" element={<Navigate to={<ProductsDetails/>}  />} */}
          <Route path="/details/:id" element={<ProductsDetails />} />
          <Route path="/*" element={<NoMatch />} />
        </Route>
      </Routes>
  );
};
