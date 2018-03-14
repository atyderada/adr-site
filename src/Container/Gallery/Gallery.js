import React from 'react';
import './Gallery.css';
import PictureDetail from './PictureDetail/PictureDetail';

class Gallery extends React.Component {

    constructor() {
        super();
        this.state = {
            currentImage: '',
            showPopup: false
        };
    }
    closePopup() {
        this.setState({
            showPopup: false
        });
    }
    togglePopup(imageName) {
        this.setState({
            currentImage: imageName,
            showPopup: !this.state.showPopup
        });
    }
    render() {
        return (
            <div id="galleryContainer">
                <a id="logo">
                    <img
                        style={{ width: '3.4vmin', height: '3.4vmin', marginTop: '0vh'}}
                        src={require('../../assets/logo-inv.png')} alt='Adr-logo' />
                </a>
                <div className="control" id="home" onClick={() => this.props.toggle()} >
                    <svg style={{width:24+'px',height:24+'px'}} viewBox="0 0 24 24">
                        <path fill="#fff" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                    </svg>
                </div>
                <div id="galleryTitle">GALLERY</div>
                <div id="imageContainer">
                    <div className="box" onClick={this.togglePopup.bind(this)}></div>
                    <div className="box" onClick={this.togglePopup.bind(this)}></div>
                    <div className="box" onClick={this.togglePopup.bind(this)}></div>
                    <div className="box" onClick={this.togglePopup.bind(this)}></div>
                    <div className="box" onClick={this.togglePopup.bind(this)}></div>
                    <div className="box" onClick={this.togglePopup.bind(this)}></div>
                    <div className="box" onClick={this.togglePopup.bind(this)}></div>
                    <div className="box" onClick={this.togglePopup.bind(this)}></div>
                    <div className="box" onClick={this.togglePopup.bind(this)}></div>
                    <div className="box" onClick={this.togglePopup.bind(this)}></div>
                </div>
                {this.state.showPopup ? 
                <PictureDetail
                    url={this.state.imageName}
                    closePopup={this.closePopup.bind(this)}
                />
                : null}
            </div>
        );
    }
};

export default Gallery;
