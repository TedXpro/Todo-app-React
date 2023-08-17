import { useState } from 'react';
import { PropTypes } from 'prop-types';
import CounterButton from './CounterButton';
import './Counter.css';


export default function Counter() {

    const [count, setCount] = useState(0);

    function increamentCounterParentFunction(by) {
        setCount(count + by)
    }

    function decreamentCounterParentFucntion(by) {
        setCount(count - by)
    }

    function resetCounter() {
        setCount(0)
    }

    return (
        <>
            <span className='totalCount'>{count}</span>
            <CounterButton by={1}
                increamentMethod={increamentCounterParentFunction}
                decreamentMethod={decreamentCounterParentFucntion} />
            <CounterButton by={2}
                increamentMethod={increamentCounterParentFunction}
                decreamentMethod={decreamentCounterParentFucntion} />
            <CounterButton by={5}
                increamentMethod={increamentCounterParentFunction}
                decreamentMethod={decreamentCounterParentFucntion} />
            
            <button className='resetButton'
                onClick={resetCounter}
            >Reset</button>
        </>
    )
}
