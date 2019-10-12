import React from 'react';
import { shallow } from 'enzyme';
import MovieContainer from '../MovieContainer/MovieContainer';

describe('Movie Container', () => {
    it('should match the snapshow with all the data passed in correctly', () => {
        const wrapper =
            shallow(<MovieContainer
                title=''
                episode={3}
                img=''
                key={3}
                releaseYear={1969}
                characters=''
                changeSelectedMovie={jest.fn()}/>)
        expect(wrapper).toMatchSnapshot();
    });
});