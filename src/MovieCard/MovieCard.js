import React from 'react';
import './MovieCard.css';

const MovieCard = (props) => {
  const { episode, releaseYear, title, changeSelectedMovie } = props
  console.log('movie: ', episode, releaseYear, title)
    return (
      <div className='movie__card'>
        <h2 className="card__title">{title}</h2>
        <p className="card__episode">Episode {episode}</p>
        <p className="card__release">Released in {releaseYear.slice(0, 4)}</p>
        <button onClick={e => changeSelectedMovie(e.target.value)} 
                className='characters__button' 
                value={episode}>
        View Characters
        </button>
      </div>
    )
}

export default MovieCard;