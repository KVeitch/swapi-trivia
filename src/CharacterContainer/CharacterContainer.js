import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterContainer = props => {
    console.log(props)
    const characterList = props.characters.map((character, i) => {
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