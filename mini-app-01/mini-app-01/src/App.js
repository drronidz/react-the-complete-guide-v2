import React, {useState} from 'react'

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const INITIAL_EXPENSES = [
        {id: 'e1',title: 'Car Insurance 01', amount: 209.00, date: new Date(2021, 2, 28)},
        {id: 'e2' ,title: 'Car Insurance 02', amount: 259.00, date: new Date(2021, 6, 25)},
        {id: 'e3' ,title: 'Car Insurance 03', amount: 309.00, date: new Date(2021, 9, 28)},
        {id: 'e4' ,title: 'Car Insurance 04', amount: 401.10, date: new Date(2021, 12, 28)}
    ]

    const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

    const addExpenseHandler = expense => {
        console.log('In App.js')
        console.log(expense)
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses]
        })
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
