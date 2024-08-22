import React from "react";
import classes from "./Meals.module.css";
import MealList from "./MealList";

const Meals = () => {
  return (
    <main className={classes.main}>
      <div className={classes.headings}>
        <h3>Our Menu</h3>
        <h1>Discover our Menu</h1>
        <MealList />
      </div>
    </main>
  );
};

export default Meals;
