import React from 'react';
import classes from './Header.module.css';
import mealImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onCartOpen} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealImage} alt='Image with dishes' />
      </div>
    </>
  );
};

export default Header;
