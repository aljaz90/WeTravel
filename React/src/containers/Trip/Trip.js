import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import axios from 'axios';
import querystring from 'querystring';
import Flight from './Flight/Flight';
import Hotel from './Hotel/Hotel';

export default class Trip extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            offers: [],
            hotels: [],
            responseData: {},
            openOffer: null,
            openHotel: null,
            selectedOffer: null,
            selectedHotel: null,
            isShowingFlights: true,
            requests: {
                flight: false,
                hotels: false
            }
        };
    }

    // FLIGHT SEARCH

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
        this.setState({...this.state, offers})
        this.completed("flights");
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

    // HOTEL SEARCH

    searchHotels = data => {
        let config = {
            headers: {
                "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
	            "x-rapidapi-key": "d9db34e064mshd0d8e9d32b2f42ep11fd0djsn59a7fc17ba87"
            },
            params: {
                "languagecode": "en-us",
	            "text": data.destination
            }
        };

        axios.get("https://cors-anywhere.herokuapp.com/https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete", config)
        .then(res => {
            if (res.status === 200) {
                console.log("BOOKING API - AOK")
                data.destination = res.data[0].dest_id;
                let config = {
                    headers: {
                        "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
                        "x-rapidapi-key": "d9db34e064mshd0d8e9d32b2f42ep11fd0djsn59a7fc17ba87"
                    },
                    params: {
                        "price_filter_currencycode": "USD",
                        "travel_purpose": "leisure",
                        "categories_filter": "price::9-40,free_cancellation::1,class::1,class::0,class::2",
                        "search_id": "none",
                        "order_by": "popularity",
                        "children_qty": "0",
                        "languagecode": "en-us",
                        "children_age": "",
                        "search_type": "city",
                        "offset": "0",
                        "dest_ids": data.destination,
                        "guest_qty": data.travelers,
                        "arrival_date": data.arrival_date,
                        "departure_date": data.departure_date,
                        "room_qty": "1"
                    }
                };
                
                axios.get("https://cors-anywhere.herokuapp.com/https://apidojo-booking-v1.p.rapidapi.com/properties/list", config)
                .then(res => {
                    console.log(res)
                    if (res.status === 200) {
                        this.parseHotels(res.data.result);
                    } else {
                        console.log("BOOKING API ERROR")
                    }
                })
                .catch(err => {
                    console.log("BOOKING API ERROR")
                    console.log(err);
                });
            }
        })
        .catch(err => {
            console.log("BOOKING API ERROR")
            console.log(err);
        });
    }

    parseHotels = data => {
        let hotels = [];
        data.forEach(hotel => {
            if (!hotel.soldout) {
                hotels.push({
                    name: hotel.hotel_name,
                    is_city_center: hotel.is_city_center,
                    distance_to_cc: hotel.distance_to_cc,
                    url: hotel.url,
                    breakfast_included: hotel.hotel_include_breakfast,
                    address: hotel.address,
                    city: hotel.city,
                    country: hotel.country_trans,
                    image_url: hotel.main_photo_url,
                    price: {
                        currency: hotel.currencycode,
                        all_inclusive_price: hotel.price_breakdown.all_inclusive_price,
                        min_total_price: hotel.min_total_price,
                        price: this.convertPriceTo(hotel.min_total_price, hotel.currencycode)
                    },
                    ratings: {
                        total: hotel.review_score,
                        breakfast: hotel.breakfast_review_score.rating,
                        cleanliness: hotel.cleanliness_score
                    }
                });
            }
        });

        this.setState({
            ...this.state,
            hotels
        });
        this.completed("hotels");
        console.log("Hotels")
        console.log(hotels)
    }

    // OTHER

    completed = action => {
        if (action === "flights" && this.state.requests.hotels) {
            this.setState({
                ...this.state,
                loading: false,
                requests: {
                    ...this.state.requests,
                    flights: true
                }
            });
            console.log("DONE 1");
        }
        else if (action === "hotels" && this.state.requests.flights) {
            this.setState({
                ...this.state,
                loading: false,
                requests: {
                    ...this.state.requests,
                    hotels: true
                }
            });
            console.log("DONE 2");
        }
        else {
            this.setState({
                ...this.state,
                requests: {
                    ...this.state.requests,
                    [action]: true
                }
            });
            console.log("DONE 1/2");
        }
    }
 
    convertPriceTo = (price, from, to="EUR") => {
        let body = {
            "from-type": from,
            "to-type": to,
            "from-value": price
        };

        let config = {
            headers: {
                "x-rapidapi-host": "community-neutrino-currency-conversion.p.rapidapi.com",
                "x-rapidapi-key": "d9db34e064mshd0d8e9d32b2f42ep11fd0djsn59a7fc17ba87",
                "content-type": "application/x-www-form-urlencoded"
            }
        };

        axios.post("https://cors-anywhere.herokuapp.com/https://community-neutrino-currency-conversion.p.rapidapi.com/convert", querystring.stringify(body), config)
        .then(res => {
            if (res.status === 200) {
                let num = Number.parseFloat(res.data.result).toFixed(2);
                console.log(num);
                return num;
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {
        let query = this.props.location.state;
        query.plane_cabin_class = query.plane_cabin_class.replace(" ", "").toLowerCase();

        let cityPromise = new Promise((resolve, reject) => {
            this.getAirports(query.from, query.to, resolve);
        });

        cityPromise.then(data => {
            query['fromCode'] = data.from;
            query['toCode'] = data.to;
            setTimeout(() => this.search(query), 2000);
        });

        let hotelQuery = {
            destination: query.to,
            arrival_date: query.departing,
            departure_date: query.arriving,
            travelers: 1
        }
        
        this.searchHotels(hotelQuery);
    }

    handleOnClickOffer = index => {
        if (index === this.state.openOffer) {
            this.setState({
                ...this.state,
                openOffer: null
            });
        }
        else {
            this.setState({
                ...this.state,
                openOffer: index
            });
        }
    }

    handleOnSelectFlight = (event, index) => {
        event.stopPropagation(); 
        console.log(index)
        this.setState({
            ...this.state,
            selectedOffer: this.state.offers[index],
            isShowingFlights: false
        });
    }

    render() {
        if (this.props.location.state && this.props.location.state.ok) {
            if (this.state.loading) {
                return <Loader />;
            }
            else if (this.state.isShowingFlights) {
                return (
                        <div className="content content--trip">
                            <h1 className="heading-1 trip--heading">Select a Flight</h1>
                            <section className="flights">
                                {
                                    this.state.offers.map((offer, index) => <Flight key={index} handleOnSelectFlight={(e) => this.handleOnSelectFlight(e, index)} open={this.state.openOffer === index} onClick={() => this.handleOnClickOffer(index)} cabinClass={this.props.location.state.plane_cabin_class} id={index} flight={offer} />)
                                }
                            </section>
                        </div>
                    );
            }
            else {
                return (
                    <div className="content content--trip">
                        <h1 className="heading-1 trip--heading">Select a Hotel</h1>
                        <section className="hotels">
                            {
                                this.state.hotels.map((hotel, index) => <Hotel key={index} open={this.state.openHotel === index} onClick={() => this.handleOnClickOffer(index)} id={index} hotel={hotel} />)
                            }
                        </section>
                    </div>
                );
            }
        } 
        else {
            return <Redirect to="/" />;
        }
    }
}
