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

const callback = action('Accordion mode changed')
const click = action('Item was clicked')

export const CollapsedMode = () => <Accordion onClick={click} items={[]} title={'Collapsed'} collapsed={true}
                                              callback={callback}/>;
export const UncollapsedMode = () => <Accordion onClick={click} items={[]} title={'Uncollapsed'} collapsed={false}
                                                callback={callback}/>;
export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    return <Accordion onClick={(id)=> (alert(`User ${id}`))}
                      items={
                          [
                              {title: 'Dimych', value: 1},
                              {title: 'Valera', value: 2},
                              {title: 'Artem', value: 3}
                          ]
                      }
                      title={collapsed ? 'Collapsed' : 'Uncollapsed'}
                      collapsed={collapsed}
                      callback={() => setCollapsed(!collapsed)}/>;
}
