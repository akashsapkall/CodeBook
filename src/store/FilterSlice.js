import { createSlice } from "@reduxjs/toolkit";
// http://localhost:8000/products?
const initialState={
    url:"http://localhost:8000/products?",
    sortbyPrice:"",
    sortByRating:"",
    bestSeller:false,
    inStock:false,
}

function updateBestSeller(state){
    if(state.bestSeller){
        state.url=state.url.concat("&best_seller=true");
    }
    else{
        state.url=state.url.replace("&best_seller=true","");
    }
}

function updateInStock(state){
    if(state.inStock){
        state.url=state.url.concat("&in_stock=true");
    }
    else{
        state.url=state.url.replace("&in_stock=true","");
    }
}

function updateRating(state){
    if(state.sortByRating==="FourAndAbove"){
        if(state.url.includes("&rating_gte=4")){
            return;
        }
        state.url=state.url.concat("&rating_gte=4");
    }else{
        state.url=state.url.replace("&rating_gte=4","");
    }
    if(state.sortByRating==="ThreeAndAbove"){
        if(state.url.includes("&rating_gte=3")){
            return;
        }
        state.url=state.url.concat("&rating_gte=3");
    }else{
        state.url=state.url.replace("&rating_gte=3","");
    }
    if(state.sortByRating==="TwoAndAbove"){
        if(state.url.includes("&rating_gte=2")){
            return;
        }
        state.url=state.url.concat("&rating_gte=2");
    }else{
        state.url=state.url.replace("&rating_gte=2","");
    }
    if(state.sortByRating==="OneAndAbove"){
        if(state.url.includes("&rating_gte=1")){
            return;
        }
        state.url=state.url.concat("&rating_gte=1");
    }else{
        state.url=state.url.replace("&ratrating_gte=1","");
    }
}

function updateSort(state){
    if(state.sortbyPrice==="hightolow"){
        if(state.url.includes("&_sort=price&_order=desc")){
            return;
        }
        state.url=state.url.concat("&_sort=price&_order=desc");
    }
    else{
        state.url=state.url.replace("&_sort=price&_order=desc","");
    }
    if(state.sortbyPrice==="lowtohigh"){
        if(state.url.includes("&_sort=price&_order=asc")){
            return;
        }
        state.url=state.url.concat("&_sort=price&_order=asc");
    }
    else{
        state.url=state.url.replace("&_sort=price&_order=asc","");
    }
}
const filterSlice =createSlice({
    name:"filter",
    initialState,
    reducers:{
        updateUrl(state,action){
            state.url=action.payload;
        },
        isBestSellerOnly(state,action){
            state.bestSeller=action.payload;
            updateBestSeller(state,);
        },
        inStockOnly(state,action){
            state.inStock=action.payload;
            updateInStock(state);
        },
        ratingSort(state,action){
            state.sortByRating=action.payload;  
            updateRating(state);
        },
        priceSort(state,action){
            state.sortbyPrice=action.payload;
            updateSort(state);
        },
        clearAll(state,action){
            state.url="http://localhost:8000/products?";
            state.bestSeller=false;
            state.inStock=false;
            state.sortByRating="";
            state.sortbyPrice="";
        },
    }
});

export const { updateUrl,isBestSellerOnly, inStockOnly, ratingSort, priceSort,clearAll } =filterSlice.actions;
export default filterSlice.reducer;