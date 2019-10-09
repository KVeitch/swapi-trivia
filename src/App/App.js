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
      movies: [],
      characters: []
    }
  }

  componentDidMount() {
    getMovies().then(data => this.setState({ movies: data }))
  }

  render(){
    return (
      <div className="App">
        <Form />
        <MovieContainer movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
