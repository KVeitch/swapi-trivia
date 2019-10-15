import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import PropTypes from 'prop-types';
import loading from '../images/loading.gif';
import './CharacterContainer.css';

const CharacterContainer = props => {
  if(!props.isReady){
    return(
      <>
      <h1>Loading..</h1>
      <div className='div__image'>
        <p className='loading__text'>Please be patient,</p>
        <p className='loading__text'>the service droids are doing their best.</p>
        <img className='loading__image' src={loading} alt="BB-8 droid rolling back and forth" />
      </div>
      </>
    )
  }

const characterList = props.characters.map((character, i) => {

  return <CharacterCard 
            key={i} 
            character={character}
            setFavorite={props.setFavorite}
            favoriteList={props.favoriteList} 
          />
  })

  return (
    <div className='character__container-main'>
    <section className='character__container-crawl'>
      <div className='fade'></div>
      <section className='crawl__text'>
        <div className='crawl'>
          {props.opening_crawl}
        </div>
      </section>
    </section>
    <section className='character__container'>
      {characterList}
    </section>
    </div>
  )

}

export default CharacterContainer;

CharacterContainer.propTypes = {
  characters:PropTypes.array,
  changeSelectedMovie:PropTypes.func,
  isReady:PropTypes.bool,
  setFavorite:PropTypes.func,
  favoriteList:PropTypes.array,
  opening_crawl:PropTypes.string
}
