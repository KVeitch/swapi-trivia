import React from 'react';
import './MovieCard.css';

const MovieCard = (props) => {
  const { episode, releaseYear, title, changeSelectedMovie } = props
  console.log('movie: ', episode, releaseYear, title)
    return (
      <div className='movie__card'>
        <h2>{title}</h2>
        <p>Episode {episode}</p>
        <p>Released in {releaseYear.slice(0, 4)}</p>
        <button onClick={e => changeSelectedMovie(e.target.value)} 
                className='characters__button' 
                value={episode}>
        View Characters
        </button>
      </div>
    )
}

export default MovieCard;