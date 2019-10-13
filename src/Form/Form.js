import React, { Component } from 'react';
import './Form.css';
import robot from '../images/003-robot.svg';
import { Redirect } from 'react-router-dom';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      ranking:'Nerf Herder',
      quote: '',
      revealError:false,
      toMovies:false,
      randomQuote: '' 
    }
  }

  componentDidMount() {
    this.setState({ randomQuote: this.handleRandomQuote()})
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] :e.target.value });
  }
  
  handleSubmit = () => {
    const { name, quote, ranking } = this.state;

    if(name && quote) {
        this.props.setUser(name, quote, ranking);
        this.setState({ name:'' , ranking:'', quote:'', revealError:false, toMovies:true});
    } else {
        this.setState({revealError:true})
    }
  }

  handleRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * (this.props.insults.length))
    const randomQuotes = this.props.insults.map(insult => {
      return insult.quote
    })
    return randomQuotes[randomIndex]

  }

  render() {
    if(this.state.toMovies) {
      return <Redirect to='/movies' />;
    }
    const errorClass = this.state.revealError ? 'error': 'hidden error';
    return(
      <div className='blackout'>
        <form>
          <div className='sidebar'>
          <h1>Star Wars Trivia</h1>
          <p className={errorClass}>
            <img className='error-icon' alt='line drawing of R2D2' src={robot} />
            Please fill out all fields
          </p>
            <img src='https://image.flaticon.com/icons/svg/813/813466.svg' className='logo'alt='star-wars-icon' />
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
            <h3>How Jedi Are You?</h3>
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
          </div>
        <div className='random__quote'>
          <p className='quote__text'>{this.state.randomQuote}<span> -C3PO </span></p>
        </div>
        </form>
      </div>
    );

    }

}

export default Form;