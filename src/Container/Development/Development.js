import React from 'react';
import './Development.css';

const development = (props) => {

    return (
        <div id='devContainer'>
            <div className="control" id="back" onClick={() => props.toggle()}>
                <svg style={{width:24+'px',height:24+'px'}} viewBox="0 0 24 24">
                    <path fill="#000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
            </div>
            <div id="devProjectsGrid">
                <div style={{gridArea: '1 / 4 / 2 / 6'}}><br/><br/><h2>Development</h2></div>
                
                <div style={{gridArea: '2 / 2 / 5 / 8'}} className="card">
                    <div id="one" className="cardPic"></div>
                    {/* <div id="third" className="cardDesc"></div> */}
                </div>
                <div style={{gridArea: '5 / 2 / 8 / 8'}} className="card">
                    <div id="two" className="cardPic"></div>
                    {/* <div id="third" className="cardDesc"></div> */}
                </div>
                <div style={{gridArea: '8 / 2 / 11 / 8'}} className="card">
                    <div id="three" className="cardPic"></div>
                    {/* <div id="third" className="cardDesc"></div> */}
                </div>

                <div style={{gridArea: '11 / 2 / 13 / 5'}} className="card desktopProject">
                    <div id="four" className="cardPic"></div>
                    {/* <div id="third" className="cardDesc"></div> */}
                </div>
                <div style={{gridArea: '11 / 5 / 13 / 8'}} className="card desktopProject">
                    <div id="five" className="cardPic"></div>
                    {/* <div id="third" className="cardDesc"></div> */}
                </div>
                
                <div style={{gridArea: '13 / 2 / 16 / 8'}} className="card">
                    <div id="six" className="cardPic"></div>
                    {/* <div id="third" className="cardDesc"></div> */}
                </div>
                <div style={{gridArea: '16 / 2 / 19 / 8'}} className="card">
                    <div id="seven" className="cardPic"></div>
                    {/* <div id="third" className="cardDesc"></div> */}
                </div>
                <div style={{gridArea: '19 / 2 / 22 / 8'}} className="card">
                    <div id="eight" className="cardPic"></div>
                    {/* <div id="third" className="cardDesc"></div> */}
                </div>

                <div style={{gridArea: '22 / 2 / 24 / 5'}} className="card desktopProject">
                    <div id="nine" className="cardPic"></div>
                    {/* <div id="third" className="cardDesc"></div> */}
                </div>
                <div style={{gridArea: '22 / 5 / 24 / 8'}} className="card desktopProject">
                    <div id="ten" className="cardPic"></div>
                    {/* <div id="third" className="cardDesc"></div> */}
                </div>
            </div>
        </div>
    );
};

export default development;