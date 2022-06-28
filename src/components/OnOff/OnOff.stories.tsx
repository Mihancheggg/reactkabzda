import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {OnOff} from './OnOff';
import {action} from '@storybook/addon-actions';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'OnOff stories',
    component: OnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof OnOff>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

const click = action('on or off clicked')

export const OnMode = () => <OnOff isOn={true} callback={click}/>
export const OffMode = () => <OnOff isOn={false} callback={click}/>
export const ModeChange = () => {
    const [value,setValue] = useState<boolean>(false)
    return <OnOff isOn={value} callback={()=>setValue(!value)}/>
}
