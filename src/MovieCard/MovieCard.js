import React, { Component } from 'react';
import './MovieCard.css';
import CharacterCard from '../CharacterCard/CharacterCard';
import { createCharacterList } from '../apiCalls';

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      showCharacterCard : false,
      characters : []
    }
  }

  componentDidMount() {
    createCharacterList(this.props.characters)
    .then(data=>this.setState({characters:data}))
  }

  viewCharacter = (e) => {
    this.setState({ showCharacterCard : !this.state.showCharacterCard})
    this.props.changeSelectedMovie(e.target.value)
  }

  render() {

    const characters = this.state.showCharacterCard ? 
    this.state.characters.map((character, i) => {
      return <CharacterCard key={i} character={character}/>
    })
    : '';
  

    return (
      <div className='movie-card'>
        <h2>{this.props.title}</h2>
        <p>Episode {this.props.episode}</p>
        <p>Released in {this.props.releaseYear.slice(0, 4)}</p>
        <button onClick={this.viewCharacter} className='characters-button' value={this.props.episode}>View Characters</button>
        {characters}
      </div>
    ) 
  }
}
export default MovieCard;