import React, { useContext, useState } from 'react'

import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";


const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false)
    const cartContext = useContext(CartContext)

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`
    const hasItems = cartContext.items.length > 0

    const cartItemRemoveHandler = id => {
        cartContext.removeItem(id)
    }

    const cartItemAddHandler = item => {
        cartContext.addItem({
            ...item,
            amount: 1
        })
    }

    const orderHandler = () => {
        setIsCheckout(true)
    }

    const submitOrderHandler = async (userDATA) => {
        setIsSubmitting(true)
        await fetch('https://react-http-fe1b6-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userDATA,
                orderedItems: cartContext.items
            })
        })
        setIsSubmitting(false)
        setDidSubmit(true)
        cartContext.clearCart()
    }

    const cartItems =
        <ul className={classes['cart-items']}>
            {cartContext.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onAdd={cartItemAddHandler.bind(null, item)}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                />
            ))}
        </ul>

    const modalAction = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems &&
            <button className={classes.button} onClick={orderHandler}>
                Order
            </button>
            }
        </div>)

    const cartModalContent =
        <React.Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
            {!isCheckout && modalAction}
        </React.Fragment>

    const isSubmittingModalContent = <p>Sending order DATA ...</p>
    const didSubmitModalContent =
        <React.Fragment>
            <p>Order sent Successfully!</p>
            <div className={classes.actions}>
                <button className={classes.button} onClick={props.onClose}>Close</button>
            </div>
        </React.Fragment>

    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {didSubmit && didSubmitModalContent}
        </Modal>
    )
}

export default Cart