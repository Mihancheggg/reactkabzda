import React, {useState} from 'react';

export const Accordion2 = () => {
    let [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle anotherTitle={'Users'}/>
            {!collapsed && <AccordionBody/>}
            <button onClick={()=>setCollapsed(!collapsed)}>Toggle</button>
        </div>
    );
};

type AccordionTitlePropsType = {
    anotherTitle: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return (
        <h3>{`This is ${props.anotherTitle}`}</h3>
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