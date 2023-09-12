import React from 'react';
import './Close.css';

const Close = (props) => {
    return (
        <React.Fragment>
            <img className={props.className} src={props.src} alt={props.alt} onClick={props.onClick} />
        </React.Fragment>
    );
}

export default Close;