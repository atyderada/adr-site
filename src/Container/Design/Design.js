import React from 'react';
import './Design.css';

const design = (props) => {

    return (
        <div id='desContainer'>
            <div className="control" id="back" onClick={() => props.toggle()}>
                <svg style={{width:24+'px',height:24+'px'}} viewBox="0 0 24 24">
                    <path fill="#000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
            </div>
            <div id="desProjectsGrid">
                <div style={{
                    gridArea: '1 / 4 / 2 / 6'
                }}><br/><br/><h2>Design</h2></div>
                
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
        </div>
    );
};

export default design;