import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import { getMovies, getFilmCharacters } from '../apiCalls';
import MovieContainer from '../MovieContainer/MovieContainer';
import { Switch, Route, Redirect} from 'react-router-dom';
import CharacterContainer from '../CharacterContainer/CharacterContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user:'',
      userQuote:'',
      userRanking:'',
      movies: [],
      selectedMovie: 1,
      movieCharacters1 : [],
      movieCharacters2 : [],
      movieCharacters3 : [],
      movieCharacters4 : [],
      movieCharacters5 : [],
      movieCharacters6 : [],
      movieCharacters7 : [],
      currentCharacters: []
    }
  }

  setUser = (user, userQuote, userRanking)=> {
    this.setState({ user, userQuote, userRanking })
  }

  componentDidMount = () => {
    getMovies().then(data => this.setState({ movies : data }))
    getFilmCharacters(this.state.selectedMovie).then(chars => this.setState({ currentCharacters: chars}))
    .then(()=>console.log('done'))
    // const films = [1,2,3,4,5,6,7]
    // films.forEach(film => {
    //   getFilmCharacters(film).then(res => {
    //     const movie = `movieCharacters${film}`
    //     console.log(movie , res)
    //     this.setState({ [movie]: res })
    //   })
    // })
  }

  changeSelectedMovie= (movieId) => {
    this.setState({ selectedMovie : movieId })
  }

  render() {
    const charProps = `this.props.movieCharacters${this.state.selectedMovie}`;
    return (

      <div className="App">

          <Route exact path='/' render={ (props)=> <Form {...props} setUser={this.setUser} />} />
          <Route exact path='/movies' render={ (props)=> <MovieContainer {...props} movies={this.state.movies} changeSelectedMovie={this.changeSelectedMovie} />} />
          <Route exact path={`/movies/${this.state.selectedMovie}`} render={ (props)=> <CharacterContainer {...props} characters={this.state.currentCharacters} />} />
          <Redirect to='/' />

      </div>
    );  
  }
}

export default App;