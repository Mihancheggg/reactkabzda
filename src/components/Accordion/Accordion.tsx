import React from 'react';

export type ItemType = {
    title: string;
    value: string | number;
}


type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    callback: () => void;
    items: Array<ItemType>;
    onClick: (value: string | number) => void;
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');
    return (
        <div>
            <AccordionTitle anotherTitle={props.title} callback={props.callback}/>
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    anotherTitle: string;
    callback: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return (
        <h3 onClick={() => props.callback()}>{`This is ${props.anotherTitle}`}</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[];
    onClick: (value: string | number) => void;
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering');
    return (
        <ul>
            {props.items.map((item, index) => <li onClick={() => {
                props.onClick(item.value)
            }} key={index}>{item.title}</li>)}
        </ul>
    )
}

export default Accordion;