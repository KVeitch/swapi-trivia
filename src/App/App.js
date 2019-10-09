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
      <Router>
      <div className="App">
        {!this.state.isFormComplete && <Form setUser={this.setUser}/>}
        <Switch>
        <Route path='/' render={()=><MovieContainer movies={this.state.movies} />} />
        <Route path='/characters' render={()=><CharacterContainer />} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
