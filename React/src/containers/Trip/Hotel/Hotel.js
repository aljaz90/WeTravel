import React from 'react';
import axios from 'axios';

let convertPriceTo = (price, from, to="EUR") => {
  let config = {
      headers: {
          "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
      "x-rapidapi-key": "d9db34e064mshd0d8e9d32b2f42ep11fd0djsn59a7fc17ba87"
      },
      params: {
          "format": "json",
          "to": to,
          "from": from,
          "amount": price
      }
  };
  let today = new Date();

  axios.get("https://currency-converter5.p.rapidapi.com/currency/historical/" + today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate(), config)
          .then(res => {
              if (res.status === 200) {
                  console.log(res.data.rates[to].rate_for_amount)
                  return res.data.rates[to].rate_for_amount;
              } else {
                  console.log("BOOKING API ERROR")
              }
          })
          .catch(err => {
              console.log("BOOKING API ERROR")
              console.log(err);
          });
}

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
          {convertPriceTo(props.hotel.price.all_inclusive_price, props.hotel.price.currency) + " EUR"}
      </div>
    </div>
  )
}
