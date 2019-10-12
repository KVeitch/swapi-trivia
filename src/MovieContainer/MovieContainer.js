import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieContainer.css';

const MovieContainer = props => {
  const movieList = props.movies.map((movie, i) => 

  <MovieCard 
    title={movie.title}
    episode={movie.episode_id}
    img={movie.moviesWithImages}
    key={movie.episode_id}
    releaseYear={movie.release_date}
    characters={movie.characters}
    changeSelectedMovie={props.changeSelectedMovie}
    id={i+1}
    />)
  return (
    <section className='movie__container'>
      {movieList}
    </section>
  )

}

export default MovieContainer;