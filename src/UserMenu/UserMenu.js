import React from 'react';
import { Link } from 'react-router-dom';
import './UserMenu.css';

const UserMenu = (props) => {
    return(
        <div className='user__box'>
            <p className='box__ends'>{props.user}</p>
            <p>Favorite Quote: "{props.userQuote}"</p>
            <p className='box__ends'>Ranking: {props.userRanking}</p>
            <Link to='/movies/'><button className='user__buttons' onClick={props.resetIsCurrentCharacterLoaded}>Back To Movies</button></Link>
            <Link to='/favorites/'><button className='user__buttons'>Favorite Characters</button></Link>
            <button className='user__buttons'onClick={props.userSignOut}>Sign Out</button>
        </div>
    )
}

export default UserMenu;