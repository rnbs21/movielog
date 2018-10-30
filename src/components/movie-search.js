import React, { Component } from 'react';

import ApiSearchField from './api-search-field';
import MovieList from './movie-list';

export default class MovieSearch extends Component {

  constructor(props) {
    
    super(props);

    this.searchMovies = this.searchMovies.bind(this);

    this.state = {
      movies : [],
    }

  }

  searchMovies(mTitle){

    const apiURL = 'http://www.omdbapi.com/?';
    const apiKey = '2ac6913b';
    const requestURL = apiURL + 'apiKey='+apiKey + '&s='+mTitle+'&type=movie';

    let xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = () => {
      if(xmlHttp.readyState == 4 && xmlHttp.status == 200){

        const result = JSON.parse(xmlHttp.responseText);
        
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
      <div>
        <ApiSearchField 
          timeout={1500} 
          search={this.searchMovies}
        />
        { 
          this.state.movies.length > 0 ?
            <MovieList movies={this.state.movies} />
          : null
        }
      </div>
    );
  }

}