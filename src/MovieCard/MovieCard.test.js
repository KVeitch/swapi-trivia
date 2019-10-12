import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard';

describe('Movie Card', () => {

    it('should match the snapshot with all the data passed in correctly', () => {
        const wrapper =
            shallow(<MovieCard
                title={''}
                episode={3}
                img={''}
                key={3}
                releaseYear={''}
                characters={[]}
                changeSelectedMovie={jest.fn()}
                id={3}/>)
        expect(wrapper).toMatchSnapshot();
    });
});