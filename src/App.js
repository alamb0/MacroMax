import React, { Component } from 'react';
import './App.scss';

import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header'
import Routes from './react-router/Routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
