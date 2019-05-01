import React from 'react';
import ActiveElementInfo from './ActiveElementInfo';

const ImageSlide = ({ url, index, street, place, city, organisator }) => {

  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '300px',
    height: '300px'
  };

  return (
    
    <div className='carousel-item-container'>
      <div 
        className={index || index === 0 ? "activeSlide" : "image-slide"}
        style={styles}
      >
      </div>

      {index === 1 
        ? <ActiveElementInfo
            organisator = {organisator}
            city = {city}
            place = {place}
            street = {street}
          />
        : ''
      }
    </div>
  );
}

export default ImageSlide;