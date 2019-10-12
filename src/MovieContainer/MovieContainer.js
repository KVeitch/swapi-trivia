import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieContainer.css';

const MovieContainer = props => {
  const movieList = props.movies.map(movie => 
  <MovieCard 
    title={movie.title}
    episode={movie.episode_id}
    img={movie.moviesWithImages}
    key={movie.episode_id}
    releaseYear={movie.release_date}
    characters={movie.characters}
    changeSelectedMovie={props.changeSelectedMovie}
    />)

  return (
    <section className='movie__container'>
      {movieList}
    </section>
  )

}

export default MovieContainer;