import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Rating, {RatingValueType} from './Rating';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Rating stories',
    component: Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyRating = () => <Rating value={0} callBack={a=>a}/>
export const Rating1 = () => <Rating value={1} callBack={a=>a}/>
export const Rating2 = () => <Rating value={2} callBack={a=>a}/>
export const Rating3 = () => <Rating value={3} callBack={a=>a}/>
export const Rating4 = () => <Rating value={4} callBack={a=>a}/>
export const Rating5 = () => <Rating value={5} callBack={a=>a}/>
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(5);
    return <Rating value={rating} callBack={value=> setRating(value)}/>
}