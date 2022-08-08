import React, {useEffect, useState} from 'react';

type ClockPropsType = {}

export const Clock = (props: ClockPropsType) => {

    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {

        let id = setInterval(() => {
            console.log('Tick')
            setDate(new Date())
        }, 1000)

        return () => clearInterval(id)

    }, [])

    let getString = (props: number) => props < 10 ? '0' + props : props

    let secondsString = getString(date.getSeconds())
    let minutesString = getString(date.getMinutes())
    let hoursString = getString(date.getHours())

    return (
        <div>
            <span>{hoursString}</span>
            :
            <span>{minutesString}</span>
            :
            <span>{secondsString}</span>
        </div>
    );
};
