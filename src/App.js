import React, { Component} from "react";
import {hot} from "react-hot-loader";

import MovieSearch from './components/movie-search';

class App extends Component{

  constructor(props){

    super(props);

  }

  render(){
    return(
      <div className="App">
        <MovieSearch />
      </div>
    );
  }
}

export default hot(module)(App);