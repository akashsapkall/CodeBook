import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartList:[],
}

const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            state.cartList.push(action.payload);
        },
        removeFromCart(state,action){
            state.cartList=state.cartList.filter((p)=>p.id!==action.payload.id);
        },
        clearCart(state){
            state.cartList=[]
        }
    }
});

export const { addToCart, removeFromCart, clearCart }=CartSlice.actions;
export default CartSlice.reducer;