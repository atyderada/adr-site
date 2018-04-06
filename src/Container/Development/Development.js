import React from 'react';
import './Development.css';
import { Link } from 'react-router-dom';

const development = (props) => {

    let iconsStyle = {
        widht: 18+'px',
        height: 18+'px'
    }
    let title = <div style={{
                    gridArea: '1 / 3 / 1 / 7',
                    fontSize: '12pt',
                    fontWeight: '500',
                    lineHeight: '24pt',
                    letterSpacing: '3pt'}}>
                <br/>Development</div>
    if (window.innerWidth > 768) {
        title = <div style={{
                    gridArea: '1 / 4 / 1 / 6',
                    fontSize: '18pt',
                    fontWeight: '500',
                    lineHeight: '36pt',
                    letterSpacing: '4pt'}}>
        <br/>Development</div>
        iconsStyle = {
            widht: 30+'px',
            height: 30+'px'
        }
    }
    return (
        <div id='devContainer'>
            <div id="devLogo">
                <img
                    id="logoImage"
                    src={require('../../assets/logo.png')} alt='Adr-logo' />
            </div>
            <Link to='/projects'>
                <div className="control" id="devBack">
                    <svg style={iconsStyle} viewBox="0 0 24 24">
                        <path fill="#000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                    </svg>
                </div>
            </Link>
            <div id="devProjectsGrid">
                {title}
                <div style={{gridArea: '2 / 2 / 5 / 8'}} className="card">
                    <div id="one" className="cardPic"></div>
                    <div className="cardDesc">
                        <div className="projectTop">
                            <div className="projectTitle">Portfolio Site</div>
                            <div className="projectSubtitle">Cross-platform Web Application (2018)</div>
                        </div>
                        <div className="projectBottom">
                            <div className="projectDescription">I developed this website to display some of my development/design projects and photography</div>
                            <div className="projectStack">
                                <span>What Did I use: React v16</span>
                                <span>What Did I learn: React Router v4</span>
                                <span>Where Did I improve: React skills, CSS animations, Cross-platform design/development</span>
                            </div>
                            <div className="projectLinks">
                                <a className="projectLink" href="https://github.com/atyderada/adr-site" target="_blank" rel="noopener noreferrer">
                                    <svg className="linkButton" style={iconsStyle} viewBox="0 0 24 24">
                                        <path fill="#000000" d="M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z" />
                                    </svg>
                                    <div>Source</div>
                                </a>
                                <a className="projectLink" href="https://atyderada.github.io/adr-site/#/" target="_blank" rel="noopener noreferrer">
                                    <svg className="linkButton" style={iconsStyle} viewBox="0 0 24 24">
                                        <path fill="#000000" d="M16,6H13V7.9H16C18.26,7.9 20.1,9.73 20.1,12A4.1,4.1 0 0,1 16,16.1H13V18H16A6,6 0 0,0 22,12C22,8.68 19.31,6 16,6M3.9,12C3.9,9.73 5.74,7.9 8,7.9H11V6H8A6,6 0 0,0 2,12A6,6 0 0,0 8,18H11V16.1H8C5.74,16.1 3.9,14.26 3.9,12M8,13H16V11H8V13Z" />
                                    </svg>
                                    <div>Link</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{gridArea: '5 / 2 / 8 / 8'}} className="card">
                    <div id="two" className="cardPic"></div>
                    <div className="cardDesc">
                        <div className="projectTop">
                            <div className="projectTitle">Real Time Sense</div>
                            <div className="projectSubtitle">Web Application (2017-2018)</div>
                        </div>
                        <div className="projectBottom">
                            <div className="projectDescription">
                                Iot web application that provides smart dashboards and data analytics for Rose-Hulman's Chemical Car.
                                Worked accross the full stack on a team of 4 following agile methodologies.
                            </div>
                            <div className="projectStack">
                                <span>What Did we use: Angular5, Firebase</span>
                                <span>What Did I learn: D3.js, Google Cloud Platform, Cloud Firestore</span>
                                <span>Where Did I improve: Angular/Firebase skills, Full-stack Development, UI/UX design</span>
                            </div>
                            <div className="projectLinks">
                                <a className="projectLink" href="https://bitbucket.org/realtimesense/realtimesenserepo" target="_blank" rel="noopener noreferrer">
                                    <svg className="linkButton" style={iconsStyle} viewBox="0 0 24 24">
                                        <path fill="#000000" d="M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z" />
                                    </svg>
                                    <div>Source</div>
                                </a>
                                <a className="projectLink" href="https://realtimesense.firebaseapp.com" target="_blank" rel="noopener noreferrer">
                                    <svg className="linkButton" style={iconsStyle} viewBox="0 0 24 24">
                                        <path fill="#000000" d="M16,6H13V7.9H16C18.26,7.9 20.1,9.73 20.1,12A4.1,4.1 0 0,1 16,16.1H13V18H16A6,6 0 0,0 22,12C22,8.68 19.31,6 16,6M3.9,12C3.9,9.73 5.74,7.9 8,7.9H11V6H8A6,6 0 0,0 2,12A6,6 0 0,0 8,18H11V16.1H8C5.74,16.1 3.9,14.26 3.9,12M8,13H16V11H8V13Z" />
                                    </svg>
                                    <div>Link (on dev)</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{gridArea: '8 / 2 / 11 / 8'}} className="card">
                    <div id="three" className="cardPic"></div>
                    <div className="cardDesc">
                        <div className="projectTop">
                            <div className="projectTitle">Connecting With Code</div>
                            <div className="projectSubtitle">Cross-platform Web Application (2017)</div>
                        </div>
                        <div className="projectBottom">
                            <div className="projectDescription">
                                Web application that provides students from all levels resources to learn to code.
                                Worked on a team of 2 prototyping interactive pages and implementing them into project.
                            </div>
                            <div className="projectStack">
                                <span>What Did we use: Angular5, Firebase</span>
                                <span>What Did I learn: SVG animations</span>
                                <span>Where Did I improve: Angular/Firebase skills, CSS animations, Cross-platform design/development</span>
                            </div>
                            <div className="projectLinks">
                                <a className="projectLink" href="https://ada.csse.rose-hulman.edu/Connecting_With_Code/cwc-website" target="_blank" rel="noopener noreferrer">
                                    <svg className="linkButton" style={iconsStyle} viewBox="0 0 24 24">
                                        <path fill="#000000" d="M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z" />
                                    </svg>
                                    <div>Source</div>
                                </a>
                                <a className="projectLink" href="https://connectingwithcode.org/home" target="_blank" rel="noopener noreferrer">
                                    <svg className="linkButton" style={iconsStyle} viewBox="0 0 24 24">
                                        <path fill="#000000" d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                                    </svg>
                                    <div>Info link</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{gridArea: '11 / 2 / 13 / 5'}} className="card desktopProject">
                    <div id="four" className="cardPic"></div>
                    <div className="cardDesc">
                        <div className="projectTop">
                            <div className="projectTitleSmall">Opportuna</div>
                            <div className="projectSubtitleSmall">Mobile Application (2017)</div>
                        </div>
                        <div className="projectBottomSmall">
                            <div className="projectDescription">
                                Geolocation based mobile application for small business to grow their brand and customer base.
                            </div>
                            <div className="projectStack">
                                <span>What Did I use: React Native, Firebase, Expo</span>
                                <span>What Did I learn: React Navigation, Redux, ExpoMaps API</span>
                                <span>Where Did I improve: React/Firebase skills, UI/UX design</span>
                            </div>
                            <div className="projectLinks">
                                <a className="projectLink" href="https://github.com/atyderada/reactNative-Opportuna" target="_blank" rel="noopener noreferrer">
                                    <svg className="linkButton" style={{widht: '24px', height: '24px'}} viewBox="0 0 24 24">
                                        <path fill="#000000" d="M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z" />
                                    </svg>
                                    <div>Source</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{gridArea: '11 / 5 / 13 / 8'}} className="card desktopProject">
                    <div id="five" className="cardPic"></div>
                    <div className="cardDesc">
                        <div className="projectTop">
                            <div className="projectTitleSmall">Quick Notes</div>
                            <div className="projectSubtitleSmall">Android Application (2016-2017)</div>
                        </div>
                        <div className="projectBottomSmall">
                            <div className="projectDescription">
                                Productivy app based mobile application for small business to grow their brand and customer base.
                            </div>
                            <div className="projectStack">
                                <span>What Did I use: Java, Firebase, Android Studio</span>
                                <span>What Did I learn: Android development, MVC pattern</span>
                                <span>Where Did I improve: Java/Firebase skills, UI/UX design</span>
                            </div>
                            <div className="projectLinks">
                                <a className="projectLink" href="https://github.com/atyderada/Android-Winter-App" target="_blank" rel="noopener noreferrer">
                                    <svg className="linkButton" style={{widht: '24px', height: '24px'}} viewBox="0 0 24 24">
                                        <path fill="#000000" d="M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z" />
                                    </svg>
                                    <div>Source</div>
                                </a>
                                <a className="projectLink" href="https://rosestarterprojectvault.org/project/-KYuKJabc9fFT4EkNadl" target="_blank" rel="noopener noreferrer">
                                    <svg className="linkButton" style={{widht: '24px', height: '24px'}} viewBox="0 0 24 24">
                                        <path fill="#000000" d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                                    </svg>
                                    <div>Info link</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{gridArea: '13 / 2 / 16 / 8'}} className="card">
                <div id="seven" className="cardPic"></div>
                    <div className="cardDesc">
                        <div className="projectTop">
                            <div className="projectTitle">Sigma Nu Website</div>
                            <div className="projectSubtitle">Cross-platform Web Application (2017)</div>
                        </div>
                        <div className="projectBottom">
                            <div className="projectDescription">
                                Web application for Rose Hulman's Sigma Nu Fraternity.
                            </div>
                            <div className="projectStack">
                                <span>What Did I use: Angular4, Firebase</span>
                                <span>What Did I learn: Cloud Storage</span>
                                <span>Where Did I improve: Angular/Firebase skills, Full-stack development, Cross-platform design/development</span>
                            </div>
                            <div className="projectLinks">
                                <a className="projectLink" href="https://github.com/atyderada/ngfire-sigma-nu" target="_blank" rel="noopener noreferrer">
                                    <svg className="linkButton" style={iconsStyle} viewBox="0 0 24 24">
                                        <path fill="#000000" d="M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z" />
                                    </svg>
                                    <div>Source</div>
                                </a>
                                <a className="projectLink" href="https://sigmanurhit.com/" target="_blank" rel="noopener noreferrer">
                                    <svg className="linkButton" style={iconsStyle} viewBox="0 0 24 24">
                                        <path fill="#000000" d="M16,6H13V7.9H16C18.26,7.9 20.1,9.73 20.1,12A4.1,4.1 0 0,1 16,16.1H13V18H16A6,6 0 0,0 22,12C22,8.68 19.31,6 16,6M3.9,12C3.9,9.73 5.74,7.9 8,7.9H11V6H8A6,6 0 0,0 2,12A6,6 0 0,0 8,18H11V16.1H8C5.74,16.1 3.9,14.26 3.9,12M8,13H16V11H8V13Z" />
                                    </svg>
                                    <div>Link</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{gridArea: '16 / 2 / 19 / 8'}} className="card">
                <div id="six" className="cardPic"></div>
                    <div className="cardDesc">
                        <div className="projectTop">
                            <div className="projectTitle">RoseArt</div>
                            <div className="projectSubtitle">Web Application (2017)</div>
                        </div>
                        <div className="projectBottom">
                            <div className="projectDescription">
                                Web application for Rose Hulman's students to discover the diverse and rich art around campus.
                                Worked on a team of 2 prototyping and implementing the application.
                            </div>
                            <div className="projectStack">
                                <span>What Did we use: Angular4, Firebase</span>
                                <span>What Did I learn: Angular, Firebase, Typescript</span>
                                <span>Where Did I improve: Full-stack development, UI/UX design</span>
                            </div>
                            <div className="projectLinks">
                                <a className="projectLink" href="https://github.com/atyderada/flame-rose-art" target="_blank" rel="noopener noreferrer">
                                    <svg className="linkButton" style={iconsStyle} viewBox="0 0 24 24">
                                        <path fill="#000000" d="M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z" />
                                    </svg>
                                    <div>Source</div>
                                </a>
                                <a className="projectLink" href="http://www.rose-art.com" target="_blank" rel="noopener noreferrer">
                                    <svg className="linkButton" style={iconsStyle} viewBox="0 0 24 24">
                                        <path fill="#000000" d="M16,6H13V7.9H16C18.26,7.9 20.1,9.73 20.1,12A4.1,4.1 0 0,1 16,16.1H13V18H16A6,6 0 0,0 22,12C22,8.68 19.31,6 16,6M3.9,12C3.9,9.73 5.74,7.9 8,7.9H11V6H8A6,6 0 0,0 2,12A6,6 0 0,0 8,18H11V16.1H8C5.74,16.1 3.9,14.26 3.9,12M8,13H16V11H8V13Z" />
                                    </svg>
                                    <div>Link</div>
                                </a>
                                <a className="projectLink" href="https://rosestarterprojectvault.org/project/-KenfJjOfJoOVPjrTO9A" target="_blank" rel="noopener noreferrer">
                                    <svg className="linkButton" style={iconsStyle} viewBox="0 0 24 24">
                                        <path fill="#000000" d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                                    </svg>
                                    <div>Info link</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{gridArea: '19 / 2 / 22 / 8'}} className="card">
                    <div id="eight" className="cardPic"></div>
                    <div className="cardDesc">
                        <div className="projectTop">
                            <div className="projectTitle">RHfIT</div>
                            <div className="projectSubtitle">Web Application (2016)</div>
                        </div>
                        <div className="projectBottom">
                            <div className="projectDescription">
                                Web application for Rose Hulman's students to keep up with the school's sports teams and athletic activities around campus.
                                Worked on a team of 2 building the idea and implementing the website.
                            </div>
                            <div className="projectStack">
                                <span>What Did we use: XAMPP, BootStrap</span>
                                <span>What Did I learn: PHP, MySQL, BootStrap</span>
                                <span>Where Did I improve: Full-stack development, SQL skills</span>
                            </div>
                            <div className="projectLinks">
                                <a className="projectLink" href="https://github.com/atyderada/RHfIT-Website" target="_blank" rel="noopener noreferrer">
                                    <svg className="linkButton" style={iconsStyle} viewBox="0 0 24 24">
                                        <path fill="#000000" d="M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z" />
                                    </svg>
                                    <div>Source</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{gridArea: '22 / 2 / 24 / 5'}} className="card desktopProject">
                    <div id="nine" className="cardPic"></div>
                    <div className="cardDesc">
                        <div className="projectTop">
                            <div className="projectTitleSmall">Colorado Navigation</div>
                            <div className="projectSubtitleSmall">Java Application (2015-2016)</div>
                        </div>
                        <div className="projectBottomSmall">
                            <div className="projectDescription">
                                Navigation system used to calculate the shortest path between two points of interest in the state of Colorado. Worked on a team of 3.
                            </div>
                            <div className="projectStack">
                                <span>What Did we use: Java, NetBeans</span>
                                <span>What Did I learn: Shortest-path Algorithm implementation</span>
                                <span>Where Did I improve: Java, Data Structures/Algorithms</span>
                            </div>
                            <div className="projectLinks">
                                <a className="projectLink" href="https://github.com/atyderada/ColoradoPOINavigation" target="_blank" rel="noopener noreferrer">
                                    <svg className="linkButton" style={{widht: '24px', height: '24px'}} viewBox="0 0 24 24">
                                        <path fill="#000000" d="M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z" />
                                    </svg>
                                    <div>Source</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{gridArea: '22 / 5 / 24 / 8'}} className="card desktopProject">
                    <div id="ten" className="cardPic"></div>
                    <div className="cardDesc">
                        <div className="projectTop">
                            <div className="projectTitleSmall">Centipede Arcade Game</div>
                            <div className="projectSubtitleSmall">Java Application (2015)</div>
                        </div>
                        <div className="projectBottomSmall">
                            <div className="projectDescription">
                                Recreated the legendary arcade game "Centipe" using OO design concepts on a team of 3.
                            </div>
                            <div className="projectStack">
                                <span>What Did we use: Java</span>
                                <span>What Did I learn: Java Swing, OO development, Threads</span>
                                <span>Where Did I improve: Java, OO Concepts (Inheritance, Polymorphism)</span>
                            </div>
                            <div className="projectLinks">
                                <a className="projectLink" href="https://github.com/atyderada/CentipedeArcadeGame" target="_blank" rel="noopener noreferrer">
                                    <svg className="linkButton" style={{widht: '24px', height: '24px'}} viewBox="0 0 24 24">
                                        <path fill="#000000" d="M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z" />
                                    </svg>
                                    <div>Source</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default development;