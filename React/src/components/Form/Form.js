import React, { Component } from 'react';
import Input from './Input/Input';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {}
        };
    }

    handleOnValueChange = (name, value) => {
        let values = {...this.state.values};
        values[name] = value; 
        this.setState({...this.state, values});
    }

    capitalize = value => {
        return (value.charAt(0).toUpperCase() + value.slice(1, value.length)).replace(/_/g, " ");
    }

    render() {
        return (
        <form onSubmit={event => this.props.onSubmit(this.state.values, event)} className="form">
            {this.props.inputs.map(input => (
                <Input key={input.name} data={input.data} validation={input.validation} type={input.type} onChanged={this.handleOnValueChange} name={this.capitalize(input.name)} id={input.name} />
            ))}
            <input value="Create a Trip" className="form--input-group--submit btn btn--important" type="submit" />
        </form>
        )
    }
}
