import FormExpense from './FormExpense';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseData = (expense) => {
    const newExpense = {
      id: Math.random().toString(),
      ...expense,
    };
    props.onAddExpense(newExpense);
  };

  return (
    <div className='new-expense'>
      <FormExpense onNewExpense={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
