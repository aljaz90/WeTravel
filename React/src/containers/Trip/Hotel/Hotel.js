import React from 'react';

export default props => {
  console.log(props);
  return (
    <div className="hotels--item">
      <div style={{backgroundImage: `url(${props.hotel.image_url})`}} className="hotels--item--image"></div>
      <div className="hotels--item--name">
        {props.hotel.name}
      </div>
      <div className="hotels--item--name-sub">
        {props.hotel.address}<br />
        {props.hotel.city}
      </div>
      <div className="hotels--item--details">  
        { props.hotel.breakfast_included ? (
          <React.Fragment>
          <div className="hotels--item--details--item">
              Breakfast included
          </div>
          <div className="hotels--item--details--item">
              Breakfast rated {props.hotel.ratings.breakfast}
          </div></React.Fragment>) : ""
        }
        <div className="hotels--item--details--item">
              {props.hotel.distance_to_cc} km to city centre
        </div>
        <div className="hotels--item--details--item">
              Cleanliness: {props.hotel.ratings.cleanliness}/10
        </div>
        <div className="hotels--item--details--item">
              Total: {props.hotel.ratings.total}/10
        </div>
      </div>
      <div className="hotels--item--price">
          {props.hotel.price.all_inclusive_price + " " + props.hotel.price.currency}
      </div>
    </div>
  )
}
