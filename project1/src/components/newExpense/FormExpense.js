import './FormExpense.css';
import { useState } from 'react';

const FormExpense = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const newExpense = {
      title,
      amount: +amount,
      date: new Date(date),
    };
    props.onNewExpense(newExpense);
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type='number'
              min='0.01'
              step='0.01'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button onClick={props.onCancel}>Cancel</button>
          <button type='submit'>Add expense</button>
        </div>
      </form>
    </div>
  );
};

export default FormExpense;
