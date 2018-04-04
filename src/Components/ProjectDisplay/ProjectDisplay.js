import React from 'react';
import './ProjectDisplay.css';

const projectDisplay = ( props ) => {

    let style;
    if (window.innerWidth > 750) {
        iconsStyle = {
            widht: 24+'px',
            height: 24+'px'
        }
    } else {
        iconsStyle = {
            widht: 18+'px',
            height: 18+'px'
        }
    }
    return (
        <div id="projectDisplayContainer">
        </div>
    );
};

export default projectDisplay;