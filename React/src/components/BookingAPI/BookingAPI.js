import React, { Component } from 'react';
import axios from 'axios';
import querystring from 'querystring';

export default class BookingAPI extends Component {

    componentDidMount() {

    }

    search = () => {
        let body = {
            "price_filter_currencycode": "USD",
            "travel_purpose": "leisure",
            "categories_filter": "price::9-40,free_cancellation::1,class::1,class::0,class::2",
            "search_id": "none",
            "order_by": "popularity",
            "children_qty": "2",
            "languagecode": "en-us",
            "children_age": "5,7",
            "search_type": "city",
            "offset": "0",
            "dest_ids": "-3712125",
            "guest_qty": "1",
            "arrival_date": "2019-03-13",
            "departure_date": "2019-03-15",
            "room_qty": "1"
        };

        let config = {
            headers: {
                "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
	            "x-rapidapi-key": "d9db34e064mshd0d8e9d32b2f42ep11fd0djsn59a7fc17ba87"
            }
        };

        axios.post("https://cors-anywhere.herokuapp.com/https://apidojo-booking-v1.p.rapidapi.com/properties/list", querystring.stringify(body), config)
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
