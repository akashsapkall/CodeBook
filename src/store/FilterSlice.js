import { createSlice } from "@reduxjs/toolkit";

const initialState="http://localhost:8000/products";
const filterSlice =createSlice({
    name:"filter",
    initialState,
    reducers:{
        priceLowToHigh:(state, action)=>{
            
        },
        priceHighToLow:(state, action)=>{},
        fourStar:(state, action)=>{},
        threeStar:(state, action)=>{},
        twoStar:(state, action)=>{},
        oneStar:(state, action)=>{},
        bestSeller:(state, action)=>{},
        inStock:(state, action)=>{},
    }
});

export const {} =filterSlice.actions;
export default filterSlice.reducer;state, action