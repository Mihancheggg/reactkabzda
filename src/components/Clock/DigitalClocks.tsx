import React from 'react';
import {ClockDatePropsType} from './Clock';

export const getString = (props: number) => props < 10 ? '0' + props : props

export const DigitalClocks: React.FC<ClockDatePropsType> = ({date}) => {
    return (
        <>
            <span>{getString(date.getHours())}</span>
            :
            <span>{getString(date.getMinutes())}</span>
            :
            <span>{getString(date.getSeconds())}</span>
        </>
    )
}