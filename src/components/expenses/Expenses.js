import Card from '../UI/Card';
import './Expenses.css';
import '../newExpense/ExpenseFilter';
import ExpensesFilter from '../newExpense/ExpenseFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2021');

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  const filterChangeHandler = (year) => {
    setFilterYear(year);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
