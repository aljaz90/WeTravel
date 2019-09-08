import React, { Component } from 'react';
import Input from './Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';

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

        if (this.props.place === "home") {
            let inputs = this.props.inputs;

            return (
                <form onSubmit={event => this.props.onSubmit(this.state.values, event)} className="form-home form-home--home">
                    <div className="form-home--container">
                        <div className="form-home--input-group--home">
                            <FontAwesomeIcon icon={faPlaneDeparture} className="form-home--input-group--home--icon form-home--input-group--home--icon--1" />
                            <FontAwesomeIcon icon={faPlaneArrival} className="form-home--input-group--home--icon form-home--input-group--home--icon--2" />
                            <Input noLabel={true} inline={true} pos={1} key={inputs[0].name} data={inputs[0].data} validation={inputs[0].validation} type={inputs[0].type} onChanged={this.handleOnValueChange} name={this.capitalize(inputs[0].name)} id={inputs[0].name} />
                            <Input noLabel={true} inline={true} pos={2} key={inputs[1].name} data={inputs[1].data} validation={inputs[1].validation} type={inputs[1].type} onChanged={this.handleOnValueChange} name={this.capitalize(inputs[1].name)} id={inputs[1].name} />
                        </div>
                        <div className="form-home--input-group--home u-margin-bottom-sm">
                            <Input noLabel={true} inline={true} pos={1} key={inputs[2].name} data={inputs[2].data} validation={inputs[2].validation} type={inputs[2].type} onChanged={this.handleOnValueChange} name={this.capitalize(inputs[2].name)} id={inputs[2].name} />
                            <Input noLabel={true} inline={true} pos={2} key={inputs[3].name} data={inputs[3].data} validation={inputs[3].validation} type={inputs[3].type} onChanged={this.handleOnValueChange} name={this.capitalize(inputs[3].name)} id={inputs[3].name} />
                        </div>
                        <div className="form-home--input-group--home">
                            <Input noLabel={true} inline={true} pos={1} key={inputs[4].name} data={inputs[4].data} validation={inputs[4].validation} type={inputs[4].type} onChanged={this.handleOnValueChange} name={this.capitalize(inputs[4].name)} id={inputs[4].name} />
                        </div>
                        <div className="form-home--input-group--home">
                            <Input noLabel={true} inline={true} pos={1} key={inputs[5].name} data={inputs[5].data} validation={inputs[5].validation} type={inputs[5].type} onChanged={this.handleOnValueChange} name={this.capitalize(inputs[5].name)} id={inputs[5].name} />
                        </div>
                        <div className="form-home--input-group--home">
                            <Input noLabel={true} inline={true} pos={1} key={inputs[6].name} data={inputs[6].data} validation={inputs[6].validation} type={inputs[6].type} onChanged={this.handleOnValueChange} name={this.capitalize(inputs[6].name)} id={inputs[6].name} />
                        </div>
                        <div className="form-home--input-group--home">
                            <Input noLabel={true} inline={true} pos={1} key={inputs[7].name} data={inputs[7].data} validation={inputs[7].validation} type={inputs[7].type} onChanged={this.handleOnValueChange} name={this.capitalize(inputs[7].name)} id={inputs[7].name} />
                        </div>
                        <input value="Create a Trip" className="form-home--input-group--submit btn btn--important" type="submit" />
                    </div>
                </form>
            );
        }

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
