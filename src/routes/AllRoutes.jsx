
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages";
import { ProductList } from "../pages/Product/ProductList";
export const AllRoutes=()=>{
    return (
        <div className="dark:bg-gray-600 pb-4">
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/products" element={<ProductList />}/>
            </Routes>
        </div>
    )
}