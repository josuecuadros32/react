import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from './components/navigation/Menu';
import Footer from './components/navigation/Footer'
class App extends Component {
  render() {
    return (
      <div className="App">
      < Menu></Menu>
        <div className="text-center">
             <br></br><img src={logo} className="App-logo" alt="logo" /><br></br>
          
             <p>Para saber un poco mas de react ingrese aqui</p>
              <p className="App-intro">
               <a
                  className="text-white"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer">
                  Learn React
                </a>
               </p>
            </div>
            <Footer></Footer>
      </div>
    );
  }
}

export default App;
