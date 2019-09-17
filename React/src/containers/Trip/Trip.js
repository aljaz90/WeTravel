import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import axios from 'axios';
import querystring from 'querystring';
import Flight from './Flight/Flight';
import Hotel from './Hotel/Hotel';
import Summary from './Summary/Summary';
import NotificationSystem from '../../components/NotificationSystem/NotificationSystem';
import VisibilitySensor from 'react-visibility-sensor';
import Sort from '../../components/Sort/Sort';
import Filter from '../../components/Filter/Filter';

export default class Trip extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            offers: [],
            offersDisplay: {
                firstIndex: 0,
                lastIndex: 10
            },
            hotels: [],
            responseData: {},
            openOffer: null,
            openHotel: null,
            selectedOffer: null,
            selectedHotel: null,
            isShowingFlights: true,
            isShowingSummary: false,
            requests: {
                flight: false,
                hotels: false
            }
        };
        this.lastOffer = {};
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
            this.props.history.push({
                pathname: '/',
                state: {
                  ok: false,
                  info: {
                    title: "Flight API Error",
                    message: "Unable to create a session"
                  }
                }
              });
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
                this.props.history.push({
                    pathname: '/',
                    state: {
                      ok: false,
                      info: {
                        title: "Flight API Error",
                        message: "Unable to connect to the API"
                      }
                    }
                  });
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

                        this.props.history.push({
                            pathname: '/',
                            state: {
                              ok: false,
                              info: {
                                title: "Booking API Error",
                                message: "Unable to connect to the API"
                              }
                            }
                          });
                    }
                })
                .catch(err => {
                    console.log("BOOKING API ERROR")
                    console.log(err);

                    this.props.history.push({
                        pathname: '/',
                        state: {
                          ok: false,
                          info: {
                            title: "Booking API Error",
                            message: "Unable to connect to the API"
                          }
                        }
                      });
                });
            }
        })
        .catch(err => {
            console.log("BOOKING API ERROR")
            console.log(err);

            this.props.history.push({
                pathname: '/',
                state: {
                  ok: false,
                  info: {
                    title: "Booking API Error",
                    message: "Unable to connect to the API"
                  }
                }
              });
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
                        //price: this.convertPriceTo(hotel., hotel.currencycode)
                    },
                    ratings: {
                        total: hotel.review_score,
                        breakfast: hotel.breakfast_review_score.rating,
                        cleanliness: hotel.cleanliness_score
                    }
                });
            }
        });
        hotels = hotels.sort((a, b) => a.price.all_inclusive_price - b.price.all_inclusive_price);

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
                loading: false, // DEV
                requests: {
                    ...this.state.requests,
                    [action]: true
                }
            });
            console.log("DONE 1/2");
        }
    }

    showMoreFlights = num => {
        this.setState({
            ...this.state,
            offersDisplay: {
                ...this.state.offersDisplay,
                lastIndex: this.state.offersDisplay.lastIndex+num
            }
        })
    }
 
    convertPriceTo = (price, from, to="EUR") => {
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
                    } 
                })
                .catch(err => {
                    console.log("CURRENCY CONVERT API ERROR")
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
        
        //this.searchHotels(hotelQuery);
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
        this.setState({
            ...this.state,
            selectedOffer: this.state.offers[index],
            isShowingFlights: false
        });
    }
    
    handleOnSelectHotel = (event, index) => {
        event.stopPropagation(); 
        this.setState({
            ...this.state,
            selectedHotel: this.state.hotels[index],
            isShowingSummary: true
        });

    }

    getFlightDuration = flight => {
        console.log(flight)
        return flight.outboundFlight.totalDuration + flight.inboundFlight.totalDuration;
    }

    handleSortChange = (option, arrayName) => {
        console.log(option, arrayName)
        let array = this.state[arrayName];

        if (option === "fastest") {
            array = array.sort((a, b) => this.getFlightDuration(a) - this.getFlightDuration(b));
        }
        else if (option === "best") {
            array = array.sort((x, y) => { return x.price - y.price || this.getFlightDuration(x) - this.getFlightDuration(y); });
            /*let fastestArray = array.sort((a, b) => this.getFlightDuration(a) - this.getFlightDuration(b));
            let cheapestArray = array.sort((a, b) => a.price - b.price);*/

        }
        else if (option === "cheapest") {
            array = array.sort((a, b) => a.price - b.price);
        }

        this.setState({
            ...this.state,
            [arrayName]: array
        });
    }

    handleOnGoBack = event => {
        if (this.state.isShowingSummary) {
            this.setState({
                ...this.state,
                isShowingSummary: false,
                selectedHotel: null
            });
        }
        else if (this.state.isShowingFlights)
        {
            window.location.replace("/");
        }
        else {
            this.setState({
                ...this.state,
                isShowingFlights: true,
                selectedHotel: null,
                selectedOffer: null
            });
        }
    }

    handleOnFlightVisibilityChange = visible => {
        if (visible) {
            this.showMoreFlights(10);
        }
    }

    render() {
        if (this.props.location.state && this.props.location.state.ok) {
            if (this.state.loading) {
                return <Loader />;
            }
            else if (this.state.isShowingSummary) {
                return (
                    <React.Fragment>
                    {
                        this.props.location.state && !this.props.location.state.ok ? <NotificationSystem location={this.props.location} history={this.props.history} /> : ""
                    }
                    <div className="content content--summary">
                        <section className="summary">
                            <Summary onGoBack={this.handleOnGoBack} cabinClass={this.props.location.state.plane_cabin_class} flight={this.state.selectedOffer} hotel={this.state.selectedHotel} />
                        </section>
                    </div>
                    </React.Fragment>
                );
            }
            else if (this.state.isShowingFlights) {

                let displayingFlights = this.state.offers.filter((flight, index) => {
                    if (index <= this.state.offersDisplay.lastIndex) {
                        return flight;
                    }
                    return null;
                });
                // DEV

                return (
                        <React.Fragment>
                        {
                            this.props.location.state && !this.props.location.state.ok ? <NotificationSystem location={this.props.location} history={this.props.history} /> : ""
                        }
                        <div className="content content--trip" onScroll={() => console.log("SCROLL CALLED")}>
                            <section className="flights" >
                                <Sort onChange={(opt) => this.handleSortChange(opt, "offers")} options={["cheapest", "fastest", "best"]} />
                                <Filter categories={[{name: "Stops", options: ["Not important", "up to 1", "up to 2"]}, {name: "Airlines", options: ["Adria", "Test", "Emiratos"]}]} />
                                {
                                    displayingFlights.map((offer, index) => {
                                    if (index === this.state.offersDisplay.lastIndex){
                                        return (<VisibilitySensor onChange={this.handleOnFlightVisibilityChange}>
                                                    <Flight key={index} handleOnSelectFlight={(e) => this.handleOnSelectFlight(e, index)} open={this.state.openOffer === index} onClick={() => this.handleOnClickOffer(index)} cabinClass={this.props.location.state.plane_cabin_class} id={index} flight={offer} />
                                                </VisibilitySensor>);
                                    }
                                    
                                    return (<Flight key={index} handleOnSelectFlight={(e) => this.handleOnSelectFlight(e, index)} open={this.state.openOffer === index} onClick={() => this.handleOnClickOffer(index)} cabinClass={this.props.location.state.plane_cabin_class} id={index} flight={offer} />);})
                                }
                            </section>
                            <div className="trip--footer">
                                <div onClick={this.handleOnGoBack} className="trip--footer--back">
                                    Go Back
                                </div>
                                <div className="trip--footer--heading">
                                    Select a flight
                                </div>
                            </div>
                        </div>
                        </React.Fragment>
                    );
            }
            else {
                return (
                    <React.Fragment>
                    {
                        this.props.location.state && !this.props.location.state.ok ? <NotificationSystem location={this.props.location} history={this.props.history} /> : ""
                    }
                    <div className="content content--trip">
                        <section className="hotels">
                            {
                                this.state.hotels.map((hotel, index) => <Hotel key={index} handleOnSelectHotel={(e) => this.handleOnSelectHotel(e, index)} id={index} hotel={hotel} />)
                            }
                            <div className="trip--footer">
                                <div onClick={this.handleOnGoBack} className="trip--footer--back">
                                    Go Back
                                </div>
                                <div className="trip--footer--heading">
                                    Select a hotel
                                </div>
                            </div>
                        </section>
                    </div>
                    </React.Fragment>
                );
            }
        } 
        else {
            return <Redirect to="/" />;
        }
    }
}
