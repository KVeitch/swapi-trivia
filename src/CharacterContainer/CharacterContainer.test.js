import React from 'react';
import { shallow } from 'enzyme';
import CharacterContainer from './CharacterContainer';

describe('Character Container', () => {
    let wrapper
    let mockChangeSelectedMovie = jest.fn();
    let mockSetFavorite = jest.fn();

    it('should match the snapshot with all the data passed in correctly', () => {
        wrapper =
            shallow(<CharacterContainer
                characters={[]}
                changeSelectedMovie={mockChangeSelectedMovie}
                isReady={false}
                setFavorite={mockSetFavorite}
                favoriteList={[]}/>)
        expect(wrapper).toMatchSnapshot();
    });
});
