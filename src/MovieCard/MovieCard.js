import React, { Component } from 'react';
import './MovieCard.css';
import CharacterCard from '../CharacterCard/CharacterCard';
import { createCharacterArray } from '../apiCalls';

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      showCharacterCard : false,
      characters : []
    }
  }

  componentDidMount() {
    this.setState({ characters : createCharacterArray(this.props.characters)})
  }

  viewCharacter = () => {
    this.setState({ showCharacterCard : !this.state.showCharacterCard})
  }

  render() {
    return (
      <div className='movie-card'>
        <h2>{this.props.title}</h2>
        <p>Episode {this.props.episode}</p>
        <p>Released in {this.props.releaseYear.slice(0, 4)}</p>
        <button onClick={this.viewCharacter} className='characters-button'>View Characters</button>
        {this.state.showCharacterCard ? 
          this.state.characters.map((character, i) => {
            return <CharacterCard key={i} character={character}/>
          })
          : ''
        }
      </div>
    ) 
  }
}
export default MovieCard;