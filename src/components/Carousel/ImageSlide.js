import React from 'react';
import ActiveElementInfo from './ActiveElementInfo';

const ImageSlide = ({ url, index, promotedEventInfo }) => {

  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (   
    <div className='carousel-item-container'>
      <div  
        className={index || index === 0 ? "activeSlide" : "image-slide"}
        style={styles}
      >
      </div>
      {index || index === 0  
        ? <ActiveElementInfo
            organisator = {promotedEventInfo.organisator}
            place = {promotedEventInfo.street}
            city = {promotedEventInfo.city}
            street = {promotedEventInfo.street}
          />
        : ''
      }
    </div>
  );
}

export default ImageSlide;