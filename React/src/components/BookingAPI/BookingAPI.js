import React, { Component } from 'react';
import axios from 'axios';

export default class BookingAPI extends Component {

    componentDidMount() {
        let data = {
            destination: "tokyo",
            arrival_date: "2019-10-27",
            departure_date: "2019-11-2",
            travelers: 1
        }
        //this.search(data);
    }

    search = data => {
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
        
                console.log(config)
        
                axios.get("https://cors-anywhere.herokuapp.com/https://apidojo-booking-v1.p.rapidapi.com/properties/list", config)
                .then(res => {
                    console.log("BOOKING RESULT: ")
                    console.log(res);
                })
                .catch(err => {
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
                    currency: hotel.price_breakdown.currency,
                    all_inclusive_price: hotel.price_breakdown.all_inclusive_price,
                    min_total_price: hotel.min_total_price
                },
                ratings: {
                    total: hotel.review_score,
                    breakfast: hotel.breakfast_review_score.rating,
                    cleanliness: hotel.cleanliness_score
                }
            });
        })
    }

/*
    search = data => {

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

        console.log(config)

        axios.get("https://cors-anywhere.herokuapp.com/https://apidojo-booking-v1.p.rapidapi.com/properties/list", config)
        .then(res => {
            console.log("BOOKING RESULT: ")
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    }
*/
    render() {
        return (
        <div>
            
        </div>
        )
    }
}
