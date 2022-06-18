import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating, {RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {OnOff2} from './components/OnOff/OnOff2';
import {Accordion2} from './components/Accordion/Accordion2';
import {Rating2} from './components/Rating/Rating2';


function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [on, setOn] = useState(false)

    let [accordionCollapsed, setAccordionCollapsed] = useState(true)

    return (
        <div className="App">
            <PageTitle title={'This is controlled APP components!'}/>
            <OnOff isOn={on} callback={setOn}/>
            <Rating value={ratingValue} callBack={setRatingValue}/>
            <Accordion title={'Menu 1'}
                       collapsed={accordionCollapsed}
                       callback={() => setAccordionCollapsed(!accordionCollapsed)}/>

            <PageTitle title={'This is uncontrolled APP components!'}/>
            <Accordion2/>
            <Rating2/>
            <OnOff2/>
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
