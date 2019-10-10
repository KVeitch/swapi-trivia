import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import { getMovies, getCharacters, createCharacterList } from '../apiCalls';
import MovieContainer from '../MovieContainer/MovieContainer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CharacterContainer from '../CharacterContainer/CharacterContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user:'',
      userQuote:'',
      userRanking:'',
      userProfileVisible: false,
      movies: [],
      characters: [],
      selectedMovie: null,
      movieCharacters1 : [],
      movieCharacters2 : [],
      movieCharacters3 : [],
      movieCharacters4 : [],
      movieCharacters5 : [],
      movieCharacters6 : [],
      movieCharacters7 : []
    }
  }

  setUser = (user, userQuote, userRanking)=> {
    this.userProfileVisible = true;
    this.setState({ user, userQuote, userRanking })
  }

  componentDidMount = () => {
    getMovies().then(data => this.setState({ movies : data }))
  }

  changeSelectedMovie= (movieId) => {
    this.setState({ selectedMovie : movieId })
  }

  render() {
    let userProfile;
    if (this.userProfileVisible = true) {
      userProfile = <div className='user__container'>
        <p>{this.user}</p>
        <p>{this.userQuote}</p>
        <p>{this.userRanking}</p>
      </div>
    }
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' render={ (props)=> <Form {...props} setUser={this.setUser} />} />
          <Route exact path='/movies' render={ (props)=> <MovieContainer {...props} movies={this.state.movies} user={this.state.user} userQuote={this.state.userQuote} userRanking={this.state.userRanking} changeSelectedMovie={this.changeSelectedMovie} />} />
          <Route path={`/movies/${this.state.selectedMovie}`} render={ (props)=> <CharacterContainer {...props} characters={`this.props.movieCharacters${this.state.selectedMovie}`} />} />
        </Switch>
        <div className='user-profile'>
          {userProfile}
        </div>
      </div>
      </Router>
    );  
  }
}

export default App;