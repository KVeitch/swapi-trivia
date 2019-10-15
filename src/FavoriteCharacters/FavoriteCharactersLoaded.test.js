import React from 'react';
import { shallow } from 'enzyme';
import FavoriteCharacters from './FavoriteCharacters';

describe('Favorite Container', () => {

    it('should match the snapshot with all the data passed in correctly', () => {
        const wrapper =
            shallow(<FavoriteCharacters
                    characters={[1,2]}
                    favoriteList={[1,2]}/>)
        expect(wrapper).toMatchSnapshot();
    });
});