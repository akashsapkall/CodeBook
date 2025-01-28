import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./FilterSlice";
const store=configureStore({
    reducer:{
        filter:filterReducer,
    }
});