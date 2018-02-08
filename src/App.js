import React, { Component } from 'react';
import './App.css';
// import Moment from './Container/Moment/Moment';
import LandingScreen from './Container/LandingScreen/LandingScreen';
import About from './Container/About/About';
import Menu from './Container/Menu/Menu';
import Gallery from './Container/Gallery/Gallery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      class: 'neutral',
      showMenu: false,
      showGallery: false,
    }
  }
  toggleClass = () => {
    if (this.state.class === 'neutral') {
      this.setState( { class: 'inverse' } );
    } else {
      this.setState( { class: 'neutral' } );
    }
  }
  toggleMenu = () => {
    const doesShow = this.state.showMenu;
    this.setState( { showMenu: !doesShow } );
  }
  toggleGallery = () => {
    const doesShow = this.state.showGallery;
    this.setState( { showGallery: !doesShow } );
  }
  handleScroll() {
    var scroll = document.documentElement.scrollTop;
    console.log("scrolled");
    console.log("last");
    console.log(this.state.lastScroll);
    console.log("new");
    console.log(scroll);
    this.setState({lastScroll: scroll})
  }
  componentDidMount() {
    //  window.onscroll = () => this.handleScroll()
  }
  scrollBottom = () => {
    window.scrollTo(0,document.body.scrollHeight);
  }
  scrollTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  render() {
    let menu = null;
    let landing = <LandingScreen toggle={this.toggleMenu} gallery={this.toggleGallery} scroll={this.scrollBottom} className={this.topName}></LandingScreen>
    let about = <About scroll={this.scrollTop} className={this.bottomName}></About>;
    let gallery = null;
    if ( this.state.showMenu ) {
      landing = null;
      about = null;
      menu = <Menu toggle={this.toggleMenu}></Menu>;
    }
    if ( this.state.showGallery ) {
      landing = null;
      about = null;
      gallery = <Gallery toggle={this.toggleGallery}></Gallery>
    }
    return (
      <div className="App">
        {/* <Moment color="white"></Moment> */}
        {menu}
        {gallery}
        {landing}
        {about}
      </div>
    );
  }
}

export default App;
