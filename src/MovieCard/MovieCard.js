import React from 'react';
import './MovieCard.css';

const MovieCard = (props) => {
    return (
      <div className='movie__card'>
        <h2>{this.props.title}</h2>
        <p>Episode {this.props.episode}</p>
        <p>Released in {this.props.releaseYear.slice(0, 4)}</p>
        <button onClick={e => this.props.changeSelectedMovie(e.target.value)} 
                className='characters__button' 
                value={this.props.episode}>
        View Characters
        </button>
      </div>
    )
}

export default MovieCard;