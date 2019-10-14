import React from 'react';
import { shallow } from 'enzyme';
import FavoriteCharacters from './FavoriteCharacters';

describe('Favorite Characters', () => {

    it.skip('should match the snapshot with all the data passed in correctly', () => {
        const wrapper =
            shallow(<FavoriteCharacters
                    characters={[]}/>)
        expect(wrapper).toMatchSnapshot();
    });
});