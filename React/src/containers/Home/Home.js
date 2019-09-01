import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faPlaneDeparture, faBoxOpen, faHome } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
import Offer from '../../components/Home/Offer/Offer';
import Form from '../../components/Form/Form';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state =  { 
      headerImg: 1,
      selectedPlace: 'everywhere',
      offers: [
        {
          place: "asia",
          colorLight: "0,180,219",
          colorDark: "0,131,176",
          name: "Modern Japan",
          price: 2399,
          details: [
            "12 days trip",
            "Comfortable hotels",
            "Visit the modern Japan",
            "Ride on a bullet train"
          ],
          image: "tokyo.jpg"
        },
        {
          place: "americas",
          colorLight: "255,123,98",
          colorDark: "251,40,0",
          name: "West coast USA",
          price: 3999,
          details: [
            "15 days trip",
            "Luxurious hotels",
            "See the national parks",
            "Experience the USA!"
          ],
          image: "usa.jpg"
        },
        {
          place: "europe",
          colorLight: "0,219,222",
          colorDark: "252,0,255",
          name: "Precise Switzerland",
          price: 2199,
          details: [
            "6 days trip",
            "Cosy hotels",
            "Taste Switzerland",
            "The heart of Europe!"
          ],
          image: "switzerland.jpg"
        }
      ]
    };

    this.handleSelectPlace = this.handleSelectPlace.bind(this);
  }

  componentDidMount() {
      this.headerImgInterval = setInterval(() => {
        if (this.state.headerImg >= 5) {
          this.setState({...this.state, headerImg: 1});
        } else {
          this.setState({...this.state, headerImg: this.state.headerImg+1});
        }
      }, 8000);
  }

  componentWillUnmount() {
    clearInterval(this.headerImgInterval);
  }

  handleSelectPlace(event) {
    //console.log(event.target.innerText.toLowerCase());
    this.setState({...this.state, selectedPlace: event.target.innerText.toLowerCase()});
  }

  handleCreateTrip = (values, event) => {
    event.preventDefault();

    this.props.history.push({
      pathname: '/trip',
      state: {
        ...values,
        ok: true
      }
    })
  }

  formatMonth = month => {
    //console.log(month)
    month = month + "";
    if (month.length > 1) {
      return month;
    }
    return "0"+month;
  }

  formatDate = date => {
    return date.getFullYear() + "-" + this.formatMonth(date.getMonth()+1) + "-" + this.formatMonth(date.getDate());
  }

  render() {

    const destinationAirportsData = [
      {name: "Everywhere", data: "everywhere"},
      {name: "Ljubljana", data: "LJU"},
      {name: "San Francisco", data: "SFO"},
      {name: "Amsterdam", data: "AMS"},
      {name: "Tokyo", data: ""},
      {name: "Hong Kong", data: ""},
      {name: "Venice", data: ""}
    ];
    
    const sourceAirportsData = [
      {name: "Ljubljana", data: "LJU"},
      {name: "San Francisco", data: "SFO"},
      {name: "Amsterdam", data: "AMS"},
      {name: "Tokyo", data: ""},
      {name: "Venice", data: ""},
      {name: "Hong Kong", data: ""}
    ];

    const hotelQualityData = [
      {name: "Budget", data: "budget"},
      {name: "Normal", data: "normal"},
      {name: "Luxury", data: "luxury"}
    ];

    const cabinClassData = [
      {name: "Economy", data: "economy"},
      {name: "Premium Economy", data: "premiumeconomy"},
      {name: "Business", data: "business"},
      {name: "First", data: "first"}
    ];

    let todayDate = new Date();
    const createTripFormInputs = [
      {name: 'from', validation: {reqired: true}, data: sourceAirportsData, type: 'autosuggest'},
      {name: 'to', validation: {reqired: true}, data: destinationAirportsData, type: 'autosuggest'},
      {name: 'departing', data: {}, validation: {reqired: true, min: this.formatDate(todayDate), max: this.formatDate(new Date(todayDate.getFullYear()+1, todayDate.getMonth(), todayDate.getDate()))}, type: 'date'},
      {name: 'arriving', data: {}, validation: {reqired: true, min: this.formatDate(todayDate), max: this.formatDate(new Date(todayDate.getFullYear()+1, todayDate.getMonth(), todayDate.getDate()))}, type: 'date'},
      {name: 'minimum_hotel_quallity', validation: {reqired: true}, data: hotelQualityData, type: 'autosuggest'},
      {name: 'plane_cabin_class', validation: {reqired: true}, data: cabinClassData, type: 'autosuggest'},
      {name: 'budget', data: {}, validation: {reqired: true, min: 100, max: 1000000, step: 100}, type: 'number'},
      {name: 'travelers', data: {}, validation: {reqired: true, min: 1, max: 16, step: 1}, type: 'number'}
    ];

    return (
      <div className="content content--home">
        <section id="top" className="header">
          <div className="header--welcome">
              <h1 className="header--welcome--heading">We Travel</h1>
              <p className="header--welcome--quote">Find a perfect trip for you.</p>
              <HashLink scroll={el => {el.scrollIntoView({ behavior: 'smooth', block: 'end' });}} smooth to="/#createatrip" className="header--welcome--btn btn btn--important">Create a trip</HashLink>
          </div>
          <div className="header--arrow">
            &darr;
          </div>
        </section>
          <div className="header-img header-img-5"></div>
          <div className="header-img header-img-4"></div>
          <div className="header-img header-img-3"></div>
          <div className="header-img header-img-2"></div>
          <div className="header-img header-img-1"></div>
        <section className="whatwedo">
          <h1 className="whatwedo--heading heading-1">What we do ?</h1>
          <div className="whatwedo--items">
            <div className="whatwedo--item">
              <FontAwesomeIcon className="whatwedo--item--icon" icon={faMapMarkedAlt} />
              <h3 className="whatwedo--item--heading heading-3">
                We plan your trip to the unknown
              </h3>
              <p className="whatwedo--item--paragraph">
                Now what are the possibilities of warp drive? Cmdr Riker's nervous system has been invaded by an unknown microorganism. The organisms fuse to the nerve, intertwining at the molecular level.
              </p>
            </div>
            <div className="whatwedo--item">
              <FontAwesomeIcon className="whatwedo--item--icon" icon={faPlaneDeparture} />
              <h3 className="whatwedo--item--heading heading-3">
                You can buy plane tickets from us
              </h3>
              <p className="whatwedo--item--paragraph">
                Now what are the possibilities of warp drive? Cmdr Riker's nervous system has been invaded by an unknown microorganism. The organisms fuse to the nerve, intertwining at the molecular level.
              </p>
            </div>
            <div className="whatwedo--item">
              <FontAwesomeIcon className="whatwedo--item--icon" icon={faBoxOpen} />
              <h3 className="whatwedo--item--heading heading-3">
                The full Package
              </h3>
              <p className="whatwedo--item--paragraph">
                Now what are the possibilities of warp drive? Cmdr Riker's nervous system has been invaded by an unknown microorganism. The organisms fuse to the nerve, intertwining at the molecular level.
              </p>
            </div>
            <div className="whatwedo--item">
              <FontAwesomeIcon className="whatwedo--item--icon" icon={faHome} />
              <h3 className="whatwedo--item--heading heading-3">
                Book with us from Home
              </h3>
              <p className="whatwedo--item--paragraph">
                Now what are the possibilities of warp drive? Cmdr Riker's nervous system has been invaded by an unknown microorganism. The organisms fuse to the nerve, intertwining at the molecular level.
              </p>
            </div>
          </div>
        </section>
        <section id="offers" className="offers">
          <h1 className="offers--heading heading-1">Offers</h1>
          <div className="offers--places">
            <div onClick={this.handleSelectPlace} className={"offers--places--place" + (this.state.selectedPlace==="americas" ? " offers--places--place--selected" : "")} >
              Americas
            </div>
            <div onClick={this.handleSelectPlace} className={"offers--places--place" + (this.state.selectedPlace==="europe" ? " offers--places--place--selected" : "")}>
              Europe
            </div>
            <div onClick={this.handleSelectPlace} className={"offers--places--place offers--places--place--preferred" + (this.state.selectedPlace==="everywhere" ? " offers--places--place--selected" : "")}>
              Everywhere
            </div>
            <div onClick={this.handleSelectPlace} className={"offers--places--place" + (this.state.selectedPlace==="asia" ? " offers--places--place--selected" : "")}>
              Asia
            </div>
            <div onClick={this.handleSelectPlace} className={"offers--places--place" + (this.state.selectedPlace==="oceania" ? " offers--places--place--selected" : "")}>
              Oceania
            </div>
            <div onClick={this.handleSelectPlace} className={"offers--places--place" + (this.state.selectedPlace==="africa" ? " offers--places--place--selected" : "")}>
              Africa
            </div>
          </div>
          <div className="offers--list">
            { this.state.offers.filter(offer => {
              if (this.state.selectedPlace === "everywhere" || this.state.selectedPlace === offer.place) {
                return offer;
              }
              return null;
            }).map(offer => (
              <Offer key={offer.name} colorDark={offer.colorDark} colorLight={offer.colorLight} price={offer.price} details={offer.details} name={offer.name} image={offer.image} />
            )) }
          </div>
        </section>
        <section id="createatrip" className="createatrip">
          <h1 className="createatrip--heading heading-1">Create a trip</h1>
          <Form inputs={createTripFormInputs} onSubmit={this.handleCreateTrip} />
        </section>
        <section className="footer">
          <p className="footer--text">
            WeTravel &copy; Created by <Link to="#" className="link">Aljaz Kern</Link> in 2019.
          </p>
        </section>
      </div>
    )
  }
}

export default Home;