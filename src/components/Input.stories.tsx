import React, {ChangeEvent, useRef, useState} from 'react';
import {Simulate} from 'react-dom/test-utils';
import select = Simulate.select;
import input = Simulate.input;


export default {
    title: 'Input stories',
    //component: input,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

};

export const UncontrolledInput = () => <input/>;

export const TrackedValueUncontrolledInput = () => {
    let [value, setValue] = useState<string>('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <><input onChange={onChangeHandler}/> - {value}</>;
};

export const TrackedValueUncontrolledInputByButtonPress = () => {
    let [value, setValue] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    };

    return <><input ref={inputRef}/>
        <button onClick={save}>Save</button>
        - actual value: {value}</>;
};

export const GetValueOfUncontrolledInput = () => {
    let [value, setValue] = useState<string>('');
    return <><input onChange={(e) => setValue(e.currentTarget.value)}/> - {value}</>;
};

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState<string>('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)
    return <input value={parentValue} onChange={onChange}/>
};

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState<boolean>(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)
    return <input type={'checkbox'} checked={parentValue} onChange={onChange}/>
};

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)
    return <select value={parentValue} onChange={onChange}>
        <option>None</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
    </select>
};
