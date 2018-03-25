import React, { Component } from 'react';
import './Menu.css';
import HoverBox from '../../Components/HoverBox/HoverBox';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          class: 'neutral',
          showMenu: false,
          showGallery: false,
          color: 'transparent',
        }
    }
    onHoverDev = () => {
        this.setState({color: 'blue'})
    }
    onHoverDesign = () => {
        this.setState({color: 'red'})
    }
    render() {
        let content =
                <div id="outerContainer">
                    <div className="banner"><h3>Development</h3></div>
                    <div className="banner"><h3>Design</h3></div>
                </div>
        if (window.innerWidth > 768) {
            content = 
                <div id="outerContainer">
                    <HoverBox hover={this.onHoverDev}>
                        <div id="devBanner" className="banner"><h3>Development</h3></div>
                    </HoverBox>
                    <HoverBox hover={this.onHoverDesign}>
                        <div id="designBanner" className="banner"><h3>Design</h3></div>
                    </HoverBox>
                    <div id="layer"
                        style={{backgroundColor:this.state.color, opacity:0.5, position:"absolute", width:"100vw", height:"100%", zIndex:0}}>
                    </div>
                </div>
        }
        return (
            <div id="menuContainer">
                <div id="whiteBar"><h3>PROJECTS</h3></div>
                <div className="control" id="close" onClick={() => this.props.toggle()}>
                    <svg style={{width:24+'px',height:24+'px'}} viewBox="0 0 24 24">
                        <path fill="#111" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                    </svg>
                </div>
                {content}
            </div>
        );
    }
}

export default Menu;