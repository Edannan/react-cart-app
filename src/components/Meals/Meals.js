import React from "react";
import classes from "./Meals.module.css";
import MealList from "./MealList";

const Meals = () => {
  return (
    <main className={classes.main}>
      <div className={classes.headings}>
        <h3>Discover our Menu</h3>
        <h2>Our Menu</h2>
        <MealList />
      </div>
    </main>
  );
};

export default Meals;
