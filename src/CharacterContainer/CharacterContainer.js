import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterContainer = props => {
    const characterList = props.characters.map((character, i) => {
        console.log('character', character)
        return <CharacterCard 
                    key={i} 
                    character={character} />
    })
    return (
        <section className='character__container'>
            {characterList}
        </section>
    )
}

export default CharacterContainer;