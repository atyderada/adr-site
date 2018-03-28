import React from 'react';
import './Development.css';

const development = (props) => {

    return (
        <div id='devContainer'>
            <div className="control" id="back" onClick={() => props.toggle()}>
                <svg style={{width:24+'px',height:24+'px'}} viewBox="0 0 24 24">
                    <path fill="#fff" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
            </div>
            <h2>Development</h2>
            <div id="devProjectsGrid">
                <div className="card mobileProject"></div>
                <div className="card desktopProject"></div>
                <div className="card desktopProject"></div>
                
                <div className="card desktopProject"></div>
                <div className="card desktopProject"></div>

                <div className="card desktopProject"></div>
                <div className="card mobileProject"></div>
                <div className="card desktopProject"></div>

                <div className="card desktopProject"></div>
                <div className="card desktopProject"></div>
            </div>
        </div>
    );
};

export default development;