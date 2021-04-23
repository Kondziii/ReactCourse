import FormExpense from './FormExpense';
import './NewExpense.css';
import { useState } from 'react';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseData = (expense) => {
    const newExpense = {
      id: Math.random().toString(),
      ...expense,
    };
    props.onAddExpense(newExpense);
    setIsEditing(false);
  };

  const showFormHandler = () => {
    setIsEditing(true);
  };

  const closeFormHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={showFormHandler}>Add a new expense</button>
      )}
      {isEditing && (
        <FormExpense
          onNewExpense={saveExpenseData}
          onCancel={closeFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
