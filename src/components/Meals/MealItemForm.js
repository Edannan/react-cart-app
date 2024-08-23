import React, { useRef } from "react";
import Input from "../UI/Input/input";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({ id }) => {
  const inputref = useRef(null);

  const increaseAmt = () => {
    const amount = inputref.current.value;
    const newamount = parseInt(amount) + 1;
    inputref.current.value = newamount;
  }

  const decreaseAmt = () => {
    const amount = inputref.current.value;

    if(parseInt(amount) === 1){
      return;
    }
    const newamount = parseInt(amount) - 1;
    inputref.current.value = newamount;
  }

  return (
    <form className={classes.mealitemform}>
      <div className={classes.cartbuttons}>
        <button type="button" onClick={increaseAmt}>+</button>
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
        <button type="button" onClick={decreaseAmt}>-</button>
      </div>
      <button className={classes.add}>Add to cart</button>
    </form>
  );
};

export default MealItemForm;
