import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


export default props => {
    let [selectedOptions, setSelectedOptions] = useState([]);
    let [selectedCategories, setSelectedCategories] = useState([]);

    let selectOption = (option, category) => {
        let options = [...selectedOptions];
        let optionIndex = options.indexOf(option);
        if (optionIndex !== -1) {
            options.splice(optionIndex, 1);
        } else {
            options.push(option);
        }
        setSelectedOptions(options);
    };

    let selectCategory = category => {
        let categories = [...selectedCategories];
        let categoryIndex = categories.indexOf(category);
        if (categoryIndex !== -1) {
            categories.splice(categoryIndex, 1);
        } else {
            categories.push(category);
        }
        setSelectedCategories(categories);
    };

    return (
        <div className="filter">
            <div className="filter--heading">
                Filter by
            </div>
            { props.categories.map(category => (
                <div className="filter--category">
                    <div onClick={() => selectCategory(category.name)} className="filter--category--heading">{category.name} <FontAwesomeIcon icon={selectedCategories.includes(category.name) ? faChevronUp : faChevronDown} /></div>
                {       selectedCategories.includes(category.name) ? 
                            category.options.map(option => (
                                <div onClick={() => selectOption(option, category.name)} className="filter--category--option">
                                    <input id={category.name+option} className="filter--category--option--checkbox"  type="checkbox" checked={selectedOptions.includes(option)} />
                                    <span className="filter--category--option--checkbox-custom"></span>
                                    <div className="filter--category--option--name">{option}</div>
                                </div>
                            )) : ""
                }
                </div>
            ))
                
            }
        </div>
    )
}