import React from "react";
import classes from "./CartItem.module.css";
import TrashIcon from "./TrashIcon";

const CartItem = ({ cart, onIncrease, onDecrease, onRemove }) => {
  const totalSum = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.totalPrice;
  }, 0);

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th className={classes.meal}>Meal</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cart.map((meal) => {
          return (
            <tr key={meal.id}>
              <td>
                <div className={classes.mealcontainer}>
                  <div className={classes.image}>
                    <img src={meal.image} alt="" />
                  </div>
                  <span>{meal.title}</span>
                </div>
              </td>
              <td>${meal.price.toFixed(2)}</td>
              <td>
                <button
                  type="button"
                  onClick={() => onDecrease(meal.id)}
                  className={classes.button}
                >
                  -
                </button>{" "}
                <span className={classes.quantity}>{meal.quantity}</span>{" "}
                <button
                  type="button"
                  onClick={() => onIncrease(meal.id)}
                  className={classes.button}
                >
                  +
                </button>
              </td>
              <td>${meal.totalPrice.toFixed(2)}</td>
              <td>
                <TrashIcon removeItem={() => onRemove(meal.id)} />
              </td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={2} className={classes.total}></td>
          <td className={classes.total}>TOTAL</td>
          <td className={classes.total}>${totalSum.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartItem;
