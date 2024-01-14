import { Routes, Route, Navigate } from "react-router-dom";
import { PublicLayout } from "./shared/layouts/PublicLayout";
import { BrowserRouter } from "react-router-dom";
import { EcommerceAppModule } from "./ecommerce/EcommerceAppModule";

export const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true }} >
      <Routes>
        <Route path="/" element={<PublicLayout />} >
          <Route path="/home/*" element={<EcommerceAppModule />} />
          {/* Otras rutas de modulos, por ejemplo auth, products,car etc */}
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Route>
        {/* Otros modulos privados, o tambien puede manejar las rutas privadas dentro de cada modulo ya que algun modulo publico puede ser privado
        ya eso depende de cada caso
        <Route path="/" element={<PrivateLayout />} >
          <Route path="/" element={<DashboardAppModule />} />
          Otras rutas de modulos
          <Route path="*" element={<NoMatch />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};
