import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages";
import { ProductList } from "../pages";
// import { SearchPage } from "../pages";
import { ProductDetail } from "../pages";
export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-600 pb-4">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/search" element={<ProductList />} />
        <Route path="product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};
