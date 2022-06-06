import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';

function App() {
  return (
    <div className="App">
      <PageTitle title={"This is APP component!"}/>
      <Rating value={3}/>
      <PageTitle title={"This is still APP component!"}/>
      <Accordion title={"Menu 1"} collapsed={false}/>
      <Accordion title={"Menu 2"} collapsed={true}/>
      <Rating value={4}/>
      <Rating value={0}/>
        <OnOff isOn={true}/>
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
