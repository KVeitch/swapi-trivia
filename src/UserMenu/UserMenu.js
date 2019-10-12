import React from 'react';
import './UserMenu.css';

const UserMenu = (props) => {
    return(
        <div className='user__box'>
            <p className='box__ends'>{props.user}</p>
            <p>Favorite Quote: "{props.userQuote}"</p>
            <p className='box__ends'>Ranking: {props.userRanking}</p>
            <button onClick={props.userSignOut}>Sign Out</button>
        </div>
    )
}

export default UserMenu;