import React from 'react';
import { connect } from 'react-redux';
import SingleEvent from './SingleEvents';
import EventForm from '../EventForm/EventForm';
//import ResetEvent from '../components/ResetEvents';
import './styles/EventsList.css';


const EventsList = (props) => {

    return (
        <div className='eventsListWrapper'>
            <EventForm />
            <ul className='eventsList'>
                {props.events.map((item, index) =>
                    <SingleEvent
                        key = {index}
                        id = {item.id}
                        url = {item.imgUrl}
                        organisator = {item.organisator}
                        description = {item.description}
                        place = {item.place}
                        city = {item.city}
                        street = {item.street}
                        startDate = {item.startDate}
                        endDate = {item.endDate}
                        category = {item.category}
                        handleDelete = {props.handleDelete}
                        checkStuff = {props.checkStuff}
                        editElement = {props.editElement}
                    /> 
                )}
            </ul>
        </div>
        
    );
};

const mapStateToProps = state => ({
    events: state.events.eventsList
})


export default connect(mapStateToProps, {})(EventsList);