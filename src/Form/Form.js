import React, { Component } from 'react';

class Form extends Component{
    constructor() {
        super()
        this.state = {
            name: '',
            ranking:'',
            quote: ''  
        }
    }

    render() {
        return(
            <form>
                <input />
                <input />
                <input name='ranking' />
                <button>Submit</button>
                <p>Please fill out all the boxes</p>
            </form>
        );

    }

}

export default Form;