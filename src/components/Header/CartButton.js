import CartIcon from "./CartIcon";
import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";

const CartButton = () => {

const dispatch = useDispatch();
const totalQuantity = useSelector((state) => state.cart.totalQuantity)

const cartStore = JSON.parse(localStorage.getItem("cart"));
const totalQ = cartStore?.totalQuantity || totalQuantity;

const showCart = () => {
  dispatch(uiActions.toggleModal())
}

  return (
    <button className={classes.button} onClick={showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart<span className=""> ({totalQ})</span></span>
    </button>
  );
};

export default CartButton;
