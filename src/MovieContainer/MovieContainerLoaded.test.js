import React from 'react';
import { shallow } from 'enzyme';
import MovieContainer from '../MovieContainer/MovieContainer';
import { sortedMovies } from '../mock-data/movie-data'

describe('Movie Container Loaded', () => {

  it('should match the snapshot with all the data passed in correctly', () => {
      const wrapper =
          shallow(<MovieContainer
                  movies={sortedMovies}
                  changeSelectedMovie={jest.fn()}/>)
      expect(wrapper).toMatchSnapshot();
  });
});