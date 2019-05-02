import React from 'react';
import { connect } from 'react-redux';
import ImageSlide from './ImageSlide';
import actions from '../../duck/actions/carouselActions';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
library.add(faArrowLeft, faArrowRight);



const Carousel = ({ currentImageIndex, promotedEvents, moveSlide, promotedUrls }) => {

    const lastIndex = promotedEvents.length - 1;
    const shouldResetIndexForPrevious = currentImageIndex === 0;
    const shouldResetIndexForNext = currentImageIndex === lastIndex;

    const indexPrevious =  shouldResetIndexForPrevious ? lastIndex : currentImageIndex - 1;
    const indexNext = shouldResetIndexForNext ? 0 : currentImageIndex + 1;
    
    const promotedUrlNext = promotedUrls[currentImageIndex + 1] ? promotedUrls[currentImageIndex + 1] : promotedUrls[0];
    const promotedUrlPrevious = promotedUrls[currentImageIndex - 1] ? promotedUrls[currentImageIndex - 1] : promotedUrls[lastIndex];

    console.log(indexPrevious, currentImageIndex, indexNext);

	return (
		<div className="carousel">
            <FontAwesomeIcon icon={faArrowLeft} className='arrow carousel-arrow-left' onClick={() => moveSlide(indexPrevious)}/>
                <ImageSlide url={promotedUrlPrevious}/>
                <ImageSlide 
                    url={ promotedUrls[currentImageIndex] } 
				    index={currentImageIndex} 
				    promotedEventInfo = {promotedEvents[currentImageIndex]}
                />
                <ImageSlide url={promotedUrlNext}/>
            <FontAwesomeIcon icon={faArrowRight} className='arrow carousel-arrow-right' onClick={() => moveSlide(indexNext)}/>	
		</div>
	);
}

const mapStateToProps = state => ({
    promotedEvents: state.promotedEvents.promotedEventsList,
    currentImageIndex: state.promotedEvents.currentImageIndex,
    promotedUrls: state.promotedEvents.promotedUrls
})

const mapDispatchToProps = dispatch => ({
    moveSlide: (index) => dispatch(actions.moveSlide(index))
})


export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
