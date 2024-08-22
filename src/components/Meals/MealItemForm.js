import React, { useRef } from "react";
import Input from "../UI/Input/input";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({ id }) => {
  const inputref = useRef(null);

  return (
    <form className={classes.mealitemform}>
      <div className={classes.cartbuttons}>
        <button>+</button>
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
        <button>-</button>
      </div>
      <button className={classes.add}>Add to cart</button>
    </form>
  );
};

export default MealItemForm;
