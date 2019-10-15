import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard';

describe('Movie Card', () => {
    let wrapper;
    let mockChangeSelectedMovie = jest.fn()
    beforeEach(() => {
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
    });
    
    it('should match the snapshot with all the data passed in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should fire changeSelectedMovie when the View Characters Button is clicked', () => {
        let mockEvent = {
            target: {
                name: 'id',
                id: 3,
                value: 3
            }
        }
        wrapper.find('button').simulate('click', mockEvent, 2);
        expect(mockChangeSelectedMovie).toHaveBeenCalled();
    });
});