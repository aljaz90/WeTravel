import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default props => {

    let closeNotification = () => {
        props.history.push({
            pathname: props.location.pathname,
            state: {
              ...props.location.state,
              ok: true,
              info: {}
            }
          });
    };

    setTimeout(closeNotification, 5000);

    return (
        <div className="notification">
        <div className="notification--title">
            {props.location.state.info.title}
        </div>
        <div className="notification--message">
            {props.location.state.info.message}
        </div>
        <FontAwesomeIcon onClick={closeNotification} icon={faTimes} className="notification--close" />
        </div>
    );
}