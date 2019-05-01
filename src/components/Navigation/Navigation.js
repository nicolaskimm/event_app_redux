import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


const Navigation = () => {
    return (
        <ul>    
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
        </ul>
    )
}

export default Navigation;