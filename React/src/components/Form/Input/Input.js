import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default class Input extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            customValue: '',
            suggestions: [],
            open: false
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
        else if (this.props.id === "to" || this.props.id === "from") {
            return (
                <div className="react-autosuggest__suggestion--container">
                        {suggestion.name}
                        <div className="react-autosuggest__suggestion--country">
                            {suggestion.country}
                        </div>
                </div>
            );
        }
        return (<div className="react-autosuggest__suggestion--container">
                    {suggestion.name}
                </div>);
    };
    
    onChange = (event, { newValue }, custom=false) => {
        this.setState({
            ...this.state,
            open: false,
            value: newValue,
            customValue: custom ? newValue : ''
        });
        this.props.onChanged(this.props.id, newValue);
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
                    {this.props.noLabel ? "" : <label htmlFor={this.props.id} className="input--label">{this.props.name}</label>}
                </div>
            );
        }
        else if (this.props.type === "dropdown") {
            return (
                <div className={"form--input-group" + (this.props.inline ? ` form--input-group--inline form--input-group--inline--${this.props.pos}` : "")}>
                    <div className={"input--dropdown" + (this.state.open ? " input--dropdown--open" : "")}>
                        <div onClick={() => this.setState({...this.state, open: !this.state.open})} className="input--dropdown--button">{this.state.value === '' ? 'Select an option' : this.state.value}</div>
                        <FontAwesomeIcon onClick={() => this.setState({...this.state, open: !this.state.open})} className="input--dropdown--icon" icon={faChevronDown} />
                        <div className={"input--dropdown--items" + (this.state.open ? " input--dropdown--items--open" : "")}>
                            {
                                this.props.data.map(item => (
                                    <div key={item.data} onClick={(e) => this.onChange(e, {newValue: item.name})} className="input--dropdown--item">{item.name}</div>
                                ))
                            }
                        </div>
                    </div>
                    {this.props.noLabel ? "" : <label htmlFor={this.props.id} className="input--label">{this.props.name}</label>}
                </div>
            );
        }
        else if (this.props.type === "number") {
            return (
                <div className={"form--input-group" + (this.props.inline ? ` form--input-group--inline form--input-group--inline--${this.props.pos}` : "")}>
                    <div className="input--number">
                        {
                            this.props.data.map(item => (
                                <div key={item.data} onClick={(e) => this.onChange(e, {newValue: item.name})} className={"input--number--item" + (this.state.value === item.name ? " input--number--item--selected" : "")}>{item.name}</div>
                            ))
                        }
                        <input value={this.state.customValue} onChange={(e) => this.onChange(e, {newValue: e.target.value}, true)} type="number" min={this.props.validation.min} max={this.props.validation.max} step={this.props.validation.step} placeholder="###" className="input--number--item--input" />
                    </div>
                    {this.props.noLabel ? "" : <label htmlFor={this.props.id} className="input--label">{this.props.name}</label>}
                </div>
            );
        }
        else if (this.props.type === "date") {
            return (
                <div className={"form--input-group" + (this.props.inline ? ` form--input-group--inline form--input-group--inline--${this.props.pos}` : "")}>
                    <input id={this.props.id} placeholder={this.props.name} name={this.props.id} type='date' required={this.props.validation.reqired} min={this.props.validation.min} max={this.props.validation.max} onChange={(event) => this.props.onChanged(this.props.id, event.target.value)} className="form--input-group--input form--input-group--input--date" />
                    {this.props.noLabel ? "" : <label htmlFor={this.props.id} className="input--label">{this.props.name}</label>}
                </div>
            );
        }
        else if (this.props.type === "number" && this.props.id === "budget") {
            return (
                <div className={"form--input-group" + (this.props.inline ? ` form--input-group--inline form--input-group--inline--${this.props.pos} form--input-group--inline--budget` : "")}>
                    <input id={this.props.id} placeholder={this.props.name} name={this.props.id} type='number' required={this.props.validation.reqired} step={this.props.validation.step} min={this.props.validation.min} max={this.props.validation.max} onChange={(event) => this.props.onChanged(this.props.id, event.target.value)} className="form--input-group--input form--input-group--input--number form--input-group--input--budget" />
                    {this.props.noLabel ? "" : <label htmlFor={this.props.id} className="input--label">{this.props.name}</label>}
                    <label className="form--input-group--label form--input-group--label--budget-currency">€</label>
                </div>
            );
        }
        else if (this.props.type === "number") {
            return (
                <div className={"form--input-group" + (this.props.inline ? ` form--input-group--inline form--input-group--inline--${this.props.pos}` : "")}>
                    <input id={this.props.id} placeholder={this.props.name} name={this.props.id} type='number' required={this.props.validation.reqired} step={this.props.validation.step} min={this.props.validation.min} max={this.props.validation.max} onChange={(event) => this.props.onChanged(this.props.id, event.target.value)} className="form--input-group--input form--input-group--input--number" />
                    {this.props.noLabel ? "" : <label htmlFor={this.props.id} className="input--label">{this.props.name}</label>}
                </div>
            );
        }
        else {
            return (
                <div className={"form--input-group" + (this.props.inline ? ` form--input-group--inline form--input-group--inline--${this.props.pos}` : "")}>
                    <input id={this.props.id} placeholder={this.props.name} name={this.props.id} type={this.props.type} required={this.props.validation.reqired} onChange={(event) => this.props.onChanged(this.props.id, event.target.value)} className="form--input-group--input" />
                    {this.props.noLabel ? "" : <label htmlFor={this.props.id} className="input--label">{this.props.name}</label>}
                </div>
            );
        }
    }
}
