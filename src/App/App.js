import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import { getMovies, getFilmCharacters, createCharacterList, getCharacter } from '../apiCalls';
import MovieContainer from '../MovieContainer/MovieContainer';
import { Route, Redirect} from 'react-router-dom';
import CharacterContainer from '../CharacterContainer/CharacterContainer'
import UserMenu from '../UserMenu/UserMenu';
// import films from '../mock-data/films.json';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user:'',
      userQuote:'',
      userRanking:'',
      movies: [],
      selectedMovie: 1,
      currentCharacters: ['bob']
    }
  }

  componentDidMount = () => {
    getMovies()
    .then(data => this.setState({ movies : data }))
    .then(()=>console.log('Got Films'))
  }
  
  setUser = (user, userQuote, userRanking)=> {
    this.setState({ user, userQuote, userRanking })
  }

  setCurrentCharacters = (filmId) => {
    console.log('starting character Fetch')
    getFilmCharacters(filmId)
      .then(data=>{console.log(data); return data})
      .then(data => this.setState({ currentCharacters:data}))
      .then(()=>console.log('finished character fetch',this.state.currentCharacters))
    
  }
  
  changeSelectedMovie= (movieNum) => {
    this.setCurrentCharacters(movieNum)
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

  render=() => {
    return (
      <div className="App">
          <Route exact path='/' render={ (props)=> <Form {...props} setUser={this.setUser} setMovies={this.setMovies} setCharacters={this.setCharacters}/>} />
          <Route exact path='/movies' render={ (props)=> <MovieContainer {...props} movies={this.state.movies} setCurrentCharacters={this.setCurrentCharacters} changeSelectedMovie={this.changeSelectedMovie} />} />
          <Route exact path='/movies' render={(props) => <UserMenu {...props} user={this.state.user} userQuote={this.state.userQuote} userRanking={this.state.userRanking} />} />
          <Route exact path={'/movies/1'} 
                      render={ (props)=> <CharacterContainer {...props} 
                      characters={this.currentCharacters} 
                      changeSelectedMovie={this.changeSelectedMovie}
                      />} />
          {/* <Redirect to='/movies' /> */}
      </div>
    );  
  }
}

export default App;