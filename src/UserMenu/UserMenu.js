import React from 'react';
import './UserMenu.css';

const UserMenu = (props) => {
    return(
        <div className='user__box'>
            <p>{props.user}</p>
            <p>"{props.userQuote}"</p>
            <p>{props.userRanking}</p>
        </div>
    )
}

export default UserMenu;