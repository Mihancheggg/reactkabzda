import React, {useEffect, useState} from 'react';
import {Clock} from './Clock';

export default {
    title: 'Clock stories',
    component: Clock
}

export const BaseDigitalExample = () => {
    return <Clock mode={'digital'}/>
}

export const BaseAnalogExample = () => {
    return <Clock mode={'analog'}/>
}