import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterContainer = props => {
    const characterList = this.props.characters.map((character, i) => {
        return <CharacterCard 
                    key={i} 
                    character={character} />
    })
    return (
        <section class='character__container'>
            {characterList}
        </section>
    )
}

export default CharacterContainer;