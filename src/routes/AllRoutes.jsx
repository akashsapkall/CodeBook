import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { HomePage, ProductList, ProductDetail,Login, Registration, SearchPage, PageNotFound, CartPage } from "../pages";
export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-600 pb-4">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/cart" element={<ProtectedRoutes><CartPage /></ProtectedRoutes>} />
        <Route path="*" element={<PageNotFound />} />
        
      </Routes>
    </div>
  );
};
