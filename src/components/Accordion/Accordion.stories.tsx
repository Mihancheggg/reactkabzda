import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Accordion stories',
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

const click = action('Accordion mode changed')

export const CollapsedMode = () => <Accordion title={'Collapsed'} collapsed={true} callback={click}/>;
export const UncollapsedMode = () => <Accordion title={'Uncollapsed'} collapsed={false} callback={click}/>;
export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    return <Accordion title={collapsed ? 'Collapsed' :'Uncollapsed'} collapsed={collapsed} callback={()=> setCollapsed(!collapsed)}/>;
}
