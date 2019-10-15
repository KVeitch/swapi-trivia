import React from 'react';
import { Link } from 'react-router-dom'
import CharacterCard from '../CharacterCard/CharacterCard';
import PropTypes from 'prop-types';
import loading from '../images/loading.gif'
import './FavoriteCharacters.css'

const FavoriteCharacters = props => {
    if(props.favoriteList.length===0){
        return(
            <>
            <h2 className='favorite__h2'>See your favorite character!</h2>
            <h3 className='favorite__h3'>Please select a few first.</h3>
            <Link to='/movies'>
                <button className='user__buttons fav__character__btn'>Back to Movies</button>
            </Link>
            <div className='div__image'>
                <img className='loading__image' src={loading} alt="BB-8 droid rolling back and forth" />
            </div>
            </>
        )
    }

const characterList = props.characters.map((character, i) => {

    return <CharacterCard 
                key={'fav'+i} 
                character={character}
                setFavorite={props.setFavorite}
                favoriteList={props.favoriteList} />
    })
    return (
        <section className='character__container'>
            {characterList}
        </section>
    )
}

export default FavoriteCharacters;

FavoriteCharacters.propTypes = {
    characters:PropTypes.array,
    changeSelectedMovie:PropTypes.func,
    isReady:PropTypes.bool,
    setFavorite:PropTypes.func,
    favoriteList:PropTypes.array,
  }