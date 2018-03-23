import React, { Component } from 'react';

class SVG extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTheta: 0,
            thetaIncrement: 1,
        };
    }

    componentDidMount() {
        const animate = () => {
            const nextTheta = this.state.currentTheta > 360 ? 0 : this.state.currentTheta + this.state.thetaIncrement;

            this.setState({ currentTheta: nextTheta });
            this.rafId = requestAnimationFrame(animate);
        };

        this.rafId = requestAnimationFrame(animate);
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.rafId);
    }

    changeSpeed(newSpeed) {
        this.setState( { thetaIncrement: newSpeed } );
    }

    render() {
        return (
            // <svg width="200px" height="200px" viewBox="0 0 204 204">
            //     <circle x="100" y="100" cx="102" cy="102" r="100"
            //             stroke="black" stroke-width="1" 
            //             fill="red"
            //             transform={`rotate(${this.state.currentTheta})`} />
            // </svg>
            <svg width="250px" height="250px" viewBox="0 0 250 250">
                <g transform="translate(125, 125)">
                    <rect x="-100" y="-100" width="200" height="200" rx="100" ry="100" 
                            style={{ fill: 'white', stroke: 'black', 'stroke-width': 2, 'stroke-dasharray': '10, 5' }}
                            transform={`rotate(${this.state.currentTheta})`}
                            onMouseEnter={() => this.changeSpeed(2)}
                            onMouseDown={() => this.changeSpeed(4)}
                            onMouseLeave={() => this.changeSpeed(1)} />
                </g>
            </svg>
        );
    }
}

export default SVG;
