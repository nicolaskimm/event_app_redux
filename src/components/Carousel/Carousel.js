import React from 'react';
import { connect } from 'react-redux';
import ImageSlide from './ImageSlide';
import actions from '../../duck/actions/carouselActions';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
library.add(faArrowLeft, faArrowRight);



const Carousel = (props) => {
	
	return (
		<div className="carousel">
            <FontAwesomeIcon icon={faArrowLeft} className='arrow carousel-arrow-left' onClick={ props.previousSlide }/>
                {props.promotedEvents.map((item, index) => (  
                    <ImageSlide    
                        key = {index}
                        index = {index}
                        url = {item.imgUrl}
                        organisator = {item.organisator}
                        city = {item.city}
                        place = {item.place}
                        street = {item.street}
                    />
                ))}
            <FontAwesomeIcon icon={faArrowRight} className='arrow carousel-arrow-right' onClick={ props.nextSlide }/>
			
		</div>
	);
}

const mapStateToProps = state => ({
    promotedEvents: state.promotedEvents.promotedEventsList
})

const mapDispatchToProps = dispatch => ({
    previousSlide: () => dispatch(actions.previousSlide())
})


export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
