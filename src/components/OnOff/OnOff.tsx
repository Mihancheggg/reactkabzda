// two squares: on & off, and a circle. If props === true, the 'on' is green and circle is green, else the 'off' is red and circle is red
import React from 'react';
import {inspect} from 'util';
import styles from './OnOff.module.css'

type OnOffPropsType = {
    isOn: boolean;
}

function On(){
    return(
        <div className={styles.container}>
            <button className={styles.green}>On</button>
            <button>Off</button>
            <div className={styles.circle + ' ' + styles.green}><span> </span></div>
        </div>
    )
}

function Off(){
    return(
        <div className={styles.container}>
            <button>On</button>
            <button className={styles.red}>Off</button>
            <div className={styles.circle + ' ' + styles.red}><span> </span></div>
        </div>
    )
}
export function OnOff(props: OnOffPropsType) {
    return (
        <div>
            {props.isOn ? <On/> : <Off/>}
        </div>
    );

}