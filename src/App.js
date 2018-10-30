import React, { Component} from "react";
import {hot} from "react-hot-loader";

import MovieList from './components/movie-list';

class App extends Component{

  constructor(props){

    super(props);
    this.movieSearch = this.movieSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      movieName: '',
      loading: false,
      movies: []
    };

  }

  handleChange(event){
    this.setState({
      movieName: event.target.value
    })
  }

  movieSearch(){
    console.log('clicked');
    const apiURL = 'http://www.omdbapi.com/?';
    const apiKey = '2ac6913b';
    const requestURL = apiURL + 'apiKey='+apiKey + '&s='+this.state.movieName+'&type=movie';

    let xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = () => {
      if(xmlHttp.readyState == 4 && xmlHttp.status == 200){

        const result = JSON.parse(xmlHttp.responseText);
        console.log(result);
        if(!result.Error){
          this.setState({
            movies: result.Search
          });
        }
      }
    };

    xmlHttp.open("GET", requestURL);
    xmlHttp.send(null);

  }

  render(){
    return(
      <div className="App">
        <input onChange={this.handleChange} type="text" placeholder="Movie name" />
        <button onClick={this.movieSearch}>Search</button>
        
        {
          this.state.movies.length > 0 ? 
            <MovieList movies={this.state.movies} />
          : null
        }
        

      </div>
    );
  }
}

export default hot(module)(App);