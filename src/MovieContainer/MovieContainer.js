import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieContainer.css';

const MovieContainer = props => {
  const movieMap = [4,5,6,1,2,3,7]
  const movieList = props.movies.map((movie, i) => 

  <MovieCard 
    title={movie.title}
    episode={movie.episode_id}
    img={movie.moviesWithImages}
    key={movie.episode_id}
    releaseYear={movie.release_date}
    characters={movie.characters}
    changeSelectedMovie={props.changeSelectedMovie}
    setCurrentCharacters={props.setCurrentCharacters}
    id={movieMap[i]}
    />)
  return (
    <section className='movie__container'>
      {movieList}
    </section>
  )

}

export default MovieContainer;