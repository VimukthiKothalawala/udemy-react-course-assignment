import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
export default function NewExpense(props) {
  const saveExpenseDataHandler = (entredExpenseData) =>{
    const expenseData={
      ...entredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}
