import React, { Component } from 'react';

var styles = {
    box: {
        width: '100%',
        // height: '100%',
        zIndex: 1,
        backgroundColor: 'transparent',
    }
};

class HoverBox extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            box_state: 'out',
        };
    }

    render() {
        return (
            <div
                style={{...styles.box}} 
                onMouseEnter={() => this.props.hover()}>
                {this.props.children}
            </div>
        );
    }
}

export default HoverBox;