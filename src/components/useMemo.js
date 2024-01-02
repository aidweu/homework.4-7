import React, { useState, useMemo, useCallback } from 'react';
import './useMemo.css'
const ExampleComponent = () => {

    const [count, setCount] = useState(0);
    const memoizedValue = useMemo(() => {

        console.log('Вычисление значения...');
        return count * 2;
    }, [count]);


    const memoizedCallback = useCallback(() => {

        console.log('Call вызван!', count);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <p>Double: {memoizedValue}</p>
            <button onClick={() => setCount(count + 1)}>Увеличить Count</button>
            <button onClick={memoizedCallback}>Вызвать Callback</button>
        </div>
    );
};

export default ExampleComponent;
