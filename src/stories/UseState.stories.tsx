import React, {useMemo, useState} from 'react';

export default {
    title: 'UseState'
}

const generateData = () => {
    //some difficult counting
    console.log('generateData')
    return 3214584
}

export const UseStateOptimized1 = () => {

    console.log('UseState')

    let initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState<number>(initValue)

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </div>
    );
}

export const UseStateOptimized2 = () => {
    console.log('UseState')

    const [counter, setCounter] = useState<number>(generateData)

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </div>
    );
}

export const UseStateOptimized3 = () => {
    console.log('UseState')

    const [counter, setCounter] = useState<number>(generateData)

    const changeState = (state: number) => state + 1

    return (
        <div>
            <button onClick={() => setCounter(changeState)}>+</button>
            {counter}
        </div>
    );
}