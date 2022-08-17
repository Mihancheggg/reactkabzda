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

export const UseEffectWithSetInterval = () => {

    console.log('UseEffectWithSetTimeout')

    const [counter, setCounter] = useState<number>(0)
    const [fake, setFake] = useState<number>(0)

    useEffect(() => {
        let id = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(id)
        }
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

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)

    console.log('Component rendered')

    useEffect(() => {
        console.log('Effect occurred' + counter)

        return () => {
            console.log('Reset effect' + counter)
        }
    }, [counter])

    return <div>
        Hello, counter: {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText((state: string) => state + e.key)
        }
        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [])

    return (
        <div>
            Typed text: {text}
        </div>
    )
}
