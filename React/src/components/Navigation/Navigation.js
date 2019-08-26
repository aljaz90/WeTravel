import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/fontawesome-free-solid';

export default props => {
  return (
    <div className="nav">
          <div className="nav--item--logo"><h1 className="nav--item--logo--heading">We Travel <FontAwesomeIcon icon="suitcase" /></h1></div>
          <div className="nav--divider"></div>
          <div className="nav--item"><Link to="/">Home</Link></div>
          <div className="nav--item"><Link to="/">About Us</Link></div>
          <div className="nav--item"><Link to="/">Offers</Link></div>
          <div className="nav--item nav--item--important"><Link to="/">Create a Trip</Link></div>
    </div>
  )
}
