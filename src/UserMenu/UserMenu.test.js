import React from 'react';
import { shallow } from 'enzyme';
import UserMenu from './UserMenu';

describe('User Menu', () => {
    let wrapper;
    let mockResetIsCurrentCharacterLoaded = jest.fn()
    it('should match the snapshot with all the data passed in correctly', () => {
        wrapper =
            shallow(<UserMenu
                    user={''}
                    userQuote={''}
                    userRanking={'Nerf Herder'}
                    resetIsCurrentCharacterLoaded={mockResetIsCurrentCharacterLoaded}/>)
        expect(wrapper).toMatchSnapshot();
    });
});