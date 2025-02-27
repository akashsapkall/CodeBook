import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./FilterpSlice";
import cartReducer from "./CartSlice";
export const store=configureStore({
    reducer:{
        filter:filterReducer,
        cart:cartReducer,
    }
});