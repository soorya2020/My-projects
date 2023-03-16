import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
}

const cardSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            )

            state.totalQuantity++
            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    image: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price

                })
            } else {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.price) + Number(newItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total, item) => 
                total + Number(item.price) * Number(item.quantity)
            )

        }
    }
});

export const CartActions = cardSlice.actions

export default cardSlice.reducer