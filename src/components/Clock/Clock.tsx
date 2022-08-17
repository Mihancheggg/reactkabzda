import React, {useEffect, useState} from 'react';
import {DigitalClocks} from './DigitalClocks';
import {AnalogClocks} from './AnalogClocks';

type ClockPropsType = {
    mode?: 'analog' | 'digital'
}

export const Clock = (props: ClockPropsType) => {

    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {

        let id = setInterval(() => {
            console.log('Tick')
            setDate(new Date())
        }, 1000)

        return () => clearInterval(id)

    }, [])



    /*let secondsString = getString(date.getSeconds())
    let minutesString = getString(date.getMinutes())
    let hoursString = getString(date.getHours())*/

    let view;

    switch (props.mode){
        case 'digital':
            view = <DigitalClocks date={date}/>
            break;
        case 'analog':
            view = <AnalogClocks date={date}/>
            break;
        default:
            view = <DigitalClocks date={date}/>
            break;
    }

    return (
        <div>
            {view}
        </div>
    );
};

export type ClockDatePropsType = {
    date: Date
}

