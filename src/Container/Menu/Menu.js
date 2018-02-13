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
    onHoverProjects = () => {
        console.log("projects");
        this.setState({color: 'red'})
    }
    onHoverWebDev = () => {
        console.log("webDev");
        this.setState({color: 'yellow'})
    }
    onHoverDesign = () => {
        console.log("design");
        this.setState({color: 'blue'})
    }
    render() {
        let content =
                <div id="outerContainer">
                    <div className="banner"><h3>Projects</h3></div>
                    <div className="banner"><h3>Web Development</h3></div>
                    <div className="banner"><h3>Design</h3></div>
                </div>
        if (window.innerWidth > 768) {
            content = 
                <div id="outerContainer">
                    <HoverBox hover={this.onHoverProjects}>
                        <div className="banner"><h3>Projects</h3></div>
                    </HoverBox>
                    <HoverBox hover={this.onHoverWebDev}>
                        <div className="banner"><h3>Web Development</h3></div>
                    </HoverBox>
                    <HoverBox hover={this.onHoverDesign}>
                        <div className="banner"><h3>Design</h3></div>
                    </HoverBox>
                    <div id="layer"
                        style={{backgroundColor:this.state.color, opacity:0.1, position:"absolute", top:"0", left:"0", width:"100vw", height:"100vh", zIndex:0}}>
                    </div>
                </div>
        }
        return (
            <div>
                <div className="control" id="close" onClick={() => this.props.toggle()}>
                    <svg style={{width:24+'px',height:24+'px'}} viewBox="0 0 24 24">
                        <path fill="#ddd" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                    </svg>
                </div>
                {content}
            </div>
        );
    }
}

export default Menu;