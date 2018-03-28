import React from 'react';
import './Gallery.css';
import PictureDetail from './PictureDetail/PictureDetail';
import LazyImage from '../../Components/LazyImage/LazyImage';

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
        console.log("image: " + imageName);
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
                        id="logoImag"
                        src={require('../../assets/logo-inv.png')} alt='Adr-logo' />
                </a>
                <div className="control" id="home" onClick={() => this.props.toggle()} >
                    <svg style={{width:24+'px',height:24+'px'}} viewBox="0 0 24 24">
                        <path fill="#fff" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                    </svg>
                </div>
                <div id="galleryTitle">GALLERY</div>
                <div id="imageContainer">
                    {/* <LazyImage className="box" src='../../assets/images/DarkSunset.jpg'></LazyImage>
                    <LazyImage className="box" src='../../assets/images/FlyingTrain.JPG'></LazyImage>
                    <LazyImage className="box" src='../../assets/images/GoldenDawn.JPG'></LazyImage>
                    <LazyImage className="box" src='../../assets/images/Sunset.JPG'></LazyImage>
                    <LazyImage className="box" src='../../assets/images/Illimani.jpg'></LazyImage>
                    <LazyImage className="box" src='../../assets/images/Gaudi1.jpg'></LazyImage>
                    <LazyImage className="box" src='../../assets/images/Gaudi2.jpg'></LazyImage>
                    <LazyImage className="box" src='../../assets/images/UmedaSky.JPG'></LazyImage>
                    <LazyImage className="box" src='../../assets/images/NeedleBoat.JPG'></LazyImage>
                    <LazyImage className="box" src='../../assets/images/OneToOne.JPG'></LazyImage> */}
                    <div className="box" onClick={() => this.togglePopup("DarkSunset.jpg")}></div>
                    <div className="box" onClick={() => this.togglePopup("FlyingTrain.JPG")}></div>
                    <div className="box" onClick={() => this.togglePopup("GoldenDawn.JPG")}></div>
                    <div className="box" onClick={() => this.togglePopup("Sunset.JPG")}></div>
                    <div className="box" onClick={() => this.togglePopup("Illimani.jpg")}></div>
                    <div className="box" onClick={() => this.togglePopup("Gaudi1.jpg")}></div>
                    <div className="box" onClick={() => this.togglePopup("Gaudi2.jpg")}></div>
                    <div className="box" onClick={() => this.togglePopup("UmedaSky.JPG")}></div>
                    <div className="box" onClick={() => this.togglePopup("NeedleBoat.JPG")}></div>
                    <div className="box" onClick={() => this.togglePopup("OneToOne.JPG")}></div>
                </div>
                {this.state.showPopup ? 
                <PictureDetail
                    url={this.state.currentImage}
                    closePopup={this.closePopup.bind(this)}
                />
                : null}
            </div>
        );
    }
};

export default Gallery;
