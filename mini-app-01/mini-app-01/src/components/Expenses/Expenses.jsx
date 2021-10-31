import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "../NewExpense/ExpensesList";
import ExpensesChart from "./ExpensesChart";
import React, {useState} from "react";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
}

export default Expenses