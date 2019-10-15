import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import PropTypes from 'prop-types';
import './MovieContainer.css';
import loading from '../images/loading.gif';

const MovieContainer = props => {
  if(props.movies.length === 0){
    return(
      <>
      <h1>Loading..</h1>
      <div className='div__image'>
        <p className='loading__text'>Please be patient,</p>
        <p className='loading__text'>the service droids are doing their best.</p>
        <img className='loading__image' src={loading} alt="BB-8 droid rolling back and forth" />
      </div>
      </>
    )
  }

  const movieMap = [4,5,6,1,2,3,7]
  const movieList = props.movies.map((movie, i) => 
      <MovieCard 
        title={movie.title}
        episode={movie.episode_id}
        movieImage={movie.movieImage}
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

MovieContainer.propTypes ={
  movies:PropTypes.array,
  setCurrentCharacters:PropTypes.func,
  changeSelectedMovie:PropTypes.func, 
  characters:PropTypes.array
}