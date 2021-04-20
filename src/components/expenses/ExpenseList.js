import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
  return (
    <Card className='expenses'>
      {props.expenses.map((e) => {
        return (
          <ExpenseItem
            date={e.date}
            title={e.title}
            amount={e.amount}
            key={e.id}
          />
        );
      })}
    </Card>
  );
};

export default ExpenseList;
