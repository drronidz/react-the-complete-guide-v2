import { createStore } from "redux";

const initialState = {
    counter: 0,
    showCounter: true
}

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const INCREASE_BY_VALUE = 'INCREASE_BY_VALUE'
export const TOGGLE_COUNTER = 'TOGGLE_COUNTER'

const counterReducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === DECREMENT) {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === INCREASE_BY_VALUE) {
        return {
            counter: state.counter + action.value,
            showCounter: state.showCounter
        }
    }

    if (action.type === TOGGLE_COUNTER) {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state
}

const store = createStore(counterReducer)

export default store