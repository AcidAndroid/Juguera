import React, { Component } from 'react';
// import './App.css';
import HomeView from './views/homeview';
// import BrowserRouter from 'react-router-dom'
import Cargando from './views/cargando';
import Frutas from './containers/Frutas';
import Jugos from "./Jugos.json";
import BuscarJugo from './containers/BuscarJugo';
import Image from './views/image'
import juice from './jugos'
import FrutaList from './containers/Frutas2'


class App extends Component {

 
  render() {
    return (
      
      <React.Fragment>
        {/* <HomeView/>  */} 
        {/* <HomeView imagenPortada={juice.juguera}/>               
        <hr/> */}
        {/* <Frutas/> */}
        <BuscarJugo jugos={Jugos} fruta={'Mango'} ></BuscarJugo>
        <div className='container'></div>
        <FrutaList/>

      </React.Fragment>
      
      
        
      
    );
  }
}

export default App;
