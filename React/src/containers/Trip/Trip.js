import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import axios from 'axios';
import querystring from 'querystring';
import Flight from './Flight/Flight';

export default class Trip extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            offers: [],
            responseData: {},
            selectedOffer: null
        };
    }

    getAirports = (from, to, resolve) => {
        let config = {
            headers: {
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "d9db34e064mshd0d8e9d32b2f42ep11fd0djsn59a7fc17ba87"
            }
        };
        axios.get("https://cors-anywhere.herokuapp.com/https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query="+ from, config)
            .then(res => {
                if (res.status === 200) {
                    console.log(res)
                    let from = res.data.Places[0].PlaceId;
                    axios.get("https://cors-anywhere.herokuapp.com/https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query="+ to, config)
                        .then(res2 => {
                            if (res2.status === 200) {
                                let to = res2.data.Places[0].PlaceId;
                                resolve({from, to});
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    search = query => {
        console.log(query)
        let body = {
            "originPlace": query.fromCode,
            "destinationPlace": query.toCode,
            "adults": query.travelers,
            "children": 0,
            "infants": 0,
            "outboundDate": query.departing,
            "inboundDate": query.arriving,
            "cabinClass": query.plane_cabin_class.toLowerCase(),
            "country": "GB",
            "currency": "EUR",
            "locale": "en-GB"
        };

        let config = {
            headers: {
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "d9db34e064mshd0d8e9d32b2f42ep11fd0djsn59a7fc17ba87",
                "content-type": "application/x-www-form-urlencoded"
            }
        };

        axios.post("https://cors-anywhere.herokuapp.com/https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0", querystring.stringify(body), config)
        .then(res => {
            if (res.status === 201) {
                let sessionKey = res.headers.location.split("/")[res.headers.location.split("/").length-1];
                setTimeout(() => {
                    this.getFlightData(sessionKey);
                }, 4000)
            }
        })
        .catch(err => {
            console.log(err);
            /*this.props.history.push({
                pathname: '/',
                state: {
                  info: "Error creating Trip",
                  ok: false
                }
              });*/
        });
    }

    getFlightData = sessionKey => {
        let config = {
            headers: {
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "d9db34e064mshd0d8e9d32b2f42ep11fd0djsn59a7fc17ba87"
            }
        };
        axios.get(`https://cors-anywhere.herokuapp.com/https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/${sessionKey}`, config)
            .then(res => {
                if (res.status === 200) {
                    this.setState({...this.state, responseData: res.data});
                    this.parseFlightData(res.data);
                }
            })
            .catch(err => {
                console.log(err);
                /*this.props.history.push({
                    pathname: '/',
                    state: {
                      info: "Error creating Trip",
                      ok: false
                    }
                  });*/
            });
    }

    parseFlightData = data => {
        let itineraries = data['Itineraries'];
        let offers = [];
        itineraries.forEach(item => {

            let {price, offerLink} = this.getBestPrice(item['PricingOptions']); 

            let offer = {
                outboundFlight: this.getFlight(item['OutboundLegId']),
                inboundFlight: this.getFlight(item['InboundLegId']),
                price,
                offerLink
            };

            offers.push(offer);
        });
        offers = offers.sort((a, b) => a.price - b.price);
        console.log(offers)
        this.setState({...this.state, offers, loading: false})
    }

    getFlight = legId => {
        let leg = this.getLegById(legId);
    
        return {
            carrier: this.getCarrierById(leg['Carriers'][0]),
            segments: leg['SegmentIds'].map(segment => this.getSegment(segment)),
            stops: leg['Stops'].map(stop => this.getPlaceById(stop)),
            totalDuration: leg['Duration'],
            originPlace: this.getPlaceById(leg['OriginStation']),
            destinationPlace: this.getPlaceById(leg['DestinationStation'])
        };
    }

    getLegById = legId => {
        let legs = this.state.responseData['Legs'];
        let legToReturn = null;

        legs.forEach(leg => {
            if (legId === leg['Id']) {
                legToReturn = leg;
                return;
            }
        });

        return legToReturn;
    }

    getSegment = segmentId => {
        let segment =  this.getSegmentById(segmentId);
        let operatingCarrier = this.getCarrierById(segment['OperatingCarrier']);

        return {
            originPlace: this.getPlaceById(segment['OriginStation']),
            destinationPlace: this.getPlaceById(segment['DestinationStation']),
            departureDateTime: segment['DepartureDateTime'],
            arrivalDateTime: segment['ArrivalDateTime'],
            operatingCarrier: operatingCarrier,
            duration: segment['Duration'],
            flightNumber: operatingCarrier['Code'] + " " + segment['FlightNumber']
        };
    }

    getSegmentById = segmentId => {
        let segments = this.state.responseData['Segments'];
        let segmentToReturn = null;

        segments.forEach(segment => {
            if (segmentId === segment['Id']) {
                segmentToReturn = segment;
                return;
            }
        });

        return segmentToReturn;
    }

    getPlaceById = placeId => {
        let places = this.state.responseData['Places'];
        let placeToReturn = null;

        places.forEach(place => {
            if (placeId === place['Id']) {
                placeToReturn = {code: place['Code'], type: place['Type'], name: place['Name']};
                return;
            }
        });

        return placeToReturn;
    }

    getCarrierById = carrierId => {
        let carriers = this.state.responseData['Carriers'];
        let carrierToReturn = null;

        carriers.forEach(carrier => {
            if (carrierId === carrier['Id']) {
                carrierToReturn = carrier;
                return;
            }
        });

        return carrierToReturn;
    }

    getBestPrice = pricingOptions => {
        let cheapestOffer = {price: null, offerLink: null};

        pricingOptions.forEach(pricingOption => {
            if (!cheapestOffer.price || cheapestOffer > pricingOption['Price']) {
                cheapestOffer = {price: pricingOption['Price'], offerLink: pricingOption['DeeplinkUrl']};
            }
        })

        return cheapestOffer;
    }

    componentDidMount() {
        let query = this.props.location.state;

        let cityPromise = new Promise((resolve, reject) => {
            this.getAirports(query.from, query.to, resolve);
        });

        cityPromise.then(data => {
            query['fromCode'] = data.from;
            query['toCode'] = data.to;
            //this.search(query);
            setTimeout(() => this.search(query), 2000);
        });
    }

    handleOnClickOffer = index => {
        console.log("CLICKED " + index);
        if (index === this.state.selectedOffer) {
            this.setState({
                ...this.state,
                selectedOffer: null
            });
        }
        else {
            this.setState({
                ...this.state,
                selectedOffer: index
            });
        }
    }

    render() {
        if (this.props.location.state && this.props.location.state.ok) {
            if (this.state.loading) {
                return <Loader />;
            }
            else {
                return (
                        <div className="content content--trip">
                            <section className="flights">
                                {
                                    this.state.offers.map((offer, index) => <Flight open={this.state.selectedOffer === index} onClick={() => this.handleOnClickOffer(index)} cabinClass={this.props.location.state.plane_cabin_class} key={index} id={index} flight={offer} />)
                                }
                            </section>
                        </div>
                    )
            }
        } 
        else {
            return <Redirect to="/" />;
        }
    }
}
