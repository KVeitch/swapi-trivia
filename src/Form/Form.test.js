import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {

    it('should match the snapshot with all the data passed in correctly', () => {
        const wrapper =
            shallow(<Form
                    setUser={jest.fn()}
                    setMovies={jest.fn()}
                    setCharacters={jest.fn()}
                    insults={[{ quote: 'Don’t worry about Master Luke. I’m sure he’ll be all right. He’s quite clever, you know… for a human being.'}]}
                    />)
        expect(wrapper).toMatchSnapshot();
    });
});