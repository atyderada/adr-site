import React from 'react';
import './LandingScreen.css';
import { Link } from 'react-router-dom';

const landing = ( props ) => {

    var drops = [];
    var increment = 0;
    var index = 0;
    var iconsStyle;
    while (increment < 95) {
        //random number between 98 and 1
        var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        //random number between 4 and 2
        var randoFiver = (Math.floor(Math.random() * (4 - 2 + 1) + 2));
        //increment
        increment += randoFiver;
        //add in a new raindrop with various randomizations to certain CSS properties
        var dropStyle = {
            left: increment + "%",
            bottom: randoFiver - 1 + 97 + "%",
            animationDelay: randoHundo * 0.01 + 's',
            animationDuration: 1.5 + randoHundo * 0.01 + 's', 
        }
        var stemStyle = {
            animationDelay: randoHundo * 0.01 + 's',
            animationDuration: 1.5 + randoHundo * 0.01 + 's',
        }
        var splatStyle = {
            animationDelay: randoHundo * 0.01 + 's',
            animationDuration: 1.5 + randoHundo * 0.01 + 's',
        }
        drops.push(
            <div key={index} className="drop" style={dropStyle}>
                <div className="stem" style={stemStyle}></div>
                <div className="splat" style={splatStyle}></div>
            </div>)
        index += 1;
    }
    if (window.innerWidth > 750) {
        index = 0;
        increment = 0;
        while (increment < 95) {
            //random number between 98 and 1
            randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
            //random number between 4 and 2
            randoFiver = (Math.floor(Math.random() * (4 - 2 + 1) + 2));
            //increment
            increment += randoFiver;
            //add in a new raindrop with various randomizations to certain CSS properties
            var backDropStyle = {
                right: increment + "%",
                bottom: randoFiver - 1 + 103 + "%",
                animationDelay: randoHundo * 0.01  + 's',
                animationDuration: 1.5 + randoHundo * 0.01 + 's',
            }
            stemStyle = {
                animationDelay: randoHundo * 0.01 + 's',
                animationDuration: 1.5 + randoHundo * 0.01 + 's',
            }
            splatStyle = {
                animationDelay: randoHundo * 0.01 + 's',
                animationDuration: 1.5 + randoHundo * 0.01 + 's',
            }
            drops.push(
                <div key={index + 'b'} className="drop" style={backDropStyle}>
                    <div className="stem" style={stemStyle}></div>
                    <div className="splat" style={splatStyle}></div>
                </div>)
            index += 1;
        }
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
        <div>
            <div className="rain front-row">{drops}</div>
            <div className="controllers">
                <div id="lanlogo">
                    <img
                        id="logoImage"
                        src={require('../../assets/logo.png')} alt='Adr-logo' />
                </div>
                <Link to='/projects'>
                    <div className="control" id="menu">
                        <svg style={iconsStyle} viewBox="0 0 24 24">
                            <path fill="#000" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                        </svg>
                    </div>
                </Link>
                <Link to='/about'>
                    <div className="control" id="bottomArrow">
                        <svg style={iconsStyle} viewBox="0 0 24 24">
                            <path fill="#000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </div>
                </Link>
                <Link to='/gallery'>
                    <div className="control" id="gallery">GALLERY</div>
                </Link>
            </div>
            <div id="container">
                {/* <Link to='/about'> */}
                    <div id="titleFrame">
                        <div id="title">Anthony De Rada</div>
                        <br />
                        <br />
                        <div id="subtitle">DEVELOPER | DESIGNER</div>
                    </div>
                {/* </Link> */}
            </div>
        </div>
    );
};

export default landing;