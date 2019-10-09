import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import { getMovies } from '../apiCalls';
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
      movies: [],
      characters: [],
    }
  }

  setUser = (user, userQuote, userRanking)=> {
    console.log('setUser')
    this.setState({user, userQuote, userRanking})

  }

  componentDidMount() {
    getMovies().then(data => this.setState({ movies: data }))
  }

  render() {

    return (
      <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' render={(props)=> <Form {...props} setUser={this.setUser}/>} />
          <Route exact path='/movies' render={(props)=> <MovieContainer {...props} movies={this.state.movies} />} />
          <Route exact path='/characters' render={(props)=> <CharacterContainer {...props}/>} />
        </Switch>
      </div>
      </Router>
    );  
  }
}

export default App;
