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
                    <Link to='/development' style={{ textDecoration: 'none' }}>
                        <div id="devBanner" className="banner"><h3>Development</h3></div>
                    </Link>
                    <Link to='/design' style={{ textDecoration: 'none' }}>
                        <div id="designBanner" className="banner"><h3>Design</h3></div>
                    </Link>
                </div>
        if (window.innerWidth > 1024) {
            content = 
                <div id="outerContainer">
                    <HoverBox hover={this.onHoverDev}>
                        <Link to='/development' style={{ textDecoration: 'none' }}>
                            <div id="devBannerL" className="banner"><h3>Development</h3></div>
                        </Link>
                    </HoverBox>
                    <HoverBox hover={this.onHoverDesign}>
                        <Link to='/design' style={{ textDecoration: 'none' }}>
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
                        <Link to='/'>
                            <div id="menulogo">
                                <img
                                    id="logoImage"
                                    src={require('../../assets/logo.png')} alt='Adr-logo' />
                            </div>
                        </Link>
                        <div id="menuTitle">PROJECTS</div>
                        <Link to='/'>
                            <div id="close">
                                <svg style={iconsStyle} viewBox="0 0 24 24">
                                    <path fill="#000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
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