import React, { Component } from 'react';
import './App.css';
import LandingScreen from './Container/LandingScreen/LandingScreen';
import About from './Container/About/About';
import Menu from './Container/Menu/Menu';
import Gallery from './Container/Gallery/Gallery';
import Development from './Container/Development/Development';
import Design from './Container/Design/Design';
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' component={LandingScreen}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/about' component={About}/>
          <Route path='/projects' component={Menu}/>
          <Route path='/development' component={Development}/>
          <Route path='/design' component={Design}/>
        </Switch>
      </div>
    );
  }
}

export default App;
