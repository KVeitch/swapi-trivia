import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import loading from '../images/loading.gif'
import './CharacterContainer.css'


const CharacterContainer = props => {
    console.log('CC: ', props)
    if(!props.isReady){
        return(
            <>
            <h1>Loading</h1>
            <div className='div__image'>
                <p className='loading__text'>Please be patient</p>
                <img className='loading__image' src={loading} alt="BB-8 droid rolling back and forth" />
                <p className='loading__text'>the service droids are doing their best.</p>
            </div>
            </>
        )
    }
 
    const characterList = props.characters.map((character, i) => {
        console.log(i)
        return <CharacterCard 
                    key={i+1} 
                    character={character}
                    addFavorite={props.addFavorite} />
    })
    return (
        <section className='character__container'>
            {characterList}
        </section>
    )
}

export default CharacterContainer;