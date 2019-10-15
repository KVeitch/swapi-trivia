import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './UserMenu.css';

const UserMenu = (props) => {
    return(
        <div className='footer'>
        <div className='user__box'>
            <p className='box__ends'>{props.user}</p>
            <p>Favorite Quote: "{props.userQuote}"</p>
            <p className='box__ends'>Ranking: {props.userRanking}</p>
        </div>
            <div className='buttons'>
                <Link to='/movies/'>
                    <button type='button' className='user__buttons' onClick={props.resetIsCurrentCharacterLoaded}>
                        Back To Movies
                    </button>
                </Link>
                <Link to='/favorites/'>
                    <button type='button'className='user__buttons'>
                        Favorite Characters
                    </button>
                </Link>
                <Link to ='/'>
                    <button type='button' className='user__buttons' onClick={props.signUserOut}>
                        Sign Out
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default UserMenu;

UserMenu.propTypes = {
    user: PropTypes.string,
    userQuote: PropTypes.string,
    userRanking: PropTypes.string,
    resetIsCurrentCharacterLoaded: PropTypes.func,
    signUserOut: PropTypes.func
  }