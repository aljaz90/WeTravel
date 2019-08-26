import React, { Component } from 'react';
import axios from 'axios';
import querystring from 'querystring';

export default class AirlineAPI extends Component {

    componentDidMount() {

    }

    search = () => {
        let body = {
            "originPlace": "VCE-sky",
            "destinationPlace": "SFO-sky",
            "adults": 1,
            "children": 0,
            "infants": 0,
            "outboundDate": "2020-02-10",
            "inboundDate": "2020-02-24",
            "cabinClass": "economy",
            "country": "US",
            "currency": "USD",
            "locale": "en-US"
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
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
        <div>
            
        </div>
        )
    }
}
