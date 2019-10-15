import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
    let wrapper;
    const mockSetUser = jest.fn();
    const mockSetMovies = jest.fn();
    const mockSetCharacters = jest.fn();
    beforeEach(() => {
        wrapper =
            shallow(<Form
                setUser={mockSetUser}
                setMovies={mockSetMovies}
                setCharacters={mockSetCharacters}
                insults={[{ quote: 'Don’t worry about Master Luke. I’m sure he’ll be all right. He’s quite clever, you know… for a human being.' }]}
            />)
    });

    it('should match the snapshot with all the data passed in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('handleChange', () => {
        it('should update state.name when handleChange is called', () => {
            let mockEvent = {
                target: {
                    name: 'name',
                    value: 'Bob'
                }
            }
            // wrapper.find('.input__name').simulate('onChange');
            wrapper.instance().handleChange(mockEvent);

            expect(wrapper.state().name).toEqual('Bob');
        });

        it('should find the input with a class of .input__name and call the handleChange method', () => {
            let mockEvent = {
                target: {
                    name: 'quote',
                    value: 'Hello World'
                }
            }
            wrapper.find('.input__name').simulate('onChange');
            expect(wrapper.instance().handleChange(mockEvent));
        });

        it('should update state.quote when handleChange is called', () => {
            let mockEvent = {
                target: {
                    name: 'quote',
                    value: 'Hello World'
                }
            }
            // can write a test for wrapper.find finds an input and simulates a change event & calls __()
            // expect ___() to have been called 
            // wrapper.find('.input__quote').simulate('onChange');
            wrapper.instance().handleChange(mockEvent);

            expect(wrapper.state().quote).toEqual('Hello World');
        });
    });

    describe('default values', () => {
        it('should have Nerf Herder as a default value for state.ranking', () => {
            expect(wrapper.state().ranking).toEqual('Nerf Herder');
        });
        it('should have a default value of false for revealError', () => {
            expect(wrapper.state().revealError).toEqual(false);
        });
        it('should have a default value of false for toMovies', () => {
            expect(wrapper.state().toMovies).toEqual(false);
        });
        it('should have default values of empty strings for name, quote, and randomQuote', () => {
            expect(wrapper.state().name).toEqual('');
        });
    });

    describe('handleSubmit', () => {
        it('should be update revealError to true if theres no name or quote', () => {
            expect(wrapper.state().revealError).toEqual(false);
            wrapper.setState({ name: 'Susan' });
            wrapper.instance().handleSubmit();
            expect(wrapper.state().revealError).toEqual(true);
        });

        it('should call setUser if there is a valid name and quote', () => {
            wrapper.setState({ name: 'Susan', quote: "After all, he's a wookie" });
            wrapper.instance().handleSubmit();
            // expect(mockSetUser) also works
            expect(wrapper.instance().props.setUser).toHaveBeenCalledWith('Susan', "After all, he's a wookie", 'Nerf Herder')
        });

        it('should reset state', () => {
            wrapper.setState({ name: 'Bob', ranking: 'Jedi Master', quote: 'Hello World', revealError: true, toMovies: false });
            wrapper.instance().handleSubmit();
            expect(wrapper.state().name).toEqual('');
            expect(wrapper.state().ranking).toEqual('');
            expect(wrapper.state().quote).toEqual('');
            expect(wrapper.state().revealError).toEqual(false);
            expect(wrapper.state().toMovies).toEqual(true);
        });
    });

    describe('handleRandomQuote', () => {
        it('should return a random quote', () => {
            global.Math.random = jest.fn().mockImplementation(() => 1)
            global.Math.floor = jest.fn().mockImplementation(() => 0)
            expect(wrapper.instance().handleRandomQuote()).toEqual('Don’t worry about Master Luke. I’m sure he’ll be all right. He’s quite clever, you know… for a human being.')
        });
    });

});


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
                id={3} />)
        expect(wrapper).toMatchSnapshot();
    });

    it('should fire changeSelectedMovie when the View Characters Button is clicked', () => {
        let mockEvent = {
            target: {
                name: 'id',
                value: 3
            }
        }
        wrapper.find('.characters__button').simulate('onClick');
        expect(mockChangeSelectedMovie(mockEvent, 2)).toHaveBeenCalled();
    });
});
