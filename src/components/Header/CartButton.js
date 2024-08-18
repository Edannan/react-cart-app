import CartIcon from "./CartIcon";
import classes from "./CartButton.module.css";

const CartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart<span className=""> (0)</span></span>
    </button>
  );
};

export default CartButton;
