import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Rating2} from './Rating2';
import {action} from '@storybook/addon-actions';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Rating2 stories',
    component: Rating2,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Rating2>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating2> = (args) => <Rating2 {...args}/>;

const callback = action('clicked')

export const CopyRate = Template.bind({})
CopyRate.args = {
    defaultValue: 0,
    onChange: callback,
}



export const EmptyRating = () => <Rating2 defaultValue={0} onChange={callback}/>
export const Rated1 = () => <Rating2 defaultValue={1} onChange={callback}/>
export const Rated2 = () => <Rating2 defaultValue={2} onChange={callback}/>
export const Rated3 = () => <Rating2 defaultValue={3} onChange={callback}/>
export const Rated4 = () => <Rating2 defaultValue={4} onChange={callback}/>
export const Rated5 = () => <Rating2 defaultValue={5} onChange={callback}/>

