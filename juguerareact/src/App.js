import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeView from './views/homeview';
// import BrowserRouter from 'react-router-dom'
import Cargando from './views/cargando';
import Frutas from './containers/Frutas';

class App extends Component {

 
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <React.Fragment>
        <HomeView/> 
        <Frutas/>
      </React.Fragment>
      
      
        
      
    );
  }
}

export default App;
