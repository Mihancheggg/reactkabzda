type AccordionPropsType = {
    title: string;
    collapsed: boolean;
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');
    return (
        <div>
            <AccordionTitle anotherTitle={props.title}/>
            {props.collapsed === false && <AccordionBody/>}
        </div>
    )
}

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

export default Accordion;