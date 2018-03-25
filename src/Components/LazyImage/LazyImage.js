
import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import './LazyImage.css';

class LazyImage extends Component {

  constructor(props) {
    super(props);
    this.state = {
        showLoader: true,
    }
  }

  loaded = () => {
    console.log("loaded")
    this.setState( { showLoader: false } );
  }

  componentDidMount() {
    //   this.imageHd.classList.add('iron-image-fade-in');
  };

  render() {
    const imageUrl = require('../../assets/images/DarkSunset.jpg')    
    let loader = <Loader className="iron-image-preload"></Loader>;
    if ( !this.state.showLoader ) {
        loader = null;
    }
    return (
      <div className="iron-image-container">
        <img
            className="iron-image-loaded"
            onLoad={this.loaded}
            src={imageUrl}
        />
        {loader}
      </div>
    )
  }

}

export default LazyImage;