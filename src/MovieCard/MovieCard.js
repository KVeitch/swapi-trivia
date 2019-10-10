import React from 'react';
import './MovieCard.css';

const MovieCard = (props) => {
    return (
      <div className='movie__card'>
        <h2>{props.title}</h2>
        <p>Episode {props.episode}</p>
        <p>Released in {props.releaseYear.slice(0, 4)}</p>
        <button onClick={e => props.changeSelectedMovie(e.target.value)} 
                className='characters__button' 
                value={props.episode}>
        View Characters
        </button>
      </div>
    )
}

export default MovieCard;