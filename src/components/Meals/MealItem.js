import React from "react";
import classes from './MealItem.module.css'
import MealItemForm from "./MealItemForm";

const MealItem = ({id, price, title, description, image}) => {
  return (
    <div className={classes.card}>
      <img src={image} className={classes['card-img']} alt="" />
      <div className={classes['card-body']}>
        <div className={classes.title}>
          <h4>{title}</h4>
          <h4 className={classes.price}>${price.toFixed(2)}</h4>
        </div>
        <p className={classes.description}>{description}</p>
        <MealItemForm id={id} price={price} title={title} image={image} />
      </div>
    </div>
  );
};

export default MealItem;
