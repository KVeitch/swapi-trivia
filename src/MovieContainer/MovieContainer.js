import React from 'react';
import MovieCard from '../MovieCard/MovieCard'

const MovieContainer = (props) => {
  const movieList = props.movies.map(movie => <MovieCard movie />)


  return (
    <section>
      <h1>Movie Container</h1>
      {movieList}
    </section>
  )

}

export default MovieContainer;