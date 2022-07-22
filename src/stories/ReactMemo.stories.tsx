import React, {useState} from 'react';

export default {
    title: 'React.memo'
}

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const StockUsers = (props: { users: Array<string> }) => {
    return <div>{props.users.map((el, i) => <div key={i}>{el}</div>)}</div>
}

const Users = React.memo(StockUsers)

export const Example1 = () => {

    const [counter, setCounter] = useState(0)

    const [users, setUsers] = useState(['Vasya', 'Dimych', 'Kolya'])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add user</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </div>
}