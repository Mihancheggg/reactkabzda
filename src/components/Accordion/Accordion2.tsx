import React, {useState} from 'react';

export const Accordion2 = () => {
    let [collapsed, setCollapsed] = useState(true)

    let toggleBody = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle callback={toggleBody} anotherTitle={'Users'}/>
            {!collapsed && <AccordionBody/>}

        </div>
    );
};

type AccordionTitlePropsType = {
    anotherTitle: string;
    callback: () => void;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return (
        <h3 onClick={props.callback}>{`This is ${props.anotherTitle}`}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}