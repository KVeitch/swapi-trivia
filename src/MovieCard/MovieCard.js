import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
  const { episode, releaseYear, img, title, changeSelectedMovie, id } = props
  
    return (
      <div className='movie__card'>
        <h2 className="card__title">{title}</h2>
        <p className="card__episode">Episode {episode}</p>
        <img src={img} />
        <p className="card__release">Released in {releaseYear.slice(0, 4)}</p>
        <Link to={`/movies/${id}`}>
          <div type='button' onClick={e => changeSelectedMovie(e.target.id)} 
            className='characters__button' 
            id={id}
          >
            View Characters
          </div>
        </Link>
      </div>
    )
}

export default MovieCard;