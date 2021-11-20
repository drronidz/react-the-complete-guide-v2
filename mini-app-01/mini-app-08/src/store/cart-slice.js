import {createSlice} from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity
            state.items = action.payload.items
        },
        addItemToCart(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                })
            } else {
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity--
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--
                // existingItem.totalPrice = existingItem.totalPrice - newItem.price
            }
        }
    }
})

export const sendCartDATA = (cartDATA) => {
    return async (dispatch) => {
        dispatch(uiSlice.actions.showNotification({
            status: 'pending',
            title: 'Sending ...',
            message: 'Sending Cart DATA!'
        }))

        const sendRequest = async () => {
            const response = await fetch('https://react-http-fe1b6-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cartDATA)
            })

            if (!response.ok) {
                throw new Error('Sending cart DATA failed.')
            }
        }

        try {
            await sendRequest()

            dispatch(uiSlice.actions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Cart DATA sent successfully!'
            }))

        } catch (error) {
            dispatch(
                uiSlice.actions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart DATA failed!'
                })
            )
        }


        const responseDATA = await response.json()
    }
}

export default cartSlice