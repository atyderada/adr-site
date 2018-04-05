import React from 'react';
import './Design.css';
import { Link } from 'react-router-dom';

const design = (props) => {

    let iconsStyle;
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
    let grid;
    if (window.innerWidth > 1024) {
        grid = (
            <div id="desProjectsGrid">
                <div style={{
                    gridArea: '1 / 4 / 2 / 6'
                }}><br /><br /><h2>Design</h2></div>
                
                <div style={{
                        gridArea: '2 / 2 / 4 / 5'}}
                        className="designCard">
                    <div id="first" className="cardImg"></div>
                </div>
                <div style={{gridArea: '2 / 5 / 4 / 8'}} className="designCard">
                    <div id="second" className="cardImg"></div>
                </div>
                
                <div style={{gridArea: '4 / 2 / 6 / 5'}} className="designCard">
                    <div id="third" className="cardImg"></div>
                </div>
                <div style={{gridArea: '4 / 5 / 6 / 8'}} className="designCard">
                    <div id="fourth" className="cardImg"></div>
                </div>

                <div style={{gridArea: '6 / 2 / 8 / 5'}} className="designCard">
                    <div id="fifth" className="cardImg"></div>
                </div>
                <div style={{gridArea: '6 / 5 / 8 / 8'}} className="designCard">
                    <div id="sixth" className="cardImg"></div>
                </div>

                <div style={{gridArea: '8 / 2 / 10 / 5'}} className="designCard">
                    <div id="seventh" className="cardImg"></div>
                </div>
                <div style={{gridArea: '8 / 5 / 10 / 8'}} className="designCard">
                    <div id="eighth" className="cardImg"></div>
                </div>

                <div style={{gridArea: '10 / 2 / 12 / 5'}} className="designCard">
                    <div id="ninth" className="cardImg"></div>
                </div>
                <div style={{gridArea: '10 / 5 / 12 / 8'}} className="designCard">
                    <div id="tenth" className="cardImg"></div>
                </div>
            </div>
        );
    } else {
        grid = (
            <div id="desProjectsGrid">
                <div style={{
                    gridArea: '1 / 2 / 1 / 2'
                }}><br /><h3>Design</h3></div>
                
                <div style={{
                        gridArea: '2 / 2 / 2 / 2'}}
                        className="designCard">
                    <div id="first" className="cardImg"></div>
                </div>
                <div style={{gridArea: '3 / 2 / 3 / 2'}} className="designCard">
                    <div id="second" className="cardImg"></div>
                </div>
                
                <div style={{gridArea: '4 / 2 / 4 / 2'}} className="designCard">
                    <div id="third" className="cardImg"></div>
                </div>
                <div style={{gridArea: '5 / 2 / 5 / 2'}} className="designCard">
                    <div id="fourth" className="cardImg"></div>
                </div>

                <div style={{gridArea: '6 / 2 / 6 / 2'}} className="designCard">
                    <div id="fifth" className="cardImg"></div>
                </div>
                <div style={{gridArea: '7 / 2 / 7 / 2'}} className="designCard">
                    <div id="sixth" className="cardImg"></div>
                </div>

                <div style={{gridArea: '8 / 2 / 8 / 2'}} className="designCard">
                    <div id="seventh" className="cardImg"></div>
                </div>
                <div style={{gridArea: '9 / 2 / 9 / 2'}} className="designCard">
                    <div id="eighth" className="cardImg"></div>
                </div>

                <div style={{gridArea: '10 / 2 / 10 / 2'}} className="designCard">
                    <div id="ninth" className="cardImg"></div>
                </div>
                <div style={{gridArea: '11 / 2 / 11 / 2'}} className="designCard">
                    <div id="tenth" className="cardImg"></div>
                </div>
            </div>
        );
    }
    return (
        <div id='desContainer'>
            {grid}
            <div id="desLogo">
                <img
                    id="logoImage"
                    src={require('../../assets/logo.png')} alt='Adr-logo' />
            </div>
            <Link to='/projects'>
                <div className="control" id="desBack">
                    <svg style={iconsStyle} viewBox="0 0 24 24">
                        <path fill="#000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                    </svg>
                </div>
            </Link>
        </div>
    );
};

export default design;