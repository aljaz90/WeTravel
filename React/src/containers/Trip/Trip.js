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
import Everywhere from '../../components/Everywhere/Everywhere';

export default class Trip extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: {},
            loading: true,
            everywhere: false,
            offers: [],
            offersDisplay: {
                firstIndex: 0,
                lastIndex: 10,
                filters: {
                    airlines: [],
                    stops: {
                        direct: false,
                        up_to_1: false,
                        up_to_2: false
                    }
                }
            },
            hotels: [],
            hotelsDisplay: {
                firstIndex: 0,
                lastIndex: 10,
                filters: {
                    breakfast: {
                        breakfast_included: false
                    },
                    city_center: {
                        is_city_center: false
                    }
                }
            },
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

        this.state.hotels = [
            {
              "name": "plat hostel keikyu asakusa karin",
              "is_city_center": 0,
              "distance_to_cc": "6.75",
              "url": "https://www.booking.com/hotel/jp/plat-hostel-keikyu.html",
              "breakfast_included": 0,
              "address": "Sumida-ku Higashikomagata 2-11-2",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/187396364.jpg?k=66279fbbf362ba477c3578895e2d1b562c77c14516ac75c46f6bc1e4998837dc&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 16965,
                "min_total_price": 16965
              },
              "ratings": {
                "total": 9,
                "breakfast": 0,
                "cleanliness": 9.2
              }
            },
            {
              "name": "Mustard Hotel Asakusa 2",
              "is_city_center": 0,
              "distance_to_cc": "6.95",
              "url": "https://www.booking.com/hotel/jp/mustard-asakusa-hanakawado.html",
              "breakfast_included": 0,
              "address": "Taito-ku Hanakawado 1-7-10",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/197489122.jpg?k=66a47383b88e88f85531cae50cc2abf86c37ea70442dedf6f25e141f9adb23ee&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 20541.6,
                "min_total_price": 20541.6
              },
              "ratings": {
                "total": 9,
                "breakfast": 7.5,
                "cleanliness": 9
              }
            },
            {
              "name": "do-c Gotanda",
              "is_city_center": 0,
              "distance_to_cc": "6.65",
              "url": "https://www.booking.com/hotel/jp/central-inn-gotanda.html",
              "breakfast_included": 0,
              "address": "Shinagawaku, Higashigotanda 1-20-15",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/140211424.jpg?k=bc2e5540f7b5a191f59c9e9032671c2d556fd31fcab88fa9d87abecbd91c4c37&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 23310,
                "min_total_price": 23310
              },
              "ratings": {
                "total": 7.8,
                "breakfast": 6.3,
                "cleanliness": 7.8
              }
            },
            {
              "name": "Emblem Hostel Nishiarai",
              "is_city_center": 0,
              "distance_to_cc": "11.70",
              "url": "https://www.booking.com/hotel/jp/emblem-hostel-nishiarai.html",
              "breakfast_included": 0,
              "address": "Adachi-ku, Umejima 3-33-6",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/114832552.jpg?k=90ffee23cf827a1a5bcb929db63bc4e34644194a49b2a7896e8a5d4cd49888f0&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 25542,
                "min_total_price": 25542
              },
              "ratings": {
                "total": 9,
                "breakfast": 8,
                "cleanliness": 9.2
              }
            },
            {
              "name": "nine hours Akasaka",
              "is_city_center": 0,
              "distance_to_cc": "1.45",
              "url": "https://www.booking.com/hotel/jp/nine-hours-akasaka.html",
              "breakfast_included": 0,
              "address": "Minato-ku Akasaka 4-3-14",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/143078697.jpg?k=22e64442ee620639e9c78220094391cada11bc54d319507c1c52a291748da3d0&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 27090,
                "min_total_price": 27090
              },
              "ratings": {
                "total": 8.4,
                "breakfast": 6.7,
                "cleanliness": 8.4
              }
            },
            {
              "name": "do-c Ebisu",
              "is_city_center": 0,
              "distance_to_cc": "4.60",
              "url": "https://www.booking.com/hotel/jp/do-c-ebisu.html",
              "breakfast_included": 0,
              "address": "Shibuyaku, Ebisu 1-8-1",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/122818474.jpg?k=b0a7f994fe2c942ee60a7317e45c995fd34be3012ebf1a176897e04cff0c28bc&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 27405,
                "min_total_price": 27405
              },
              "ratings": {
                "total": 7.9,
                "breakfast": 6.9,
                "cleanliness": 8.1
              }
            },
            {
              "name": "nine hours Asakusa",
              "is_city_center": 0,
              "distance_to_cc": "6.65",
              "url": "https://www.booking.com/hotel/jp/nine-hours-asakusa.html",
              "breakfast_included": 0,
              "address": "Taitou-ku Asakusa 2-6-15",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/165978355.jpg?k=027f2d2d19855f8cc94c127ad8d463bdc4035d45d5e0e9364465f2c111dbd398&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 28350,
                "min_total_price": 28350
              },
              "ratings": {
                "total": 8.6,
                "breakfast": 7,
                "cleanliness": 8.8
              }
            },
            {
              "name": "nine hours woman Kanda",
              "is_city_center": 0,
              "distance_to_cc": "3.95",
              "url": "https://www.booking.com/hotel/jp/nine-hours-woman-kanda.html",
              "breakfast_included": 0,
              "address": "Chiyoda-ku Kajicho 2-9-4",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/109364616.jpg?k=87e9fcaa7cff2803e6f403c62e552952fcfabcc9879d7a2ef876691528be45ea&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 29925,
                "min_total_price": 29925
              },
              "ratings": {
                "total": 8.6,
                "breakfast": 8.1,
                "cleanliness": 9
              }
            },
            {
              "name": "Sakura Hotel Jimbocho",
              "is_city_center": 0,
              "distance_to_cc": "2.65",
              "url": "https://www.booking.com/hotel/jp/sakura-jimbocho.html",
              "breakfast_included": 1,
              "address": "Chiyoda-ku Kanda-Jinbocho 2-21-4",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/153854362.jpg?k=05f715d4534b44b7eec37f5227c34ac1759bff1f10f84519b1901d28394cd0db&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 31590,
                "min_total_price": 31590
              },
              "ratings": {
                "total": 8.3,
                "breakfast": 6.9,
                "cleanliness": 8.3
              }
            },
            {
              "name": "nine hours Shinjuku-North",
              "is_city_center": 0,
              "distance_to_cc": "3.05",
              "url": "https://www.booking.com/hotel/jp/nine-hours-shinjuku-north.html",
              "breakfast_included": 0,
              "address": "Shinjuku-ku, Hyakunin Cho 1-4-15 ",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/93278695.jpg?k=96eb68cbf568a6c64de4f56ca39c56efce23576d0ee8407f215180c813255013&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 35280,
                "min_total_price": 35280
              },
              "ratings": {
                "total": 8.7,
                "breakfast": 7.1,
                "cleanliness": 9.2
              }
            },
            {
              "name": "Wise Owl Hostels Tokyo",
              "is_city_center": 0,
              "distance_to_cc": "4.50",
              "url": "https://www.booking.com/hotel/jp/wise-owl-hostels-tokyo.html",
              "breakfast_included": 0,
              "address": "Chuo-ku Hatchobori 3-22-9",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/114159468.jpg?k=8435a50582d076bc28c4cb9d3a6b6e3b6472b9f5bcca5736aab80e1e40e96a30&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 37100,
                "min_total_price": 37100
              },
              "ratings": {
                "total": 8.9,
                "breakfast": 0,
                "cleanliness": 8.9
              }
            },
            {
              "name": "hotel zen tokyo",
              "is_city_center": 0,
              "distance_to_cc": "4.75",
              "url": "https://www.booking.com/hotel/jp/zen-tokyo.html",
              "breakfast_included": 1,
              "address": "Chuo-ku Nihonbashi Ningyocho 1-5-8",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/183732901.jpg?k=cc26b70eb515adbd0a3d296d0d150b6c5742959d041b4de96f5955bff7438ea0&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 44000,
                "min_total_price": 44000
              },
              "ratings": {
                "total": 8.9,
                "breakfast": 6.6,
                "cleanliness": 9.2
              }
            },
            {
              "name": "Sakura Hotel Nippori",
              "is_city_center": 0,
              "distance_to_cc": "5.65",
              "url": "https://www.booking.com/hotel/jp/sakurahoteruri-mu-li.html",
              "breakfast_included": 0,
              "address": "Bunkyo-ku Sendagi 3-43-15",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/213292807.jpg?k=35a946d4e61b2760a4a0ef6c7f8e9aca82152248801761212970ac2d2f7dc21e&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 59850,
                "min_total_price": 59850
              },
              "ratings": {
                "total": 8.2,
                "breakfast": 6.2,
                "cleanliness": 8.2
              }
            },
            {
              "name": "Centurion Ladies Hostel Ueno Park (Female Only)",
              "is_city_center": 0,
              "distance_to_cc": "4.50",
              "url": "https://www.booking.com/hotel/jp/centurion-cabin-ladies-hostel-ueno-park.html",
              "breakfast_included": 0,
              "address": "Taito ku Ueno 2-11-13",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/83036108.jpg?k=242552061297891944b6887bcdf4eeae963d89aed5ceb2d2d70eb4267b4f2e91&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 64573,
                "min_total_price": 64573
              },
              "ratings": {
                "total": 8.6,
                "breakfast": 0,
                "cleanliness": 8.6
              }
            },
            {
              "name": "Family Inn Saiko",
              "is_city_center": 0,
              "distance_to_cc": "6.10",
              "url": "https://www.booking.com/hotel/jp/family-inn-saiko.html",
              "breakfast_included": 0,
              "address": "Toshima-ku, Nagasaki 2-34-16",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/10785754.jpg?k=bf266543a2105cd9a8cd2e15dd4929c786d4aef3982b0e9dc68405e44b181cf2&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 67500,
                "min_total_price": 67500
              },
              "ratings": {
                "total": 9,
                "breakfast": 0,
                "cleanliness": 9.4
              }
            },
            {
              "name": "&AND HOSTEL MINOWA",
              "is_city_center": 0,
              "distance_to_cc": "7.25",
              "url": "https://www.booking.com/hotel/jp/amp-and-hostel-minowa.html",
              "breakfast_included": 0,
              "address": "Taito-ku Ryusen 3-39-5",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/182399567.jpg?k=5858c2a53ebfcc52d838bdc2d0322f8e26f5508dcfcf107d8bf979f32b41d979&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 70756,
                "min_total_price": 70756
              },
              "ratings": {
                "total": 8.3,
                "breakfast": 0,
                "cleanliness": 8.5
              }
            },
            {
              "name": "M-1 Tokyo Nakarokugo",
              "is_city_center": 0,
              "distance_to_cc": "15.20",
              "url": "https://www.booking.com/hotel/jp/m-1-tokyo-nakarokugo.html",
              "breakfast_included": 0,
              "address": "Ota-ku, Nakarokugo 2-34-4",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/163049792.jpg?k=7fc39b49093c41f47d6040cac88d14676535fdaa437190a3369149f73380f66a&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 79380,
                "min_total_price": 79380
              },
              "ratings": {
                "total": 9.2,
                "breakfast": 0,
                "cleanliness": 9.6
              }
            },
            {
              "name": "M-1 Tokyo Shimomaruko",
              "is_city_center": 0,
              "distance_to_cc": "13.80",
              "url": "https://www.booking.com/hotel/jp/m-1-tokyo-shimomaruko.html",
              "breakfast_included": 0,
              "address": "Ota-ku Shimomaruko 1-14-22",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/154906295.jpg?k=ace24b51daa19fa5010383402d6e135c1493a47e6f7238b05a702fc4dccb51aa&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 80190,
                "min_total_price": 80190
              },
              "ratings": {
                "total": 9.1,
                "breakfast": 0,
                "cleanliness": 9.6
              }
            },
            {
              "name": "M-1 Tokyo Higashikojiya",
              "is_city_center": 0,
              "distance_to_cc": "14.60",
              "url": "https://www.booking.com/hotel/jp/m-1-tokyo-dong-kouji-gu.html",
              "breakfast_included": 0,
              "address": "2-8-13 Higashikojiya Ota-ku",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/145040993.jpg?k=fb9e5e15d541dc96203dfbbd496bdbbf4f519a57119d27bf6f1c2808e11ffa55&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 81000,
                "min_total_price": 81000
              },
              "ratings": {
                "total": 9.1,
                "breakfast": 0,
                "cleanliness": 9.6
              }
            },
            {
              "name": "M-1 Tokyo Unoki",
              "is_city_center": 0,
              "distance_to_cc": "13.20",
              "url": "https://www.booking.com/hotel/jp/m-1-tokyo-ti-nomu.html",
              "breakfast_included": 0,
              "address": "3-34-16 Unoki, Ota-ku",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/152261865.jpg?k=ebcfaa8d50a3b9c4547d1a3572f5d5550ff422c987dd6339cf7408ded69ae092&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 81000,
                "min_total_price": 81000
              },
              "ratings": {
                "total": 9,
                "breakfast": 0,
                "cleanliness": 9.6
              }
            },
            {
              "name": "M-1 Tokyo Kamata",
              "is_city_center": 0,
              "distance_to_cc": "13.65",
              "url": "https://www.booking.com/hotel/jp/m-1-tokyo-pu-tian.html",
              "breakfast_included": 0,
              "address": "3-14-6 Kamata, Ota-ku",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/152803193.jpg?k=2316236a2e0385a84086b67b0b84fb18db7ef797efd16c172e7d714196cdc3cf&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 83430,
                "min_total_price": 83430
              },
              "ratings": {
                "total": 9,
                "breakfast": 0,
                "cleanliness": 9.6
              }
            },
            {
              "name": "M-1 Tokyo Omorinishi 2",
              "is_city_center": 0,
              "distance_to_cc": "12.15",
              "url": "https://www.booking.com/hotel/jp/m-1-tokyo-omorinishi-2.html",
              "breakfast_included": 0,
              "address": " Ota-ku Omorinishi 2-12-19",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/161369564.jpg?k=3bb00bc34cdbc2273fa4e490f2fe3ae8844b6cdf8bdb18895709619589ef63dc&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 83430,
                "min_total_price": 83430
              },
              "ratings": {
                "total": 9.2,
                "breakfast": 0,
                "cleanliness": 9.7
              }
            },
            {
              "name": "M-1 Tokyo Kamatahoncho",
              "is_city_center": 0,
              "distance_to_cc": "14.45",
              "url": "https://www.booking.com/hotel/jp/m-1-tokyo-kamatahoncho.html",
              "breakfast_included": 0,
              "address": "Kamata Honcho 1-6-9",
              "city": "Ota-ku",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/156606814.jpg?k=db361859bb1e0c863a1a6b0f06b394fd112bedc04407ba5364f17a8e0f40745b&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 84240,
                "min_total_price": 84240
              },
              "ratings": {
                "total": 9.1,
                "breakfast": 0,
                "cleanliness": 9.4
              }
            },
            {
              "name": "Nishitetsu Inn Nihonbashi",
              "is_city_center": 0,
              "distance_to_cc": "4.55",
              "url": "https://www.booking.com/hotel/jp/nishitetsu-inn-nihonbashi.html",
              "breakfast_included": 0,
              "address": "Chuo-ku Kofune-cho Nihonbashi  15-18 ",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/136415425.jpg?k=feb24648abcccc91f253de8e0399fffbacced35598704c95a7fa110be243388d&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 91800,
                "min_total_price": 91800
              },
              "ratings": {
                "total": 8.7,
                "breakfast": 8.7,
                "cleanliness": 8.9
              }
            },
            {
              "name": "Sakura Cross Hotel Akihabara",
              "is_city_center": 0,
              "distance_to_cc": "4.15",
              "url": "https://www.booking.com/hotel/jp/sakura-cross-akihabara.html",
              "breakfast_included": 0,
              "address": "Chiyoda-ku Kanda Sudacho 2-9-1",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/219873352.jpg?k=4f60c65c5aedbb95c4271526433b39aedf03b76893a0931373ee6e4f56cfa186&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 108000,
                "min_total_price": 108000
              },
              "ratings": {
                "total": 9,
                "breakfast": 0,
                "cleanliness": 9.4
              }
            },
            {
              "name": "Book Tea Bed SHINJUKU-GYOEN",
              "is_city_center": 0,
              "distance_to_cc": "1.65",
              "url": "https://www.booking.com/hotel/jp/book-tea-bed-shinjuku-gyoen.html",
              "breakfast_included": 0,
              "address": "Shinjuku-ku Shinjuku 1-12-8",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/196443857.jpg?k=bd76aa65fdf441fee3d7c0608e01891cae99d52bc7cbccb54f4af85ba71eb09a&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 132000,
                "min_total_price": 132000
              },
              "ratings": {
                "total": 8.5,
                "breakfast": 0,
                "cleanliness": 8.8
              }
            },
            {
              "name": "Sakura Cross Hotel Shinjuku East",
              "is_city_center": 0,
              "distance_to_cc": "2.10",
              "url": "https://www.booking.com/hotel/jp/sakura-cross-shinjuku-east.html",
              "breakfast_included": 0,
              "address": "Shinjuku-ku shinjuku 7-11-3",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/163696802.jpg?k=45fc7904686013d6ac52238fca876f9d5981c6411e9f4aabb79ea1edad34fb61&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 159000,
                "min_total_price": 159000
              },
              "ratings": {
                "total": 8.5,
                "breakfast": 0,
                "cleanliness": 9.1
              }
            },
            {
              "name": "Sakura Cross Hotel Ueno Iriya",
              "is_city_center": 0,
              "distance_to_cc": "6.50",
              "url": "https://www.booking.com/hotel/jp/sakurakurosuhoteruru-gu.html",
              "breakfast_included": 0,
              "address": "Taito-ku Negishi 3-18-18",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/140865247.jpg?k=e624177b1f7c0a9c70e72bd2c1522a6b717ea83b1de6f668f77d15d6ce3911b3&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 175500,
                "min_total_price": 175500
              },
              "ratings": {
                "total": 8.6,
                "breakfast": 0,
                "cleanliness": 9.1
              }
            },
            {
              "name": "HOTEL GRANHILL (Adult Only)",
              "is_city_center": 0,
              "distance_to_cc": "5.35",
              "url": "https://www.booking.com/hotel/jp/white.html",
              "breakfast_included": 0,
              "address": "Toshimaku Kitaotsuka 2-18-2",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/154870906.jpg?k=4dbde23f49b3a0cda78f421921b2c447245efd396e5b002538df1d5026f0d62a&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 216000,
                "min_total_price": 216000
              },
              "ratings": {
                "total": 8.5,
                "breakfast": 0,
                "cleanliness": 8.5
              }
            },
            {
              "name": "Asakusa Eight -Tokyo Condominium Hotel-",
              "is_city_center": 0,
              "distance_to_cc": "5.65",
              "url": "https://www.booking.com/hotel/jp/asakusa-eight.html",
              "breakfast_included": 0,
              "address": "Taito-ku, Motoasakusa 1-14-13 ",
              "city": "Tokyo",
              "country": "Japan",
              "image_url": "http://r-ec.bstatic.com/xdata/images/hotel/square60/195884109.jpg?k=48001d7851116898b23ab6133d03d36068e253aa40ef0efbeb6d8b435b297e42&o=",
              "price": {
                "currency": "JPY",
                "all_inclusive_price": 226200,
                "min_total_price": 218200
              },
              "ratings": {
                "total": 8.9,
                "breakfast": 0,
                "cleanliness": 9.2
              }
            }
          ];
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
                    //console.log(res)
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
        this.setState({...this.state, offers});
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
                //console.log("BOOKING API - AOK")
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
                    //console.log(res)
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

    showMoreHotels = num => {
        this.setState({
            ...this.state,
            hotelsDisplay: {
                ...this.state.hotelsDisplay,
                lastIndex: this.state.hotelsDisplay.lastIndex+num
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
        
        this.setState({
            ...this.state,
            everywhere: query.to === "Everywhere",
            query
        });
        
        if (query.to === "Everywhere") {
            console.log("YAAY EVERYWHERE");
        }
        else {
            this.searchFlightsHotels(query);
        }

    }

    searchFlightsHotels = query => {
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
          travelers: query.travelers
      };

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
        return flight.outboundFlight.totalDuration + flight.inboundFlight.totalDuration;
    }

    handleSortChange = (option, arrayName) => {
        let array = this.state[arrayName];

        if (arrayName === "hotels") {
            if (option === "closer to city center") {
                array = array.sort((a, b) => a.distance_to_cc - b.distance_to_cc);
            }
            else if (option === "best") {
                array = array.sort((x, y) => { return y.ratings.total - x.ratings.total; });
            }
            else if (option === "cheapest") {
                array = array.sort((a, b) => a.price.all_inclusive_price - b.price.all_inclusive_price);
            }
        }
        else if (arrayName === "offers") {
            if (option === "fastest") {
                array = array.sort((a, b) => this.getFlightDuration(a) - this.getFlightDuration(b));
            }
            else if (option === "best") {
                array = array.sort((x, y) => { return x.price - y.price || this.getFlightDuration(x) - this.getFlightDuration(y); });
            }
            else if (option === "cheapest") {
                array = array.sort((a, b) => a.price - b.price);
            }
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

    handleOnFlightVisibilityChange = (visible, category) => {
        if (visible && category === "flights") {
            this.showMoreFlights(10);
        }
        else if (visible && category === "hotels") {
            this.showMoreHotels(10);
        }
    }

    handleOnOptionSelected = (sortingCategory, option, category) => {
        let filterCategory = category === "flights" ? this.state.offersDisplay.filters[sortingCategory.toLowerCase()] : this.state.hotelsDisplay.filters[sortingCategory.toLowerCase().replace(" ", "_")];
        
        if (sortingCategory === "Airlines") {
            let index = filterCategory.indexOf(option);
            if (index === -1) {
                filterCategory.push(option);
            } else {
                filterCategory.splice(index, 1);
            }
        } 
        else if (sortingCategory === "Stops") {
            if (option === "direct") {
                filterCategory.direct = !filterCategory.direct;
            } else if (option === "up to 1") {
                filterCategory.up_to_1 = !filterCategory.up_to_1;
            } else if (option === "up to 2") {
                filterCategory.up_to_2 = !filterCategory.up_to_2;
            }
        }
        else if (sortingCategory === "City center") {
            filterCategory.is_city_center = !filterCategory.is_city_center;
        }
        else if (sortingCategory === "Breakfast") {
            filterCategory.breakfast_included = !filterCategory.breakfast_included;
        }


        if (category === "flights") {
            this.setState({
                ...this.state,
                offersDisplay: {
                    ...this.state.offersDisplay,
                    filters: {
                        ...this.state.offersDisplay.filters,
                        [sortingCategory.toLowerCase()]: filterCategory
                    }
                }
            });
        } else {
            this.setState({
                ...this.state,
                hotelsDisplay: {
                    ...this.state.hotelsDisplay,
                    filters: {
                        ...this.state.hotelsDisplay.filters,
                        [sortingCategory.toLowerCase().replace(" ", "_")]: filterCategory
                    }
                }
            });
        }

        
    }

    handleOnDestinationSelected = (destination, country) => {
      let query = {...this.state.query};
      query.to = destination;

      this.setState({
        ...this.state,
        everywhere: false,
        query
      });

      this.searchFlightsHotels(query);
    };

    render() {
        if (this.props.location.state && this.props.location.state.ok) {
            if (this.state.everywhere) {
                return <Everywhere onDestinationSelected={this.handleOnDestinationSelected} from={this.state.query.from} />;
            }
            else if (this.state.loading) {
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

                let filteredFlights = this.state.offers.filter((flight, index) => {
                    if (this.state.offersDisplay.filters.airlines.length > 0 && (!this.state.offersDisplay.filters.airlines.includes(flight.outboundFlight.carrier.Name) || !this.state.offersDisplay.filters.airlines.includes(flight.inboundFlight.carrier.Name))) {
                        return null;
                    }
                    else if (this.state.offersDisplay.filters.stops.direct && (flight.outboundFlight.stops.length !== 0 || flight.inboundFlight.stops.length !== 0)) {
                        return null;
                    }
                    else if (this.state.offersDisplay.filters.stops.up_to_1 && (flight.outboundFlight.stops.length > 1 || flight.inboundFlight.stops.length > 1)) {
                        return null;
                    }
                    else if (this.state.offersDisplay.filters.stops.up_to_2 && (flight.outboundFlight.stops.length > 2 || flight.inboundFlight.stops.length > 2)) {
                        return null;
                    }

                    return flight;
                });

                let displayedFlights = filteredFlights.filter((flight, index) => {
                    if (index <= this.state.offersDisplay.lastIndex) {
                        return flight;
                    }
                    return null;
                });
                let airlines = this.state.responseData.Carriers.map(carrier => carrier.Name);
                // DEV
                return (
                        <React.Fragment>
                        {
                            this.props.location.state && !this.props.location.state.ok ? <NotificationSystem location={this.props.location} history={this.props.history} /> : ""
                        }
                        <div className="content content--trip">
                            <section className="flights" >
                                <Sort onChange={(opt) => this.handleSortChange(opt, "offers")} options={["cheapest", "fastest", "best"]} />
                                <Filter onOptionSelected={(cat, opt) => this.handleOnOptionSelected(cat, opt, "flights")} categories={[{name: "Stops", options: ["direct", "up to 1", "up to 2"]}, {name: "Airlines", options: airlines}]} />
                                {
                                    displayedFlights.map((offer, index) => {
                                    if (index === this.state.offersDisplay.lastIndex){
                                        return (<VisibilitySensor key={index} onChange={(visible) => this.handleOnFlightVisibilityChange(visible, "flights")}>
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

                let filteredHotels = this.state.hotels.filter((hotel, index) => {
                    if (this.state.hotelsDisplay.filters.breakfast.breakfast_included && !hotel.breakfast_included) {
                        return null;
                    }
                    else if (this.state.hotelsDisplay.filters.city_center.is_city_center && !hotel.is_city_center) {
                        return null;
                    }

                    return hotel;
                });

                let displayedHotels = filteredHotels.filter((hotel, index) => {
                    if (index <= this.state.hotelsDisplay.lastIndex) {
                        return hotel;
                    }
                    return null;
                });

                return (
                    <React.Fragment>
                    {
                        this.props.location.state && !this.props.location.state.ok ? <NotificationSystem location={this.props.location} history={this.props.history} /> : ""
                    }
                    <div className="content content--trip">
                        <section className="hotels">
                            <Sort hotels={true} onChange={(opt) => this.handleSortChange(opt, "hotels")} options={["cheapest", "closer to city center", "best"]} />
                            <Filter hotels={true} onOptionSelected={(cat, opt) => this.handleOnOptionSelected(cat, opt, "hotels")} categories={[{name: "Breakfast", options: ["Breakfast included"]}, {name: "City center", options: ["In city center"]}]} />
                            {
                                displayedHotels.map((hotel, index) => {
                                    if (index === this.state.offersDisplay.lastIndex){
                                        return (<VisibilitySensor onChange={(visible) => this.handleOnFlightVisibilityChange(visible, "hotels")}>
                                                    <Hotel key={index} handleOnSelectHotel={(e) => this.handleOnSelectHotel(e, index)} id={index} hotel={hotel} />
                                                </VisibilitySensor>);
                                    }
                                    return <Hotel key={index} handleOnSelectHotel={(e) => this.handleOnSelectHotel(e, index)} id={index} hotel={hotel} />;
                                })
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
