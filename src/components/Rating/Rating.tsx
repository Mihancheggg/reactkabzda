import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType;
    callBack: (props: RatingValueType) => void
}

function Rating(props: RatingPropsType) {
    console.log('Rating rendering');
    return (
        <div>
            <Star selected={props.value >= 1} callback={props.callBack} value={1}/>
            <Star selected={props.value >= 2} callback={props.callBack} value={2}/>
            <Star selected={props.value >= 3} callback={props.callBack} value={3}/>
            <Star selected={props.value >= 4} callback={props.callBack} value={4}/>
            <Star selected={props.value === 5} callback={props.callBack} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean;
    callback: (props: RatingValueType) => void
    value: RatingValueType
}

function Star(props: StarPropsType) {
    console.log('Star rendering');
    return (
        <span onClick={() => {
            props.callback(props.value)
        }}>{props.selected ? <b>star </b> : 'star '}</span>
    )

}

export default Rating;