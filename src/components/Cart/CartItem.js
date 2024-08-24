import React from 'react'
import classes from './CartItem.module.css'
import burger from '../../images/burger.jpg'

const CartItem = () => {
  return (
    <table className={classes.table}>
        <thead>
        <tr>
            <th className={classes.meal}>Meal</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td><div className={classes.mealcontainer}><div className={classes.image}><img src={burger} alt='' /></div><span>Burger</span></div></td>
            <td>$21.00</td>
            <td><button type='button' className={classes.button}>-</button> <span className={classes.quantity}>1</span> <button type='button' className={classes.button}>+</button></td>
            <td>$21.00</td>
        </tr>

        <tr>
            <td colSpan={2} className={classes.total}></td>
            <td className={classes.total}>TOTAL</td>
            <td className={classes.total}>$21.00</td>
        </tr>
        </tbody>
    </table>
  )
}

export default CartItem