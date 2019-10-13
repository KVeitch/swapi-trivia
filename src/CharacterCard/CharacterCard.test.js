import React from 'react';
import { shallow, mount } from 'enzyme';
import CharacterCard from './CharacterCard';

describe('Character Card', () => {
  let wrapper;
  const mockSetFav = jest.fn();
  const mockFavoriteList = []
  const mockCharacter = {
                          films:['Best of my Home movies', 'Mostly vines'],
                          homeworld:'earth',
                          name:'Bob',
                          population:'8000000000',
                          species:'humanish',
                        }

  beforeEach(()=> {
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

  it('Should call setFavorite when the button is clicked', ()=>{
    wrapper = mount(<CharacterCard 
      key={377} 
      character={mockCharacter}
      setFavorite={mockSetFav}
      favoriteList={mockFavoriteList}
      />);
    // wrapper.update()
    wrapper.find('.div__favorite').simulate('click');
      console.log(wrapper.props())
    expect(wrapper.props().setFavorite).toHaveBeenCalled()
  
  })
}); 