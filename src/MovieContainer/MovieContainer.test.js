import React from 'react';
import { shallow } from 'enzyme';
import MovieContainer from '../MovieContainer/MovieContainer';

describe('Movie Container', () => {

    it('should match the snapshot with all the data passed in correctly', () => {
        const wrapper =
            shallow(<MovieContainer
                    movies={[]}
                    changeSelectedMovie={jest.fn()}/>)
        expect(wrapper).toMatchSnapshot();
    });
});