import React from 'react';
import './Design.css';

const design = (props) => {

    return (
        <div id='devContainer'>
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

export default design;