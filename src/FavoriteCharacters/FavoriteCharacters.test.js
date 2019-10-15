import React from 'react';
import { shallow } from 'enzyme';
import FavoriteCharacters from './FavoriteCharacters';

describe('Favorite Characters', () => {
    let wrapper
    const mockChangeSelectedMovie = jest.fn();
    const mockSetFavorite = jest.fn();

    it('should match the snapshot with all the data passed in correctly', () => {
        wrapper = shallow(<FavoriteCharacters
            characters={[]}
            changeSelectedMovie={mockChangeSelectedMovie}
            isReady={false}
            setFavorite={mockSetFavorite}
            favoriteList={[{}, {}]} />)
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a message to indicate to select favorites if there are none', () => {
        console.log('wrapper', wrapper.props())
        let header = <h2>Bananas</h2>
        expect(wrapper.contains(header))
    });

}); 
