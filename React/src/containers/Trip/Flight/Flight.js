import React, { useState } from 'react';
import randomColor from '../../../helpers/randomColor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';

let formatTime = time => {
    let timeToReturn = time + "";
    return timeToReturn.length === 1 ? ("0"+timeToReturn) : timeToReturn;
}

export default props => {

    let [currentBackgroundColor, setCurrentBackgroundColor] = useState(null);
    let [currentColor, setCurrentColor] = useState(null);

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

    return (
        <div onClick={props.onClick} className={"flights--item" + (props.open ? " flights--item--open" : "")}>
            <style>
                {` .flights--item--details--book--${props.id}:hover {
                        color: ${randColor.colorDark} !important;
                    }
                `}
            </style>
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
                <div className="flights--item--outbound--duration">
                    { "Travel time: " + (props.flight.outboundFlight.totalDuration / 60).toFixed(2) } h
                </div>
                { props.open ? 
                    props.flight.outboundFlight.segments.map(segment => {
                        let departureTime = new Date(segment.departureDateTime);
                        let arrivalTime = new Date(segment.arrivalDateTime);

                        return (
                        <div className="flights--item--outbound--segment">
                            <div style={{backgroundImage: color}} className="flights--item--outbound--segment--title">{segment.originPlace.code + " - " + segment.destinationPlace.code}</div>
                            <div className="flights--item--outbound--segment--time">{formatTime(departureTime.getHours()) + ":" + formatTime(departureTime.getMinutes())  + " - " + formatTime(arrivalTime.getHours()) + ":" + formatTime(arrivalTime.getMinutes())}</div>
                            <div className="flights--item--outbound--segment--flight-number">{segment.flightNumber}</div>
                            <div className="flights--item--outbound--segment--carrier">{segment.operatingCarrier.Name}</div>
                        </div>  );
                    }) : ""
                }
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
                <div className="flights--item--inbound--duration">
                    { "Travel time: " + (props.flight.inboundFlight.totalDuration / 60).toFixed(2) } h
                </div>
                { props.open ? 
                    props.flight.inboundFlight.segments.map(segment => {
                        let departureTime = new Date(segment.departureDateTime);
                        let arrivalTime = new Date(segment.arrivalDateTime);

                        return (
                        <div className="flights--item--inbound--segment">
                            <div style={{backgroundImage: color}} className="flights--item--inbound--segment--title">{segment.originPlace.code + " - " + segment.destinationPlace.code}</div>
                            <div className="flights--item--inbound--segment--time">{formatTime(departureTime.getHours()) + ":" + formatTime(departureTime.getMinutes())  + " - " + formatTime(arrivalTime.getHours()) + ":" + formatTime(arrivalTime.getMinutes())}</div>
                            <div className="flights--item--inbound--segment--flight-number">{segment.flightNumber}</div>
                            <div className="flights--item--inbound--segment--carrier">{segment.operatingCarrier.Name}</div>
                        </div>  );
                    }) : ""
                }
            </div>
            <div className={"flights--item--details" + (props.open ? " flights--item--details--open" : "")} style={{backgroundImage: color}}>
                <div className="flights--item--details--class">Cabin class: { props.cabinClass }</div>
                <div className="flights--item--details--price">{ props.flight.price + " €" }</div>
                <a rel="noopener noreferrer" href={props.flight.offerLink} target="_blank" className={"btn btn--important flights--item--details--book flights--item--details--book--"+props.id}>Book Now</a>
            </div>
        </div>
    )
}
