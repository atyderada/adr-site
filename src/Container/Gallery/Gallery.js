import React from 'react';
import './Gallery.css';
import PictureDetail from './PictureDetail/PictureDetail';
import { Link } from 'react-router-dom';

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
        var iconsStyle;
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
            <div id="galleryContainer">
                <a id="logo">
                    <img
                        id="logoImag"
                        src={require('../../assets/logo.png')} alt='Adr-logo' />
                </a>
                <Link to='/'>
                    <div className="control" id="home">
                        <svg style={iconsStyle} viewBox="0 0 24 24">
                            <path fill="#000" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                        </svg>
                    </div>
                </Link>
                <div id="galleryTitle">GALLERY</div>
                <div id="imageContainer">
                    {/* <LazyImage className="box" src='../../assets/images/DarkSunset.jpg'></LazyImage> */}
                    <div className="box" onClick={() => this.togglePopup("DarkSunset.jpg")}>
                        <div className="picDescription"><h3>Blue Dusk</h3><h4>- Uyuni Salt Flats</h4></div>
                    </div>
                    <div className="box" onClick={() => this.togglePopup("FlyingTrain.JPG")}>
                        <div className="picDescription"><h3>Flying Train</h3><h4>@Uyuni Train Cemetery</h4></div>
                    </div>
                    <div className="box" onClick={() => this.togglePopup("GoldenDawn.JPG")}>
                        <div className="picDescription"><h3>Golden Sunset</h3><h4>@Uyuni Salt Flats</h4></div>
                    </div>
                    <div className="box" onClick={() => this.togglePopup("Sunset.JPG")}>
                        <div className="picDescription"><h3>Burning Dawn</h3><h4>@Uyuni Salt Flats</h4></div>
                    </div>
                    <div className="box" onClick={() => this.togglePopup("Illimani.jpg")}>
                        <div className="picDescription"><h3>Illimani</h3><h4>@Hotel Alkamari</h4></div>
                    </div>
                    <div className="box" onClick={() => this.togglePopup("Gaudi1.jpg")}>
                        <div className="picDescription"><h3>Blue Gingerbread House</h3><h4>@Park Güell</h4></div>
                    </div>
                    <div className="box" onClick={() => this.togglePopup("Gaudi2.jpg")}>
                        <div className="picDescription"><h3>Colored Gingerbread House</h3><h4>@Park Güell</h4></div>
                    </div>
                    <div className="box" onClick={() => this.togglePopup("UmedaSky.JPG")}>
                        <div className="picDescription"><h3>Umeda Sky Building</h3><h4>@Osaka</h4></div>
                    </div>
                    <div className="box" onClick={() => this.togglePopup("NeedleBoat.JPG")}>
                        <div className="picDescription"><h3>Floating Sky Tree</h3><h4>@Tokyo</h4></div>
                    </div>
                    <div className="box" onClick={() => this.togglePopup("OneToOne.JPG")}>
                        <div className="picDescription"><h3>One to One</h3><h4>@Yokohama</h4></div>
                    </div>
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
