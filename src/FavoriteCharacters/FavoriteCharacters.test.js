import React from 'react';
import { shallow } from 'enzyme';
import CharacterContainer from './CharacterContainer';

describe('Character Container', () => {

    it('should match the snapshot with all the data passed in correctly', () => {
        const wrapper =
            shallow(<CharacterContainer
                    characters={[]}/>)
        expect(wrapper).toMatchSnapshot();
    });
});