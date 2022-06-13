import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {OnOff2} from './components/OnOff/OnOff2';
import {Accordion2} from './components/Accordion/Accordion2';
import {Rating2} from './components/Rating/Rating2';

function App() {
    let[on, setOn] = useState(false)
  return (
    <div className="App">
      <PageTitle title={"This is APP component!"}/>
      <Rating value={3}/>
      <PageTitle title={"This is still APP component!"}/>
      <Accordion title={"Menu 1"} collapsed={false}/>
      <Accordion2 />
      <Rating value={4}/>
      <Rating2 />
        <OnOff2 />
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
}

function PageTitle(props: PageTitlePropsType) {
  console.log("PageTitle rendering");
  return(
    <>{props.title}</>
  )
}

export default App;
