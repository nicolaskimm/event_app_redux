import React from 'react';
import { connect } from 'react-redux';
import './style/EventClicked.css';


const ClickedEvent = ({ events, clickedEvent }) => {
    const filteredEvent = events.filter(item =>
        item.id === clickedEvent
    )

    const iv = filteredEvent[0];

    const styles = {
        backgroundImage: `url(${iv.imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className='singleEventInfo'>
            <div className='singleEventInfo-up'>
                <div className='singleEventInfo_left'>
                    <div className='singleEventInfo_left-photo' style={styles}></div>
                </div> 
                <div className='singleEventInfo_right'>
                    <h1 className='singleEventInfo_right-text'>{iv.organisator}</h1>
                    <h3 className='singleEventInfo_right-text'>{iv.startDate} - {iv.endDate} </h3>
                </div>
            </div>
            <p className='singleEventInfo-up-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit tellus, interdum id fermentum vitae, imperdiet at erat. 
                    Mauris facilisis arcu id elit laoreet, nec condimentum est ornare. Sed iaculis sem felis, non lobortis leo suscipit eget. 
                    Proin facilisis lacus vel mi pretium tincidunt. In at quam non justo porta finibus a dictum nisi. Vestibulum luctus aliquam sagittis. 
                    Mauris tristique ligula sed bibendum pulvinar. Ut id odio elementum, scelerisque neque a, elementum ante. 
                    Curabitur id nisl ornare, faucibus ex tempor, aliquam neque. Maecenas ac augue sollicitudin ligula elementum aliquam. 
                    Vivamus volutpat cursus fermentum. Vivamus velit lacus, vestibulum vel lorem at, pharetra convallis velit. 
                    Nullam hendrerit ac quam id rutrum. Cras euismod ipsum ut mi faucibus, ut pharetra sapien feugiat.    
                    </p>
            <h2>Where</h2>
            <hr></hr>
        </div>
    )   
}

const mapStateToProps = state => ({
    events: state.events.eventsList,
    clickedEvent: state.events.clickedEvent
})

export default connect(mapStateToProps, null)(ClickedEvent);
