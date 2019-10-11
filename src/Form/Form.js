import React, { Component } from 'react';
import './Form.css';
import robot from '../images/003-robot.svg';
import { Redirect } from 'react-router-dom';
import mockFilms from '../mock-data/mockFilm'
import mockCharacters from '../mock-data/characters'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      ranking:'Nerf Herder',
      quote: '',
      revealError:false,
      toMovies:false  
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }
    
  handleSubmit = () => {
    const { name, quote, ranking } = this.state;

    if(name && quote && ranking) {
      this.props.setUser(name, quote, ranking);
      this.props.setMovies(mockFilms)
      console.log('mockFilms', mockFilms)
      this.props.setCharacters(mockCharacters)
      console.log('mockCharacters', mockCharacters)
      this.setState({ revealError : false, toMovies : true });
    } else {
      this.setState({ revealError : true })
    }
  }

  render() {
    if(this.state.toMovies) {
      return <Redirect to='/movies' />;
    }
    
    const errorClass = this.state.revealError ? 'error': 'hidden error';

    return(
      <div className='blackout'>
        <form>
          <h1>Star Wars Trivia</h1>
          <p className={errorClass}>
            <img className='errorIcon' alt='line drawing of R2D2' src={robot} />
            Please fill out all of the selections.
          </p>
          <input 
            type = 'text'
            name = 'name'
            className = 'input__name'
            placeholder = 'What do you prefer to be called?'
            value = {this.state.name}
            onChange = {this.handleChange}
          />
          <input 
            type = 'text'
            name = 'quote'
            className = 'input__quote'
            placeholder = 'What is your favorite Star Wars quote?'
            value = {this.state.quote}
            onChange = {this.handleChange}
          />
          <div className='selection__menu'>
            <p>How Jedi Are You?</p>
            <select name='ranking' value={this.state.ranking} onChange={this.handleChange} >
              <option value='Nerf Herder' className='option'>Nerf Herder</option>
              <option value='Padawan' className='option'>Padawan</option>
              <option value='Jedi Knight' className='option'>Jedi Knight</option>
              <option value='Jedi Master' className='option'>Jedi Master</option>
            </select>
          </div>
          <button className='btn__submit' onClick={this.handleSubmit} >
            Submit
          </button>
        </form>
      </div>
    );

    }

}

export default Form;