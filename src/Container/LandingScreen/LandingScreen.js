import React from 'react';
import './LandingScreen.css';

const landing = ( props ) => {

    var drops = [];
    var increment = 0;
    var index = 0;
    while (increment < 42) {
        //random number between 98 and 1
        var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        //random number between 4 and 2
        var randoFiver = (Math.floor(Math.random() * (4 - 2 + 1) + 2));
        //increment
        increment += randoFiver;
        //add in a new raindrop with various randomizations to certain CSS properties
        var dropStyle = {
            left: increment + "%",
            bottom: randoFiver - 1 + 95 + "%",
            animationDelay: randoHundo * 0.01 + 's',
            animationDuration: 0.5 + randoHundo * 0.01 + 's', 
        }
        var backDropStyle = {
            right: increment + "%",
            bottom: randoFiver - 1 + 100 + "%",
            animationDelay: randoHundo * 0.02  + 's',
            animationDuration: 0.5 + randoHundo * 0.01 + 's',
        }
        var stemStyle = {
            animationDelay: randoHundo * 0.01 + 's',
            animationDuration: 0.5 + randoHundo * 0.01 + 's',
        }
        var splatStyle = {
            animationDelay: randoHundo * 0.01 + 's',
            animationDuration: 0.5 + randoHundo * 0.01 + 's',
        }
        index += 1;
        drops.push(
            <div key={index} className="drop" style={dropStyle}>
                <div className="stem" style={stemStyle}></div>
                <div className="splat" style={splatStyle}></div>
            </div>)
        drops.push(
            <div key={index + 'b'} className="drop" style={backDropStyle}>
                <div className="stem" style={stemStyle}></div>
                <div className="splat" style={splatStyle}></div>
            </div>)
    }

    return (
        <div>
            <div className="rain front-row">{drops}</div>
            <div className="controllers">
                <a className="control" id="logo">
                    <img
                        style={{ width: '3.4vmin', height: '3.4vmin', marginTop: '0vh'}}
                        src={require('../../assets/personal-logo.png')} alt='Adr-logo' />
                </a>
                {/* <div className="control" id="logo">ADR</div> */}
                <div className="control" id="menu" onClick={() => props.toggle()}>
                    <svg style={{width:24+'px',height:24+'px'}} viewBox="0 0 24 24">
                        <path fill="#000" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                    </svg>
                </div>
                <div className="control" id="bottomArrow" onClick={() => props.scroll()} >
                    <svg style={{width:24+'px',height:24+'px'}} viewBox="0 0 24 24">
                        <path fill="#000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                </div>
                {/* <div className="control" id="scroll">SCROLL</div> */}
                <div className="control" id="gallery" onClick={() => props.gallery()}>GALLERY</div>
            </div>
            <div id="container">
                <div id="titleFrame">
                <div id="title">Anthony De Rada</div>
                <br />
                <br />
                <div id="subtitle">DEVELOPER | DESIGNER</div>
                </div>
            </div>
        </div>
    );
};

export default landing;