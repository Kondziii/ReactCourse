import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
  if (parseInt(props.expenses.length) === 0) {
    return <p className='expenses-list__fallback'>No expenses found.</p>;
  }

  return (
    <ul className='expenses-list'>
      {props.expenses.map((e) => (
        <ExpenseItem
          date={e.date}
          title={e.title}
          amount={e.amount}
          key={e.id}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
