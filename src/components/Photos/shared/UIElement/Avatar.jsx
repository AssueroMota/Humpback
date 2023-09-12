import React from 'react';
import './Avatar.css';

const Avatar = (props) => {
    return <img id={props.id} className={props.className} src={props.src} alt={props.alt} onClick={props.onClick} />
}

export default Avatar;