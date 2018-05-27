import React, { Component, Fragment } from 'react';
import Home from "./Home"
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
        <div>
          <BrowserRouter>
              <div style={{paddingBottom: '25px'}}>
              <Route exact path='/' component={Home} />
              </div>
          </BrowserRouter>
          <NavBar/>
        </div>
    );
  }
}

export default App;
