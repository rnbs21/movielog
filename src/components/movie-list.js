import React from 'react';
import '../styles/styles.css';

const MovieList = (props) => {
  return (
    <ul className="movie-list">
      {
        props.movies.map( (m, index) => {
          return(
            <li 
              className='movie-item' 
              key={m.imdbID+index}
              style={{backgroundImage: 'url('+m.Poster+')'}}>
            </li>
          )
        })
      }
    </ul>
  )
}

export default MovieList;