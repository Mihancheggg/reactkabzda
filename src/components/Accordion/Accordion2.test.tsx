import React from 'react';
import {reducer, StateType} from './Accordion2';

test('reducer should change his value to opposite', () => {
    const a: StateType = {
        collapsed: false
    }

    const result1 = reducer(a, {type: 'TOGGLE-COLLAPSED'})

    expect(result1.collapsed).toBe(true)
});