import React, {ChangeEvent, useState} from 'react';

export type ItemType = {
    title: string;
    value: string | number;
}

export type SelectPropsType = {
    value: any;
    onChange: (value: any) => void;
    items: Array<ItemType>;
}

export const Select = (props: SelectPropsType) => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)
    return (
        <div>
            <select value={parentValue} onChange={onChange}>
                {props.items.map(item=> <option>{item.title}</option>)}
            </select>
            - {parentValue}
        </div>
    )
};
