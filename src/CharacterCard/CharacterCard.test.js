import React from 'react';
import { shallow } from 'enzyme';
import CharacterCard from './CharacterCard';

describe('Character Card', () => {

    it('should match the snapshot with all the data passed in correctly', () => {
        const wrapper =
            shallow(<CharacterCard 
                        key={3}
                        character={''}/>)
        expect(wrapper).toMatchSnapshot();
    });
});