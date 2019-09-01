import React from 'react';

export default props => {

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
    })
    
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
    })

    return (
        <div className="flights--item">
        <div className="flights--item--outbound">
            <div style={{backgroundImage: `url('${props.flight.outboundFlight.carrier.ImageUrl}')`}} className="flights--item--outbound--carrier-image">
            </div>
            <div className="flights--item--outbound--title">
                { outboundFlightTitle }
            </div>
            <div className="flights--item--outbound--operated-by">
                { "Operated by: " + outboundOperatingCarriers.join(", ") }
            </div>
            <div className="flights--item--outbound--stops">
                { props.flight.outboundFlight.stops.length === 0 ? "Direct" : "Stops: " + props.flight.outboundFlight.stops.length }
            </div>
            <div className="flights--item--outbound--duration">
                { "Duration: " + (props.flight.outboundFlight.totalDuration / 60).toFixed(2) } h
            </div>
        </div>
        <div className="flights--item--inbound">
            <div style={{backgroundImage: `url('${props.flight.inboundFlight.carrier.ImageUrl}')`}} className="flights--item--inbound--carrier-image">
            </div>
            <div className="flights--item--inbound--title">
                { inboundFlightTitle }
            </div>
            <div className="flights--item--inbound--operated-by">
                { "Operated by: " + inboundOperatingCarriers.join(", ") }
            </div>
            <div className="flights--item--inbound--stops">
                { props.flight.inboundFlight.stops.length === 0 ? "Direct" : "Stops: " + props.flight.inboundFlight.stops.length }
            </div>
            <div className="flights--item--inbound--duration">
                { "Duration: " + (props.flight.inboundFlight.totalDuration / 60).toFixed(2) } h
            </div>
        </div>
        <div className="flights--item--details">
            <div className="flights--item--details--price">{ props.flight.price + " €" }</div>
            <a rel="noopener noreferrer" href={props.flight.offerLink} target="_blank" className="btn btn--important flights--item--details--book">Book Now</a>
        </div>
        </div>
    )
}
