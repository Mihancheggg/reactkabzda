import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {OnOff2} from './OnOff2';
import {action} from '@storybook/addon-actions';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'OnOff2 stories',
    component: OnOff2,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof OnOff2>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OnOff2> = (args) => <OnOff2 {...args} />;

const click = action('on or off clicked')

export const OnMode = () => <OnOff2 defaultOn={true} callback={click}/>
export const OffMode = () => <OnOff2 defaultOn={false} callback={click}/>
