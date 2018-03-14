import React from 'react';
import './PictureDetail.css';

const pictureDetail = ( props ) => {

    return (
        <div className='popup'>
            <div id="popContainer">
                <div id="picturesContainer"></div>
                <div id="infoBox"></div>
                <h3>props.url</h3>
                <button onClick={props.closePopup}>close me</button>
            </div>
        </div>
    );
};

export default pictureDetail;