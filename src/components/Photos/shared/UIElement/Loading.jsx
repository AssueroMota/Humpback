import React from 'react';
import './Loading.css';
import loadImage from '../../assets/icons/loading.gif';

const Loading = (props) => { 
    return <img src={loadImage} alt='Loading image' />; 
}

export default Loading;