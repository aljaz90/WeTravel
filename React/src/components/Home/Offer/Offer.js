import React from 'react'

export default props => {
  return (
    <div className="offers--list--item">
        <div style={{ backgroundImage: `linear-gradient(to right bottom, rgba(${props.colorDark}, .7), rgba(${props.colorLight}, .7)), url('/img/${props.image}')` }} className="offers--list--item--img"></div>
        <h3 style={{ backgroundImage: `linear-gradient(to right bottom, rgba(${props.colorLight}, .7), rgba(${props.colorDark}, .8))` }} className="offers--list--item--heading heading-3">
            {props.name}
        </h3>
        <div className="offers--list--item--details">
            { props.details.map(detail => (
                <div className="offers--list--item--details--item">{detail}</div>
            )) }
        </div>
        <div style={{ backgroundImage: `linear-gradient(to right bottom, rgba(${props.colorLight}, .7), rgba(${props.colorDark}, .8))` }} className="offers--list--item--price">
            from {props.price}$
        </div>
    </div>
  )
}
