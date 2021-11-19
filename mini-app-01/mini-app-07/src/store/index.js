import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";


const store = configureStore({
    // @ If we have One Reducer ...
    // reducer: counterSlice.reducer
    // @ If we have Multiple Reducers ...
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})





export default store