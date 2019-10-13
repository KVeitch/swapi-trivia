import React from 'react';
import './CharacterCard.css'
import favoriteStar from '../images/favorite.svg';
import star from '../images/star.svg'
const CharacterCard = props => {

  const { films, homeworld, name, population, species} = props.character;
  const classList = props.favoriteList && props.favoriteList.includes(name) ? 'character__card favorite' : 'character__card';
  const starIcon = props.favoriteList && props.favoriteList.includes(name) ? favoriteStar : star;

  const filmList = films.map(film => <li>{film}</li>)
  return(
    <div className={classList}>
      <h2 className='character__name'>{name}</h2>
      <img className='favorite__icon' src={starIcon} alt='star icon indicatin selected favorite'/>
      <ul className='character__data__list'>
          <li className='character__species'>Species: {species}</li>
          <li className='character__homeworld'>Homeworld: {homeworld}</li>
          <li className='character__population'>Population: {population}</li>
        </ul>
        <ul className='character__films'>Appearing in:{filmList}</ul>
        <div type='button' className='div__favorite' 
        onClick={()=>props.setFavorite({ films, homeworld, name, population, species }, name)}
        >
          Favorite
        </div>
    </div>
  )
}

export default CharacterCard;