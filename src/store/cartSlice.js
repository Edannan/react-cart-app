import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {items: [], totalQuantity: 0},
    reducers: {
        addtoCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id)
            if(existingItem){
                existingItem.totalPrice += newItem.price;
                existingItem.quantity++
                return;
            }

            state.items = [...state.items, {id: newItem.id, quantity: 1, image: newItem.image}]
        }
    }
})


export default cartSlice;