import React, { useState } from 'react';

export default props => {
    let [selectedOption, setSelectedOption] = useState(0);

    let selectOption = (index, option) => {
        setSelectedOption(index);
        props.onChange(option);
    }

    return (
        <div className="sort">
            <div className="sort--title">
                Sort by: 
            </div>
            <div className="sort--options">
                {
                    props.options.map((option, index) => <div onClick={() => selectOption(index, option)} className={"sort--option" + (index === selectedOption ? " sort--option--selected" : "")}>{option}</div>)
                }
            </div>
        </div>
    );
}