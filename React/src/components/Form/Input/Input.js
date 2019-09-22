import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

export default class Input extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: []
        };
    }

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        if (inputLength === 0 && this.props.id === "to") {
            return [{name: "Everywhere", data: "everywhere"}]
        }
        else if (inputLength === 0 && this.props.data.length > 10) {
            return [];
        }

        return inputLength === 0 ? [...this.props.data] : this.props.data.filter(value =>
            value.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };
      
    getSuggestionValue = suggestion => suggestion.name;
      
    renderSuggestion = suggestion => {

        if (suggestion.data === "everywhere") {
            return (
                    <div className="react-autosuggest__suggestion--container react-autosuggest__suggestion--important">
                            {suggestion.name}
                    </div>
                    );
        }
        return (<div className="react-autosuggest__suggestion--container">
                    {suggestion.name}
                </div>);
    };
    
    onChange = (event, { newValue }) => {
        this.props.onChanged(this.props.id, newValue)
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    shouldRenderSuggestions = () => {
        return true;
    }

    render() {
        const { value, suggestions } = this.state;
        if (this.props.type === "autosuggest") {

            const inputProps = {
                placeholder: this.props.name,
                id: this.props.id,
                value,
                onChange: this.onChange
            };

            return (
                <div className={"form--input-group" + (this.props.inline ? ` form--input-group--inline form--input-group--inline--${this.props.pos}` : "")} onClick={() => this.onSuggestionsFetchRequested({value: ""})}>
                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={this.getSuggestionValue}
                        renderSuggestion={this.renderSuggestion}
                        inputProps={inputProps}
                        shouldRenderSuggestions={this.shouldRenderSuggestions}
                    />
                    {this.props.noLabel ? "" : <label htmlFor={this.props.id} className="form--input-group--label form--input-group--label--date">{this.props.name}</label>}
                </div>
            );
        }
        else if (this.props.type === "date") {
            return (
                <div className={"form--input-group" + (this.props.inline ? ` form--input-group--inline form--input-group--inline--${this.props.pos}` : "")}>
                    <input id={this.props.id} placeholder={this.props.name} name={this.props.id} type='date' required={this.props.validation.reqired} min={this.props.validation.min} max={this.props.validation.max} onChange={(event) => this.props.onChanged(this.props.id, event.target.value)} className="form--input-group--input form--input-group--input--date" />
                    {this.props.noLabel ? "" : <label htmlFor={this.props.id} className="form--input-group--label form--input-group--label--date">{this.props.name}</label>}
                </div>
            );
        }
        else if (this.props.type === "number" && this.props.id === "budget") {
            return (
                <div className={"form--input-group" + (this.props.inline ? ` form--input-group--inline form--input-group--inline--${this.props.pos} form--input-group--inline--budget` : "")}>
                    <input id={this.props.id} placeholder={this.props.name} name={this.props.id} type='number' required={this.props.validation.reqired} step={this.props.validation.step} min={this.props.validation.min} max={this.props.validation.max} onChange={(event) => this.props.onChanged(this.props.id, event.target.value)} className="form--input-group--input form--input-group--input--number form--input-group--input--budget" />
                    {this.props.noLabel ? "" : <label htmlFor={this.props.id} className="form--input-group--label form--input-group--label--budget-label">{this.props.name}</label>}
                    <label className="form--input-group--label form--input-group--label--budget-currency">€</label>
                </div>
            );
        }
        else if (this.props.type === "number") {
            return (
                <div className={"form--input-group" + (this.props.inline ? ` form--input-group--inline form--input-group--inline--${this.props.pos}` : "")}>
                    <input id={this.props.id} placeholder={this.props.name} name={this.props.id} type='number' required={this.props.validation.reqired} step={this.props.validation.step} min={this.props.validation.min} max={this.props.validation.max} onChange={(event) => this.props.onChanged(this.props.id, event.target.value)} className="form--input-group--input form--input-group--input--number" />
                    {this.props.noLabel ? "" : <label htmlFor={this.props.id} className="form--input-group--label form--input-group--label--number">{this.props.name}</label>}
                </div>
            );
        }
        else {
            return (
                <div className={"form--input-group" + (this.props.inline ? ` form--input-group--inline form--input-group--inline--${this.props.pos}` : "")}>
                    <input id={this.props.id} placeholder={this.props.name} name={this.props.id} type={this.props.type} required={this.props.validation.reqired} onChange={(event) => this.props.onChanged(this.props.id, event.target.value)} className="form--input-group--input" />
                    {this.props.noLabel ? "" : <label htmlFor={this.props.id} className="form--input-group--label">{this.props.name}</label>}
                </div>
            );
        }
    }
}
