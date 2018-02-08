import React from 'react';
import './Gallery.css';

const gallery = ( props ) => {

    return (
        <div id="galleryContainer" className={props.className}>
            <div className="control" id="home" onClick={() => props.toggle()} >
                <svg style={{width:24+'px',height:24+'px'}} viewBox="0 0 24 24">
                    <path fill="#fff" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                </svg>
            </div>
            <h2>Gallery</h2>
        </div>
    );
};

export default gallery;