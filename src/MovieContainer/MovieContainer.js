import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieContainer.css';

const MovieContainer = props => {
  const movieList = props.movies.map(movie => 
  <MovieCard 
    title={movie.title}
    episode={movie.episode_id}
    key={movie.episode_id}
    releaseYear={movie.release_date}
    characters={movie.characters}
    />)

  return (
    <section className='movie-container'>
      {movieList}
    </section>
  )

}

export default MovieContainer;