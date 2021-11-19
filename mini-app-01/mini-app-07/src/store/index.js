import { createSlice, configureStore } from "@reduxjs/toolkit";


const initialCounterState = {
    value: 0,
    showCounter: true
}

const initialAuthState = {
    isAuthenticated: false
}

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const INCREASE_BY_VALUE = 'INCREASE_BY_VALUE'
export const TOGGLE_COUNTER = 'TOGGLE_COUNTER'

const counterSlice = createSlice({
    name: 'COUNTER',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.value ++
        },
        decrement(state) {
            state.value --
        },
        increase(state, action) {
            state.value = state.value + action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})



const store = configureStore({
    // @ If we have One Reducer ...
    // reducer: counterSlice.reducer
    // @ If we have Multiple Reducers ...
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})


export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

export default store