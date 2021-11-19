import classes from './Counter.module.css';

import {useSelector, useDispatch} from 'react-redux'
import { counterActions } from "../store";

const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter.value)
    const showCounter = useSelector(state => state.counter.showCounter)

    const incrementHandler = () => {
        dispatch(counterActions.increment())
    }

    const increaseHandler = () => {
        dispatch(counterActions.increase(5))
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter())
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>INCREMENT</button>
                <button onClick={increaseHandler}>INCREASE BY 5</button>
                <button onClick={decrementHandler}>DECREMENT</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
