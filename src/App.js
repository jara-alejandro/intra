import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Links from 'R:/React/intra/src/Componentes/Links.jsx';
import Imagenes from 'R:/React/intra/src/Componentes/Imagenes';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <Links/>
          <Imagenes/>

        </header>

      </div>


    );
  }




}
