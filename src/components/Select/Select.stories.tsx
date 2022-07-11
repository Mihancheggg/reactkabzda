import React, {ChangeEvent, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Select} from './Select'
import {v1} from 'uuid';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Select stories',
    component: Select,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const callback = action('Accordion mode changed')
const click = action('Item was clicked')


export const TestSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)
    return <select value={parentValue} onChange={onChange}>
        <option>None</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
    </select>
};

export const Select2 = () => <Select value={3} onChange={action}
                                     items={[
                                         {value: 1, title: 'Vasya'},
                                         {value: 2, title: 'Katya'},
                                         {value: 3, title: 'Petya'},
                                     ]}/>