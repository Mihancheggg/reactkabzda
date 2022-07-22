import React, {useMemo, useState} from 'react';

export default {
    title: 'UseMemo'
}

export const Example1 = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return (
        <div>
            <input type="number" value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input type="number" value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </div>
    )
}


//Example2

const StockUsers = (props: { users: Array<string> }) => {
    console.log('StockUsers')
    return <div>{props.users.map((el, i) => <div key={i}>{el}</div>)}</div>
}

const Users = React.memo(StockUsers)

export const Example2 = () => {
    console.log('Example2')

    const [counter, setCounter] = useState(0)

    const [users, setUsers] = useState(['Vasya', 'Dimych', 'Kolya'])

    const newUsers = useMemo(()=>{
        return users.filter(item=> item.toLowerCase().indexOf('a') !== -1)
    }, [users])

    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={newUsers}/>
    </div>
}