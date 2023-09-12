import React from 'react';
import ReactDOM from 'react-dom';
import './Backdrop.css';

const Backdrop = (props) => {
    const content = <div className={props.className}></div>;
    return ReactDOM.createPortal(content, document.getElementById('backdrop-hooks'));
}

export default Backdrop;