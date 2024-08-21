import React from "react";
import classes from "./MealList.module.css";
import mealdata from "../../data";
import MealItem from "./MealItem";

const MealList = () => {
  return (
    <section className={classes.meallist}>
      {mealdata.map((meal) => (
        <MealItem key={meal.id} {...meal} />
      ))}
    </section>
  );
};

export default MealList;
