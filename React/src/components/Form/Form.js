import React from 'react';

export default props => {
    return (
        <form onSubmit={props.onSubmit} className={props.className}>
            {props.children}
        </form>
    );
};