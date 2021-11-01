import React from 'react'
import './AddUser.css'

import Card from "../UI/Card";

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault()
    }

    return (
        <Card className="input">
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number"/>
                <button type="submit">Add User</button>
            </form>
        </Card>
    )
}

export default AddUser