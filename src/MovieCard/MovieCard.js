import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
  const { episode, releaseYear, title, changeSelectedMovie, id, movieImage } = props
  
    return (
      <div className='movie__card'>
        <h2 className='card__title'>{title}</h2>
        <p className='card__episode'>Episode {episode}</p>
        <img src={movieImage} className='movie_image' alt={`movie poster for ${title}`}/>
        <p className="card__release">Released in {releaseYear.slice(0, 4)}</p>
        <Link to={`/movies/${id}`}>
          <button onClick={e => changeSelectedMovie(e.target.id, episode - 1)} 
            className='characters__button' 
            id={id}
          >
            View Characters
          </button>
        </Link>
      </div>
    )
}

export default MovieCard;