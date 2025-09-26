import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories as getCategoriesAPI } from "../../services/ApiService";
import { addProduct as addProductAPI } from "../../services/ApiService";
import { ProductFormValues } from "../../types/banner";


export const addProduct = createAsyncThunk(
    "product/addProduct",async(payload:ProductFormValues, {rejectWithValue})=>{
        try {
            const response = await addProductAPI(payload);
            if(response.success){
                return response.data;
            }
            else{
                return rejectWithValue(response.message);
            }
    }
        catch (error:any) {
            return rejectWithValue(error.message);
        }
    }

)


export const getCategories = createAsyncThunk(
    'product/getCategories', async (_, {rejectWithValue})=>{
        try {
            const response = await getCategoriesAPI() ;
            if(response.success){
                return response.data;
            }else{
                return rejectWithValue(response.message);
            }
        }   catch (error:any) {
            return rejectWithValue(error.message);
        }
    }
)