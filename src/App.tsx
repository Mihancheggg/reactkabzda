import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating, {RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {OnOff2} from './components/OnOff/OnOff2';
import {Accordion2} from './components/Accordion/Accordion2';
import {Rating2} from './components/Rating/Rating2';
import {Select} from './components/Select/Select';


function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [on, setOn] = useState(false)

    let [accordionCollapsed, setAccordionCollapsed] = useState(true)

    return (
        <div className="App">
            <PageTitle title={'These are controlled APP components!'}/>
            <OnOff isOn={on} callback={setOn}/>
            <Rating value={ratingValue} callBack={setRatingValue}/>
            <Accordion
                onClick={() => {
                }}
                title={'Menu 1'}
                collapsed={accordionCollapsed}
                callback={() => setAccordionCollapsed(!accordionCollapsed)}
                items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Artem', value: 3}]}/>
            <Select
                value={3}
                onChange={() => {}}
                items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Artem', value: 3}]}/>
            <PageTitle title={'These are uncontrolled APP components!'}/>
            <Accordion2/>
            <Rating2 onChange={() => {
        }}/>
            <OnOff2 callback={setOn}/> {on.toString()}
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering');
    return (
        <h2>{props.title}</h2>
    )
}

export default App;
