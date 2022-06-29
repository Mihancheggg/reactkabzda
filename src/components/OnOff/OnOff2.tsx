import React, {useState} from 'react';

type OnOff2PropsType = {
    callback: (isOn: boolean) => void
    defaultOn?: boolean
}

export const OnOff2 = (props: OnOff2PropsType) => {

    let [on, setOn] = useState<boolean>(props.defaultOn !== undefined ? props.defaultOn : true)

    const onStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: (on ? 'green' : 'white')
    }

    const offStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '2px',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: (on ? 'white' : 'red')
    }

    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: (on ? 'green' : 'red')
    }

    const onClicked = () => {
        setOn(true)
        props.callback(true)
    }

    const offClicked = () => {
        setOn(false)
        props.callback(false)
    }

    return (
        <div>
            <div style={onStyle}
                 onClick={onClicked}>On
            </div>
            <div style={offStyle}
                 onClick={offClicked}>Off
            </div>
            <div style={indicatorStyle}>.</div>
        </div>
    );
};
