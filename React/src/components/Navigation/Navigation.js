import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';

export default props => {
  return (
    <div className="nav">
          <div className="nav--item--logo"><h1 className="nav--item--logo--heading">We Travel <FontAwesomeIcon icon={faMapMarkedAlt} /></h1></div>
          <div className="nav--divider"></div>
          <input type="checkbox" id="dropdown" className="nav--dropdown--input" />
          <label htmlFor="dropdown" className="nav--dropdown--toggle" />
          <div className="nav--items">
            <div className="nav--item"><HashLink scroll={el => {el.scrollIntoView({ behavior: 'smooth', block: 'end' });}} smooth to="/#top">Home</HashLink></div>
            <div className="nav--item"><Link to="/">About Us</Link></div>
            <div className="nav--item"><HashLink scroll={el => {el.scrollIntoView({ behavior: 'smooth', block: 'end' });}} smooth to="/#offers">Offers</HashLink></div>
            <div className="nav--item nav--item--important"><HashLink smooth to="/#createatrip">Create a Trip</HashLink></div>
          </div>
    </div>
  )
}
