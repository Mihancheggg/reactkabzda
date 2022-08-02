import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect'
}

export const UseEffect1 = () => {

    console.log('UseEffect1')

    const [counter, setCounter] = useState<number>(0)
    const [fake, setFake] = useState<number>(0)

    useEffect(() => {
        console.log('useEffect first render and counter change')
        //api.get().then()
        //setInterval
        //document.get...
        document.title = counter.toString()
    }, [counter])

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render')
        document.title = counter.toString()
    }, [])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <button onClick={() => setFake(fake + 1)}>F</button>
            {fake}
        </div>
    );
}

export const UseEffectWithSetTimeout = () => {

    console.log('UseEffectWithSetTimeout')

    const [counter, setCounter] = useState<number>(0)
    const [fake, setFake] = useState<number>(0)

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])


    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <button onClick={() => setFake(fake + 1)}>F</button>
            {fake}
        </div>
    );
}
