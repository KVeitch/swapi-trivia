import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form'
import { getMovies } from '../apiCalls'
import MovieContainer from '../MovieContainer/MovieContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user:'',
      userQuote:'',
      userRanking:'',
      movies:[],
      isFormComplete:false
    }
  }

  setUser = (user, userQuote, userRanking)=> {
    this.setState({user, userQuote, userRanking, isFormComplete:true})
  }

  componentDidMount() {
    getMovies().then(data => this.setState({movies:data}))
  }



  render() {
    return (
      <div className="App">
        {!this.state.isFormComplete && <Form setUser={this.setUser}/>}
        <MovieContainer movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
