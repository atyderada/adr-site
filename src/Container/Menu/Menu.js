import React, { Component } from 'react';
import './Menu.css';
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
        this.setState({color: 'red'})
    }
    onHoverDesign = () => {
        this.setState({color: 'blue'})
    }
    onClickDev = () => {
        console.log("Show Dev")
        this.props.showDev();
    }
    onClickDesign = () => {
        console.log("Show Des")
        this.props.showDes();
    }
    render() {
        let content =
                <div id="outerContainer">
                    <div className="banner" onClick={() => this.props.showDev()}><h3>Development</h3></div>
                    <div className="banner" onClick={() => this.props.showDes()}><h3>Design</h3></div>
                </div>
        if (window.innerWidth > 768) {
            content = 
                <div id="outerContainer">
                    <HoverBox hover={this.onHoverDev}>
                        <div id="devBanner" className="banner" onClick={() => this.props.showDev()}><h3>Development</h3></div>
                    </HoverBox>
                    <HoverBox hover={this.onHoverDesign}>
                        <div id="designBanner" className="banner" onClick={() => this.props.showDes()}><h3>Design</h3></div>
                    </HoverBox>
                    <div id="layer"
                        style={{backgroundColor:this.state.color, opacity:0.7, position:"absolute", width:"100vw", height:"91vh", zIndex:0}}>
                    </div>
                </div>
        }
        return (
            <div id="menuContainer">
                <a id="menulogo">
                    <img
                        id="logoImage"
                        src={require('../../assets/logo.png')} alt='Adr-logo' />
                </a>
                <HoverBox hover={this.onHoverBar}>
                    <div id="whiteBar"><h3>PROJECTS</h3></div>
                </HoverBox>
                <div className="control" id="close" onClick={() => this.props.toggle()}>
                    <svg style={{width:24+'px',height:24+'px'}} viewBox="0 0 24 24">
                        <path fill="#000" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                    </svg>
                </div>
                {content}
            </div>
        );
    }
}

export default Menu;