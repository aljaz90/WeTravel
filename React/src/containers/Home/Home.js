import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faPlaneArrival, faPlaneDeparture, faBoxOpen, faHome } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
import Offer from '../../components/Home/Offer/Offer';
import Form from '../../components/Form/Form';
import NotificationSystem from '../../components/NotificationSystem/NotificationSystem';
import Input from '../../components/Form/Input/Input';
import DatePicker from '../../components/DatePicker/DatePicker';

const cities = [
  {
    "name": "Hong Kong",
    "country": "Hong Kong",
    "lat": "22.27832",
    "lon": "114.17469"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "lat": "51.50853",
    "lon": "-0.12574"
  },
  {
    "name": "Tokyo",
    "country": "Japan",
    "lat": "35.6895",
    "lon": "139.69171"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "lat": "34.69374",
    "lon": "135.50218"
  },
  {
    "name": "Venice",
    "country": "Italy",
    "lat": "45.440845",
    "lon": "12.315515"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "lat": "40.4165",
    "lon": "-3.70256"
  },
  {
    "name": "Ljubljana",
    "country": "Slovenia",
    "lat": "46.05108",
    "lon": "14.50513"
  },
  {
    "name": "Budapest",
    "country": "Hungary",
    "lat": "47.49835",
    "lon": "19.04045"
  },
  {
    "name": "Milan",
    "country": "Italy",
    "lat": "45.46427",
    "lon": "9.18951"
  },
  {
    "name": "Bologna",
    "country": "Italy",
    "lat": "44.49381",
    "lon": "11.33875"
  },
  {
    "name": "Verona",
    "country": "Italy",
    "lat": "45.4299",
    "lon": "10.98444"
  },
  {
    "name": "Zagreb",
    "country": "Croatia",
    "lat": "45.81444",
    "lon": "15.97798"
  },
  {
    "name": "Zurich",
    "country": "Switzerland",
    "lat": "47.36667",
    "lon": "8.55"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "lat": "48.13743",
    "lon": "11.57549"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "lat": "48.20849",
    "lon": "16.37208"
  },
  {
    "name": "Frankfurt",
    "country": "Germany",
    "lat": "50.11552",
    "lon": "8.68417"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "lat": "41.01384",
    "lon": "28.94966"
  },
  {
    "name": "Nuremberg",
    "country": "Germany",
    "lat": "49.45421",
    "lon": "11.07752"
  },
  {
    "name": "Stuttgart",
    "country": "Germany",
    "lat": "48.78232",
    "lon": "9.17702"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "lat": "55.67594",
    "lon": "12.56553"
  },
  {
    "name": "Hamburg",
    "country": "Germany",
    "lat": "53.57532",
    "lon": "10.01534"
  },
  {
    "name": "Geneva",
    "country": "Switzerland",
    "lat": "46.20222",
    "lon": "6.14569"
  },
  {
    "name": "Amsterdam",
    "country": "Netherlands",
    "lat": "52.37403",
    "lon": "4.88969"
  },
  {
    "name": "Helsinki",
    "country": "Finland",
    "lat": "60.16952",
    "lon": "24.93545"
  },
  {
    "name": "Bern",
    "country": "Switzerland",
    "lat": "46.94809",
    "lon": "7.44744"
  },
  {
    "name": "Oslo",
    "country": "Norway",
    "lat": "59.91273",
    "lon": "10.74609"
  },
  {
    "name": "Minsk",
    "country": "Belarus",
    "lat": "53.9",
    "lon": "27.56667"
  },
  {
    "name": "Riga",
    "country": "Latvia",
    "lat": "56.946",
    "lon": "24.10589"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "lat": "52.52437",
    "lon": "13.41053"
  },
  {
    "name": "Stockholm",
    "country": "Sweden",
    "lat": "59.33258",
    "lon": "18.0649"
  },
  {
    "name": "Warsaw",
    "country": "Poland",
    "lat": "52.22977",
    "lon": "21.01178"
  },
  {
    "name": "Bratislava",
    "country": "Slovakia",
    "lat": "48.14816",
    "lon": "17.10674"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "lat": "55.75222",
    "lon": "37.61556"
  },
  {
    "name": "Belgrade",
    "country": "Serbia",
    "lat": "44.80401",
    "lon": "20.46513"
  },
  {
    "name": "Vilnius",
    "country": "Lithuania",
    "lat": "54.68916",
    "lon": "25.2798"
  },
  {
    "name": "Prague",
    "country": "Czechia",
    "lat": "50.08804",
    "lon": "14.42076"
  },
  {
    "name": "Sarajevo",
    "country": "Bosnia and Herzegovina",
    "lat": "43.84864",
    "lon": "18.35644"
  },
  {
    "name": "Sofia",
    "country": "Bulgaria",
    "lat": "42.69751",
    "lon": "23.32415"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "lat": "41.89193",
    "lon": "12.51133"
  },
  {
    "name": "Kiev",
    "country": "Ukraine",
    "lat": "50.45466",
    "lon": "30.5238"
  },
  {
    "name": "Bucharest",
    "country": "Romania",
    "lat": "44.43225",
    "lon": "26.10626"
  },
  {
    "name": "Catania",
    "country": "Italy",
    "lat": "37.49223",
    "lon": "15.07041"
  },
  {
    "name": "Rabat",
    "country": "Morocco",
    "lat": "34.01325",
    "lon": "-6.83255"
  },
  {
    "name": "Tunis",
    "country": "Tunisia",
    "lat": "36.81897",
    "lon": "10.16579"
  },
  {
    "name": "Lisbon",
    "country": "Portugal",
    "lat": "38.71667",
    "lon": "-9.13333"
  },
  {
    "name": "Palermo",
    "country": "Italy",
    "lat": "38.13205",
    "lon": "13.33561"
  },
  {
    "name": "Monaco",
    "country": "Monaco",
    "lat": "43.73333",
    "lon": "7.41667"
  },
  {
    "name": "Dublin",
    "country": "Ireland",
    "lat": "53.33306",
    "lon": "-6.24889"
  },
  {
    "name": "Barcelona",
    "country": "Spain",
    "lat": "41.38879",
    "lon": "2.15899"
  },
  {
    "name": "Algiers",
    "country": "Algeria",
    "lat": "36.73225",
    "lon": "3.08746"
  },
  {
    "name": "Liverpool",
    "country": "United Kingdom",
    "lat": "53.41058",
    "lon": "-2.97794"
  },
  {
    "name": "Naples",
    "country": "Italy",
    "lat": "40.85216",
    "lon": "14.26811"
  },
  {
    "name": "Edinburgh",
    "country": "United Kingdom",
    "lat": "55.95206",
    "lon": "-3.19648"
  },
  {
    "name": "Paris",
    "country": "France",
    "lat": "48.85341",
    "lon": "2.3488"
  },
  {
    "name": "Glasgow",
    "country": "United Kingdom",
    "lat": "55.86515",
    "lon": "-4.25763"
  },
  {
    "name": "Manchester",
    "country": "United States",
    "lat": "42.99564",
    "lon": "-71.45479"
  },
  {
    "name": "Podgorica",
    "country": "Montenegro",
    "lat": "42.44111",
    "lon": "19.26361"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "lat": "37.98376",
    "lon": "23.72784"
  },
  {
    "name": "Brussels",
    "country": "Belgium",
    "lat": "50.85045",
    "lon": "4.34878"
  },
  {
    "name": "Antalya",
    "country": "Turkey",
    "lat": "36.90812",
    "lon": "30.69556"
  },
  {
    "name": "Bari",
    "country": "Italy",
    "lat": "41.12066",
    "lon": "16.86982"
  },
  {
    "name": "Skopje",
    "country": "North Macedonia",
    "lat": "41.99646",
    "lon": "21.43141"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "lat": "39.91987",
    "lon": "32.85427"
  },
  {
    "name": "Luxembourg",
    "country": "Luxembourg",
    "lat": "49.61167",
    "lon": "6.13"
  },
  {
    "name": "Nicosia",
    "country": "Cyprus",
    "lat": "35.17531",
    "lon": "33.3642"
  },
  {
    "name": "Tirana",
    "country": "Albania",
    "lat": "41.3275",
    "lon": "19.81889"
  },
  {
    "name": "Izmir",
    "country": "Turkey",
    "lat": "38.41273",
    "lon": "27.13838"
  },
  {
    "name": "Baku",
    "country": "Azerbaijan",
    "lat": "40.37767",
    "lon": "49.89201"
  },
  {
    "name": "Bursa",
    "country": "Turkey",
    "lat": "40.19559",
    "lon": "29.06013"
  },
  {
    "name": "Tbilisi",
    "country": "Georgia",
    "lat": "41.69411",
    "lon": "44.83368"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "lat": "19.07283",
    "lon": "72.88261"
  },
  {
    "name": "Kathmandu",
    "country": "Nepal",
    "lat": "27.70169",
    "lon": "85.3206"
  },
  {
    "name": "New Delhi",
    "country": "India",
    "lat": "28.65195",
    "lon": "77.23149"
  },
  {
    "name": "St Petersburg",
    "country": "Russia",
    "lat": "59.93863",
    "lon": "30.31413"
  },
  {
    "name": "Colombo",
    "country": "Sri Lanka",
    "lat": "6.93548",
    "lon": "79.84868"
  },
  {
    "name": "Vientiane",
    "country": "Laos",
    "lat": "17.96667",
    "lon": "102.6"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "lat": "23.7104",
    "lon": "90.40744"
  },
  {
    "name": "Macau",
    "country": "Macao",
    "lat": "22.20056",
    "lon": "113.54611"
  },
  {
    "name": "Hanoi",
    "country": "Vietnam",
    "lat": "21.0245",
    "lon": "105.84117"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "lat": "13.75398",
    "lon": "100.50144"
  },
  {
    "name": "Taipei",
    "country": "Taiwan",
    "lat": "25.04776",
    "lon": "121.53185"
  },
  {
    "name": "Nur-Sultan",
    "country": "Kazakhstan",
    "lat": "51.1801",
    "lon": "71.44598"
  },
  {
    "name": "Seoul",
    "country": "South Korea",
    "lat": "37.566",
    "lon": "126.9784"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "lat": "14.6042",
    "lon": "120.9822"
  },
  {
    "name": "Beijing",
    "country": "China",
    "lat": "39.9075",
    "lon": "116.39723"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "lat": "-6.21462",
    "lon": "106.84513"
  },
  {
    "name": "Nagoya",
    "country": "Japan",
    "lat": "35.18147",
    "lon": "136.90641"
  },
  {
    "name": "Sapporo",
    "country": "Japan",
    "lat": "43.06667",
    "lon": "141.35"
  },
  {
    "name": "Busan",
    "country": "South Korea",
    "lat": "35.10168",
    "lon": "129.03004"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "lat": "31.22222",
    "lon": "121.45806"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "lat": "39.14222",
    "lon": "117.17667"
  },
  {
    "name": "Hiroshima",
    "country": "Japan",
    "lat": "34.4",
    "lon": "132.45"
  },
  {
    "name": "Port Moresby",
    "country": "Papua New Guinea",
    "lat": "-9.47723",
    "lon": "147.15089"
  },
  {
    "name": "Melbourne",
    "country": "Australia",
    "lat": "-37.814",
    "lon": "144.96332"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "lat": "-27.46794",
    "lon": "153.02809"
  },
  {
    "name": "Auckland",
    "country": "New Zealand",
    "lat": "-36.84853",
    "lon": "174.76349"
  },
  {
    "name": "Honolulu",
    "country": "United States",
    "lat": "21.30694",
    "lon": "-157.85833"
  },
  {
    "name": "Kyoto",
    "country": "Japan",
    "lat": "35.02107",
    "lon": "135.75385"
  },
  {
    "name": "Canberra",
    "country": "Australia",
    "lat": "-35.28346",
    "lon": "149.12807"
  },
  {
    "name": "Anchorage",
    "country": "United States",
    "lat": "61.21806",
    "lon": "-149.90028"
  },
  {
    "name": "Edmonton",
    "country": "Canada",
    "lat": "53.55014",
    "lon": "-113.46871"
  },
  {
    "name": "Ulaanbaatar",
    "country": "Mongolia",
    "lat": "47.90771",
    "lon": "106.88324"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "lat": "-33.86785",
    "lon": "151.20732"
  },
  {
    "name": "Vancouver",
    "country": "Canada",
    "lat": "49.24966",
    "lon": "-123.11934"
  },
  {
    "name": "Winnipeg",
    "country": "Canada",
    "lat": "49.8844",
    "lon": "-97.14704"
  },
  {
    "name": "Wellington",
    "country": "New Zealand",
    "lat": "-41.28664",
    "lon": "174.77557"
  },
  {
    "name": "Detroit",
    "country": "United States",
    "lat": "42.33143",
    "lon": "-83.04575"
  },
  {
    "name": "Montreal",
    "country": "Canada",
    "lat": "45.50884",
    "lon": "-73.58781"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "lat": "45.41117",
    "lon": "-75.69812"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "lat": "41.85003",
    "lon": "-87.65005"
  },
  {
    "name": "Orlando",
    "country": "United States",
    "lat": "28.53834",
    "lon": "-81.37924"
  },
  {
    "name": "New York",
    "country": "United States",
    "lat": "40.71427",
    "lon": "-74.00597"
  },
  {
    "name": "Atlanta",
    "country": "United States",
    "lat": "33.749",
    "lon": "-84.38798"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "lat": "43.70011",
    "lon": "-79.4163"
  },
  {
    "name": "Washington",
    "country": "United States",
    "lat": "38.89511",
    "lon": "-77.03637"
  },
  {
    "name": "Houston",
    "country": "United States",
    "lat": "29.76328",
    "lon": "-95.36327"
  },
  {
    "name": "Miami",
    "country": "United States",
    "lat": "25.77427",
    "lon": "-80.19366"
  },
  {
    "name": "Havana",
    "country": "Cuba",
    "lat": "23.13302",
    "lon": "-82.38304"
  },
  {
    "name": "Las Vegas",
    "country": "United States",
    "lat": "36.17497",
    "lon": "-115.13722"
  },
  {
    "name": "New Orleans",
    "country": "United States",
    "lat": "29.95465",
    "lon": "-90.07507"
  },
  {
    "name": "Denver",
    "country": "United States",
    "lat": "39.73915",
    "lon": "-104.9847"
  },
  {
    "name": "Phoenix",
    "country": "United States",
    "lat": "33.44838",
    "lon": "-112.07404"
  },
  {
    "name": "Seattle",
    "country": "United States",
    "lat": "47.60621",
    "lon": "-122.33207"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "lat": "34.05223",
    "lon": "-118.24368"
  },
  {
    "name": "Portland",
    "country": "United States",
    "lat": "45.52345",
    "lon": "-122.67621"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "lat": "19.42847",
    "lon": "-99.12766"
  },
  {
    "name": "Panama City",
    "country": "Panama",
    "lat": "8.9936",
    "lon": "-79.51973"
  },
  {
    "name": "Caracas",
    "country": "Venezuela",
    "lat": "10.48801",
    "lon": "-66.87919"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "lat": "4.60971",
    "lon": "-74.08175"
  },
  {
    "name": "Quito",
    "country": "Ecuador",
    "lat": "-0.22985",
    "lon": "-78.52495"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "lat": "-22.90642",
    "lon": "-43.18223"
  },
  {
    "name": "San Juan",
    "country": "Puerto Rico",
    "lat": "18.46633",
    "lon": "-66.10572"
  },
  {
    "name": "Antananarivo",
    "country": "Madagascar",
    "lat": "-18.91368",
    "lon": "47.53613"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "lat": "-33.92584",
    "lon": "18.42322"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "lat": "-1.28333",
    "lon": "36.81667"
  },
  {
    "name": "Muscat",
    "country": "Oman",
    "lat": "23.58413",
    "lon": "58.40778"
  },
  {
    "name": "San Francisco",
    "country": "Costa Rica",
    "lat": "9.99299",
    "lon": "-84.12934"
  },
  {
    "name": "Dubai",
    "country": "United Arab Emirates",
    "lat": "25.07725",
    "lon": "55.30927"
  },
  {
    "name": "Doha",
    "country": "Qatar",
    "lat": "25.28545",
    "lon": "51.53096"
  },
  {
    "name": "Abu Dhabi",
    "country": "United Arab Emirates",
    "lat": "24.45118",
    "lon": "54.39696"
  },
  {
    "name": "San Jose",
    "country": "Costa Rica",
    "lat": "9.93333",
    "lon": "-84.08333"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "lat": "40.4165",
    "lon": "-3.70256"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "lat": "-33.45694",
    "lon": "-70.64827"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "lat": "30.06263",
    "lon": "31.24967"
  },
  {
    "name": "Jerusalem",
    "country": "Israel",
    "lat": "31.78199",
    "lon": "35.21961"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "lat": "-34.61315",
    "lon": "-58.37723"
  }
];

class Home extends Component {

  constructor(props) {
    super(props);

    this.state =  { 
      headerImg: 1,
      selectedPlace: 'everywhere',
      tripFormValues: {},
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
    this.setState({...this.state, selectedPlace: event.target.innerText.toLowerCase()});
  }

  handleCreateTrip = event => {
    event.preventDefault();
    let values = {...this.state.tripFormValues};
    let departing = new Date(values.departing);
    let arriving = new Date(values.arriving);
    if (!(departing < arriving) || values.from === values.to || values.travelers === '' || values.budget === '' || !values.budget || !values.travelers) {
      return;
    }

    values.departing = this.formatDate(new Date(values.departing));
    values.arriving = this.formatDate(new Date(values.arriving));

    this.props.history.push({
      pathname: '/trip',
      state: {
        ...values,
        ok: true
      }
    });
  }

  formatMonth = month => {
    month = month + "";
    if (month.length > 1) {
      return month;
    }
    return "0"+month;
  }

  formatDate = date => {
    return date.getFullYear() + "-" + this.formatMonth(date.getMonth()+1) + "-" + this.formatMonth(date.getDate());
  }

  capitalize = value => {
    return (value.charAt(0).toUpperCase() + value.slice(1, value.length)).replace(/_/g, " ");
  }

  handleOnFormValueChange = (name, value) => {
    let tripFormValues = {...this.state.tripFormValues};
    if (name === "deparingarriving") {
      tripFormValues.departing = value.departing;
        tripFormValues.arriving = value.arriving;
    }else {
      tripFormValues[name] = value; 
    }
    this.setState({...this.state, tripFormValues});
}

  render() {

    const destinationAirportsData = [
      {name: "Everywhere", data: "everywhere"},
      ...cities
    ];
    
    const sourceAirportsData = [
      ...cities
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

    const budgetData = [
      {name: "500€", data: "500"},
      {name: "1000€", data: "1000"},
      {name: "2000€", data: "2000"},
      {name: "5000€", data: "3000"}
    ];
    const travelersData = [
      {name: "1", data: "1"},
      {name: "2", data: "2"},
      {name: "3", data: "3"},
      {name: "4", data: "4"}
    ];

    let todayDate = new Date();
    const inputs = [
      {name: 'from', validation: {reqired: true}, data: sourceAirportsData, type: 'autosuggest'},
      {name: 'to', validation: {reqired: true}, data: destinationAirportsData, type: 'autosuggest'},
      {name: 'departing', data: {}, validation: {reqired: true, min: this.formatDate(todayDate), max: this.formatDate(new Date(todayDate.getFullYear()+1, todayDate.getMonth(), todayDate.getDate()))}, type: 'date'},
      {name: 'arriving', data: {}, validation: {reqired: true, min: this.formatDate(todayDate), max: this.formatDate(new Date(todayDate.getFullYear()+1, todayDate.getMonth(), todayDate.getDate()))}, type: 'date'},
      {name: 'minimum_hotel_quallity', validation: {reqired: true}, data: hotelQualityData, type: 'dropdown'},
      {name: 'plane_cabin_class', validation: {reqired: true}, data: cabinClassData, type: 'dropdown'},
      {name: 'budget', data: budgetData, validation: {reqired: true, min: 5100, max: 100000, step: 100}, type: 'number'},
      {name: 'travelers', data: travelersData, validation: {reqired: true, min: 5, max: 16, step: 1}, type: 'number'}
    ];

    return (
      <React.Fragment>
      {
        this.props.location.state && !this.props.location.state.ok ? <NotificationSystem location={this.props.location} history={this.props.history} /> : ""
      }
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
          {/* UGLY OLD WAY <Form place="home" inputs={createTripFormInputs} onSubmit={this.handleCreateTrip} /> */}
          <Form className="createatrip--form" onSubmit={this.handleCreateTrip}>
              <div className="createatrip--form--input-group">
                  <FontAwesomeIcon icon={faPlaneDeparture} className="createatrip--form--input-group--icon createatrip--form--input-group--icon--1" />
                  <FontAwesomeIcon icon={faPlaneArrival} className="createatrip--form--input-group--icon createatrip--form--input-group--icon--2" />
                  <Input key={inputs[0].name} data={inputs[0].data} validation={inputs[0].validation} type={inputs[0].type} onChanged={this.handleOnFormValueChange} name={this.capitalize(inputs[0].name)} id={inputs[0].name} />
                  <Input key={inputs[1].name} data={inputs[1].data} validation={inputs[1].validation} type={inputs[1].type} onChanged={this.handleOnFormValueChange} name={this.capitalize(inputs[1].name)} id={inputs[1].name} />
              </div>
              <div className="createatrip--form--input-group">
                  <DatePicker onChanged={this.handleOnFormValueChange} type="range" placeholder="Outbound Date" placeholder2="Return Date" />
              </div>
              <div className="createatrip--form--input-group">
                  <Input key={inputs[4].name} data={inputs[4].data} validation={inputs[4].validation} type={inputs[4].type} onChanged={this.handleOnFormValueChange} name={this.capitalize(inputs[4].name)} id={inputs[4].name} />
              </div>
              <div className="createatrip--form--input-group">
                  <Input key={inputs[5].name} data={inputs[5].data} validation={inputs[5].validation} type={inputs[5].type} onChanged={this.handleOnFormValueChange} name={this.capitalize(inputs[5].name)} id={inputs[5].name} />
              </div>
              <div className="createatrip--form--input-group">
                  <Input key={inputs[6].name} data={inputs[6].data} validation={inputs[6].validation} type={inputs[6].type} onChanged={this.handleOnFormValueChange} name={this.capitalize(inputs[6].name)} id={inputs[6].name} />
              </div>
              <div className="createatrip--form--input-group">
                  <Input key={inputs[7].name} data={inputs[7].data} validation={inputs[7].validation} type={inputs[7].type} onChanged={this.handleOnFormValueChange} name={this.capitalize(inputs[7].name)} id={inputs[7].name} />
              </div>
              <input value="Create a Trip" className="form-home--input-group--submit btn btn--important" type="submit" />
          </Form>
        </section>
        <section className="footer">
          <p className="footer--text">
            WeTravel &copy; Created by <Link to="#" className="link">Aljaz Kern</Link> in 2019.
          </p>
        </section>
      </div>
      </React.Fragment>
    )
  }
}

export default Home;