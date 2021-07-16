import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  console.log(cartContext);

  const cartItemsNum = cartContext.items.reduce(
    (currNum, item) => currNum + item.amount,
    0
  );
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{cartItemsNum}</span>
    </button>
  );
};

export default HeaderCartButton;
