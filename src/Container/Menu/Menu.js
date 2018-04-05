import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import HoverBox from '../../Components/HoverBox/HoverBox';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          color: 'transparent',
        }
    }
    onHoverBar = () => {
        this.setState({color: 'transparent'})
    }
    onHoverDev = () => {
        this.setState({color: '#C52E30'})
    }
    onHoverDesign = () => {
        this.setState({color: '#1B438F'})
    }
    render() {
        var iconsStyle;
        if (window.innerWidth > 768) {
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
        let content =
                <div id="outerContainer">
                    <Link to='/development'>
                        <div id="devBanner" className="banner"><h3>Development</h3></div>
                    </Link>
                    <Link to='/design'>
                        <div id="designBanner" className="banner"><h3>Design</h3></div>
                    </Link>
                </div>
        if (window.innerWidth > 1024) {
            content = 
                <div id="outerContainer">
                    <HoverBox hover={this.onHoverDev}>
                        <Link to='/development'>
                            <div id="devBannerL" className="banner"><h3>Development</h3></div>
                        </Link>
                    </HoverBox>
                    <HoverBox hover={this.onHoverDesign}>
                        <Link to='/design'>
                            <div id="designBannerL" className="banner"><h3>Design</h3></div>
                        </Link>
                    </HoverBox>
                    <div id="layer"
                        style={{backgroundColor:this.state.color, opacity:0.9, position:"absolute", width:"100vw", height:"90vh", zIndex:0}}>
                    </div>
                </div>
        }
        return (
            <div id="menuContainer">
                <HoverBox hover={this.onHoverBar}>
                    <div id="whiteBar">
                        <div id="menulogo">
                            <img
                                id="logoImage"
                                src={require('../../assets/logo.png')} alt='Adr-logo' />
                        </div>
                        <div id="menuTitle">PROJECTS</div>
                        <Link to='/'>
                            <div id="close">
                                <svg style={iconsStyle} viewBox="0 0 24 24">
                                    <path fill="#000" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </HoverBox>
                {content}
            </div>
        );
    }
}

export default Menu;