import React from 'react';

type OnOffPropsType = {
    isOn: boolean;
    callback: (on: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

    const onStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: (props.isOn ? 'green' : 'white')
    }

    const offStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '2px',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: (props.isOn ? 'white' : 'red')
    }

    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: (props.isOn ? 'green' : 'red')
    }

    return (
        <div>
            <div style={onStyle} onClick={() => props.callback(true)}>On</div>
            <div style={offStyle} onClick={() => props.callback(false)}>Off</div>
            <div style={indicatorStyle}>.</div>
        </div>
    );
};