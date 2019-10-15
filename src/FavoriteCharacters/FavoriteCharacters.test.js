import React from 'react';
import { shallow } from 'enzyme';
import FavoriteCharacters from './FavoriteCharacters';

describe('Character Container', () => {

    it('should match the snapshot with all the data passed in correctly', () => {
        const wrapper =
            shallow(<FavoriteCharacters
                    characters={[]}
                    favoriteList={[]}
                    />)
        expect(wrapper).toMatchSnapshot();
    });
});