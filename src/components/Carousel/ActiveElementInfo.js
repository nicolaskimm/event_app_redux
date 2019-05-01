import React from 'react';
//import './ActiveElement.css';

const ActiveElementInfo = ({organisator, place, city, street}) => {

    return (
        <div className='promotedText'>
            <h1 className='promotedText_organisator'> {organisator} </h1> 
            <p className='promotedText_place'> {place} </p> 
            <p className='promotedText_place'> {city}, {street} </p> 
            <button className='promotedText_button'>show me more</button>   
        </div>

    )
}

export default ActiveElementInfo;