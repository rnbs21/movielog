import React from 'react';
import '../styles/styles.css';

const MovieList = (props) => {
  return (
    <ul>
      {
        props.movies.map( (m, index) => {
          return(
            <li className='movie-item' key={m.imdbID+index}>
              <img src={m.Poster}></img>
            </li>
          )
        })
      }
    </ul>
  )
}

export default MovieList;