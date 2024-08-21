import React from "react";
import classes from './MealItem.module.css'

const MealItem = ({id, price, title, description, image}) => {
  return (
    <div className={classes.card}>
      <img src={image} className={classes['card-img']} alt="" />
      <div className={classes['card-body']}>
        {description}
      </div>
    </div>
  );
};

export default MealItem;
