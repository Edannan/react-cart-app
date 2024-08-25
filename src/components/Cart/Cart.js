import React from "react";
import Modal from "../UI/Modal/modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CloseIcon from "./CloseIcon";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import { cartActions } from "../../store/cartSlice";

const Cart = (props) => {
  const cartStateItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(uiActions.toggleModal())
  }

  const removeItem = (id) => {
    dispatch(cartActions.removeFromCart(id))
  }

  const increaseCartItem = (id) => {
    dispatch(cartActions.increaseCartItem(id))
  }

  const decreaseCartItem = (id) => {
    dispatch(cartActions.decreaseCartItem(id))
  }

  const cartStore = JSON.parse(localStorage.getItem("cart"));
  const cartItems = cartStore?.items || cartStateItems;
  const totalQ = cartStore?.totalQuantity || totalQuantity;

  return (
    <Modal onClose={props.closeCart}>
      <CloseIcon className={classes.close} onClose={handleClose} />
      <h2 className={classes.heading}>Your Cart</h2>
      {totalQ === 0 && <div className={classes.empty}>Your cart is empty.</div>}
      {totalQ > 0 && (
        <div className={classes.cartContentContainer}>
          <CartItem cart={cartItems} onIncrease={increaseCartItem} onDecrease={decreaseCartItem} onRemove={removeItem} />
        </div>
      )}
      {totalQ > 0 && (
        <div className={classes.checkoutContainer}>
          <button type="button" className={classes.checkout}>
            Checkout
          </button>
        </div>
      )}
    </Modal>
  );
};

export default Cart;
