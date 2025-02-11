import { createSlice } from "@reduxjs/toolkit";

// Utility functions to apply filters
function bestSeller(products, isBestSeller) {
    return isBestSeller ? products.filter(p => p.best_seller) : products;
}

function inStock(products, isInStock) {
    return isInStock ? products.filter(p => p.in_stock) : products;
}

function sortByPrice(products, priceSort) {
    if (priceSort === "lowtohigh") {
        return products.slice().sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (priceSort === "hightolow") {
        return products.slice().sort((a, b) => Number(b.price) - Number(a.price));
    }
    return products;
}

function sortByRating(products, ratingSort) {
    if (ratingSort === "above4") return products.filter(p => p.rating >= 4);
    if (ratingSort === "above3") return products.filter(p => p.rating >= 3);
    if (ratingSort === "above2") return products.filter(p => p.rating >= 2);
    if (ratingSort === "above1") return products.filter(p => p.rating >= 1);
    return products;
}

// Function to apply all filters
function applyAllFilters(state) {
    let filteredList = state.productList;
    filteredList = bestSeller(filteredList, state.bestseller);
    filteredList = inStock(filteredList, state.instock);
    filteredList = sortByPrice(filteredList, state.pricesort);
    filteredList = sortByRating(filteredList, state.ratingsort);
    return filteredList;
}

// Initial State
let initialState = {
    productList: [],
    filteredList: [], // Store filtered products
    pricesort: null,
    ratingsort: null,
    bestseller: false,
    instock: false,
};

// Redux Slice
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        addProductList(state, action) {
            state.productList = action.payload;
            state.filteredList = applyAllFilters(state);
        },
        addPriceSort(state, action) {
            state.pricesort = action.payload;
            state.filteredList = applyAllFilters(state);
        },
        addRatingSort(state, action) {
            state.ratingsort = action.payload;
            state.filteredList = applyAllFilters(state);
        },
        addBestSeller(state, action) {
            state.bestseller = action.payload;
            state.filteredList = applyAllFilters(state);
        },
        addInStock(state, action) {
            state.instock = action.payload;
            state.filteredList = applyAllFilters(state);
        },
        clearFilter(state) {
            state.bestseller = false;
            state.instock = false;
            state.pricesort = null;
            state.ratingsort = null;
            state.filteredList = state.productList; // Reset filtered list
        }
    }
});

// Export actions and reducer
export const { addBestSeller, addPriceSort, addProductList, addRatingSort, addInStock, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;
