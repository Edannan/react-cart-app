import React from 'react'
import Modal from '../UI/Modal/modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'

const Cart = (props) => {
  return (
    <Modal onClose={props.closeCart}>
      <h2 className={classes.heading}>Your Cart</h2>
        <div className={classes.cartContentContainer}>
          <CartItem />
        </div>
    </Modal>
  )
}

export default Cart