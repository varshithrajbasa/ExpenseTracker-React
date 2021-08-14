import React from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) =>{
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onExpenseDataHandler(expenseData);

    }

    return <div className="new-expense">
        <h2>New Expense</h2>
        <NewExpenseForm onSaveExpensedata={saveExpenseHandler} />
    </div>;
}
export default NewExpense;