import React from "react";
import Modal from "../UI/Modal/modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CloseIcon from "./CloseIcon";

const Cart = (props) => {
  return (
    <Modal onClose={props.closeCart}>
      <CloseIcon className={classes.close} />
      <h2 className={classes.heading}>Your Cart</h2>
      <div className={classes.cartContentContainer}>
        <CartItem />
        <div className={classes.checkoutContainer}><button type="button" className={classes.checkout}>Checkout</button></div>
      </div>
    </Modal>
  );
};

export default Cart;
