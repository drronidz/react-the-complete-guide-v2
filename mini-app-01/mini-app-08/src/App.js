import React, {Fragment, useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import uiSlice from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true

function App() {
    const dispatch = useDispatch()
    const showCart = useSelector(state => state.ui.cartIsVisible)
    const cart = useSelector((state) => state.cart)
    const notification = useSelector((state => state.ui.notification))

    useEffect(() => {
        const sendCartDATA = async () => {
            dispatch(uiSlice.actions.showNotification({
                status: 'pending',
                title: 'Sending ...',
                message: 'Sending Cart DATA!'
            }))
            const response = await fetch('https://react-http-fe1b6-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            })

            if (!response.ok) {
                throw new Error('Sending cart DATA failed.')

            }

            const responseDATA = await response.json()

            dispatch(uiSlice.actions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Cart DATA sent successfully!'
            }))
        }

        if (isInitial) {
            isInitial = false
            return
        }

        sendCartDATA().catch((error) => {
            dispatch(
                uiSlice.actions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart DATA failed!'
                })
            )
        })
    }, [cart, dispatch])

    return (
        <Fragment>
            {notification &&
            <Notification
                status={notification.status}
                title={notification.title}
                message={notification.message}
            />}
            <Layout>
                {showCart && <Cart/>}
                <Products/>
            </Layout>
        </Fragment>

    );
}

export default App;
