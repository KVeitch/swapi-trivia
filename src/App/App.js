import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import { getMovies, getFilmCharacters } from '../apiCalls';
import MovieContainer from '../MovieContainer/MovieContainer';
import { Switch, Route, Redirect} from 'react-router-dom';
import CharacterContainer from '../CharacterContainer/CharacterContainer'
import UserMenu from '../UserMenu/UserMenu';
import mockFilms from '../mock-data/mockFilm'

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
      currentCharacters: [],
      moviesWithImages: []
    }
    console.log('this.state', this.state)
  }
  
  setUser = (user, userQuote, userRanking)=> {
    this.setState({ user, userQuote, userRanking })
  }
  
  setMovies = (mockFilms) => {
    const data = mockFilms.results
    this.setState({
      movies: this.setImages(data)
  })
  }
  
  setCharacters = (mockCharacters) => {
    const characterData = mockCharacters.results
    // getFilmCharacters(this.state.selectedMovie)
    this.setState({ characters : characterData})
  }
  
  // componentDidMount = (mockFilm) => {
    // getMovies(mockFilms)
    // .then(data => this.setState({ movies : data }))
    // getFilmCharacters(this.state.selectedMovie).then(chars => this.setState({ currentCharacters: chars }))
    // .then(()=>console.log('done'))
    // const films = [1,2,3,4,5,6,7]
    // films.forEach(film => {
      // getFilmCharacters(film).then(response => {
        // const movie = `movieCharacters${film}`
        // console.log('movie', movie , response)
        // this.setState({ [movie]: response })
      // })
    // })
  // }

  componentDidMount() {
    this.setMovies(mockFilms)

  }
  setImages = (data) => {
    const dictionary = {
      2: 'https://images-na.ssl-images-amazon.com/images/I/61yWUYWkBhL._SY445_.jpg',
      4: 'https://images-na.ssl-images-amazon.com/images/I/61zAkpvYLqL._SY741_.jpg',
      1: 'https://ae01.alicdn.com/kf/HTB1h5pCNXXXXXXiaXXXq6xXFXXX9.jpg',
      3: 'https://images-na.ssl-images-amazon.com/images/I/61UpAncAQbL._SY679_.jpg',
      6: 'https://images-na.ssl-images-amazon.com/images/I/51UdiBUkerL.jpg',
      5: 'https://images-na.ssl-images-amazon.com/images/I/814Cbv8EftL._SY679_.jpg'
    }
    const moviesWithImages = data.map(movie => {
      const movieImage = dictionary[movie.episode_id];

      return {
        ...movie,
        movieImage
      }
    })
    this.setState({ movies: moviesWithImages })
    console.log('this.state', this.state.movies)
  }

  changeSelectedMovie = (movieId) => {
    this.setState({ selectedMovie : movieId })
  }

  userSignOut = () => {
    this.setState({user: '', userQuote: '', userRanking: ''})
  }

  render() {
    const charProps = `this.props.movieCharacters${this.state.selectedMovie}`;
    return (
      <div className="App">
          <Route exact path='/' render={ (props)=> <Form {...props} setUser={this.setUser} setMovies={this.setMovies} setCharacters={this.setCharacters} setImages={this.setImages}/>} />
        {this.state.movies ? <Route exact path='/movies' render={(props) => <MovieContainer {...props} movies={this.state.movies} changeSelectedMovie={this.changeSelectedMovie} />} /> 
        : ''}
        <Route exact path='/movies' render={(props) => <UserMenu {...props} user={this.state.user} userQuote={this.state.userQuote} userRanking={this.state.userRanking} userSignOut={this.userSignOut} />} />
          <Route exact path={`/movies/${this.state.selectedMovie}`} render={ (props)=> <CharacterContainer {...props} characters={this.state.currentCharacters} />} />
          <Redirect to='/' />
      </div>
    );  
  }
}

export default App;