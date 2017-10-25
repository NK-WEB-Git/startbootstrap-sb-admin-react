import React, { Component } from 'react';

import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main.jsx';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Navigation/>
        <Main/>
      </div>
    );
  }
}

export default App;
