import ExpenseItem from "../Expenses/ExpenseItem";
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import {useState} from "react";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {props.items.map(expense => {
                return (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                    )
            })}
        </Card>
    )
}

export default Expenses