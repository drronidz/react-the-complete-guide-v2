import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

export const fetchCartDATA = () => {
    return async dispatch => {
        const fetchDATA = async () => {
            const response = await fetch('https://react-http-fe1b6-default-rtdb.firebaseio.com/cart.json')

            if (!response.ok) {
                throw new Error('Could not fetch cart DATA!')
            }
            return response.json;
        }

        try {
            const cartDATA = await fetchDATA()
            dispatch(cartSlice.actions.replaceCart(cartDATA))
        }
        catch (error) {
            dispatch(
                uiSlice.actions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart DATA failed!'
                })
            )
        }


    }
}

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

        }
        catch (error) {
            dispatch(
                uiSlice.actions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart DATA failed!'
                })
            )
        }
    }
}