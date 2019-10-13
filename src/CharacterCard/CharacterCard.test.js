import React from 'react';
import { shallow } from 'enzyme';
import CharacterCard from './CharacterCard';

describe('Character Card', () => {
  let wrapper, mockCharacter;
  beforeEach(()=> {
    mockCharacter = {
      films:['Best of my Home movies', 'Mostly vines'],
      homeworld:'earth',
      name:'Bob',
      population:'8000000000',
      species:'humanish',
    }
    const mockSetFav = jest.fn();
    const mockFavoriteList = []
    wrapper = shallow(<CharacterCard 
      key={377} 
      character={mockCharacter}
      setFavorite={mockSetFav}
      favoriteList={mockFavoriteList}
      />)
    });

  it('should match the snapshot with all the data passed in correctly', () => {
      expect(wrapper).toMatchSnapshot();
  });
});