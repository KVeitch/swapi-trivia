import {movieData, sortedMovies} from './mock-data/movie-data';

import {  
  getMovies,
  getFimCharacters,
  getFilmCharacters,
  formatData,
  getCharacterSpecies,
  getCharacterHomeWorld,
  getCharacterFilm,
  } from './apiCalls';

describe('apiCalls',() => {

  describe('getMovies',() => {
    const mockResponce = movieData;
    beforeEach(()=>{
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok:true,
          json:()=> Promise.resolve(mockResponce),
        });
      });
    });

    it('should call fetch with the correct url',() => {
      getMovies();
      expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films/');
    });

    it('should return an array ov Movies (HAPPY)',() => {
      expect(getMovies()).resolves.toEqual(sortedMovies)
    })

    it('should return an error if ok:false (SAD 1)',() => {})
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok:false,
        json:()=> Promise.resolve(mockResponce),
      })
    })

    it('should return an error is fetch fails (SAD 2)',() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('fetch failed'))
      })

      expect(getMovies()).rejects.toEqual(Error('fetch failed'))
    })

  })








})