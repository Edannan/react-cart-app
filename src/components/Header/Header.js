import React, { Fragment } from "react";
import classes from "./Header.module.css";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <Fragment>
      <div className={classes.header}>
        <div className={classes.navbar}>
          <h1 className={classes.crimson}>JvnkFoods</h1>
          <CartButton />
        </div>
        <div className={classes['hero-message']}>
          <h1>WELCOME <span className={classes.crimson}>TO</span> YOUR <span className={classes.crimson}>DELICIOUS</span> JOURNEY!</h1>
          <p className={classes.paragraph}>Satisfy your cravings with our mouth-watering menu. Add your favorite dishes to the cart, customize your order, and enjoy a seamless checkout experience. Let's make your next meal unforgettable!</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
