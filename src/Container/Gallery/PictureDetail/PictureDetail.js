import React from 'react';
import './PictureDetail.css';

const pictureDetail = (props) => {

    const imageUrl = require(`../../../assets/images/${props.url}`)
    console.log("Image url: " + imageUrl);
    return (
        <div className='popup' onClick={props.closePopup}>
            <div id="toast">Tap to exit</div>
            <div id="shineContainer">
                <div id="pictureContainer"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
            </div>
        </div>
    );
};

export default pictureDetail;