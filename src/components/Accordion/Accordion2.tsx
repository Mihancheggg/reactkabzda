import React, {useReducer, useState} from 'react';

type ActionType = {
    type: string

}

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return {...state, collapsed: !state.collapsed}
        default:
            return state
    }

}

export const Accordion2 = () => {
    //let [collapsed, setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(reducer, {collapsed: true})

    let toggleBody = () => {
        //setCollapsed(!collapsed)
        dispatch({type: 'TOGGLE-COLLAPSED'})
    }

    return (
        <div>
            <AccordionTitle callback={toggleBody} anotherTitle={'Users'}/>
            {!state.collapsed && <AccordionBody/>}

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