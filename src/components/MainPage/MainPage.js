import React from 'react';
import Carousel from '../Carousel/Carousel';
import './styles/MainPage.css';

const MainPage = (props) => {
    return (
        <div className='mainPage'>
            <h1 className='mainPage_title'> iventi. </h1>
            <div className='mainPage_carousel'>
                <Carousel />
            </div>                
        </div>
    )
}

export default MainPage;