import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import { getMovies, getFilmCharacters } from '../apiCalls';
import MovieContainer from '../MovieContainer/MovieContainer';
import { Route, Redirect} from 'react-router-dom';
import CharacterContainer from '../CharacterContainer/CharacterContainer'
import UserMenu from '../UserMenu/UserMenu';
// import films from '../mock-data/films.json';
import insults from '../mock-data/C3PO';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user:'',
      userQuote:'',
      userRanking:'',
      movies: [],
      selectedMovie: 1,
      currentCharacters: []
    }
    console.log('this.state', this.state)
  }
  
  setUser = (user, userQuote, userRanking)=> {
    this.setState({ user, userQuote, userRanking })
  }

  // setMovies = (mockFilms) => {
  //   console.log('mockFilms', mockFilms)
  //   const data = mockFilms.results
  //   this.setState({ movies : data })
  // }
  
  // setCharacters = (mockCharacters) => {
  //   const characterData = mockCharacters.results
  //   getFilmCharacters(this.state.selectedMovie)
  //   this.setState({ characters : characterData})
  // }
  
  componentDidMount = () => {
///////////////// Switch for mock films data Switch 1 ////////////////////
    // this.setState({movies : films})
///////////////// Switch for mock films data  Switch 1////////////////////
    getMovies()
    .then(data => this.setState({ movies : data }))
    .then(()=>console.log('Got Films'))
    ///////////////// Switch for mock data films End Switch 1////////////////////

    // getFilmCharacters(this.state.selectedMovie).then(chars => this.setState({ currentCharacters: chars }))
    // .then(()=>console.log('done'))


    // const films = [1,2,3,4,5,6,7]
    // films.forEach(film => {
    //   getFilmCharacters(film).then(response => {
    //     const movie = `movieCharacters${film}`
    //     console.log('movie', movie , response)
    //     this.setState({ [movie]: response })
    //   })
    // })
  }

  changeSelectedMovie= (movieNum) => {
    this.setState({ selectedMovie : movieNum })

  }

  setImages = () => {
    const dictionary = {
      2: 'https://images-na.ssl-images-amazon.com/images/I/61yWUYWkBhL._SY445_.jpg', 
      4: 'https://images-na.ssl-images-amazon.com/images/I/61zAkpvYLqL._SY741_.jpg', 
      1: 'https://ae01.alicdn.com/kf/HTB1h5pCNXXXXXXiaXXXq6xXFXXX9.jpg', 
      3: 'https://images-na.ssl-images-amazon.com/images/I/61UpAncAQbL._SY679_.jpg', 
      6: 'https://images-na.ssl-images-amazon.com/images/I/51UdiBUkerL.jpg', 
      5: 'https://images-na.ssl-images-amazon.com/images/I/814Cbv8EftL._SY679_.jpg'
    }
    const moviesWithImages = this.state.movies.map(movie => {
      const movieImage = dictionary[movie.episode];

      return {
        ...movie,
        movieImage
      }
      // if (movie.episode === Object.keys(dictionary)) {
      //   return Object.assign(movie, dictionary)
      // }
    })
    this.setState({movies: moviesWithImages})
  }

  userSignOut = () => {
    this.setState({user: '', userQuote: '', userRanking: ''})
  }

  render() {
    return (
      <div className="App">
          <Route exact path='/' render={ (props)=> <Form {...props} setUser={this.setUser} setMovies={this.setMovies} setCharacters={this.setCharacters} insults={insults}/>} />
          <Route exact path='/movies' render={ (props)=> <MovieContainer {...props} movies={this.state.movies} changeSelectedMovie={this.changeSelectedMovie} />} />
          <Route exact path='/movies' render={(props) => <UserMenu {...props} user={this.state.user} userQuote={this.state.userQuote} userRanking={this.state.userRanking} />} />
          <Route exact path={`/movies/${this.state.selectedMovie}`} render={ (props)=> <CharacterContainer {...props} characters={this.currentCharacters} />} />
          {/* <Redirect to='/' /> */}
      </div>
    );  
  }
}

export default App;