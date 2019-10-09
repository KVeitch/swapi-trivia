import React, { Component } from 'react';
import './Form.css'

class Form extends Component{
    constructor() {
        super()
        this.state = {
            name: '',
            ranking:'',
            quote: ''  
        }
    }



    handleChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]:e.target.value});
      }
    
      handleSubmit = (e) => {
        const userName = this.state.name;
        const userQuote = this.state.quote;
        const userRanking = this.state.ranking;
        this.props.setUser(userName, userQuote, userRanking);
        this.setState({ name:'' , ranking:'', quote:'' });
      }

    render() {
        return(
            <div className='blackout'>
            <form>
                <h1>Star Wars Trivia</h1>
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
                <div>
                    <p>Select you level of knowledge:</p>
                    <select name='ranking' value={this.state.ranking} onChange={this.handleChange}>
                        <option value='Nerf Herder' className='option'>Nerf Herder</option>
                        <option value='Padawan' className='option'>Padawan</option>
                        <option value='Jedi Knight' className='option'>Jedi Kinght</option>
                        <option value='Jedi Master' className='option'>Jedi Master</option>
                    </select>
                </div>
                <div 
                    type='button'
                    className='btn__submit'
                    onClick={this.handleSubmit}
                >
                    Submit
                </div>
                <p>Please fill out all the boxes</p>
            </form>
            </div>
        );

    }

}

export default Form;