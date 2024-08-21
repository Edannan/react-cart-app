import React from "react";
import classes from "./Meals.module.css";
import MealList from "./MealList";

const Meals = () => {
  return (
    <main className={classes.main}>
      <div className={classes.headings}>
        <h4>Our Menu</h4>
        <h3>Discover our Menu</h3>
        <MealList />
      </div>
    </main>
  );
};

export default Meals;
