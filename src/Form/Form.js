import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    state = { term: '' };
    render(){
        return (
            <form className='form'>
                <input 
                    placeholder="What needs to be done"
                    value={this.state.term}
                    onChange={(e) => this.setState({term: e.target.value})}
                ></input>
                <button>Submit</button>
            </form>
        );
    }
}

export default Form;