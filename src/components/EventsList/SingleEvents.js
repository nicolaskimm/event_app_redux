import React from 'react';
import './styles/SingleEvent.css';

const SingleEvent = (props) => {

    return (
       <li id={props.id} className='single_event'>
        <img src='https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className='single_event-photo' alt='event'/>
        <h2>{props.organisator}</h2>
        <p>{props.place}</p>
        <p> {props.city}, {props.street}</p>
        <p>#{props.category}</p>
        <div className='single_event_bottom'>
            <div className='single_event_bottom-buttons'>
                <button className='single_event_bottom-buttons-delete' onClick={props.handleDelete}>x</button>
                <button className='single_event_bottom-buttons-edit'onClick={props.editElement}>edit</button>
            </div>
        </div>
       </li>
    )
}

export default SingleEvent;
