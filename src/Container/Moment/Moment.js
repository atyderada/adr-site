import React from 'react';
import './Moment.css';

const moment = ( props ) => {
    return (
        <div className="Container">
            <div id="blackFrame">
                <div className="Frame">
                    <img id="black" className="Moment" src={require("../../assets/momentB.png")} alt="The Moment"/>
                </div>
            </div>
            {/* <div id="whiteFrame">
                <div className="Frame">
                    <img id="white" className="Moment" src={require("../../assets/momentW.png")} alt="The Moment"/>
                </div>
            </div> */}
        </div>
    )
};

export default moment;