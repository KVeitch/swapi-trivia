import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard';

describe('Movie Card', () => {
    let wrapper;
    let mockChangeSelectedMovie = jest.fn()
    it('should match the snapshot with all the data passed in correctly', () => {
        wrapper =
            shallow(<MovieCard
                title={''}
                episode={3}
                img={''}
                key={3}
                releaseYear={''}
                characters={[]}
                changeSelectedMovie={mockChangeSelectedMovie}
                id={3}/>)
        expect(wrapper).toMatchSnapshot();
    });

    it.skip('should fire changeSelectedMovie when the View Characters Button is clicked', () => {
        wrapper.find('.characters__button').simulate('onClick');
        wrapper.instance().changeSelectedMovie();
        expect(wrapper.instance().changeSelectedMovie).toHaveBeenCalled();
    });
});