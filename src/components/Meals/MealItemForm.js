import React, { useRef } from "react";
import Input from "../UI/Input/input";
import classes from "./MealItemForm.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const MealItemForm = ({ id, price, title, image }) => {
  const dispatch = useDispatch();
  const inputref = useRef(null);

  const increaseAmt = () => {
    const amount = inputref.current.value;
    const newamount = parseInt(amount) + 1;
    inputref.current.value = newamount;
  };

  const decreaseAmt = () => {
    const amount = inputref.current.value;

    if (parseInt(amount) === 1) {
      return;
    }
    const newamount = parseInt(amount) - 1;
    inputref.current.value = newamount;
  };

  const addToCart = () => {
    dispatch(
      cartActions.addtoCart({
        id: id,
        title: title,
        quantity: inputref.current.value,
        image: image,
        price: price,
      })
    );
    inputref.current.value = 1;
  };

  return (
    <form className={classes.mealitemform}>
      <div className={classes.cartbuttons}>
        <button type="button" onClick={decreaseAmt}>
          -
        </button>
        <Input
          ref={inputref}
          input={{
            id: "amount_" + id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button type="button" onClick={increaseAmt}>
          +
        </button>
      </div>
      <button type="button" onClick={addToCart} className={classes.add}>
        Add to cart
      </button>
    </form>
  );
};

export default MealItemForm;
