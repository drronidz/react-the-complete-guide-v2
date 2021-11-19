import { createSlice, configureStore } from "@reduxjs/toolkit";


const initialState = {
    counter: 0,
    showCounter: true
}

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const INCREASE_BY_VALUE = 'INCREASE_BY_VALUE'
export const TOGGLE_COUNTER = 'TOGGLE_COUNTER'

const counterSlice = createSlice({
    name: 'COUNTER',
    initialState,
    reducers: {
        increment(state) {
            state.counter ++
        },
        decrement(state) {
            state.counter --
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})



const store = configureStore({
    // @ If we have One Reducer ...
    reducer: counterSlice.reducer
    // @ If we have Multiple Reducers ...
    /*reducer: {
        counter: counterSlice.reducer
    }*/
})


export const counterActions = counterSlice.actions

export default store