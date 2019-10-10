import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
  const { episode, releaseYear, title, changeSelectedMovie } = props
  
    return (
      <div className='movie__card'>
        <h2 className="card__title">{title}</h2>
        <p className="card__episode">Episode {episode}</p>
        <p className="card__release">Released in {releaseYear.slice(0, 4)}</p>
        <Link to={`/movies/${episode}`}>
          <button onClick={e => changeSelectedMovie(e.target.value)} 
            className='characters__button' 
            value={episode}
          >
            View Characters
          </button>
        </Link>
      </div>
    )
}

export default MovieCard;