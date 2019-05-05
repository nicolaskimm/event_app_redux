import React from 'react';
import { Link } from 'react-router-dom';
import './styles/SingleEvent.css';

import { connect } from 'react-redux';
import actions from '../../duck/actions/eventActions';


const SingleEvent = (props) => {
    const { id, organisator, city, place, street, category, openSingleEvent, url} = props;

    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
       <li id={id} className='single_event'>
        <div className='single_event-photo' style={styles}></div>
        <h2>{organisator}</h2>
        <p>{place}</p>
        <p> {city}, {street}</p>
        <p>#{category}</p>
        <div className='single_event_bottom'>
            <div className='single_event_bottom-buttons'>
                <Link to={`/events/${id}`} className='single_event_bottom-link' onClick={() => openSingleEvent(id)}>learn more </Link>
            </div>
        </div>
       </li>
    )
}


const mapStateToProps = state => ({
    clickedEvent: state.events.clickedEvent
})

const mapDispatchToProps = dispatch => ({
    openSingleEvent: (id) => dispatch(actions.openSingleEvent(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleEvent)
