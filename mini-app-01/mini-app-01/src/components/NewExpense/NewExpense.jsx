import './NewExpense.css'
import React from 'react'
import ExpenseForm from "./ExpenseForm";



const NewExpense = (props) => {
    const saveExpenseDATAHandler = (enteredExpenseDATA) => {
        const expenseDATA = {
            ...enteredExpenseDATA,
            id: Math.random().toString()
        }
        console.log(expenseDATA)
        props.onAddExpense(expenseDATA)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseDATA={saveExpenseDATAHandler} />
        </div>
    )
}

export default NewExpense