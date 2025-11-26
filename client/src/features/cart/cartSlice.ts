import { createSlice } from "@reduxjs/toolkit"

interface cartSlice {
    items: any[],
    Quantity: number,
    totalAmount: number,
    deliveryCharge: number,
    discountedAmount: number
}

const initialState:cartSlice = {
    items:[],
    Quantity:0,
    totalAmount:0,
    deliveryCharge:0,
    discountedAmount:0
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            state.items.push(action.payload)
            state.Quantity++
            state.totalAmount+=action.payload.price
            if(action.payload.discountedPrice<500){
                state.deliveryCharge+=80
                state.discountedAmount+=action.payload.discountedPrice+80
            }else{
                state.deliveryCharge=0
                state.discountedAmount+=action.payload.discountedPrice
            }
            
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer