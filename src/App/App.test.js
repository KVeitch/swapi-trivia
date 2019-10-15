import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';
import { getMovies, getFilmCharacters } from '../apiCalls'
jest.mock('../apiCalls.js')

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    getMovies.mockImplementation(() => {
      return Promise.resolve([{}, {}])
    });

    getFilmCharacters.mockImplementation(() => {
      return Promise.resolve([{}, {}])
    });

    wrapper = shallow(<App />)
  });

  it('should match the snapshot with all the data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    it('should retrieve movies after mounting', () => {
      shallow(<App />);
      expect(getMovies).toHaveBeenCalled();
    });
  });

  describe('default values', () => {
    it('should have default values of empty strings for user, userQuote, userRanking, and selectedMovie', () => {
      expect(wrapper.state().user).toEqual('');
      expect(wrapper.state().userQuote).toEqual('');
      expect(wrapper.state().userRanking).toEqual('');
      expect(wrapper.state().selectedMovie).toEqual('');
    });

    it('should have a default value of false for isCurrentCharactersLoaded', () => {
      expect(wrapper.state().isCurrentCharactersLoaded).toEqual(false);
    });
  });

  describe('setUser', () => {
    it('should set the state of user, userQuote, userRanking', () => {
      wrapper.setState({ user: 'user', userQuote: 'userQuote', userRanking: 'userRanking' });
    });
  });

  describe('setCurrentCharacters', () => {
    it('should retrieve the characters', async () => {
      await wrapper.instance().setCurrentCharacters();
      expect(getFilmCharacters).toHaveBeenCalled();
    });
  });

  describe('resetIsCurrentCharacterLoaded', () => {
    it('should set the state of isCurrentCharactersLoaded to false and selectedMovie to an empty string', () => {
      wrapper.setState({ isCurrentCharactersLoaded: true, selectedMovie: 'Hello World' });
      wrapper.instance().resetIsCurrentCharacterLoaded();
      expect(wrapper.state().isCurrentCharactersLoaded).toEqual(false);
      expect(wrapper.state().selectedMovie).toEqual('');
    });
  });

  describe('changeSelectedMovie', () => {
    it('should call setCurrentCharacters', async () => {
      await wrapper.instance().changeSelectedMovie();
      expect(wrapper.instance().setCurrentCharacters).toHaveBeenCalled();
    });

    it.skip('should update state.selectedMovie to the movie number passed in', async () => {
      await wrapper.instance().changeSelectedMovie(2)
      expect(wrapper.state().selectedMovie).toEqual(2)
    });
  });

  describe('setImages', () => {
    it('should update state.movies to update with images', () => {
      wrapper.instance().setImages();
      expect(wrapper.state().movies).toEqual([{}, {}]);
    });
  });

  describe('signUserOut', () => {
    it('should reset the state when a user signs out', () => {
      wrapper.setState({
        user: 'Young Julian',
        userQuote: 'Hihihihi',
        userRanking: 'Young Padawan',
        movies: ['', ''],
        selectedMovie: 'A New Hope',
        currentCharacters: ['', ''],
        isCurrentCharactersLoaded: true,
        favoriteCharacters: ['', '']
      });
      wrapper.instance().signUserOut();
      expect(wrapper.state()).toEqual({
        user: '',
        userQuote: '',
        userRanking: '',
        movies: [],
        selectedMovie: '',
        currentCharacters: [],
        isCurrentCharactersLoaded: false,
        favoriteCharacters: []
      })
    });
  });

});
