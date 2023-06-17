//store =state 
//action=button click
//reducer==state update
//provider== react inj

import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    cartList: [],
    cartCount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            //  state.cartCount=1
            console.log(action);
            const itemExist = state.cartList.find((item) => item.id === action.payload.id)
            if (itemExist) {
                const prodId = action.payload.id
                state.cartList.forEach((item) => {
                    if (item?.id === prodId) {
                        item.count = 1;
                    }
                })
                return;
            }
            state.cartList.push({
                ...action.payload,
                count: 1,
            })
        },
        increment: (state, action) => {
            // state.cartCount+=1;
            const prodId = action.payload
            state.cartList.forEach((item) => { item?.id === prodId && item.count++ })
        },
        decrement: (state, action) => {
            // state.cartCount-=1
            const prodId = action.payload
            state.cartList.forEach((item) => {
                item?.id === prodId && item.count--

                if (item.count === 0) {
                    // Remove the item from the cartList array
                    state.cartList = state.cartList.filter((obj) => obj.count !== 0);
                  }
            })
        }

    }
})

export const { increment, decrement, addToCart } = cartSlice.actions

export default cartSlice.reducer