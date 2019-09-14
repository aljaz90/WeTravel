import React, { useState } from 'react';
import randomColor from '../../../helpers/randomColor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

let formatTime = time => {
    let timeToReturn = time + "";
    return timeToReturn.length === 1 ? ("0"+timeToReturn) : timeToReturn;
};

export default props => {

    let [currentBackgroundColor, setCurrentBackgroundColor] = useState(null);
    let [currentColor, setCurrentColor] = useState(null);

    let [price, setPrice] = useState(0);

    let onBook = event => {
        window.open(props.flight.offerLink, '_blank');
        window.open(props.hotel.url, '_blank');
    };

    let config = {
        headers: {
            "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
        "x-rapidapi-key": "d9db34e064mshd0d8e9d32b2f42ep11fd0djsn59a7fc17ba87"
        },
        params: {
            "format": "json",
            "to": "EUR",
            "from": props.hotel.price.currency,
            "amount": props.hotel.price.all_inclusive_price
        }
    };
    let today = new Date();

    axios.get("https://cors-anywhere.herokuapp.com/https://currency-converter5.p.rapidapi.com/currency/historical/" + today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate(), config)
        .then(res => {
            if (res.status === 200) {
                setPrice(Number.parseFloat(res.data.rates["EUR"].rate_for_amount).toFixed(2));
            }
        })
        .catch(err => {
            console.log(err);
        });

    // OUTBOUND FLIGHT HELPERS
    let outboundFlightTitle = props.flight.outboundFlight.originPlace.code + " - ";
    props.flight.outboundFlight.stops.forEach(stop => {
        outboundFlightTitle += (stop.code + " - ");
    });
    outboundFlightTitle += props.flight.outboundFlight.destinationPlace.code;

    let outboundOperatingCarriers = [];
    props.flight.outboundFlight.segments.forEach(segment => {
        if (!outboundOperatingCarriers.includes(segment.operatingCarrier.Name)) {
            outboundOperatingCarriers.push(segment.operatingCarrier.Name);
        }
    });
    
    // INBOUND FLIGHT HELPERS
    let inboundFlightTitle = props.flight.inboundFlight.originPlace.code + " - ";
    props.flight.inboundFlight.stops.forEach(stop => {
        inboundFlightTitle += (stop.code + " - ");
    });
    inboundFlightTitle += props.flight.inboundFlight.destinationPlace.code;

    let inboundOperatingCarriers = [];
    props.flight.inboundFlight.segments.forEach(segment => {
        if (!inboundOperatingCarriers.includes(segment.operatingCarrier.Name)) {
            inboundOperatingCarriers.push(segment.operatingCarrier.Name);
        }
    });

    // RANDOM COLOR
    let randColor;
    let color;
    if (!currentColor || !currentBackgroundColor) {
        randColor = randomColor(true);
        color = `linear-gradient(to right, ${randColor.colorLight}, ` + randColor.additionalColors.join(", ") + (randColor.additionalColors.length > 0 ? " ," : "") + randColor.colorDark + ")";
        setCurrentColor(randColor)
        setCurrentBackgroundColor(color);
    } else {
        randColor = currentColor;
        color = currentBackgroundColor;
    }

    let totalPrice = +price + +props.flight.price.toFixed(2);

    return (
        <React.Fragment>
            <div className="summary--flight-hotel">
                <div className="summary--flight">
                    <div style={{backgroundImage: color}} className="heading-1 summary--hotel--heading">
                        Flight: 
                    </div>
                    <div className="flights--item--outbound">
                        <div style={{backgroundImage: `url('${props.flight.outboundFlight.carrier.ImageUrl}')`}} className="flights--item--outbound--carrier-image">
                        </div>
                        <div className="flights--item--outbound--direction">
                            <FontAwesomeIcon className="flights--item--outbound--direction--icon" icon={faPlaneDeparture} /> Outbound: 
                        </div>
                        <div style={{backgroundImage: color}} className="flights--item--outbound--title">
                            { outboundFlightTitle }
                        </div>
                        <div className="flights--item--outbound--operated-by">
                            { "Operated by: " + outboundOperatingCarriers.join(", ") }
                        </div>
                        <div className="flights--item--outbound--stops">
                            { props.flight.outboundFlight.stops.length === 0 ? "Direct" : "Stops: " + props.flight.outboundFlight.stops.length }
                        </div>
                        <div className="flights--item--outbound--duration u-margin-none">
                            { "Travel time: " + (props.flight.outboundFlight.totalDuration / 60).toFixed(2) } h
                        </div>
                        <div className="flights--item--outbound--duration">
                            { "Cabin class: " + props.cabinClass }
                        </div>
                    </div>
                    <div className="flights--item--inbound">
                        <div style={{backgroundImage: `url('${props.flight.inboundFlight.carrier.ImageUrl}')`}} className="flights--item--inbound--carrier-image">
                        </div>
                        <div className="flights--item--inbound--direction">
                            <FontAwesomeIcon className="flights--item--inbound--direction--icon" icon={faPlaneArrival} /> Return: 
                        </div>
                        <div style={{backgroundImage: color}} className="flights--item--inbound--title">
                            { inboundFlightTitle }
                        </div>
                        <div className="flights--item--inbound--operated-by">
                            { "Operated by: " + inboundOperatingCarriers.join(", ") }
                        </div>
                        <div className="flights--item--inbound--stops">
                            { props.flight.inboundFlight.stops.length === 0 ? "Direct" : "Stops: " + props.flight.inboundFlight.stops.length }
                        </div>
                        <div className="flights--item--inbound--duration u-margin-none">
                            { "Travel time: " + (props.flight.inboundFlight.totalDuration / 60).toFixed(2) } h
                        </div>
                        <div className="flights--item--inbound--duration">
                            { "Cabin class: " + props.cabinClass }
                        </div>
                    </div>
                </div>
                <div className="summary--hotel">
                    <div style={{backgroundImage: color}} className="heading-1 summary--hotel--heading">
                        Hotel: 
                    </div>
                    <div style={{backgroundImage: `url(${props.hotel.image_url})`}} className="hotels--item--image"></div>
                    <div style={{backgroundImage: color}} className="summary--hotel--name">
                        {props.hotel.name}
                    </div>
                    <div style={{backgroundImage: color}} className="summary--hotel--name-sub">
                        {props.hotel.address}<br />
                        {props.hotel.city}
                    </div>
                    <div className="hotels--item--details">  
                        { props.hotel.breakfast_included ? (
                        <div className="hotels--item--details--item">
                            Breakfast included
                        </div>
                        ) : ""
                        }
                        <div className="hotels--item--details--item">
                            {props.hotel.distance_to_cc} km to city centre
                        </div>
                        <div className="hotels--item--details--item">
                            Cleanliness: {props.hotel.ratings.cleanliness}/10
                        </div>
                        { props.hotel.breakfast_included ? (
                        <div className="hotels--item--details--item">
                            Breakfast: {props.hotel.ratings.breakfast}/10
                        </div>
                        ) : "" }
                        <div className="hotels--item--details--item">
                            Total: {props.hotel.ratings.total}/10
                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: color}} className="summary--details">
                <div onClick={props.onGoBack} className="trip--footer--back">
                    Go Back
                </div>
                <div className="summary--details--price">
                    Price (Flight + Hotel): { totalPrice } € 
                </div>
                <div className="summary--details--heading">
                    Summary
                </div>
                <div onClick={onBook} className="summary--details--book">
                    Book now!
                </div>
            </div>
        </React.Fragment>
    )
}