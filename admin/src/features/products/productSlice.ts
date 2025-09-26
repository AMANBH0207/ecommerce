import { createSlice } from "@reduxjs/toolkit";
import { CategoriesResponse } from "../../services/types/actionTypes";
import { addProduct, getCategories } from "./productThunks";

export interface ProductState{
    categories: CategoriesResponse[];
    loading:boolean;
    error:string | null;
}

const initialState:ProductState={
    categories: [],
    loading:false,
    error:null
}

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getCategories.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getCategories.fulfilled,(state,action)=>{
            state.loading = false;
            state.categories = action.payload;
        })
        .addCase(getCategories.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as string;
        })
        builder
        .addCase(addProduct.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(addProduct.fulfilled,(state,action)=>{
            state.loading = false;
        })
        .addCase(addProduct.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as string;
        })
    }
})


export default productSlice.reducer;
