import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
export default function NewExpense(props) {
  const [isEditing,setIsEditing] = useState(false);

  const saveExpenseDataHandler = (entredExpenseData) =>{
    const expenseData={
      ...entredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  };
  const startEditingHandler = () =>{
    setIsEditing(true);
  }
  const stopEditingHandler = ()=>{
    setIsEditing(false);
  }
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  )
}
