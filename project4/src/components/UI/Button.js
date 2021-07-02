import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      onClick={props.onClick}
      className={classes.btn}
    >
      {props.children}
    </button>
  );
};

export default Button;
