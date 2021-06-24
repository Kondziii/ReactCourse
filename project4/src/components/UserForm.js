import React from 'react';
import classes from './UserForm.module.css';

const UserForm = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={addUserHandler}>
      <div>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' />
      </div>
      <div>
        <label htmlFor='age'>Age(Years)</label>
        <input id='age' type='number' />
      </div>
      <button>Add user</button>
    </form>
  );
};

export default UserForm;
