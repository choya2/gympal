import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home"


class App extends React.Component{
  render(){
    return(
        <div>
          <Home />
        </div>
    );
  }
}


export default App;
