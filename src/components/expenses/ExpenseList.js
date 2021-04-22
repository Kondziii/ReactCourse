import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import '../newExpense/ExpenseFilter';
import ExpensesFilter from '../newExpense/ExpenseFilter';
import { useState } from 'react';

const ExpenseList = (props) => {
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
      {filteredExpenses.map((e) => (
        <ExpenseItem
          date={e.date}
          title={e.title}
          amount={e.amount}
          key={e.id}
        />
      ))}
    </Card>
  );
};

export default ExpenseList;
