import React from 'react';
import { shallow } from 'enzyme';
import UserMenu from './UserMenu';

describe('User Menu', () => {

    it('should match the snapshot with all the data passed in correctly', () => {
        const wrapper =
            shallow(<UserMenu
                    />)
        expect(wrapper).toMatchSnapshot();
    });
});