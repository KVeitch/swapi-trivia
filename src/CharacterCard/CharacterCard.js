import React from 'react';
import './CharacterCard.css'
const CharacterCard = props => {
  const { films, homeworld, name, population, species} = props.character
  const filmList = films.map(film => <li>{film}</li>)
  return(
    <div className='character__card'>
      <h2 className='characer__name'>{name}</h2>
      <ul className='character__data__list'>
          <li className='character__species'>Species: {species}</li>
          <li className='character__homeworld'>Homeworld: {homeworld}</li>
          <li className='character__population'>Population: {population}</li>
        </ul>
        <ul className='character__films'>Appearing in:{filmList}</ul>
    </div>
  )
}

export default CharacterCard;