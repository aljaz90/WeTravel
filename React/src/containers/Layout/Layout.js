import React from 'react';
import Navigation from '../../components/Navigation/Navigation';

export default props => {
  return (
    <React.Fragment>
        <Navigation />
        <div className="content">
            { props.children }
        </div>
    </React.Fragment>
  )
}
