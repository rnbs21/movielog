import React, { Component} from "react";
import {hot} from "react-hot-loader";

class App extends Component{
  render(){
    return(
      <div className="App">
        <input type="text" placeholder="Movie name" />
      </div>
    );
  }
}

export default hot(module)(App);