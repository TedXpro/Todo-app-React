// import { useState } from 'react';
import { PropTypes } from 'prop-types';

export default function CounterButton({ by, increamentMethod, decreamentMethod }) {

    // const [count, setCount] = useState(0);  // 0 is the default value.

    console.log(by)

    // using lmbda function.
    // function incrementCounterFunction() {
    //     // setCount(count + by);
    //     increamentMethod(by)
    // }

    // using lmbda function and removing this from onCLick ={}
    // function decreamentCounterFucntion() {
    //     // setCount(count - by);
    //     decreamentMethod(by)
    // }

    return (
        <div className="Counter">
            <div>
                <button className="counterButton"
                    onClick={() => increamentMethod(by)}
                >+{by}</button>

                <button className='counterButton'
                    onClick={() => decreamentMethod(by)}
                >-{by}</button>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 10
}