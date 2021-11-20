import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";

export const fetchCartDATA = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://react-http-fe1b6-default-rtdb.firebaseio.com/cart.json'
            );

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            const DATA = await response.json();

            return DATA;
        };

        try {
            const cartData = await fetchData();
            dispatch(
                cartSlice.actions.replaceCart({
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity,
                })
            );
        } catch (error) {
            dispatch(
                uiSlice.actions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Fetching cart data failed!',
                })
            );
        }
    };
};

export const sendCartDATA = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiSlice.actions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!',
            })
        );

        const sendRequest = async () => {
            const response = await fetch(
                'https://react-http-fe1b6-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }
        };

        try {
            await sendRequest();

            dispatch(
                uiSlice.actions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!',
                })
            );
        } catch (error) {
            dispatch(
                uiSlice.actions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!',
                })
            );
        }
    };
};