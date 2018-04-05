import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const about = ( props ) => {

    let iconsStyle;
    let extra;
    if (window.innerWidth > 750) {
        iconsStyle = {
            widht: 24+'px',
            height: 24+'px'
        }
        extra = 
            <div className="aboutExtra">
                <div className="aboutText">
                    <span>I will be graduating from Rose-Hulman in May 2018</span> <a href="http://www.rose-hulman.edu/" target="_blank" rel="noopener noreferrer">
                        <img id="roseImg" className="aboutIcon" src={require('../../assets/Rose-Logo.png')} alt="Rose Hulman Icon" />
                    </a>
                    I am from the vibrant city of La Paz, Bolivia  <a href="https://www.youtube.com/playlist?list=PLFTQSQOjNIfNKpVekjwU3pzDtlZBKVYp3" target="_blank" rel="noopener noreferrer">
                        <img id="boliviaImg" className="aboutIcon" src={require('../../assets/bolivia-map.png')} alt="Bolivia map" />
                    </a>
                    My favorite things are food, music, travel and photography.
                    Feel free to check out the links bellow or contact me through email.
                    Have a great day!
                </div>
            </div>
    } else {
        iconsStyle = {
            widht: 18+'px',
            height: 18+'px'
        }
    }
    return (
        <div id="aboutContainer">
            <Link to='/'>
                <div className="control" id="topArrow" >
                    <svg style={iconsStyle} viewBox="0 0 24 24">
                        <path fill="#000000" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
                    </svg>
                </div>
            </Link>
            <div id="waves">
                <div className="wave wave_1"></div>
                <div className="wave wave_2"></div>
                <div className="wave wave_3"></div>
                <div className="wave wave_4"></div>
                <div className="wave wave_5"></div>
            </div>
            <div id="bottom">
                <div id="footer">
                    <a href="https://github.com/atyderada" target="_blank" rel="noopener noreferrer">
                        <svg className="iconButton" viewBox="0 0 24 24">
                            <path fill="#fff" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/anthony-de-rada/" target="_blank" rel="noopener noreferrer">
                        <svg className="iconButton" viewBox="0 0 24 24">
                            <path fill="#fff" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
                        </svg>
                    </a>
                    <a href="mailto:anthonyderada@gmail.com" target="_top">
                        <svg className="iconButton" viewBox="0 0 24 24">
                            <path fill="#fff" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                        </svg>
                    </a>
                </div>
            </div>
            <div id="top">
                <span id="aboutTitle">About</span>
                <div className="aboutInner">
                    <div id="aboutPicture"></div>
                    <span className="aboutText">
                        Hey There!
                        I'm a Computer Science student with an edge for Web/Mobile Application Design and Development.
                        I love designing beautiful interfaces and implementing them into smooth and engaging Applications.
                        I use the adobe creative suite and mostly Javascript/Typescript.
                    </span>
                </div>
                {extra}
            </div>
        </div>
    );
};

export default about;