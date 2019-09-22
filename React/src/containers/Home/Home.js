import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faPlaneDeparture, faBoxOpen, faHome } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
import Offer from '../../components/Home/Offer/Offer';
import Form from '../../components/Form/Form';
import NotificationSystem from '../../components/NotificationSystem/NotificationSystem';

const cities = [
  {
    "airport_code": "AAA",
    "airport_name": "Anaa Airport",
    "name": "Anaa",
    "lat": "-17.3595",
    "lon": "-145.494",
    "country": "French Polynesia"
  },
  {
    "airport_code": "AAE",
    "airport_name": "El Mellah Airport",
    "name": "El Tarf",
    "lat": "36.8236",
    "lon": "7.8103",
    "country": "Algeria"
  },
  {
    "airport_code": "AAL",
    "airport_name": "Aalborg Airport",
    "name": "Norresundby",
    "lat": "57.0952",
    "lon": "9.85606",
    "country": "Denmark"
  },
  {
    "airport_code": "AAM",
    "airport_name": "Mala Mala",
    "name": "Mala Mala",
    "lat": "-24.8",
    "lon": "31.5333",
    "country": "South Africa"
  },
  {
    "airport_code": "AAN",
    "airport_name": "Al Ain Airport",
    "name": "Ayn al Faydah",
    "lat": "24.25",
    "lon": "55.75",
    "country": "United Arab Emirates"
  },
  {
    "airport_code": "AAQ",
    "airport_name": "Olkhovka Airport",
    "name": "Novorossiysk",
    "lat": "44.9",
    "lon": "37.3167",
    "country": "Russia"
  },
  {
    "airport_code": "AAR",
    "airport_name": "Tirstrup Airport",
    "name": "Kolind",
    "lat": "56.3088",
    "lon": "10.6154",
    "country": "Denmark"
  },
  {
    "airport_code": "AAT",
    "airport_name": "Altay Airport",
    "name": "Altay",
    "lat": "47.7406",
    "lon": "88.0845",
    "country": "China"
  },
  {
    "airport_code": "AAX",
    "airport_name": "Romeu Zuma Airport",
    "name": "Araxá",
    "lat": "-19.5603",
    "lon": "-46.9653",
    "country": "Brazil"
  },
  {
    "airport_code": "AAY",
    "airport_name": "Al Gaidah Airport",
    "name": "Al Ghaydah",
    "lat": "16.1947",
    "lon": "52.1694",
    "country": "Yemen"
  },
  {
    "airport_code": "ABA",
    "airport_name": "Abakan",
    "name": "Abakan",
    "lat": "53.7167",
    "lon": "91.4333",
    "country": "Russian Federation"
  },
  {
    "airport_code": "ABC",
    "airport_name": "Los Llanos",
    "name": "Albacete",
    "lat": "38.9833",
    "lon": "-1.85",
    "country": "Spain"
  },
  {
    "airport_code": "ABD",
    "airport_name": "",
    "name": "Abadan",
    "lat": "30.3374",
    "lon": "48.3032",
    "country": "Iran"
  },
  {
    "airport_code": "ABE",
    "airport_name": "Lehigh Valley International Airport",
    "name": "Allentown",
    "lat": "40.6514",
    "lon": "-75.4342",
    "country": "United States"
  },
  {
    "airport_code": "ABI",
    "airport_name": "Abilene Regional Airport",
    "name": "Abilene",
    "lat": "32.4164",
    "lon": "-99.6803",
    "country": "United States"
  },
  {
    "airport_code": "ABJ",
    "airport_name": "Abidjan Port Bouet Airport",
    "name": "Abidjan",
    "lat": "5.2556",
    "lon": "-3.9292",
    "country": "Ivory Coast"
  },
  {
    "airport_code": "ABK",
    "airport_name": "Kabri Dar",
    "name": "Kabri Dar",
    "lat": "6.73719",
    "lon": "44.2797",
    "country": "Ethiopia"
  },
  {
    "airport_code": "ABL",
    "airport_name": "Ambler Airport",
    "name": "Kiana",
    "lat": "67.1058",
    "lon": "-157.854",
    "country": "United States"
  },
  {
    "airport_code": "ABM",
    "airport_name": "Bamaga Airport",
    "name": "Seisia",
    "lat": "-10.9438",
    "lon": "142.453",
    "country": "Australia"
  },
  {
    "airport_code": "ABQ",
    "airport_name": "Albuquerque International Airport",
    "name": "Albuquerque",
    "lat": "35.0494",
    "lon": "-106.625",
    "country": "United States"
  },
  {
    "airport_code": "ABR",
    "airport_name": "Aberdeen Regional Airport",
    "name": "Aberdeen",
    "lat": "45.4536",
    "lon": "-98.4189",
    "country": "United States"
  },
  {
    "airport_code": "ABS",
    "airport_name": "Abu Simbel Airport",
    "name": "Abu Simbel",
    "lat": "22.3722",
    "lon": "31.6125",
    "country": "Egypt"
  },
  {
    "airport_code": "ABT",
    "airport_name": "Al Baha Airport",
    "name": "Al Aqiq",
    "lat": "20.2961",
    "lon": "41.6342",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "ABV",
    "airport_name": "Abuja International Airport",
    "name": "Gwagwa",
    "lat": "9.0056",
    "lon": "7.2661",
    "country": "Nigeria"
  },
  {
    "airport_code": "ABX",
    "airport_name": "Albury Airport",
    "name": "Albury",
    "lat": "-36.0678",
    "lon": "146.956",
    "country": "Australia"
  },
  {
    "airport_code": "ABY",
    "airport_name": "Southwest Georgia Regional Airport",
    "name": "Albany",
    "lat": "31.5328",
    "lon": "-84.1867",
    "country": "United States"
  },
  {
    "airport_code": "ABZ",
    "airport_name": "Aberdeen Dyce International Airport",
    "name": "Aberdeen",
    "lat": "57.2004",
    "lon": "-2.20373",
    "country": "United Kingdom"
  },
  {
    "airport_code": "ACA",
    "airport_name": "General Juan N Alvarez International Airport",
    "name": "Acapulco",
    "lat": "16.7561",
    "lon": "-99.7536",
    "country": "Mexico"
  },
  {
    "airport_code": "ACC",
    "airport_name": "Kotoka International Airport",
    "name": "Accra",
    "lat": "5.5964",
    "lon": "-0.17",
    "country": "Ghana"
  },
  {
    "airport_code": "ACE",
    "airport_name": "Arrecife Airport",
    "name": "San Bartolomé",
    "lat": "28.9521",
    "lon": "-13.6085",
    "country": "Spain"
  },
  {
    "airport_code": "ACH",
    "airport_name": "Altenrhein Airport",
    "name": "Altenrhein",
    "lat": "47.4887",
    "lon": "9.55376",
    "country": "Switzerland"
  },
  {
    "airport_code": "ACI",
    "airport_name": "The Blaye Airport",
    "name": "St. Peter Port",
    "lat": "49.7134",
    "lon": "-2.22089",
    "country": "United Kingdom"
  },
  {
    "airport_code": "ACK",
    "airport_name": "Nantucket Memorial Airport",
    "name": "Nantucket",
    "lat": "41.2568",
    "lon": "-70.0649",
    "country": "United States"
  },
  {
    "airport_code": "ACP",
    "airport_name": "Sahand Airport",
    "name": "Sahand",
    "lat": "68.1609",
    "lon": "-151.696",
    "country": "Iran"
  },
  {
    "airport_code": "ACS",
    "airport_name": "",
    "name": "Achinsk",
    "lat": "47.7006",
    "lon": "18.0064",
    "country": "Russia"
  },
  {
    "airport_code": "ACT",
    "airport_name": "Waco Regional Airport",
    "name": "Waco",
    "lat": "31.609",
    "lon": "-97.2234",
    "country": "United States"
  },
  {
    "airport_code": "ACV",
    "airport_name": "Arcata Airport",
    "name": "Mckinleyville",
    "lat": "40.9698",
    "lon": "-124.108",
    "country": "United States"
  },
  {
    "airport_code": "ACX",
    "airport_name": "Xingyi",
    "name": "Xingyi",
    "lat": "25.0887",
    "lon": "104.89",
    "country": "China"
  },
  {
    "airport_code": "ACY",
    "airport_name": "Atlantic City International Airport",
    "name": "Egg Harbor City",
    "lat": "39.4512",
    "lon": "-74.5716",
    "country": "United States"
  },
  {
    "airport_code": "ACZ",
    "airport_name": "Zabol A/P",
    "name": "Zabol",
    "lat": "31.0385",
    "lon": "61.4962",
    "country": "Iran"
  },
  {
    "airport_code": "ADA",
    "airport_name": "Sakirpasa Airport",
    "name": "Adana",
    "lat": "36.9811",
    "lon": "35.2803",
    "country": "Turkey"
  },
  {
    "airport_code": "ADB",
    "airport_name": "Gaziemir Airport",
    "name": "Azmir",
    "lat": "38.32",
    "lon": "27.1603",
    "country": "Turkey"
  },
  {
    "airport_code": "ADD",
    "airport_name": "Bole International Airport",
    "name": "Addis Ababa",
    "lat": "8.9783",
    "lon": "38.8011",
    "country": "Ethiopia"
  },
  {
    "airport_code": "ADE",
    "airport_name": "Aden International Airport",
    "name": "Ash Shaykh Uthman",
    "lat": "12.8278",
    "lon": "45.0306",
    "country": "Yemen"
  },
  {
    "airport_code": "ADF",
    "airport_name": "Adiyaman Airport",
    "name": "Adiyaman",
    "lat": "37.8099",
    "lon": "38.3357",
    "country": "Turkey"
  },
  {
    "airport_code": "ADJ",
    "airport_name": "Al Matar Airport",
    "name": "Amman",
    "lat": "31.973",
    "lon": "35.9822",
    "country": "Jordan"
  },
  {
    "airport_code": "ADK",
    "airport_name": "Adak Airport",
    "name": "Adak",
    "lat": "51.88",
    "lon": "-176.639",
    "country": "United States"
  },
  {
    "airport_code": "ADL",
    "airport_name": "Adelaide International Airport",
    "name": "Adelaide",
    "lat": "-34.9464",
    "lon": "138.529",
    "country": "Australia"
  },
  {
    "airport_code": "ADQ",
    "airport_name": "Kodiak Airport",
    "name": "Kodiak",
    "lat": "57.7545",
    "lon": "-152.512",
    "country": "United States"
  },
  {
    "airport_code": "ADU",
    "airport_name": "Ardabil Airport",
    "name": "Ardabil",
    "lat": "38.2465",
    "lon": "48.2951",
    "country": "Iran"
  },
  {
    "airport_code": "ADX",
    "airport_name": "Leuchars Airport",
    "name": "St. Andrews",
    "lat": "56.377",
    "lon": "-2.86117",
    "country": "United Kingdom"
  },
  {
    "airport_code": "ADZ",
    "airport_name": "Sesquicentenario Airport",
    "name": "San Andrés",
    "lat": "12.5811",
    "lon": "-81.7092",
    "country": "Colombia"
  },
  {
    "airport_code": "AEH",
    "airport_name": "Abeche Airport",
    "name": "Abéché",
    "lat": "13.8486",
    "lon": "20.8472",
    "country": "Chad"
  },
  {
    "airport_code": "AEP",
    "airport_name": "Aeroparque Jorge Newbery",
    "name": "Buenos Aires",
    "lat": "-34.5617",
    "lon": "-58.4113",
    "country": "Argentina"
  },
  {
    "airport_code": "AER",
    "airport_name": "Adler Airport",
    "name": "Sochi",
    "lat": "43.447",
    "lon": "39.9552",
    "country": "Russia"
  },
  {
    "airport_code": "AES",
    "airport_name": "Vigra Airport",
    "name": "Vigra",
    "lat": "62.5607",
    "lon": "6.11129",
    "country": "Norway"
  },
  {
    "airport_code": "AET",
    "airport_name": "Allakaket Airport",
    "name": "Allakaket",
    "lat": "66.55",
    "lon": "-152.65",
    "country": "United States"
  },
  {
    "airport_code": "AEX",
    "airport_name": "Alexandria International Airport",
    "name": "Alexandria",
    "lat": "31.323",
    "lon": "-92.5417",
    "country": "United States"
  },
  {
    "airport_code": "AEY",
    "airport_name": "Akureyri Airport",
    "name": "Akureyri",
    "lat": "65.6561",
    "lon": "-18.0923",
    "country": "Iceland"
  },
  {
    "airport_code": "AFA",
    "airport_name": "San Rafael Airport",
    "name": "San Rafael",
    "lat": "-34.5886",
    "lon": "-68.4028",
    "country": "Argentina"
  },
  {
    "airport_code": "AFL",
    "airport_name": "Alta Floresta Airport",
    "name": "Alta Floresta",
    "lat": "-9.8661",
    "lon": "-56.1044",
    "country": "Brazil"
  },
  {
    "airport_code": "AFS",
    "airport_name": "Zarafshan Airport",
    "name": "Zarafshan",
    "lat": "41.6136",
    "lon": "64.2331",
    "country": "Uzbekistan"
  },
  {
    "airport_code": "AFT",
    "airport_name": "Afutara Aerodrome",
    "name": "Afutara",
    "lat": "-9.18333",
    "lon": "160.95",
    "country": "Solomon Islands"
  },
  {
    "airport_code": "AFZ",
    "airport_name": "Sabzevar Airport",
    "name": "Sabzevar",
    "lat": "36.1903",
    "lon": "57.7094",
    "country": "Iran"
  },
  {
    "airport_code": "AGA",
    "airport_name": "Almassira Airport",
    "name": "Agadir",
    "lat": "30.3833",
    "lon": "-9.55",
    "country": "Morocco"
  },
  {
    "airport_code": "AGF",
    "airport_name": "La Garenne Airport",
    "name": "Laplume",
    "lat": "44.1736",
    "lon": "0.59223",
    "country": "France"
  },
  {
    "airport_code": "AGH",
    "airport_name": "Angelholm Airport",
    "name": "Angelholm",
    "lat": "56.2873",
    "lon": "12.8675",
    "country": "Sweden"
  },
  {
    "airport_code": "AGL",
    "airport_name": "Wanigela",
    "name": "Wanigela",
    "lat": "-9.33333",
    "lon": "149.15",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "AGM",
    "airport_name": "Angmagssalik Airport",
    "name": "Angmassalik",
    "lat": "65.6667",
    "lon": "-37.6667",
    "country": "Greenland"
  },
  {
    "airport_code": "AGN",
    "airport_name": "Angoon Airport",
    "name": "Angoon",
    "lat": "57.4996",
    "lon": "-134.577",
    "country": "United States"
  },
  {
    "airport_code": "AGP",
    "airport_name": "Malaga Airport",
    "name": "Malaga",
    "lat": "36.6749",
    "lon": "-4.49298",
    "country": "Spain"
  },
  {
    "airport_code": "AGR",
    "airport_name": "Agra Airport",
    "name": "Agra",
    "lat": "27.1632",
    "lon": "77.9788",
    "country": "India"
  },
  {
    "airport_code": "AGS",
    "airport_name": "Bush Field Airport",
    "name": "Augusta",
    "lat": "33.3735",
    "lon": "-81.9732",
    "country": "United States"
  },
  {
    "airport_code": "AGT",
    "airport_name": "Alejo Garcia Airport",
    "name": "Presidente Franco",
    "lat": "-25.5266",
    "lon": "-54.6226",
    "country": "Paraguay"
  },
  {
    "airport_code": "AGU",
    "airport_name": "Aguascalientes Airport",
    "name": "Aguascalientes",
    "lat": "21.7047",
    "lon": "-102.317",
    "country": "Mexico"
  },
  {
    "airport_code": "AGV",
    "airport_name": "Acarigua",
    "name": "Acarigua",
    "lat": "9.55194",
    "lon": "-69.2367",
    "country": "Venezuela"
  },
  {
    "airport_code": "AGX",
    "airport_name": "Agatti Island Airport",
    "name": "Agatti Island",
    "lat": "10.8415",
    "lon": "72.175",
    "country": "India"
  },
  {
    "airport_code": "AHB",
    "airport_name": "Abha Airport",
    "name": "Hajlah",
    "lat": "18.24",
    "lon": "42.6556",
    "country": "Saudi Arabia"
  },
  
  {
    "airport_code": "AHE",
    "airport_name": "Ahe Airport",
    "name": "Ahe",
    "lat": "-14.5",
    "lon": "-1.3",
    "country": "French Polynesia"
  },
  {
    "airport_code": "AHO",
    "airport_name": "Alghero Airport",
    "name": "Alghero",
    "lat": "40.6319",
    "lon": "8.29279",
    "country": "Italy"
  },
  {
    "airport_code": "AHS",
    "airport_name": "Ahuas Airport",
    "name": "Auas",
    "lat": "15.4534",
    "lon": "-84.4041",
    "country": "Honduras"
  },
  {
    "airport_code": "AHU",
    "airport_name": "Cote du Rif Airport",
    "name": "Al Hoceima",
    "lat": "35.1781",
    "lon": "-3.8383",
    "country": "Morocco"
  },
  {
    "airport_code": "AIA",
    "airport_name": "Alliance Municipal Airport",
    "name": "Alliance",
    "lat": "42.0622",
    "lon": "-102.81",
    "country": "United States"
  },
  {
    "airport_code": "AIN",
    "airport_name": "Wainwright Airport",
    "name": "Wainwright",
    "lat": "70.6139",
    "lon": "-159.857",
    "country": "United States"
  },
  {
    "airport_code": "AIT",
    "airport_name": "Aitutaki Airport",
    "name": "Aitutaki",
    "lat": "-18.8299",
    "lon": "-159.765",
    "country": "Cook Islands"
  },
  {
    "airport_code": "AIU",
    "airport_name": "Atiu Island",
    "name": "Atiu Island",
    "lat": "-20.0333",
    "lon": "-158.1",
    "country": "Cook Islands"
  },
  {
    "airport_code": "AJA",
    "airport_name": "Campo Dell Oro Airport",
    "name": "Ajaccio",
    "lat": "41.9204",
    "lon": "8.79778",
    "country": "France"
  },
  {
    "airport_code": "AJF",
    "airport_name": "Al Jouf Airport",
    "name": "Sakakah",
    "lat": "29.7897",
    "lon": "40.1039",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "AJI",
    "airport_name": "Agri Airport",
    "name": "Agrı",
    "lat": "39.7239",
    "lon": "43.0618",
    "country": "Turkey"
  },
  {
    "airport_code": "AJL",
    "airport_name": "Aizwal Airport",
    "name": "Aizawl",
    "lat": "23.7361",
    "lon": "92.8083",
    "country": "India"
  },
  {
    "airport_code": "AJN",
    "airport_name": "Comoros",
    "name": "Anjouan",
    "lat": "-12.2234",
    "lon": "44.3709",
    "country": "Comoros"
  },
  {
    "airport_code": "AJR",
    "airport_name": "Arvidsjaur Airport",
    "name": "Arvidsjaur",
    "lat": "65.592",
    "lon": "19.2647",
    "country": "Sweden"
  },
  {
    "airport_code": "AJU",
    "airport_name": "Santa Maria Airport",
    "name": "Aracaju",
    "lat": "-10.985",
    "lon": "-37.0733",
    "country": "Brazil"
  },
  {
    "airport_code": "AKA",
    "airport_name": "Ankang Airport",
    "name": "Ankang",
    "lat": "32.7026",
    "lon": "108.912",
    "country": "China"
  },
  {
    "airport_code": "AKB",
    "airport_name": "Atka Airport",
    "name": "Atka",
    "lat": "52.2217",
    "lon": "-174.204",
    "country": "United States"
  },
  {
    "airport_code": "AKF",
    "airport_name": "Kufra Airport",
    "name": "Kufrah",
    "lat": "24.1819",
    "lon": "23.3189",
    "country": "Libya"
  },
  {
    "airport_code": "AKI",
    "airport_name": "Akiak Airport",
    "name": "Bethel",
    "lat": "60.8866",
    "lon": "-161.218",
    "country": "United States"
  },
  {
    "airport_code": "AKJ",
    "airport_name": "Asahikawa Airport",
    "name": "Asahikawa-shi",
    "lat": "43.665",
    "lon": "142.453",
    "country": "Japan"
  },
  {
    "airport_code": "AKK",
    "airport_name": "Akhiok Airport",
    "name": "Kodiak",
    "lat": "56.95",
    "lon": "-154.167",
    "country": "United States"
  },
  {
    "airport_code": "AKL",
    "airport_name": "Auckland International Airport",
    "name": "Manukau City",
    "lat": "-37.0085",
    "lon": "174.782",
    "country": "New Zealand"
  },
  {
    "airport_code": "AKN",
    "airport_name": "King Salmon Airport",
    "name": "King Salmon",
    "lat": "58.6775",
    "lon": "-156.655",
    "country": "United States"
  },
  {
    "airport_code": "AKP",
    "airport_name": "Anaktuvuk Pass Airport",
    "name": "Anaktuvuk Pass",
    "lat": "68.1916",
    "lon": "-151.79",
    "country": "United States"
  },
  {
    "airport_code": "AKS",
    "airport_name": "Kroonstad Airport",
    "name": "Kroonstad",
    "lat": "-27.6667",
    "lon": "27.3167",
    "country": "South Africa"
  },
  {
    "airport_code": "AKU",
    "airport_name": "Aksu Airport",
    "name": "Aksu",
    "lat": "41.171",
    "lon": "80.1982",
    "country": "China"
  },
  {
    "airport_code": "AKV",
    "airport_name": "Akulivik Airport",
    "name": "Chisasibi",
    "lat": "60.8142",
    "lon": "-78.1509",
    "country": "Canada"
  },
  {
    "airport_code": "AKX",
    "airport_name": "Aktyubinsk Airport",
    "name": "Aqtobe",
    "lat": "50.2362",
    "lon": "57.2115",
    "country": "Kazakhstan"
  },
  {
    "airport_code": "AKY",
    "airport_name": "Sittwe Airport",
    "name": "Sittwe",
    "lat": "20.1303",
    "lon": "92.8803",
    "country": "Myanmar"
  },
  {
    "airport_code": "ALA",
    "airport_name": "Alma Ata Airport",
    "name": "Almaty",
    "lat": "43.3608",
    "lon": "77.0319",
    "country": "Kazakhstan"
  },
  {
    "airport_code": "ALB",
    "airport_name": "Albany International Airport",
    "name": "Latham",
    "lat": "42.7426",
    "lon": "-73.809",
    "country": "United States"
  },
  {
    "airport_code": "ALC",
    "airport_name": "Alicante Airport",
    "name": "Elx",
    "lat": "38.2844",
    "lon": "-0.5576",
    "country": "Spain"
  },
  {
    "airport_code": "ALF",
    "airport_name": "Alta Airport",
    "name": "Alta",
    "lat": "69.9793",
    "lon": "23.3571",
    "country": "Norway"
  },
  {
    "airport_code": "ALG",
    "airport_name": "Houari Boumediene Airport",
    "name": "Algiers",
    "lat": "36.6993",
    "lon": "3.21935",
    "country": "Algeria"
  },
  {
    "airport_code": "ALH",
    "airport_name": "Albany Airport",
    "name": "Albany",
    "lat": "-34.9447",
    "lon": "117.808",
    "country": "Australia"
  },
  {
    "airport_code": "ALM",
    "airport_name": "Alamogordo White Sands Regional Airport",
    "name": "Alamogordo",
    "lat": "32.8407",
    "lon": "-105.994",
    "country": "United States"
  },
  {
    "airport_code": "ALO",
    "airport_name": "Waterloo Municipal Airport",
    "name": "Waterloo",
    "lat": "42.5509",
    "lon": "-92.3951",
    "country": "United States"
  },
  {
    "airport_code": "ALP",
    "airport_name": "Aleppo International Airport",
    "name": "Djibrine",
    "lat": "36.1808",
    "lon": "37.2267",
    "country": "Syria"
  },
  {
    "airport_code": "ALS",
    "airport_name": "San Luis Valley Regional Airport",
    "name": "Alamosa",
    "lat": "37.4444",
    "lon": "-105.865",
    "country": "United States"
  },
  {
    "airport_code": "ALW",
    "airport_name": "Walla Walla Regional Airport",
    "name": "Walla Walla",
    "lat": "46.0879",
    "lon": "-118.283",
    "country": "United States"
  },
  {
    "airport_code": "ALY",
    "airport_name": "An-Nuzhah Airport",
    "name": "Alexandria",
    "lat": "31.1845",
    "lon": "29.9491",
    "country": "Egypt"
  },
  
  {
    "airport_code": "AMA",
    "airport_name": "Amarillo International Airport",
    "name": "Amarillo",
    "lat": "35.2177",
    "lon": "-101.706",
    "country": "United States"
  },
  {
    "airport_code": "AMD",
    "airport_name": "Sardar Vallabhbhai Patel International Airport",
    "name": "Ahmedabad",
    "lat": "23.0728",
    "lon": "72.6328",
    "country": "India"
  },
  {
    "airport_code": "AMH",
    "airport_name": "Ethiopia",
    "name": "Arba Mintch",
    "lat": "6.01327",
    "lon": "37.5405",
    "country": "Ethiopia"
  },
  {
    "airport_code": "AMI",
    "airport_name": "Selaparang",
    "name": "Mataram",
    "lat": "-8.562",
    "lon": "116.098",
    "country": "Indonesia"
  },
  {
    "airport_code": "AMM",
    "airport_name": "Queen Alia International Airport",
    "name": "Amman",
    "lat": "31.7231",
    "lon": "35.9936",
    "country": "Jordan"
  },
  {
    "airport_code": "AMQ",
    "airport_name": "Pattimura Airport",
    "name": "Ambon",
    "lat": "-3.7067",
    "lon": "128.078",
    "country": "Indonesia"
  },
  {
    "airport_code": "AMS",
    "airport_name": "Schiphol Airport",
    "name": "Schiphol Zuid",
    "lat": "52.3122",
    "lon": "4.77511",
    "country": "Netherlands"
  },
  {
    "airport_code": "AMV",
    "airport_name": "Amderma Airport",
    "name": "Nar'yan-Mar",
    "lat": "69.7638",
    "lon": "61.5586",
    "country": "Russia"
  },
  {
    "airport_code": "AMY",
    "airport_name": "Ambatomainty",
    "name": "Ambatomainty",
    "lat": "38.4819",
    "lon": "-100.608",
    "country": "Madagascar"
  },
  {
    "airport_code": "ANC",
    "airport_name": "Anchorage International Airport",
    "name": "Anchorage",
    "lat": "61.1767",
    "lon": "-149.961",
    "country": "United States"
  },
  {
    "airport_code": "ANE",
    "airport_name": "Aéroport d'Angers-Marcé",
    "name": "Seiches-sur-le-Loir",
    "lat": "47.5603",
    "lon": "-0.312222",
    "country": "France"
  },
  {
    "airport_code": "ANF",
    "airport_name": "Cerro Moreno International Airport",
    "name": "Antofagasta",
    "lat": "-23.44",
    "lon": "-70.4419",
    "country": "Chile"
  },
  {
    "airport_code": "ANG",
    "airport_name": "Brie Champniers Airport",
    "name": "Champniers",
    "lat": "45.7274",
    "lon": "0.21835",
    "country": "France"
  },
  {
    "airport_code": "ANI",
    "airport_name": "Aniak Airport",
    "name": "Bethel",
    "lat": "61.5742",
    "lon": "-159.535",
    "country": "United States"
  },
  {
    "airport_code": "ANM",
    "airport_name": "Madagascar",
    "name": "Antalaha",
    "lat": "-18.7772",
    "lon": "46.8543",
    "country": "Madagascar"
  },
  {
    "airport_code": "ANR",
    "airport_name": "Deurne Airport",
    "name": "Antwerp",
    "lat": "51.1896",
    "lon": "4.45236",
    "country": "Belgium"
  },
  {
    "airport_code": "ANU",
    "airport_name": "V C Bird International Airport",
    "name": "Carlisle",
    "lat": "17.1375",
    "lon": "-61.79",
    "country": "Antigua and Barbuda"
  },
  {
    "airport_code": "ANV",
    "airport_name": "Anvik Airport",
    "name": "Anvik",
    "lat": "62.65",
    "lon": "-160.217",
    "country": "United States"
  },
  {
    "airport_code": "ANX",
    "airport_name": "Andoya Airport",
    "name": "Andenes",
    "lat": "69.3088",
    "lon": "16.1236",
    "country": "Norway"
  },
  {
    "airport_code": "AOC",
    "airport_name": "Altenburg Nobitz",
    "name": "Altenburg",
    "lat": "50.9794",
    "lon": "12.5111",
    "country": "Germany"
  },
  {
    "airport_code": "AOE",
    "airport_name": "Anadolu University Airport",
    "name": "Eskişehir",
    "lat": "39.7905",
    "lon": "30.5172",
    "country": "Turkey"
  },
  {
    "airport_code": "AOI",
    "airport_name": "Falconara Airport",
    "name": "Falconara Marittima",
    "lat": "43.6158",
    "lon": "13.3634",
    "country": "Italy"
  },
  {
    "airport_code": "AOJ",
    "airport_name": "Aomori Airport",
    "name": "Aomori-shi",
    "lat": "40.7357",
    "lon": "140.69",
    "country": "Japan"
  },
  {
    "airport_code": "AOK",
    "airport_name": "Karpathos Airport",
    "name": "Karpathos",
    "lat": "35.4239",
    "lon": "27.1472",
    "country": "Greece"
  },
  {
    "airport_code": "AOO",
    "airport_name": "Altoona-Blair County Airport",
    "name": "Martinsburg",
    "lat": "40.2952",
    "lon": "-78.324",
    "country": "United States"
  },
  {
    "airport_code": "AOR",
    "airport_name": "Sultan Abdul Halim Airport",
    "name": "Kepala Batas",
    "lat": "6.1947",
    "lon": "100.404",
    "country": "Malaysia"
  },
  {
    "airport_code": "AOS",
    "airport_name": "Amook Bay Seaplane Base",
    "name": "Amook",
    "lat": "57.4672",
    "lon": "-153.839",
    "country": "United States"
  },
  
  {
    "airport_code": "APF",
    "airport_name": "Naples Municipal Airport",
    "name": "Naples",
    "lat": "26.1483",
    "lon": "-81.7745",
    "country": "United States"
  },
  {
    "airport_code": "APK",
    "airport_name": "French Polynesia",
    "name": "Apataki",
    "lat": "-8.64687",
    "lon": "-131.787",
    "country": "French Polynesia"
  },
  {
    "airport_code": "APL",
    "airport_name": "Nampula Airport",
    "name": "Nampula",
    "lat": "-15.1",
    "lon": "39.2814",
    "country": "Mozambique"
  },
  {
    "airport_code": "APN",
    "airport_name": "Alpena County Regional Airport",
    "name": "Alpena",
    "lat": "45.07",
    "lon": "-83.5683",
    "country": "United States"
  },
  {
    "airport_code": "APO",
    "airport_name": "Apartado Airport",
    "name": "Apartadó",
    "lat": "7.88361",
    "lon": "-76.6321",
    "country": "Colombia"
  },
  {
    "airport_code": "APW",
    "airport_name": "Faleolo Airport",
    "name": "Apia",
    "lat": "-13.8255",
    "lon": "-171.993",
    "country": "Samoa"
  },
  {
    "airport_code": "AQG",
    "airport_name": "Anqing Airport",
    "name": "Anqing",
    "lat": "30.5167",
    "lon": "117.033",
    "country": "China"
  },
  {
    "airport_code": "AQI",
    "airport_name": "Hafr Al Batin Airport",
    "name": "Qaisumah",
    "lat": "28.3317",
    "lon": "46.13",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "AQJ",
    "airport_name": "Aqaba International Airport",
    "name": "Aqaba",
    "lat": "29.6119",
    "lon": "35.0178",
    "country": "Jordan"
  },
  {
    "airport_code": "AQP",
    "airport_name": "Rodriguez Ballon Airport",
    "name": "Arequipa",
    "lat": "-16.3372",
    "lon": "-71.5692",
    "country": "Peru"
  },
  {
    "airport_code": "ARC",
    "airport_name": "Arctic Village Airport",
    "name": "Arctic Village",
    "lat": "68.1167",
    "lon": "-145.583",
    "country": "United States"
  },
  {
    "airport_code": "ARD",
    "airport_name": "Alor Island",
    "name": "Alor Island",
    "lat": "35.1437",
    "lon": "-93.1848",
    "country": "Indonesia"
  },
  {
    "airport_code": "ARH",
    "airport_name": "Arkhangelsk Airport",
    "name": "Arkhangel'sk",
    "lat": "64.4465",
    "lon": "40.4242",
    "country": "Russia"
  },
  {
    "airport_code": "ARI",
    "airport_name": "Chacalluta Airport",
    "name": "Arica",
    "lat": "-18.3458",
    "lon": "-70.3358",
    "country": "Chile"
  },
  {
    "airport_code": "ARK",
    "airport_name": "Arusha Airport",
    "name": "Arusha",
    "lat": "-3.36515",
    "lon": "36.6738",
    "country": "Tanzania"
  },
  {
    "airport_code": "ARM",
    "airport_name": "Armidale Airport",
    "name": "Armidale",
    "lat": "-30.5308",
    "lon": "151.618",
    "country": "Australia"
  },
  {
    "airport_code": "ARN",
    "airport_name": "Arlanda Airport",
    "name": "Märst",
    "lat": "59.6521",
    "lon": "17.9317",
    "country": "Sweden"
  },
  {
    "airport_code": "ART",
    "airport_name": "Watertown International Airport",
    "name": "Dexter",
    "lat": "43.9942",
    "lon": "-76.0232",
    "country": "United States"
  },
  {
    "airport_code": "ARU",
    "airport_name": "Aracatuba Airport",
    "name": "Araçatuba",
    "lat": "-21.1436",
    "lon": "-50.4261",
    "country": "Brazil"
  },
  {
    "airport_code": "ARV",
    "airport_name": "Lakelan-Noble F. Lee Memerial Field Airport",
    "name": "Woodruff",
    "lat": "45.9296",
    "lon": "-89.7371",
    "country": "United States"
  },
  {
    "airport_code": "ARW",
    "airport_name": "Ceala Airport",
    "name": "Arad",
    "lat": "46.1805",
    "lon": "21.2609",
    "country": "Romania"
  },
  {
    "airport_code": "ASA",
    "airport_name": "Assab",
    "name": "Assab",
    "lat": "31.4124",
    "lon": "-97.0528",
    "country": "Ethiopia"
  },
  {
    "airport_code": "ASB",
    "airport_name": "Ashkhabad Northwest Airport",
    "name": "Ashgabat",
    "lat": "37.9842",
    "lon": "58.3294",
    "country": "Turkmenistan"
  },
  {
    "airport_code": "ASD",
    "airport_name": "Andros Town Airport",
    "name": "Fresh Creek",
    "lat": "24.6978",
    "lon": "-77.7961",
    "country": "Bahamas"
  },
  {
    "airport_code": "ASE",
    "airport_name": "Aspen Pitkin County Airport-Sardy Field",
    "name": "Aspen",
    "lat": "39.2197",
    "lon": "-106.864",
    "country": "United States"
  },
  {
    "airport_code": "ASF",
    "airport_name": "Astrakhan Southeast Airport",
    "name": "Astrakhan'",
    "lat": "46.2971",
    "lon": "48.0515",
    "country": "Russia"
  },
  {
    "airport_code": "ASI",
    "airport_name": "Wideawake Fld",
    "name": "Georgetown, Ascension Island",
    "lat": "-7.93586",
    "lon": "-14.4081",
    "country": "St. Helena"
  },
  {
    "airport_code": "ASJ",
    "airport_name": "Amami Airport",
    "name": "Amami O Shima",
    "lat": "28.431",
    "lon": "129.712",
    "country": "Japan"
  },
  {
    "airport_code": "ASM",
    "airport_name": "Yohannes Iv International Airport",
    "name": "Asmara",
    "lat": "15.2906",
    "lon": "38.9103",
    "country": "Eritrea"
  },
  {
    "airport_code": "ASO",
    "airport_name": "Ethiopia",
    "name": "Asosa",
    "lat": "10.0611",
    "lon": "34.5344",
    "country": "Ethiopia"
  },
  {
    "airport_code": "ASP",
    "airport_name": "Alice Springs Airport",
    "name": "Alice Springs",
    "lat": "-23.802",
    "lon": "133.892",
    "country": "Australia"
  },
  {
    "airport_code": "ASR",
    "airport_name": "Erkilet Airport",
    "name": "Kayseri",
    "lat": "38.7708",
    "lon": "35.4939",
    "country": "Turkey"
  },
  {
    "airport_code": "ASU",
    "airport_name": "Silvio Pettirossi International Airport",
    "name": "Colonia Mariano Roque Alonso",
    "lat": "-25.2397",
    "lon": "-57.5189",
    "country": "Paraguay"
  },
  {
    "airport_code": "ASV",
    "airport_name": "Amboseli",
    "name": "Amboseli",
    "lat": "-2.63333",
    "lon": "37.25",
    "country": "Kenya"
  },
  {
    "airport_code": "ASW",
    "airport_name": "Aswan Airport",
    "name": "Aswan",
    "lat": "23.965",
    "lon": "32.8217",
    "country": "Egypt"
  },
  {
    "airport_code": "ATB",
    "airport_name": "Atbara",
    "name": "Atbara",
    "lat": "17.7",
    "lon": "33.9833",
    "country": "Sudan"
  },
  {
    "airport_code": "ATC",
    "airport_name": "Arthur's Town Airport",
    "name": "Arthur Town",
    "lat": "24.6287",
    "lon": "-75.6734",
    "country": "Bahamas"
  },
  {
    "airport_code": "ATD",
    "airport_name": "Atoifi",
    "name": "Atoifi",
    "lat": "-8.86667",
    "lon": "161.033",
    "country": "Solomon Islands"
  },
  {
    "airport_code": "ATH",
    "airport_name": "Eleftherios Venizelos International Airport",
    "name": "Athens",
    "lat": "37.8937",
    "lon": "23.7235",
    "country": "Greece"
  },
  {
    "airport_code": "ATK",
    "airport_name": "Atqasuk Airport",
    "name": "Atqasuk",
    "lat": "70.4639",
    "lon": "-157.331",
    "country": "United States"
  },
  {
    "airport_code": "ATL",
    "airport_name": "Hartsfield-Jackson Atlanta International Airport",
    "name": "Atlanta",
    "lat": "33.6558",
    "lon": "-84.4333",
    "country": "United States"
  },
  {
    "airport_code": "ATM",
    "airport_name": "Altamira Airport",
    "name": "Altamira",
    "lat": "-3.2506",
    "lon": "-52.2517",
    "country": "Brazil"
  },
  {
    "airport_code": "ATQ",
    "airport_name": "Raja Sansi Airport",
    "name": "Raja Sansi",
    "lat": "31.7131",
    "lon": "74.7955",
    "country": "India"
  },
  {
    "airport_code": "ATR",
    "airport_name": "Atar Airport",
    "name": "Atar",
    "lat": "20.5067",
    "lon": "-13.0436",
    "country": "Mauritania"
  },
  {
    "airport_code": "ATT",
    "airport_name": "Atmautluak Airport",
    "name": "Atmautluak",
    "lat": "60.865",
    "lon": "-162.276",
    "country": "United States"
  },
  {
    "airport_code": "ATW",
    "airport_name": "Outagamie County Airport",
    "name": "Appleton",
    "lat": "44.2603",
    "lon": "-88.5111",
    "country": "United States"
  },
  {
    "airport_code": "ATY",
    "airport_name": "Watertown Municipal Airport",
    "name": "Watertown",
    "lat": "44.9216",
    "lon": "-97.1609",
    "country": "United States"
  },
  {
    "airport_code": "ATZ",
    "airport_name": "Asyut Airport",
    "name": "Asyut",
    "lat": "27.0411",
    "lon": "31.0114",
    "country": "Egypt"
  },
  {
    "airport_code": "AUA",
    "airport_name": "Reina Beatrix International Airport",
    "name": "Aruba",
    "lat": "12.5022",
    "lon": "-70.0139",
    "country": "Aruba"
  },
  {
    "airport_code": "AUC",
    "airport_name": "Santiago Perez Airport",
    "name": "Arauca",
    "lat": "7.0703",
    "lon": "-70.7406",
    "country": "Colombia"
  },
  {
    "airport_code": "AUG",
    "airport_name": "Augusta State Airport",
    "name": "Augusta",
    "lat": "44.3181",
    "lon": "-69.7933",
    "country": "United States"
  },
  {
    "airport_code": "AUH",
    "airport_name": "Abu Dhabi International Airport",
    "name": "Abu Dhabi",
    "lat": "24.4331",
    "lon": "54.6489",
    "country": "United Arab Emirates"
  },
  {
    "airport_code": "AUK",
    "airport_name": "Alakanuk Airport",
    "name": "Alakanuk",
    "lat": "62.6833",
    "lon": "-164.633",
    "country": "United States"
  },
  {
    "airport_code": "AUQ",
    "airport_name": "Atuona Airport",
    "name": "Atuona",
    "lat": "-9.7719",
    "lon": "-139.015",
    "country": "French Polynesia"
  },
  
  {
    "airport_code": "AUS",
    "airport_name": "Austin-Bergstrom International Airport",
    "name": "Austin",
    "lat": "30.2027",
    "lon": "-97.6653",
    "country": "United States"
  },
  {
    "airport_code": "AUX",
    "airport_name": "Araguaina Airport",
    "name": "Araguaina",
    "lat": "-7.2281",
    "lon": "-48.2403",
    "country": "Brazil"
  },
  {
    "airport_code": "AUY",
    "airport_name": "Vanuatu",
    "name": "Aneityum",
    "lat": "-20.1909",
    "lon": "169.825",
    "country": "Vanuatu"
  },
  {
    "airport_code": "AVL",
    "airport_name": "Asheville Regional Airport",
    "name": "Fletcher",
    "lat": "35.4349",
    "lon": "-82.5373",
    "country": "United States"
  },
  {
    "airport_code": "AVN",
    "airport_name": "Avignon-Caumont Airport",
    "name": "Avignon",
    "lat": "43.9056",
    "lon": "4.89951",
    "country": "France"
  },
  {
    "airport_code": "AVP",
    "airport_name": "Wilkes Barre Scranton International Airport",
    "name": "Pittston",
    "lat": "41.3354",
    "lon": "-75.7294",
    "country": "United States"
  },
  {
    "airport_code": "AVU",
    "airport_name": "Avu Avu",
    "name": "Avu Avu",
    "lat": "-9.85",
    "lon": "160.417",
    "country": "Solomon Islands"
  },
  
  {
    "airport_code": "AWB",
    "airport_name": "Awaba",
    "name": "Awaba",
    "lat": "-8.01667",
    "lon": "142.75",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "AWD",
    "airport_name": "Aniwa Airport",
    "name": "Aniwa",
    "lat": "-19.2501",
    "lon": "169.598",
    "country": "Vanuatu"
  },
  {
    "airport_code": "AWZ",
    "airport_name": "Ahvaz Airport",
    "name": "Ahvaz",
    "lat": "31.3378",
    "lon": "48.7597",
    "country": "Iran"
  },
  {
    "airport_code": "AXA",
    "airport_name": "Wallblake Airport",
    "name": "Anguilla",
    "lat": "18.2103",
    "lon": "-63.0575",
    "country": "Anguilla"
  },
  {
    "airport_code": "AXD",
    "airport_name": "Alexandroupolis Airport",
    "name": "Alexandroupolis",
    "lat": "40.8567",
    "lon": "25.9567",
    "country": "Greece"
  },
  {
    "airport_code": "AXM",
    "airport_name": "El Eden Airport",
    "name": "La Tebaida",
    "lat": "4.4564",
    "lon": "-75.7681",
    "country": "Colombia"
  },
  {
    "airport_code": "AXP",
    "airport_name": "Spring Point Airport",
    "name": "Spring Point",
    "lat": "22.4441",
    "lon": "-73.9775",
    "country": "Bahamas"
  },
  {
    "airport_code": "AXR",
    "airport_name": "French Polynesia",
    "name": "Arutua",
    "lat": "-15.5098",
    "lon": "-146.538",
    "country": "French Polynesia"
  },
  {
    "airport_code": "AXT",
    "airport_name": "Akita Airport",
    "name": "Akita-shi",
    "lat": "39.6153",
    "lon": "140.219",
    "country": "Japan"
  },
  {
    "airport_code": "AXU",
    "airport_name": "Axum",
    "name": "Axum",
    "lat": "14.147",
    "lon": "38.7726",
    "country": "Ethiopia"
  },
  {
    "airport_code": "AYQ",
    "airport_name": "Ayers Rock Airport",
    "name": "Ayers Rock",
    "lat": "-25.1872",
    "lon": "130.977",
    "country": "Australia"
  },
  {
    "airport_code": "AYT",
    "airport_name": "Antalya Airport",
    "name": "Antalya",
    "lat": "36.9022",
    "lon": "30.7917",
    "country": "Turkey"
  },
  {
    "airport_code": "AZA",
    "airport_name": "Phoenix-Mesa Gateway Airport",
    "name": "Phoenix",
    "lat": "33.3078",
    "lon": "-111.656",
    "country": "United States"
  },
  {
    "airport_code": "AZD",
    "airport_name": "Yazd Airport",
    "name": "Yezd",
    "lat": "31.905",
    "lon": "54.2786",
    "country": "Iran"
  },
  {
    "airport_code": "AZN",
    "airport_name": "Andizhan Airport",
    "name": "Andijon",
    "lat": "40.7324",
    "lon": "72.2931",
    "country": "Uzbekistan"
  },
  {
    "airport_code": "AZO",
    "airport_name": "Kalamazoo-Battle Creek International Airport",
    "name": "Kalamazoo",
    "lat": "42.2398",
    "lon": "-85.5563",
    "country": "United States"
  },
  {
    "airport_code": "AZR",
    "airport_name": "Touat Airport",
    "name": "Adrar",
    "lat": "27.8378",
    "lon": "-0.1864",
    "country": "Algeria"
  },
  {
    "airport_code": "AZS",
    "airport_name": "Samana El Catey International Airport",
    "name": "Samana",
    "lat": "19.2099",
    "lon": "-69.3279",
    "country": "Dominican Republic"
  },
  {
    "airport_code": "BAG",
    "airport_name": "Baguio Airport",
    "name": "Baguio City",
    "lat": "16.3764",
    "lon": "120.619",
    "country": "Philippines"
  },
  {
    "airport_code": "BAH",
    "airport_name": "Bahrain International Airport",
    "name": "Al Muharraq",
    "lat": "26.2736",
    "lon": "50.6234",
    "country": "Bahrain"
  },
  {
    "airport_code": "BAL",
    "airport_name": "Batman Airport",
    "name": "Batman",
    "lat": "37.93",
    "lon": "41.1167",
    "country": "Turkey"
  },
  {
    "airport_code": "BAQ",
    "airport_name": "Ernesto Cortissoz Airport",
    "name": "Soledad",
    "lat": "10.8961",
    "lon": "-74.7789",
    "country": "Colombia"
  },
  {
    "airport_code": "BAS",
    "airport_name": "Balalae",
    "name": "Balalae",
    "lat": "-7.98333",
    "lon": "155.9",
    "country": "Solomon Islands"
  },
  {
    "airport_code": "BAU",
    "airport_name": "Bauru Airport",
    "name": "Bauru",
    "lat": "-22.345",
    "lon": "-49.0531",
    "country": "Brazil"
  },
  {
    "airport_code": "BAV",
    "airport_name": "Baotou Airport",
    "name": "Baotou",
    "lat": "40.5679",
    "lon": "109.998",
    "country": "China"
  },
  {
    "airport_code": "BAX",
    "airport_name": "Barnaui West Airport",
    "name": "Barnaul",
    "lat": "53.3667",
    "lon": "83.75",
    "country": "Russia"
  },
  {
    "airport_code": "BAY",
    "airport_name": "Baia Mare",
    "name": "Baia Mare",
    "lat": "47.6589",
    "lon": "23.465",
    "country": "Romania"
  },
  {
    "airport_code": "BBA",
    "airport_name": "Balmaceda Airport",
    "name": "Balmaceda",
    "lat": "-45.9167",
    "lon": "-71.6869",
    "country": "Chile"
  },
  {
    "airport_code": "BBI",
    "airport_name": "Bhubaneswar Airport",
    "name": "Bhubaneswar",
    "lat": "20.2466",
    "lon": "85.8152",
    "country": "India"
  },
  {
    "airport_code": "BBK",
    "airport_name": "Kasane Airport",
    "name": "Kasane",
    "lat": "-17.8333",
    "lon": "25.1667",
    "country": "Botswana"
  },
  {
    "airport_code": "BBN",
    "airport_name": "Bario Airport",
    "name": "Nanga Medamit",
    "lat": "3.73333",
    "lon": "115.467",
    "country": "Malaysia"
  },
  {
    "airport_code": "BBO",
    "airport_name": "Berbera Airport",
    "name": "Berbera",
    "lat": "10.3917",
    "lon": "44.95",
    "country": "Somalia"
  },
  {
    "airport_code": "BBS",
    "airport_name": "Blackbushe Airport",
    "name": "Camberley",
    "lat": "51.3252",
    "lon": "-0.84173",
    "country": "United Kingdom"
  },
  {
    "airport_code": "BBU",
    "airport_name": "Aeroportul National Bucuresti-Baneasa",
    "name": "Bucharest",
    "lat": "44.4966",
    "lon": "26.087",
    "country": "Romania"
  },
  {
    "airport_code": "BCA",
    "airport_name": "Baracoa Airport",
    "name": "Baracoa",
    "lat": "20.3644",
    "lon": "-74.5064",
    "country": "Cuba"
  },
  {
    "airport_code": "BCD",
    "airport_name": "Bacolod Airport",
    "name": "Bacolod City",
    "lat": "10.6444",
    "lon": "122.929",
    "country": "Philippines"
  },
  {
    "airport_code": "BCI",
    "airport_name": "Barcaldine Aerodrome",
    "name": "Barcaldine",
    "lat": "-23.5635",
    "lon": "145.305",
    "country": "Australia"
  },
  {
    "airport_code": "BCL",
    "airport_name": "Barra Colorado Airport",
    "name": "Colorado",
    "lat": "10.7856",
    "lon": "-83.5966",
    "country": "Costa Rica"
  },
  {
    "airport_code": "BCM",
    "airport_name": "Luizi Calugara Airport",
    "name": "Bacæu",
    "lat": "46.5283",
    "lon": "26.8997",
    "country": "Romania"
  },
  {
    "airport_code": "BCN",
    "airport_name": "Barcelona International Airport",
    "name": "El Prat de Llobregat",
    "lat": "41.3006",
    "lon": "2.07976",
    "country": "Spain"
  },
  {
    "airport_code": "BDA",
    "airport_name": "Bermuda International Airport",
    "name": "St. George",
    "lat": "32.3675",
    "lon": "-64.6903",
    "country": "Bermuda"
  },
  {
    "airport_code": "BDB",
    "airport_name": "Bundaberg Airport",
    "name": "Bundaberg",
    "lat": "-24.9046",
    "lon": "152.322",
    "country": "Australia"
  },
  {
    "airport_code": "BDD",
    "airport_name": "Badu Island Airport",
    "name": "Badu Island",
    "lat": "-10.1214",
    "lon": "142.142",
    "country": "Australia"
  },
  {
    "airport_code": "BDH",
    "airport_name": "Bandar Lengeh Airport",
    "name": "Bandar Abbas",
    "lat": "26.5333",
    "lon": "54.8239",
    "country": "Iran"
  },
  {
    "airport_code": "BDJ",
    "airport_name": "Syamsuddin Noor Airport",
    "name": "Banjarmasin",
    "lat": "-3.4425",
    "lon": "114.757",
    "country": "Indonesia"
  },
  {
    "airport_code": "BDL",
    "airport_name": "Bradley International Airport",
    "name": "Windsor Locks",
    "lat": "41.9271",
    "lon": "-72.6816",
    "country": "United States"
  },
  {
    "airport_code": "BDO",
    "airport_name": "Husein Sastranegara Airport",
    "name": "Bandung",
    "lat": "-6.9017",
    "lon": "107.576",
    "country": "Indonesia"
  },
  {
    "airport_code": "BDP",
    "airport_name": "Bhadrapur",
    "name": "Bhadrapur",
    "lat": "26.5667",
    "lon": "88.0833",
    "country": "Nepal"
  },
  {
    "airport_code": "BDQ",
    "airport_name": "Vadodara Airport",
    "name": "Vadodara",
    "lat": "22.3367",
    "lon": "73.2264",
    "country": "India"
  },
  {
    "airport_code": "BDR",
    "airport_name": "Igor I Sikorsky Memorial Airport",
    "name": "Stratford",
    "lat": "41.1636",
    "lon": "-73.1283",
    "country": "United States"
  },
  {
    "airport_code": "BDS",
    "airport_name": "Casale Airport",
    "name": "Brindisi",
    "lat": "40.6626",
    "lon": "17.9426",
    "country": "Italy"
  },
  {
    "airport_code": "BDU",
    "airport_name": "Bardufoss Airport",
    "name": "Bardufoss",
    "lat": "69.0589",
    "lon": "18.539",
    "country": "Norway"
  },
  {
    "airport_code": "BEB",
    "airport_name": "Benbecula Airport",
    "name": "Balivanich",
    "lat": "57.4756",
    "lon": "-7.37041",
    "country": "United Kingdom"
  },
  {
    "airport_code": "BEG",
    "airport_name": "Surcin Airport",
    "name": "Surčin",
    "lat": "44.8192",
    "lon": "20.3122",
    "country": "Serbia"
  },
  {
    "airport_code": "BEL",
    "airport_name": "Val de Caes International Airport",
    "name": "Belem",
    "lat": "-1.3844",
    "lon": "-48.4783",
    "country": "Brazil"
  },
  {
    "airport_code": "BEN",
    "airport_name": "Benina Intl",
    "name": "Benghazi",
    "lat": "35.6425",
    "lon": "-87.1192",
    "country": "Libya"
  },
  {
    "airport_code": "BES",
    "airport_name": "Guipavas Airport",
    "name": "Guipavas",
    "lat": "48.4458",
    "lon": "-4.41511",
    "country": "France"
  },
  {
    "airport_code": "BET",
    "airport_name": "Bethel Airport",
    "name": "Bethel",
    "lat": "60.7788",
    "lon": "-161.847",
    "country": "United States"
  },
  {
    "airport_code": "BEU",
    "airport_name": "Bedourie Aerodrome",
    "name": "Bedourie",
    "lat": "-24.3544",
    "lon": "139.463",
    "country": "Australia"
  },
  {
    "airport_code": "BEW",
    "airport_name": "Beira Airport",
    "name": "Beira",
    "lat": "-19.7958",
    "lon": "34.9089",
    "country": "Mozambique"
  },
  {
    "airport_code": "BEY",
    "airport_name": "Beirut International Airport",
    "name": "Beirut",
    "lat": "33.825",
    "lon": "35.4925",
    "country": "Lebanon"
  },
  {
    "airport_code": "BFD",
    "airport_name": "Bradford Regional Airport",
    "name": "Lewis Run",
    "lat": "41.7964",
    "lon": "-78.6407",
    "country": "United States"
  },
  {
    "airport_code": "BFE",
    "airport_name": "Bielefeld",
    "name": "Bielefeld",
    "lat": "52",
    "lon": "8.5",
    "country": "Germany"
  },
  {
    "airport_code": "BFF",
    "airport_name": "William B Heilig Field Airport",
    "name": "Scottsbluff",
    "lat": "41.8683",
    "lon": "-103.597",
    "country": "United States"
  },
  {
    "airport_code": "BFI",
    "airport_name": "King County International Airport-Boeing Field",
    "name": "Seattle",
    "lat": "47.5369",
    "lon": "-122.304",
    "country": "United States"
  },
  {
    "airport_code": "BFL",
    "airport_name": "Kern County-Meadows Field Airport",
    "name": "Bakersfield",
    "lat": "35.4288",
    "lon": "-119.044",
    "country": "United States"
  },
  {
    "airport_code": "BFN",
    "airport_name": "J B M Hertzog Airport",
    "name": "Bloemfontein",
    "lat": "-29.0942",
    "lon": "26.3027",
    "country": "South Africa"
  },
  {
    "airport_code": "BFS",
    "airport_name": "Aldergrove Airport",
    "name": "Crumlin",
    "lat": "54.6542",
    "lon": "-6.225",
    "country": "United Kingdom"
  },
  {
    "airport_code": "BFV",
    "airport_name": "Buri Ram",
    "name": "Buri Ram",
    "lat": "15.2295",
    "lon": "103.253",
    "country": "Thailand"
  },
  {
    "airport_code": "BGA",
    "airport_name": "Palonegro Airport",
    "name": "Bucaramanga",
    "lat": "7.1217",
    "lon": "-73.1883",
    "country": "Colombia"
  },
  {
    "airport_code": "BGF",
    "airport_name": "Bangui M Poko Airport",
    "name": "Bangui",
    "lat": "4.3961",
    "lon": "18.5203",
    "country": "Central African Republic"
  },
  {
    "airport_code": "BGI",
    "airport_name": "Grantley Adams International Airport",
    "name": "Bridgetown",
    "lat": "13.0719",
    "lon": "-59.4939",
    "country": "Barbados"
  },
  {
    "airport_code": "BGM",
    "airport_name": "Greater Binghamton Edwin A Link Field Airport",
    "name": "Johnson City",
    "lat": "42.2082",
    "lon": "-75.9825",
    "country": "United States"
  },
  {
    "airport_code": "BGO",
    "airport_name": "Bergen Flesland Airport",
    "name": "Blomsterdalen",
    "lat": "60.2907",
    "lon": "5.22065",
    "country": "Norway"
  },
  {
    "airport_code": "BGR",
    "airport_name": "Bangor International Airport",
    "name": "Bangor",
    "lat": "44.8086",
    "lon": "-68.8167",
    "country": "United States"
  },
  
  {
    "airport_code": "BGY",
    "airport_name": "Orio Al Serio Airport",
    "name": "Grassobbio",
    "lat": "45.6664",
    "lon": "9.699",
    "country": "Italy"
  },
  {
    "airport_code": "BHB",
    "airport_name": "Hancock County-Bar Harbor Airport",
    "name": "Ellsworth",
    "lat": "44.4461",
    "lon": "-68.3615",
    "country": "United States"
  },
  {
    "airport_code": "BHD",
    "airport_name": "George Best Belfast City Airport",
    "name": "Belfast",
    "lat": "54.6151",
    "lon": "-5.87096",
    "country": "United Kingdom"
  },
  {
    "airport_code": "BHE",
    "airport_name": "Woodbourne Airport",
    "name": "Blenheim",
    "lat": "-41.52",
    "lon": "173.87",
    "country": "New Zealand"
  },
  {
    "airport_code": "BHG",
    "airport_name": "Brus Laguna Airport",
    "name": "Brus Laguna",
    "lat": "15.7636",
    "lon": "-84.551",
    "country": "Honduras"
  },
  {
    "airport_code": "BHH",
    "airport_name": "Bisha Airport",
    "name": "Bisha",
    "lat": "19.9817",
    "lon": "42.6267",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "BHI",
    "airport_name": "Bahia Blanca Cte Espora Naval Air Base",
    "name": "Punta Alta",
    "lat": "-38.7261",
    "lon": "-62.1539",
    "country": "Argentina"
  },
  {
    "airport_code": "BHJ",
    "airport_name": "Bhuj Airport",
    "name": "Bhuj",
    "lat": "23.2875",
    "lon": "69.6706",
    "country": "India"
  },
  {
    "airport_code": "BHK",
    "airport_name": "Bukhara Airport",
    "name": "Bukhara",
    "lat": "39.7948",
    "lon": "64.4895",
    "country": "Uzbekistan"
  },
  {
    "airport_code": "BHM",
    "airport_name": "Birmingham International Airport",
    "name": "Birmingham",
    "lat": "33.5604",
    "lon": "-86.7492",
    "country": "United States"
  },
  {
    "airport_code": "BHO",
    "airport_name": "Bairagarh Airport",
    "name": "Bhopal",
    "lat": "23.2844",
    "lon": "77.3383",
    "country": "India"
  },
  {
    "airport_code": "BHQ",
    "airport_name": "Broken Hill Airport",
    "name": "Broken Hill",
    "lat": "-32.0031",
    "lon": "141.466",
    "country": "Australia"
  },
  {
    "airport_code": "BHR",
    "airport_name": "Bharatpur",
    "name": "Bharatpur",
    "lat": "25.9173",
    "lon": "50.6071",
    "country": "Nepal"
  },
  {
    "airport_code": "BHS",
    "airport_name": "Bathurst Airport",
    "name": "Bathurst",
    "lat": "-33.4121",
    "lon": "149.657",
    "country": "Australia"
  },
  {
    "airport_code": "BHU",
    "airport_name": "Bhavnagar Airport",
    "name": "Bhavnagar",
    "lat": "21.7536",
    "lon": "72.1867",
    "country": "India"
  },
  {
    "airport_code": "BHV",
    "airport_name": "Bahawalpur Airport",
    "name": "Bahawalpur",
    "lat": "29.3444",
    "lon": "71.7125",
    "country": "Pakistan"
  },
  {
    "airport_code": "BHX",
    "airport_name": "Birmingham International Airport",
    "name": "Birmingham",
    "lat": "52.4531",
    "lon": "-1.73847",
    "country": "United Kingdom"
  },
  {
    "airport_code": "BHY",
    "airport_name": "Beihai",
    "name": "Beihai",
    "lat": "21.4833",
    "lon": "109.083",
    "country": "China"
  },
  {
    "airport_code": "BIA",
    "airport_name": "Poretta Airport",
    "name": "Borgo",
    "lat": "42.5497",
    "lon": "9.48341",
    "country": "France"
  },
  {
    "airport_code": "BID",
    "airport_name": "Block Island State Airport",
    "name": "Block Island",
    "lat": "41.1696",
    "lon": "-71.58",
    "country": "United States"
  },
  {
    "airport_code": "BII",
    "airport_name": "Enyu Airfield",
    "name": "Bikini Atoll",
    "lat": "11.5833",
    "lon": "165.383",
    "country": "Marshall Islands"
  },
  {
    "airport_code": "BIK",
    "airport_name": "Frans Kaisiepo Airport",
    "name": "Biak",
    "lat": "-1",
    "lon": "136.117",
    "country": "Indonesia"
  },
  {
    "airport_code": "BIL",
    "airport_name": "Logan International Airport",
    "name": "Billings",
    "lat": "45.8034",
    "lon": "-108.537",
    "country": "United States"
  },
  
  {
    "airport_code": "BIO",
    "airport_name": "Bilbao Airport",
    "name": "Loiu",
    "lat": "43.3025",
    "lon": "-2.91112",
    "country": "Spain"
  },
  {
    "airport_code": "BIQ",
    "airport_name": "Anglet Airport",
    "name": "Anglet",
    "lat": "43.472",
    "lon": "-1.53137",
    "country": "France"
  },
  {
    "airport_code": "BIR",
    "airport_name": "Biratnagar Airport",
    "name": "Biratnagur",
    "lat": "26.4814",
    "lon": "87.2647",
    "country": "Nepal"
  },
  {
    "airport_code": "BIS",
    "airport_name": "Bismarck Municipal Airport",
    "name": "Bismarck",
    "lat": "46.7745",
    "lon": "-100.757",
    "country": "United States"
  },
  {
    "airport_code": "BJA",
    "airport_name": "Soummam Airport",
    "name": "Bejaia",
    "lat": "36.7133",
    "lon": "5.0697",
    "country": "Algeria"
  },
  {
    "airport_code": "BJB",
    "airport_name": "Bojnord",
    "name": "Bojnord",
    "lat": "37.4933",
    "lon": "57.3007",
    "country": "Iran"
  },
  {
    "airport_code": "BJF",
    "airport_name": "Batsfjord Airport",
    "name": "Baasfjord",
    "lat": "70.6031",
    "lon": "29.6948",
    "country": "Norway"
  },
  {
    "airport_code": "BJI",
    "airport_name": "Bemidji-Beltrami County Airport",
    "name": "Bemidji",
    "lat": "47.5065",
    "lon": "-94.9338",
    "country": "United States"
  },
  {
    "airport_code": "BJL",
    "airport_name": "Yundum International Airport",
    "name": "Yundum",
    "lat": "13.3372",
    "lon": "-16.6544",
    "country": "Gambia"
  },
  {
    "airport_code": "BJM",
    "airport_name": "Bujumbura Airport",
    "name": "Bujumbura",
    "lat": "-3.3317",
    "lon": "29.3208",
    "country": "Burundi"
  },
  {
    "airport_code": "BJR",
    "airport_name": "Ethiopia",
    "name": "Bahar Dar",
    "lat": "11.5564",
    "lon": "37.3687",
    "country": "Ethiopia"
  },
  {
    "airport_code": "BJV",
    "airport_name": "Milas Airport",
    "name": "Bodrum",
    "lat": "37.0413",
    "lon": "27.4362",
    "country": "Turkey"
  },
  {
    "airport_code": "BJW",
    "airport_name": "Bajawa Airport",
    "name": "Ende",
    "lat": "-8.78333",
    "lon": "120.983",
    "country": "Indonesia"
  },
  {
    "airport_code": "BJX",
    "airport_name": "Silao Airport",
    "name": "Silao",
    "lat": "20.9903",
    "lon": "-101.478",
    "country": "Mexico"
  },
  {
    "airport_code": "BJZ",
    "airport_name": "Talavera la Real Airport",
    "name": "Badajoz",
    "lat": "38.8939",
    "lon": "-6.81921",
    "country": "Spain"
  },
  {
    "airport_code": "BKA",
    "airport_name": "Bykovo Airport",
    "name": "Lyubertsy",
    "lat": "55.5516",
    "lon": "37.9763",
    "country": "Russia"
  },
  {
    "airport_code": "BKC",
    "airport_name": "Buckland Airport",
    "name": "Buckland",
    "lat": "65.9833",
    "lon": "-161.167",
    "country": "United States"
  },
  {
    "airport_code": "BKI",
    "airport_name": "Kota Kinabalu Airport",
    "name": "Kota Kinabalu",
    "lat": "5.9386",
    "lon": "116.049",
    "country": "Malaysia"
  },
  {
    "airport_code": "BKK",
    "airport_name": "Bangkok International Airport",
    "name": "Lak Si",
    "lat": "13.9144",
    "lon": "100.608",
    "country": "Thailand"
  },
  
  {
    "airport_code": "BKM",
    "airport_name": "Malaysia",
    "name": "Bakalalan",
    "lat": "3.94515",
    "lon": "114.402",
    "country": "Malaysia"
  },
  {
    "airport_code": "BKO",
    "airport_name": "Bamako Senou Airport",
    "name": "Kalaban",
    "lat": "12.5361",
    "lon": "-7.9486",
    "country": "Mali"
  },
  {
    "airport_code": "BKQ",
    "airport_name": "Blackall Aerodrome",
    "name": "Mount Enniskillen",
    "lat": "-24.4292",
    "lon": "145.429",
    "country": "Australia"
  },
  {
    "airport_code": "BKS",
    "airport_name": "Padangkemiling Airport",
    "name": "Bengkulu",
    "lat": "-3.8633",
    "lon": "102.339",
    "country": "Indonesia"
  },
  {
    "airport_code": "BKW",
    "airport_name": "Raleigh County Memorial Airport",
    "name": "Beaver",
    "lat": "37.7849",
    "lon": "-81.1174",
    "country": "United States"
  },
  {
    "airport_code": "BKY",
    "airport_name": "Bukavu Kavumu Airport",
    "name": "Bukavu",
    "lat": "-2.3014",
    "lon": "28.8139",
    "country": "Congo"
  },
  {
    "airport_code": "BLA",
    "airport_name": "Jose Antonio Anzoategui Airport",
    "name": "Pariaguán",
    "lat": "10.1103",
    "lon": "-64.6872",
    "country": "Venezuela"
  },
  {
    "airport_code": "BLE",
    "airport_name": "Dala Airport",
    "name": "Borlange",
    "lat": "60.4297",
    "lon": "15.5081",
    "country": "Sweden"
  },
  {
    "airport_code": "BLI",
    "airport_name": "Bellingham International Airport",
    "name": "Bellingham",
    "lat": "48.7955",
    "lon": "-122.532",
    "country": "United States"
  },
  {
    "airport_code": "BLJ",
    "airport_name": "Algeria",
    "name": "Batna",
    "lat": "35.5572",
    "lon": "6.17229",
    "country": "Algeria"
  },
  {
    "airport_code": "BLK",
    "airport_name": "Blackpool Airport",
    "name": "Blackpool",
    "lat": "53.7756",
    "lon": "-3.04118",
    "country": "United Kingdom"
  },
  {
    "airport_code": "BLL",
    "airport_name": "Billund Airport",
    "name": "Billund",
    "lat": "55.742",
    "lon": "9.15354",
    "country": "Denmark"
  },
  {
    "airport_code": "BLQ",
    "airport_name": "Bologna Airport",
    "name": "Bologna",
    "lat": "44.5345",
    "lon": "11.2903",
    "country": "Italy"
  },
  {
    "airport_code": "BLR",
    "airport_name": "HAL Bangalore International Airport",
    "name": "Bangalore",
    "lat": "12.9526",
    "lon": "77.6656",
    "country": "India"
  },
  {
    "airport_code": "BLT",
    "airport_name": "Blackwater Aerodrome",
    "name": "Baralaba",
    "lat": "-23.6012",
    "lon": "148.805",
    "country": "Australia"
  },
  
  {
    "airport_code": "BLZ",
    "airport_name": "Chileka International Airport",
    "name": "Lunzu",
    "lat": "-15.6764",
    "lon": "34.9714",
    "country": "Malawi"
  },
  {
    "airport_code": "BMA",
    "airport_name": "Bromma Airport",
    "name": "Bromma",
    "lat": "59.3562",
    "lon": "17.9378",
    "country": "Sweden"
  },
  {
    "airport_code": "BME",
    "airport_name": "Broome International Airport",
    "name": "Broome",
    "lat": "-17.9464",
    "lon": "122.233",
    "country": "Australia"
  },
  {
    "airport_code": "BMI",
    "airport_name": "Bloomington Normal Airport",
    "name": "Bloomington",
    "lat": "40.4841",
    "lon": "-88.9134",
    "country": "United States"
  },
  {
    "airport_code": "BMK",
    "airport_name": "Borkum Airport",
    "name": "Borkum",
    "lat": "53.5797",
    "lon": "6.71294",
    "country": "Germany"
  },
  {
    "airport_code": "BMO",
    "airport_name": "Bhamo Airport",
    "name": "Bhamo",
    "lat": "24.2739",
    "lon": "97.2517",
    "country": "Myanmar"
  },
  {
    "airport_code": "BMU",
    "airport_name": "Mohammad Salahuddin Airport",
    "name": "Raba",
    "lat": "-8.5444",
    "lon": "118.682",
    "country": "Indonesia"
  },
  {
    "airport_code": "BMV",
    "airport_name": "Ban Me Thaut",
    "name": "Banmethuot",
    "lat": "12.6667",
    "lon": "108.05",
    "country": "Vietnam"
  },
  {
    "airport_code": "BMW",
    "airport_name": "Algeria",
    "name": "Bordj Badji Mokhtar",
    "lat": "28.0269",
    "lon": "1.65284",
    "country": "Algeria"
  },
  {
    "airport_code": "BMY",
    "airport_name": "Belep Island",
    "name": "Belep Island",
    "lat": "-19.75",
    "lon": "163.667",
    "country": "New Caledonia"
  },
  {
    "airport_code": "BNA",
    "airport_name": "Nashville International Airport",
    "name": "Nashville",
    "lat": "36.1342",
    "lon": "-86.6682",
    "country": "United States"
  },
  {
    "airport_code": "BND",
    "airport_name": "Bandar Abbass International Airport",
    "name": "Bandar Abbas",
    "lat": "27.225",
    "lon": "56.3783",
    "country": "Iran"
  },
  {
    "airport_code": "BNE",
    "airport_name": "Brisbane International Airport",
    "name": "Brisbane",
    "lat": "-27.3589",
    "lon": "153.122",
    "country": "Australia"
  },
  {
    "airport_code": "BNI",
    "airport_name": "Benin Airport",
    "name": "Benin City",
    "lat": "6.3161",
    "lon": "5.6",
    "country": "Nigeria"
  },
  {
    "airport_code": "BNJ",
    "airport_name": "Hangelar",
    "name": "Bonn",
    "lat": "50.7667",
    "lon": "7.16449",
    "country": "Germany"
  },
  {
    "airport_code": "BNK",
    "airport_name": "Ballina Airport",
    "name": "Ballina",
    "lat": "-28.8342",
    "lon": "153.555",
    "country": "Australia"
  },
  {
    "airport_code": "BNN",
    "airport_name": "Bronnoy Airport",
    "name": "Bronnoysund",
    "lat": "65.462",
    "lon": "12.2161",
    "country": "Norway"
  },
  {
    "airport_code": "BNS",
    "airport_name": "Barinas Airport",
    "name": "Barinas",
    "lat": "8.6211",
    "lon": "-70.2181",
    "country": "Venezuela"
  },
  {
    "airport_code": "BNX",
    "airport_name": "Banja Luka Airport",
    "name": "Banja Luka",
    "lat": "44.9403",
    "lon": "17.2992",
    "country": "Bosnia and Herzegovina"
  },
  {
    "airport_code": "BNY",
    "airport_name": "Bellona Airport",
    "name": "Bellona",
    "lat": "-11.2961",
    "lon": "159.801",
    "country": "Solomon Islands"
  },
  {
    "airport_code": "BOB",
    "airport_name": "Motu-Mute Airport",
    "name": "Papeete",
    "lat": "-16.45",
    "lon": "-151.767",
    "country": "French Polynesia"
  },
  {
    "airport_code": "BOC",
    "airport_name": "Bocas del Toro Airport",
    "name": "Bocas del Toro",
    "lat": "9.34",
    "lon": "-82.2514",
    "country": "Panama"
  },
  {
    "airport_code": "BOD",
    "airport_name": "Bordeaux Airport",
    "name": "Merignac",
    "lat": "44.8291",
    "lon": "-0.70278",
    "country": "France"
  },
  {
    "airport_code": "BOG",
    "airport_name": "Eldorado International Airport",
    "name": "Fontibón",
    "lat": "4.69895",
    "lon": "-74.1435",
    "country": "Colombia"
  },
  {
    "airport_code": "BOH",
    "airport_name": "Bournemouth International Airport",
    "name": "Christchurch",
    "lat": "50.7797",
    "lon": "-1.83424",
    "country": "United Kingdom"
  },
  {
    "airport_code": "BOI",
    "airport_name": "Boise Air Terminal",
    "name": "Boise",
    "lat": "43.5709",
    "lon": "-116.222",
    "country": "United States"
  },
  {
    "airport_code": "BOJ",
    "airport_name": "Bourgas Airport",
    "name": "Burgas",
    "lat": "42.5667",
    "lon": "27.5",
    "country": "Bulgaria"
  },
  {
    "airport_code": "BOM",
    "airport_name": "Chhatrapati Shivaji International Airport",
    "name": "Mumbai",
    "lat": "19.0932",
    "lon": "72.8654",
    "country": "India"
  },
  {
    "airport_code": "BON",
    "airport_name": "Flamingo Airport",
    "name": "Kralendijk",
    "lat": "12.1392",
    "lon": "-68.2697",
    "country": "Netherlands Antilles"
  },
  {
    "airport_code": "BOO",
    "airport_name": "Bodo Airport",
    "name": "Bodo",
    "lat": "67.2709",
    "lon": "14.3653",
    "country": "Norway"
  },
  {
    "airport_code": "BOS",
    "airport_name": "Gen E L Logan International Airport",
    "name": "Boston",
    "lat": "42.3717",
    "lon": "-71.0281",
    "country": "United States"
  },
  {
    "airport_code": "BOW",
    "airport_name": "Bartow Municipal Airport",
    "name": "Bartow",
    "lat": "27.9493",
    "lon": "-81.7818",
    "country": "United States"
  },
  {
    "airport_code": "BOY",
    "airport_name": "Bobo Dioulasso Airport",
    "name": "Bobo-Dioulasso",
    "lat": "11.1636",
    "lon": "-4.3264",
    "country": "Burkina Faso"
  },
  {
    "airport_code": "BPN",
    "airport_name": "Sepinggan Airport",
    "name": "Balikpapan",
    "lat": "-1.2681",
    "lon": "116.897",
    "country": "Indonesia"
  },
  {
    "airport_code": "BPS",
    "airport_name": "Porto Seguro Airport",
    "name": "Porto Seguro",
    "lat": "-16.4406",
    "lon": "-39.0833",
    "country": "Brazil"
  },
  {
    "airport_code": "BPT",
    "airport_name": "Jefferson County Airport",
    "name": "Beaumont",
    "lat": "29.9551",
    "lon": "-94.0185",
    "country": "United States"
  },
  {
    "airport_code": "BPX",
    "airport_name": "Bangda Airport",
    "name": "Qamdo",
    "lat": "31.1442",
    "lon": "97.174",
    "country": "China"
  },
  {
    "airport_code": "BPY",
    "airport_name": "Besalampy Airport",
    "name": "Besalampy",
    "lat": "-16.7431",
    "lon": "44.4803",
    "country": "Madagascar"
  },
  {
    "airport_code": "BQK",
    "airport_name": "Glynco Jetport Airport",
    "name": "Brunswick",
    "lat": "31.2525",
    "lon": "-81.4703",
    "country": "United States"
  },
  {
    "airport_code": "BQL",
    "airport_name": "Boulia Aerodrome",
    "name": "Boulia",
    "lat": "-22.9122",
    "lon": "139.897",
    "country": "Australia"
  },
  {
    "airport_code": "BQN",
    "airport_name": "Rafael Hernandez Airport",
    "name": "Aguadilla",
    "lat": "18.496",
    "lon": "-67.1357",
    "country": "United States"
  },
  {
    "airport_code": "BQS",
    "airport_name": "Blagoveshchensk Northwest Airport",
    "name": "Blagoveshchensk",
    "lat": "50.4243",
    "lon": "127.409",
    "country": "Russia"
  },
  {
    "airport_code": "BRA",
    "airport_name": "Barreiras Airport",
    "name": "Barreiras",
    "lat": "-12.0792",
    "lon": "-45.01",
    "country": "Brazil"
  },
  {
    "airport_code": "BRC",
    "airport_name": "San Carlos de Bariloche Airport",
    "name": "San Carlos DeBariloche",
    "lat": "-41.1511",
    "lon": "-71.1581",
    "country": "Argentina"
  },
  {
    "airport_code": "BRD",
    "airport_name": "Brainerd-Crow Wing County Regional Airport",
    "name": "Brainerd",
    "lat": "46.3909",
    "lon": "-94.1413",
    "country": "United States"
  },
  {
    "airport_code": "BRE",
    "airport_name": "Bremen Airport",
    "name": "Bremen",
    "lat": "53.0523",
    "lon": "8.78533",
    "country": "Germany"
  },
  
  {
    "airport_code": "BRI",
    "airport_name": "Palese Macchie Airport",
    "name": "Bari",
    "lat": "41.1376",
    "lon": "16.7674",
    "country": "Italy"
  },
  {
    "airport_code": "BRK",
    "airport_name": "Bourke Airport",
    "name": "Bourke",
    "lat": "-30.0403",
    "lon": "145.953",
    "country": "Australia"
  },
  {
    "airport_code": "BRL",
    "airport_name": "Burlington Municipal Airport",
    "name": "Burlington",
    "lat": "40.7816",
    "lon": "-91.1197",
    "country": "United States"
  },
  {
    "airport_code": "BRM",
    "airport_name": "Barquisimeto Airport",
    "name": "Barquisimeto",
    "lat": "10.0453",
    "lon": "-69.3561",
    "country": "Venezuela"
  },
  {
    "airport_code": "BRN",
    "airport_name": "Bern Belp Airport",
    "name": "Belp",
    "lat": "46.9124",
    "lon": "7.49929",
    "country": "Switzerland"
  },
  {
    "airport_code": "BRO",
    "airport_name": "Brownsville-South Padre Island International Air",
    "name": "Brownsville",
    "lat": "25.9064",
    "lon": "-97.4321",
    "country": "United States"
  },
  {
    "airport_code": "BRQ",
    "airport_name": "Turany Airport",
    "name": "Brno",
    "lat": "49.1535",
    "lon": "16.6908",
    "country": "Czech Republic"
  },
  {
    "airport_code": "BRR",
    "airport_name": "North Bay Airport",
    "name": "Barra",
    "lat": "57.0251",
    "lon": "-7.44967",
    "country": "United Kingdom"
  },
  {
    "airport_code": "BRS",
    "airport_name": "Bristol International Airport",
    "name": "Bristol",
    "lat": "51.3848",
    "lon": "-2.70526",
    "country": "United Kingdom"
  },
  {
    "airport_code": "BRU",
    "airport_name": "Brussels Airport",
    "name": "Bruxelles",
    "lat": "50.899",
    "lon": "4.4859",
    "country": "Belgium"
  },
  {
    "airport_code": "BRV",
    "airport_name": "Bremerhaven Airport",
    "name": "Bad Bederkesa",
    "lat": "53.5537",
    "lon": "8.78359",
    "country": "Germany"
  },
  {
    "airport_code": "BRW",
    "airport_name": "Wiley Post Will Rogers Memorial Airport",
    "name": "Barrow",
    "lat": "71.2892",
    "lon": "-156.772",
    "country": "United States"
  },
  {
    "airport_code": "BSA",
    "airport_name": "Somalia",
    "name": "Bossaso",
    "lat": "11.2775",
    "lon": "49.1814",
    "country": "Somalia"
  },
  {
    "airport_code": "BSB",
    "airport_name": "Juscelino Kubitschek International Airport",
    "name": "Lago Sul",
    "lat": "-15.8622",
    "lon": "-47.9122",
    "country": "Brazil"
  },
  {
    "airport_code": "BSC",
    "airport_name": "Jose Celestino Mutis Airport",
    "name": "Bahía Solano",
    "lat": "6.1786",
    "lon": "-77.3956",
    "country": "Colombia"
  },
  {
    "airport_code": "BSD",
    "airport_name": "Baoshan Airport",
    "name": "Baoshan",
    "lat": "25.0604",
    "lon": "99.1639",
    "country": "China"
  },
  {
    "airport_code": "BSG",
    "airport_name": "Bata Airport",
    "name": "Bata",
    "lat": "1.9046",
    "lon": "9.8032",
    "country": "Equatorial Guinea"
  },
  
  {
    "airport_code": "BSK",
    "airport_name": "Biskra Airport",
    "name": "Biskra",
    "lat": "34.7933",
    "lon": "5.74",
    "country": "Algeria"
  },
  {
    "airport_code": "BSL",
    "airport_name": "Euroairport Basel-Mulhouse-Freiburg",
    "name": "St-Ludwig",
    "lat": "47.5998",
    "lon": "7.532",
    "country": "France"
  },
  {
    "airport_code": "BSO",
    "airport_name": "Basco Airport",
    "name": "Basco",
    "lat": "20.4531",
    "lon": "121.978",
    "country": "Philippines"
  },
  
  {
    "airport_code": "BSX",
    "airport_name": "Bassein",
    "name": "Bassein",
    "lat": "45.4264",
    "lon": "5.14384",
    "country": "Myanmar"
  },
  {
    "airport_code": "BTH",
    "airport_name": "Hang Nadim Airport",
    "name": "Batam",
    "lat": "1.1306",
    "lon": "104.134",
    "country": "Indonesia"
  },
  {
    "airport_code": "BTI",
    "airport_name": "Barter Island Airport",
    "name": "Kaktovik",
    "lat": "70.1478",
    "lon": "-143.579",
    "country": "United States"
  },
  {
    "airport_code": "BTJ",
    "airport_name": "Blangbintang Airport",
    "name": "Banda Aceh",
    "lat": "5.5197",
    "lon": "95.4181",
    "country": "Indonesia"
  },
  {
    "airport_code": "BTK",
    "airport_name": "Bratsk",
    "name": "Bratsk",
    "lat": "56.1667",
    "lon": "102.067",
    "country": "Russia"
  },
  {
    "airport_code": "BTL",
    "airport_name": "W K Kellogg Airport",
    "name": "Battle Creek",
    "lat": "42.3046",
    "lon": "-85.2448",
    "country": "United States"
  },
  {
    "airport_code": "BTM",
    "airport_name": "Bert Mooney Airport",
    "name": "Butte",
    "lat": "45.9544",
    "lon": "-112.503",
    "country": "United States"
  },
  {
    "airport_code": "BTR",
    "airport_name": "Baton Rouge Metropolitan Airport",
    "name": "Baton Rouge",
    "lat": "30.533",
    "lon": "-91.1567",
    "country": "United States"
  },
  {
    "airport_code": "BTS",
    "airport_name": "Bratislava Airport",
    "name": "Bratislava",
    "lat": "48.2063",
    "lon": "17.2055",
    "country": "Slovakia"
  },
  {
    "airport_code": "BTT",
    "airport_name": "Bettles Airport",
    "name": "Bettles",
    "lat": "66.9134",
    "lon": "-151.551",
    "country": "United States"
  },
  {
    "airport_code": "BTU",
    "airport_name": "Bintulu Airport",
    "name": "Bintulu",
    "lat": "3.1728",
    "lon": "113.043",
    "country": "Malaysia"
  },
  {
    "airport_code": "BTV",
    "airport_name": "Burlington International Airport",
    "name": "South Burlington",
    "lat": "44.4688",
    "lon": "-73.1552",
    "country": "United States"
  },
  
  {
    "airport_code": "BUA",
    "airport_name": "Buka",
    "name": "Buka",
    "lat": "-5.42232",
    "lon": "154.673",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "BUC",
    "airport_name": "Burketown Aerodrome",
    "name": "Burketown",
    "lat": "-17.7484",
    "lon": "139.532",
    "country": "Australia"
  },
  {
    "airport_code": "BUD",
    "airport_name": "Ferihegy Airport",
    "name": "Budapest",
    "lat": "47.4453",
    "lon": "19.2195",
    "country": "Hungary"
  },
  {
    "airport_code": "BUF",
    "airport_name": "Greater Buffalo International Airport",
    "name": "Buffalo",
    "lat": "42.9309",
    "lon": "-78.738",
    "country": "United States"
  },
  {
    "airport_code": "BUL",
    "airport_name": "Bulolo",
    "name": "Bulolo",
    "lat": "33.9116",
    "lon": "-102.638",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "BUN",
    "airport_name": "Buenaventura Airport",
    "name": "Buenaventura",
    "lat": "3.8183",
    "lon": "-76.9931",
    "country": "Colombia"
  },
  {
    "airport_code": "BUO",
    "airport_name": "Burao",
    "name": "Burao",
    "lat": "65.8514",
    "lon": "12.344",
    "country": "Somalia"
  },
  {
    "airport_code": "BUQ",
    "airport_name": "Bulawayo Airport",
    "name": "Bulawayo",
    "lat": "-20.0169",
    "lon": "28.6181",
    "country": "Zimbabwe"
  },
  {
    "airport_code": "BUR",
    "airport_name": "Burbank Glendale Pasadena Airport",
    "name": "Burbank",
    "lat": "34.1963",
    "lon": "-118.352",
    "country": "United States"
  },
  {
    "airport_code": "BUS",
    "airport_name": "Batumi",
    "name": "Batumi",
    "lat": "50.0662",
    "lon": "2.96519",
    "country": "Georgia"
  },
  {
    "airport_code": "BUX",
    "airport_name": "Bunia Airport",
    "name": "Bunia",
    "lat": "1.5717",
    "lon": "30.2128",
    "country": "Congo"
  },
  {
    "airport_code": "BUZ",
    "airport_name": "Bushehr Airport",
    "name": "Bandar-e Bushehr",
    "lat": "28.9494",
    "lon": "50.8311",
    "country": "Iran"
  },
  
  {
    "airport_code": "BVB",
    "airport_name": "Boa Vista International Airport",
    "name": "Boa Vista",
    "lat": "2.8417",
    "lon": "-60.6917",
    "country": "Brazil"
  },
  {
    "airport_code": "BVC",
    "airport_name": "Boa Vista Airport",
    "name": "Boa Vista",
    "lat": "16.0961",
    "lon": "-22.8172",
    "country": "Cape Verde"
  },
  
  {
    "airport_code": "BVG",
    "airport_name": "Berlevag Airport",
    "name": "Berlevaag",
    "lat": "70.8702",
    "lon": "29.0294",
    "country": "Norway"
  },
  
  {
    "airport_code": "BVI",
    "airport_name": "Birdsville Airport",
    "name": "Birdsville",
    "lat": "-25.8971",
    "lon": "139.349",
    "country": "Australia"
  },
  {
    "airport_code": "BWA",
    "airport_name": "Bhairawa Airport",
    "name": "Bhairawa",
    "lat": "27.5042",
    "lon": "83.42",
    "country": "Nepal"
  },
  
  {
    "airport_code": "BWF",
    "airport_name": "Walney Island Airport",
    "name": "Barrow in Furness",
    "lat": "54.1284",
    "lon": "-3.26249",
    "country": "United Kingdom"
  },
  {
    "airport_code": "BWI",
    "airport_name": "Baltimore-Washington International Thurgood Mars",
    "name": "Baltimore",
    "lat": "39.1841",
    "lon": "-76.6745",
    "country": "United States"
  },
  {
    "airport_code": "BWK",
    "airport_name": "Bol",
    "name": "Bol",
    "lat": "43.2619",
    "lon": "16.655",
    "country": "Croatia"
  },
  {
    "airport_code": "BWN",
    "airport_name": "Brunei International Airport",
    "name": "Bandar Seri Begawan",
    "lat": "4.9458",
    "lon": "114.924",
    "country": "Brunei"
  },
  {
    "airport_code": "BWT",
    "airport_name": "Burnie Wynyard Airport",
    "name": "Doctors Rocks",
    "lat": "-40.9935",
    "lon": "145.725",
    "country": "Australia"
  },
  {
    "airport_code": "BWW",
    "airport_name": "Santa Clara Airport",
    "name": "Santa Clara",
    "lat": "22.4922",
    "lon": "-79.9408",
    "country": "Cuba"
  },
  {
    "airport_code": "BXR",
    "airport_name": "",
    "name": "Bam",
    "lat": "29.4375",
    "lon": "-98.4618",
    "country": "Iran"
  },
  {
    "airport_code": "BXU",
    "airport_name": "Butuan Airport",
    "name": "Buenavista",
    "lat": "8.9528",
    "lon": "125.476",
    "country": "Philippines"
  },
  {
    "airport_code": "BYM",
    "airport_name": "Bayamo Airport",
    "name": "Bayamo",
    "lat": "20.3972",
    "lon": "-76.6192",
    "country": "Cuba"
  },
  {
    "airport_code": "BYN",
    "airport_name": "",
    "name": "Bayankhongor",
    "lat": "62.0526",
    "lon": "17.1936",
    "country": "Mongolia"
  },
  {
    "airport_code": "BZE",
    "airport_name": "Philip S W Goldson International Airport",
    "name": "Hattieville",
    "lat": "17.5386",
    "lon": "-88.3042",
    "country": "Belize"
  },
  {
    "airport_code": "BZG",
    "airport_name": "Szwederowo Airport",
    "name": "Białe Błota",
    "lat": "53.0918",
    "lon": "17.9821",
    "country": "Poland"
  },
  {
    "airport_code": "BZK",
    "airport_name": "Briansk",
    "name": "Briansk",
    "lat": "53.2667",
    "lon": "34.3333",
    "country": "Russian Federation"
  },
  {
    "airport_code": "BZL",
    "airport_name": "",
    "name": "Barisal",
    "lat": "22.6667",
    "lon": "90.3417",
    "country": "Bangladesh"
  },
  {
    "airport_code": "BZN",
    "airport_name": "Gallatin Field Airport",
    "name": "Bozeman",
    "lat": "45.7722",
    "lon": "-111.157",
    "country": "United States"
  },
  {
    "airport_code": "BZO",
    "airport_name": "Bolzano Airport",
    "name": "Botzen",
    "lat": "46.4621",
    "lon": "11.3282",
    "country": "Italy"
  },
  {
    "airport_code": "BZR",
    "airport_name": "Vias Airport",
    "name": "Villeneuve",
    "lat": "43.3229",
    "lon": "3.35466",
    "country": "France"
  },
  {
    "airport_code": "BZV",
    "airport_name": "Brazzaville Maya Maya Airport",
    "name": "Brazzaville",
    "lat": "-4.2558",
    "lon": "15.2497",
    "country": "Congo"
  },
  
  {
    "airport_code": "CAB",
    "airport_name": "Cabinda Airport",
    "name": "Cabinda",
    "lat": "-5.59",
    "lon": "12.1886",
    "country": "Angola"
  },
  {
    "airport_code": "CAC",
    "airport_name": "Cascavel Airport",
    "name": "Cascavel",
    "lat": "-25.0017",
    "lon": "-53.5014",
    "country": "Brazil"
  },
  {
    "airport_code": "CAE",
    "airport_name": "Columbia Metropolitan Airport",
    "name": "West Columbia",
    "lat": "33.9468",
    "lon": "-81.1241",
    "country": "United States"
  },
  {
    "airport_code": "CAG",
    "airport_name": "Elmas Airport",
    "name": "Sardara",
    "lat": "39.2527",
    "lon": "9.05813",
    "country": "Italy"
  },
  {
    "airport_code": "CAH",
    "airport_name": "Camo",
    "name": "Ca Mau",
    "lat": "9.17667",
    "lon": "105.151",
    "country": "Vietnam"
  },
  {
    "airport_code": "CAI",
    "airport_name": "Cairo International Airport",
    "name": "Cairo",
    "lat": "30.1206",
    "lon": "31.4078",
    "country": "Egypt"
  },
  {
    "airport_code": "CAK",
    "airport_name": "Akron Canton Regional Airport",
    "name": "Canton",
    "lat": "40.9149",
    "lon": "-81.4309",
    "country": "United States"
  },
  {
    "airport_code": "CAL",
    "airport_name": "Campbeltown Airport",
    "name": "Campbeltown",
    "lat": "55.4388",
    "lon": "-5.69997",
    "country": "United Kingdom"
  },
  {
    "airport_code": "CAN",
    "airport_name": "Baiyun Airport",
    "name": "Guangzhou",
    "lat": "23.3925",
    "lon": "113.299",
    "country": "China"
  },
  {
    "airport_code": "CAP",
    "airport_name": "Cap Haitien Airport",
    "name": "Cap-Haïtien",
    "lat": "19.7328",
    "lon": "-72.195",
    "country": "Haiti"
  },
  {
    "airport_code": "CAX",
    "airport_name": "Carlisle Airport",
    "name": "Carlisle",
    "lat": "54.9375",
    "lon": "-2.8106",
    "country": "United Kingdom"
  },
  {
    "airport_code": "CAY",
    "airport_name": "Rochambeau",
    "name": "Cayenne",
    "lat": "4.93333",
    "lon": "-52.3333",
    "country": "French Guiana"
  },
  {
    "airport_code": "CAZ",
    "airport_name": "Cobar Airport",
    "name": "Canbelego",
    "lat": "-31.5334",
    "lon": "145.797",
    "country": "Australia"
  },
  {
    "airport_code": "CBB",
    "airport_name": "Jorge Wilsterman Airport",
    "name": "Cochabamba",
    "lat": "-17.4161",
    "lon": "-66.1744",
    "country": "Bolivia"
  },
  {
    "airport_code": "CBG",
    "airport_name": "Cambridge Airport",
    "name": "Cambridge",
    "lat": "52.2069",
    "lon": "0.17355",
    "country": "United Kingdom"
  },
  {
    "airport_code": "CBH",
    "airport_name": "Bechar Airport",
    "name": "Bechar",
    "lat": "31.6583",
    "lon": "-2.2614",
    "country": "Algeria"
  },
  {
    "airport_code": "CBO",
    "airport_name": "Cotabato Airport",
    "name": "Sultan Kudarat",
    "lat": "7.165",
    "lon": "124.208",
    "country": "Philippines"
  },
  {
    "airport_code": "CBQ",
    "airport_name": "Calabar Airport",
    "name": "Duke Town",
    "lat": "4.9756",
    "lon": "8.3481",
    "country": "Nigeria"
  },
  {
    "airport_code": "CBR",
    "airport_name": "Canberra International Airport",
    "name": "Canberra",
    "lat": "-35.3069",
    "lon": "149.195",
    "country": "Australia"
  },
  {
    "airport_code": "CBT",
    "airport_name": "Angola",
    "name": "Catumbela",
    "lat": "-12.4827",
    "lon": "13.4904",
    "country": "Angola"
  },
  {
    "airport_code": "CCC",
    "airport_name": "Cuba",
    "name": "Cayo Coco",
    "lat": "22.4817",
    "lon": "-78.4813",
    "country": "Cuba"
  },
  
  {
    "airport_code": "CCJ",
    "airport_name": "Kozhikode Airport",
    "name": "Pallikkal",
    "lat": "11.1329",
    "lon": "75.9536",
    "country": "India"
  },
  {
    "airport_code": "CCK",
    "airport_name": "Cocos Airport",
    "name": "West Island",
    "lat": "-12.1778",
    "lon": "96.839",
    "country": "Cocos (Keeling) Islands"
  },
  {
    "airport_code": "CCM",
    "airport_name": "Criciuma Airport",
    "name": "Forquilhinha",
    "lat": "-28.7239",
    "lon": "-49.4208",
    "country": "Brazil"
  },
  {
    "airport_code": "CCP",
    "airport_name": "Carriel Sur International Airport",
    "name": "Hualpencillo",
    "lat": "-36.7736",
    "lon": "-73.06",
    "country": "Chile"
  },
  {
    "airport_code": "CCS",
    "airport_name": "Simon Bolivar International Airport",
    "name": "Catia la Mar",
    "lat": "10.6053",
    "lon": "-66.9881",
    "country": "Venezuela"
  },
  {
    "airport_code": "CCU",
    "airport_name": "Netaji Subhash Chandra Bose International Airpor",
    "name": "Kolkata",
    "lat": "22.6572",
    "lon": "88.4506",
    "country": "India"
  },
  {
    "airport_code": "CCV",
    "airport_name": "Vanuatu",
    "name": "Craig Cove",
    "lat": "-16.6619",
    "lon": "168.38",
    "country": "Vanuatu"
  },
  {
    "airport_code": "CCZ",
    "airport_name": "Chub Cay Airport",
    "name": "Chub Cay",
    "lat": "25.4098",
    "lon": "-77.8843",
    "country": "Bahamas"
  },
  {
    "airport_code": "CDB",
    "airport_name": "Cold Bay Airport",
    "name": "Cold Bay",
    "lat": "55.2005",
    "lon": "-162.705",
    "country": "United States"
  },
  {
    "airport_code": "CDC",
    "airport_name": "Cedar City Municipal Airport",
    "name": "Cedar City",
    "lat": "37.6992",
    "lon": "-113.092",
    "country": "United States"
  },
  {
    "airport_code": "CDG",
    "airport_name": "Charles de Gaulle International Airport",
    "name": "Le Mesnil-Amelot",
    "lat": "49.0175",
    "lon": "2.5564",
    "country": "France"
  },
  {
    "airport_code": "CDR",
    "airport_name": "Chadron Municipal Airport",
    "name": "Chadron",
    "lat": "42.8284",
    "lon": "-103.094",
    "country": "United States"
  },
  {
    "airport_code": "CDV",
    "airport_name": "Merle K Mudhole Smith Airport",
    "name": "Cordova",
    "lat": "60.4924",
    "lon": "-145.475",
    "country": "United States"
  },
  
  {
    "airport_code": "CEB",
    "airport_name": "Lahug Airport",
    "name": "Cebu",
    "lat": "10.3596",
    "lon": "123.837",
    "country": "Philippines"
  },
  {
    "airport_code": "CEC",
    "airport_name": "Jack Mcnamara Field Airport",
    "name": "Crescent City",
    "lat": "41.7765",
    "lon": "-124.237",
    "country": "United States"
  },
  {
    "airport_code": "CED",
    "airport_name": "Ceduna Airport",
    "name": "Ceduna",
    "lat": "-32.1264",
    "lon": "133.701",
    "country": "Australia"
  },
  {
    "airport_code": "CEE",
    "airport_name": "Cherepovets Airport",
    "name": "Cherepovets",
    "lat": "59.083",
    "lon": "37.938",
    "country": "Russia"
  },
  {
    "airport_code": "CEG",
    "airport_name": "Hawarden Airport",
    "name": "Chester",
    "lat": "53.1707",
    "lon": "-2.98142",
    "country": "United Kingdom"
  },
  {
    "airport_code": "CEI",
    "airport_name": "Chiang Rai Airport",
    "name": "Chiang Rai",
    "lat": "19.8864",
    "lon": "99.8306",
    "country": "Thailand"
  },
  {
    "airport_code": "CEK",
    "airport_name": "Chelyabinsk Balandino Airport",
    "name": "Zlatoust",
    "lat": "55.3104",
    "lon": "61.4913",
    "country": "Russia"
  },
  {
    "airport_code": "CEM",
    "airport_name": "Central Airport",
    "name": "Circle",
    "lat": "65.6121",
    "lon": "-144.674",
    "country": "United States"
  },
  {
    "airport_code": "CEN",
    "airport_name": "Ciudad Obregon Airport",
    "name": "Ciudad Obregón",
    "lat": "27.3925",
    "lon": "-109.832",
    "country": "Mexico"
  },
  {
    "airport_code": "CEZ",
    "airport_name": "Cortez-Montezuma County Airport",
    "name": "Cortez",
    "lat": "37.3044",
    "lon": "-108.63",
    "country": "United States"
  },
  {
    "airport_code": "CFC",
    "airport_name": "Cacador Airport",
    "name": "Caçador",
    "lat": "-26.7775",
    "lon": "-51.0175",
    "country": "Brazil"
  },
  {
    "airport_code": "CFE",
    "airport_name": "Aulnat Airport",
    "name": "Aulnat",
    "lat": "45.7896",
    "lon": "3.16013",
    "country": "France"
  },
  {
    "airport_code": "CFK",
    "airport_name": "Abou Bakr Belkaid",
    "name": "Chlef",
    "lat": "36.2128",
    "lon": "1.33167",
    "country": "Algeria"
  },
  {
    "airport_code": "CFN",
    "airport_name": "Carrickfin Airport",
    "name": "Mullaghduff",
    "lat": "55.0416",
    "lon": "-8.3436",
    "country": "Ireland"
  },
  {
    "airport_code": "CFR",
    "airport_name": "Carpiquet Airport",
    "name": "Carpiquet",
    "lat": "49.1825",
    "lon": "-0.45906",
    "country": "France"
  },
  {
    "airport_code": "CFS",
    "airport_name": "Coffs Harbour Airport",
    "name": "Coffs Harbour",
    "lat": "-30.3171",
    "lon": "153.119",
    "country": "Australia"
  },
  {
    "airport_code": "CFU",
    "airport_name": "Kerkira Airport",
    "name": "Corcyra",
    "lat": "39.6013",
    "lon": "19.9136",
    "country": "Greece"
  },
  {
    "airport_code": "CGA",
    "airport_name": "Craig Seaplane Base",
    "name": "Craig",
    "lat": "55.4592",
    "lon": "-133.106",
    "country": "United States"
  },
  {
    "airport_code": "CGB",
    "airport_name": "Marechal Rondon International Airport",
    "name": "Cuiaba",
    "lat": "-15.6497",
    "lon": "-56.1169",
    "country": "Brazil"
  },
  {
    "airport_code": "CGD",
    "airport_name": "Changde Airport",
    "name": "Changde",
    "lat": "28.9196",
    "lon": "111.63",
    "country": "China"
  },
  {
    "airport_code": "CGH",
    "airport_name": "Congonhas International Airport",
    "name": "Sao Paulo",
    "lat": "-23.6285",
    "lon": "-46.6589",
    "country": "Brazil"
  },
  {
    "airport_code": "CGI",
    "airport_name": "Cape Girardeau Municipal Airport",
    "name": "Scott City",
    "lat": "37.2272",
    "lon": "-89.5637",
    "country": "United States"
  },
  {
    "airport_code": "CGK",
    "airport_name": "Jakarta International Airport",
    "name": "Tangerang",
    "lat": "-6.11964",
    "lon": "106.656",
    "country": "Indonesia"
  },
  {
    "airport_code": "CGM",
    "airport_name": "Philippines",
    "name": "Camiguin",
    "lat": "9.173",
    "lon": "124.725",
    "country": "Philippines"
  },
  {
    "airport_code": "CGN",
    "airport_name": "Cologne Bonn Airport",
    "name": "Cologne",
    "lat": "50.8784",
    "lon": "7.12293",
    "country": "Germany"
  },
  {
    "airport_code": "CGO",
    "airport_name": "Zhengzhou Airport",
    "name": "Zhengzhou",
    "lat": "34.75",
    "lon": "113.65",
    "country": "China"
  },
  {
    "airport_code": "CGP",
    "airport_name": "Chittagong Airport",
    "name": "Chittagong",
    "lat": "22.2517",
    "lon": "91.815",
    "country": "Bangladesh"
  },
  {
    "airport_code": "CGQ",
    "airport_name": "Dafang Shen Airport",
    "name": "Changchun",
    "lat": "43.9069",
    "lon": "125.207",
    "country": "China"
  },
  {
    "airport_code": "CGR",
    "airport_name": "Campo Grande International Airport",
    "name": "Campo Grande",
    "lat": "-20.475",
    "lon": "-54.6736",
    "country": "Brazil"
  },
  {
    "airport_code": "CGY",
    "airport_name": "Cagayan de Oro Airport",
    "name": "Cagayan de Oro",
    "lat": "8.4139",
    "lon": "124.608",
    "country": "Philippines"
  },
  {
    "airport_code": "CHA",
    "airport_name": "Chattanooga Metropolitan Airport",
    "name": "Chattanooga",
    "lat": "35.0373",
    "lon": "-85.1966",
    "country": "United States"
  },
  {
    "airport_code": "CHC",
    "airport_name": "Christchurch International Airport",
    "name": "Christchurch",
    "lat": "-43.4859",
    "lon": "172.534",
    "country": "New Zealand"
  },
  {
    "airport_code": "CHO",
    "airport_name": "Charlottesville Albemarle Airport",
    "name": "Earlysville",
    "lat": "38.14",
    "lon": "-78.4487",
    "country": "United States"
  },
  {
    "airport_code": "CHQ",
    "airport_name": "Souda Airport",
    "name": "Canea",
    "lat": "35.5319",
    "lon": "24.1489",
    "country": "Greece"
  },
  
  {
    "airport_code": "CHT",
    "airport_name": "Karewa",
    "name": "Chatham Island",
    "lat": "-37.9723",
    "lon": "174.566",
    "country": "New Zealand"
  },
  {
    "airport_code": "CHU",
    "airport_name": "Chuathbaluk",
    "name": "Chuathbaluk",
    "lat": "61.5769",
    "lon": "-159.244",
    "country": "United States"
  },
  {
    "airport_code": "CHY",
    "airport_name": "Choiseul Bay",
    "name": "Choiseul Bay",
    "lat": "-6.7",
    "lon": "156.45",
    "country": "Solomon Islands"
  },
  {
    "airport_code": "CIA",
    "airport_name": "Ciampino Airport",
    "name": "Rome",
    "lat": "41.8004",
    "lon": "12.5908",
    "country": "Italy"
  },
  {
    "airport_code": "CIC",
    "airport_name": "Chico Municipal Airport",
    "name": "Chico",
    "lat": "39.7987",
    "lon": "-121.854",
    "country": "United States"
  },
  {
    "airport_code": "CID",
    "airport_name": "Cedar Rapids Municipal Airport",
    "name": "Cedar Rapids",
    "lat": "41.8893",
    "lon": "-91.7008",
    "country": "United States"
  },
  {
    "airport_code": "CIF",
    "airport_name": "Chifeng",
    "name": "Chifeng",
    "lat": "42.3333",
    "lon": "119.008",
    "country": "China"
  },
  {
    "airport_code": "CIH",
    "airport_name": "Changzhi",
    "name": "Changzhi",
    "lat": "36.1833",
    "lon": "113.133",
    "country": "China"
  },
  {
    "airport_code": "CIJ",
    "airport_name": "E. Beltram Airport",
    "name": "Cobija",
    "lat": "-11.0178",
    "lon": "-68.759",
    "country": "Bolivia"
  },
  {
    "airport_code": "CIK",
    "airport_name": "Chalkyitsik Airport",
    "name": "Chalkyitsik",
    "lat": "66.65",
    "lon": "-143.75",
    "country": "United States"
  },
  {
    "airport_code": "CIP",
    "airport_name": "",
    "name": "Chipata",
    "lat": "-11.1358",
    "lon": "-38.5205",
    "country": "Zambia"
  },
  {
    "airport_code": "CIT",
    "airport_name": "",
    "name": "Shimkent",
    "lat": "39.89",
    "lon": "-78.0166",
    "country": "Kazakhstan"
  },
  {
    "airport_code": "CIU",
    "airport_name": "Chippewa County International Airport",
    "name": "Kincheloe",
    "lat": "46.2581",
    "lon": "-84.4739",
    "country": "United States"
  },
  {
    "airport_code": "CIW",
    "airport_name": "Canouan Airport",
    "name": "Canouan Island",
    "lat": "12.7187",
    "lon": "-61.3306",
    "country": "Saint Vincent and the Grenadines"
  },
  {
    "airport_code": "CIX",
    "airport_name": "Cap J A Quinones Gonzales Airport",
    "name": "Chiclayo",
    "lat": "-6.7897",
    "lon": "-79.8322",
    "country": "Peru"
  },
  {
    "airport_code": "CJA",
    "airport_name": "Maj Gen Fap A R Iglesias Airport",
    "name": "Cajamarca",
    "lat": "-7.1322",
    "lon": "-78.4889",
    "country": "Peru"
  },
  {
    "airport_code": "CJB",
    "airport_name": "Peelamedu Airport",
    "name": "Coimbatore",
    "lat": "11.0233",
    "lon": "77.0482",
    "country": "India"
  },
  {
    "airport_code": "CJC",
    "airport_name": "El Loa Airport",
    "name": "Calama",
    "lat": "-22.4944",
    "lon": "-68.9017",
    "country": "Chile"
  },
  
  {
    "airport_code": "CJL",
    "airport_name": "Chitral Airport",
    "name": "Chitral",
    "lat": "35.8861",
    "lon": "71.7944",
    "country": "Pakistan"
  },
  {
    "airport_code": "CJS",
    "airport_name": "Ciudad Juarez International Airport",
    "name": "Ciudad Juarez",
    "lat": "31.6361",
    "lon": "-106.428",
    "country": "Mexico"
  },
  {
    "airport_code": "CJU",
    "airport_name": "Cheju International Airport",
    "name": "Jeju-Si",
    "lat": "33.5056",
    "lon": "126.495",
    "country": "South Korea"
  },
  {
    "airport_code": "CKB",
    "airport_name": "Benedum Airport",
    "name": "Clarksburg",
    "lat": "39.2967",
    "lon": "-80.2314",
    "country": "United States"
  },
  {
    "airport_code": "CKD",
    "airport_name": "Crooked Creek Airport",
    "name": "Aniak",
    "lat": "61.8667",
    "lon": "-158.133",
    "country": "United States"
  },
  {
    "airport_code": "CKG",
    "airport_name": "Chongqing Jiangbei International",
    "name": "Chongqing",
    "lat": "29.5833",
    "lon": "106.5",
    "country": "China"
  },
  {
    "airport_code": "CKH",
    "airport_name": "Russia",
    "name": "Chokurdah",
    "lat": "70.6416",
    "lon": "147.933",
    "country": "Russia"
  },
  {
    "airport_code": "CKS",
    "airport_name": "Carajas Airport",
    "name": "Carajas",
    "lat": "-6.1175",
    "lon": "-50.0036",
    "country": "Brazil"
  },
  {
    "airport_code": "CKX",
    "airport_name": "Chicken Airport",
    "name": "Tok",
    "lat": "64.0833",
    "lon": "-141.917",
    "country": "United States"
  },
  {
    "airport_code": "CKY",
    "airport_name": "Conakry Airport",
    "name": "Conakry",
    "lat": "9.5764",
    "lon": "-13.6108",
    "country": "Guinea"
  },
  {
    "airport_code": "CKZ",
    "airport_name": "Abydus",
    "name": "Canakkale",
    "lat": "40.1553",
    "lon": "26.4142",
    "country": "Turkey"
  },
  {
    "airport_code": "CLD",
    "airport_name": "Mcclellan Palomar Airport",
    "name": "Carlsbad",
    "lat": "33.1255",
    "lon": "-117.275",
    "country": "United States"
  },
  {
    "airport_code": "CLE",
    "airport_name": "Hopkins International Airport",
    "name": "Cleveland",
    "lat": "41.4115",
    "lon": "-81.8339",
    "country": "United States"
  },
  {
    "airport_code": "CLJ",
    "airport_name": "Someseni Airport",
    "name": "Clausemburgo",
    "lat": "46.7902",
    "lon": "23.6984",
    "country": "Romania"
  },
  {
    "airport_code": "CLL",
    "airport_name": "Easterwood Field Airport",
    "name": "College Station",
    "lat": "30.5938",
    "lon": "-96.3685",
    "country": "United States"
  },
  {
    "airport_code": "CLM",
    "airport_name": "William R Fairchild International Airport",
    "name": "Port Angeles",
    "lat": "48.1155",
    "lon": "-123.491",
    "country": "United States"
  },
  {
    "airport_code": "CLO",
    "airport_name": "Alfonso Bonilla Aragon International Airport",
    "name": "Obando",
    "lat": "3.5461",
    "lon": "-76.385",
    "country": "Colombia"
  },
  {
    "airport_code": "CLP",
    "airport_name": "Clarks Point Airport",
    "name": "Clarks Point",
    "lat": "58.8517",
    "lon": "-158.51",
    "country": "United States"
  },
  {
    "airport_code": "CLQ",
    "airport_name": "Colima Airport",
    "name": "Cuauhtémoc",
    "lat": "19.2733",
    "lon": "-103.577",
    "country": "Mexico"
  },
  {
    "airport_code": "CLT",
    "airport_name": "Douglas International Airport",
    "name": "Charlotte",
    "lat": "35.2226",
    "lon": "-80.946",
    "country": "United States"
  },
  {
    "airport_code": "CLY",
    "airport_name": "Ste Catherine Airport",
    "name": "Calenzana",
    "lat": "42.5295",
    "lon": "8.79677",
    "country": "France"
  },
  {
    "airport_code": "CMA",
    "airport_name": "Cunnamulla",
    "name": "Cunnamulla",
    "lat": "-28.0333",
    "lon": "145.617",
    "country": "Australia"
  },
  {
    "airport_code": "CMB",
    "airport_name": "Katunayake International Airport",
    "name": "Gampaha",
    "lat": "7.1806",
    "lon": "79.8856",
    "country": "Sri Lanka"
  },
  {
    "airport_code": "CME",
    "airport_name": "Ciudad del Carmen Airport",
    "name": "Carmen Olorón",
    "lat": "18.6522",
    "lon": "-91.8011",
    "country": "Mexico"
  },
  {
    "airport_code": "CMF",
    "airport_name": "Aix les Bains Airport",
    "name": "La Motte",
    "lat": "45.6375",
    "lon": "5.88291",
    "country": "France"
  },
  {
    "airport_code": "CMG",
    "airport_name": "Corumba International Airport",
    "name": "Corumba",
    "lat": "-19.0055",
    "lon": "-57.7055",
    "country": "Brazil"
  },
  {
    "airport_code": "CMH",
    "airport_name": "Port Columbus International Airport",
    "name": "Columbus",
    "lat": "39.9974",
    "lon": "-82.8877",
    "country": "United States"
  },
  {
    "airport_code": "CMI",
    "airport_name": "University of Illinois-Willard Airport",
    "name": "Savoy",
    "lat": "40.0367",
    "lon": "-88.2638",
    "country": "United States"
  },
  {
    "airport_code": "CMN",
    "airport_name": "Mohamed V Airport",
    "name": "Casablanca",
    "lat": "33.365",
    "lon": "-7.5817",
    "country": "Morocco"
  },
  {
    "airport_code": "CMU",
    "airport_name": "Chimbu Airport",
    "name": "Kundiawa",
    "lat": "-6.0283",
    "lon": "44.9717",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "CMW",
    "airport_name": "Ignacio Agramonte Airport",
    "name": "Camagüey",
    "lat": "21.4186",
    "lon": "-77.8458",
    "country": "Cuba"
  },
  {
    "airport_code": "CMX",
    "airport_name": "Houghton County Memorial Airport",
    "name": "Hancock",
    "lat": "47.1689",
    "lon": "-88.4942",
    "country": "United States"
  },
  {
    "airport_code": "CNB",
    "airport_name": "Coonamble Airport",
    "name": "Coonamble",
    "lat": "-30.9742",
    "lon": "148.381",
    "country": "Australia"
  },
  {
    "airport_code": "CNC",
    "airport_name": "Australia",
    "name": "Coconut Island",
    "lat": "-10.0505",
    "lon": "143.069",
    "country": "Australia"
  },
  {
    "airport_code": "CND",
    "airport_name": "Constanta Mihail Kogalniceanu Airport",
    "name": "Kustenje",
    "lat": "44.3581",
    "lon": "28.4896",
    "country": "Romania"
  },
  {
    "airport_code": "CNF",
    "airport_name": "Tancredo Neves International Airport",
    "name": "Confins",
    "lat": "-19.6242",
    "lon": "-43.9717",
    "country": "Brazil"
  },
  {
    "airport_code": "CNJ",
    "airport_name": "Cloncurry Aerodrome",
    "name": "Cloncurry",
    "lat": "-20.6657",
    "lon": "140.508",
    "country": "Australia"
  },
  {
    "airport_code": "CNM",
    "airport_name": "Cavern City Air Terminal Airport",
    "name": "Carlsbad",
    "lat": "32.3458",
    "lon": "-104.251",
    "country": "United States"
  },
  {
    "airport_code": "CNP",
    "airport_name": "Neerlerit Inaat",
    "name": "Neerlerit Inaat",
    "lat": "70.7431",
    "lon": "-22.6583",
    "country": "Greenland"
  },
  {
    "airport_code": "CNQ",
    "airport_name": "Corrientes Airport",
    "name": "Corrientes",
    "lat": "-27.4497",
    "lon": "-58.7622",
    "country": "Argentina"
  },
  {
    "airport_code": "CNS",
    "airport_name": "Cairns International Airport",
    "name": "Cairns",
    "lat": "-16.8831",
    "lon": "145.753",
    "country": "Australia"
  },
  {
    "airport_code": "CNX",
    "airport_name": "Chiang Mai International Airport",
    "name": "Chiang Mai",
    "lat": "18.7714",
    "lon": "98.9628",
    "country": "Thailand"
  },
  {
    "airport_code": "CNY",
    "airport_name": "Canyonlands Field Airport",
    "name": "Thompson",
    "lat": "38.7609",
    "lon": "-109.742",
    "country": "United States"
  },
  {
    "airport_code": "COD",
    "airport_name": "Yellowstone Regional Airport",
    "name": "Cody/Yellowstone",
    "lat": "44.5134",
    "lon": "-109.031",
    "country": "United States"
  },
  {
    "airport_code": "COK",
    "airport_name": "Kochi Airport",
    "name": "Kochi",
    "lat": "9.93997",
    "lon": "76.2748",
    "country": "India"
  },
  {
    "airport_code": "COL",
    "airport_name": "Coll Island Airport",
    "name": "Isle of coll",
    "lat": "56.6167",
    "lon": "-6.61667",
    "country": "United Kingdom"
  },
  {
    "airport_code": "COO",
    "airport_name": "Cotonou Cadjehon Airport",
    "name": "Cotonou",
    "lat": "6.3542",
    "lon": "2.3856",
    "country": "Benin"
  },
  {
    "airport_code": "COQ",
    "airport_name": "Choybalsan Northeast Airport",
    "name": "Choibalsan",
    "lat": "48.1366",
    "lon": "114.65",
    "country": "Mongolia"
  },
  {
    "airport_code": "COR",
    "airport_name": "Ingeniero Ambrosio L.V. Taravella International ",
    "name": "Cordoba",
    "lat": "-31.3131",
    "lon": "-64.1994",
    "country": "Argentina"
  },
  {
    "airport_code": "COS",
    "airport_name": "City of Colorado Springs Municipal Airport",
    "name": "Colorado Springs",
    "lat": "38.7829",
    "lon": "-104.697",
    "country": "United States"
  },
  {
    "airport_code": "COU",
    "airport_name": "Columbia Regional Airport",
    "name": "Columbia",
    "lat": "38.8174",
    "lon": "-92.2218",
    "country": "United States"
  },
  {
    "airport_code": "CPC",
    "airport_name": "Chapelco Airport",
    "name": "San Martin DeLos Andes",
    "lat": "-40.0758",
    "lon": "-71.1392",
    "country": "Argentina"
  },
  {
    "airport_code": "CPD",
    "airport_name": "Coober Pedy Aerodrome",
    "name": "Coober Pedy",
    "lat": "-29.0378",
    "lon": "134.724",
    "country": "Australia"
  },
  {
    "airport_code": "CPE",
    "airport_name": "Ignacio Alberto Acuna Ongay Airport",
    "name": "Campeche",
    "lat": "19.8158",
    "lon": "-90.5008",
    "country": "Mexico"
  },
  {
    "airport_code": "CPH",
    "airport_name": "Copenhagen Airport",
    "name": "Kastrup",
    "lat": "55.6205",
    "lon": "12.6495",
    "country": "Denmark"
  },
  {
    "airport_code": "CPO",
    "airport_name": "Chamonate Airport",
    "name": "Copiapó",
    "lat": "-27.2933",
    "lon": "-70.4122",
    "country": "Chile"
  },
  {
    "airport_code": "CPQ",
    "airport_name": "Campinas International Airport",
    "name": "Campinas",
    "lat": "-23",
    "lon": "-47.1333",
    "country": "Brazil"
  },
  {
    "airport_code": "CPR",
    "airport_name": "Natrona County International Airport",
    "name": "Casper",
    "lat": "42.8966",
    "lon": "-106.465",
    "country": "United States"
  },
  {
    "airport_code": "CPT",
    "airport_name": "D F Malan Airport",
    "name": "Cape Town",
    "lat": "-33.9647",
    "lon": "18.6022",
    "country": "South Africa"
  },
  {
    "airport_code": "CPV",
    "airport_name": "Presidente Joao Suassuna Airport",
    "name": "Campina Grande",
    "lat": "-7.2689",
    "lon": "-35.8947",
    "country": "Brazil"
  },
  {
    "airport_code": "CPX",
    "airport_name": "Culebra Airport",
    "name": "Culebra",
    "lat": "18.3204",
    "lon": "-65.2929",
    "country": "United States"
  },
  {
    "airport_code": "CQD",
    "airport_name": "Shahre-Kord",
    "name": "Shahre-Kord",
    "lat": "32.2967",
    "lon": "50.8417",
    "country": "Iran"
  },
  {
    "airport_code": "CRA",
    "airport_name": "Craiova Airport",
    "name": "Croiova",
    "lat": "44.3173",
    "lon": "23.8447",
    "country": "Romania"
  },
  {
    "airport_code": "CRD",
    "airport_name": "General Enrique Mosconi Airport",
    "name": "Comodoro Rivadavia",
    "lat": "-45.7872",
    "lon": "-67.4628",
    "country": "Argentina"
  },
  {
    "airport_code": "CRI",
    "airport_name": "Colonel Hill Airport",
    "name": "Colonel Hill",
    "lat": "22.7467",
    "lon": "-74.18",
    "country": "Bahamas"
  },
  
  
  {
    "airport_code": "CRM",
    "airport_name": "Catarman Airport",
    "name": "Catarman",
    "lat": "12.5044",
    "lon": "124.635",
    "country": "Philippines"
  },
  {
    "airport_code": "CRP",
    "airport_name": "Corpus Christi International Airport",
    "name": "Corpus Christi",
    "lat": "27.7747",
    "lon": "-97.5019",
    "country": "United States"
  },
  {
    "airport_code": "CRW",
    "airport_name": "Yeager Airport",
    "name": "Charleston",
    "lat": "38.3697",
    "lon": "-81.5951",
    "country": "United States"
  },
  {
    "airport_code": "CSA",
    "airport_name": "Isle Of Colonsay",
    "name": "Isle Of Colonsay",
    "lat": "56.0603",
    "lon": "-6.22418",
    "country": "United Kingdom"
  },
  {
    "airport_code": "CSG",
    "airport_name": "Columbus Metropolitan Airport",
    "name": "Columbus",
    "lat": "32.5184",
    "lon": "-84.9401",
    "country": "United States"
  },
  {
    "airport_code": "CSH",
    "airport_name": "Solovky",
    "name": "Solovetsky",
    "lat": "65.05",
    "lon": "35.6667",
    "country": "Russian Federation"
  },
  {
    "airport_code": "CSK",
    "airport_name": "Cap Skiring Airport",
    "name": "Cap Skirring",
    "lat": "12.3953",
    "lon": "-16.7514",
    "country": "Senegal"
  },
  {
    "airport_code": "CSX",
    "airport_name": "Huanghua Airport",
    "name": "Changsha",
    "lat": "28.0711",
    "lon": "112.958",
    "country": "China"
  },
  {
    "airport_code": "CSY",
    "airport_name": "Russia",
    "name": "Cheboksary",
    "lat": "56.1311",
    "lon": "47.2882",
    "country": "Russia"
  },
  {
    "airport_code": "CTA",
    "airport_name": "Catania Fontanarossa Airport",
    "name": "Catania",
    "lat": "37.4696",
    "lon": "15.0672",
    "country": "Italy"
  },
  {
    "airport_code": "CTC",
    "airport_name": "Catamarca Airport",
    "name": "San Isidro",
    "lat": "-28.5939",
    "lon": "-65.7542",
    "country": "Argentina"
  },
  {
    "airport_code": "CTG",
    "airport_name": "Rafael Nunez Airport",
    "name": "La Boquilla",
    "lat": "10.4481",
    "lon": "-75.5106",
    "country": "Colombia"
  },
  {
    "airport_code": "CTL",
    "airport_name": "Charleville Aerodrome",
    "name": "Charleville",
    "lat": "-26.4135",
    "lon": "146.263",
    "country": "Australia"
  },
  {
    "airport_code": "CTM",
    "airport_name": "Chetumal International Airport",
    "name": "Chetumal",
    "lat": "18.5039",
    "lon": "-88.3247",
    "country": "Mexico"
  },
  {
    "airport_code": "CTS",
    "airport_name": "New Chitose Airport",
    "name": "Chitose-shi",
    "lat": "42.7757",
    "lon": "141.691",
    "country": "Japan"
  },
  {
    "airport_code": "CTU",
    "airport_name": "Chengdushuang Liu Airport",
    "name": "Chengdu",
    "lat": "30.5775",
    "lon": "103.941",
    "country": "China"
  },
  {
    "airport_code": "CUC",
    "airport_name": "Camilo Daza Airport",
    "name": "Cúcuta",
    "lat": "7.93",
    "lon": "-72.5094",
    "country": "Colombia"
  },
  {
    "airport_code": "CUE",
    "airport_name": "Mariscal Lamar Airport",
    "name": "Cuenca",
    "lat": "-2.8867",
    "lon": "-78.9833",
    "country": "Ecuador"
  },
  {
    "airport_code": "CUF",
    "airport_name": "Levaldigi Airport",
    "name": "Fossano",
    "lat": "44.5466",
    "lon": "7.61998",
    "country": "Italy"
  },
  {
    "airport_code": "CUK",
    "airport_name": "Belize",
    "name": "Caye Caulker",
    "lat": "17.4956",
    "lon": "-88.1816",
    "country": "Belize"
  },
  {
    "airport_code": "CUL",
    "airport_name": "Culiacan Airport",
    "name": "Culiacan",
    "lat": "24.7644",
    "lon": "-107.474",
    "country": "Mexico"
  },
  {
    "airport_code": "CUM",
    "airport_name": "Antonio Jose de Sucre Airport",
    "name": "Cumaná",
    "lat": "10.4539",
    "lon": "-64.1297",
    "country": "Venezuela"
  },
  {
    "airport_code": "CUN",
    "airport_name": "Cancun Airport",
    "name": "Cancun",
    "lat": "21.0406",
    "lon": "-86.8744",
    "country": "Mexico"
  },
  {
    "airport_code": "CUP",
    "airport_name": "Gen Jose Francisco Bermudez Airport",
    "name": "El Pilar",
    "lat": "10.6589",
    "lon": "-63.2625",
    "country": "Venezuela"
  },
  {
    "airport_code": "CUR",
    "airport_name": "Hato Airport",
    "name": "Curacao",
    "lat": "12.188",
    "lon": "-68.9634",
    "country": "Netherlands Antilles"
  },
  {
    "airport_code": "CUU",
    "airport_name": "General R F Villalobos International Airport",
    "name": "Chihuahua",
    "lat": "28.7028",
    "lon": "-105.964",
    "country": "Mexico"
  },
  {
    "airport_code": "CUZ",
    "airport_name": "Velazco Astete Airport",
    "name": "San Sebastián",
    "lat": "-13.5308",
    "lon": "-71.9472",
    "country": "Peru"
  },
  {
    "airport_code": "CVG",
    "airport_name": "Greater Cincinnati International Airport",
    "name": "Hebron",
    "lat": "39.0571",
    "lon": "-84.6625",
    "country": "United States"
  },
  {
    "airport_code": "CVM",
    "airport_name": "Ciudad Victoria Airport",
    "name": "Güémez",
    "lat": "23.7139",
    "lon": "-98.9653",
    "country": "Mexico"
  },
  {
    "airport_code": "CVN",
    "airport_name": "Clovis Municipal Airport",
    "name": "Texico",
    "lat": "34.4271",
    "lon": "-103.087",
    "country": "United States"
  },
  {
    "airport_code": "CVQ",
    "airport_name": "Carnarvon Airport",
    "name": "Carnarvon",
    "lat": "-24.8801",
    "lon": "113.669",
    "country": "Australia"
  },
  {
    "airport_code": "CVT",
    "airport_name": "Coventry Airport",
    "name": "Coventry",
    "lat": "52.367",
    "lon": "-1.4895",
    "country": "United Kingdom"
  },
  {
    "airport_code": "CVU",
    "airport_name": "Corvo Island Airport",
    "name": "Corvo",
    "lat": "39.7",
    "lon": "-31.1",
    "country": "Portugal"
  },
  {
    "airport_code": "CWA",
    "airport_name": "Central Wisconsin Airport",
    "name": "Mosinee",
    "lat": "44.7846",
    "lon": "-89.6704",
    "country": "United States"
  },
  {
    "airport_code": "CWB",
    "airport_name": "Afonso Pena International Airport",
    "name": "Sao Jose dos Pinhais",
    "lat": "-25.5275",
    "lon": "-49.1731",
    "country": "Brazil"
  },
  {
    "airport_code": "CWC",
    "airport_name": "Chernovtsy Airport",
    "name": "Chernivtsi",
    "lat": "48.2526",
    "lon": "25.976",
    "country": "Ukraine"
  },
  {
    "airport_code": "CWL",
    "airport_name": "Cardiff International Airport",
    "name": "Barry",
    "lat": "51.3998",
    "lon": "-3.34475",
    "country": "United Kingdom"
  },
  {
    "airport_code": "CXB",
    "airport_name": "Coxs Bazar Airport",
    "name": "Cox's Bazar",
    "lat": "21.45",
    "lon": "91.9681",
    "country": "Bangladesh"
  },
  {
    "airport_code": "CXH",
    "airport_name": "Coal Harbour Airport",
    "name": "Vancouver",
    "lat": "49.5912",
    "lon": "-125.848",
    "country": "Canada"
  },
  {
    "airport_code": "CXI",
    "airport_name": "Christmas Island Airport",
    "name": "Christmas Island",
    "lat": "1.9849",
    "lon": "-157.675",
    "country": "Kiribati"
  },
  {
    "airport_code": "CXJ",
    "airport_name": "Campo dos Bugres Airport",
    "name": "Caxias do Sul",
    "lat": "-29.1961",
    "lon": "-51.1906",
    "country": "Brazil"
  },
  {
    "airport_code": "CXR",
    "airport_name": "Nha-Trang Airport",
    "name": "Nha Trang",
    "lat": "12.2333",
    "lon": "109.2",
    "country": "Vietnam"
  },
  {
    "airport_code": "CYB",
    "airport_name": "Gerrard Smith Airport",
    "name": "Cayman Brac Is",
    "lat": "19.689",
    "lon": "-79.8848",
    "country": "Cayman Islands"
  },
  
  {
    "airport_code": "CYI",
    "airport_name": "Chaiyi Airport",
    "name": "Chiayi City",
    "lat": "23.4542",
    "lon": "120.404",
    "country": "Taiwan"
  },
  {
    "airport_code": "CYO",
    "airport_name": "Cayo Largo del sur Airport",
    "name": "Cayo Largo Del Sur",
    "lat": "21.6169",
    "lon": "-81.5422",
    "country": "Cuba"
  },
  {
    "airport_code": "CYP",
    "airport_name": "Calbayog Airport",
    "name": "Calbayog",
    "lat": "12.0722",
    "lon": "124.544",
    "country": "Philippines"
  },
  {
    "airport_code": "CYS",
    "airport_name": "Cheyenne Airport",
    "name": "Cheyenne",
    "lat": "41.1527",
    "lon": "-104.819",
    "country": "United States"
  },
  {
    "airport_code": "CYU",
    "airport_name": "Cuyo",
    "name": "Cuyo",
    "lat": "10.8762",
    "lon": "121.064",
    "country": "Philippines"
  },
  {
    "airport_code": "CYX",
    "airport_name": "Cherskiy",
    "name": "Cherskiy",
    "lat": "68.75",
    "lon": "161.35",
    "country": "Russian Federation"
  },
  {
    "airport_code": "CYZ",
    "airport_name": "Cauayan Airport",
    "name": "Cauayan",
    "lat": "16.93",
    "lon": "121.756",
    "country": "Philippines"
  },
  {
    "airport_code": "CZE",
    "airport_name": "Jose Leonardo Chirinos Airport",
    "name": "La Vela de Coro",
    "lat": "11.4158",
    "lon": "-69.6819",
    "country": "Venezuela"
  },
  {
    "airport_code": "CZH",
    "airport_name": "Corozal Airport",
    "name": "Corozal",
    "lat": "18.3696",
    "lon": "-88.4307",
    "country": "Belize"
  },
  {
    "airport_code": "CZL",
    "airport_name": "Ain El Bey Airport",
    "name": "Constantine",
    "lat": "36.2778",
    "lon": "6.6247",
    "country": "Algeria"
  },
  {
    "airport_code": "CZM",
    "airport_name": "Cozumel International Airport",
    "name": "San Miguel de Cozumel",
    "lat": "20.5242",
    "lon": "-86.9264",
    "country": "Mexico"
  },
  {
    "airport_code": "CZN",
    "airport_name": "Chisana Airport",
    "name": "Gakona",
    "lat": "62.0833",
    "lon": "-142.05",
    "country": "United States"
  },
  {
    "airport_code": "CZS",
    "airport_name": "Cruzeiro do Sul International Airport",
    "name": "Cruzeiro Do Sul",
    "lat": "-7.5994",
    "lon": "-72.7697",
    "country": "Brazil"
  },
  {
    "airport_code": "CZU",
    "airport_name": "Las Brujas Airport",
    "name": "Morroa",
    "lat": "9.3375",
    "lon": "-75.2828",
    "country": "Colombia"
  },
  {
    "airport_code": "CZX",
    "airport_name": "Changzhou Airport",
    "name": "Changzhou",
    "lat": "31.7833",
    "lon": "119.95",
    "country": "China"
  },
  {
    "airport_code": "DAB",
    "airport_name": "Daytona Beach International Airport",
    "name": "Daytona Beach",
    "lat": "29.1874",
    "lon": "-81.0615",
    "country": "United States"
  },
  {
    "airport_code": "DAC",
    "airport_name": "Zia International Airport Dhaka",
    "name": "Dhaka",
    "lat": "23.8379",
    "lon": "90.3948",
    "country": "Bangladesh"
  },
  {
    "airport_code": "DAD",
    "airport_name": "Da Nang Airport",
    "name": "Tourane",
    "lat": "16.05",
    "lon": "108.2",
    "country": "Vietnam"
  },
  {
    "airport_code": "DAL",
    "airport_name": "Dallas Love Field Airport",
    "name": "Dallas",
    "lat": "32.8439",
    "lon": "-96.8496",
    "country": "United States"
  },
  {
    "airport_code": "DAM",
    "airport_name": "Damascus International Airport",
    "name": "Damascus",
    "lat": "33.4139",
    "lon": "36.5178",
    "country": "Syria"
  },
  {
    "airport_code": "DAR",
    "airport_name": "Dar Es Salaam Airport",
    "name": "Dar es Salaam",
    "lat": "-6.8753",
    "lon": "39.2019",
    "country": "Tanzania"
  },
  {
    "airport_code": "DAT",
    "airport_name": "",
    "name": "Datong",
    "lat": "45.3666",
    "lon": "-102.682",
    "country": "China"
  },
  {
    "airport_code": "DAU",
    "airport_name": "Daru Airport",
    "name": "Daru",
    "lat": "-9.0878",
    "lon": "143.195",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "DAX",
    "airport_name": "Daxian Airport",
    "name": "Daxian",
    "lat": "31.1336",
    "lon": "107.419",
    "country": "China"
  },
  {
    "airport_code": "DAY",
    "airport_name": "James M Cox Dayton International Airport",
    "name": "Dayton",
    "lat": "39.8968",
    "lon": "-84.2207",
    "country": "United States"
  },
  {
    "airport_code": "DBA",
    "airport_name": "Pakistan",
    "name": "Dalbandin",
    "lat": "30.4419",
    "lon": "69.3597",
    "country": "Pakistan"
  },
  {
    "airport_code": "DBO",
    "airport_name": "Dubbo Airport",
    "name": "Dubbo",
    "lat": "-32.2183",
    "lon": "148.574",
    "country": "Australia"
  },
  {
    "airport_code": "DBQ",
    "airport_name": "Dubuque Regional Airport",
    "name": "Dubuque",
    "lat": "42.4047",
    "lon": "-90.7037",
    "country": "United States"
  },
  {
    "airport_code": "DBV",
    "airport_name": "Dubrovnik Airport",
    "name": "Dubrovnik",
    "lat": "42.5631",
    "lon": "18.2692",
    "country": "Croatia"
  },
  {
    "airport_code": "DCA",
    "airport_name": "Washington National Airport",
    "name": "Arlington",
    "lat": "38.849",
    "lon": "-77.0438",
    "country": "United States"
  },
  {
    "airport_code": "DCF",
    "airport_name": "Cane Field Airport",
    "name": "Portsmouth",
    "lat": "15.5333",
    "lon": "-61.4",
    "country": "Dominica"
  },
  {
    "airport_code": "DCM",
    "airport_name": "Mazamet Airport",
    "name": "Labruguière",
    "lat": "43.5538",
    "lon": "2.28923",
    "country": "France"
  },
  {
    "airport_code": "DDC",
    "airport_name": "Dodge City Regional Airport",
    "name": "Dodge City",
    "lat": "37.7573",
    "lon": "-99.9697",
    "country": "United States"
  },
  {
    "airport_code": "DDG",
    "airport_name": "Dandong Airport",
    "name": "Dandong",
    "lat": "40.0242",
    "lon": "124.283",
    "country": "China"
  },
  {
    "airport_code": "DEA",
    "airport_name": "",
    "name": "Dera Ghazi Khan",
    "lat": "40.2483",
    "lon": "-74.0007",
    "country": "Pakistan"
  },
  {
    "airport_code": "DEC",
    "airport_name": "Decatur Airport",
    "name": "Decatur",
    "lat": "39.8335",
    "lon": "-88.8773",
    "country": "United States"
  },
  {
    "airport_code": "DED",
    "airport_name": "Dehra Dun",
    "name": "Dehra Dun",
    "lat": "30.3167",
    "lon": "78.0333",
    "country": "India"
  },
  {
    "airport_code": "DEF",
    "airport_name": "Dezful Airport",
    "name": "Dezful",
    "lat": "32.4317",
    "lon": "48.3989",
    "country": "Iran"
  },
  {
    "airport_code": "DEL",
    "airport_name": "Indira Gandhi International Airport",
    "name": "New Delhi",
    "lat": "28.5603",
    "lon": "77.1027",
    "country": "India"
  },
  {
    "airport_code": "DEN",
    "airport_name": "Denver International Airport",
    "name": "Denver",
    "lat": "39.8396",
    "lon": "-104.672",
    "country": "United States"
  },
  {
    "airport_code": "DEZ",
    "airport_name": "Deir Zzor Airport",
    "name": "Dayr az Zawr",
    "lat": "35.2822",
    "lon": "40.1744",
    "country": "Syria"
  },
  {
    "airport_code": "DFW",
    "airport_name": "Fort Worth International Airport",
    "name": "Dallas",
    "lat": "32.9222",
    "lon": "-97.0409",
    "country": "United States"
  },
  {
    "airport_code": "DGA",
    "airport_name": "Dangriga Airport",
    "name": "Dangriga",
    "lat": "16.9757",
    "lon": "-88.235",
    "country": "Belize"
  },
  {
    "airport_code": "DGE",
    "airport_name": "Mudgee Aerodrome",
    "name": "Apple Tree Flat",
    "lat": "-32.5613",
    "lon": "149.618",
    "country": "Australia"
  },
  
  {
    "airport_code": "DGO",
    "airport_name": "Durango Airport",
    "name": "Durango",
    "lat": "24.1283",
    "lon": "-104.527",
    "country": "Mexico"
  },
  {
    "airport_code": "DGT",
    "airport_name": "Dumaguete Airport",
    "name": "Sibulan",
    "lat": "9.3358",
    "lon": "123.301",
    "country": "Philippines"
  },
  {
    "airport_code": "DHM",
    "airport_name": "Gaggal Airport",
    "name": "Dharamsala",
    "lat": "32.3",
    "lon": "76.2667",
    "country": "India"
  },
  {
    "airport_code": "DHN",
    "airport_name": "Dothan Airport",
    "name": "Dothan",
    "lat": "31.3144",
    "lon": "-85.4487",
    "country": "United States"
  },
  {
    "airport_code": "DIB",
    "airport_name": "Mohanbari Airport",
    "name": "Dikhari",
    "lat": "27.4839",
    "lon": "95.0208",
    "country": "India"
  },
  {
    "airport_code": "DIE",
    "airport_name": "Antsiranana Arrachart Airport",
    "name": "Antseranana",
    "lat": "-12.3461",
    "lon": "49.2925",
    "country": "Madagascar"
  },
  {
    "airport_code": "DIG",
    "airport_name": "Diqing",
    "name": "Diqing",
    "lat": "26.1256",
    "lon": "109.308",
    "country": "China"
  },
  {
    "airport_code": "DIK",
    "airport_name": "Dickinson Municipal Airport",
    "name": "Dickinson",
    "lat": "46.8035",
    "lon": "-102.802",
    "country": "United States"
  },
  {
    "airport_code": "DIL",
    "airport_name": "Comoro",
    "name": "Dili",
    "lat": "-8.5533",
    "lon": "125.526",
    "country": "Indonesia"
  },
  {
    "airport_code": "DIN",
    "airport_name": "Dien Bien",
    "name": "Dien Bien Phu",
    "lat": "38.5686",
    "lon": "-81.0596",
    "country": "Vietnam"
  },
  {
    "airport_code": "DIR",
    "airport_name": "Aba Tenna Dejazmatch Yilma Airport",
    "name": "Dire Dawa",
    "lat": "9.6244",
    "lon": "41.8536",
    "country": "Ethiopia"
  },
  {
    "airport_code": "DIS",
    "airport_name": "Loubomo",
    "name": "Loubomo",
    "lat": "-4.21667",
    "lon": "12.5",
    "country": "Congo"
  },
  {
    "airport_code": "DIU",
    "airport_name": "Diu Airport",
    "name": "Diu",
    "lat": "20.7134",
    "lon": "70.9217",
    "country": "India"
  },
  {
    "airport_code": "DIY",
    "airport_name": "Diyarbakir Airport",
    "name": "Diyaribakir",
    "lat": "37.8947",
    "lon": "40.2019",
    "country": "Turkey"
  },
  {
    "airport_code": "DJB",
    "airport_name": "Sultan Taha Airport",
    "name": "Jambi",
    "lat": "-1.6369",
    "lon": "103.639",
    "country": "Indonesia"
  },
  {
    "airport_code": "DJE",
    "airport_name": "Zarzis Airport",
    "name": "Hawmat as Suq",
    "lat": "33.8764",
    "lon": "10.7792",
    "country": "Tunisia"
  },
  {
    "airport_code": "DJG",
    "airport_name": "Tiska Airport",
    "name": "Illizi",
    "lat": "24.2625",
    "lon": "9.4428",
    "country": "Algeria"
  },
  {
    "airport_code": "DJJ",
    "airport_name": "Sentani Airport",
    "name": "Jayapura",
    "lat": "-2.575",
    "lon": "140.514",
    "country": "Indonesia"
  },
  {
    "airport_code": "DKR",
    "airport_name": "Dakar Yoff Airport",
    "name": "Ngor",
    "lat": "14.7417",
    "lon": "-17.4931",
    "country": "Senegal"
  },
  {
    "airport_code": "DLA",
    "airport_name": "Douala Airport",
    "name": "Douala",
    "lat": "4.0133",
    "lon": "9.7097",
    "country": "Cameroon"
  },
  {
    "airport_code": "DLC",
    "airport_name": "Chou Shui Tzu Airport",
    "name": "Dalian",
    "lat": "38.9617",
    "lon": "121.543",
    "country": "China"
  },
  {
    "airport_code": "DLG",
    "airport_name": "Dillingham Municipal Airport",
    "name": "Dillingham",
    "lat": "59.0445",
    "lon": "-158.513",
    "country": "United States"
  },
  {
    "airport_code": "DLH",
    "airport_name": "Duluth International Airport",
    "name": "Duluth",
    "lat": "46.838",
    "lon": "-92.1781",
    "country": "United States"
  },
  {
    "airport_code": "DLI",
    "airport_name": "Lien Khuong Airport",
    "name": "Lam Dong",
    "lat": "11.7501",
    "lon": "108.377",
    "country": "Vietnam"
  },
  {
    "airport_code": "DLM",
    "airport_name": "Dalaman Airport",
    "name": "Ortaca",
    "lat": "36.7125",
    "lon": "28.7922",
    "country": "Turkey"
  },
  {
    "airport_code": "DLU",
    "airport_name": "Dali",
    "name": "Dali City",
    "lat": "25.5667",
    "lon": "100.233",
    "country": "China"
  },
  {
    "airport_code": "DLY",
    "airport_name": "Vanuatu",
    "name": "Dillons Bay",
    "lat": "-16.6619",
    "lon": "168.38",
    "country": "Vanuatu"
  },
  {
    "airport_code": "DLZ",
    "airport_name": "Dalanzadgad",
    "name": "Dalanzadgad",
    "lat": "43.9667",
    "lon": "104.683",
    "country": "Mongolia"
  },
  {
    "airport_code": "DMD",
    "airport_name": "Doomadgee",
    "name": "Doomadgee",
    "lat": "-18",
    "lon": "138.833",
    "country": "Australia"
  },
  {
    "airport_code": "DME",
    "airport_name": "Domodedovo Airport",
    "name": "Podol'sk",
    "lat": "55.4025",
    "lon": "37.9136",
    "country": "Russia"
  },
  {
    "airport_code": "DMK",
    "airport_name": "Don Mueang",
    "name": "Don Muang",
    "lat": "13.9181",
    "lon": "100.59",
    "country": "Thailand"
  },
  {
    "airport_code": "DMM",
    "airport_name": "King Fahd International Airport",
    "name": "Khuwaylidiyah",
    "lat": "26.4722",
    "lon": "49.8058",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "DMU",
    "airport_name": "Dimapur Airport",
    "name": "Dimapur",
    "lat": "25.8839",
    "lon": "93.7736",
    "country": "India"
  },
  {
    "airport_code": "DND",
    "airport_name": "Dundee Airport",
    "name": "Dundee",
    "lat": "56.4538",
    "lon": "-3.01347",
    "country": "United Kingdom"
  },
  {
    "airport_code": "DNH",
    "airport_name": "Dunhuang",
    "name": "Dunhuang",
    "lat": "40.2",
    "lon": "94.6833",
    "country": "China"
  },
  {
    "airport_code": "DNK",
    "airport_name": "Voloskoye Airport",
    "name": "Dnipropetrovs'k",
    "lat": "48.368",
    "lon": "35.0942",
    "country": "Ukraine"
  },
  {
    "airport_code": "DNR",
    "airport_name": "Pleurtuit Airport",
    "name": "Pleurtuit",
    "lat": "48.589",
    "lon": "-2.07757",
    "country": "France"
  },
  {
    "airport_code": "DNZ",
    "airport_name": "Cardak Airport",
    "name": "Denizli",
    "lat": "37.7667",
    "lon": "29.1",
    "country": "Turkey"
  },
  {
    "airport_code": "DOG",
    "airport_name": "Dongola Airport",
    "name": "Dongola",
    "lat": "19.1833",
    "lon": "30.4833",
    "country": "Sudan"
  },
  {
    "airport_code": "DOH",
    "airport_name": "Doha International Airport",
    "name": "Doha",
    "lat": "25.2592",
    "lon": "51.5658",
    "country": "Qatar"
  },
  {
    "airport_code": "DOK",
    "airport_name": "Donetsk Airport",
    "name": "Donets'k",
    "lat": "48.072",
    "lon": "37.7426",
    "country": "Ukraine"
  },
  {
    "airport_code": "DOM",
    "airport_name": "Melville Hall Airport",
    "name": "Marigot",
    "lat": "15.5431",
    "lon": "-61.3092",
    "country": "Dominica"
  },
  {
    "airport_code": "DOP",
    "airport_name": "Nepal",
    "name": "Dolpa",
    "lat": "29.217",
    "lon": "82.7517",
    "country": "Nepal"
  },
  {
    "airport_code": "DOU",
    "airport_name": "Dourados Airport",
    "name": "Dourados",
    "lat": "-22.1978",
    "lon": "-54.9225",
    "country": "Brazil"
  },
  {
    "airport_code": "DOY",
    "airport_name": "",
    "name": "Dongying",
    "lat": "40.0294",
    "lon": "-120.107",
    "country": "China"
  },
  {
    "airport_code": "DPL",
    "airport_name": "Dipolog Airport",
    "name": "Polanco",
    "lat": "8.6043",
    "lon": "123.348",
    "country": "Philippines"
  },
  {
    "airport_code": "DPO",
    "airport_name": "Devonport Airport",
    "name": "Devonport",
    "lat": "-41.1726",
    "lon": "146.425",
    "country": "Australia"
  },
  {
    "airport_code": "DPS",
    "airport_name": "Bali International Airport",
    "name": "Denpasar",
    "lat": "-8.7486",
    "lon": "115.165",
    "country": "Indonesia"
  },
  {
    "airport_code": "DRG",
    "airport_name": "Deering Airport",
    "name": "Deering",
    "lat": "66.0833",
    "lon": "-162.767",
    "country": "United States"
  },
  {
    "airport_code": "DRO",
    "airport_name": "Durango la Plata County Airport",
    "name": "Durango",
    "lat": "37.1595",
    "lon": "-107.751",
    "country": "United States"
  },
  {
    "airport_code": "DRS",
    "airport_name": "Ottendorf Okrilla Highway Strip Airport",
    "name": "Ottendorf-Okrilla",
    "lat": "51.1688",
    "lon": "13.7899",
    "country": "Germany"
  },
  {
    "airport_code": "DRT",
    "airport_name": "Del Rio International Airport",
    "name": "Del Rio",
    "lat": "29.3702",
    "lon": "-100.918",
    "country": "United States"
  },
  {
    "airport_code": "DRW",
    "airport_name": "Darwin International Airport",
    "name": "Darwin",
    "lat": "-12.4159",
    "lon": "130.874",
    "country": "Australia"
  },
  {
    "airport_code": "DSA",
    "airport_name": "Sheffield Airport",
    "name": "Doncaster Sheffield",
    "lat": "53.3954",
    "lon": "-1.38243",
    "country": "United Kingdom"
  },
  {
    "airport_code": "DSM",
    "airport_name": "Des Moines International Airport",
    "name": "Des Moines",
    "lat": "41.5328",
    "lon": "-93.6481",
    "country": "United States"
  },
  {
    "airport_code": "DSN",
    "airport_name": "Dongsheng Airport",
    "name": "Dongsheng",
    "lat": "39.8295",
    "lon": "109.976",
    "country": "China"
  },
  {
    "airport_code": "DTM",
    "airport_name": "Dortmund Airport",
    "name": "Dortmund",
    "lat": "51.5123",
    "lon": "7.60451",
    "country": "Germany"
  },
  {
    "airport_code": "DTW",
    "airport_name": "Detroit Metropolitan Wayne County Airport",
    "name": "Detroit",
    "lat": "42.2327",
    "lon": "-83.3412",
    "country": "United States"
  },
  {
    "airport_code": "DUB",
    "airport_name": "Dublin Airport",
    "name": "Cloghran",
    "lat": "53.4272",
    "lon": "-6.24418",
    "country": "Ireland"
  },
  {
    "airport_code": "DUD",
    "airport_name": "Dunedin Airport",
    "name": "Outram",
    "lat": "-45.9287",
    "lon": "170.199",
    "country": "New Zealand"
  },
  {
    "airport_code": "DUE",
    "airport_name": "Dundo Airport",
    "name": "Dundo",
    "lat": "-7.3958",
    "lon": "20.8236",
    "country": "Angola"
  },
  {
    "airport_code": "DUJ",
    "airport_name": "Du Bois Jefferson County Airport",
    "name": "Reynoldsville",
    "lat": "41.1833",
    "lon": "-78.8953",
    "country": "United States"
  },
  
  {
    "airport_code": "DUR",
    "airport_name": "Louis Botha Airport",
    "name": "Durban",
    "lat": "-29.9736",
    "lon": "30.9472",
    "country": "South Africa"
  },
  {
    "airport_code": "DUS",
    "airport_name": "Dusseldorf International Airport",
    "name": "Dusseldorf",
    "lat": "51.2794",
    "lon": "6.76481",
    "country": "Germany"
  },
  {
    "airport_code": "DUT",
    "airport_name": "Unalaska Airport",
    "name": "Unalaska",
    "lat": "53.896",
    "lon": "-166.535",
    "country": "United States"
  },
  {
    "airport_code": "DVL",
    "airport_name": "Devils Lake Municipal Airport",
    "name": "Devils Lake",
    "lat": "48.108",
    "lon": "-98.9037",
    "country": "United States"
  },
  {
    "airport_code": "DVO",
    "airport_name": "Francisco Bangoy International Airport",
    "name": "Davao City",
    "lat": "7.1292",
    "lon": "125.647",
    "country": "Philippines"
  },
  {
    "airport_code": "DWB",
    "airport_name": "Soalala",
    "name": "Soalala",
    "lat": "-16.1",
    "lon": "45.3667",
    "country": "Madagascar"
  },
  {
    "airport_code": "DWD",
    "airport_name": "Saudi Arabia",
    "name": "Dawadmi",
    "lat": "23.9176",
    "lon": "45.0811",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "DXB",
    "airport_name": "Dubai International Airport",
    "name": "Dubai",
    "lat": "25.2509",
    "lon": "55.3629",
    "country": "United Arab Emirates"
  },
  {
    "airport_code": "DYG",
    "airport_name": "Dayong",
    "name": "Dayong",
    "lat": "29.1333",
    "lon": "110.483",
    "country": "China"
  },
  {
    "airport_code": "DYR",
    "airport_name": "Anadyr-Ugolnyye Kopi Airport",
    "name": "Anadyr'",
    "lat": "64.7358",
    "lon": "177.739",
    "country": "Russia"
  },
  {
    "airport_code": "DYU",
    "airport_name": "Tajikistan",
    "name": "Dushanbe",
    "lat": "38.5785",
    "lon": "68.7773",
    "country": "Tajikistan"
  },
  {
    "airport_code": "DZA",
    "airport_name": "Dzaoudzi Pamanzi Airport",
    "name": "Mamoudzou",
    "lat": "-12.8",
    "lon": "45.2833",
    "country": "Mayotte"
  },
  {
    "airport_code": "DZN",
    "airport_name": "Dzhezkazgan South Airport",
    "name": "Zhezqazghan",
    "lat": "47.7131",
    "lon": "67.7065",
    "country": "Kazakhstan"
  },
  {
    "airport_code": "EAA",
    "airport_name": "Eagle Airport",
    "name": "Tok",
    "lat": "64.7667",
    "lon": "-141.15",
    "country": "United States"
  },
  {
    "airport_code": "EAE",
    "airport_name": "Vanuatu",
    "name": "Emae",
    "lat": "-17.0686",
    "lon": "168.381",
    "country": "Vanuatu"
  },
  {
    "airport_code": "EAL",
    "airport_name": "Elenak",
    "name": "Kwajalein Atoll",
    "lat": "9.08333",
    "lon": "167.333",
    "country": "Marshall Islands"
  },
  {
    "airport_code": "EAM",
    "airport_name": "Nejran Airport",
    "name": "Najran",
    "lat": "17.6117",
    "lon": "44.4297",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "EAR",
    "airport_name": "Kearney Municipal Airport",
    "name": "Kearney",
    "lat": "40.7236",
    "lon": "-99.0151",
    "country": "United States"
  },
  {
    "airport_code": "EAS",
    "airport_name": "San Sebastian Airport",
    "name": "Hondarribia",
    "lat": "43.3557",
    "lon": "-1.79208",
    "country": "Spain"
  },
  {
    "airport_code": "EAT",
    "airport_name": "Pangborn Memorial Airport",
    "name": "East Wenatchee",
    "lat": "47.4048",
    "lon": "-120.21",
    "country": "United States"
  },
  {
    "airport_code": "EAU",
    "airport_name": "Eau Claire County Airport",
    "name": "Eau Claire",
    "lat": "44.8625",
    "lon": "-91.4826",
    "country": "United States"
  },
  {
    "airport_code": "EBA",
    "airport_name": "Marina de Campo Airport",
    "name": "Pianosa",
    "lat": "42.7629",
    "lon": "10.2383",
    "country": "Italy"
  },
  {
    "airport_code": "EBB",
    "airport_name": "Entebbe International Airport",
    "name": "Entebbe",
    "lat": "0.0417",
    "lon": "32.4381",
    "country": "Uganda"
  },
  {
    "airport_code": "EBD",
    "airport_name": "El Obeid Airport",
    "name": "Al Ubayyid",
    "lat": "13.1597",
    "lon": "30.2342",
    "country": "Sudan"
  },
  {
    "airport_code": "EBJ",
    "airport_name": "Esbjerg Airport",
    "name": "Esbjerg",
    "lat": "55.5247",
    "lon": "8.55388",
    "country": "Denmark"
  },
  {
    "airport_code": "EBL",
    "airport_name": "Erbil",
    "name": "Erbil",
    "lat": "36.1797",
    "lon": "44.016",
    "country": "Iraq"
  },
  {
    "airport_code": "ECN",
    "airport_name": "Ercan Airport",
    "name": "Nicosia",
    "lat": "35.1597",
    "lon": "33.4897",
    "country": "Cyprus"
  },
  {
    "airport_code": "EDA",
    "airport_name": "Edna Bay Seaplane Base",
    "name": "Ketchikan",
    "lat": "55.9503",
    "lon": "-133.656",
    "country": "United States"
  },
  {
    "airport_code": "EDI",
    "airport_name": "Edinburgh International Airport",
    "name": "Edinburgh",
    "lat": "55.9486",
    "lon": "-3.36431",
    "country": "United Kingdom"
  },
  {
    "airport_code": "EDL",
    "airport_name": "Eldoret Airport",
    "name": "Nakuru",
    "lat": "0.5375",
    "lon": "35.2783",
    "country": "Kenya"
  },
  {
    "airport_code": "EDO",
    "airport_name": "Edremit-Korfez Airport",
    "name": "Edremit",
    "lat": "39.599",
    "lon": "27.0221",
    "country": "Turkey"
  },
  {
    "airport_code": "EDR",
    "airport_name": "Edward River",
    "name": "Edward River",
    "lat": "-14.9",
    "lon": "141.617",
    "country": "Australia"
  },
  {
    "airport_code": "EEK",
    "airport_name": "Eek Airport",
    "name": "Eek",
    "lat": "60.2167",
    "lon": "-162.017",
    "country": "United States"
  },
  {
    "airport_code": "EFL",
    "airport_name": "Kefallinia Airport",
    "name": "Dhilianata",
    "lat": "38.1181",
    "lon": "20.5003",
    "country": "Greece"
  },
  
  {
    "airport_code": "EGE",
    "airport_name": "Eagle County Regional Airport",
    "name": "Gypsum",
    "lat": "39.6395",
    "lon": "-106.912",
    "country": "United States"
  },
  {
    "airport_code": "EGN",
    "airport_name": "",
    "name": "Geneina",
    "lat": "13.4833",
    "lon": "22.45",
    "country": "Sudan"
  },
  {
    "airport_code": "EGO",
    "airport_name": "Belgorod North Airport",
    "name": "Belgorod",
    "lat": "50.6406",
    "lon": "36.5853",
    "country": "Russia"
  },
  {
    "airport_code": "EGS",
    "airport_name": "Egilsstadir Airport",
    "name": "Egilsstadir",
    "lat": "65.2694",
    "lon": "-14.3549",
    "country": "Iceland"
  },
  {
    "airport_code": "EGV",
    "airport_name": "Eagle River Union Airport",
    "name": "Eagle River",
    "lat": "45.932",
    "lon": "-89.2599",
    "country": "United States"
  },
  {
    "airport_code": "EGX",
    "airport_name": "Egegik Airport",
    "name": "Egegik",
    "lat": "58.2101",
    "lon": "-157.366",
    "country": "United States"
  },
  
  {
    "airport_code": "EIE",
    "airport_name": "Russia",
    "name": "Eniseysk",
    "lat": "58.4395",
    "lon": "92.1852",
    "country": "Russia"
  },
  {
    "airport_code": "EIK",
    "airport_name": "",
    "name": "Tonsberg",
    "lat": "59.298",
    "lon": "10.4319",
    "country": "Norway"
  },
  {
    "airport_code": "EIN",
    "airport_name": "Eindhoven Airport",
    "name": "Eindhoven",
    "lat": "51.4463",
    "lon": "5.39212",
    "country": "Netherlands"
  },
  {
    "airport_code": "EIS",
    "airport_name": "Beef Island-Roadtown Airport",
    "name": "Beef Island",
    "lat": "18.4439",
    "lon": "-64.5428",
    "country": "British Virgin Islands"
  },
  {
    "airport_code": "EJA",
    "airport_name": "Yariguies Airport",
    "name": "Barrancabermeja",
    "lat": "7.025",
    "lon": "-73.8092",
    "country": "Colombia"
  },
  {
    "airport_code": "EJH",
    "airport_name": "Wejh Airport",
    "name": "Wedjh",
    "lat": "26.2003",
    "lon": "36.4758",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "EKO",
    "airport_name": "Elko Municipal Airport-J C Harris Field",
    "name": "Elko",
    "lat": "40.829",
    "lon": "-115.78",
    "country": "United States"
  },
  
  {
    "airport_code": "ELC",
    "airport_name": "Elcho Island Airport",
    "name": "Darwin",
    "lat": "-11.9149",
    "lon": "135.803",
    "country": "Australia"
  },
  {
    "airport_code": "ELF",
    "airport_name": "",
    "name": "El Fasher",
    "lat": "35.0339",
    "lon": "-83.7405",
    "country": "Sudan"
  },
  {
    "airport_code": "ELG",
    "airport_name": "El Golea Airport",
    "name": "El Golea",
    "lat": "30.5686",
    "lon": "2.8653",
    "country": "Algeria"
  },
  {
    "airport_code": "ELH",
    "airport_name": "North Eleuthera Airport",
    "name": "The Bluff",
    "lat": "25.4747",
    "lon": "-76.685",
    "country": "Bahamas"
  },
  {
    "airport_code": "ELI",
    "airport_name": "Elim Airport",
    "name": "Elim",
    "lat": "64.6167",
    "lon": "-162.267",
    "country": "United States"
  },
  {
    "airport_code": "ELM",
    "airport_name": "Elmira Corning Regional Airport",
    "name": "Horseheads",
    "lat": "42.1633",
    "lon": "-76.8973",
    "country": "United States"
  },
  {
    "airport_code": "ELP",
    "airport_name": "El Paso International Airport",
    "name": "El Paso",
    "lat": "31.7982",
    "lon": "-106.393",
    "country": "United States"
  },
  {
    "airport_code": "ELQ",
    "airport_name": "Gassim Airport",
    "name": "Al Qara'",
    "lat": "26.3025",
    "lon": "43.7703",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "ELS",
    "airport_name": "Ben Schoeman Airport",
    "name": "East London",
    "lat": "-33.0361",
    "lon": "27.8239",
    "country": "South Africa"
  },
  {
    "airport_code": "ELU",
    "airport_name": "Guemar Airport",
    "name": "El Oued",
    "lat": "33.5122",
    "lon": "6.7842",
    "country": "Algeria"
  },
  
  {
    "airport_code": "ELY",
    "airport_name": "Yelland Field Airport",
    "name": "Ely",
    "lat": "39.3043",
    "lon": "-114.853",
    "country": "United States"
  },
  {
    "airport_code": "EMA",
    "airport_name": "East Midlands International Airport",
    "name": "Derby",
    "lat": "52.8258",
    "lon": "-1.33094",
    "country": "United Kingdom"
  },
  {
    "airport_code": "EMD",
    "airport_name": "Emerald Aerodrome",
    "name": "Emerald",
    "lat": "-23.5704",
    "lon": "148.178",
    "country": "Australia"
  },
  {
    "airport_code": "EME",
    "airport_name": "Emden Airport",
    "name": "Emden",
    "lat": "53.3893",
    "lon": "7.2284",
    "country": "Germany"
  },
  {
    "airport_code": "EMK",
    "airport_name": "Emmonak Airport",
    "name": "Alakanuk",
    "lat": "62.785",
    "lon": "-164.491",
    "country": "United States"
  },
  {
    "airport_code": "ENA",
    "airport_name": "Kenai Municipal Airport",
    "name": "Kenai",
    "lat": "60.5651",
    "lon": "-151.244",
    "country": "United States"
  },
  {
    "airport_code": "ENE",
    "airport_name": "Ende Airport",
    "name": "Ende",
    "lat": "-8.8",
    "lon": "121.6",
    "country": "Indonesia"
  },
  {
    "airport_code": "ENF",
    "airport_name": "Enontekio Airport",
    "name": "Leppäjärvi",
    "lat": "68.3606",
    "lon": "23.4205",
    "country": "Finland"
  },
  {
    "airport_code": "ENH",
    "airport_name": "Enshi Airport",
    "name": "Enshi",
    "lat": "30.2875",
    "lon": "109.472",
    "country": "China"
  },
  {
    "airport_code": "ENI",
    "airport_name": "",
    "name": "El Nido",
    "lat": "34.1167",
    "lon": "-89.9395",
    "country": "Philippines"
  },
  
  {
    "airport_code": "ENU",
    "airport_name": "Enugu Airport",
    "name": "Enugu",
    "lat": "6.4756",
    "lon": "7.5661",
    "country": "Nigeria"
  },
  {
    "airport_code": "ENW",
    "airport_name": "Kenosha Regional Airport",
    "name": "Kenosha",
    "lat": "42.5934",
    "lon": "-87.9299",
    "country": "United States"
  },
  {
    "airport_code": "ENY",
    "airport_name": "Yan'an",
    "name": "Yan'an",
    "lat": "36.5965",
    "lon": "109.475",
    "country": "China"
  },
  {
    "airport_code": "EOH",
    "airport_name": "Olaya Herrera Airport",
    "name": "Medellin",
    "lat": "6.2231",
    "lon": "-75.5886",
    "country": "Colombia"
  },
  {
    "airport_code": "EOZ",
    "airport_name": "Elorza Airport",
    "name": "Elorza",
    "lat": "7.0631",
    "lon": "-69.4942",
    "country": "Venezuela"
  },
  {
    "airport_code": "EPR",
    "airport_name": "Esperance Aerodrome",
    "name": "Gibson",
    "lat": "-33.6819",
    "lon": "121.827",
    "country": "Australia"
  },
  {
    "airport_code": "EQS",
    "airport_name": "Esquel Airport",
    "name": "Esquel",
    "lat": "-42.9264",
    "lon": "-71.1425",
    "country": "Argentina"
  },
  {
    "airport_code": "ERC",
    "airport_name": "Erzincan Airport",
    "name": "Erzincan",
    "lat": "39.7117",
    "lon": "39.5169",
    "country": "Turkey"
  },
  {
    "airport_code": "ERF",
    "airport_name": "Erfurt Airport",
    "name": "Erfurt",
    "lat": "50.9754",
    "lon": "10.9626",
    "country": "Germany"
  },
  {
    "airport_code": "ERH",
    "airport_name": "Er Rachidia Airport",
    "name": "Errachidia",
    "lat": "31.9525",
    "lon": "-4.4067",
    "country": "Morocco"
  },
  {
    "airport_code": "ERI",
    "airport_name": "Erie International Airport",
    "name": "Erie",
    "lat": "42.0829",
    "lon": "-80.1824",
    "country": "United States"
  },
  {
    "airport_code": "ERM",
    "airport_name": "Comandante Kraemer Airport",
    "name": "Erechim",
    "lat": "-27.6608",
    "lon": "-52.2756",
    "country": "Brazil"
  },
  {
    "airport_code": "ERS",
    "airport_name": "Eros Airport",
    "name": "Windhoek",
    "lat": "-22.6125",
    "lon": "17.0819",
    "country": "Namibia"
  },
  {
    "airport_code": "ERZ",
    "airport_name": "Erzurum Airport",
    "name": "Erzurum",
    "lat": "39.9567",
    "lon": "41.1697",
    "country": "Turkey"
  },
  {
    "airport_code": "ESB",
    "airport_name": "Esenboga Airport",
    "name": "Çubuk",
    "lat": "40.1289",
    "lon": "32.9961",
    "country": "Turkey"
  },
  {
    "airport_code": "ESC",
    "airport_name": "Delta County Airport",
    "name": "Escanaba",
    "lat": "45.718",
    "lon": "-87.0942",
    "country": "United States"
  },
  {
    "airport_code": "ESD",
    "airport_name": "Orcas Island Airport",
    "name": "Eastsound",
    "lat": "48.7073",
    "lon": "-122.909",
    "country": "United States"
  },
  {
    "airport_code": "ESM",
    "airport_name": "General Rivadeneira Airport",
    "name": "Tachina",
    "lat": "0.9717",
    "lon": "-79.6219",
    "country": "Ecuador"
  },
  {
    "airport_code": "ESR",
    "airport_name": "El Salvador Bajo Airport",
    "name": "Diego de Almagro",
    "lat": "-26.3083",
    "lon": "-69.7517",
    "country": "Chile"
  },
  {
    "airport_code": "ESS",
    "airport_name": "Essen-Mulheim Airport",
    "name": "Mulheim-on-Ruhr",
    "lat": "51.4078",
    "lon": "6.93968",
    "country": "Germany"
  },
  {
    "airport_code": "ESU",
    "airport_name": "Morocco",
    "name": "Essaouira",
    "lat": "31.5147",
    "lon": "-9.76532",
    "country": "Morocco"
  },
  {
    "airport_code": "ETH",
    "airport_name": "J Hozman Airport",
    "name": "Elat",
    "lat": "29.5541",
    "lon": "34.9554",
    "country": "Israel"
  },
  {
    "airport_code": "ETZ",
    "airport_name": "Lorraine Airport",
    "name": "Verny",
    "lat": "48.9788",
    "lon": "6.24722",
    "country": "France"
  },
  {
    "airport_code": "EUA",
    "airport_name": "Eua Island",
    "name": "Eua",
    "lat": "45.9034",
    "lon": "-116.982",
    "country": "Tonga"
  },
  {
    "airport_code": "EUG",
    "airport_name": "Mahlon Sweet Field Airport",
    "name": "Eugene",
    "lat": "44.1184",
    "lon": "-123.213",
    "country": "United States"
  },
  {
    "airport_code": "EUM",
    "airport_name": "Wasbek Airport",
    "name": "Bordesholm",
    "lat": "54.1667",
    "lon": "9.98333",
    "country": "Germany"
  },
  {
    "airport_code": "EUN",
    "airport_name": "Hassan I",
    "name": "Laayoune",
    "lat": "27.15",
    "lon": "-13.2",
    "country": "Morocco"
  },
  {
    "airport_code": "EUX",
    "airport_name": "St. Eustatius Airport",
    "name": "Oranjestad",
    "lat": "17.5031",
    "lon": "-62.9736",
    "country": "Netherlands Antilles"
  },
  {
    "airport_code": "EVE",
    "airport_name": "Evenes Airport",
    "name": "Tarnstad",
    "lat": "68.489",
    "lon": "16.6806",
    "country": "Norway"
  },
  {
    "airport_code": "EVG",
    "airport_name": "Sveg Airport",
    "name": "Sveg",
    "lat": "62.0466",
    "lon": "14.4187",
    "country": "Sweden"
  },
  {
    "airport_code": "EVN",
    "airport_name": "Yerevan-Parakar Airport",
    "name": "Yerevan",
    "lat": "40.1573",
    "lon": "44.4065",
    "country": "Armenia"
  },
  {
    "airport_code": "EVV",
    "airport_name": "Evansville Regional Airport",
    "name": "Evansville",
    "lat": "38.0464",
    "lon": "-87.5308",
    "country": "United States"
  },
  {
    "airport_code": "EWB",
    "airport_name": "New Bedford Municipal Airport",
    "name": "New Bedford",
    "lat": "41.6735",
    "lon": "-70.9579",
    "country": "United States"
  },
  {
    "airport_code": "EWD",
    "airport_name": "Wildman Lake",
    "name": "Wildman Lake",
    "lat": "61.1021",
    "lon": "-149.924",
    "country": "United States"
  },
  {
    "airport_code": "EWN",
    "airport_name": "Craven County Regional Airport",
    "name": "New Bern",
    "lat": "35.0786",
    "lon": "-77.0343",
    "country": "United States"
  },
  {
    "airport_code": "EWR",
    "airport_name": "Newark International Airport",
    "name": "Newark",
    "lat": "40.6924",
    "lon": "-74.1843",
    "country": "United States"
  },
  {
    "airport_code": "EXT",
    "airport_name": "Exeter Airport",
    "name": "Exeter",
    "lat": "50.7303",
    "lon": "-3.4166",
    "country": "United Kingdom"
  },
  {
    "airport_code": "EYP",
    "airport_name": "El Yopal Airport",
    "name": "Yopal",
    "lat": "5.35",
    "lon": "-72.3833",
    "country": "Colombia"
  },
  {
    "airport_code": "EYW",
    "airport_name": "Key West International Airport",
    "name": "Key West",
    "lat": "24.5536",
    "lon": "-81.7551",
    "country": "United States"
  },
  {
    "airport_code": "EZE",
    "airport_name": "Ministro Pistarini International Airport",
    "name": "Ezeiza",
    "lat": "-34.82",
    "lon": "-58.5333",
    "country": "Argentina"
  },
  {
    "airport_code": "EZS",
    "airport_name": "Elazig Airport",
    "name": "Elazığ",
    "lat": "38.6083",
    "lon": "39.2917",
    "country": "Turkey"
  },
  {
    "airport_code": "FAB",
    "airport_name": "Farnborough Airport",
    "name": "Farnborough",
    "lat": "51.2783",
    "lon": "-0.7703",
    "country": "United Kingdom"
  },
  {
    "airport_code": "FAE",
    "airport_name": "Vagar Airport",
    "name": "Faroe Islands",
    "lat": "62.0625",
    "lon": "-7.2708",
    "country": "Faroe Islands"
  },
  {
    "airport_code": "FAI",
    "airport_name": "Fairbanks International Airport",
    "name": "Fairbanks",
    "lat": "64.8183",
    "lon": "-147.866",
    "country": "United States"
  },
  {
    "airport_code": "FAO",
    "airport_name": "Faro Airport",
    "name": "Faro",
    "lat": "37.0154",
    "lon": "-7.97197",
    "country": "Portugal"
  },
  {
    "airport_code": "FAR",
    "airport_name": "Hector International Airport",
    "name": "Fargo",
    "lat": "46.9195",
    "lon": "-96.8243",
    "country": "United States"
  },
  {
    "airport_code": "FAT",
    "airport_name": "Fresno Yosemite International Airport",
    "name": "Fresno",
    "lat": "36.7675",
    "lon": "-119.717",
    "country": "United States"
  },
  {
    "airport_code": "FAV",
    "airport_name": "French Polynesia",
    "name": "Fakarava",
    "lat": "-15.9969",
    "lon": "-145.509",
    "country": "French Polynesia"
  },
  {
    "airport_code": "FAY",
    "airport_name": "Fayetteville Regional Airport",
    "name": "Fayetteville",
    "lat": "34.9914",
    "lon": "-78.8889",
    "country": "United States"
  },
  {
    "airport_code": "FBM",
    "airport_name": "Lubumbashi Luano International Airport",
    "name": "Lubumbashi",
    "lat": "-11.5908",
    "lon": "27.5292",
    "country": "Congo"
  },
  {
    "airport_code": "FCA",
    "airport_name": "Glacier Park International Airport",
    "name": "Kalispell",
    "lat": "48.3075",
    "lon": "-114.252",
    "country": "United States"
  },
  {
    "airport_code": "FCN",
    "airport_name": "Nordholz",
    "name": "Cuxhaven",
    "lat": "53.7849",
    "lon": "8.59625",
    "country": "Germany"
  },
  {
    "airport_code": "FCO",
    "airport_name": "Leonardo da Vinci International Airport",
    "name": "Rome",
    "lat": "41.8026",
    "lon": "12.2551",
    "country": "Italy"
  },
  {
    "airport_code": "FDE",
    "airport_name": "Bringeland Airport",
    "name": "Bygstad",
    "lat": "61.392",
    "lon": "5.7615",
    "country": "Norway"
  },
  {
    "airport_code": "FDF",
    "airport_name": "Le Lamentin Airport",
    "name": "Ducos",
    "lat": "14.5897",
    "lon": "-61.0092",
    "country": "Martinique"
  },
  {
    "airport_code": "FDH",
    "airport_name": "Friedrichshafen Airport",
    "name": "Meckenbeuren",
    "lat": "47.6747",
    "lon": "9.52088",
    "country": "Germany"
  },
  {
    "airport_code": "FEG",
    "airport_name": "Fergana",
    "name": "Fergana",
    "lat": "40.3833",
    "lon": "71.7667",
    "country": "Uzbekistan"
  },
  {
    "airport_code": "FEN",
    "airport_name": "Fernando de Noronha Airport",
    "name": "Vila dos Remédios",
    "lat": "-3.8519",
    "lon": "-32.4244",
    "country": "Brazil"
  },
  {
    "airport_code": "FEZ",
    "airport_name": "Saiss Airport",
    "name": "Fez",
    "lat": "33.9286",
    "lon": "-4.9767",
    "country": "Morocco"
  },
  {
    "airport_code": "FGU",
    "airport_name": "French Polynesia",
    "name": "Fangatau",
    "lat": "-15.9038",
    "lon": "-140.494",
    "country": "French Polynesia"
  },
  {
    "airport_code": "FHZ",
    "airport_name": "French Polynesia",
    "name": "Fakahina",
    "lat": "-8.64687",
    "lon": "-131.787",
    "country": "French Polynesia"
  },
  {
    "airport_code": "FIH",
    "airport_name": "Kinshasa N Djili International Airport",
    "name": "Kinshasa",
    "lat": "-4.3847",
    "lon": "15.445",
    "country": "Democratic Republic of Congo"
  },
  {
    "airport_code": "FJR",
    "airport_name": "Fujairah Airport",
    "name": "Al Fujayrah",
    "lat": "25.1106",
    "lon": "56.3267",
    "country": "United Arab Emirates"
  },
  {
    "airport_code": "FKB",
    "airport_name": "Baden-Airpark",
    "name": "Rheinmünster",
    "lat": "48.781",
    "lon": "8.08678",
    "country": "Germany"
  },
  {
    "airport_code": "FKI",
    "airport_name": "Kisangani Bangoka International Airport",
    "name": "Kisangani",
    "lat": "0.4808",
    "lon": "25.3331",
    "country": "Congo"
  },
  {
    "airport_code": "FKL",
    "airport_name": "Chess Lamberton Airport",
    "name": "Franklin",
    "lat": "41.3766",
    "lon": "-79.8573",
    "country": "United States"
  },
  {
    "airport_code": "FKQ",
    "airport_name": "Indonesia",
    "name": "Fak Fak",
    "lat": "-2.46456",
    "lon": "117.996",
    "country": "Indonesia"
  },
  {
    "airport_code": "FKS",
    "airport_name": "Fukushima Airport",
    "name": "Sukagawa-shi",
    "lat": "37.2314",
    "lon": "140.429",
    "country": "Japan"
  },
  {
    "airport_code": "FLA",
    "airport_name": "Gustavo Artunduaga Paredes Airport",
    "name": "Florencia",
    "lat": "1.5847",
    "lon": "-75.5644",
    "country": "Colombia"
  },
  {
    "airport_code": "FLG",
    "airport_name": "Flagstaff Pulliam Airport",
    "name": "Flagstaff",
    "lat": "35.139",
    "lon": "-111.675",
    "country": "United States"
  },
  {
    "airport_code": "FLL",
    "airport_name": "Fort Lauderdale Hollywood International Airport",
    "name": "Dania Beach",
    "lat": "26.0722",
    "lon": "-80.1354",
    "country": "United States"
  },
  {
    "airport_code": "FLN",
    "airport_name": "Hercilio Luz International Airport",
    "name": "Florianopolis",
    "lat": "-27.6697",
    "lon": "-48.5517",
    "country": "Brazil"
  },
  {
    "airport_code": "FLO",
    "airport_name": "Florence Regional Airport",
    "name": "Florence",
    "lat": "34.1936",
    "lon": "-79.7289",
    "country": "United States"
  },
  {
    "airport_code": "FLR",
    "airport_name": "Florence Airport",
    "name": "Florence",
    "lat": "43.8097",
    "lon": "11.2003",
    "country": "Italy"
  },
  {
    "airport_code": "FLW",
    "airport_name": "Flores Airport",
    "name": "Flores Island",
    "lat": "39.4569",
    "lon": "-31.1272",
    "country": "Portugal"
  },
  {
    "airport_code": "FMA",
    "airport_name": "Formosa Airport",
    "name": "Formosa",
    "lat": "-26.21",
    "lon": "-58.235",
    "country": "Argentina"
  },
  {
    "airport_code": "FMM",
    "airport_name": "Memmingen-Allgäu Airport",
    "name": "Memmingen",
    "lat": "20.499",
    "lon": "103.75",
    "country": "Germany"
  },
  {
    "airport_code": "FMN",
    "airport_name": "Four Corners Regional Airport",
    "name": "Farmington",
    "lat": "36.7387",
    "lon": "-108.227",
    "country": "United States"
  },
  {
    "airport_code": "FMO",
    "airport_name": "Munster-Osnabruck International Airport",
    "name": "Greven",
    "lat": "52.1312",
    "lon": "7.69163",
    "country": "Germany"
  },
  {
    "airport_code": "FMY",
    "airport_name": "Page Field Airport",
    "name": "Fort Myers",
    "lat": "26.5815",
    "lon": "-81.862",
    "country": "United States"
  },
  {
    "airport_code": "FNA",
    "airport_name": "Freetown Lungi Airport",
    "name": "Freetown",
    "lat": "8.6181",
    "lon": "-13.1994",
    "country": "Sierra Leone"
  },
  {
    "airport_code": "FNC",
    "airport_name": "Funchal Airport",
    "name": "Madeira",
    "lat": "32.6919",
    "lon": "-16.7768",
    "country": "Portugal"
  },
  {
    "airport_code": "FNI",
    "airport_name": "Garons Airport",
    "name": "St-Gilles-du-Gard",
    "lat": "43.7618",
    "lon": "4.42092",
    "country": "France"
  },
  {
    "airport_code": "FNJ",
    "airport_name": "Sunan Airport",
    "name": "Sunan",
    "lat": "39.1437",
    "lon": "125.695",
    "country": "North Korea"
  },
  
  {
    "airport_code": "FNT",
    "airport_name": "Bishop International Airport",
    "name": "Flint",
    "lat": "42.9756",
    "lon": "-83.7411",
    "country": "United States"
  },
  {
    "airport_code": "FOC",
    "airport_name": "Fuzhou Airport",
    "name": "Fuzhou",
    "lat": "26.0833",
    "lon": "119.283",
    "country": "China"
  },
  {
    "airport_code": "FOD",
    "airport_name": "Fort Dodge Regional Airport",
    "name": "Fort Dodge",
    "lat": "42.5523",
    "lon": "-94.1819",
    "country": "United States"
  },
  {
    "airport_code": "FOG",
    "airport_name": "Gino Lisa Airport",
    "name": "Foggia",
    "lat": "41.4341",
    "lon": "15.5438",
    "country": "Italy"
  },
  {
    "airport_code": "FOR",
    "airport_name": "Pinto Martins International Airport",
    "name": "Fortaleza",
    "lat": "-3.7758",
    "lon": "-38.5322",
    "country": "Brazil"
  },
  {
    "airport_code": "FPO",
    "airport_name": "Freeport International Airport",
    "name": "Freeport City",
    "lat": "26.5561",
    "lon": "-78.6986",
    "country": "Bahamas"
  },
  {
    "airport_code": "FRA",
    "airport_name": "Frankfurt International Airport",
    "name": "Frankfurt",
    "lat": "50.0483",
    "lon": "8.57041",
    "country": "Germany"
  },
  {
    "airport_code": "FRC",
    "airport_name": "Franca Airport",
    "name": "Franca",
    "lat": "-20.5897",
    "lon": "-47.3819",
    "country": "Brazil"
  },
  {
    "airport_code": "FRD",
    "airport_name": "Friday Harbor Airport",
    "name": "Friday Harbor",
    "lat": "48.5252",
    "lon": "-123.027",
    "country": "United States"
  },
  {
    "airport_code": "FRE",
    "airport_name": "Fera Island",
    "name": "Fera Island",
    "lat": "-8.1",
    "lon": "159.583",
    "country": "Solomon Islands"
  },
  {
    "airport_code": "FRL",
    "airport_name": "Forli Airport",
    "name": "Forli",
    "lat": "44.1953",
    "lon": "12.0686",
    "country": "Italy"
  },
  {
    "airport_code": "FRO",
    "airport_name": "Flora Airport",
    "name": "Floro",
    "lat": "61.5863",
    "lon": "5.02484",
    "country": "Norway"
  },
  {
    "airport_code": "FRS",
    "airport_name": "Santa Elena Airport",
    "name": "Flores",
    "lat": "16.9139",
    "lon": "-89.8664",
    "country": "Guatemala"
  },
  {
    "airport_code": "FRU",
    "airport_name": "Vasilyevka Airport",
    "name": "Bishkek",
    "lat": "43.0603",
    "lon": "74.4866",
    "country": "Kyrgyzstan"
  },
  {
    "airport_code": "FRW",
    "airport_name": "Francistown Airport",
    "name": "Francistown",
    "lat": "-21.16",
    "lon": "27.4825",
    "country": "Botswana"
  },
  {
    "airport_code": "FSC",
    "airport_name": "Sud Corse Airport",
    "name": "Figari",
    "lat": "41.5022",
    "lon": "9.0968",
    "country": "France"
  },
  {
    "airport_code": "FSD",
    "airport_name": "Sioux Falls Regional Airport",
    "name": "Sioux Falls",
    "lat": "43.5813",
    "lon": "-96.7317",
    "country": "United States"
  },
  {
    "airport_code": "FSM",
    "airport_name": "Smith Field Airport",
    "name": "Fort Smith",
    "lat": "36.1881",
    "lon": "-94.4944",
    "country": "United States"
  },
  {
    "airport_code": "FSP",
    "airport_name": "St Pierre Airport",
    "name": "St Pierre",
    "lat": "46.7708",
    "lon": "-56.1667",
    "country": "Saint Pierre and Miquelon"
  },
  {
    "airport_code": "FTA",
    "airport_name": "Futuna",
    "name": "Futuna Island",
    "lat": "-19.5267",
    "lon": "170.215",
    "country": "Vanuatu"
  },
  {
    "airport_code": "FTE",
    "airport_name": "El Calafate International Airport",
    "name": "El Calafate",
    "lat": "-50.3333",
    "lon": "-72.25",
    "country": "Argentina"
  },
  {
    "airport_code": "FTU",
    "airport_name": "Tolagnaro Airport",
    "name": "Faradofay",
    "lat": "-25.0381",
    "lon": "46.9556",
    "country": "Madagascar"
  },
  {
    "airport_code": "FUE",
    "airport_name": "Puerto del Rosario Airport",
    "name": "Antigua",
    "lat": "28.3997",
    "lon": "-13.9998",
    "country": "Spain"
  },
  {
    "airport_code": "FUG",
    "airport_name": "",
    "name": "Fuyang",
    "lat": "37.8882",
    "lon": "-82.9323",
    "country": "China"
  },
  {
    "airport_code": "FUJ",
    "airport_name": "Fukue Airport",
    "name": "Goto-shi",
    "lat": "32.6726",
    "lon": "128.836",
    "country": "Japan"
  },
  {
    "airport_code": "FUK",
    "airport_name": "Fukuoka Airport",
    "name": "Fukuoka-shi",
    "lat": "33.5971",
    "lon": "130.443",
    "country": "Japan"
  },
  {
    "airport_code": "FUN",
    "airport_name": "Funafuti International Airport",
    "name": "Funafuti",
    "lat": "-8.52982",
    "lon": "179.189",
    "country": "Tuvalu"
  },
  {
    "airport_code": "FUT",
    "airport_name": "Futuna Island",
    "name": "Futuna Island",
    "lat": "-14.25",
    "lon": "-178.15",
    "country": "Wallis and Futuna Islands"
  },
  {
    "airport_code": "FWA",
    "airport_name": "Fort Wayne Municipal Airport-Baer Field",
    "name": "Fort Wayne",
    "lat": "40.9883",
    "lon": "-85.1899",
    "country": "United States"
  },
  
  {
    "airport_code": "FYU",
    "airport_name": "Fort Yukon Airport",
    "name": "Fort Yukon",
    "lat": "66.5714",
    "lon": "-145.25",
    "country": "United States"
  },
  {
    "airport_code": "FZO",
    "airport_name": "Filton Airport",
    "name": "Bristol",
    "lat": "51.5194",
    "lon": "-2.5761",
    "country": "United Kingdom"
  },
  {
    "airport_code": "GAE",
    "airport_name": "Gabes Airport",
    "name": "Gabes",
    "lat": "33.8792",
    "lon": "10.1028",
    "country": "Tunisia"
  },
  {
    "airport_code": "GAF",
    "airport_name": "Gafsa",
    "name": "Gafsa",
    "lat": "34.4222",
    "lon": "8.81944",
    "country": "Tunisia"
  },
  {
    "airport_code": "GAJ",
    "airport_name": "Yamagata Airport",
    "name": "Higashine-shi",
    "lat": "38.4109",
    "lon": "140.37",
    "country": "Japan"
  },
  {
    "airport_code": "GAL",
    "airport_name": "Galena Airport",
    "name": "Galena",
    "lat": "64.7404",
    "lon": "-156.931",
    "country": "United States"
  },
  {
    "airport_code": "GAM",
    "airport_name": "Gambell Airport",
    "name": "Gambell",
    "lat": "63.7667",
    "lon": "-171.738",
    "country": "United States"
  },
  {
    "airport_code": "GAN",
    "airport_name": "Gan Island Airport",
    "name": "Hithadhoo",
    "lat": "-0.6912",
    "lon": "73.16",
    "country": "Maldives"
  },
  {
    "airport_code": "GAO",
    "airport_name": "Cuba",
    "name": "Guantanamo",
    "lat": "20.143",
    "lon": "-75.209",
    "country": "Cuba"
  },
  {
    "airport_code": "GAU",
    "airport_name": "Borjhar",
    "name": "Gawahati",
    "lat": "26.0857",
    "lon": "91.5669",
    "country": "India"
  },
  {
    "airport_code": "GAX",
    "airport_name": "Gamba",
    "name": "Gamba",
    "lat": "-2.7639",
    "lon": "9.98581",
    "country": "Gabon"
  },
  {
    "airport_code": "GAY",
    "airport_name": "Gaya Airport",
    "name": "Gaya",
    "lat": "24.7443",
    "lon": "84.9493",
    "country": "India"
  },
  {
    "airport_code": "GBD",
    "airport_name": "Great Bend Municipal Airport",
    "name": "Great Bend",
    "lat": "38.352",
    "lon": "-98.853",
    "country": "United States"
  },
  {
    "airport_code": "GBE",
    "airport_name": "Sir Seretse Khama International Airport",
    "name": "Tlokweng",
    "lat": "-24.5558",
    "lon": "25.9189",
    "country": "Botswana"
  },
  {
    "airport_code": "GBJ",
    "airport_name": "Marie Galante Airport",
    "name": "Grand-Bourg",
    "lat": "15.8714",
    "lon": "-61.2647",
    "country": "Guadeloupe"
  },
  {
    "airport_code": "GBT",
    "airport_name": "Iran",
    "name": "Gorgan",
    "lat": "36.8281",
    "lon": "54.4392",
    "country": "Iran"
  },
  {
    "airport_code": "GCC",
    "airport_name": "Gillette Campbell County Airport",
    "name": "Gillette",
    "lat": "44.3465",
    "lon": "-105.533",
    "country": "United States"
  },
  {
    "airport_code": "GCI",
    "airport_name": "Guernsey Airport",
    "name": "St. Peter Port",
    "lat": "49.4341",
    "lon": "-2.60003",
    "country": "United Kingdom"
  },
  {
    "airport_code": "GCK",
    "airport_name": "Garden City Regional Airport",
    "name": "Pierceville",
    "lat": "37.9267",
    "lon": "-100.719",
    "country": "United States"
  },
  {
    "airport_code": "GCM",
    "airport_name": "Owen Roberts International Airport",
    "name": "Georgetown",
    "lat": "19.2925",
    "lon": "-81.3589",
    "country": "Cayman Islands"
  },
  {
    "airport_code": "GDE",
    "airport_name": "Ididole",
    "name": "Gode/Iddidole",
    "lat": "5.93461",
    "lon": "43.5318",
    "country": "Ethiopia"
  },
  {
    "airport_code": "GDL",
    "airport_name": "Don Miguel Hidalgo International Airport",
    "name": "Tlajomulco de Zúñiga",
    "lat": "20.5347",
    "lon": "-103.322",
    "country": "Mexico"
  },
  {
    "airport_code": "GDN",
    "airport_name": "Rebiechowo Airport",
    "name": "Gdansk",
    "lat": "54.3821",
    "lon": "18.454",
    "country": "Poland"
  },
  {
    "airport_code": "GDO",
    "airport_name": "Vare Maria Airport",
    "name": "Barinas",
    "lat": "7.2111",
    "lon": "-70.7583",
    "country": "Venezuela"
  },
  {
    "airport_code": "GDQ",
    "airport_name": "Gondar Airport",
    "name": "Azezo",
    "lat": "12.5167",
    "lon": "37.45",
    "country": "Ethiopia"
  },
  {
    "airport_code": "GDT",
    "airport_name": "Grand Turk International Airport",
    "name": "Grand Turk",
    "lat": "21.4439",
    "lon": "-71.1425",
    "country": "Turks And Caicos Islands"
  },
  {
    "airport_code": "GDX",
    "airport_name": "Magadan Northwest Airport",
    "name": "Magadan",
    "lat": "59.8984",
    "lon": "150.71",
    "country": "Russia"
  },
  {
    "airport_code": "GEA",
    "airport_name": "Magenta Airport",
    "name": "Noumea",
    "lat": "-22.2667",
    "lon": "166.467",
    "country": "New Caledonia"
  },
  {
    "airport_code": "GEG",
    "airport_name": "Spokane International Airport",
    "name": "Spokane",
    "lat": "47.625",
    "lon": "-117.538",
    "country": "United States"
  },
  {
    "airport_code": "GEL",
    "airport_name": "Santo Angelo Airport",
    "name": "Santo Angelo",
    "lat": "-28.2808",
    "lon": "-54.1683",
    "country": "Brazil"
  },
  {
    "airport_code": "GEO",
    "airport_name": "Timehri International Airport",
    "name": "Hyde Park",
    "lat": "6.5003",
    "lon": "-58.2542",
    "country": "Guyana"
  },
  {
    "airport_code": "GER",
    "airport_name": "Nueva Gerona Airport",
    "name": "Nueva Gerona",
    "lat": "21.8375",
    "lon": "-82.78",
    "country": "Cuba"
  },
  {
    "airport_code": "GES",
    "airport_name": "General Santos Airport",
    "name": "General Santos City",
    "lat": "6.1094",
    "lon": "125.235",
    "country": "Philippines"
  },
  {
    "airport_code": "GET",
    "airport_name": "Geraldton Airport",
    "name": "Geraldton",
    "lat": "-28.7975",
    "lon": "114.706",
    "country": "Australia"
  },
  {
    "airport_code": "GEV",
    "airport_name": "Lappland Airport",
    "name": "Koskullskulle",
    "lat": "67.1345",
    "lon": "20.8126",
    "country": "Sweden"
  },
  {
    "airport_code": "GFF",
    "airport_name": "Griffith Airport",
    "name": "Griffith",
    "lat": "-34.2454",
    "lon": "146.068",
    "country": "Australia"
  },
  {
    "airport_code": "GFK",
    "airport_name": "Grand Forks Mark Andrews International Airport",
    "name": "Grand Forks",
    "lat": "47.9494",
    "lon": "-97.1762",
    "country": "United States"
  },
  {
    "airport_code": "GFN",
    "airport_name": "Grafton Airport",
    "name": "Grafton",
    "lat": "-29.7562",
    "lon": "153.031",
    "country": "Australia"
  },
  {
    "airport_code": "GGG",
    "airport_name": "Gregg County Airport",
    "name": "Longview",
    "lat": "32.3874",
    "lon": "-94.7194",
    "country": "United States"
  },
  {
    "airport_code": "GGT",
    "airport_name": "Exuma International Airport",
    "name": "George Town",
    "lat": "23.5611",
    "lon": "-75.8744",
    "country": "Bahamas"
  },
  {
    "airport_code": "GHA",
    "airport_name": "Noumerate Airport",
    "name": "Ghardaia",
    "lat": "32.3828",
    "lon": "3.7964",
    "country": "Algeria"
  },
  {
    "airport_code": "GHB",
    "airport_name": "Governors Harbour Airport",
    "name": "Governor Harbour",
    "lat": "25.2839",
    "lon": "-76.3308",
    "country": "Bahamas"
  },
  {
    "airport_code": "GHT",
    "airport_name": "Ghat Airport",
    "name": "Ghat",
    "lat": "25.1325",
    "lon": "10.1489",
    "country": "Libya"
  },
  {
    "airport_code": "GIB",
    "airport_name": "Gibraltar Airport",
    "name": "Gibraltar",
    "lat": "36.1522",
    "lon": "-5.3472",
    "country": "Gibraltar"
  },
  {
    "airport_code": "GIC",
    "airport_name": "Boigu Island Airport",
    "name": "Kubin Village",
    "lat": "-9.2622",
    "lon": "142.214",
    "country": "Australia"
  },
  {
    "airport_code": "GIG",
    "airport_name": "Rio de Janeiro-Antonio Carlos Jobim Internationa",
    "name": "Rio de Janeiro",
    "lat": "-22.8094",
    "lon": "-43.25",
    "country": "Brazil"
  },
  {
    "airport_code": "GIL",
    "airport_name": "Gilgit Airport",
    "name": "Gilgit",
    "lat": "35.9192",
    "lon": "74.3358",
    "country": "Pakistan"
  },
  {
    "airport_code": "GIS",
    "airport_name": "Gisborne Airport",
    "name": "Gisborne",
    "lat": "-38.66",
    "lon": "177.978",
    "country": "New Zealand"
  },
  {
    "airport_code": "GIZ",
    "airport_name": "Gizan Airport",
    "name": "Jizan",
    "lat": "16.9069",
    "lon": "42.5819",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "GJA",
    "airport_name": "Guanaja Airport",
    "name": "Guanaja",
    "lat": "16.4591",
    "lon": "-85.9034",
    "country": "Honduras"
  },
  {
    "airport_code": "GJL",
    "airport_name": "Taher Airport",
    "name": "Jijel",
    "lat": "36.7942",
    "lon": "5.8769",
    "country": "Algeria"
  },
  {
    "airport_code": "GJT",
    "airport_name": "Walker Field Airport",
    "name": "Grand Junction",
    "lat": "39.1217",
    "lon": "-108.529",
    "country": "United States"
  },
  {
    "airport_code": "GKA",
    "airport_name": "Goroka Airport",
    "name": "Goroka",
    "lat": "-6.0828",
    "lon": "145.396",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "GLA",
    "airport_name": "Glasgow International Airport",
    "name": "Paisley",
    "lat": "55.8646",
    "lon": "-4.43234",
    "country": "United Kingdom"
  },
  {
    "airport_code": "GLF",
    "airport_name": "Golfito Airport",
    "name": "Palmar Sur",
    "lat": "8.6525",
    "lon": "-83.1828",
    "country": "Costa Rica"
  },
  {
    "airport_code": "GLH",
    "airport_name": "Mid Delta Regional Airport",
    "name": "Greenville",
    "lat": "33.4819",
    "lon": "-90.9903",
    "country": "United States"
  },
  {
    "airport_code": "GLK",
    "airport_name": "Galcaio Airport",
    "name": "Gaalkacyo",
    "lat": "6.7786",
    "lon": "47.4528",
    "country": "Somalia"
  },
  {
    "airport_code": "GLN",
    "airport_name": "Guelmim",
    "name": "Goulimime",
    "lat": "28.9839",
    "lon": "-10.0603",
    "country": "Morocco"
  },
  
  {
    "airport_code": "GLT",
    "airport_name": "Gladstone Airport",
    "name": "Gladstone",
    "lat": "-23.87",
    "lon": "151.226",
    "country": "Australia"
  },
  {
    "airport_code": "GLV",
    "airport_name": "Golovin",
    "name": "Golovin",
    "lat": "64.5433",
    "lon": "-163.033",
    "country": "United States"
  },
  {
    "airport_code": "GMA",
    "airport_name": "Gemena Airport",
    "name": "Gemena",
    "lat": "3.2347",
    "lon": "19.7719",
    "country": "Congo"
  },
  {
    "airport_code": "GMB",
    "airport_name": "",
    "name": "Gambela",
    "lat": "13.4454",
    "lon": "-15.3114",
    "country": "Ethiopia"
  },
  {
    "airport_code": "GMP",
    "airport_name": "Gimpo International Airport",
    "name": "Seoul",
    "lat": "37.5563",
    "lon": "126.793",
    "country": "South Korea"
  },
  {
    "airport_code": "GMR",
    "airport_name": "Gambier Is",
    "name": "Gambier Is",
    "lat": "-23.0831",
    "lon": "-134.887",
    "country": "French Polynesia"
  },
  {
    "airport_code": "GMZ",
    "airport_name": "La Gomera Airport",
    "name": "Alajeró",
    "lat": "28.0252",
    "lon": "-17.2148",
    "country": "Spain"
  },
  {
    "airport_code": "GNB",
    "airport_name": "St Geoirs Airport",
    "name": "Sillans",
    "lat": "45.3614",
    "lon": "5.33214",
    "country": "France"
  },
  {
    "airport_code": "GND",
    "airport_name": "Point Salines International Airport",
    "name": "Grenada",
    "lat": "12.0056",
    "lon": "-61.7867",
    "country": "Grenada"
  },
  {
    "airport_code": "GNU",
    "airport_name": "Alaska",
    "name": "Goodnews Bay",
    "lat": "59.1218",
    "lon": "-161.588",
    "country": "United States"
  },
  {
    "airport_code": "GNV",
    "airport_name": "Gainesville Regional Airport",
    "name": "Gainesville",
    "lat": "29.6861",
    "lon": "-82.277",
    "country": "United States"
  },
  {
    "airport_code": "GOA",
    "airport_name": "Genoa Cristoforo Colombo Airport",
    "name": "Genoa",
    "lat": "44.4119",
    "lon": "8.84633",
    "country": "Italy"
  },
  {
    "airport_code": "GOH",
    "airport_name": "Godthaab Airport",
    "name": "Nuuk",
    "lat": "64.1922",
    "lon": "-51.6825",
    "country": "Greenland"
  },
  {
    "airport_code": "GOI",
    "airport_name": "Dabolim Airport",
    "name": "Vasco Da Gama",
    "lat": "15.3818",
    "lon": "73.8265",
    "country": "India"
  },
  {
    "airport_code": "GOJ",
    "airport_name": "Strigino Airport",
    "name": "Dzerzinsk",
    "lat": "56.2153",
    "lon": "43.783",
    "country": "Russia"
  },
  {
    "airport_code": "GOM",
    "airport_name": "Goma International Airport",
    "name": "Goma",
    "lat": "-1.6661",
    "lon": "29.2344",
    "country": "Congo"
  },
  {
    "airport_code": "GOP",
    "airport_name": "Gorakhpur",
    "name": "Gorakhpur",
    "lat": "22.5552",
    "lon": "88.3685",
    "country": "India"
  },
  {
    "airport_code": "GOQ",
    "airport_name": "Golmud Airport",
    "name": "Golmud",
    "lat": "36.8135",
    "lon": "95.3498",
    "country": "China"
  },
  {
    "airport_code": "GOT",
    "airport_name": "Gothenburg Airport",
    "name": "Härryda",
    "lat": "57.6693",
    "lon": "12.2957",
    "country": "Sweden"
  },
  {
    "airport_code": "GOU",
    "airport_name": "Garoua Airport",
    "name": "Garoua",
    "lat": "9.3361",
    "lon": "13.3756",
    "country": "Cameroon"
  },
  {
    "airport_code": "GOV",
    "airport_name": "Gove Aerodrome",
    "name": "Gove",
    "lat": "-12.2747",
    "lon": "136.826",
    "country": "Australia"
  },
  {
    "airport_code": "GPA",
    "airport_name": "Araxos Airport",
    "name": "Lakkopetra",
    "lat": "38.1519",
    "lon": "21.4272",
    "country": "Greece"
  },
  {
    "airport_code": "GPI",
    "airport_name": "Guapi Airport",
    "name": "Guapí",
    "lat": "2.5806",
    "lon": "-77.9083",
    "country": "Colombia"
  },
  
  {
    "airport_code": "GPT",
    "airport_name": "Gulfport Biloxi Regional Airport",
    "name": "Gulfport",
    "lat": "30.4133",
    "lon": "-89.072",
    "country": "United States"
  },
  {
    "airport_code": "GRB",
    "airport_name": "Austin Straubel International Airport",
    "name": "Green Bay",
    "lat": "44.4923",
    "lon": "-88.1274",
    "country": "United States"
  },
  {
    "airport_code": "GRJ",
    "airport_name": "P W Botha Airport",
    "name": "George",
    "lat": "-34.005",
    "lon": "22.3792",
    "country": "South Africa"
  },
  
  {
    "airport_code": "GRO",
    "airport_name": "Gerona Airport",
    "name": "Vilobí d'Onyar",
    "lat": "41.8992",
    "lon": "2.7646",
    "country": "Spain"
  },
  {
    "airport_code": "GRQ",
    "airport_name": "Groningen Eelde",
    "name": "Eelde",
    "lat": "53.1273",
    "lon": "6.58249",
    "country": "Netherlands"
  },
  {
    "airport_code": "GRR",
    "airport_name": "Gerald R. Ford International Airport",
    "name": "Grand Rapids",
    "lat": "42.8841",
    "lon": "-85.5307",
    "country": "United States"
  },
  {
    "airport_code": "GRU",
    "airport_name": "Governador Andre Franco Montoro International Ai",
    "name": "Guarulhos",
    "lat": "-23.435",
    "lon": "-46.4728",
    "country": "Brazil"
  },
  {
    "airport_code": "GRV",
    "airport_name": "Groznyy Airport",
    "name": "Groznyy",
    "lat": "43.3964",
    "lon": "45.6868",
    "country": "Russia"
  },
  {
    "airport_code": "GRW",
    "airport_name": "Graciosa Airport",
    "name": "Graciosa Island",
    "lat": "39.0936",
    "lon": "-28.0297",
    "country": "Portugal"
  },
  {
    "airport_code": "GRX",
    "airport_name": "Granada Airport",
    "name": "Chauchina",
    "lat": "37.1876",
    "lon": "-3.77498",
    "country": "Spain"
  },
  {
    "airport_code": "GRY",
    "airport_name": "Grimsey Airport",
    "name": "Akureyri",
    "lat": "66.5439",
    "lon": "-18.0117",
    "country": "Iceland"
  },
  {
    "airport_code": "GRZ",
    "airport_name": "Graz Airport",
    "name": "Feldkirchen",
    "lat": "46.9902",
    "lon": "15.4389",
    "country": "Austria"
  },
  {
    "airport_code": "GSE",
    "airport_name": "Save Airport",
    "name": "Kyrkobyn",
    "lat": "57.7774",
    "lon": "11.8648",
    "country": "Sweden"
  },
  {
    "airport_code": "GSM",
    "airport_name": "",
    "name": "Gheshm",
    "lat": "36.0347",
    "lon": "14.3106",
    "country": "Iran"
  },
  {
    "airport_code": "GSO",
    "airport_name": "Triad International Airport",
    "name": "Greensboro",
    "lat": "36.1038",
    "lon": "-79.9427",
    "country": "United States"
  },
  {
    "airport_code": "GSP",
    "airport_name": "Greenville Spartanburg International Airport",
    "name": "Greer",
    "lat": "34.8907",
    "lon": "-82.2167",
    "country": "United States"
  },
  {
    "airport_code": "GST",
    "airport_name": "Gustavus Airport",
    "name": "Gustavus",
    "lat": "58.4246",
    "lon": "-135.707",
    "country": "United States"
  },
  {
    "airport_code": "GSY",
    "airport_name": "Binbrook Airport",
    "name": "Market Rasen",
    "lat": "53.4533",
    "lon": "-0.2",
    "country": "United Kingdom"
  },
  {
    "airport_code": "GTA",
    "airport_name": "Solomon Islands",
    "name": "Gatokae",
    "lat": "-8.72906",
    "lon": "162.855",
    "country": "Solomon Islands"
  },
  {
    "airport_code": "GTE",
    "airport_name": "Groote Eylandt Airport",
    "name": "Darwin",
    "lat": "-13.9743",
    "lon": "136.462",
    "country": "Australia"
  },
  {
    "airport_code": "GTF",
    "airport_name": "Great Falls International Airport",
    "name": "Great Falls",
    "lat": "47.482",
    "lon": "-111.356",
    "country": "United States"
  },
  {
    "airport_code": "GTO",
    "airport_name": "Jalaluddin Airport",
    "name": "Gorontalo",
    "lat": "0.6339",
    "lon": "122.846",
    "country": "Indonesia"
  },
  {
    "airport_code": "GTR",
    "airport_name": "Golden Triangle Regional Airport",
    "name": "Columbus",
    "lat": "33.4516",
    "lon": "-88.5876",
    "country": "United States"
  },
  {
    "airport_code": "GTS",
    "airport_name": "Australia",
    "name": "Granites",
    "lat": "-31.875",
    "lon": "136.081",
    "country": "Australia"
  },
  {
    "airport_code": "GUA",
    "airport_name": "La Aurora Airport",
    "name": "Guatemala City",
    "lat": "14.5819",
    "lon": "-90.5275",
    "country": "Guatemala"
  },
  {
    "airport_code": "GUC",
    "airport_name": "Gunnison County Airport",
    "name": "Gunnison",
    "lat": "38.5356",
    "lon": "-106.941",
    "country": "United States"
  },
  {
    "airport_code": "GUM",
    "airport_name": "Antonio B Won Pat International Airport",
    "name": "Hagåtña",
    "lat": "13.4833",
    "lon": "144.796",
    "country": "United States"
  },
  {
    "airport_code": "GUR",
    "airport_name": "Gurney Airport",
    "name": "Alotau",
    "lat": "-10.3108",
    "lon": "150.339",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "GUW",
    "airport_name": "Guryev Airport",
    "name": "Atyrau",
    "lat": "47.1133",
    "lon": "51.8457",
    "country": "Kazakhstan"
  },
  {
    "airport_code": "GVA",
    "airport_name": "Geneva Airport",
    "name": "Geneva",
    "lat": "46.2329",
    "lon": "6.10682",
    "country": "Switzerland"
  },
  {
    "airport_code": "GVR",
    "airport_name": "Governador Valadares Airport",
    "name": "Governador Valadares",
    "lat": "-18.8958",
    "lon": "-41.9856",
    "country": "Brazil"
  },
  {
    "airport_code": "GWD",
    "airport_name": "Gwadar Airport",
    "name": "Gawadar",
    "lat": "25.2306",
    "lon": "62.3389",
    "country": "Pakistan"
  },
  {
    "airport_code": "GWL",
    "airport_name": "Gwalior Airport",
    "name": "Gwalior",
    "lat": "26.2843",
    "lon": "78.2288",
    "country": "India"
  },
  {
    "airport_code": "GWT",
    "airport_name": "Westerland Airport",
    "name": "Westerland",
    "lat": "54.9139",
    "lon": "8.33126",
    "country": "Germany"
  },
  {
    "airport_code": "GWY",
    "airport_name": "Carnmore Airport",
    "name": "Carnmore",
    "lat": "53.3016",
    "lon": "-8.94049",
    "country": "Ireland"
  },
  {
    "airport_code": "GXF",
    "airport_name": "Sayun Airport",
    "name": "Seiyun",
    "lat": "15.9625",
    "lon": "48.7877",
    "country": "Yemen"
  },
  {
    "airport_code": "GXG",
    "airport_name": "Negage Airport",
    "name": "Negage",
    "lat": "-7.7547",
    "lon": "15.2919",
    "country": "Angola"
  },
  {
    "airport_code": "GYA",
    "airport_name": "Guayaramerin Airport",
    "name": "Guayaramerín",
    "lat": "-10.8276",
    "lon": "-65.3993",
    "country": "Bolivia"
  },
  {
    "airport_code": "GYD",
    "airport_name": "Azerbaijan",
    "name": "Baku",
    "lat": "40.3781",
    "lon": "49.8028",
    "country": "Azerbaijan"
  },
  {
    "airport_code": "GYE",
    "airport_name": "Simon Bolivar International Airport",
    "name": "Guayaquil",
    "lat": "-2.1533",
    "lon": "-79.8833",
    "country": "Ecuador"
  },
  {
    "airport_code": "GYL",
    "airport_name": "Argyle Airport",
    "name": "Argyle",
    "lat": "-16.6364",
    "lon": "128.449",
    "country": "Australia"
  },
  {
    "airport_code": "GYM",
    "airport_name": "General Jose Maria Yanez in Airport",
    "name": "Guaymas",
    "lat": "27.9689",
    "lon": "-110.924",
    "country": "Mexico"
  },
  {
    "airport_code": "GYN",
    "airport_name": "Santa Genoveva Airport",
    "name": "Goiania",
    "lat": "-16.6294",
    "lon": "-49.2261",
    "country": "Brazil"
  },
  {
    "airport_code": "GZO",
    "airport_name": "Nusatupe Airport",
    "name": "Gizo",
    "lat": "-8.0749",
    "lon": "156.832",
    "country": "Solomon Islands"
  },
  {
    "airport_code": "GZT",
    "airport_name": "Gaziantep Airport",
    "name": "Oğuzeli",
    "lat": "36.9481",
    "lon": "37.4783",
    "country": "Turkey"
  },
  {
    "airport_code": "HAA",
    "airport_name": "Hasvik Airport",
    "name": "Hasvik",
    "lat": "70.4849",
    "lon": "22.1126",
    "country": "Norway"
  },
  {
    "airport_code": "HAC",
    "airport_name": "Hachijojima Airport",
    "name": "Hachijo-machi",
    "lat": "33.1153",
    "lon": "139.784",
    "country": "Japan"
  },
  {
    "airport_code": "HAD",
    "airport_name": "Halmstad Airport",
    "name": "Hamstad",
    "lat": "56.6819",
    "lon": "12.8164",
    "country": "Sweden"
  },
  {
    "airport_code": "HAE",
    "airport_name": "Havasupai",
    "name": "Havasupai",
    "lat": "36.2306",
    "lon": "-112.669",
    "country": "United States"
  },
  {
    "airport_code": "HAH",
    "airport_name": "Moroni Hahaia Airport",
    "name": "Hahaia",
    "lat": "-11.5319",
    "lon": "43.2611",
    "country": "Comoros"
  },
  {
    "airport_code": "HAJ",
    "airport_name": "Hannover International Airport",
    "name": "Langenhagen",
    "lat": "52.4586",
    "lon": "9.69459",
    "country": "Germany"
  },
  {
    "airport_code": "HAK",
    "airport_name": "Haikou Airport",
    "name": "Haikou",
    "lat": "20.0204",
    "lon": "110.348",
    "country": "China"
  },
  {
    "airport_code": "HAM",
    "airport_name": "Hamburg Airport",
    "name": "Hamburg",
    "lat": "53.6321",
    "lon": "10.0042",
    "country": "Germany"
  },
  {
    "airport_code": "HAN",
    "airport_name": "Noi Bai Airport",
    "name": "Hanoi",
    "lat": "21.2263",
    "lon": "105.815",
    "country": "Vietnam"
  },
  {
    "airport_code": "HAQ",
    "airport_name": "Hanimadu",
    "name": "Hanimaadhoo",
    "lat": "6.75785",
    "lon": "73.1472",
    "country": "Maldives"
  },
  {
    "airport_code": "HAS",
    "airport_name": "Hail Airport",
    "name": "Ha'il",
    "lat": "27.4433",
    "lon": "41.6872",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "HAU",
    "airport_name": "Haugesund Karmoy Airport",
    "name": "Avaldsnes",
    "lat": "59.3436",
    "lon": "5.21246",
    "country": "Norway"
  },
  {
    "airport_code": "HAV",
    "airport_name": "Jose Marti International Airport",
    "name": "Wajay",
    "lat": "22.9894",
    "lon": "-82.4075",
    "country": "Cuba"
  },
  {
    "airport_code": "HBA",
    "airport_name": "Hobart International Airport",
    "name": "Hobart",
    "lat": "-42.8375",
    "lon": "147.506",
    "country": "Australia"
  },
  {
    "airport_code": "HBE",
    "airport_name": "Borg El Arab International Airport",
    "name": "Alexandria",
    "lat": "30.9183",
    "lon": "29.6914",
    "country": "Egypt"
  },
  {
    "airport_code": "HBT",
    "airport_name": "Saudi Arabia",
    "name": "Hafr Albatin",
    "lat": "23.9176",
    "lon": "45.0811",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "HBX",
    "airport_name": "India",
    "name": "Hubli",
    "lat": "15.364",
    "lon": "75.1131",
    "country": "India"
  },
  
  {
    "airport_code": "HCR",
    "airport_name": "Alaska",
    "name": "Holy Cross",
    "lat": "62.2016",
    "lon": "-159.77",
    "country": "United States"
  },
  {
    "airport_code": "HDB",
    "airport_name": "Heidelberg Airport",
    "name": "Heidelberg",
    "lat": "49.4167",
    "lon": "8.71667",
    "country": "Germany"
  },
  
  {
    "airport_code": "HDF",
    "airport_name": "Heringsdorf",
    "name": "Heringsdorf",
    "lat": "53.8788",
    "lon": "14.1383",
    "country": "Germany"
  },
  {
    "airport_code": "HDM",
    "airport_name": "Hamadan Airport",
    "name": "Hamadan",
    "lat": "34.8692",
    "lon": "48.5522",
    "country": "Iran"
  },
  {
    "airport_code": "HDN",
    "airport_name": "Yampa Valley Airport",
    "name": "Hayden",
    "lat": "40.485",
    "lon": "-107.219",
    "country": "United States"
  },
  {
    "airport_code": "HDS",
    "airport_name": "Hoedspruit Afs Airport",
    "name": "Phalaborwa",
    "lat": "-24.3578",
    "lon": "31.0444",
    "country": "South Africa"
  },
  {
    "airport_code": "HDY",
    "airport_name": "Hat Yai International Airport",
    "name": "Hat Yai",
    "lat": "6.9294",
    "lon": "100.399",
    "country": "Thailand"
  },
  {
    "airport_code": "HEA",
    "airport_name": "Herat Airport",
    "name": "Herat",
    "lat": "34.2069",
    "lon": "62.2267",
    "country": "Afghanistan"
  },
  {
    "airport_code": "HEH",
    "airport_name": "Heho Airport",
    "name": "Heho",
    "lat": "20.7439",
    "lon": "96.7944",
    "country": "Myanmar"
  },
  {
    "airport_code": "HEI",
    "airport_name": "Heide-Busum Airport",
    "name": "Heide-Buesum",
    "lat": "54.153",
    "lon": "8.89555",
    "country": "Germany"
  },
  {
    "airport_code": "HEK",
    "airport_name": "Heihe Airport",
    "name": "Heihe",
    "lat": "50.25",
    "lon": "127.3",
    "country": "China"
  },
  {
    "airport_code": "HEL",
    "airport_name": "Helsinki Vantaa Airport",
    "name": "Vantaa",
    "lat": "60.3243",
    "lon": "24.9688",
    "country": "Finland"
  },
  {
    "airport_code": "HER",
    "airport_name": "Iraklion Airport",
    "name": "Iraklio",
    "lat": "35.3397",
    "lon": "25.1836",
    "country": "Greece"
  },
  {
    "airport_code": "HET",
    "airport_name": "Huhehaote Airport",
    "name": "Hohhot",
    "lat": "40.8543",
    "lon": "111.821",
    "country": "China"
  },
  {
    "airport_code": "HFA",
    "airport_name": "U Michaeli Airport",
    "name": "Hefa",
    "lat": "32.8111",
    "lon": "35.0417",
    "country": "Israel"
  },
  {
    "airport_code": "HFE",
    "airport_name": "Hefei-Luogang Airport",
    "name": "Hefei",
    "lat": "31.7712",
    "lon": "117.301",
    "country": "China"
  },
  {
    "airport_code": "HFS",
    "airport_name": "Hagfors Airport",
    "name": "Hagfors",
    "lat": "60.026",
    "lon": "13.5817",
    "country": "Sweden"
  },
  {
    "airport_code": "HFT",
    "airport_name": "Hammerfest Airport",
    "name": "Hammerfest",
    "lat": "70.6808",
    "lon": "23.676",
    "country": "Norway"
  },
  {
    "airport_code": "HGA",
    "airport_name": "Hargeisa Airport",
    "name": "Hargeysa",
    "lat": "9.5186",
    "lon": "44.0903",
    "country": "Somalia"
  },
  {
    "airport_code": "HGD",
    "airport_name": "Hughenden Aerodrome",
    "name": "Hughenden",
    "lat": "-20.8127",
    "lon": "144.225",
    "country": "Australia"
  },
  {
    "airport_code": "HGH",
    "airport_name": "Jianoiao Airport",
    "name": "Hangzhou",
    "lat": "30.3332",
    "lon": "120.234",
    "country": "China"
  },
  {
    "airport_code": "HGL",
    "airport_name": "Germany",
    "name": "Helgoland",
    "lat": "51.0908",
    "lon": "10.4542",
    "country": "Germany"
  },
  {
    "airport_code": "HGN",
    "airport_name": "Mae Hongson Airport",
    "name": "Mae Hong Son",
    "lat": "19.2989",
    "lon": "97.9764",
    "country": "Thailand"
  },
  {
    "airport_code": "HGU",
    "airport_name": "Mount Hagen Airport",
    "name": "Mount Hagen",
    "lat": "-5.8272",
    "lon": "144.295",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "HHH",
    "airport_name": "Hilton Head Airport",
    "name": "Hilton Head Island",
    "lat": "32.2267",
    "lon": "-80.6989",
    "country": "United States"
  },
  {
    "airport_code": "HHN",
    "airport_name": "Frankfurt-Hahn Airport",
    "name": "Dickenschied",
    "lat": "49.9454",
    "lon": "7.26851",
    "country": "Germany"
  },
  {
    "airport_code": "HHQ",
    "airport_name": "Hua Hin Airport",
    "name": "Hua Hin",
    "lat": "12.6281",
    "lon": "99.95",
    "country": "Thailand"
  },
  {
    "airport_code": "HHZ",
    "airport_name": "French Polynesia",
    "name": "Hikueru",
    "lat": "-18.0363",
    "lon": "-142.616",
    "country": "French Polynesia"
  },
  {
    "airport_code": "HIB",
    "airport_name": "Chisholm Hibbing Airport",
    "name": "Hibbing",
    "lat": "47.3934",
    "lon": "-92.8418",
    "country": "United States"
  },
  {
    "airport_code": "HID",
    "airport_name": "Horn Island",
    "name": "Horn Island",
    "lat": "-10.5858",
    "lon": "142.293",
    "country": "Australia"
  },
  {
    "airport_code": "HIJ",
    "airport_name": "Hiroshima Airport",
    "name": "Mihara-shi",
    "lat": "34.4368",
    "lon": "132.922",
    "country": "Japan"
  },
  {
    "airport_code": "HIL",
    "airport_name": "",
    "name": "Shillavo",
    "lat": "19.7192",
    "lon": "-155.082",
    "country": "Ethiopia"
  },
  {
    "airport_code": "HIN",
    "airport_name": "Sacheon Airport",
    "name": "Sacheon-Si",
    "lat": "35.085",
    "lon": "128.072",
    "country": "South Korea"
  },
  {
    "airport_code": "HIR",
    "airport_name": "Henderson Airport",
    "name": "Honiara",
    "lat": "-9.4211",
    "lon": "160.053",
    "country": "Solomon Islands"
  },
  {
    "airport_code": "HIS",
    "airport_name": "Hayman Island Airport",
    "name": "Hayman Island",
    "lat": "-20.0543",
    "lon": "148.884",
    "country": "Australia"
  },
  {
    "airport_code": "HJJ",
    "airport_name": "Zhi Jiang",
    "name": "Zhi Jiang",
    "lat": "34.668",
    "lon": "104.166",
    "country": "China"
  },
  {
    "airport_code": "HJR",
    "airport_name": "Khajuraho Airport",
    "name": "Khajuraho",
    "lat": "24.8496",
    "lon": "79.9367",
    "country": "India"
  },
  {
    "airport_code": "HKB",
    "airport_name": "Healy Lake Airport",
    "name": "Healy Lake",
    "lat": "63.8667",
    "lon": "-148.967",
    "country": "United States"
  },
  {
    "airport_code": "HKD",
    "airport_name": "Hakodate Airport",
    "name": "Hakodate-shi",
    "lat": "41.7706",
    "lon": "140.824",
    "country": "Japan"
  },
  {
    "airport_code": "HKG",
    "airport_name": "Hong Kong International Airport",
    "name": "Hong Kong",
    "lat": "22.3124",
    "lon": "113.929",
    "country": "Hong Kong"
  },
  {
    "airport_code": "HKK",
    "airport_name": "Hokitika Airport",
    "name": "Hokitika",
    "lat": "-42.7141",
    "lon": "170.989",
    "country": "New Zealand"
  },
  {
    "airport_code": "HKN",
    "airport_name": "Hoskins Airport",
    "name": "Kimbe",
    "lat": "-5.4628",
    "lon": "150.404",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "HKT",
    "airport_name": "Phuket International Airport",
    "name": "Thalang",
    "lat": "8.1106",
    "lon": "98.3125",
    "country": "Thailand"
  },
  
  {
    "airport_code": "HLD",
    "airport_name": "Hailar",
    "name": "Hailar",
    "lat": "49.2",
    "lon": "119.7",
    "country": "China"
  },
  {
    "airport_code": "HLH",
    "airport_name": "Ulanhot Airport",
    "name": "Ulan Hot",
    "lat": "46.0935",
    "lon": "122.021",
    "country": "China"
  },
  {
    "airport_code": "HLN",
    "airport_name": "Helena Regional Airport",
    "name": "Helena",
    "lat": "46.6104",
    "lon": "-111.99",
    "country": "United States"
  },
  
  {
    "airport_code": "HLZ",
    "airport_name": "Hamilton Airport",
    "name": "Hamilton",
    "lat": "-37.8632",
    "lon": "175.328",
    "country": "New Zealand"
  },
  
  {
    "airport_code": "HME",
    "airport_name": "Oued Irara Airport",
    "name": "Ouargla",
    "lat": "31.6739",
    "lon": "6.1428",
    "country": "Algeria"
  },
  {
    "airport_code": "HMO",
    "airport_name": "Gen Ignacio P Garcia International Airport",
    "name": "Hermosillo",
    "lat": "29.0967",
    "lon": "-111.047",
    "country": "Mexico"
  },
  {
    "airport_code": "HMV",
    "airport_name": "Sweden",
    "name": "Hemavan",
    "lat": "62.1984",
    "lon": "17.5514",
    "country": "Sweden"
  },
  {
    "airport_code": "HNA",
    "airport_name": "Hanamaki Airport",
    "name": "Hanamaki-shi",
    "lat": "39.4315",
    "lon": "141.135",
    "country": "Japan"
  },
  {
    "airport_code": "HND",
    "airport_name": "Tokyo International Airport",
    "name": "Tokyo",
    "lat": "35.5533",
    "lon": "139.771",
    "country": "Japan"
  },
  {
    "airport_code": "HNH",
    "airport_name": "Hoonah Airport",
    "name": "Hoonah",
    "lat": "58.0966",
    "lon": "-135.41",
    "country": "United States"
  },
  {
    "airport_code": "HNL",
    "airport_name": "Honolulu International Airport",
    "name": "Honolulu",
    "lat": "21.3358",
    "lon": "-157.919",
    "country": "United States"
  },
  {
    "airport_code": "HNM",
    "airport_name": "Hana Airport",
    "name": "Hana",
    "lat": "20.7944",
    "lon": "-156.015",
    "country": "United States"
  },
  {
    "airport_code": "HNS",
    "airport_name": "Haines Airport",
    "name": "Haines",
    "lat": "59.2439",
    "lon": "-135.524",
    "country": "United States"
  },
  {
    "airport_code": "HOB",
    "airport_name": "Lea County Regional Airport",
    "name": "Hobbs",
    "lat": "32.6929",
    "lon": "-103.215",
    "country": "United States"
  },
  {
    "airport_code": "HOD",
    "airport_name": "Hodeidah Airport",
    "name": "Al Hudaydah",
    "lat": "14.755",
    "lon": "42.9858",
    "country": "Yemen"
  },
  {
    "airport_code": "HOE",
    "airport_name": "Houeisay",
    "name": "Houeisay",
    "lat": "20.5",
    "lon": "103.75",
    "country": "Lao People's Democratic Republic"
  },
  {
    "airport_code": "HOF",
    "airport_name": "Saudi Arabia",
    "name": "Alahsa",
    "lat": "23.9176",
    "lon": "45.0811",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "HOG",
    "airport_name": "Holguin Airport",
    "name": "San Pedro de Cacocum",
    "lat": "20.7853",
    "lon": "-76.315",
    "country": "Cuba"
  },
  {
    "airport_code": "HOH",
    "airport_name": "Hohenems Airport",
    "name": "Hohenems",
    "lat": "47.3833",
    "lon": "9.7",
    "country": "Austria"
  },
  {
    "airport_code": "HOI",
    "airport_name": "Hao Airport",
    "name": "Papeete",
    "lat": "-18.0753",
    "lon": "-140.946",
    "country": "French Polynesia"
  },
  {
    "airport_code": "HOM",
    "airport_name": "Homer Airport",
    "name": "Homer",
    "lat": "59.6408",
    "lon": "-151.499",
    "country": "United States"
  },
  {
    "airport_code": "HON",
    "airport_name": "Howes",
    "name": "Huron",
    "lat": "44.3833",
    "lon": "-98.2333",
    "country": "United States"
  },
  {
    "airport_code": "HOQ",
    "airport_name": "Hof-Plauen Airport",
    "name": "Hof",
    "lat": "50.2893",
    "lon": "11.866",
    "country": "Germany"
  },
  {
    "airport_code": "HOR",
    "airport_name": "Horta Airport",
    "name": "Horta",
    "lat": "38.52",
    "lon": "-28.7172",
    "country": "Portugal"
  },
  {
    "airport_code": "HOU",
    "airport_name": "William P Hobby Airport",
    "name": "Houston",
    "lat": "29.6572",
    "lon": "-95.2795",
    "country": "United States"
  },
  {
    "airport_code": "HOV",
    "airport_name": "Hovden Airport",
    "name": "Hovdebygda",
    "lat": "62.1804",
    "lon": "6.07624",
    "country": "Norway"
  },
  {
    "airport_code": "HPA",
    "airport_name": "Salote Pilolevu Airport",
    "name": "Pangai",
    "lat": "-19.8",
    "lon": "-174.35",
    "country": "Tonga"
  },
  {
    "airport_code": "HPB",
    "airport_name": "Hooper Bay Airport",
    "name": "Hooper Bay",
    "lat": "61.5262",
    "lon": "-166.142",
    "country": "United States"
  },
  {
    "airport_code": "HPH",
    "airport_name": "Hai Phong Cat Bi Airport",
    "name": "Häi Phòng",
    "lat": "20.8192",
    "lon": "106.726",
    "country": "Vietnam"
  },
  {
    "airport_code": "HPN",
    "airport_name": "Westchester County Airport",
    "name": "Purchase",
    "lat": "41.0693",
    "lon": "-73.7042",
    "country": "United States"
  },
  {
    "airport_code": "HRB",
    "airport_name": "Harbin Yangjiagang Airport",
    "name": "Harbin",
    "lat": "45.6281",
    "lon": "126.252",
    "country": "China"
  },
  {
    "airport_code": "HRE",
    "airport_name": "Harare International Airport",
    "name": "Harare",
    "lat": "-17.9228",
    "lon": "31.1014",
    "country": "Zimbabwe"
  },
  {
    "airport_code": "HRG",
    "airport_name": "Hurghada Airport",
    "name": "Bor Safajah",
    "lat": "27.1858",
    "lon": "33.7981",
    "country": "Egypt"
  },
  {
    "airport_code": "HRK",
    "airport_name": "Kharkov Airport",
    "name": "Kharkiv",
    "lat": "49.9245",
    "lon": "36.2946",
    "country": "Ukraine"
  },
  {
    "airport_code": "HRL",
    "airport_name": "Grande Valley International Airport",
    "name": "Harlingen",
    "lat": "26.2216",
    "lon": "-97.663",
    "country": "United States"
  },
  {
    "airport_code": "HRT",
    "airport_name": "Linton-On-Ouse",
    "name": "Harrogate",
    "lat": "54.0486",
    "lon": "-1.25333",
    "country": "United Kingdom"
  },
  {
    "airport_code": "HSG",
    "airport_name": "Saga Airport",
    "name": "Saga",
    "lat": "33.1508",
    "lon": "130.302",
    "country": "Japan"
  },
  {
    "airport_code": "HSL",
    "airport_name": "Alaska",
    "name": "Huslia",
    "lat": "65.7024",
    "lon": "-156.387",
    "country": "United States"
  },
  {
    "airport_code": "HSN",
    "airport_name": "Zhoushan Airport",
    "name": "Shenjiamen Town",
    "lat": "29.935",
    "lon": "122.359",
    "country": "China"
  },
  {
    "airport_code": "HSV",
    "airport_name": "Huntsville International Airport",
    "name": "Huntsville",
    "lat": "34.6492",
    "lon": "-86.7767",
    "country": "United States"
  },
  {
    "airport_code": "HTA",
    "airport_name": "Chita Airport",
    "name": "Chita",
    "lat": "52.1138",
    "lon": "113.498",
    "country": "Russia"
  },
  {
    "airport_code": "HTG",
    "airport_name": "Hatanga Airport",
    "name": "Dudinka",
    "lat": "71.9751",
    "lon": "102.493",
    "country": "Russia"
  },
  {
    "airport_code": "HTI",
    "airport_name": "Hamilton Island Airport",
    "name": "Hamilton Island",
    "lat": "-20.3563",
    "lon": "148.95",
    "country": "Australia"
  },
  {
    "airport_code": "HTN",
    "airport_name": "Hotan",
    "name": "Hotan",
    "lat": "40.5",
    "lon": "78.5",
    "country": "China"
  },
  {
    "airport_code": "HTS",
    "airport_name": "Tri State Walker Long Field Airport",
    "name": "Huntington",
    "lat": "38.37",
    "lon": "-82.5542",
    "country": "United States"
  },
  {
    "airport_code": "HUH",
    "airport_name": "Huahine Airport",
    "name": "Papeete",
    "lat": "-16.6867",
    "lon": "-151.019",
    "country": "French Polynesia"
  },
  {
    "airport_code": "HUI",
    "airport_name": "Hue-Phu Bai Airport",
    "name": "Hue",
    "lat": "16.3988",
    "lon": "107.7",
    "country": "Vietnam"
  },
  {
    "airport_code": "HUN",
    "airport_name": "Hwmlien Airport",
    "name": "Hualien City",
    "lat": "24.0257",
    "lon": "121.613",
    "country": "Taiwan"
  },
  {
    "airport_code": "HUQ",
    "airport_name": "Hon Airport",
    "name": "Houn",
    "lat": "29.1117",
    "lon": "15.9661",
    "country": "Libya"
  },
  {
    "airport_code": "HUS",
    "airport_name": "Hughes",
    "name": "Hughes",
    "lat": "66.0443",
    "lon": "-154.258",
    "country": "United States"
  },
  {
    "airport_code": "HUV",
    "airport_name": "Hudiksvall Airport",
    "name": "Hudiksvall",
    "lat": "61.7683",
    "lon": "17.0855",
    "country": "Sweden"
  },
  {
    "airport_code": "HUX",
    "airport_name": "Bahias de Huatulco International Airport",
    "name": "Santo Domingo de Morelos",
    "lat": "15.7739",
    "lon": "-96.2625",
    "country": "Mexico"
  },
  {
    "airport_code": "HUY",
    "airport_name": "Humberside International Airport",
    "name": "Ulceby",
    "lat": "53.5833",
    "lon": "-0.34925",
    "country": "United Kingdom"
  },
  {
    "airport_code": "HUZ",
    "airport_name": "Huizhou",
    "name": "Huizhou",
    "lat": "23.0957",
    "lon": "114.398",
    "country": "China"
  },
  {
    "airport_code": "HVA",
    "airport_name": "Analalava Airport",
    "name": "Analalava",
    "lat": "-14.6289",
    "lon": "47.7667",
    "country": "Madagascar"
  },
  {
    "airport_code": "HVB",
    "airport_name": "Hervey Bay Airport",
    "name": "Hervey Bay",
    "lat": "-25.2839",
    "lon": "152.836",
    "country": "Australia"
  },
  {
    "airport_code": "HVD",
    "airport_name": "Mongolia",
    "name": "Khovd",
    "lat": "48.0167",
    "lon": "91.6333",
    "country": "Mongolia"
  },
  {
    "airport_code": "HVG",
    "airport_name": "Valan Airport",
    "name": "Honningsvåg",
    "lat": "71.0099",
    "lon": "25.9767",
    "country": "Norway"
  },
  {
    "airport_code": "HVN",
    "airport_name": "Tweed New Haven Airport",
    "name": "East Haven",
    "lat": "41.2709",
    "lon": "-72.89",
    "country": "United States"
  },
  {
    "airport_code": "HVR",
    "airport_name": "Havre City-County Airport",
    "name": "Havre",
    "lat": "48.5461",
    "lon": "-109.773",
    "country": "United States"
  },
  {
    "airport_code": "HYA",
    "airport_name": "Barnstable Boardman Polando Airport",
    "name": "Hyannis",
    "lat": "41.6667",
    "lon": "-70.2863",
    "country": "United States"
  },
  {
    "airport_code": "HYD",
    "airport_name": "Begumpet Airport",
    "name": "Hyderabad",
    "lat": "17.4522",
    "lon": "78.4629",
    "country": "India"
  },
  {
    "airport_code": "HYG",
    "airport_name": "Alaska",
    "name": "Hydaburg",
    "lat": "55.205",
    "lon": "-132.822",
    "country": "United States"
  },
  {
    "airport_code": "HYL",
    "airport_name": "SPB",
    "name": "Hollis",
    "lat": "55.4833",
    "lon": "-132.65",
    "country": "United States"
  },
  {
    "airport_code": "HYN",
    "airport_name": "",
    "name": "Huangyan",
    "lat": "60.8929",
    "lon": "15.9744",
    "country": "China"
  },
  {
    "airport_code": "HYS",
    "airport_name": "Hays Municipal Airport",
    "name": "Hays",
    "lat": "38.8546",
    "lon": "-99.2737",
    "country": "United States"
  },
  {
    "airport_code": "HZG",
    "airport_name": "Hanzhong Airport",
    "name": "Hanzhong",
    "lat": "33.0677",
    "lon": "107.007",
    "country": "China"
  },
  {
    "airport_code": "HZH",
    "airport_name": "Liping",
    "name": "Liping City",
    "lat": "32.7833",
    "lon": "106.667",
    "country": "China"
  },
  {
    "airport_code": "IAA",
    "airport_name": "Russia",
    "name": "Igarka",
    "lat": "67.4538",
    "lon": "86.4912",
    "country": "Russia"
  },
  {
    "airport_code": "IAD",
    "airport_name": "Dulles International Airport",
    "name": "Washington",
    "lat": "38.9556",
    "lon": "-77.4484",
    "country": "United States"
  },
  
  {
    "airport_code": "IAH",
    "airport_name": "George Bush Intercontinental Airport",
    "name": "Houston",
    "lat": "29.9784",
    "lon": "-95.3424",
    "country": "United States"
  },
  {
    "airport_code": "IAM",
    "airport_name": "In Amenas Airport",
    "name": "Illizi",
    "lat": "28.0511",
    "lon": "9.6381",
    "country": "Algeria"
  },
  {
    "airport_code": "IAN",
    "airport_name": "Kiana",
    "name": "Kiana",
    "lat": "66.9699",
    "lon": "-160.429",
    "country": "United States"
  },
  {
    "airport_code": "IAS",
    "airport_name": "Iasi North Airport",
    "name": "Ilasi",
    "lat": "47.1814",
    "lon": "27.617",
    "country": "Romania"
  },
  {
    "airport_code": "IBA",
    "airport_name": "Ibadan Airport",
    "name": "Ibadan",
    "lat": "7.3608",
    "lon": "3.9781",
    "country": "Nigeria"
  },
  {
    "airport_code": "IBE",
    "airport_name": "Perales Airport",
    "name": "Ibague",
    "lat": "4.425",
    "lon": "-75.1394",
    "country": "Colombia"
  },
  {
    "airport_code": "IBZ",
    "airport_name": "Ibiza Airport",
    "name": "San José",
    "lat": "38.8755",
    "lon": "1.36851",
    "country": "Spain"
  },
  {
    "airport_code": "ICI",
    "airport_name": "Cicia Airport",
    "name": "Cicia",
    "lat": "-17.7518",
    "lon": "-179.307",
    "country": "Fiji"
  },
  {
    "airport_code": "ICN",
    "airport_name": "New Incheon International Airport",
    "name": "Incheon",
    "lat": "37.4534",
    "lon": "126.657",
    "country": "South Korea"
  },
  {
    "airport_code": "ICT",
    "airport_name": "Wichita Mid-Continent Airport",
    "name": "Wichita",
    "lat": "37.6531",
    "lon": "-97.43",
    "country": "United States"
  },
  {
    "airport_code": "IDA",
    "airport_name": "Fanning Field Airport",
    "name": "Idaho Falls",
    "lat": "43.5147",
    "lon": "-112.068",
    "country": "United States"
  },
  {
    "airport_code": "IDR",
    "airport_name": "Devi Ahilyabai Holkar International Airport",
    "name": "Indore",
    "lat": "22.7197",
    "lon": "75.807",
    "country": "India"
  },
  {
    "airport_code": "IEG",
    "airport_name": "Babimost Airport",
    "name": "Babimost",
    "lat": "52.1282",
    "lon": "15.7975",
    "country": "Poland"
  },
  {
    "airport_code": "IEV",
    "airport_name": "Zhulyany Airport",
    "name": "Kiev",
    "lat": "50.4069",
    "lon": "30.4456",
    "country": "Ukraine"
  },
  {
    "airport_code": "IFJ",
    "airport_name": "Isafjordur Airport",
    "name": "Isafjordur",
    "lat": "66.0548",
    "lon": "-23.1301",
    "country": "Iceland"
  },
  {
    "airport_code": "IFN",
    "airport_name": "Esfahan International Airport",
    "name": "Esfahan",
    "lat": "32.7514",
    "lon": "51.8639",
    "country": "Iran"
  },
  {
    "airport_code": "IFO",
    "airport_name": "Ivano-Frankovsk Airport",
    "name": "Ivano-Frankivs'k",
    "lat": "48.8833",
    "lon": "24.6833",
    "country": "Ukraine"
  },
  {
    "airport_code": "IFP",
    "airport_name": "Laughlin-Bullhead International Airport",
    "name": "Bullhead City",
    "lat": "35.1657",
    "lon": "-114.557",
    "country": "United States"
  },
  {
    "airport_code": "IGA",
    "airport_name": "Great Inagua Airport",
    "name": "Matthew Town",
    "lat": "20.9767",
    "lon": "-73.6656",
    "country": "Bahamas"
  },
  {
    "airport_code": "IGG",
    "airport_name": "Igiugig",
    "name": "Igiugig",
    "lat": "59.3167",
    "lon": "-155.9",
    "country": "United States"
  },
  {
    "airport_code": "IGM",
    "airport_name": "Kingman Airport",
    "name": "Kingman",
    "lat": "35.2692",
    "lon": "-113.957",
    "country": "United States"
  },
  {
    "airport_code": "IGR",
    "airport_name": "Cataratas del Iguazu Airport",
    "name": "Puerto Esperanza",
    "lat": "-25.7422",
    "lon": "-54.4753",
    "country": "Argentina"
  },
  {
    "airport_code": "IGS",
    "airport_name": "Ingolstadt-Manching",
    "name": "Ingolstadt-Manching",
    "lat": "49.6622",
    "lon": "9.9275",
    "country": "Germany"
  },
  {
    "airport_code": "IGU",
    "airport_name": "Cataratas International Airport",
    "name": "Foz do Iguacu",
    "lat": "-25.5958",
    "lon": "-54.4864",
    "country": "Brazil"
  },
  {
    "airport_code": "IHR",
    "airport_name": "Iran",
    "name": "Iran Shahr",
    "lat": "32.4207",
    "lon": "53.6824",
    "country": "Iran"
  },
  {
    "airport_code": "IIL",
    "airport_name": "Iran",
    "name": "Ilaam",
    "lat": "32.4207",
    "lon": "53.6824",
    "country": "Iran"
  },
  {
    "airport_code": "IJK",
    "airport_name": "Russia",
    "name": "Izhevsk",
    "lat": "56.8346",
    "lon": "53.2026",
    "country": "Russia"
  },
  {
    "airport_code": "IKA",
    "airport_name": "Imam Khomeini International Airport",
    "name": "Tehran",
    "lat": "35.5683",
    "lon": "51.4436",
    "country": "Iran"
  },
  
  {
    "airport_code": "IKS",
    "airport_name": "Tiksi Airport",
    "name": "Tiksi",
    "lat": "71.6969",
    "lon": "128.908",
    "country": "Russia"
  },
  {
    "airport_code": "IKT",
    "airport_name": "Irkutsk Southeast Airport",
    "name": "Irkutsk",
    "lat": "52.2604",
    "lon": "104.404",
    "country": "Russia"
  },
  
  {
    "airport_code": "ILI",
    "airport_name": "Iliamna Airport",
    "name": "Iliamna",
    "lat": "59.7555",
    "lon": "-154.918",
    "country": "United States"
  },
  {
    "airport_code": "ILM",
    "airport_name": "Wilmington International Airport",
    "name": "Wilmington",
    "lat": "34.2668",
    "lon": "-77.912",
    "country": "United States"
  },
  {
    "airport_code": "ILN",
    "airport_name": "Airborne Airpark",
    "name": "Wilmington",
    "lat": "39.4348",
    "lon": "-83.7982",
    "country": "United States"
  },
  {
    "airport_code": "ILO",
    "airport_name": "Iloilo Airport",
    "name": "Iloilo",
    "lat": "10.7144",
    "lon": "122.544",
    "country": "Philippines"
  },
  {
    "airport_code": "ILP",
    "airport_name": "Moue Airport",
    "name": "Vao",
    "lat": "-22.609",
    "lon": "167.478",
    "country": "New Caledonia"
  },
  {
    "airport_code": "ILR",
    "airport_name": "Ilorin Airport",
    "name": "Ilorin",
    "lat": "8.4397",
    "lon": "4.4947",
    "country": "Nigeria"
  },
  {
    "airport_code": "ILY",
    "airport_name": "Islay Airport",
    "name": "Glenegedale",
    "lat": "55.6835",
    "lon": "-6.24856",
    "country": "United Kingdom"
  },
  {
    "airport_code": "ILZ",
    "airport_name": "Kotesovo Airport",
    "name": "Bytča",
    "lat": "49.2333",
    "lon": "18.6179",
    "country": "Slovakia"
  },
  {
    "airport_code": "IMF",
    "airport_name": "Imphal Airport",
    "name": "Lilong (Imphal West)",
    "lat": "24.7611",
    "lon": "93.8972",
    "country": "India"
  },
  {
    "airport_code": "IMK",
    "airport_name": "Nepal",
    "name": "Simikot",
    "lat": "29.9667",
    "lon": "81.8333",
    "country": "Nepal"
  },
  {
    "airport_code": "IMP",
    "airport_name": "Prefeito Renato Moreira Airport",
    "name": "Imperatriz",
    "lat": "-5.5303",
    "lon": "-47.4669",
    "country": "Brazil"
  },
  {
    "airport_code": "IMT",
    "airport_name": "Ford Airport",
    "name": "Kingsford",
    "lat": "45.8153",
    "lon": "-88.1185",
    "country": "United States"
  },
  {
    "airport_code": "INC",
    "airport_name": "Yinchuan Airport",
    "name": "Yinchuan",
    "lat": "38.4999",
    "lon": "106.146",
    "country": "China"
  },
  {
    "airport_code": "IND",
    "airport_name": "Indianapolis International Airport",
    "name": "Indianapolis",
    "lat": "39.7322",
    "lon": "-86.2707",
    "country": "United States"
  },
  {
    "airport_code": "INH",
    "airport_name": "Inhambane Airport",
    "name": "Inhambane",
    "lat": "-23.8731",
    "lon": "35.4058",
    "country": "Mozambique"
  },
  
  {
    "airport_code": "INL",
    "airport_name": "Falls International Airport",
    "name": "International Falls",
    "lat": "48.5661",
    "lon": "-93.3978",
    "country": "United States"
  },
  {
    "airport_code": "INN",
    "airport_name": "Innsbruck Airport",
    "name": "Innsbruck",
    "lat": "47.2591",
    "lon": "11.3566",
    "country": "Austria"
  },
  {
    "airport_code": "INT",
    "airport_name": "Smith Reynolds Airport",
    "name": "Winston-Salem",
    "lat": "36.1361",
    "lon": "-80.2294",
    "country": "United States"
  },
  {
    "airport_code": "INU",
    "airport_name": "Nauru International Airport",
    "name": "Yaren",
    "lat": "-0.54855",
    "lon": "166.921",
    "country": "Nauru"
  },
  {
    "airport_code": "INV",
    "airport_name": "Inverness Airport",
    "name": "Inverness",
    "lat": "57.5399",
    "lon": "-4.06352",
    "country": "United Kingdom"
  },
  {
    "airport_code": "INZ",
    "airport_name": "In Salah Airport",
    "name": "In Salah",
    "lat": "27.2453",
    "lon": "2.5164",
    "country": "Algeria"
  },
  {
    "airport_code": "IOA",
    "airport_name": "Ioannina Airport",
    "name": "Ioannina",
    "lat": "39.6967",
    "lon": "20.8258",
    "country": "Greece"
  },
  {
    "airport_code": "IOM",
    "airport_name": "Ronaldsway Airport",
    "name": "Castletown",
    "lat": "54.0819",
    "lon": "-4.6269",
    "country": "United Kingdom"
  },
  {
    "airport_code": "ION",
    "airport_name": "Impfondo Airport",
    "name": "Impfondo",
    "lat": "1.5953",
    "lon": "18.0522",
    "country": "Congo"
  },
  {
    "airport_code": "IOS",
    "airport_name": "Jorge Amado Airport",
    "name": "Ilhéus",
    "lat": "-14.8142",
    "lon": "-39.0331",
    "country": "Brazil"
  },
  {
    "airport_code": "IPA",
    "airport_name": "",
    "name": "Ipota",
    "lat": "-18.8134",
    "lon": "169.166",
    "country": "Vanuatu"
  },
  {
    "airport_code": "IPC",
    "airport_name": "Mataveri International Airport",
    "name": "Easter Island",
    "lat": "-27.1167",
    "lon": "-109.367",
    "country": "Chile"
  },
  {
    "airport_code": "IPH",
    "airport_name": "Ipoh Airport",
    "name": "Ipoh",
    "lat": "4.5669",
    "lon": "101.096",
    "country": "Malaysia"
  },
  {
    "airport_code": "IPI",
    "airport_name": "San Luis Airport",
    "name": "Ipiales",
    "lat": "0.8611",
    "lon": "-77.6681",
    "country": "Colombia"
  },
  {
    "airport_code": "IPL",
    "airport_name": "Imperial County Airport",
    "name": "Imperial",
    "lat": "32.8332",
    "lon": "-115.57",
    "country": "United States"
  },
  {
    "airport_code": "IPN",
    "airport_name": "Usiminas Airport",
    "name": "Santana do Paraíso",
    "lat": "-19.47",
    "lon": "-42.4875",
    "country": "Brazil"
  },
  {
    "airport_code": "IPT",
    "airport_name": "Williamsport-Lycoming County Airport",
    "name": "Montoursville",
    "lat": "41.2441",
    "lon": "-76.9276",
    "country": "United States"
  },
  
  {
    "airport_code": "IQM",
    "airport_name": "Qiemo",
    "name": "Qiemo",
    "lat": "38.1333",
    "lon": "85.5333",
    "country": "China"
  },
  {
    "airport_code": "IQN",
    "airport_name": "",
    "name": "Qingyang",
    "lat": "36.1",
    "lon": "107.783",
    "country": "China"
  },
  {
    "airport_code": "IQQ",
    "airport_name": "Diego Aracena International Airport",
    "name": "Alto Hospicio",
    "lat": "-20.5356",
    "lon": "-70.1842",
    "country": "Chile"
  },
  {
    "airport_code": "IQT",
    "airport_name": "Cnl Fap Fran Seca Vignetta Airport",
    "name": "Iquitos",
    "lat": "-3.7856",
    "lon": "-73.3103",
    "country": "Peru"
  },
  {
    "airport_code": "IRA",
    "airport_name": "Kirakira",
    "name": "Kirakira",
    "lat": "-10.5",
    "lon": "161.833",
    "country": "Solomon Islands"
  },
  {
    "airport_code": "IRC",
    "airport_name": "Circle",
    "name": "Circle",
    "lat": "65.8245",
    "lon": "-144.063",
    "country": "United States"
  },
  {
    "airport_code": "IRJ",
    "airport_name": "Capitan Vicente A Almonacid Airport",
    "name": "Chamical",
    "lat": "-29.3847",
    "lon": "-66.7833",
    "country": "Argentina"
  },
  {
    "airport_code": "IRM",
    "airport_name": "",
    "name": "Irma",
    "lat": "45.3517",
    "lon": "-89.6665",
    "country": "United States"
  },
  {
    "airport_code": "ISA",
    "airport_name": "Mount Isa Airport",
    "name": "Mount Isa",
    "lat": "-20.6696",
    "lon": "139.488",
    "country": "Australia"
  },
  {
    "airport_code": "ISB",
    "airport_name": "Islamabad International Airport",
    "name": "Råwalpindi",
    "lat": "33.6147",
    "lon": "73.0967",
    "country": "Pakistan"
  },
  {
    "airport_code": "ISC",
    "airport_name": "Saint Mary's Airport",
    "name": "Rams Valley",
    "lat": "49.9167",
    "lon": "-6.3",
    "country": "United Kingdom"
  },
  {
    "airport_code": "ISG",
    "airport_name": "Ishigaki Airport",
    "name": "Ishigaki-shi",
    "lat": "24.3456",
    "lon": "124.186",
    "country": "Japan"
  },
  {
    "airport_code": "ISN",
    "airport_name": "Sloulin Field International Airport",
    "name": "Williston",
    "lat": "48.1767",
    "lon": "-103.631",
    "country": "United States"
  },
  {
    "airport_code": "ISO",
    "airport_name": "Kinston Jetport Stallings Airport",
    "name": "Kinston",
    "lat": "35.3243",
    "lon": "-77.6115",
    "country": "United States"
  },
  {
    "airport_code": "ISP",
    "airport_name": "Long Island Macarthur Airport",
    "name": "Ronkonkoma",
    "lat": "40.7891",
    "lon": "-73.0984",
    "country": "United States"
  },
  {
    "airport_code": "IST",
    "airport_name": "Ataturk Hava Limani Airport",
    "name": "Bakırköy",
    "lat": "40.9857",
    "lon": "28.8163",
    "country": "Turkey"
  },
  {
    "airport_code": "ITH",
    "airport_name": "Tompkins County Airport",
    "name": "Ithaca",
    "lat": "42.4898",
    "lon": "-76.4627",
    "country": "United States"
  },
  {
    "airport_code": "ITM",
    "airport_name": "Osaka International Airport",
    "name": "Itami-shi",
    "lat": "34.7857",
    "lon": "135.439",
    "country": "Japan"
  },
  {
    "airport_code": "ITO",
    "airport_name": "Hilo International Airport",
    "name": "Hilo",
    "lat": "19.7126",
    "lon": "-155.042",
    "country": "United States"
  },
  {
    "airport_code": "IUE",
    "airport_name": "Niue",
    "name": "Niue Island",
    "lat": "-19.0787",
    "lon": "-169.926",
    "country": "Niue"
  },
  {
    "airport_code": "IVC",
    "airport_name": "Invercargill Airport",
    "name": "Invercargill",
    "lat": "-46.4124",
    "lon": "168.309",
    "country": "New Zealand"
  },
  {
    "airport_code": "IVL",
    "airport_name": "Ivalo Airport",
    "name": "Ivalo",
    "lat": "68.6064",
    "lon": "27.4029",
    "country": "Finland"
  },
  {
    "airport_code": "IVR",
    "airport_name": "Inverell Airport",
    "name": "Inverell",
    "lat": "-29.8892",
    "lon": "151.142",
    "country": "Australia"
  },
  {
    "airport_code": "IWD",
    "airport_name": "Gogebic-Iron County Airport",
    "name": "Ironwood",
    "lat": "46.5208",
    "lon": "-90.1344",
    "country": "United States"
  },
  {
    "airport_code": "IWJ",
    "airport_name": "Iwami Airport",
    "name": "Iwami",
    "lat": "-10.45",
    "lon": "150.333",
    "country": "Japan"
  },
  {
    "airport_code": "IXA",
    "airport_name": "Agartala Airport",
    "name": "Gandhigram",
    "lat": "23.89",
    "lon": "91.2422",
    "country": "India"
  },
  {
    "airport_code": "IXB",
    "airport_name": "Bagdogra Airport",
    "name": "Bagdogra",
    "lat": "26.7333",
    "lon": "88.3333",
    "country": "India"
  },
  {
    "airport_code": "IXC",
    "airport_name": "Chandigarh Airport",
    "name": "Bhabat",
    "lat": "30.6751",
    "lon": "76.7973",
    "country": "India"
  },
  {
    "airport_code": "IXD",
    "airport_name": "Bamrauli Airport",
    "name": "Allahabad",
    "lat": "25.4397",
    "lon": "81.7361",
    "country": "India"
  },
  {
    "airport_code": "IXE",
    "airport_name": "Mangalore Airport",
    "name": "Mulur",
    "lat": "12.9812",
    "lon": "74.8992",
    "country": "India"
  },
  {
    "airport_code": "IXG",
    "airport_name": "Belgaum Airport",
    "name": "Kangrali",
    "lat": "15.8581",
    "lon": "74.6189",
    "country": "India"
  },
  {
    "airport_code": "IXI",
    "airport_name": "India",
    "name": "Lilabari",
    "lat": "21.7866",
    "lon": "82.7948",
    "country": "India"
  },
  {
    "airport_code": "IXJ",
    "airport_name": "Jammu Airport",
    "name": "Jammu Cantt",
    "lat": "32.6917",
    "lon": "74.8375",
    "country": "India"
  },
  {
    "airport_code": "IXL",
    "airport_name": "Leh Airport",
    "name": "Leh",
    "lat": "34.1667",
    "lon": "77.5833",
    "country": "India"
  },
  {
    "airport_code": "IXM",
    "airport_name": "Madurai Airport",
    "name": "Harveypatti",
    "lat": "9.83543",
    "lon": "78.0964",
    "country": "India"
  },
  {
    "airport_code": "IXR",
    "airport_name": "Birsa Munda Airport",
    "name": "Ranchi",
    "lat": "23.3066",
    "lon": "85.3353",
    "country": "India"
  },
  {
    "airport_code": "IXS",
    "airport_name": "Kumbhirgram Airport",
    "name": "Tarapur",
    "lat": "24.9667",
    "lon": "92.5167",
    "country": "India"
  },
  {
    "airport_code": "IXU",
    "airport_name": "Aurangabad Airport",
    "name": "Aurangabad",
    "lat": "19.8698",
    "lon": "75.386",
    "country": "India"
  },
  {
    "airport_code": "IXW",
    "airport_name": "Sonari Airport",
    "name": "Jamshedpur",
    "lat": "22.8167",
    "lon": "86.1667",
    "country": "India"
  },
  {
    "airport_code": "IXY",
    "airport_name": "Kandla Airport",
    "name": "Gandhidham",
    "lat": "23.1119",
    "lon": "70.1011",
    "country": "India"
  },
  {
    "airport_code": "IXZ",
    "airport_name": "Vir Savarkar Airport",
    "name": "Port Blair",
    "lat": "11.692",
    "lon": "92.7097",
    "country": "India"
  },
  {
    "airport_code": "IYK",
    "airport_name": "Inyokern Airport",
    "name": "Inyokern",
    "lat": "35.6606",
    "lon": "-117.816",
    "country": "United States"
  },
  {
    "airport_code": "IZO",
    "airport_name": "Izumo Airport",
    "name": "Hikawa-cho",
    "lat": "35.4131",
    "lon": "132.887",
    "country": "Japan"
  },
  {
    "airport_code": "JAC",
    "airport_name": "Jackson Hole Airport",
    "name": "Jackson",
    "lat": "43.6034",
    "lon": "-110.736",
    "country": "United States"
  },
  {
    "airport_code": "JAI",
    "airport_name": "Sanganer Airport",
    "name": "Jaipur",
    "lat": "26.8165",
    "lon": "75.8128",
    "country": "India"
  },
  {
    "airport_code": "JAL",
    "airport_name": "Jalapa Airport",
    "name": "Jalapa",
    "lat": "19.5833",
    "lon": "-96.8333",
    "country": "Mexico"
  },
  {
    "airport_code": "JAN",
    "airport_name": "Jackson International Airport",
    "name": "Pearl",
    "lat": "32.3089",
    "lon": "-90.0733",
    "country": "United States"
  },
  {
    "airport_code": "JAV",
    "airport_name": "Ilulissat Airport",
    "name": "Ilulissat",
    "lat": "69.25",
    "lon": "-51",
    "country": "Greenland"
  },
  {
    "airport_code": "JAX",
    "airport_name": "Jacksonville International Airport",
    "name": "Jacksonville",
    "lat": "30.4914",
    "lon": "-81.676",
    "country": "United States"
  },
  {
    "airport_code": "JCB",
    "airport_name": "Joacaba Airport",
    "name": "Joaçaba",
    "lat": "-27.1722",
    "lon": "-51.5511",
    "country": "Brazil"
  },
  {
    "airport_code": "JCH",
    "airport_name": "Christianshab Airport",
    "name": "Qasigiannguit",
    "lat": "68.8333",
    "lon": "-51",
    "country": "Greenland"
  },
  {
    "airport_code": "JCK",
    "airport_name": "Julia Creek Aerodrome",
    "name": "Julia Creek",
    "lat": "-20.669",
    "lon": "141.722",
    "country": "Australia"
  },
  
  {
    "airport_code": "JDF",
    "airport_name": "Francisco de Assis Airport",
    "name": "Juiz de Fora",
    "lat": "-21.7925",
    "lon": "-43.385",
    "country": "Brazil"
  },
  {
    "airport_code": "JDH",
    "airport_name": "Jodhpur Airport",
    "name": "Jodhpur",
    "lat": "26.2564",
    "lon": "73.0546",
    "country": "India"
  },
  {
    "airport_code": "JDO",
    "airport_name": "Cariri Regional Airport",
    "name": "Juazeiro do Norte",
    "lat": "-7.2181",
    "lon": "-39.2706",
    "country": "Brazil"
  },
  {
    "airport_code": "JDZ",
    "airport_name": "Jingde Town",
    "name": "Jingdezhen",
    "lat": "29.293",
    "lon": "117.203",
    "country": "China"
  },
  {
    "airport_code": "JED",
    "airport_name": "King Abdul Aziz International Airport",
    "name": "Jeddah",
    "lat": "21.706",
    "lon": "39.1386",
    "country": "Saudi Arabia"
  },
  
  {
    "airport_code": "JEG",
    "airport_name": "Auisiait Airport",
    "name": "Aasiaat",
    "lat": "68.7075",
    "lon": "-52.8069",
    "country": "Greenland"
  },
  {
    "airport_code": "JEJ",
    "airport_name": "Jeh",
    "name": "Jeh",
    "lat": "7.58333",
    "lon": "168.917",
    "country": "Marshall Islands"
  },
  {
    "airport_code": "JER",
    "airport_name": "Jersey Airport",
    "name": "St. Peter",
    "lat": "49.205",
    "lon": "-2.19729",
    "country": "United Kingdom"
  },
  {
    "airport_code": "JFK",
    "airport_name": "John F Kennedy International Airport",
    "name": "Jamaica",
    "lat": "40.6437",
    "lon": "-73.79",
    "country": "United States"
  },
  {
    "airport_code": "JFR",
    "airport_name": "Paamiut",
    "name": "Paamiut",
    "lat": "62",
    "lon": "-49.65",
    "country": "Greenland"
  },
  {
    "airport_code": "JGA",
    "airport_name": "Jamnagar Airport",
    "name": "Jamnagar",
    "lat": "22.4633",
    "lon": "70.0119",
    "country": "India"
  },
  
  {
    "airport_code": "JGN",
    "airport_name": "Jiayuguan Airport",
    "name": "Jiayuguan",
    "lat": "39.8574",
    "lon": "98.3368",
    "country": "China"
  },
  {
    "airport_code": "JGO",
    "airport_name": "Godhavn Airport",
    "name": "Qeqertarsuaq",
    "lat": "69.25",
    "lon": "-53.55",
    "country": "Greenland"
  },
  {
    "airport_code": "JGS",
    "airport_name": "Ji An/Jing Gang Shan",
    "name": "Ji An",
    "lat": "27.1093",
    "lon": "114.984",
    "country": "China"
  },
  {
    "airport_code": "JHB",
    "airport_name": "Sultan Ismail Airport",
    "name": "Senai",
    "lat": "1.6389",
    "lon": "103.671",
    "country": "Malaysia"
  },
  {
    "airport_code": "JHG",
    "airport_name": "Gasa",
    "name": "Jinghong",
    "lat": "22.0167",
    "lon": "100.8",
    "country": "China"
  },
  {
    "airport_code": "JHM",
    "airport_name": "Kapalua West Maui Airport",
    "name": "Lahaina",
    "lat": "20.9619",
    "lon": "-156.676",
    "country": "United States"
  },
  {
    "airport_code": "JHS",
    "airport_name": "Holsteinsborg Airport",
    "name": "Sisimiut",
    "lat": "66.9273",
    "lon": "-53.6754",
    "country": "Greenland"
  },
  {
    "airport_code": "JHW",
    "airport_name": "Chautauqua County-Jamestown Airport",
    "name": "Jamestown",
    "lat": "42.1528",
    "lon": "-79.2666",
    "country": "United States"
  },
  {
    "airport_code": "JIB",
    "airport_name": "Djibouti Ambouli Airport",
    "name": "Djibouti City",
    "lat": "11.5467",
    "lon": "43.1592",
    "country": "Djibouti"
  },
  {
    "airport_code": "JIJ",
    "airport_name": "Jijiga",
    "name": "Jijiga",
    "lat": "9.34587",
    "lon": "42.7955",
    "country": "Ethiopia"
  },
  {
    "airport_code": "JIK",
    "airport_name": "Ikaria Island Airport",
    "name": "Evdilos",
    "lat": "37.6176",
    "lon": "26.1614",
    "country": "Greece"
  },
  {
    "airport_code": "JIM",
    "airport_name": "",
    "name": "Jimma",
    "lat": "32.3834",
    "lon": "-81.8349",
    "country": "Ethiopia"
  },
  
  {
    "airport_code": "JJN",
    "airport_name": "Jinjiang",
    "name": "Jinjiang",
    "lat": "24.9",
    "lon": "118.583",
    "country": "China"
  },
  
  {
    "airport_code": "JKG",
    "airport_name": "Jonkoping Airport",
    "name": "Jonkoping",
    "lat": "57.7522",
    "lon": "14.0692",
    "country": "Sweden"
  },
  {
    "airport_code": "JKH",
    "airport_name": "Chios Airport",
    "name": "Khios",
    "lat": "38.345",
    "lon": "26.1417",
    "country": "Greece"
  },
  {
    "airport_code": "JKL",
    "airport_name": "Julian Carroll Airport",
    "name": "Jackson",
    "lat": "37.5917",
    "lon": "-83.315",
    "country": "United States"
  },
  
  {
    "airport_code": "JLN",
    "airport_name": "Joplin Regional Airport",
    "name": "Webb City",
    "lat": "37.147",
    "lon": "-94.5019",
    "country": "United States"
  },
  {
    "airport_code": "JLR",
    "airport_name": "Jabalpur Airport",
    "name": "Bilpura",
    "lat": "23.1778",
    "lon": "80.0556",
    "country": "India"
  },
  {
    "airport_code": "JMK",
    "airport_name": "Mikonos Airport",
    "name": "Mikonos",
    "lat": "37.4383",
    "lon": "25.3472",
    "country": "Greece"
  },
  {
    "airport_code": "JMS",
    "airport_name": "Jamestown Municipal Airport",
    "name": "Jamestown",
    "lat": "46.9243",
    "lon": "-98.6788",
    "country": "United States"
  },
  {
    "airport_code": "JMU",
    "airport_name": "Jiamusi",
    "name": "Jiamusi",
    "lat": "46.8333",
    "lon": "130.35",
    "country": "China"
  },
  {
    "airport_code": "JNB",
    "airport_name": "OR Tambo International Airport",
    "name": "Johannesburg",
    "lat": "-26.1219",
    "lon": "28.2467",
    "country": "South Africa"
  },
  {
    "airport_code": "JNN",
    "airport_name": "Nanortalik Airport",
    "name": "Nanortalik",
    "lat": "60.153",
    "lon": "-45.2532",
    "country": "Greenland"
  },
  
  {
    "airport_code": "JNU",
    "airport_name": "Juneau International Airport",
    "name": "Juneau",
    "lat": "58.3598",
    "lon": "-134.583",
    "country": "United States"
  },
  {
    "airport_code": "JNX",
    "airport_name": "Naxos Airport",
    "name": "Naxos",
    "lat": "37.1",
    "lon": "25.3833",
    "country": "Greece"
  },
  {
    "airport_code": "JNZ",
    "airport_name": "Jinzhou",
    "name": "Jinzhou",
    "lat": "39.1",
    "lon": "121.717",
    "country": "China"
  },
  {
    "airport_code": "JOE",
    "airport_name": "Joensuu Airport",
    "name": "Ylämylly",
    "lat": "62.6629",
    "lon": "29.6076",
    "country": "Finland"
  },
  {
    "airport_code": "JOG",
    "airport_name": "Adisucipto Airport",
    "name": "Yogyakarta",
    "lat": "-7.7889",
    "lon": "110.43",
    "country": "Indonesia"
  },
  {
    "airport_code": "JOI",
    "airport_name": "Lauro Carneiro de Loyola Airport",
    "name": "Joinville",
    "lat": "-26.223",
    "lon": "-48.8046",
    "country": "Brazil"
  },
  {
    "airport_code": "JOL",
    "airport_name": "Jolo Airport",
    "name": "Jolo",
    "lat": "6.0553",
    "lon": "121.009",
    "country": "Philippines"
  },
  {
    "airport_code": "JPA",
    "airport_name": "Presidente Castro Pinto International Airport",
    "name": "Santa Rita",
    "lat": "-7.1481",
    "lon": "-34.9506",
    "country": "Brazil"
  },
  {
    "airport_code": "JPR",
    "airport_name": "Ji Parana Airport",
    "name": "Ji-Paraná",
    "lat": "-10.8703",
    "lon": "-61.8461",
    "country": "Brazil"
  },
  {
    "airport_code": "JQA",
    "airport_name": "Greenland",
    "name": "Qaarsut",
    "lat": "71.8021",
    "lon": "-42.1772",
    "country": "Greenland"
  },
  
  {
    "airport_code": "JRH",
    "airport_name": "Jorhat Airport",
    "name": "Senchoa Gaon",
    "lat": "26.7286",
    "lon": "94.1778",
    "country": "India"
  },
  {
    "airport_code": "JRO",
    "airport_name": "Kilimanjaro International Airport",
    "name": "Sanya",
    "lat": "-3.4278",
    "lon": "37.0714",
    "country": "Tanzania"
  },
  {
    "airport_code": "JSA",
    "airport_name": "Jaisalmer Airport",
    "name": "Jaisalmer",
    "lat": "26.8873",
    "lon": "70.8636",
    "country": "India"
  },
  {
    "airport_code": "JSH",
    "airport_name": "Sitia Airport",
    "name": "Seteia",
    "lat": "35.2113",
    "lon": "26.1012",
    "country": "Greece"
  },
  {
    "airport_code": "JSI",
    "airport_name": "Skiathos Airport",
    "name": "Skiathos",
    "lat": "39.1806",
    "lon": "23.5056",
    "country": "Greece"
  },
  {
    "airport_code": "JSR",
    "airport_name": "Jessore Airport",
    "name": "Jessore",
    "lat": "23.1833",
    "lon": "89.1644",
    "country": "Bangladesh"
  },
  {
    "airport_code": "JST",
    "airport_name": "Johnstown Cambria County Airport",
    "name": "Johnstown",
    "lat": "40.3208",
    "lon": "-78.8306",
    "country": "United States"
  },
  
  {
    "airport_code": "JSY",
    "airport_name": "Syros Island Airport",
    "name": "Ano Siros",
    "lat": "37.4236",
    "lon": "24.95",
    "country": "Greece"
  },
  {
    "airport_code": "JTR",
    "airport_name": "Santorini Airport",
    "name": "Emborion",
    "lat": "36.4033",
    "lon": "25.4806",
    "country": "Greece"
  },
  {
    "airport_code": "JTY",
    "airport_name": "Astypalaia Island Airport",
    "name": "Astypalaea",
    "lat": "36.5551",
    "lon": "26.3533",
    "country": "Greece"
  },
  {
    "airport_code": "JUB",
    "airport_name": "Juba Airport",
    "name": "Juba",
    "lat": "4.8722",
    "lon": "31.5931",
    "country": "Sudan"
  },
  {
    "airport_code": "JUJ",
    "airport_name": "Jujuy Airport",
    "name": "Santa Catalina",
    "lat": "-24.3933",
    "lon": "-65.0889",
    "country": "Argentina"
  },
  {
    "airport_code": "JUL",
    "airport_name": "Juliaca Airport",
    "name": "Juliaca",
    "lat": "-15.4642",
    "lon": "-70.1544",
    "country": "Peru"
  },
  {
    "airport_code": "JUM",
    "airport_name": "",
    "name": "Jumla",
    "lat": "40.6152",
    "lon": "-83.7891",
    "country": "Nepal"
  },
  
  {
    "airport_code": "JUZ",
    "airport_name": "Juzhou",
    "name": "Juzhou",
    "lat": "36.8945",
    "lon": "104.166",
    "country": "China"
  },
  {
    "airport_code": "JVA",
    "airport_name": "Toliara",
    "name": "Ankavandra",
    "lat": "-23.3548",
    "lon": "43.6631",
    "country": "Madagascar"
  },
  {
    "airport_code": "JYR",
    "airport_name": "Jiroft",
    "name": "Jiroft",
    "lat": "28.7244",
    "lon": "57.6683",
    "country": "Iran"
  },
  {
    "airport_code": "JYV",
    "airport_name": "Jyvaskyla Airport",
    "name": "Tikkakoski",
    "lat": "62.401",
    "lon": "25.6748",
    "country": "Finland"
  },
  {
    "airport_code": "JZH",
    "airport_name": "Jiu Zhai Huang Long",
    "name": "Song Pan",
    "lat": "32.8369",
    "lon": "103.682",
    "country": "China"
  },
  {
    "airport_code": "KAB",
    "airport_name": "Kariba Airport",
    "name": "Kariba",
    "lat": "-16.5183",
    "lon": "28.8853",
    "country": "Zimbabwe"
  },
  {
    "airport_code": "KAC",
    "airport_name": "Kamishly Airport",
    "name": "Al Qamishli",
    "lat": "37.0333",
    "lon": "41.0833",
    "country": "Syria"
  },
  {
    "airport_code": "KAD",
    "airport_name": "Kaduna Airport",
    "name": "Afaka",
    "lat": "10.695",
    "lon": "7.3194",
    "country": "Nigeria"
  },
  {
    "airport_code": "KAJ",
    "airport_name": "Kajaani Airport",
    "name": "Paltaniemi",
    "lat": "64.2845",
    "lon": "27.6802",
    "country": "Finland"
  },
  {
    "airport_code": "KAL",
    "airport_name": "Kaltag",
    "name": "Kaltag",
    "lat": "64.3248",
    "lon": "-158.725",
    "country": "United States"
  },
  
  {
    "airport_code": "KAO",
    "airport_name": "Kuusamo Airport",
    "name": "Kuusamo",
    "lat": "65.9941",
    "lon": "29.2214",
    "country": "Finland"
  },
  {
    "airport_code": "KAT",
    "airport_name": "Kaitaia Aerodrome",
    "name": "Kaitaia",
    "lat": "-35.0714",
    "lon": "173.277",
    "country": "New Zealand"
  },
  {
    "airport_code": "KAW",
    "airport_name": "Kawthaung Airport",
    "name": "Kawthaung",
    "lat": "10.0472",
    "lon": "98.5408",
    "country": "Myanmar"
  },
  {
    "airport_code": "KAX",
    "airport_name": "Kalbarri",
    "name": "Kalbarri",
    "lat": "-27.8667",
    "lon": "114.133",
    "country": "Australia"
  },
  {
    "airport_code": "KBC",
    "airport_name": "Birch Creek Airport",
    "name": "Birch Creek",
    "lat": "66.2667",
    "lon": "-145.8",
    "country": "United States"
  },
  {
    "airport_code": "KBL",
    "airport_name": "Kabul International Airport",
    "name": "Kabul",
    "lat": "34.5642",
    "lon": "69.2094",
    "country": "Afghanistan"
  },
  {
    "airport_code": "KBP",
    "airport_name": "Borispol Airport",
    "name": "Kiev",
    "lat": "50.3405",
    "lon": "30.9025",
    "country": "Ukraine"
  },
  {
    "airport_code": "KBR",
    "airport_name": "Sultan Ismail Petra Airport",
    "name": "Kota Baharu",
    "lat": "6.1683",
    "lon": "102.293",
    "country": "Malaysia"
  },
  {
    "airport_code": "KBV",
    "airport_name": "Thailand",
    "name": "Krabi",
    "lat": "7.98237",
    "lon": "98.8406",
    "country": "Thailand"
  },
  {
    "airport_code": "KCA",
    "airport_name": "Kuqa",
    "name": "Kuqa",
    "lat": "41.5667",
    "lon": "82.7333",
    "country": "China"
  },
  {
    "airport_code": "KCC",
    "airport_name": "Alaska",
    "name": "Coffman Cove",
    "lat": "56.014",
    "lon": "-132.826",
    "country": "United States"
  },
  {
    "airport_code": "KCF",
    "airport_name": "Pakistan",
    "name": "Kadanwari",
    "lat": "30.4419",
    "lon": "69.3597",
    "country": "Pakistan"
  },
  {
    "airport_code": "KCG",
    "airport_name": "Chignik Fisheries Airport",
    "name": "Chignik Lagoon",
    "lat": "56.3173",
    "lon": "-158.596",
    "country": "United States"
  },
  {
    "airport_code": "KCH",
    "airport_name": "Kuching Airport",
    "name": "Kuching",
    "lat": "1.485",
    "lon": "110.342",
    "country": "Malaysia"
  },
  {
    "airport_code": "KCL",
    "airport_name": "Chignik Lagoon Airport",
    "name": "Chignik Lagoon",
    "lat": "56.3065",
    "lon": "-158.537",
    "country": "United States"
  },
  {
    "airport_code": "KCM",
    "airport_name": "Kahramanmaras Airport",
    "name": "Kahramanmaraş",
    "lat": "37.5907",
    "lon": "36.9414",
    "country": "Turkey"
  },
  {
    "airport_code": "KCQ",
    "airport_name": "Chignik Lake Airport",
    "name": "Chignik",
    "lat": "56.3119",
    "lon": "-158.362",
    "country": "United States"
  },
  {
    "airport_code": "KCZ",
    "airport_name": "Kochi Airport",
    "name": "Nankoku-shi",
    "lat": "33.5468",
    "lon": "133.672",
    "country": "Japan"
  },
  {
    "airport_code": "KDH",
    "airport_name": "Kandahar International Airport",
    "name": "Alaqadari Daman",
    "lat": "31.5069",
    "lon": "65.8475",
    "country": "Afghanistan"
  },
  {
    "airport_code": "KDI",
    "airport_name": "Wolter Monginsidi Airport",
    "name": "Kendari",
    "lat": "-4.0811",
    "lon": "122.417",
    "country": "Indonesia"
  },
  {
    "airport_code": "KDL",
    "airport_name": "Kardla East Airport",
    "name": "Kerdlya",
    "lat": "59.0013",
    "lon": "22.8181",
    "country": "Estonia"
  },
  {
    "airport_code": "KDM",
    "airport_name": "Kaadedhdhoo",
    "name": "Kaadedhdhoo",
    "lat": "6.56889",
    "lon": "-7.71056",
    "country": "Maldives"
  },
  {
    "airport_code": "KDO",
    "airport_name": "Kudadu",
    "name": "Kadhdhoo",
    "lat": "5.22745",
    "lon": "73.0989",
    "country": "Maldives"
  },
  {
    "airport_code": "KDU",
    "airport_name": "Skardu Airport",
    "name": "Skardu",
    "lat": "35.3",
    "lon": "75.6333",
    "country": "Pakistan"
  },
  {
    "airport_code": "KDV",
    "airport_name": "Kandavu Airport",
    "name": "Kandavu",
    "lat": "-19.05",
    "lon": "178.217",
    "country": "Fiji"
  },
  {
    "airport_code": "KEB",
    "airport_name": "Nanwalek",
    "name": "Nanwalek",
    "lat": "41.0833",
    "lon": "-92.4583",
    "country": "United States"
  },
  {
    "airport_code": "KEF",
    "airport_name": "Keflavik International",
    "name": "Reykjavik",
    "lat": "63.9853",
    "lon": "-22.6042",
    "country": "Iceland"
  },
  {
    "airport_code": "KEJ",
    "airport_name": "Kemerovo Airport",
    "name": "Kemerovo",
    "lat": "55.3227",
    "lon": "86.0229",
    "country": "Russia"
  },
  {
    "airport_code": "KEK",
    "airport_name": "Ekwok",
    "name": "Ekwok",
    "lat": "59.3516",
    "lon": "-157.48",
    "country": "United States"
  },
  {
    "airport_code": "KEM",
    "airport_name": "Kemi Airport",
    "name": "Kemi",
    "lat": "65.7786",
    "lon": "24.5814",
    "country": "Finland"
  },
  {
    "airport_code": "KEP",
    "airport_name": "",
    "name": "Nepalganj",
    "lat": "28",
    "lon": "81.6333",
    "country": "Nepal"
  },
  {
    "airport_code": "KER",
    "airport_name": "Kerman Airport",
    "name": "Kerman",
    "lat": "30.2633",
    "lon": "56.9583",
    "country": "Iran"
  },
  {
    "airport_code": "KET",
    "airport_name": "Kengtung Airport",
    "name": "Keng Tung",
    "lat": "21.3014",
    "lon": "99.6378",
    "country": "Myanmar"
  },
  {
    "airport_code": "KEW",
    "airport_name": "",
    "name": "Keewaywin",
    "lat": "62.3587",
    "lon": "-96.5821",
    "country": "Canada"
  },
  {
    "airport_code": "KFA",
    "airport_name": "Kiffa Airport",
    "name": "Kiffa",
    "lat": "16.5889",
    "lon": "-11.4053",
    "country": "Mauritania"
  },
  {
    "airport_code": "KFP",
    "airport_name": "",
    "name": "False Pass",
    "lat": "54.85",
    "lon": "-163.417",
    "country": "United States"
  },
  {
    "airport_code": "KGA",
    "airport_name": "Kananga Airport",
    "name": "Kananga",
    "lat": "-5.9",
    "lon": "22.4706",
    "country": "Congo"
  },
  {
    "airport_code": "KGC",
    "airport_name": "Kingscote Airport",
    "name": "Kingscote",
    "lat": "-35.7158",
    "lon": "137.521",
    "country": "Australia"
  },
  {
    "airport_code": "KGD",
    "airport_name": "Kaliningradskaya Oblast",
    "name": "Kaliningrad",
    "lat": "54.8056",
    "lon": "21.3394",
    "country": "Russia"
  },
  {
    "airport_code": "KGE",
    "airport_name": "Kagau",
    "name": "Kagau",
    "lat": "5.88333",
    "lon": "116.75",
    "country": "Solomon Islands"
  },
  {
    "airport_code": "KGF",
    "airport_name": "Karaganda Airport",
    "name": "Qaraghandy",
    "lat": "49.6671",
    "lon": "73.3303",
    "country": "Kazakhstan"
  },
  {
    "airport_code": "KGI",
    "airport_name": "Kalgoorlie Bolder Airport",
    "name": "Kalgoorlie",
    "lat": "-30.7896",
    "lon": "121.461",
    "country": "Australia"
  },
  {
    "airport_code": "KGK",
    "airport_name": "Koliganek Airport",
    "name": "New Koliganek",
    "lat": "59.7266",
    "lon": "-157.26",
    "country": "United States"
  },
  {
    "airport_code": "KGL",
    "airport_name": "Kigali Airport",
    "name": "Kigali",
    "lat": "-1.9678",
    "lon": "30.14",
    "country": "Rwanda"
  },
  {
    "airport_code": "KGP",
    "airport_name": "Kogalym International",
    "name": "Kogalym",
    "lat": "62.1906",
    "lon": "74.5339",
    "country": "Russian Federation"
  },
  {
    "airport_code": "KGS",
    "airport_name": "Kos Airport",
    "name": "Antimacheia",
    "lat": "36.7956",
    "lon": "27.0917",
    "country": "Greece"
  },
  {
    "airport_code": "KGX",
    "airport_name": "Alaska",
    "name": "Grayling",
    "lat": "62.9053",
    "lon": "-160.067",
    "country": "United States"
  },
  {
    "airport_code": "KHG",
    "airport_name": "Kashi Airport",
    "name": "Kashi",
    "lat": "39.5415",
    "lon": "76.0176",
    "country": "China"
  },
  {
    "airport_code": "KHH",
    "airport_name": "Kaohsiung International Airport",
    "name": "Kaohsiung City",
    "lat": "22.5698",
    "lon": "120.345",
    "country": "Taiwan"
  },
  {
    "airport_code": "KHI",
    "airport_name": "Karachi Civil Airport",
    "name": "Karachi",
    "lat": "24.8984",
    "lon": "67.1518",
    "country": "Pakistan"
  },
  {
    "airport_code": "KHM",
    "airport_name": "",
    "name": "Khamti",
    "lat": "11.9848",
    "lon": "104.984",
    "country": "Myanmar"
  },
  {
    "airport_code": "KHN",
    "airport_name": "Nanchang New Airport",
    "name": "Nanchang",
    "lat": "28.6316",
    "lon": "115.931",
    "country": "China"
  },
  {
    "airport_code": "KHS",
    "airport_name": "Khasab Airport",
    "name": "Khasab",
    "lat": "26.1733",
    "lon": "56.2403",
    "country": "Oman"
  },
  {
    "airport_code": "KHV",
    "airport_name": "Khabarovsk Northeast Airport",
    "name": "Khabarovsk",
    "lat": "48.5241",
    "lon": "135.171",
    "country": "Russia"
  },
  {
    "airport_code": "KHY",
    "airport_name": "Iran",
    "name": "Khoy",
    "lat": "38.5556",
    "lon": "44.9958",
    "country": "Iran"
  },
  {
    "airport_code": "KHZ",
    "airport_name": "French Polynesia",
    "name": "Kauehi",
    "lat": "-17.6902",
    "lon": "-149.376",
    "country": "French Polynesia"
  },
  {
    "airport_code": "KID",
    "airport_name": "Kristianstad Airport",
    "name": "Tollarp",
    "lat": "55.9241",
    "lon": "14.0819",
    "country": "Sweden"
  },
  {
    "airport_code": "KIF",
    "airport_name": "Kingfisher Lake Airport",
    "name": "Casummit Lake",
    "lat": "53.0308",
    "lon": "-89.8335",
    "country": "Canada"
  },
  {
    "airport_code": "KIH",
    "airport_name": "Kish Island Airport",
    "name": "Bandar Abbas",
    "lat": "26.5267",
    "lon": "53.9817",
    "country": "Iran"
  },
  {
    "airport_code": "KIJ",
    "airport_name": "Niigata Airport",
    "name": "Niigata-shi",
    "lat": "37.9553",
    "lon": "139.113",
    "country": "Japan"
  },
  {
    "airport_code": "KIK",
    "airport_name": "Kirkuk Airport",
    "name": "Kirkuk",
    "lat": "35.4681",
    "lon": "44.3536",
    "country": "Iraq"
  },
  {
    "airport_code": "KIM",
    "airport_name": "B J Vorster Airport",
    "name": "Kimberley",
    "lat": "-28.8014",
    "lon": "24.7639",
    "country": "South Africa"
  },
  {
    "airport_code": "KIN",
    "airport_name": "Norman Manley",
    "name": "Kingston",
    "lat": "17.9305",
    "lon": "-76.7898",
    "country": "Jamaica"
  },
  {
    "airport_code": "KIR",
    "airport_name": "Kerry County Airport",
    "name": "Farranfore",
    "lat": "52.1767",
    "lon": "-9.5333",
    "country": "Ireland"
  },
  {
    "airport_code": "KIS",
    "airport_name": "Kisumu Airport",
    "name": "Kisumu",
    "lat": "-0.0861",
    "lon": "34.7278",
    "country": "Kenya"
  },
  {
    "airport_code": "KIT",
    "airport_name": "Kithira Airport",
    "name": "Potamos Kythiron",
    "lat": "36.261",
    "lon": "22.9993",
    "country": "Greece"
  },
  {
    "airport_code": "KIV",
    "airport_name": "Kishinev Southeast Airport",
    "name": "Chisinau",
    "lat": "46.9296",
    "lon": "28.9389",
    "country": "Moldova"
  },
  {
    "airport_code": "KIX",
    "airport_name": "Kansai International Airport",
    "name": "Tajiri-cho",
    "lat": "34.4295",
    "lon": "135.244",
    "country": "Japan"
  },
  {
    "airport_code": "KJA",
    "airport_name": "Yelovaya Airport",
    "name": "Kansk",
    "lat": "56.1688",
    "lon": "92.4987",
    "country": "Russia"
  },
  {
    "airport_code": "KKA",
    "airport_name": "Koyuk",
    "name": "Koyuk",
    "lat": "64.9311",
    "lon": "-161.16",
    "country": "United States"
  },
  
  {
    "airport_code": "KKC",
    "airport_name": "Khon Kaen Airport",
    "name": "Khon Kaen",
    "lat": "16.465",
    "lon": "102.791",
    "country": "Thailand"
  },
  {
    "airport_code": "KKD",
    "airport_name": "Northern",
    "name": "Kokoda",
    "lat": "-8.94828",
    "lon": "148.314",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "KKE",
    "airport_name": "Bay of Islands Airport",
    "name": "Kerikeri",
    "lat": "-35.2584",
    "lon": "173.908",
    "country": "New Zealand"
  },
  {
    "airport_code": "KKH",
    "airport_name": "Alaska",
    "name": "Kongiganak",
    "lat": "62.8903",
    "lon": "-149.054",
    "country": "United States"
  },
  
  {
    "airport_code": "KKJ",
    "airport_name": "New Kitakyushu Airport",
    "name": "Kita Kyushu",
    "lat": "33.839",
    "lon": "131.033",
    "country": "Japan"
  },
  {
    "airport_code": "KKN",
    "airport_name": "Kirkenes Hoybuktmoen Airport",
    "name": "Hesseng",
    "lat": "69.726",
    "lon": "29.8958",
    "country": "Norway"
  },
  {
    "airport_code": "KKR",
    "airport_name": "French Polynesia",
    "name": "Kaukura Atoll",
    "lat": "-17.6902",
    "lon": "-149.376",
    "country": "French Polynesia"
  },
  {
    "airport_code": "KKU",
    "airport_name": "Ekuk Airport",
    "name": "Clarks Point",
    "lat": "58.8167",
    "lon": "-158.55",
    "country": "United States"
  },
  {
    "airport_code": "KLG",
    "airport_name": "Kalskag",
    "name": "Kalskag",
    "lat": "61.5382",
    "lon": "-160.314",
    "country": "United States"
  },
  {
    "airport_code": "KLH",
    "airport_name": "Kolhapur Airport",
    "name": "Kolhapur",
    "lat": "16.6667",
    "lon": "74.3333",
    "country": "India"
  },
  {
    "airport_code": "KLL",
    "airport_name": "Levelock",
    "name": "Levelock",
    "lat": "59.1126",
    "lon": "-156.856",
    "country": "United States"
  },
  
  {
    "airport_code": "KLO",
    "airport_name": "Kalib0 Airport",
    "name": "Kalibo",
    "lat": "11.6828",
    "lon": "122.377",
    "country": "Philippines"
  },
  {
    "airport_code": "KLR",
    "airport_name": "Kalmar Airport",
    "name": "Kalmar",
    "lat": "56.678",
    "lon": "16.2856",
    "country": "Sweden"
  },
  {
    "airport_code": "KLU",
    "airport_name": "Klagenfurt Airport",
    "name": "Celovec",
    "lat": "46.6428",
    "lon": "14.3429",
    "country": "Austria"
  },
  {
    "airport_code": "KLV",
    "airport_name": "Karlovy Vary Airport",
    "name": "Carlsbad",
    "lat": "50.2009",
    "lon": "12.9149",
    "country": "Czech Republic"
  },
  {
    "airport_code": "KLW",
    "airport_name": "Klawock Seaplane Base",
    "name": "Klawock",
    "lat": "55.5743",
    "lon": "-133.064",
    "country": "United States"
  },
  {
    "airport_code": "KLX",
    "airport_name": "Kalamata Airport",
    "name": "Kalamae",
    "lat": "37.0678",
    "lon": "22.0267",
    "country": "Greece"
  },
  {
    "airport_code": "KMA",
    "airport_name": "Kerema Airport",
    "name": "Kerema",
    "lat": "-7.9636",
    "lon": "145.77",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "KMC",
    "airport_name": "King Khalid Military",
    "name": "King Khalid Mil. City",
    "lat": "57.1333",
    "lon": "-153.2",
    "country": "United States"
  },
  {
    "airport_code": "KME",
    "airport_name": "Kamembe Airport",
    "name": "Kamembe",
    "lat": "-2.4614",
    "lon": "28.9092",
    "country": "Rwanda"
  },
  {
    "airport_code": "KMG",
    "airport_name": "Wuchia Pa Airport",
    "name": "Kunming",
    "lat": "24.966",
    "lon": "102.733",
    "country": "China"
  },
  {
    "airport_code": "KMI",
    "airport_name": "Miyazaki Airport",
    "name": "Miyazaki-shi",
    "lat": "31.8771",
    "lon": "131.449",
    "country": "Japan"
  },
  {
    "airport_code": "KMJ",
    "airport_name": "Kumamoto Airport",
    "name": "Kikuyo-machi",
    "lat": "32.8346",
    "lon": "130.849",
    "country": "Japan"
  },
  {
    "airport_code": "KMO",
    "airport_name": "Manokotak",
    "name": "Manokotak",
    "lat": "58.9817",
    "lon": "-159.058",
    "country": "United States"
  },
  {
    "airport_code": "KMQ",
    "airport_name": "Komatsu Airport",
    "name": "Komatsu-shi",
    "lat": "36.394",
    "lon": "136.408",
    "country": "Japan"
  },
  {
    "airport_code": "KMS",
    "airport_name": "Kumasi Airport",
    "name": "New Tafo",
    "lat": "6.7172",
    "lon": "-1.5911",
    "country": "Ghana"
  },
  {
    "airport_code": "KMV",
    "airport_name": "Kalemyo Airport",
    "name": "Kalemyo",
    "lat": "23.1869",
    "lon": "94.0556",
    "country": "Myanmar"
  },
  {
    "airport_code": "KMY",
    "airport_name": "Moser Bay",
    "name": "Moser Bay",
    "lat": "57",
    "lon": "-154.167",
    "country": "United States"
  },
  {
    "airport_code": "KND",
    "airport_name": "Kindu Airport",
    "name": "Kindu",
    "lat": "-2.9225",
    "lon": "25.9139",
    "country": "Congo"
  },
  {
    "airport_code": "KNF",
    "airport_name": "",
    "name": "Kings Lynn",
    "lat": "51.3667",
    "lon": "-0.283333",
    "country": "United Kingdom"
  },
  {
    "airport_code": "KNG",
    "airport_name": "West Irian Jaya",
    "name": "Kaimana",
    "lat": "-2.29861",
    "lon": "134.059",
    "country": "Indonesia"
  },
  {
    "airport_code": "KNH",
    "airport_name": "Kinmen County",
    "name": "Kinmen",
    "lat": "24.4583",
    "lon": "118.376",
    "country": "Taiwan"
  },
  {
    "airport_code": "KNK",
    "airport_name": "",
    "name": "Kakhonak",
    "lat": "59.4333",
    "lon": "-154.85",
    "country": "United States"
  },
  {
    "airport_code": "KNQ",
    "airport_name": "",
    "name": "Kone",
    "lat": "-21",
    "lon": "164.675",
    "country": "New Caledonia"
  },
  {
    "airport_code": "KNS",
    "airport_name": "King Island Airport",
    "name": "King Island",
    "lat": "-39.8797",
    "lon": "143.881",
    "country": "Australia"
  },
  {
    "airport_code": "KNU",
    "airport_name": "Kanpur Airport",
    "name": "Kanpur",
    "lat": "26.4414",
    "lon": "80.3656",
    "country": "India"
  },
  {
    "airport_code": "KNW",
    "airport_name": "New Stuyahok",
    "name": "New Stuyahok",
    "lat": "59.4513",
    "lon": "-157.317",
    "country": "United States"
  },
  {
    "airport_code": "KNX",
    "airport_name": "Kununurra Airport",
    "name": "Durack",
    "lat": "-15.7756",
    "lon": "128.715",
    "country": "Australia"
  },
  {
    "airport_code": "KOA",
    "airport_name": "Kailua-Kona International Airport",
    "name": "Kailua Kona",
    "lat": "19.7334",
    "lon": "-156.039",
    "country": "United States"
  },
  {
    "airport_code": "KOC",
    "airport_name": "",
    "name": "Koumac",
    "lat": "32.4981",
    "lon": "-89.8925",
    "country": "New Caledonia"
  },
  {
    "airport_code": "KOE",
    "airport_name": "El Tari Airport",
    "name": "Kupang",
    "lat": "-10.1739",
    "lon": "123.658",
    "country": "Indonesia"
  },
  {
    "airport_code": "KOI",
    "airport_name": "Kirkwall Airport",
    "name": "Kirkwall",
    "lat": "58.9549",
    "lon": "-2.9026",
    "country": "United Kingdom"
  },
  {
    "airport_code": "KOJ",
    "airport_name": "Kagoshima Airport",
    "name": "Kirishima-shi",
    "lat": "31.8",
    "lon": "130.718",
    "country": "Japan"
  },
  {
    "airport_code": "KOK",
    "airport_name": "Kruunupyy Airport",
    "name": "Kruunupyy",
    "lat": "63.7211",
    "lon": "23.1438",
    "country": "Finland"
  },
  {
    "airport_code": "KOP",
    "airport_name": "Nakhon Phanom Airport",
    "name": "Nakhon Phanom",
    "lat": "17.404",
    "lon": "104.771",
    "country": "Thailand"
  },
  {
    "airport_code": "KOT",
    "airport_name": "Kotlik",
    "name": "Kotlik",
    "lat": "63.0328",
    "lon": "-163.554",
    "country": "United States"
  },
  {
    "airport_code": "KOU",
    "airport_name": "",
    "name": "Koulamoutou",
    "lat": "21.3602",
    "lon": "-157.919",
    "country": "Gabon"
  },
  {
    "airport_code": "KOW",
    "airport_name": "Ganzhou Airport",
    "name": "Ganzhou",
    "lat": "25.8224",
    "lon": "114.907",
    "country": "China"
  },
  
  
  {
    "airport_code": "KPB",
    "airport_name": "Point Baker Seaplane Base",
    "name": "Point Baker",
    "lat": "56.3502",
    "lon": "-133.622",
    "country": "United States"
  },
  
  
  {
    "airport_code": "KPO",
    "airport_name": "Pohang Airport",
    "name": "Pohang-Si",
    "lat": "35.9847",
    "lon": "129.419",
    "country": "South Korea"
  },
  
  {
    "airport_code": "KPV",
    "airport_name": "Alaska",
    "name": "Perryville",
    "lat": "55.9122",
    "lon": "-159.154",
    "country": "United States"
  },
  
  {
    "airport_code": "KQA",
    "airport_name": "Akutan Airport",
    "name": "Akutan",
    "lat": "54.1271",
    "lon": "-165.889",
    "country": "United States"
  },
  {
    "airport_code": "KRF",
    "airport_name": "Kramfors Airport",
    "name": "Nyland",
    "lat": "63.0478",
    "lon": "17.7633",
    "country": "Sweden"
  },
  {
    "airport_code": "KRI",
    "airport_name": "Papua New Guinea",
    "name": "Kikori",
    "lat": "-6.65619",
    "lon": "145.859",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "KRK",
    "airport_name": "Balice Airport",
    "name": "Zabierzów",
    "lat": "50.0741",
    "lon": "19.8011",
    "country": "Poland"
  },
  {
    "airport_code": "KRL",
    "airport_name": "Korla",
    "name": "Korla",
    "lat": "41.7333",
    "lon": "86.15",
    "country": "China"
  },
  {
    "airport_code": "KRN",
    "airport_name": "Kiruna Airport",
    "name": "Kiruna",
    "lat": "67.8239",
    "lon": "20.3389",
    "country": "Sweden"
  },
  {
    "airport_code": "KRP",
    "airport_name": "Karup Airport",
    "name": "Kårup",
    "lat": "56.3028",
    "lon": "9.1141",
    "country": "Denmark"
  },
  {
    "airport_code": "KRR",
    "airport_name": "Krasnodar-Pashovskiy Airport",
    "name": "Krasnodar",
    "lat": "45.0441",
    "lon": "39.1442",
    "country": "Russia"
  },
  {
    "airport_code": "KRS",
    "airport_name": "Kristiansand Airport",
    "name": "Kjevic",
    "lat": "58.1988",
    "lon": "8.07792",
    "country": "Norway"
  },
  {
    "airport_code": "KRT",
    "airport_name": "Khartoum Airport",
    "name": "Khartoum",
    "lat": "15.5917",
    "lon": "32.5533",
    "country": "Sudan"
  },
  {
    "airport_code": "KRY",
    "airport_name": "Karamay Airport",
    "name": "Karamay",
    "lat": "45.5726",
    "lon": "84.8891",
    "country": "China"
  },
  {
    "airport_code": "KSA",
    "airport_name": "Kosrae Island Airport",
    "name": "Tofol",
    "lat": "5.3183",
    "lon": "162.97",
    "country": "Federated States of Micronesia"
  },
  {
    "airport_code": "KSC",
    "airport_name": "Barca Airport",
    "name": "Kosice",
    "lat": "48.6548",
    "lon": "21.2487",
    "country": "Slovakia"
  },
  {
    "airport_code": "KSD",
    "airport_name": "Karlstad Airport",
    "name": "Karlstad",
    "lat": "59.444",
    "lon": "13.3435",
    "country": "Sweden"
  },
  {
    "airport_code": "KSF",
    "airport_name": "Kassel Calden Airport",
    "name": "Kalden",
    "lat": "51.4066",
    "lon": "9.37722",
    "country": "Germany"
  },
  {
    "airport_code": "KSH",
    "airport_name": "Bakhtaran Airport",
    "name": "Kermanshah",
    "lat": "34.3489",
    "lon": "47.1572",
    "country": "Iran"
  },
  {
    "airport_code": "KSJ",
    "airport_name": "Kasos Airport",
    "name": "St. Marina",
    "lat": "35.3903",
    "lon": "26.9371",
    "country": "Greece"
  },
  {
    "airport_code": "KSL",
    "airport_name": "Kassala Airport",
    "name": "Kassala",
    "lat": "15.3833",
    "lon": "36.3236",
    "country": "Sudan"
  },
  {
    "airport_code": "KSM",
    "airport_name": "Alaska",
    "name": "Saint Marys",
    "lat": "62.0503",
    "lon": "-163.179",
    "country": "United States"
  },
  {
    "airport_code": "KSN",
    "airport_name": "Kustanay Airport",
    "name": "Qostanay",
    "lat": "53.2297",
    "lon": "63.6038",
    "country": "Kazakhstan"
  },
  {
    "airport_code": "KSO",
    "airport_name": "Kastoria Airport",
    "name": "Argos Orestiko",
    "lat": "40.4508",
    "lon": "21.2733",
    "country": "Greece"
  },
  {
    "airport_code": "KSQ",
    "airport_name": "Karshi South Airport",
    "name": "Qarshi",
    "lat": "38.8042",
    "lon": "65.7717",
    "country": "Uzbekistan"
  },
  {
    "airport_code": "KSU",
    "airport_name": "Kristiansund Kvernberget Airport",
    "name": "Kristiansund Nord",
    "lat": "63.1137",
    "lon": "7.82585",
    "country": "Norway"
  },
  {
    "airport_code": "KSY",
    "airport_name": "Kars (abandoned) Airport",
    "name": "Kars",
    "lat": "40.5828",
    "lon": "43.0675",
    "country": "Turkey"
  },
  {
    "airport_code": "KSZ",
    "airport_name": "Kotlas Southeast Airport",
    "name": "Vel'sk",
    "lat": "61.2165",
    "lon": "46.6936",
    "country": "Russia"
  },
  {
    "airport_code": "KTA",
    "airport_name": "Karratha Airport",
    "name": "Karratha",
    "lat": "-20.7108",
    "lon": "116.776",
    "country": "Australia"
  },
  {
    "airport_code": "KTB",
    "airport_name": "Alaska",
    "name": "Thorne Bay",
    "lat": "55.6833",
    "lon": "-132.529",
    "country": "United States"
  },
  
  {
    "airport_code": "KTM",
    "airport_name": "Tribhuvan International Airport",
    "name": "Kathmandu",
    "lat": "27.6969",
    "lon": "85.3594",
    "country": "Nepal"
  },
  {
    "airport_code": "KTN",
    "airport_name": "Ketchikan International Airport",
    "name": "Ketchikan",
    "lat": "55.354",
    "lon": "-131.706",
    "country": "United States"
  },
  {
    "airport_code": "KTS",
    "airport_name": "",
    "name": "Teller Mission",
    "lat": "65.3333",
    "lon": "-166.483",
    "country": "United States"
  },
  {
    "airport_code": "KTT",
    "airport_name": "Kittila Airport",
    "name": "Kittila",
    "lat": "67.695",
    "lon": "24.8508",
    "country": "Finland"
  },
  {
    "airport_code": "KTW",
    "airport_name": "Zendek Airport",
    "name": "Ożarowice",
    "lat": "50.4819",
    "lon": "19.0772",
    "country": "Poland"
  },
  {
    "airport_code": "KUA",
    "airport_name": "Kuantan Airport",
    "name": "Gambang",
    "lat": "3.7747",
    "lon": "103.21",
    "country": "Malaysia"
  },
  {
    "airport_code": "KUD",
    "airport_name": "",
    "name": "Kudat",
    "lat": "33.0758",
    "lon": "75.2973",
    "country": "Malaysia"
  },
  {
    "airport_code": "KUF",
    "airport_name": "Kurumoch Airport",
    "name": "Syzran'",
    "lat": "53.5067",
    "lon": "50.166",
    "country": "Russia"
  },
  {
    "airport_code": "KUG",
    "airport_name": "Australia",
    "name": "Kubin Island",
    "lat": "-31.875",
    "lon": "136.081",
    "country": "Australia"
  },
  {
    "airport_code": "KUH",
    "airport_name": "Kushiro Airport",
    "name": "Kushiro",
    "lat": "43.043",
    "lon": "144.194",
    "country": "Japan"
  },
  {
    "airport_code": "KUK",
    "airport_name": "Kasigluk",
    "name": "Kasigluk",
    "lat": "60.8953",
    "lon": "-162.517",
    "country": "United States"
  },
  {
    "airport_code": "KUL",
    "airport_name": "Kuala Lumpur International Airport",
    "name": "Sepang",
    "lat": "2.77859",
    "lon": "101.689",
    "country": "Malaysia"
  },
  {
    "airport_code": "KUN",
    "airport_name": "Karmilava Airport",
    "name": "Kovno",
    "lat": "54.9863",
    "lon": "24.0512",
    "country": "Lithuania"
  },
  {
    "airport_code": "KUO",
    "airport_name": "Kuopio Airport",
    "name": "Toivala",
    "lat": "63.0071",
    "lon": "27.7979",
    "country": "Finland"
  },
  {
    "airport_code": "KUS",
    "airport_name": "Kulusuk Airport",
    "name": "Kulusuk",
    "lat": "65.5667",
    "lon": "-37.1167",
    "country": "Greenland"
  },
  {
    "airport_code": "KUT",
    "airport_name": "Kopitnari",
    "name": "Kutaisi",
    "lat": "32.507",
    "lon": "45.8217",
    "country": "Georgia"
  },
  
  
  {
    "airport_code": "KVA",
    "airport_name": "Chrisoupolis Airport",
    "name": "Khrysoupolis",
    "lat": "40.915",
    "lon": "24.6203",
    "country": "Greece"
  },
  {
    "airport_code": "KVB",
    "airport_name": "Skovde Airport",
    "name": "Väring",
    "lat": "58.4529",
    "lon": "13.9643",
    "country": "Sweden"
  },
  {
    "airport_code": "KVC",
    "airport_name": "",
    "name": "King Cove",
    "lat": "55.0667",
    "lon": "-162.317",
    "country": "United States"
  },
  {
    "airport_code": "KVD",
    "airport_name": "Elisavetpol",
    "name": "Gyandzha",
    "lat": "40.6844",
    "lon": "46.3488",
    "country": "Azerbaijan"
  },
  {
    "airport_code": "KVG",
    "airport_name": "Kavieng Airport",
    "name": "Kavieng",
    "lat": "-2.5806",
    "lon": "150.807",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "KVK",
    "airport_name": "Kirovsk Airport",
    "name": "Kirovsk",
    "lat": "67.5757",
    "lon": "33.5691",
    "country": "Russia"
  },
  {
    "airport_code": "KVL",
    "airport_name": "Kivalina",
    "name": "Kivalina",
    "lat": "67.7333",
    "lon": "-164.667",
    "country": "United States"
  },
  {
    "airport_code": "KVR",
    "airport_name": "Carpiquet Airport",
    "name": "Carpiquet",
    "lat": "49.1825",
    "lon": "-0.45906",
    "country": "France"
  },
  {
    "airport_code": "KWA",
    "airport_name": "Bucholz Army Air Field",
    "name": "Kwajalein",
    "lat": "8.7147",
    "lon": "167.727",
    "country": "Marshall Islands"
  },
  {
    "airport_code": "KWE",
    "airport_name": "Guizhou",
    "name": "Guiyang",
    "lat": "26.9015",
    "lon": "106.585",
    "country": "China"
  },
  {
    "airport_code": "KWI",
    "airport_name": "Kuwait International Airport",
    "name": "Kuwait City",
    "lat": "29.2442",
    "lon": "47.9748",
    "country": "Kuwait"
  },
  {
    "airport_code": "KWJ",
    "airport_name": "Gwangju Airport",
    "name": "Gwangju",
    "lat": "35.125",
    "lon": "126.811",
    "country": "South Korea"
  },
  {
    "airport_code": "KWK",
    "airport_name": "Kwigillingok",
    "name": "Kwigillingok",
    "lat": "59.9077",
    "lon": "-163.026",
    "country": "United States"
  },
  {
    "airport_code": "KWL",
    "airport_name": "Li Chia Tsun Airport",
    "name": "Guilin",
    "lat": "25.1921",
    "lon": "110.305",
    "country": "China"
  },
  {
    "airport_code": "KWM",
    "airport_name": "Kowanyama",
    "name": "Kowanyama",
    "lat": "-15.4878",
    "lon": "141.76",
    "country": "Australia"
  },
  {
    "airport_code": "KWN",
    "airport_name": "Quinhagak",
    "name": "Quinhagak",
    "lat": "59.7511",
    "lon": "-161.908",
    "country": "United States"
  },
  
  {
    "airport_code": "KWT",
    "airport_name": "Kwethluk Airport",
    "name": "Kwethluk",
    "lat": "60.8",
    "lon": "-161.45",
    "country": "United States"
  },
  {
    "airport_code": "KWZ",
    "airport_name": "Kolwezi Airport",
    "name": "Kolwezi",
    "lat": "-10.7667",
    "lon": "25.5069",
    "country": "Congo"
  },
  {
    "airport_code": "KXA",
    "airport_name": "Kasaan SPB",
    "name": "Kasaan",
    "lat": "55.5",
    "lon": "-132.5",
    "country": "United States"
  },
  {
    "airport_code": "KXF",
    "airport_name": "Koro Island",
    "name": "Koro Island",
    "lat": "-17.3167",
    "lon": "179.383",
    "country": "Fiji"
  },
  {
    "airport_code": "KXK",
    "airport_name": "Komsomolsk South Airport",
    "name": "Komsomol'sk-na-Amure",
    "lat": "50.4029",
    "lon": "136.946",
    "country": "Russia"
  },
  {
    "airport_code": "KXU",
    "airport_name": "Katiu",
    "name": "Katiu",
    "lat": "-16.4333",
    "lon": "-1.36667",
    "country": "French Polynesia"
  },
  {
    "airport_code": "KYA",
    "airport_name": "Konya Airport",
    "name": "Konya",
    "lat": "37.9797",
    "lon": "32.5622",
    "country": "Turkey"
  },
  {
    "airport_code": "KYK",
    "airport_name": "Karluk Airport",
    "name": "Kodiak",
    "lat": "57.5645",
    "lon": "-154.454",
    "country": "United States"
  },
  
  {
    "airport_code": "KYP",
    "airport_name": "Kyaukpyu Airport",
    "name": "Kyaukpyu",
    "lat": "19.4267",
    "lon": "93.5347",
    "country": "Myanmar"
  },
  {
    "airport_code": "KYS",
    "airport_name": "Kayes Airport",
    "name": "Kayes",
    "lat": "14.4319",
    "lon": "-11.4397",
    "country": "Mali"
  },
  {
    "airport_code": "KYU",
    "airport_name": "Koyukuk",
    "name": "Koyukuk",
    "lat": "64.9",
    "lon": "-157.7",
    "country": "United States"
  },
  {
    "airport_code": "KYZ",
    "airport_name": "Tyva",
    "name": "Kyzyl",
    "lat": "51.6636",
    "lon": "94.1494",
    "country": "Russia"
  },
  
  {
    "airport_code": "KZI",
    "airport_name": "Kozani Airport",
    "name": "Kozani",
    "lat": "40.2886",
    "lon": "21.8419",
    "country": "Greece"
  },
  {
    "airport_code": "KZN",
    "airport_name": "Kirbi Airport",
    "name": "Zelenodol'sk",
    "lat": "55.6014",
    "lon": "49.2751",
    "country": "Russia"
  },
  {
    "airport_code": "KZO",
    "airport_name": "Kzyl Orda Airport",
    "name": "Kzyl-Orda",
    "lat": "44.8172",
    "lon": "65.5435",
    "country": "Kazakhstan"
  },
  {
    "airport_code": "KZS",
    "airport_name": "Kastelorizo Airport",
    "name": "Kastelorizo",
    "lat": "36.1355",
    "lon": "29.5754",
    "country": "Greece"
  },
  {
    "airport_code": "LAD",
    "airport_name": "Luanda 4 de Fevereiro Airport",
    "name": "Luanda",
    "lat": "-8.8547",
    "lon": "13.2342",
    "country": "Angola"
  },
  {
    "airport_code": "LAE",
    "airport_name": "Nadzab Airport",
    "name": "Lae",
    "lat": "-6.5672",
    "lon": "146.725",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "LAI",
    "airport_name": "Servel Airport",
    "name": "Lannion",
    "lat": "48.756",
    "lon": "-3.47109",
    "country": "France"
  },
  
  {
    "airport_code": "LAK",
    "airport_name": "Aklavik Airport",
    "name": "Hay River",
    "lat": "68.2332",
    "lon": "-134.96",
    "country": "Canada"
  },
  {
    "airport_code": "LAN",
    "airport_name": "Lansing Capital City Airport",
    "name": "Lansing",
    "lat": "42.7728",
    "lon": "-84.5888",
    "country": "United States"
  },
  {
    "airport_code": "LAO",
    "airport_name": "Laoag International Airport",
    "name": "San Nicolas",
    "lat": "18.1797",
    "lon": "120.529",
    "country": "Philippines"
  },
  {
    "airport_code": "LAP",
    "airport_name": "General Manuel Marquez de Leon International Air",
    "name": "La Paz",
    "lat": "24.0722",
    "lon": "-110.362",
    "country": "Mexico"
  },
  {
    "airport_code": "LAQ",
    "airport_name": "Al Bayda'",
    "name": "Beida",
    "lat": "32.76",
    "lon": "21.7616",
    "country": "Libya"
  },
  {
    "airport_code": "LAR",
    "airport_name": "General Brees Field",
    "name": "Laramie",
    "lat": "37.8527",
    "lon": "-76.517",
    "country": "United States"
  },
  {
    "airport_code": "LAS",
    "airport_name": "Mccarran International Airport",
    "name": "Las Vegas",
    "lat": "36.0806",
    "lon": "-115.143",
    "country": "United States"
  },
  {
    "airport_code": "LAU",
    "airport_name": "Lamu Airport",
    "name": "Lamu",
    "lat": "-2.25",
    "lon": "40.8333",
    "country": "Kenya"
  },
  {
    "airport_code": "LAW",
    "airport_name": "Lawton Municipal Airport",
    "name": "Lawton",
    "lat": "34.573",
    "lon": "-98.4135",
    "country": "United States"
  },
  {
    "airport_code": "LAX",
    "airport_name": "Los Angeles International Airport",
    "name": "Los Angeles",
    "lat": "33.9456",
    "lon": "-118.391",
    "country": "United States"
  },
  {
    "airport_code": "LBA",
    "airport_name": "Leeds Bradford Airport",
    "name": "Leeds",
    "lat": "53.8685",
    "lon": "-1.66123",
    "country": "United Kingdom"
  },
  {
    "airport_code": "LBB",
    "airport_name": "Lubbock International Airport",
    "name": "Lubbock",
    "lat": "33.6566",
    "lon": "-101.821",
    "country": "United States"
  },
  {
    "airport_code": "LBC",
    "airport_name": "Lubeck Airport",
    "name": "Lubeque",
    "lat": "53.8061",
    "lon": "10.7032",
    "country": "Germany"
  },
  {
    "airport_code": "LBD",
    "airport_name": "Khujand",
    "name": "Khudzhand",
    "lat": "40.2833",
    "lon": "69.6167",
    "country": "Tajikistan"
  },
  {
    "airport_code": "LBE",
    "airport_name": "Westmoreland County Airport",
    "name": "Latrobe",
    "lat": "40.2728",
    "lon": "-79.4056",
    "country": "United States"
  },
  {
    "airport_code": "LBF",
    "airport_name": "Lee Bird Field Airport",
    "name": "North Platte",
    "lat": "41.1333",
    "lon": "-100.705",
    "country": "United States"
  },
  {
    "airport_code": "LBJ",
    "airport_name": "Mutiara Airport",
    "name": "Ende",
    "lat": "-8.51667",
    "lon": "119.883",
    "country": "Indonesia"
  },
  {
    "airport_code": "LBL",
    "airport_name": "Liberal Municipal Airport",
    "name": "Liberal",
    "lat": "37.0446",
    "lon": "-100.952",
    "country": "United States"
  },
  {
    "airport_code": "LBP",
    "airport_name": "",
    "name": "Long Banga",
    "lat": "3.18333",
    "lon": "115.45",
    "country": "Malaysia"
  },
  {
    "airport_code": "LBS",
    "airport_name": "Northern",
    "name": "Labasa",
    "lat": "-16.5729",
    "lon": "179.265",
    "country": "Fiji"
  },
  {
    "airport_code": "LBU",
    "airport_name": "Labuan Airport",
    "name": "Victoria",
    "lat": "5.3",
    "lon": "115.249",
    "country": "Malaysia"
  },
  {
    "airport_code": "LBV",
    "airport_name": "Libreville Leon M Ba Airport",
    "name": "Libreville",
    "lat": "0.4592",
    "lon": "9.4153",
    "country": "Gabon"
  },
  {
    "airport_code": "LCA",
    "airport_name": "Larnaca Airport",
    "name": "Larnaca",
    "lat": "34.8789",
    "lon": "33.6303",
    "country": "Cyprus"
  },
  {
    "airport_code": "LCE",
    "airport_name": "Goloson International Airport",
    "name": "La Ceiba",
    "lat": "15.7433",
    "lon": "-86.8528",
    "country": "Honduras"
  },
  {
    "airport_code": "LCG",
    "airport_name": "La Coruna Airport",
    "name": "S Esteban",
    "lat": "43.3026",
    "lon": "-8.37867",
    "country": "Spain"
  },
  {
    "airport_code": "LCH",
    "airport_name": "Lake Charles Regional Airport",
    "name": "Lake Charles",
    "lat": "30.1235",
    "lon": "-93.2198",
    "country": "United States"
  },
  {
    "airport_code": "LCJ",
    "airport_name": "Lodz Lublinek",
    "name": "Lodz",
    "lat": "51.7217",
    "lon": "19.3989",
    "country": "Poland"
  },
  {
    "airport_code": "LCK",
    "airport_name": "Rickenbacker International Airport",
    "name": "Columbus",
    "lat": "39.8176",
    "lon": "-82.936",
    "country": "United States"
  },
  {
    "airport_code": "LCR",
    "airport_name": "La Chorrera Airport",
    "name": "La Chorrera",
    "lat": "-0.73333",
    "lon": "-73.0167",
    "country": "Colombia"
  },
  {
    "airport_code": "LCX",
    "airport_name": "",
    "name": "Longyan",
    "lat": "19.3542",
    "lon": "-99.2925",
    "country": "China"
  },
  {
    "airport_code": "LCY",
    "airport_name": "London City Airport",
    "name": "London",
    "lat": "51.5039",
    "lon": "0.04981",
    "country": "United Kingdom"
  },
  {
    "airport_code": "LDB",
    "airport_name": "Londrina Airport",
    "name": "Londrina",
    "lat": "-23.3297",
    "lon": "-51.1361",
    "country": "Brazil"
  },
  {
    "airport_code": "LDE",
    "airport_name": "Ossun Airport",
    "name": "Juillan",
    "lat": "43.1857",
    "lon": "0.00346",
    "country": "France"
  },
  {
    "airport_code": "LDG",
    "airport_name": "Leshukonskoye Airport",
    "name": "Leshukonskoye",
    "lat": "64.9029",
    "lon": "45.708",
    "country": "Russia"
  },
  {
    "airport_code": "LDH",
    "airport_name": "Lord Howe Island Airport",
    "name": "Lord Howe Island",
    "lat": "-31.5392",
    "lon": "159.08",
    "country": "Australia"
  },
  {
    "airport_code": "LDN",
    "airport_name": "Lamidanda Airport",
    "name": "Lamidanda",
    "lat": "27.3",
    "lon": "86.75",
    "country": "Nepal"
  },
  {
    "airport_code": "LDU",
    "airport_name": "Lahad Datu Airport",
    "name": "Lahad Datu",
    "lat": "5.0319",
    "lon": "118.324",
    "country": "Malaysia"
  },
  {
    "airport_code": "LDV",
    "airport_name": "Landivisiau Airport",
    "name": "Landivisiau",
    "lat": "48.5303",
    "lon": "-4.1508",
    "country": "France"
  },
  {
    "airport_code": "LDY",
    "airport_name": "City of Derry Airport",
    "name": "Londonderry",
    "lat": "55.0402",
    "lon": "-7.156",
    "country": "United Kingdom"
  },
  {
    "airport_code": "LEA",
    "airport_name": "Learmonth Airport",
    "name": "Learmonth",
    "lat": "-22.233",
    "lon": "114.092",
    "country": "Australia"
  },
  {
    "airport_code": "LEB",
    "airport_name": "Lebanon Municipal Airport",
    "name": "West Lebanon",
    "lat": "43.6249",
    "lon": "-72.3087",
    "country": "United States"
  },
  {
    "airport_code": "LED",
    "airport_name": "Pulkuvo 2 Airport",
    "name": "St. Petersburg",
    "lat": "59.9667",
    "lon": "30.3",
    "country": "Russia"
  },
  {
    "airport_code": "LEH",
    "airport_name": "",
    "name": "Le Havre",
    "lat": "40.3897",
    "lon": "-111.847",
    "country": "France"
  },
  {
    "airport_code": "LEI",
    "airport_name": "Almeria Airport",
    "name": "Almeria",
    "lat": "36.8459",
    "lon": "-2.37221",
    "country": "Spain"
  },
  {
    "airport_code": "LEJ",
    "airport_name": "Leipzig-Halle Airport",
    "name": "Schkeuditz",
    "lat": "51.4197",
    "lon": "12.2201",
    "country": "Germany"
  },
  {
    "airport_code": "LEN",
    "airport_name": "Aeropuero de Bajio",
    "name": "Leon",
    "lat": "34.1697",
    "lon": "77.53",
    "country": "Spain"
  },
  {
    "airport_code": "LER",
    "airport_name": "Leinster Airport",
    "name": "Sir Samuel",
    "lat": "-27.873",
    "lon": "120.61",
    "country": "Australia"
  },
  {
    "airport_code": "LET",
    "airport_name": "Gen. A.V. Cobo",
    "name": "Leticia",
    "lat": "-4.19332",
    "lon": "-69.9402",
    "country": "Colombia"
  },
  {
    "airport_code": "LEV",
    "airport_name": "",
    "name": "Bureta",
    "lat": "37.2127",
    "lon": "-83.6199",
    "country": "Fiji"
  },
  {
    "airport_code": "LEX",
    "airport_name": "Blue Grass Field",
    "name": "Lexington",
    "lat": "38.0384",
    "lon": "-84.5989",
    "country": "United States"
  },
  {
    "airport_code": "LFM",
    "airport_name": "Lamerd",
    "name": "Lamerd",
    "lat": "27.3739",
    "lon": "53.1911",
    "country": "Iran"
  },
  {
    "airport_code": "LFT",
    "airport_name": "Lafayette Regional Airport",
    "name": "Lafayette",
    "lat": "30.2084",
    "lon": "-91.9935",
    "country": "United States"
  },
  {
    "airport_code": "LFW",
    "airport_name": "Lome Tokoin Airport",
    "name": "Lome",
    "lat": "6.1625",
    "lon": "1.255",
    "country": "Togo"
  },
  {
    "airport_code": "LGA",
    "airport_name": "LaGuardia Airport",
    "name": "Flushing",
    "lat": "40.7731",
    "lon": "-73.8756",
    "country": "United States"
  },
  {
    "airport_code": "LGB",
    "airport_name": "Long Beach Daugherty Field Airport",
    "name": "Long Beach",
    "lat": "33.8186",
    "lon": "-118.144",
    "country": "United States"
  },
  {
    "airport_code": "LGG",
    "airport_name": "Bierset Airport",
    "name": "Velroux",
    "lat": "50.64",
    "lon": "5.44035",
    "country": "Belgium"
  },
  {
    "airport_code": "LGI",
    "airport_name": "Deadmans Cay Airport",
    "name": "Deadmans Cay",
    "lat": "23.1794",
    "lon": "-75.0906",
    "country": "Bahamas"
  },
  {
    "airport_code": "LGK",
    "airport_name": "Langkawi International Airport",
    "name": "Kuah",
    "lat": "6.3364",
    "lon": "99.7353",
    "country": "Malaysia"
  },
  {
    "airport_code": "LGL",
    "airport_name": "Long Lellang",
    "name": "Long Lellang",
    "lat": "3.41667",
    "lon": "115.15",
    "country": "Malaysia"
  },
  {
    "airport_code": "LGP",
    "airport_name": "Legazpi Airport",
    "name": "Daraga",
    "lat": "13.1578",
    "lon": "123.731",
    "country": "Philippines"
  },
  {
    "airport_code": "LGQ",
    "airport_name": "Lago Agrio Airport",
    "name": "Lago Agrio",
    "lat": "0.1",
    "lon": "-76.8833",
    "country": "Ecuador"
  },
  {
    "airport_code": "LGW",
    "airport_name": "London Gatwick Airport",
    "name": "Horley",
    "lat": "51.1568",
    "lon": "-0.16988",
    "country": "United Kingdom"
  },
  {
    "airport_code": "LHE",
    "airport_name": "Lahore Airport",
    "name": "Lahore",
    "lat": "31.521",
    "lon": "74.3933",
    "country": "Pakistan"
  },
  {
    "airport_code": "LHG",
    "airport_name": "New South Wales",
    "name": "Lightning Ridge",
    "lat": "-29.4531",
    "lon": "147.981",
    "country": "Australia"
  },
  {
    "airport_code": "LHR",
    "airport_name": "London Heathrow Airport",
    "name": "Hounslow",
    "lat": "51.4703",
    "lon": "-0.45342",
    "country": "United Kingdom"
  },
  {
    "airport_code": "LHW",
    "airport_name": "Lanzhou Airport",
    "name": "Lanzhou",
    "lat": "36.0167",
    "lon": "103.75",
    "country": "China"
  },
  {
    "airport_code": "LIF",
    "airport_name": "Loyalty Islands Airport",
    "name": "Wé",
    "lat": "-20.9314",
    "lon": "167.229",
    "country": "New Caledonia"
  },
  {
    "airport_code": "LIG",
    "airport_name": "Bellegarde Airport",
    "name": "Limoges",
    "lat": "45.8615",
    "lon": "1.1779",
    "country": "France"
  },
  {
    "airport_code": "LIH",
    "airport_name": "Lihue Airport",
    "name": "Lihue",
    "lat": "21.9782",
    "lon": "-159.351",
    "country": "United States"
  },
  {
    "airport_code": "LIL",
    "airport_name": "Lesquin Airport",
    "name": "Fretin",
    "lat": "50.5713",
    "lon": "3.1072",
    "country": "France"
  },
  {
    "airport_code": "LIM",
    "airport_name": "Jorge Chavez Airport",
    "name": "Ventanilla",
    "lat": "-12.0228",
    "lon": "-77.1081",
    "country": "Peru"
  },
  {
    "airport_code": "LIN",
    "airport_name": "Linate Airport",
    "name": "Peschiera Borromeo",
    "lat": "45.4558",
    "lon": "9.27269",
    "country": "Italy"
  },
  
  {
    "airport_code": "LIR",
    "airport_name": "Tomas Guardia International Airport",
    "name": "Liberia",
    "lat": "10.5922",
    "lon": "-85.5439",
    "country": "Costa Rica"
  },
  {
    "airport_code": "LIS",
    "airport_name": "Lisbon Airport",
    "name": "Lisbon",
    "lat": "38.7701",
    "lon": "-9.13775",
    "country": "Portugal"
  },
  {
    "airport_code": "LIT",
    "airport_name": "Adams Field Airport",
    "name": "Little Rock",
    "lat": "34.7278",
    "lon": "-92.219",
    "country": "United States"
  },
  {
    "airport_code": "LIW",
    "airport_name": "Loikaw Airport",
    "name": "Loi-kaw",
    "lat": "19.6886",
    "lon": "97.2169",
    "country": "Myanmar"
  },
  {
    "airport_code": "LJG",
    "airport_name": "Lijiang",
    "name": "Lijiang City",
    "lat": "37.8167",
    "lon": "118.017",
    "country": "China"
  },
  {
    "airport_code": "LJU",
    "airport_name": "Ljubljana Airport",
    "name": "Ljubljana",
    "lat": "46.2247",
    "lon": "14.4608",
    "country": "Slovenia"
  },
  {
    "airport_code": "LKA",
    "airport_name": "Larantuka",
    "name": "Larantuka",
    "lat": "-8.34641",
    "lon": "122.979",
    "country": "Indonesia"
  },
  {
    "airport_code": "LKB",
    "airport_name": "Lakemba Island",
    "name": "Lakeba",
    "lat": "-18.2",
    "lon": "178.833",
    "country": "Fiji"
  },
  {
    "airport_code": "LKE",
    "airport_name": "Lake Union Seaplane Base",
    "name": "Seattle",
    "lat": "47.6333",
    "lon": "-122.333",
    "country": "United States"
  },
  {
    "airport_code": "LKG",
    "airport_name": "Lokichoggio Airport",
    "name": "Lokichoggio",
    "lat": "4.20388",
    "lon": "34.3495",
    "country": "Kenya"
  },
  {
    "airport_code": "LKH",
    "airport_name": "Long Akah",
    "name": "Long Akah",
    "lat": "3.31667",
    "lon": "114.783",
    "country": "Malaysia"
  },
  {
    "airport_code": "LKL",
    "airport_name": "Banak Airport",
    "name": "Lakeselv",
    "lat": "70.0661",
    "lon": "24.975",
    "country": "Norway"
  },
  {
    "airport_code": "LKN",
    "airport_name": "Leknes Airport",
    "name": "Leknes",
    "lat": "68.1564",
    "lon": "13.6121",
    "country": "Norway"
  },
  {
    "airport_code": "LKO",
    "airport_name": "Amausi International Airport",
    "name": "Lucknow",
    "lat": "26.7667",
    "lon": "80.8833",
    "country": "India"
  },
  {
    "airport_code": "LLA",
    "airport_name": "Kallax Airport",
    "name": "Lulea",
    "lat": "65.549",
    "lon": "22.1233",
    "country": "Sweden"
  },
  
  {
    "airport_code": "LLI",
    "airport_name": "Ethiopia",
    "name": "Lalibela",
    "lat": "12.009",
    "lon": "38.91",
    "country": "Ethiopia"
  },
  {
    "airport_code": "LLU",
    "airport_name": "Alluitsup Paa Airport",
    "name": "Alluitsup Paa",
    "lat": "60.5",
    "lon": "-45.5833",
    "country": "Greenland"
  },
  {
    "airport_code": "LLW",
    "airport_name": "Kamuzu International Airport",
    "name": "Lumbadzi",
    "lat": "-13.7917",
    "lon": "33.7792",
    "country": "Malawi"
  },
  {
    "airport_code": "LMA",
    "airport_name": "Lake Minchumina",
    "name": "Lake Minchumina",
    "lat": "63.8825",
    "lon": "-152.313",
    "country": "United States"
  },
  {
    "airport_code": "LMC",
    "airport_name": "Lamacarena Airport",
    "name": "San Juan de Arama",
    "lat": "3.31667",
    "lon": "-73.9",
    "country": "Colombia"
  },
  {
    "airport_code": "LMM",
    "airport_name": "Los Mochis Airport",
    "name": "Ahome",
    "lat": "25.6856",
    "lon": "-109.082",
    "country": "Mexico"
  },
  {
    "airport_code": "LMN",
    "airport_name": "Sarawak",
    "name": "Limbang",
    "lat": "2.91165",
    "lon": "112.609",
    "country": "Malaysia"
  },
  {
    "airport_code": "LMP",
    "airport_name": "Lampedusa Airport",
    "name": "Caltabellotta",
    "lat": "35.4995",
    "lon": "12.6165",
    "country": "Italy"
  },
  {
    "airport_code": "LMT",
    "airport_name": "Klamath Falls International Airport",
    "name": "Klamath Falls",
    "lat": "42.1638",
    "lon": "-121.745",
    "country": "United States"
  },
  {
    "airport_code": "LMY",
    "airport_name": "Western",
    "name": "Lake Murray",
    "lat": "-7.18482",
    "lon": "142.374",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "LNB",
    "airport_name": "Lamen Bay Airport",
    "name": "Lamen Bay",
    "lat": "-16.5833",
    "lon": "168.183",
    "country": "Vanuatu"
  },
  {
    "airport_code": "LNE",
    "airport_name": "Lonorore Airport",
    "name": "Panngi",
    "lat": "-15.8667",
    "lon": "168.177",
    "country": "Vanuatu"
  },
  {
    "airport_code": "LNJ",
    "airport_name": "Yunnan",
    "name": "Lincang",
    "lat": "25.1902",
    "lon": "101.824",
    "country": "China"
  },
  {
    "airport_code": "LNK",
    "airport_name": "Lincoln Municipal Airport",
    "name": "Lincoln",
    "lat": "40.8461",
    "lon": "-96.7543",
    "country": "United States"
  },
  {
    "airport_code": "LNO",
    "airport_name": "Leonora Aerodrome",
    "name": "Leonora",
    "lat": "-28.8776",
    "lon": "121.315",
    "country": "Australia"
  },
  {
    "airport_code": "LNV",
    "airport_name": "Gerrit Denys Island",
    "name": "Lihir Island",
    "lat": "-3.06667",
    "lon": "152.617",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "LNY",
    "airport_name": "Lanai Airport",
    "name": "Lanai City",
    "lat": "20.7909",
    "lon": "-156.951",
    "country": "United States"
  },
  {
    "airport_code": "LNZ",
    "airport_name": "Linz Airport",
    "name": "Hoersching",
    "lat": "48.2338",
    "lon": "14.1905",
    "country": "Austria"
  },
  {
    "airport_code": "LOD",
    "airport_name": "",
    "name": "Longana",
    "lat": "31.9587",
    "lon": "34.8864",
    "country": "Vanuatu"
  },
  {
    "airport_code": "LOH",
    "airport_name": "Loja Airport",
    "name": "Loja",
    "lat": "-3.96911",
    "lon": "-79.2116",
    "country": "Ecuador"
  },
  {
    "airport_code": "LOS",
    "airport_name": "Lagos Murtala Muhammed Airport",
    "name": "Ikeja",
    "lat": "6.575",
    "lon": "3.3222",
    "country": "Nigeria"
  },
  {
    "airport_code": "LOU",
    "airport_name": "Bowman Field Airport",
    "name": "Louisville",
    "lat": "38.2228",
    "lon": "-85.6669",
    "country": "United States"
  },
  {
    "airport_code": "LOV",
    "airport_name": "Monclova Airport",
    "name": "Frontera",
    "lat": "26.9561",
    "lon": "-101.467",
    "country": "Mexico"
  },
  {
    "airport_code": "LPA",
    "airport_name": "Las Palmas Airport",
    "name": "Telde",
    "lat": "27.9372",
    "lon": "-15.3828",
    "country": "Spain"
  },
  {
    "airport_code": "LPB",
    "airport_name": "El Alto International Airport",
    "name": "La Paz",
    "lat": "-16.5094",
    "lon": "-68.1906",
    "country": "Bolivia"
  },
  {
    "airport_code": "LPD",
    "airport_name": "La Pedrera Airport",
    "name": "La Pedrera",
    "lat": "-1.3",
    "lon": "-69.7167",
    "country": "Colombia"
  },
  {
    "airport_code": "LPI",
    "airport_name": "Saab Airport",
    "name": "Linkoping",
    "lat": "58.4082",
    "lon": "15.6586",
    "country": "Sweden"
  },
  {
    "airport_code": "LPK",
    "airport_name": "Russia",
    "name": "Lipetsk",
    "lat": "52.6194",
    "lon": "39.6597",
    "country": "Russia"
  },
  {
    "airport_code": "LPL",
    "airport_name": "Liverpool John Lennon Airport",
    "name": "Liverpool",
    "lat": "53.3371",
    "lon": "-2.85746",
    "country": "United Kingdom"
  },
  {
    "airport_code": "LPM",
    "airport_name": "Lamap Airport",
    "name": "Lamap",
    "lat": "-16.4445",
    "lon": "167.819",
    "country": "Vanuatu"
  },
  {
    "airport_code": "LPP",
    "airport_name": "Lappeenranta Airport",
    "name": "Lappeenranta",
    "lat": "61.0465",
    "lon": "28.1536",
    "country": "Finland"
  },
  {
    "airport_code": "LPQ",
    "airport_name": "Louangphrabang Airport",
    "name": "Louangphrabang",
    "lat": "19.8958",
    "lon": "102.164",
    "country": "Laos"
  },
  {
    "airport_code": "LPS",
    "airport_name": "Lopez Island Airport",
    "name": "Lopez Island",
    "lat": "48.4855",
    "lon": "-122.936",
    "country": "United States"
  },
  
  
  {
    "airport_code": "LPY",
    "airport_name": "Loudes Airport",
    "name": "Le Puy",
    "lat": "45.0757",
    "lon": "3.76327",
    "country": "France"
  },
  {
    "airport_code": "LQM",
    "airport_name": "Puerto Leguizamo Airport",
    "name": "Puerto Leguízamo",
    "lat": "-0.12003",
    "lon": "-74.8204",
    "country": "Colombia"
  },
  {
    "airport_code": "LRD",
    "airport_name": "Laredo International Airport",
    "name": "Laredo",
    "lat": "27.5431",
    "lon": "-99.4555",
    "country": "United States"
  },
  {
    "airport_code": "LRE",
    "airport_name": "Longreach Aerodrome",
    "name": "Longreach",
    "lat": "-23.4375",
    "lon": "144.278",
    "country": "Australia"
  },
  {
    "airport_code": "LRH",
    "airport_name": "Laleu Airport",
    "name": "La Rochelle",
    "lat": "46.1766",
    "lon": "-1.19372",
    "country": "France"
  },
  {
    "airport_code": "LRM",
    "airport_name": "La Romana Airport",
    "name": "La Romana",
    "lat": "18.4103",
    "lon": "-68.9417",
    "country": "Dominican Republic"
  },
  {
    "airport_code": "LRR",
    "airport_name": "Lar",
    "name": "Lar",
    "lat": "27.6868",
    "lon": "54.3334",
    "country": "Iran"
  },
  {
    "airport_code": "LRS",
    "airport_name": "Leros Airport",
    "name": "Lero",
    "lat": "37.1847",
    "lon": "26.8017",
    "country": "Greece"
  },
  {
    "airport_code": "LRT",
    "airport_name": "Lann Bihoue Airport",
    "name": "Ploemeur",
    "lat": "47.7545",
    "lon": "-3.43763",
    "country": "France"
  },
  {
    "airport_code": "LSA",
    "airport_name": "Papua New Guinea",
    "name": "Losuia",
    "lat": "-6.65619",
    "lon": "145.859",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "LSC",
    "airport_name": "La Florida Airport",
    "name": "Compañía Alta",
    "lat": "-29.9111",
    "lon": "-71.1978",
    "country": "Chile"
  },
  {
    "airport_code": "LSE",
    "airport_name": "La Crosse Municipal Airport",
    "name": "La Crosse",
    "lat": "43.8751",
    "lon": "-91.2638",
    "country": "United States"
  },
  {
    "airport_code": "LSH",
    "airport_name": "Lashio Airport",
    "name": "Lashio",
    "lat": "22.9767",
    "lon": "97.7558",
    "country": "Myanmar"
  },
  {
    "airport_code": "LSI",
    "airport_name": "Sumburgh Airport",
    "name": "Shetland",
    "lat": "59.877",
    "lon": "-1.29733",
    "country": "United Kingdom"
  },
  {
    "airport_code": "LSP",
    "airport_name": "Josefa Camejo Airport",
    "name": "Las Piedras",
    "lat": "11.7794",
    "lon": "-70.1525",
    "country": "Venezuela"
  },
  {
    "airport_code": "LSS",
    "airport_name": "Terre-De-Haut Airport",
    "name": "Trois-Rivières",
    "lat": "15.8686",
    "lon": "-61.5778",
    "country": "Guadeloupe"
  },
  {
    "airport_code": "LST",
    "airport_name": "Launceston Airport",
    "name": "Blessington",
    "lat": "-41.5469",
    "lon": "147.213",
    "country": "Australia"
  },
  {
    "airport_code": "LSY",
    "airport_name": "Lismore Airport",
    "name": "Lismore",
    "lat": "-28.8249",
    "lon": "153.259",
    "country": "Australia"
  },
  {
    "airport_code": "LTD",
    "airport_name": "Ghadames",
    "name": "Ghadames",
    "lat": "30.147",
    "lon": "9.50288",
    "country": "Libya"
  },
  {
    "airport_code": "LTI",
    "airport_name": "Altay",
    "name": "Altai",
    "lat": "44.9167",
    "lon": "95.4167",
    "country": "Mongolia"
  },
  {
    "airport_code": "LTK",
    "airport_name": "Latakia Airport",
    "name": "Djeble",
    "lat": "35.4028",
    "lon": "35.95",
    "country": "Syria"
  },
  {
    "airport_code": "LTN",
    "airport_name": "London Luton Airport",
    "name": "Luton",
    "lat": "51.8796",
    "lon": "-0.37548",
    "country": "United Kingdom"
  },
  {
    "airport_code": "LTO",
    "airport_name": "Loreto Airport",
    "name": "Comondú",
    "lat": "25.9858",
    "lon": "-111.353",
    "country": "Mexico"
  },
  {
    "airport_code": "LTT",
    "airport_name": "La Mole Airport",
    "name": "Grimaud",
    "lat": "43.2037",
    "lon": "6.47477",
    "country": "France"
  },
  {
    "airport_code": "LTX",
    "airport_name": "",
    "name": "Latacunga",
    "lat": "0.933333",
    "lon": "-78.6167",
    "country": "Ecuador"
  },
  {
    "airport_code": "LUA",
    "airport_name": "Lukla Airport",
    "name": "Solukhumbu",
    "lat": "27.6833",
    "lon": "86.7333",
    "country": "Nepal"
  },
  {
    "airport_code": "LUD",
    "airport_name": "Luderitz Airport",
    "name": "Luderitz",
    "lat": "-26.6839",
    "lon": "15.245",
    "country": "Namibia"
  },
  
  {
    "airport_code": "LUG",
    "airport_name": "Lugano Airport",
    "name": "Agno",
    "lat": "46.0013",
    "lon": "8.90909",
    "country": "Switzerland"
  },
  {
    "airport_code": "LUM",
    "airport_name": "Mangshi",
    "name": "Luxi",
    "lat": "24.4833",
    "lon": "98.5167",
    "country": "China"
  },
  {
    "airport_code": "LUN",
    "airport_name": "Lusaka International Airport",
    "name": "Lusaka",
    "lat": "-15.3292",
    "lon": "28.4528",
    "country": "Zambia"
  },
  {
    "airport_code": "LUO",
    "airport_name": "Luena",
    "name": "Luena",
    "lat": "-11.791",
    "lon": "19.9046",
    "country": "Angola"
  },
  {
    "airport_code": "LUP",
    "airport_name": "Kalaupapa Airport",
    "name": "Kalaupapa",
    "lat": "21.2077",
    "lon": "-156.976",
    "country": "United States"
  },
  {
    "airport_code": "LUQ",
    "airport_name": "San Luis Airport",
    "name": "Villa General Roca",
    "lat": "-33.2744",
    "lon": "-66.3586",
    "country": "Argentina"
  },
  
  {
    "airport_code": "LUV",
    "airport_name": "Indonesia",
    "name": "Langgur",
    "lat": "0.10974",
    "lon": "113.917",
    "country": "Indonesia"
  },
  {
    "airport_code": "LUX",
    "airport_name": "Luxembourg Airport",
    "name": "Sandweiler",
    "lat": "49.6269",
    "lon": "6.20685",
    "country": "Luxembourg"
  },
  {
    "airport_code": "LVI",
    "airport_name": "Livingstone Airport",
    "name": "Livingstone",
    "lat": "-17.8208",
    "lon": "25.8225",
    "country": "Zambia"
  },
  {
    "airport_code": "LVO",
    "airport_name": "Laverton Aerodrome",
    "name": "Laverton",
    "lat": "-28.6083",
    "lon": "122.417",
    "country": "Australia"
  },
  {
    "airport_code": "LWB",
    "airport_name": "Greenbrier Valley Airport",
    "name": "Lewisburg",
    "lat": "37.8571",
    "lon": "-80.4044",
    "country": "United States"
  },
  {
    "airport_code": "LWE",
    "airport_name": "Indonesia",
    "name": "Lewoleba",
    "lat": "0.10974",
    "lon": "113.917",
    "country": "Indonesia"
  },
  {
    "airport_code": "LWN",
    "airport_name": "Gyumri Airport",
    "name": "Gyumri",
    "lat": "40.7859",
    "lon": "43.8439",
    "country": "Armenia"
  },
  {
    "airport_code": "LWO",
    "airport_name": "Sknilov Airport",
    "name": "L'viv",
    "lat": "49.7977",
    "lon": "23.9695",
    "country": "Ukraine"
  },
  {
    "airport_code": "LWS",
    "airport_name": "Lewiston Nez Perce County Airport",
    "name": "Lewiston",
    "lat": "46.3776",
    "lon": "-117.011",
    "country": "United States"
  },
  {
    "airport_code": "LWT",
    "airport_name": "Lewistown Municipal Airport",
    "name": "Lewistown",
    "lat": "47.0552",
    "lon": "-109.46",
    "country": "United States"
  },
  {
    "airport_code": "LWY",
    "airport_name": "Lawas",
    "name": "Lawas",
    "lat": "4.8615",
    "lon": "115.406",
    "country": "Malaysia"
  },
  {
    "airport_code": "LXA",
    "airport_name": "Lhasa",
    "name": "Lhasa",
    "lat": "29.6355",
    "lon": "91.1646",
    "country": "China"
  },
  {
    "airport_code": "LXG",
    "airport_name": "Luang Namtha",
    "name": "Luang Namtha",
    "lat": "20.9667",
    "lon": "101.4",
    "country": "Lao People's Democratic Republic"
  },
  {
    "airport_code": "LXR",
    "airport_name": "Luxor Airport",
    "name": "Luxor",
    "lat": "25.675",
    "lon": "32.7075",
    "country": "Egypt"
  },
  {
    "airport_code": "LXS",
    "airport_name": "Limnos Airport",
    "name": "Moudhros",
    "lat": "39.9214",
    "lon": "25.2417",
    "country": "Greece"
  },
  {
    "airport_code": "LYA",
    "airport_name": "Luoyang Airport",
    "name": "Luoyang",
    "lat": "34.6833",
    "lon": "112.467",
    "country": "China"
  },
  
  {
    "airport_code": "LYC",
    "airport_name": "Lycksele Airport",
    "name": "Lyoksele",
    "lat": "64.5501",
    "lon": "18.7082",
    "country": "Sweden"
  },
  {
    "airport_code": "LYG",
    "airport_name": "Lianyungang",
    "name": "Lianyungang",
    "lat": "34.5995",
    "lon": "119.141",
    "country": "China"
  },
  {
    "airport_code": "LYH",
    "airport_name": "Lynchburg Regional Airport",
    "name": "Lynchburg",
    "lat": "37.3309",
    "lon": "-79.1944",
    "country": "United States"
  },
  {
    "airport_code": "LYI",
    "airport_name": "Linyi",
    "name": "Linyi",
    "lat": "35.0631",
    "lon": "118.343",
    "country": "China"
  },
  {
    "airport_code": "LYP",
    "airport_name": "Faisalabad Airport",
    "name": "Shah Faisalabad",
    "lat": "31.3692",
    "lon": "72.9981",
    "country": "Pakistan"
  },
  {
    "airport_code": "LYR",
    "airport_name": "Svalbard Longyear Airport",
    "name": "Longyearbyen",
    "lat": "78.1917",
    "lon": "15.9",
    "country": "Norway"
  },
  {
    "airport_code": "LYS",
    "airport_name": "Lyon Airport",
    "name": "Colombier",
    "lat": "45.7198",
    "lon": "5.08245",
    "country": "France"
  },
  {
    "airport_code": "LZC",
    "airport_name": "Lazaro Cardenas Airport",
    "name": "Arteaga",
    "lat": "17.9889",
    "lon": "-102.219",
    "country": "Mexico"
  },
  {
    "airport_code": "LZH",
    "airport_name": "Liuzhou Airport",
    "name": "Linzhou",
    "lat": "24.2717",
    "lon": "109.372",
    "country": "China"
  },
  {
    "airport_code": "LZN",
    "airport_name": "Nankan",
    "name": "Nangan",
    "lat": "26.1497",
    "lon": "119.939",
    "country": "Taiwan"
  },
  {
    "airport_code": "LZO",
    "airport_name": "Luzhou Airport",
    "name": "Luzhou",
    "lat": "28.8516",
    "lon": "105.401",
    "country": "China"
  },
  {
    "airport_code": "MAA",
    "airport_name": "Chennai International Airport",
    "name": "Kanchipuram",
    "lat": "12.9849",
    "lon": "80.1634",
    "country": "India"
  },
  {
    "airport_code": "MAB",
    "airport_name": "Maraba Airport",
    "name": "Marabá",
    "lat": "-5.3533",
    "lon": "-49.1336",
    "country": "Brazil"
  },
  {
    "airport_code": "MAD",
    "airport_name": "Barajas Airport",
    "name": "Madrid",
    "lat": "40.4684",
    "lon": "-3.56769",
    "country": "Spain"
  },
  {
    "airport_code": "MAF",
    "airport_name": "Midland International Airport",
    "name": "Midland",
    "lat": "31.9361",
    "lon": "-102.208",
    "country": "United States"
  },
  {
    "airport_code": "MAG",
    "airport_name": "Madang Airport",
    "name": "Madang",
    "lat": "-5.21",
    "lon": "145.787",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "MAH",
    "airport_name": "Menorca Airport",
    "name": "Mao",
    "lat": "39.8652",
    "lon": "4.22383",
    "country": "Spain"
  },
  {
    "airport_code": "MAJ",
    "airport_name": "Marshall Islands International Airport",
    "name": "Majuro",
    "lat": "7.0605",
    "lon": "171.275",
    "country": "Marshall Islands"
  },
  {
    "airport_code": "MAK",
    "airport_name": "Malakal Airport",
    "name": "Malakal",
    "lat": "9.5556",
    "lon": "31.6444",
    "country": "Sudan"
  },
  {
    "airport_code": "MAM",
    "airport_name": "General Sevando Canales Airport",
    "name": "Matamoros",
    "lat": "25.7694",
    "lon": "-97.5239",
    "country": "Mexico"
  },
  {
    "airport_code": "MAN",
    "airport_name": "Manchester International Airport",
    "name": "Manchester",
    "lat": "53.365",
    "lon": "-2.27089",
    "country": "United Kingdom"
  },
  {
    "airport_code": "MAO",
    "airport_name": "Eduardo Gomes International Airport",
    "name": "Manaus",
    "lat": "-3.0392",
    "lon": "-60.0469",
    "country": "Brazil"
  },
  {
    "airport_code": "MAR",
    "airport_name": "La Chinita International Airport",
    "name": "Maracaibo",
    "lat": "10.5614",
    "lon": "-71.7253",
    "country": "Venezuela"
  },
  {
    "airport_code": "MAS",
    "airport_name": "Manus Island Airport",
    "name": "Lorengau",
    "lat": "-2.1052",
    "lon": "146.926",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "MAU",
    "airport_name": "Society Islands Airport",
    "name": "Papeete",
    "lat": "-16.4311",
    "lon": "-152.28",
    "country": "French Polynesia"
  },
  {
    "airport_code": "MAZ",
    "airport_name": "Eugenio Maria de Hostos Airport",
    "name": "Mayaguez",
    "lat": "18.2531",
    "lon": "-67.1489",
    "country": "United States"
  },
  {
    "airport_code": "MBA",
    "airport_name": "Moi International Airport",
    "name": "Mombasa",
    "lat": "-4.0314",
    "lon": "39.5936",
    "country": "Kenya"
  },
  
  {
    "airport_code": "MBE",
    "airport_name": "Okhotsk-Monbetsu Airport",
    "name": "Monbetsu-shi",
    "lat": "44.3046",
    "lon": "143.404",
    "country": "Japan"
  },
  {
    "airport_code": "MBH",
    "airport_name": "Maryborough Airport",
    "name": "Maryborough",
    "lat": "-25.515",
    "lon": "152.714",
    "country": "Australia"
  },
  {
    "airport_code": "MBJ",
    "airport_name": "Sangster International Airport",
    "name": "Montego Bay",
    "lat": "18.5042",
    "lon": "-77.9125",
    "country": "Jamaica"
  },
  {
    "airport_code": "MBL",
    "airport_name": "Manistee County-Blacker Airport",
    "name": "Manistee",
    "lat": "44.2757",
    "lon": "-86.2558",
    "country": "United States"
  },
  {
    "airport_code": "MBS",
    "airport_name": "MBS International Airport",
    "name": "Freeland",
    "lat": "43.5311",
    "lon": "-84.0933",
    "country": "United States"
  },
  {
    "airport_code": "MBT",
    "airport_name": "Masbate Airport",
    "name": "Masbate",
    "lat": "12.3703",
    "lon": "123.628",
    "country": "Philippines"
  },
  {
    "airport_code": "MBU",
    "airport_name": "Mbambanakira",
    "name": "Mbambanakira",
    "lat": "-9.73333",
    "lon": "160.75",
    "country": "Solomon Islands"
  },
  {
    "airport_code": "MCE",
    "airport_name": "Merced Municipal Airport-Macready Field",
    "name": "Merced",
    "lat": "37.2892",
    "lon": "-120.515",
    "country": "United States"
  },
  {
    "airport_code": "MCG",
    "airport_name": "Mcgrath Airport",
    "name": "Mcgrath",
    "lat": "62.9536",
    "lon": "-155.603",
    "country": "United States"
  },
  {
    "airport_code": "MCI",
    "airport_name": "Kansas City International Airport",
    "name": "Kansas City",
    "lat": "39.2992",
    "lon": "-94.7171",
    "country": "United States"
  },
  {
    "airport_code": "MCK",
    "airport_name": "Mccook Municipal Airport",
    "name": "Mccook",
    "lat": "40.2071",
    "lon": "-100.599",
    "country": "United States"
  },
  {
    "airport_code": "MCM",
    "airport_name": "Monte Carlo Heliport",
    "name": "Monaco-Ville",
    "lat": "43.7278",
    "lon": "7.41875",
    "country": "Monaco"
  },
  {
    "airport_code": "MCN",
    "airport_name": "Middle Georgia Regional Airport",
    "name": "Macon",
    "lat": "32.7023",
    "lon": "-83.65",
    "country": "United States"
  },
  {
    "airport_code": "MCO",
    "airport_name": "Orlando International Airport",
    "name": "Orlando",
    "lat": "28.4418",
    "lon": "-81.3115",
    "country": "United States"
  },
  {
    "airport_code": "MCP",
    "airport_name": "Macapa International Airport",
    "name": "Macapá",
    "lat": "0.0525",
    "lon": "-51.0675",
    "country": "Brazil"
  },
  {
    "airport_code": "MCT",
    "airport_name": "Seeb International Airport",
    "name": "Muscat",
    "lat": "23.5917",
    "lon": "58.2792",
    "country": "Oman"
  },
  {
    "airport_code": "MCV",
    "airport_name": "",
    "name": "Mcarthur River",
    "lat": "47.452",
    "lon": "-122.288",
    "country": "Australia"
  },
  {
    "airport_code": "MCW",
    "airport_name": "Mason City Municipal Airport",
    "name": "Clear Lake",
    "lat": "43.153",
    "lon": "-93.3361",
    "country": "United States"
  },
  {
    "airport_code": "MCX",
    "airport_name": "Makhachkala-Uytash Airport",
    "name": "Khasavyurt",
    "lat": "42.8209",
    "lon": "47.6288",
    "country": "Russia"
  },
  {
    "airport_code": "MCY",
    "airport_name": "Maroochydore Aerodrome",
    "name": "Mudjimba",
    "lat": "-26.6035",
    "lon": "153.091",
    "country": "Australia"
  },
  {
    "airport_code": "MCZ",
    "airport_name": "Zumbi dos Palmares International Airport",
    "name": "Maceio",
    "lat": "-9.5117",
    "lon": "-35.8",
    "country": "Brazil"
  },
  {
    "airport_code": "MDC",
    "airport_name": "Sam Ratulangi Airport",
    "name": "Manado",
    "lat": "1.5486",
    "lon": "124.926",
    "country": "Indonesia"
  },
  {
    "airport_code": "MDE",
    "airport_name": "Jose Maria Cordova Airport",
    "name": "Ríonegro",
    "lat": "6.1675",
    "lon": "-75.4267",
    "country": "Colombia"
  },
  {
    "airport_code": "MDG",
    "airport_name": "Mudanjiang",
    "name": "Mudanjiang",
    "lat": "44.6",
    "lon": "129.5",
    "country": "China"
  },
  {
    "airport_code": "MDK",
    "airport_name": "Mbandaka Airport",
    "name": "Mbandaka",
    "lat": "0.0233",
    "lon": "18.2922",
    "country": "Congo"
  },
  {
    "airport_code": "MDL",
    "airport_name": "Mandalay Airport",
    "name": "Mandalay",
    "lat": "21.9392",
    "lon": "96.0914",
    "country": "Myanmar"
  },
  {
    "airport_code": "MDQ",
    "airport_name": "Mar del Plata Airport",
    "name": "Mar del Plata",
    "lat": "-37.9347",
    "lon": "-57.5764",
    "country": "Argentina"
  },
  {
    "airport_code": "MDS",
    "airport_name": "Middle Caicos Airport",
    "name": "Lorimers",
    "lat": "21.7905",
    "lon": "-71.7664",
    "country": "Turks And Caicos Islands"
  },
  {
    "airport_code": "MDT",
    "airport_name": "Harrisburg International Airport",
    "name": "Middletown",
    "lat": "40.1962",
    "lon": "-76.7564",
    "country": "United States"
  },
  {
    "airport_code": "MDU",
    "airport_name": "Papua New Guinea",
    "name": "Mendi",
    "lat": "-6.65619",
    "lon": "145.859",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "MDW",
    "airport_name": "Chicago Midway International Airport",
    "name": "Chicago",
    "lat": "41.7875",
    "lon": "-87.7416",
    "country": "United States"
  },
  {
    "airport_code": "MDZ",
    "airport_name": "El Plumerillo Airport",
    "name": "Mendoza",
    "lat": "-32.8319",
    "lon": "-68.7847",
    "country": "Argentina"
  },
  
  
  {
    "airport_code": "MED",
    "airport_name": "Madinah International Airport",
    "name": "Al Madinah",
    "lat": "24.5517",
    "lon": "39.7025",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "MEE",
    "airport_name": "Loyalty Islands Airport",
    "name": "Tadine",
    "lat": "-21.5021",
    "lon": "167.964",
    "country": "New Caledonia"
  },
  {
    "airport_code": "MEG",
    "airport_name": "Malanje Airport",
    "name": "Malanje",
    "lat": "-9.5236",
    "lon": "16.3158",
    "country": "Angola"
  },
  {
    "airport_code": "MEH",
    "airport_name": "Mehamn Airport",
    "name": "Mehavn",
    "lat": "71.0333",
    "lon": "27.8333",
    "country": "Norway"
  },
  {
    "airport_code": "MEI",
    "airport_name": "Key Field Airport",
    "name": "Meridian",
    "lat": "32.3334",
    "lon": "-88.7449",
    "country": "United States"
  },
  {
    "airport_code": "MEL",
    "airport_name": "Melbourne International Airport",
    "name": "Melbourne",
    "lat": "-37.6759",
    "lon": "144.844",
    "country": "Australia"
  },
  {
    "airport_code": "MEM",
    "airport_name": "Memphis International Airport",
    "name": "Memphis",
    "lat": "35.047",
    "lon": "-89.9823",
    "country": "United States"
  },
  {
    "airport_code": "MES",
    "airport_name": "Polonia Airport",
    "name": "Medan",
    "lat": "3.5606",
    "lon": "98.6708",
    "country": "Indonesia"
  },
  {
    "airport_code": "MEX",
    "airport_name": "Lic Benito Juarez International Airport",
    "name": "Mexico City",
    "lat": "19.4344",
    "lon": "-99.0742",
    "country": "Mexico"
  },
  {
    "airport_code": "MEY",
    "airport_name": "",
    "name": "Meghauli",
    "lat": "40.1494",
    "lon": "-91.5043",
    "country": "Nepal"
  },
  {
    "airport_code": "MFE",
    "airport_name": "Miller International Airport",
    "name": "Mcallen",
    "lat": "26.1813",
    "lon": "-98.2404",
    "country": "United States"
  },
  {
    "airport_code": "MFJ",
    "airport_name": "Moala Airport",
    "name": "Moala",
    "lat": "-18.6045",
    "lon": "179.924",
    "country": "Fiji"
  },
  
  {
    "airport_code": "MFM",
    "airport_name": "Macau Airport",
    "name": "Macau",
    "lat": "22.1845",
    "lon": "113.532",
    "country": "Macau"
  },
  {
    "airport_code": "MFR",
    "airport_name": "Rogue Valley International-Medford Airport",
    "name": "Central Point",
    "lat": "42.3691",
    "lon": "-122.874",
    "country": "United States"
  },
  {
    "airport_code": "MFU",
    "airport_name": "Mfuwe Airport",
    "name": "Mfuwe",
    "lat": "-13.2597",
    "lon": "31.9347",
    "country": "Zambia"
  },
  {
    "airport_code": "MGA",
    "airport_name": "Augusto Cesar Sandino International Airport",
    "name": "Tipitapa",
    "lat": "12.1411",
    "lon": "-86.1686",
    "country": "Nicaragua"
  },
  {
    "airport_code": "MGB",
    "airport_name": "Mount Gambier Airport",
    "name": "Mount Gambier",
    "lat": "-37.7466",
    "lon": "140.787",
    "country": "Australia"
  },
  {
    "airport_code": "MGF",
    "airport_name": "Maringa Domestic Airport",
    "name": "Maringa",
    "lat": "-23.4394",
    "lon": "-51.9061",
    "country": "Brazil"
  },
  {
    "airport_code": "MGH",
    "airport_name": "Margate Airport",
    "name": "Port Shepstone",
    "lat": "-30.8569",
    "lon": "30.3417",
    "country": "South Africa"
  },
  {
    "airport_code": "MGM",
    "airport_name": "Montgomery Regional Airport",
    "name": "Montgomery",
    "lat": "32.3049",
    "lon": "-86.3909",
    "country": "United States"
  },
  {
    "airport_code": "MGQ",
    "airport_name": "Mogadishu Airport",
    "name": "Mogadishu",
    "lat": "2.0136",
    "lon": "45.3047",
    "country": "Somalia"
  },
  {
    "airport_code": "MGS",
    "airport_name": "Mangaia",
    "name": "Mangaia Island",
    "lat": "-21.9103",
    "lon": "-157.921",
    "country": "Cook Islands"
  },
  {
    "airport_code": "MGT",
    "airport_name": "Northern Territory",
    "name": "Milingimbi",
    "lat": "-18.5572",
    "lon": "133.501",
    "country": "Australia"
  },
  {
    "airport_code": "MGW",
    "airport_name": "Morgantown Municipal Airport-Hart Field",
    "name": "Morgantown",
    "lat": "39.6411",
    "lon": "-79.9241",
    "country": "United States"
  },
  {
    "airport_code": "MGZ",
    "airport_name": "Mergui Airport",
    "name": "Mergui",
    "lat": "12.4458",
    "lon": "98.625",
    "country": "Myanmar"
  },
  {
    "airport_code": "MHD",
    "airport_name": "Mashhad Airport",
    "name": "Mashhad",
    "lat": "36.2358",
    "lon": "59.6392",
    "country": "Iran"
  },
  {
    "airport_code": "MHG",
    "airport_name": "Mannheim City Airport",
    "name": "Mannheim",
    "lat": "49.4762",
    "lon": "8.52105",
    "country": "Germany"
  },
  {
    "airport_code": "MHH",
    "airport_name": "Marsh Harbour Airport",
    "name": "Marsh Harbour",
    "lat": "26.5111",
    "lon": "-77.0847",
    "country": "Bahamas"
  },
  {
    "airport_code": "MHK",
    "airport_name": "Manhattan Municipal Airport",
    "name": "Manhattan",
    "lat": "39.1368",
    "lon": "-96.6699",
    "country": "United States"
  },
  {
    "airport_code": "MHP",
    "airport_name": "Minsk International 1",
    "name": "Minsk",
    "lat": "53.8713",
    "lon": "27.5352",
    "country": "Belarus"
  },
  {
    "airport_code": "MHQ",
    "airport_name": "Mariehamn Airport",
    "name": "Maarianhamina",
    "lat": "60.1249",
    "lon": "19.9075",
    "country": "Finland"
  },
  
  {
    "airport_code": "MHT",
    "airport_name": "Manchester-Boston Regional Airport",
    "name": "Manchester",
    "lat": "42.9293",
    "lon": "-71.4386",
    "country": "United States"
  },
  {
    "airport_code": "MIA",
    "airport_name": "Miami International Airport",
    "name": "Miami",
    "lat": "25.7953",
    "lon": "-80.2727",
    "country": "United States"
  },
  {
    "airport_code": "MID",
    "airport_name": "Lic M Crecencio Rejon International Airport",
    "name": "Mérida",
    "lat": "20.9361",
    "lon": "-89.6575",
    "country": "Mexico"
  },
  {
    "airport_code": "MIG",
    "airport_name": "Mian Yang",
    "name": "Mian Yang",
    "lat": "31.4833",
    "lon": "104.733",
    "country": "China"
  },
  {
    "airport_code": "MII",
    "airport_name": "Dr Gastao Vidigal Airport",
    "name": "Marilia",
    "lat": "-22.1953",
    "lon": "-49.9261",
    "country": "Brazil"
  },
  {
    "airport_code": "MIM",
    "airport_name": "Merimbula Aerodrome",
    "name": "Merimbula",
    "lat": "-36.9081",
    "lon": "149.903",
    "country": "Australia"
  },
  {
    "airport_code": "MIR",
    "airport_name": "Habib Bourguiba International Airport",
    "name": "Sidi al Ghudamisi",
    "lat": "35.7611",
    "lon": "10.7556",
    "country": "Tunisia"
  },
  {
    "airport_code": "MIS",
    "airport_name": "Saint Aignan Island",
    "name": "Misima Island",
    "lat": "46.2127",
    "lon": "11.9079",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "MJA",
    "airport_name": "Toliara",
    "name": "Manja",
    "lat": "-23.3548",
    "lon": "43.6631",
    "country": "Madagascar"
  },
  {
    "airport_code": "MJD",
    "airport_name": "Moenjodaro Airport",
    "name": "Mohenjodaro",
    "lat": "27.3364",
    "lon": "68.1417",
    "country": "Pakistan"
  },
  {
    "airport_code": "MJF",
    "airport_name": "Kjaerstad Airport",
    "name": "Mosjoen",
    "lat": "65.7833",
    "lon": "13.2167",
    "country": "Norway"
  },
  {
    "airport_code": "MJI",
    "airport_name": "Libya",
    "name": "Mitiga",
    "lat": "26.3385",
    "lon": "17.2688",
    "country": "Libya"
  },
  {
    "airport_code": "MJK",
    "airport_name": "Shark Bay Airport",
    "name": "Monkey Mia",
    "lat": "-25.8881",
    "lon": "113.578",
    "country": "Australia"
  },
  {
    "airport_code": "MJL",
    "airport_name": "Ngounie",
    "name": "Mouila",
    "lat": "-1.56087",
    "lon": "11.1955",
    "country": "Gabon"
  },
  {
    "airport_code": "MJM",
    "airport_name": "Mbuji Mayi Airport",
    "name": "Mbuji Mayi",
    "lat": "-6.1214",
    "lon": "23.5697",
    "country": "Congo"
  },
  {
    "airport_code": "MJN",
    "airport_name": "Mahajanga Amborovy Airport",
    "name": "Mahajanga",
    "lat": "-15.6658",
    "lon": "46.3531",
    "country": "Madagascar"
  },
  {
    "airport_code": "MJT",
    "airport_name": "Mitilini Airport",
    "name": "Mitilini",
    "lat": "39.0606",
    "lon": "26.5981",
    "country": "Greece"
  },
  {
    "airport_code": "MJV",
    "airport_name": "Murcia San Javier Airport",
    "name": "San Javier",
    "lat": "37.7697",
    "lon": "-0.82098",
    "country": "Spain"
  },
  {
    "airport_code": "MJZ",
    "airport_name": "Mirnyy",
    "name": "Mirnyj",
    "lat": "62.5168",
    "lon": "113.973",
    "country": "Russia"
  },
  
  {
    "airport_code": "MKE",
    "airport_name": "General Mitchell International Airport",
    "name": "Milwaukee",
    "lat": "42.9471",
    "lon": "-87.9051",
    "country": "United States"
  },
  {
    "airport_code": "MKG",
    "airport_name": "Muskegon County Airport",
    "name": "Muskegon",
    "lat": "43.1646",
    "lon": "-86.2367",
    "country": "United States"
  },
  {
    "airport_code": "MKK",
    "airport_name": "Molokai Airport",
    "name": "Hoolehua",
    "lat": "21.1557",
    "lon": "-157.094",
    "country": "United States"
  },
  {
    "airport_code": "MKM",
    "airport_name": "Sarawak",
    "name": "Mukah",
    "lat": "2.91165",
    "lon": "112.609",
    "country": "Malaysia"
  },
  {
    "airport_code": "MKP",
    "airport_name": "Makemo Airport",
    "name": "Makemo",
    "lat": "-16.5978",
    "lon": "-143.662",
    "country": "French Polynesia"
  },
  {
    "airport_code": "MKQ",
    "airport_name": "Mopah Airport",
    "name": "Merauke",
    "lat": "-8.5183",
    "lon": "140.422",
    "country": "Indonesia"
  },
  {
    "airport_code": "MKR",
    "airport_name": "Meekatharra Airport",
    "name": "Kumarina",
    "lat": "-26.6091",
    "lon": "118.551",
    "country": "Australia"
  },
  {
    "airport_code": "MKU",
    "airport_name": "Makokou Airport",
    "name": "Makokou",
    "lat": "0.5792",
    "lon": "12.8922",
    "country": "Gabon"
  },
  {
    "airport_code": "MKW",
    "airport_name": "Rendani Airport",
    "name": "Manokwari",
    "lat": "-0.8911",
    "lon": "134.051",
    "country": "Indonesia"
  },
  {
    "airport_code": "MKY",
    "airport_name": "Mackay Airport",
    "name": "Mackay",
    "lat": "-21.1703",
    "lon": "149.183",
    "country": "Australia"
  },
  {
    "airport_code": "MLA",
    "airport_name": "Luqa Airport",
    "name": "Curmi",
    "lat": "35.8586",
    "lon": "14.4781",
    "country": "Malta"
  },
  {
    "airport_code": "MLB",
    "airport_name": "Melbourne International Airport",
    "name": "Melbourne",
    "lat": "28.0957",
    "lon": "-80.6282",
    "country": "United States"
  },
  {
    "airport_code": "MLE",
    "airport_name": "Male International Airport",
    "name": "Male",
    "lat": "4.167",
    "lon": "73.4974",
    "country": "Maldives"
  },
  {
    "airport_code": "MLG",
    "airport_name": "Malang",
    "name": "Malang",
    "lat": "-7.98189",
    "lon": "112.627",
    "country": "Indonesia"
  },
  {
    "airport_code": "MLH",
    "airport_name": "Bale Mulhouse Airport",
    "name": "Basel Mulhouse Freiburg",
    "lat": "47.5998",
    "lon": "7.53134",
    "country": "France"
  },
  {
    "airport_code": "MLI",
    "airport_name": "Quad City Airport",
    "name": "Coal Valley",
    "lat": "41.4539",
    "lon": "-90.5058",
    "country": "United States"
  },
  {
    "airport_code": "MLL",
    "airport_name": "Marshall",
    "name": "Marshall",
    "lat": "61.8833",
    "lon": "-162.067",
    "country": "United States"
  },
  {
    "airport_code": "MLM",
    "airport_name": "General Francisco J Mujica Airport",
    "name": "Álvaro Obregón",
    "lat": "19.8464",
    "lon": "-101.029",
    "country": "Mexico"
  },
  {
    "airport_code": "MLN",
    "airport_name": "Melilla Airport",
    "name": "Melilla",
    "lat": "35.2825",
    "lon": "-2.9569",
    "country": "Spain"
  },
  {
    "airport_code": "MLO",
    "airport_name": "Milos Island Airport",
    "name": "Apollonia",
    "lat": "36.7137",
    "lon": "24.5118",
    "country": "Greece"
  },
  {
    "airport_code": "MLU",
    "airport_name": "Monroe Regional Airport",
    "name": "Monroe",
    "lat": "32.5099",
    "lon": "-92.044",
    "country": "United States"
  },
  {
    "airport_code": "MLW",
    "airport_name": "Monrovia Spriggs Payne Airport",
    "name": "Monrovia",
    "lat": "6.2897",
    "lon": "-10.7581",
    "country": "Liberia"
  },
  {
    "airport_code": "MLX",
    "airport_name": "Erhac Airport",
    "name": "Arga",
    "lat": "38.435",
    "lon": "38.0911",
    "country": "Turkey"
  },
  {
    "airport_code": "MLY",
    "airport_name": "Manley Hot Springs",
    "name": "Manley Hot Springs",
    "lat": "64.9812",
    "lon": "-150.637",
    "country": "United States"
  },
  {
    "airport_code": "MMB",
    "airport_name": "Memanbetsu Airport",
    "name": "Ozora-cho",
    "lat": "43.8814",
    "lon": "144.163",
    "country": "Japan"
  },
  {
    "airport_code": "MME",
    "airport_name": "Durham Tees Valley Airport",
    "name": "Darlington",
    "lat": "54.5116",
    "lon": "-1.43475",
    "country": "United Kingdom"
  },
  {
    "airport_code": "MMG",
    "airport_name": "Western Australia",
    "name": "Mount Magnet",
    "lat": "-24.4378",
    "lon": "121.079",
    "country": "Australia"
  },
  
  {
    "airport_code": "MMK",
    "airport_name": "Murmashi Airport",
    "name": "Apatity",
    "lat": "68.7794",
    "lon": "32.7434",
    "country": "Russia"
  },
  {
    "airport_code": "MMO",
    "airport_name": "Maio Airport",
    "name": "Vila do Maio",
    "lat": "15.2209",
    "lon": "-23.1762",
    "country": "Cape Verde"
  },
  {
    "airport_code": "MMX",
    "airport_name": "Sturup Airport",
    "name": "Svedala",
    "lat": "55.5406",
    "lon": "13.3666",
    "country": "Sweden"
  },
  {
    "airport_code": "MMY",
    "airport_name": "Miyako Airport",
    "name": "Miyako Jima",
    "lat": "24.7824",
    "lon": "125.295",
    "country": "Japan"
  },
  {
    "airport_code": "MNF",
    "airport_name": "Mana Island Airstrip",
    "name": "Mana Island",
    "lat": "-17.6611",
    "lon": "177.119",
    "country": "Fiji"
  },
  {
    "airport_code": "MNG",
    "airport_name": "Maningrida Airport",
    "name": "Maningrida",
    "lat": "-12.06",
    "lon": "134.233",
    "country": "Australia"
  },
  {
    "airport_code": "MNJ",
    "airport_name": "Mananjary Airport",
    "name": "Mananjary",
    "lat": "-21.2017",
    "lon": "48.3583",
    "country": "Madagascar"
  },
  {
    "airport_code": "MNL",
    "airport_name": "Ninoy Aquino International Airport",
    "name": "Parañaque",
    "lat": "14.5114",
    "lon": "121.016",
    "country": "Philippines"
  },
  {
    "airport_code": "MNT",
    "airport_name": "Minto",
    "name": "Minto",
    "lat": "65.1987",
    "lon": "-149.53",
    "country": "United States"
  },
  {
    "airport_code": "MNU",
    "airport_name": "Moulmein Airport",
    "name": "Moulmein",
    "lat": "16.4417",
    "lon": "97.6694",
    "country": "Myanmar"
  },
  {
    "airport_code": "MOA",
    "airport_name": "",
    "name": "Moa",
    "lat": "38.5702",
    "lon": "-109.553",
    "country": "Cuba"
  },
  {
    "airport_code": "MOB",
    "airport_name": "Mobile Regional Airport",
    "name": "Mobile",
    "lat": "30.6775",
    "lon": "-88.243",
    "country": "United States"
  },
  {
    "airport_code": "MOC",
    "airport_name": "Montes Claros Airport",
    "name": "Montes Claros",
    "lat": "-16.7044",
    "lon": "-43.8203",
    "country": "Brazil"
  },
  {
    "airport_code": "MOD",
    "airport_name": "Modesto City County Airport-Harry Sham Field",
    "name": "Modesto",
    "lat": "37.6319",
    "lon": "-120.959",
    "country": "United States"
  },
  {
    "airport_code": "MOF",
    "airport_name": "Wai Oti Airport",
    "name": "Maumere",
    "lat": "-8.6381",
    "lon": "122.24",
    "country": "Indonesia"
  },
  {
    "airport_code": "MOG",
    "airport_name": "",
    "name": "Mong Hsat",
    "lat": "37.3729",
    "lon": "-87.1361",
    "country": "Myanmar"
  },
  {
    "airport_code": "MOI",
    "airport_name": "",
    "name": "Mitiaro Island",
    "lat": "-19.8167",
    "lon": "-157.717",
    "country": "Cook Islands"
  },
  {
    "airport_code": "MOL",
    "airport_name": "Aro Airport",
    "name": "Bolsøya",
    "lat": "62.7466",
    "lon": "7.26397",
    "country": "Norway"
  },
  {
    "airport_code": "MOQ",
    "airport_name": "Morondava Airport",
    "name": "Morondava",
    "lat": "-20.2836",
    "lon": "44.3183",
    "country": "Madagascar"
  },
  {
    "airport_code": "MOT",
    "airport_name": "Minot International Airport",
    "name": "Minot",
    "lat": "48.2554",
    "lon": "-101.291",
    "country": "United States"
  },
  {
    "airport_code": "MOU",
    "airport_name": "Mountain Village",
    "name": "Mountain Village",
    "lat": "62.0833",
    "lon": "-163.733",
    "country": "United States"
  },
  {
    "airport_code": "MOV",
    "airport_name": "Moranbah Airport",
    "name": "Moranbah",
    "lat": "-22.0574",
    "lon": "148.077",
    "country": "Australia"
  },
  {
    "airport_code": "MOZ",
    "airport_name": "Society Islands Airport",
    "name": "Papeete",
    "lat": "-17.5328",
    "lon": "-149.839",
    "country": "French Polynesia"
  },
  {
    "airport_code": "MPA",
    "airport_name": "Mpacha Airport",
    "name": "Mpacha",
    "lat": "-17.6342",
    "lon": "24.1806",
    "country": "Namibia"
  },
  {
    "airport_code": "MPH",
    "airport_name": "Malay",
    "name": "Caticlan",
    "lat": "11.9",
    "lon": "121.917",
    "country": "Philippines"
  },
  {
    "airport_code": "MPL",
    "airport_name": "Frejorgues Airport",
    "name": "Mauguio",
    "lat": "43.5807",
    "lon": "3.96039",
    "country": "France"
  },
  {
    "airport_code": "MPM",
    "airport_name": "Maputo Airport",
    "name": "Maputo",
    "lat": "-25.9211",
    "lon": "32.5694",
    "country": "Mozambique"
  },
  {
    "airport_code": "MPN",
    "airport_name": "Mount Pleasant Airport",
    "name": "Mount Pleasant",
    "lat": "-51.8222",
    "lon": "-58.4417",
    "country": "Falkland Islands"
  },
  {
    "airport_code": "MQF",
    "airport_name": "Magnitogorsk",
    "name": "Chelyabinsk",
    "lat": "53.45",
    "lon": "59.0667",
    "country": "Russian Federation"
  },
  {
    "airport_code": "MQL",
    "airport_name": "Mildura Airport",
    "name": "Mildura",
    "lat": "-34.2308",
    "lon": "142.084",
    "country": "Australia"
  },
  {
    "airport_code": "MQM",
    "airport_name": "Mardin",
    "name": "Mardin",
    "lat": "37.2233",
    "lon": "40.6317",
    "country": "Turkey"
  },
  {
    "airport_code": "MQN",
    "airport_name": "Rossvoll Airport",
    "name": "Skonseng",
    "lat": "66.3643",
    "lon": "14.3035",
    "country": "Norway"
  },
  {
    "airport_code": "MQP",
    "airport_name": "Nelspruit Airport",
    "name": "Nelspruit",
    "lat": "-25.5",
    "lon": "30.9167",
    "country": "South Africa"
  },
  {
    "airport_code": "MQT",
    "airport_name": "Sawyer International Airport",
    "name": "Marquette",
    "lat": "46.3501",
    "lon": "-87.3871",
    "country": "United States"
  },
  {
    "airport_code": "MQX",
    "airport_name": "",
    "name": "Makale",
    "lat": "13.4667",
    "lon": "39.5167",
    "country": "Ethiopia"
  },
  {
    "airport_code": "MRA",
    "airport_name": "Misurata Airport",
    "name": "Misratah",
    "lat": "32.3325",
    "lon": "15.0617",
    "country": "Libya"
  },
  {
    "airport_code": "MRD",
    "airport_name": "Alberto Carnevalli Airport",
    "name": "Ejido",
    "lat": "8.5853",
    "lon": "-71.1597",
    "country": "Venezuela"
  },
  {
    "airport_code": "MRE",
    "airport_name": "Mara Serena Airport",
    "name": "Mara Lodges",
    "lat": "-1.3944",
    "lon": "35.0089",
    "country": "Kenya"
  },
  {
    "airport_code": "MRS",
    "airport_name": "Marignane Airport",
    "name": "Marignane",
    "lat": "43.4411",
    "lon": "5.22087",
    "country": "France"
  },
  {
    "airport_code": "MRU",
    "airport_name": "Plaisance International Airport",
    "name": "Mahebourg",
    "lat": "-20.4272",
    "lon": "57.6767",
    "country": "Mauritius"
  },
  {
    "airport_code": "MRV",
    "airport_name": "Mineral'nyye Vody",
    "name": "Mineralnye Vody",
    "lat": "44.2026",
    "lon": "43.1352",
    "country": "Russia"
  },
  {
    "airport_code": "MRY",
    "airport_name": "Monterey Peninsula Airport",
    "name": "Monterey",
    "lat": "36.5872",
    "lon": "-121.851",
    "country": "United States"
  },
  {
    "airport_code": "MRZ",
    "airport_name": "Moree Airport",
    "name": "Moree",
    "lat": "-29.494",
    "lon": "149.851",
    "country": "Australia"
  },
  {
    "airport_code": "MSA",
    "airport_name": "Muskrat Dam",
    "name": "Muskrat Dam",
    "lat": "53.8333",
    "lon": "-92",
    "country": "Canada"
  },
  {
    "airport_code": "MSE",
    "airport_name": "Kent International Airport",
    "name": "Manston",
    "lat": "51.3448",
    "lon": "1.35733",
    "country": "United Kingdom"
  },
  {
    "airport_code": "MSJ",
    "airport_name": "Misawa Airport",
    "name": "Misawa-shi",
    "lat": "40.7053",
    "lon": "141.361",
    "country": "Japan"
  },
  {
    "airport_code": "MSL",
    "airport_name": "Muscle Shoals Regional Airport",
    "name": "Muscle Shoals",
    "lat": "34.7439",
    "lon": "-87.6185",
    "country": "United States"
  },
  {
    "airport_code": "MSN",
    "airport_name": "Dane County Regional Airport-Truax Field",
    "name": "Madison",
    "lat": "43.1351",
    "lon": "-89.3465",
    "country": "United States"
  },
  {
    "airport_code": "MSO",
    "airport_name": "Missoula International Airport",
    "name": "Missoula",
    "lat": "46.9192",
    "lon": "-114.084",
    "country": "United States"
  },
  {
    "airport_code": "MSP",
    "airport_name": "Minneapolis St Paul International Airport",
    "name": "St. Paul",
    "lat": "44.8793",
    "lon": "-93.1987",
    "country": "United States"
  },
  {
    "airport_code": "MSQ",
    "airport_name": "Velikiydvor Airport",
    "name": "Minsk",
    "lat": "53.8873",
    "lon": "28.0344",
    "country": "Belarus"
  },
  {
    "airport_code": "MSR",
    "airport_name": "Mus Airport",
    "name": "Mush",
    "lat": "38.7472",
    "lon": "41.6589",
    "country": "Turkey"
  },
  {
    "airport_code": "MSS",
    "airport_name": "Massena International Airport",
    "name": "Massena",
    "lat": "44.9326",
    "lon": "-74.8535",
    "country": "United States"
  },
  {
    "airport_code": "MST",
    "airport_name": "Maastricht Airport",
    "name": "Maastricht-Airport",
    "lat": "50.9157",
    "lon": "5.76967",
    "country": "Netherlands"
  },
  {
    "airport_code": "MSU",
    "airport_name": "Maseru Moshoeshoe Airport",
    "name": "Maseru",
    "lat": "-29.4581",
    "lon": "27.5556",
    "country": "Lesotho"
  },
  {
    "airport_code": "MSW",
    "airport_name": "Massawa",
    "name": "Massawa",
    "lat": "15.6",
    "lon": "39.4333",
    "country": "Ethiopia"
  },
  {
    "airport_code": "MSY",
    "airport_name": "New Orleans International Airport",
    "name": "Kenner",
    "lat": "29.983",
    "lon": "-90.2569",
    "country": "United States"
  },
  {
    "airport_code": "MSZ",
    "airport_name": "Namibe",
    "name": "Namibe",
    "lat": "-15.1972",
    "lon": "12.1551",
    "country": "Angola"
  },
  {
    "airport_code": "MTJ",
    "airport_name": "Montrose Regional Airport",
    "name": "Montrose",
    "lat": "38.5003",
    "lon": "-107.899",
    "country": "United States"
  },
  {
    "airport_code": "MTM",
    "airport_name": "Metlakatla Sea Plane Base",
    "name": "Metlakatla",
    "lat": "55.1333",
    "lon": "-131.583",
    "country": "United States"
  },
  {
    "airport_code": "MTR",
    "airport_name": "Los Garzones Airport",
    "name": "Los Garzones",
    "lat": "8.8306",
    "lon": "-75.8247",
    "country": "Colombia"
  },
  {
    "airport_code": "MTS",
    "airport_name": "Matsapa International Airport",
    "name": "Manzini",
    "lat": "-26.5204",
    "lon": "31.3146",
    "country": "Swaziland"
  },
  {
    "airport_code": "MTT",
    "airport_name": "Minatitlan Airport",
    "name": "Minatitlan",
    "lat": "18.0833",
    "lon": "-94.5961",
    "country": "Mexico"
  },
  {
    "airport_code": "MTV",
    "airport_name": "Mota Lava",
    "name": "Mota Lava",
    "lat": "-13.8167",
    "lon": "167.7",
    "country": "Vanuatu"
  },
  {
    "airport_code": "MTY",
    "airport_name": "Gen Mariano Escobedo International Airport",
    "name": "Pesquería",
    "lat": "25.7783",
    "lon": "-100.107",
    "country": "Mexico"
  },
  {
    "airport_code": "MUA",
    "airport_name": "Munda Airport",
    "name": "Munda",
    "lat": "-8.3272",
    "lon": "157.261",
    "country": "Solomon Islands"
  },
  {
    "airport_code": "MUB",
    "airport_name": "Maun Airport",
    "name": "Maun",
    "lat": "-19.9708",
    "lon": "23.4306",
    "country": "Botswana"
  },
  {
    "airport_code": "MUC",
    "airport_name": "Franz-Josef-Strauss Airport",
    "name": "Oberding",
    "lat": "48.354",
    "lon": "11.7816",
    "country": "Germany"
  },
  {
    "airport_code": "MUE",
    "airport_name": "Waimea Kohala Airport",
    "name": "Kamuela",
    "lat": "19.9983",
    "lon": "-155.675",
    "country": "United States"
  },
  {
    "airport_code": "MUH",
    "airport_name": "Mersa Matruh Airport",
    "name": "Marsa Matruh",
    "lat": "31.3253",
    "lon": "27.2208",
    "country": "Egypt"
  },
  {
    "airport_code": "MUK",
    "airport_name": "Mauke Island",
    "name": "Mauke Island",
    "lat": "-20.1333",
    "lon": "-157.35",
    "country": "Cook Islands"
  },
  {
    "airport_code": "MUN",
    "airport_name": "Maturin Airport",
    "name": "Aguasay",
    "lat": "9.7514",
    "lon": "-63.1528",
    "country": "Venezuela"
  },
  {
    "airport_code": "MUR",
    "airport_name": "Marudi Airport",
    "name": "Miri",
    "lat": "4.175",
    "lon": "114.33",
    "country": "Malaysia"
  },
  {
    "airport_code": "MUX",
    "airport_name": "Multan Airport",
    "name": "Multan",
    "lat": "30.2028",
    "lon": "71.4181",
    "country": "Pakistan"
  },
  {
    "airport_code": "MUZ",
    "airport_name": "Mara",
    "name": "Musoma",
    "lat": "-1.77227",
    "lon": "33.9811",
    "country": "Tanzania"
  },
  {
    "airport_code": "MVB",
    "airport_name": "Franceville Mvengue Airport",
    "name": "Franceville",
    "lat": "-1.6569",
    "lon": "13.4397",
    "country": "Gabon"
  },
  {
    "airport_code": "MVD",
    "airport_name": "Carrasco International Airport",
    "name": "Montevideo",
    "lat": "-34.8291",
    "lon": "-56.0323",
    "country": "Uruguay"
  },
  {
    "airport_code": "MVP",
    "airport_name": "Mitu Airport",
    "name": "Mitu",
    "lat": "1.13333",
    "lon": "-70.05",
    "country": "Colombia"
  },
  {
    "airport_code": "MVR",
    "airport_name": "Maroua Salak Airport",
    "name": "Maroua",
    "lat": "10.4533",
    "lon": "14.2564",
    "country": "Cameroon"
  },
  {
    "airport_code": "MVS",
    "airport_name": "Aeroporto Max Feffer",
    "name": "Mucuri",
    "lat": "-18.0492",
    "lon": "-39.8653",
    "country": "Brazil"
  },
  {
    "airport_code": "MVT",
    "airport_name": "French Polynesia",
    "name": "Mataiva",
    "lat": "-17.6902",
    "lon": "-149.376",
    "country": "French Polynesia"
  },
  {
    "airport_code": "MVY",
    "airport_name": "Marthas Vineyard Airport",
    "name": "Vineyard Haven",
    "lat": "41.3895",
    "lon": "-70.6112",
    "country": "United States"
  },
  {
    "airport_code": "MWA",
    "airport_name": "Williamson County Regional Airport",
    "name": "Marion",
    "lat": "37.7467",
    "lon": "-89.0104",
    "country": "United States"
  },
  {
    "airport_code": "MWF",
    "airport_name": "Vanuatu",
    "name": "Maewo",
    "lat": "-15.1609",
    "lon": "168.145",
    "country": "Vanuatu"
  },
  {
    "airport_code": "MWN",
    "airport_name": "Mwadui",
    "name": "Mwadui",
    "lat": "-3.59224",
    "lon": "33.5603",
    "country": "Tanzania"
  },
  {
    "airport_code": "MWQ",
    "airport_name": "Magwe",
    "name": "Magwe",
    "lat": "20.1403",
    "lon": "94.928",
    "country": "Myanmar"
  },
  {
    "airport_code": "MWZ",
    "airport_name": "Mwanza Airport",
    "name": "Ilemera",
    "lat": "-2.4469",
    "lon": "32.9286",
    "country": "Tanzania"
  },
  {
    "airport_code": "MXH",
    "airport_name": "Papua New Guinea",
    "name": "Moro",
    "lat": "-6.65619",
    "lon": "145.859",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "MXL",
    "airport_name": "Gen Rodolfo Sanchez T International Airport",
    "name": "Mexicali",
    "lat": "32.6308",
    "lon": "-115.242",
    "country": "Mexico"
  },
  {
    "airport_code": "MXM",
    "airport_name": "Morombe Airport",
    "name": "Morombe",
    "lat": "-21.7506",
    "lon": "43.3742",
    "country": "Madagascar"
  },
  
  {
    "airport_code": "MXP",
    "airport_name": "Malpensa International Airport",
    "name": "Cardano al Campo",
    "lat": "45.6314",
    "lon": "8.72284",
    "country": "Italy"
  },
  {
    "airport_code": "MXT",
    "airport_name": "",
    "name": "Maintirano",
    "lat": "-27.2167",
    "lon": "-65.1333",
    "country": "Madagascar"
  },
  {
    "airport_code": "MXV",
    "airport_name": "Moron Airport",
    "name": "Mörön",
    "lat": "49.663",
    "lon": "100.094",
    "country": "Mongolia"
  },
  {
    "airport_code": "MXX",
    "airport_name": "Siljan Airport",
    "name": "Mora",
    "lat": "60.9586",
    "lon": "14.5049",
    "country": "Sweden"
  },
  {
    "airport_code": "MXZ",
    "airport_name": "Meixian",
    "name": "Meixian",
    "lat": "24.35",
    "lon": "116.133",
    "country": "China"
  },
  {
    "airport_code": "MYA",
    "airport_name": "Moruya Aerodrome",
    "name": "Bingie",
    "lat": "-35.8983",
    "lon": "150.147",
    "country": "Australia"
  },
  {
    "airport_code": "MYD",
    "airport_name": "Malindi Airport",
    "name": "Mombasa",
    "lat": "-3.2261",
    "lon": "40.1006",
    "country": "Kenya"
  },
  {
    "airport_code": "MYE",
    "airport_name": "Miyakejima Airport",
    "name": "Miyake-mura",
    "lat": "34.0726",
    "lon": "139.56",
    "country": "Japan"
  },
  {
    "airport_code": "MYG",
    "airport_name": "Miltary & Civil Airport",
    "name": "Abraham Bay",
    "lat": "22.3706",
    "lon": "-72.9481",
    "country": "Bahamas"
  },
  {
    "airport_code": "MYI",
    "airport_name": "Murray Island",
    "name": "Murray Island",
    "lat": "-9.91682",
    "lon": "144.051",
    "country": "Australia"
  },
  {
    "airport_code": "MYJ",
    "airport_name": "Matsuyama Airport",
    "name": "Matsuyama-shi",
    "lat": "33.8276",
    "lon": "132.7",
    "country": "Japan"
  },
  
  
  {
    "airport_code": "MYT",
    "airport_name": "Myitkyina Airport",
    "name": "Myitkyina",
    "lat": "25.3844",
    "lon": "97.3553",
    "country": "Myanmar"
  },
  {
    "airport_code": "MYU",
    "airport_name": "Mekoryuk",
    "name": "Mekoryuk",
    "lat": "60.3906",
    "lon": "-166.191",
    "country": "United States"
  },
  {
    "airport_code": "MYW",
    "airport_name": "Mtwara Airport",
    "name": "Ziwani",
    "lat": "-10.3342",
    "lon": "40.1808",
    "country": "Tanzania"
  },
  {
    "airport_code": "MYY",
    "airport_name": "Miri Airport",
    "name": "Miri",
    "lat": "4.3256",
    "lon": "113.984",
    "country": "Malaysia"
  },
  {
    "airport_code": "MZG",
    "airport_name": "Magong Airport",
    "name": "Makung City",
    "lat": "23.5631",
    "lon": "119.634",
    "country": "Taiwan"
  },
  
  {
    "airport_code": "MZI",
    "airport_name": "Mopti Barbe Airport",
    "name": "Mopti",
    "lat": "14.5206",
    "lon": "-4.0872",
    "country": "Mali"
  },
  {
    "airport_code": "MZL",
    "airport_name": "La Nubia Airport",
    "name": "Villamaría",
    "lat": "5.0322",
    "lon": "-75.4708",
    "country": "Colombia"
  },
  {
    "airport_code": "MZO",
    "airport_name": "Manzanillo Airport",
    "name": "Manzanillo",
    "lat": "20.2861",
    "lon": "-77.0864",
    "country": "Cuba"
  },
  {
    "airport_code": "MZR",
    "airport_name": "Mazar I Sharif Airport",
    "name": "Mazar-i-Sharif",
    "lat": "36.7042",
    "lon": "67.2083",
    "country": "Afghanistan"
  },
  {
    "airport_code": "MZT",
    "airport_name": "General Rafael Buelna International Airport",
    "name": "Mazatlán",
    "lat": "23.1625",
    "lon": "-106.274",
    "country": "Mexico"
  },
  {
    "airport_code": "MZV",
    "airport_name": "Mulu Airport",
    "name": "Mulu",
    "lat": "4.03333",
    "lon": "114.8",
    "country": "Malaysia"
  },
  {
    "airport_code": "NAA",
    "airport_name": "Narrabri Airport",
    "name": "Bohena Creek",
    "lat": "-30.3208",
    "lon": "149.826",
    "country": "Australia"
  },
  {
    "airport_code": "NAC",
    "airport_name": "Naracoorte Airport",
    "name": "Naracoorte",
    "lat": "-36.9803",
    "lon": "140.728",
    "country": "Australia"
  },
  {
    "airport_code": "NAG",
    "airport_name": "Sonegaon Airport",
    "name": "Nagpur",
    "lat": "21.0917",
    "lon": "79.0486",
    "country": "India"
  },
  {
    "airport_code": "NAJ",
    "airport_name": "",
    "name": "Nakhichevan",
    "lat": "22.8799",
    "lon": "72.5687",
    "country": "Azerbaijan"
  },
  {
    "airport_code": "NAN",
    "airport_name": "Nadi International Airport",
    "name": "Nadi",
    "lat": "-17.7558",
    "lon": "177.446",
    "country": "Fiji"
  },
  {
    "airport_code": "NAO",
    "airport_name": "Nanchong Airport",
    "name": "Nanchong",
    "lat": "30.7556",
    "lon": "106.057",
    "country": "China"
  },
  {
    "airport_code": "NAP",
    "airport_name": "Naples International Airport",
    "name": "Naples",
    "lat": "40.8837",
    "lon": "14.2815",
    "country": "Italy"
  },
  {
    "airport_code": "NAQ",
    "airport_name": "Qaanaaq",
    "name": "Qaanaaq",
    "lat": "77.5",
    "lon": "-69.1667",
    "country": "Greenland"
  },
  {
    "airport_code": "NAS",
    "airport_name": "Nassau International Airport",
    "name": "Nassau",
    "lat": "25.0406",
    "lon": "-77.4719",
    "country": "Bahamas"
  },
  {
    "airport_code": "NAT",
    "airport_name": "Augusto Severo International Airport",
    "name": "Natal",
    "lat": "-5.84694",
    "lon": "-35.2145",
    "country": "Brazil"
  },
  {
    "airport_code": "NAU",
    "airport_name": "Napuka Island",
    "name": "Napuka Island",
    "lat": "-14.1667",
    "lon": "-141.583",
    "country": "French Polynesia"
  },
  
  {
    "airport_code": "NAW",
    "airport_name": "Narathiwat Airport",
    "name": "Narathiwat",
    "lat": "6.5183",
    "lon": "101.748",
    "country": "Thailand"
  },
  
  {
    "airport_code": "NBO",
    "airport_name": "Jomo Kenyatta International Airport",
    "name": "Nairobi",
    "lat": "-1.31697",
    "lon": "36.9222",
    "country": "Kenya"
  },
  
  {
    "airport_code": "NBX",
    "airport_name": "Nabire Airport",
    "name": "Nabire",
    "lat": "-3.3617",
    "lon": "135.494",
    "country": "Indonesia"
  },
  {
    "airport_code": "NCA",
    "airport_name": "North Caicos Airport",
    "name": "Bottle Creek Settlements",
    "lat": "21.9167",
    "lon": "-71.9425",
    "country": "Turks And Caicos Islands"
  },
  {
    "airport_code": "NCE",
    "airport_name": "Nice-Cote d'Azur Airport",
    "name": "Nice",
    "lat": "43.6638",
    "lon": "7.21286",
    "country": "France"
  },
  {
    "airport_code": "NCL",
    "airport_name": "Newcastle International Airport",
    "name": "Newcastle",
    "lat": "55.0374",
    "lon": "-1.70962",
    "country": "United Kingdom"
  },
  {
    "airport_code": "NCN",
    "airport_name": "Chenega",
    "name": "New Chenega",
    "lat": "60.0784",
    "lon": "-148.017",
    "country": "United States"
  },
  {
    "airport_code": "NCU",
    "airport_name": "",
    "name": "Nukus",
    "lat": "42.4833",
    "lon": "59.6333",
    "country": "Uzbekistan"
  },
  {
    "airport_code": "NCY",
    "airport_name": "Meythet Airport",
    "name": "Pringy",
    "lat": "45.931",
    "lon": "6.10666",
    "country": "France"
  },
  {
    "airport_code": "NDB",
    "airport_name": "Nouadhibou Airport",
    "name": "Port-Etienne",
    "lat": "20.9342",
    "lon": "-17.0283",
    "country": "Mauritania"
  },
  {
    "airport_code": "NDG",
    "airport_name": "Qiqihar",
    "name": "Qiqihar",
    "lat": "47.5167",
    "lon": "112.133",
    "country": "China"
  },
  {
    "airport_code": "NDJ",
    "airport_name": "Ndjamena Airport",
    "name": "N'Djamena",
    "lat": "12.1347",
    "lon": "15.035",
    "country": "Chad"
  },
  {
    "airport_code": "NDR",
    "airport_name": "Nador Airport",
    "name": "Nador",
    "lat": "35.1678",
    "lon": "-2.94411",
    "country": "Morocco"
  },
  {
    "airport_code": "NER",
    "airport_name": "",
    "name": "Neryungri",
    "lat": "17.611",
    "lon": "8.08095",
    "country": "Russia"
  },
  {
    "airport_code": "NEV",
    "airport_name": "Newcastle Airport",
    "name": "Nevis",
    "lat": "17.2",
    "lon": "-62.6",
    "country": "Saint Kitts and Nevis"
  },
  
  {
    "airport_code": "NGB",
    "airport_name": "Ningbo Airport",
    "name": "Jiangshan",
    "lat": "29.8333",
    "lon": "121.533",
    "country": "China"
  },
  {
    "airport_code": "NGE",
    "airport_name": "Ngaoundere Airport",
    "name": "Ngaoundéré",
    "lat": "7.3564",
    "lon": "13.5614",
    "country": "Cameroon"
  },
  {
    "airport_code": "NGI",
    "airport_name": "Ngau Island",
    "name": "Ngau Island",
    "lat": "-18.0333",
    "lon": "179.3",
    "country": "Fiji"
  },
  {
    "airport_code": "NGO",
    "airport_name": "Chubu International Airport",
    "name": "Tokoname-shi",
    "lat": "34.8624",
    "lon": "136.811",
    "country": "Japan"
  },
  {
    "airport_code": "NGS",
    "airport_name": "Nagasaki Airport",
    "name": "Omura-shi",
    "lat": "32.9141",
    "lon": "129.917",
    "country": "Japan"
  },
  {
    "airport_code": "NHA",
    "airport_name": "Nha-Trang Airport",
    "name": "Nha Trang",
    "lat": "12.2333",
    "lon": "109.2",
    "country": "Vietnam"
  },
  {
    "airport_code": "NHV",
    "airport_name": "Marquesas Islands Airport",
    "name": "Nuku Hiva",
    "lat": "-8.79383",
    "lon": "-140.223",
    "country": "French Polynesia"
  },
  {
    "airport_code": "NIB",
    "airport_name": "Nikolai",
    "name": "Nikolai",
    "lat": "45.9837",
    "lon": "-108.028",
    "country": "United States"
  },
  {
    "airport_code": "NIM",
    "airport_name": "Niamey Airport",
    "name": "Niamey",
    "lat": "13.4817",
    "lon": "2.1703",
    "country": "Niger"
  },
  
  {
    "airport_code": "NIU",
    "airport_name": "Honolulu International Airport",
    "name": "Honolulu",
    "lat": "21.3358",
    "lon": "-157.919",
    "country": "United States"
  },
  {
    "airport_code": "NJC",
    "airport_name": "Nizhnevartovsk Northwest Airport",
    "name": "Nizhnevartovsk",
    "lat": "60.9518",
    "lon": "76.4972",
    "country": "Russia"
  },
  {
    "airport_code": "NKC",
    "airport_name": "Nouakchott Airport",
    "name": "Nouakchott",
    "lat": "18.0975",
    "lon": "-15.9478",
    "country": "Mauritania"
  },
  {
    "airport_code": "NKG",
    "airport_name": "Nanjing Lukou International Airport",
    "name": "Nanjing",
    "lat": "32.0833",
    "lon": "118.8",
    "country": "China"
  },
  {
    "airport_code": "NKI",
    "airport_name": "Naukiti Airport",
    "name": "Naukiti",
    "lat": "55.8556",
    "lon": "-133.183",
    "country": "United States"
  },
  
  {
    "airport_code": "NLA",
    "airport_name": "Ndola Airport",
    "name": "Ndola",
    "lat": "-12.9958",
    "lon": "28.6631",
    "country": "Zambia"
  },
  {
    "airport_code": "NLD",
    "airport_name": "Quetzalcoatl International Airport",
    "name": "Nuevo Laredo",
    "lat": "27.4422",
    "lon": "-99.5686",
    "country": "Mexico"
  },
  {
    "airport_code": "NLF",
    "airport_name": "Darnley Island Airport",
    "name": "Kubin Village",
    "lat": "-9.5925",
    "lon": "143.773",
    "country": "Australia"
  },
  {
    "airport_code": "NLG",
    "airport_name": "",
    "name": "Nelson Lagoon",
    "lat": "56.0167",
    "lon": "-161.15",
    "country": "United States"
  },
  {
    "airport_code": "NLK",
    "airport_name": "Norfolk Island Airport",
    "name": "Kingston",
    "lat": "-29.0363",
    "lon": "168.032",
    "country": "Norfolk Island"
  },
  {
    "airport_code": "NLV",
    "airport_name": "Nikolaev Airport",
    "name": "Mykolayiv",
    "lat": "47.05",
    "lon": "31.9167",
    "country": "Ukraine"
  },
  {
    "airport_code": "NMA",
    "airport_name": "Namangan Airport",
    "name": "Namangan",
    "lat": "40.9787",
    "lon": "71.5677",
    "country": "Uzbekistan"
  },
  {
    "airport_code": "NME",
    "airport_name": "Nightmute Airport",
    "name": "Nightmute",
    "lat": "60.4723",
    "lon": "-164.699",
    "country": "United States"
  },
  {
    "airport_code": "NNB",
    "airport_name": "Makira",
    "name": "Santa Ana",
    "lat": "-10.8483",
    "lon": "162.455",
    "country": "Solomon Islands"
  },
  {
    "airport_code": "NNG",
    "airport_name": "Nanning-Wuyu Airport",
    "name": "Wuxu",
    "lat": "22.6183",
    "lon": "108.179",
    "country": "China"
  },
  {
    "airport_code": "NNL",
    "airport_name": "",
    "name": "Nondalton",
    "lat": "59.9717",
    "lon": "-154.847",
    "country": "United States"
  },
  {
    "airport_code": "NNM",
    "airport_name": "",
    "name": "Naryan-Mar",
    "lat": "67.6167",
    "lon": "53.15",
    "country": "Russia"
  },
  {
    "airport_code": "NNT",
    "airport_name": "Nan Airport",
    "name": "Nan",
    "lat": "18.8097",
    "lon": "100.787",
    "country": "Thailand"
  },
  {
    "airport_code": "NNY",
    "airport_name": "Nanyang",
    "name": "Nanyang",
    "lat": "32.9959",
    "lon": "112.527",
    "country": "China"
  },
  {
    "airport_code": "NOB",
    "airport_name": "Nosara Beach Airport",
    "name": "Nosara",
    "lat": "10.0053",
    "lon": "-85.6625",
    "country": "Costa Rica"
  },
  {
    "airport_code": "NOC",
    "airport_name": "Connaught Airport",
    "name": "Knock",
    "lat": "53.9133",
    "lon": "-8.81129",
    "country": "Ireland"
  },
  {
    "airport_code": "NOJ",
    "airport_name": "",
    "name": "Nojabrxsk",
    "lat": "63.5",
    "lon": "75",
    "country": "Russia"
  },
  {
    "airport_code": "NOS",
    "airport_name": "Nosy Be Fascene Airport",
    "name": "Hell-Ville",
    "lat": "-13.3153",
    "lon": "48.3103",
    "country": "Madagascar"
  },
  
  {
    "airport_code": "NOV",
    "airport_name": "Huambo Airport",
    "name": "Huambo",
    "lat": "-12.8064",
    "lon": "15.7572",
    "country": "Angola"
  },
  {
    "airport_code": "NOZ",
    "airport_name": "Kemerovskaya Oblast",
    "name": "Novokuznetsk",
    "lat": "54.5183",
    "lon": "86.9342",
    "country": "Russia"
  },
  {
    "airport_code": "NPE",
    "airport_name": "Hawkes Bay Airport",
    "name": "Napier",
    "lat": "-39.4689",
    "lon": "176.867",
    "country": "New Zealand"
  },
  {
    "airport_code": "NPL",
    "airport_name": "New Plymouth Airport",
    "name": "New Plymouth",
    "lat": "-39.0067",
    "lon": "174.171",
    "country": "New Zealand"
  },
  {
    "airport_code": "NQN",
    "airport_name": "Neuquen Airport",
    "name": "Neuquen",
    "lat": "-38.9489",
    "lon": "-68.1569",
    "country": "Argentina"
  },
  {
    "airport_code": "NQU",
    "airport_name": "Nuqui Airport",
    "name": "Nuquí",
    "lat": "5.69889",
    "lon": "-77.2765",
    "country": "Colombia"
  },
  {
    "airport_code": "NQY",
    "airport_name": "St Mawgan Airport",
    "name": "Newquay",
    "lat": "50.4364",
    "lon": "-5.01373",
    "country": "United Kingdom"
  },
  
  {
    "airport_code": "NRK",
    "airport_name": "Kungsangen Airport",
    "name": "Norrkoping",
    "lat": "58.5841",
    "lon": "16.2338",
    "country": "Sweden"
  },
  {
    "airport_code": "NRN",
    "airport_name": "Airport Weeze",
    "name": "Weeze",
    "lat": "51.6031",
    "lon": "6.1417",
    "country": "Germany"
  },
  {
    "airport_code": "NRT",
    "airport_name": "Narita International Airport",
    "name": "Narita-shi",
    "lat": "35.7491",
    "lon": "140.389",
    "country": "Japan"
  },
  {
    "airport_code": "NSH",
    "airport_name": "",
    "name": "Now Shahr",
    "lat": "42.7584",
    "lon": "-71.4642",
    "country": "Iran"
  },
  
  {
    "airport_code": "NSK",
    "airport_name": "Norilsk Alykel Airport",
    "name": "Kansk",
    "lat": "69.3089",
    "lon": "87.3351",
    "country": "Russia"
  },
  {
    "airport_code": "NSN",
    "airport_name": "Nelson Airport",
    "name": "Nelson",
    "lat": "-41.2961",
    "lon": "173.22",
    "country": "New Zealand"
  },
  {
    "airport_code": "NST",
    "airport_name": "Nakhon Si Thammarat Airport",
    "name": "Phra Phrom",
    "lat": "8.4561",
    "lon": "99.96",
    "country": "Thailand"
  },
  {
    "airport_code": "NTE",
    "airport_name": "Chateau Bougon Airport",
    "name": "Bouguenais",
    "lat": "47.1573",
    "lon": "-1.60205",
    "country": "France"
  },
  {
    "airport_code": "NTG",
    "airport_name": "Nantong Airport",
    "name": "Nantong",
    "lat": "32.0155",
    "lon": "120.84",
    "country": "China"
  },
  {
    "airport_code": "NTL",
    "airport_name": "Williamtown Airport",
    "name": "Ferodale",
    "lat": "-32.7985",
    "lon": "151.837",
    "country": "Australia"
  },
  {
    "airport_code": "NTN",
    "airport_name": "Normanton",
    "name": "Normanton",
    "lat": "-17.7",
    "lon": "141.067",
    "country": "Australia"
  },
  {
    "airport_code": "NTQ",
    "airport_name": "Noto Airport",
    "name": "Anamizu-machi",
    "lat": "37.2917",
    "lon": "136.957",
    "country": "Japan"
  },
  {
    "airport_code": "NTT",
    "airport_name": "Niuatoputapu Airport",
    "name": "Niuatoputapu",
    "lat": "-15.9481",
    "lon": "-173.736",
    "country": "Tonga"
  },
  {
    "airport_code": "NUE",
    "airport_name": "Nurnberg Airport",
    "name": "Nuremberg",
    "lat": "49.4946",
    "lon": "11.0785",
    "country": "Germany"
  },
  {
    "airport_code": "NUI",
    "airport_name": "Nuiqsut",
    "name": "Nuiqsut",
    "lat": "70.2167",
    "lon": "-150.917",
    "country": "United States"
  },
  {
    "airport_code": "NUK",
    "airport_name": "Nukutavake",
    "name": "Nukutavake",
    "lat": "-19.0861",
    "lon": "-139",
    "country": "French Polynesia"
  },
  {
    "airport_code": "NUL",
    "airport_name": "Nulato Airport",
    "name": "Nulato",
    "lat": "64.7134",
    "lon": "-158.077",
    "country": "United States"
  },
  {
    "airport_code": "NUP",
    "airport_name": "Alaska",
    "name": "Nunapitchuk",
    "lat": "60.897",
    "lon": "-162.453",
    "country": "United States"
  },
  {
    "airport_code": "NUS",
    "airport_name": "",
    "name": "Norsup",
    "lat": "45.7396",
    "lon": "7.46666",
    "country": "Vanuatu"
  },
  {
    "airport_code": "NUX",
    "airport_name": "Urengoy Airport",
    "name": "Novy Urengoy",
    "lat": "65.9549",
    "lon": "78.3955",
    "country": "Russia"
  },
  {
    "airport_code": "NVA",
    "airport_name": "Neiva Lamarguita Airport",
    "name": "Neiva",
    "lat": "2.93333",
    "lon": "-75.2833",
    "country": "Colombia"
  },
  {
    "airport_code": "NVI",
    "airport_name": "Navoi Airport",
    "name": "Navoi",
    "lat": "40.1155",
    "lon": "65.19",
    "country": "Uzbekistan"
  },
  {
    "airport_code": "NVK",
    "airport_name": "Framnes Airport",
    "name": "Narvik",
    "lat": "68.4431",
    "lon": "17.3941",
    "country": "Norway"
  },
  {
    "airport_code": "NVR",
    "airport_name": "",
    "name": "Novgorod",
    "lat": "58.5167",
    "lon": "31.3",
    "country": "Russia"
  },
  {
    "airport_code": "NVT",
    "airport_name": "Ministro Victor Konder International Airport",
    "name": "Navegantes",
    "lat": "-26.8797",
    "lon": "-48.6481",
    "country": "Brazil"
  },
  {
    "airport_code": "NWA",
    "airport_name": "",
    "name": "Moheli",
    "lat": "6.47748",
    "lon": "11.0726",
    "country": "Comoros"
  },
  {
    "airport_code": "NWI",
    "airport_name": "Norwich Airport",
    "name": "Norwich",
    "lat": "52.6704",
    "lon": "1.27648",
    "country": "United Kingdom"
  },
  {
    "airport_code": "NYA",
    "airport_name": "",
    "name": "Norwood Young America",
    "lat": "44.7718",
    "lon": "-93.9263",
    "country": "United States"
  },
  {
    "airport_code": "NYK",
    "airport_name": "Nanyuki Airport",
    "name": "Nyeri",
    "lat": "-0.0583",
    "lon": "37.0369",
    "country": "Kenya"
  },
  {
    "airport_code": "NYM",
    "airport_name": "Nadym Airport",
    "name": "Nadym",
    "lat": "65.6179",
    "lon": "72.6856",
    "country": "Russia"
  },
  {
    "airport_code": "NYO",
    "airport_name": "Skavsta Airport",
    "name": "Nykoping",
    "lat": "58.7833",
    "lon": "16.9224",
    "country": "Sweden"
  },
  {
    "airport_code": "NYU",
    "airport_name": "Nyaung U Airport",
    "name": "Nyaung-u",
    "lat": "21.1814",
    "lon": "94.9347",
    "country": "Myanmar"
  },
  {
    "airport_code": "NZH",
    "airport_name": "Manzhouli",
    "name": "Manzhouli",
    "lat": "49.6",
    "lon": "117.433",
    "country": "China"
  },
  {
    "airport_code": "OAG",
    "airport_name": "Springhill Airport",
    "name": "Arthurville",
    "lat": "-32.3833",
    "lon": "149.132",
    "country": "Australia"
  },
  {
    "airport_code": "OAJ",
    "airport_name": "Albert J Ellis Airport",
    "name": "Richlands",
    "lat": "34.8307",
    "lon": "-77.6053",
    "country": "United States"
  },
  {
    "airport_code": "OAK",
    "airport_name": "Oakland International Airport",
    "name": "Oakland",
    "lat": "37.7158",
    "lon": "-122.209",
    "country": "United States"
  },
  
  {
    "airport_code": "OAX",
    "airport_name": "Xoxocotlan Airport",
    "name": "San Bernardo Mixtepec",
    "lat": "16.9986",
    "lon": "-96.7264",
    "country": "Mexico"
  },
  {
    "airport_code": "OBN",
    "airport_name": "Oban Connel Airport",
    "name": "Oban",
    "lat": "56.4638",
    "lon": "-5.3973",
    "country": "United Kingdom"
  },
  {
    "airport_code": "OBO",
    "airport_name": "Obihiro Airport",
    "name": "Obihiro-shi",
    "lat": "42.7343",
    "lon": "143.216",
    "country": "Japan"
  },
  {
    "airport_code": "OBU",
    "airport_name": "Kobuk Airport",
    "name": "Kobuk",
    "lat": "66.9148",
    "lon": "-156.878",
    "country": "United States"
  },
  {
    "airport_code": "OBX",
    "airport_name": "Obo",
    "name": "Obo",
    "lat": "-7.58333",
    "lon": "141.333",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "OCC",
    "airport_name": "Coca Airport",
    "name": "Chontapunta",
    "lat": "-0.46532",
    "lon": "-76.979",
    "country": "Ecuador"
  },
  {
    "airport_code": "ODN",
    "airport_name": "Sarawak",
    "name": "Long Seridan",
    "lat": "2.91165",
    "lon": "112.609",
    "country": "Malaysia"
  },
  {
    "airport_code": "ODS",
    "airport_name": "Odessa Central Airport",
    "name": "Odesa",
    "lat": "46.4402",
    "lon": "30.6764",
    "country": "Ukraine"
  },
  {
    "airport_code": "ODW",
    "airport_name": "Oak Harbor Airpark",
    "name": "Oak Harbor",
    "lat": "48.2517",
    "lon": "-122.68",
    "country": "United States"
  },
  {
    "airport_code": "ODY",
    "airport_name": "Oudomxay",
    "name": "Oudomxay",
    "lat": "20.5833",
    "lon": "104.167",
    "country": "Lao People's Democratic Republic"
  },
  {
    "airport_code": "OER",
    "airport_name": "Ornskoldsvik Airport",
    "name": "Husum",
    "lat": "63.4113",
    "lon": "18.9916",
    "country": "Sweden"
  },
  {
    "airport_code": "OFI",
    "airport_name": "Ouango Fitini",
    "name": "Ouango Fitini",
    "lat": "9.6",
    "lon": "-4.03333",
    "country": "Cote D'Ivoire"
  },
  {
    "airport_code": "OGG",
    "airport_name": "Kahului Airport",
    "name": "Kahului",
    "lat": "20.8926",
    "lon": "-156.441",
    "country": "United States"
  },
  {
    "airport_code": "OGN",
    "airport_name": "Yonaguni Airport",
    "name": "Yonaguni-cho",
    "lat": "24.4674",
    "lon": "122.979",
    "country": "Japan"
  },
  {
    "airport_code": "OGS",
    "airport_name": "Ogdensburg International Airport",
    "name": "Ogdensburg",
    "lat": "44.6782",
    "lon": "-75.4765",
    "country": "United States"
  },
  {
    "airport_code": "OGX",
    "airport_name": "Ain Beida",
    "name": "Ouargla",
    "lat": "35.8764",
    "lon": "7.25695",
    "country": "Algeria"
  },
  {
    "airport_code": "OGZ",
    "airport_name": "Ordzhonikidze North Airport",
    "name": "Mozdok",
    "lat": "43.2065",
    "lon": "44.6105",
    "country": "Russia"
  },
  {
    "airport_code": "OHD",
    "airport_name": "Ohrid Airport",
    "name": "Ohrid",
    "lat": "41.1806",
    "lon": "20.7431",
    "country": "Macedonia"
  },
  {
    "airport_code": "OHE",
    "airport_name": "Hamburg Airport",
    "name": "Hamburg",
    "lat": "53.6321",
    "lon": "10.0042",
    "country": "Germany"
  },
  {
    "airport_code": "OHO",
    "airport_name": "Okhotsk Airport",
    "name": "Okhotsk",
    "lat": "59.4103",
    "lon": "143.062",
    "country": "Russia"
  },
  {
    "airport_code": "OIM",
    "airport_name": "Oshima Airport",
    "name": "Oshima-machi",
    "lat": "34.7828",
    "lon": "139.361",
    "country": "Japan"
  },
  {
    "airport_code": "OIT",
    "airport_name": "Oita Airport",
    "name": "Kunisaki-shi",
    "lat": "33.4801",
    "lon": "131.737",
    "country": "Japan"
  },
  {
    "airport_code": "OKA",
    "airport_name": "Shimojishima Airport",
    "name": "Naha-shi",
    "lat": "24.8289",
    "lon": "125.146",
    "country": "Japan"
  },
  {
    "airport_code": "OKC",
    "airport_name": "Will Rogers World Airport",
    "name": "Oklahoma City",
    "lat": "35.3981",
    "lon": "-97.5974",
    "country": "United States"
  },
  {
    "airport_code": "OKD",
    "airport_name": "Okadama Airport",
    "name": "Sapporo-shi",
    "lat": "43.1162",
    "lon": "141.382",
    "country": "Japan"
  },
  {
    "airport_code": "OKJ",
    "airport_name": "Okayama Airport",
    "name": "Okayama-shi",
    "lat": "34.7579",
    "lon": "133.855",
    "country": "Japan"
  },
  {
    "airport_code": "OKR",
    "airport_name": "",
    "name": "Yorke Island",
    "lat": "36.6159",
    "lon": "-85.1253",
    "country": "Australia"
  },
  {
    "airport_code": "OKY",
    "airport_name": "Oakey Aerodrome",
    "name": "Oakey",
    "lat": "-27.4086",
    "lon": "151.738",
    "country": "Australia"
  },
  {
    "airport_code": "OLA",
    "airport_name": "Orland Airport",
    "name": "Orland",
    "lat": "63.696",
    "lon": "9.60463",
    "country": "Norway"
  },
  {
    "airport_code": "OLB",
    "airport_name": "Olbia Costa Smeralda Airport",
    "name": "Terranova",
    "lat": "40.8994",
    "lon": "9.51616",
    "country": "Italy"
  },
  {
    "airport_code": "OLF",
    "airport_name": "L. M. Clayton Airport",
    "name": "Wolf Point",
    "lat": "48.0964",
    "lon": "-105.575",
    "country": "United States"
  },
  
  {
    "airport_code": "OLJ",
    "airport_name": "Malampa",
    "name": "Olpoi",
    "lat": "-16.2368",
    "lon": "167.492",
    "country": "Vanuatu"
  },
  {
    "airport_code": "OLP",
    "airport_name": "Olympic Dam Aerodrome",
    "name": "Roxby Downs",
    "lat": "-30.484",
    "lon": "136.878",
    "country": "Australia"
  },
  {
    "airport_code": "OMA",
    "airport_name": "Eppley Airfield",
    "name": "Omaha",
    "lat": "41.3",
    "lon": "-95.8998",
    "country": "United States"
  },
  {
    "airport_code": "OMB",
    "airport_name": "Omboué",
    "name": "Omboue",
    "lat": "-1.5778",
    "lon": "9.25386",
    "country": "Gabon"
  },
  {
    "airport_code": "OMC",
    "airport_name": "Ormoc Airport",
    "name": "Ormoc",
    "lat": "11.0611",
    "lon": "124.563",
    "country": "Philippines"
  },
  {
    "airport_code": "OMD",
    "airport_name": "Oranjemund Airport",
    "name": "Oranjemund",
    "lat": "-28.5956",
    "lon": "16.4436",
    "country": "Namibia"
  },
  {
    "airport_code": "OME",
    "airport_name": "Nome Airport",
    "name": "Nome",
    "lat": "64.5125",
    "lon": "-165.445",
    "country": "United States"
  },
  {
    "airport_code": "OMH",
    "airport_name": "Uromiyeh Airport",
    "name": "Urmieh",
    "lat": "37.6694",
    "lon": "45.0703",
    "country": "Iran"
  },
  {
    "airport_code": "OMO",
    "airport_name": "Mostar Airport",
    "name": "Mostar",
    "lat": "43.2836",
    "lon": "17.8467",
    "country": "Bosnia and Herzegovina"
  },
  {
    "airport_code": "OMR",
    "airport_name": "Oradea Airport",
    "name": "Oradea-Mare",
    "lat": "47.0249",
    "lon": "21.9292",
    "country": "Romania"
  },
  {
    "airport_code": "OMS",
    "airport_name": "Omsk Southwest Airport",
    "name": "Omsk",
    "lat": "54.9634",
    "lon": "73.3068",
    "country": "Russia"
  },
  {
    "airport_code": "OND",
    "airport_name": "Ondangwa Airport",
    "name": "Ondangwa",
    "lat": "-17.8783",
    "lon": "15.95",
    "country": "Namibia"
  },
  {
    "airport_code": "ONG",
    "airport_name": "Mornington Island Airport",
    "name": "Mornington",
    "lat": "-16.565",
    "lon": "139.434",
    "country": "Australia"
  },
  {
    "airport_code": "ONJ",
    "airport_name": "Odate-Noshiro Airport",
    "name": "Kitakita-shi",
    "lat": "40.1931",
    "lon": "140.366",
    "country": "Japan"
  },
  {
    "airport_code": "ONL",
    "airport_name": "The Oneill Municipal Airport",
    "name": "O'neill",
    "lat": "42.4655",
    "lon": "-98.6866",
    "country": "United States"
  },
  {
    "airport_code": "ONT",
    "airport_name": "Ontario International Airport",
    "name": "Ontario",
    "lat": "34.062",
    "lon": "-117.594",
    "country": "United States"
  },
  {
    "airport_code": "OOK",
    "airport_name": "Toksook Bay",
    "name": "Toksook Bay",
    "lat": "60.5334",
    "lon": "-165.114",
    "country": "United States"
  },
  {
    "airport_code": "OOL",
    "airport_name": "Gold Coast (Coolangatta)",
    "name": "Gold Coast",
    "lat": "51.188",
    "lon": "5.94811",
    "country": "Australia"
  },
  
  {
    "airport_code": "OPO",
    "airport_name": "Porto Airport",
    "name": "Maia",
    "lat": "41.2372",
    "lon": "-8.67341",
    "country": "Portugal"
  },
  {
    "airport_code": "OPS",
    "airport_name": "Sinop Airport",
    "name": "Sinop",
    "lat": "-11.8733",
    "lon": "-55.5733",
    "country": "Brazil"
  },
  {
    "airport_code": "OPU",
    "airport_name": "Balimo",
    "name": "Balimo",
    "lat": "-8",
    "lon": "142.906",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "ORB",
    "airport_name": "Orebro Airport",
    "name": "Orebro",
    "lat": "59.2279",
    "lon": "15.0455",
    "country": "Sweden"
  },
  {
    "airport_code": "ORD",
    "airport_name": "Chicago O'Hare International Airport",
    "name": "Chicago",
    "lat": "41.9796",
    "lon": "-87.8825",
    "country": "United States"
  },
  {
    "airport_code": "ORF",
    "airport_name": "Norfolk International Airport",
    "name": "Norfolk",
    "lat": "36.8977",
    "lon": "-76.2154",
    "country": "United States"
  },
  {
    "airport_code": "ORH",
    "airport_name": "Worcester Municipal Airport",
    "name": "Worcester",
    "lat": "42.2699",
    "lon": "-71.8706",
    "country": "United States"
  },
  
  {
    "airport_code": "ORJ",
    "airport_name": "Orinduik Airport",
    "name": "Rera",
    "lat": "4.71667",
    "lon": "-60.0333",
    "country": "Brazil"
  },
  {
    "airport_code": "ORK",
    "airport_name": "Cork Airport",
    "name": "Fivemilebridge",
    "lat": "51.8463",
    "lon": "-8.48897",
    "country": "Ireland"
  },
  
  {
    "airport_code": "ORN",
    "airport_name": "Es Senia Airport",
    "name": "Oran Rp",
    "lat": "35.6244",
    "lon": "-0.6186",
    "country": "Algeria"
  },
  {
    "airport_code": "ORV",
    "airport_name": "Curtis Memorial",
    "name": "Noorvik",
    "lat": "66.8333",
    "lon": "-161.033",
    "country": "United States"
  },
  {
    "airport_code": "ORY",
    "airport_name": "Paris Orly Airport",
    "name": "Paris",
    "lat": "48.7261",
    "lon": "2.36411",
    "country": "France"
  },
  {
    "airport_code": "OSD",
    "airport_name": "Ostersunds Airport",
    "name": "Frösö",
    "lat": "63.1972",
    "lon": "14.4933",
    "country": "Sweden"
  },
  {
    "airport_code": "OSI",
    "airport_name": "Osijek Airport",
    "name": "Osijek",
    "lat": "45.4639",
    "lon": "18.8083",
    "country": "Croatia"
  },
  {
    "airport_code": "OSK",
    "airport_name": "Oskarshamn Airport",
    "name": "Fårbo",
    "lat": "57.3517",
    "lon": "16.4956",
    "country": "Sweden"
  },
  {
    "airport_code": "OSL",
    "airport_name": "Oslo Gardermoen Airport",
    "name": "Gardermoen",
    "lat": "60.1947",
    "lon": "11.1005",
    "country": "Norway"
  },
  {
    "airport_code": "OSM",
    "airport_name": "Mosul Airport",
    "name": "Mosul",
    "lat": "36.3086",
    "lon": "43.1458",
    "country": "Iraq"
  },
  {
    "airport_code": "OSR",
    "airport_name": "Mosnov Airport",
    "name": "Mošnov",
    "lat": "49.6888",
    "lon": "18.1178",
    "country": "Czech Republic"
  },
  {
    "airport_code": "OSS",
    "airport_name": "Osh Airport",
    "name": "Osh",
    "lat": "40.6155",
    "lon": "72.7853",
    "country": "Kyrgyzstan"
  },
  {
    "airport_code": "OST",
    "airport_name": "Oostende Airport",
    "name": "Oostende",
    "lat": "51.2012",
    "lon": "2.8716",
    "country": "Belgium"
  },
  {
    "airport_code": "OSW",
    "airport_name": "Orsk",
    "name": "Orsk",
    "lat": "51.2085",
    "lon": "58.6325",
    "country": "Russia"
  },
  {
    "airport_code": "OSY",
    "airport_name": "Namsos Airport",
    "name": "Namsos",
    "lat": "64.4723",
    "lon": "11.5721",
    "country": "Norway"
  },
  {
    "airport_code": "OSZ",
    "airport_name": "Koszalin Airport",
    "name": "Sianów",
    "lat": "54.25",
    "lon": "16.25",
    "country": "Poland"
  },
  {
    "airport_code": "OTH",
    "airport_name": "North Bend Municipal Airport",
    "name": "North Bend",
    "lat": "43.4141",
    "lon": "-124.244",
    "country": "United States"
  },
  {
    "airport_code": "OTP",
    "airport_name": "Otopeni Airport",
    "name": "Bucharest",
    "lat": "44.5656",
    "lon": "26.1029",
    "country": "Romania"
  },
  {
    "airport_code": "OTR",
    "airport_name": "Coto 47 Airport",
    "name": "Coto 47",
    "lat": "8.6006",
    "lon": "-82.9694",
    "country": "Costa Rica"
  },
  {
    "airport_code": "OTZ",
    "airport_name": "Ralph Wien Memorial Airport",
    "name": "Kotzebue",
    "lat": "66.8893",
    "lon": "-162.61",
    "country": "United States"
  },
  {
    "airport_code": "OUA",
    "airport_name": "Ouagadougou Airport",
    "name": "Ouagadougou",
    "lat": "12.3522",
    "lon": "-1.5133",
    "country": "Burkina Faso"
  },
  {
    "airport_code": "OUD",
    "airport_name": "Angads Airport",
    "name": "Oujda",
    "lat": "34.7903",
    "lon": "-1.925",
    "country": "Morocco"
  },
  {
    "airport_code": "OUE",
    "airport_name": "Ouesso Airport",
    "name": "Ouesso",
    "lat": "1.6167",
    "lon": "16.0444",
    "country": "Congo"
  },
  {
    "airport_code": "OUL",
    "airport_name": "Oulu Airport",
    "name": "Oulunsalo",
    "lat": "64.9294",
    "lon": "25.3574",
    "country": "Finland"
  },
  {
    "airport_code": "OUZ",
    "airport_name": "Mauritania",
    "name": "Zouerate",
    "lat": "22.7337",
    "lon": "-12.4941",
    "country": "Mauritania"
  },
  {
    "airport_code": "OVB",
    "airport_name": "Tolmachevo Airport",
    "name": "Novosibirsk",
    "lat": "55.0078",
    "lon": "82.6508",
    "country": "Russia"
  },
  {
    "airport_code": "OVD",
    "airport_name": "Asturias Airport",
    "name": "Castrillón",
    "lat": "43.5596",
    "lon": "-6.03102",
    "country": "Spain"
  },
  {
    "airport_code": "OVS",
    "airport_name": "Boscobel Airport",
    "name": "Boscobel",
    "lat": "43.1537",
    "lon": "-90.6764",
    "country": "United States"
  },
  {
    "airport_code": "OXB",
    "airport_name": "Bissau Oswaldo Vieira Airport",
    "name": "Bissau",
    "lat": "11.8886",
    "lon": "-15.6575",
    "country": "Guinea-Bissau"
  },
  {
    "airport_code": "OXF",
    "airport_name": "Oxford Airport",
    "name": "Kidlington",
    "lat": "51.831",
    "lon": "-1.31029",
    "country": "United Kingdom"
  },
  {
    "airport_code": "OXR",
    "airport_name": "Oxnard Airport",
    "name": "Oxnard",
    "lat": "34.1984",
    "lon": "-119.206",
    "country": "United States"
  },
  {
    "airport_code": "OYE",
    "airport_name": "Oyem Airport",
    "name": "Oyem",
    "lat": "1.5353",
    "lon": "11.5803",
    "country": "Gabon"
  },
  {
    "airport_code": "OYG",
    "airport_name": "Moyo",
    "name": "Moyo",
    "lat": "3.64967",
    "lon": "31.7239",
    "country": "Uganda"
  },
  {
    "airport_code": "OZC",
    "airport_name": "Ozamis-Mindanao Island Airport",
    "name": "Ozamis City",
    "lat": "8.1822",
    "lon": "123.841",
    "country": "Philippines"
  },
  {
    "airport_code": "OZH",
    "airport_name": "Zaporozhye East Airport",
    "name": "Zaporizhzhya",
    "lat": "47.86",
    "lon": "35.3212",
    "country": "Ukraine"
  },
  {
    "airport_code": "OZZ",
    "airport_name": "Ouarzazate Airport",
    "name": "Ouarzazate",
    "lat": "30.9342",
    "lon": "-6.9031",
    "country": "Morocco"
  },
  {
    "airport_code": "PAD",
    "airport_name": "Paderborn-Lippstadt Airport",
    "name": "Büren",
    "lat": "51.6126",
    "lon": "8.61871",
    "country": "Germany"
  },
  {
    "airport_code": "PAH",
    "airport_name": "Barkley Regional Airport",
    "name": "West Paducah",
    "lat": "37.0612",
    "lon": "-88.7672",
    "country": "United States"
  },
  {
    "airport_code": "PAI",
    "airport_name": "Pailin Airport",
    "name": "Pailin",
    "lat": "12.85",
    "lon": "102.583",
    "country": "Cambodia"
  },
  {
    "airport_code": "PAP",
    "airport_name": "",
    "name": "Port Au Prince",
    "lat": "36.4215",
    "lon": "-83.3607",
    "country": "Haiti"
  },
  {
    "airport_code": "PAS",
    "airport_name": "Paros Island Airport",
    "name": "Levkai",
    "lat": "37.0683",
    "lon": "25.1975",
    "country": "Greece"
  },
  {
    "airport_code": "PAT",
    "airport_name": "Lok Nayak Jaiprakash Airport",
    "name": "Patna",
    "lat": "25.5914",
    "lon": "85.0866",
    "country": "India"
  },
  {
    "airport_code": "PAZ",
    "airport_name": "Tajin Airport",
    "name": "Castillo de Teayo",
    "lat": "20.6086",
    "lon": "-97.4717",
    "country": "Mexico"
  },
  {
    "airport_code": "PBC",
    "airport_name": "Puebla Airport",
    "name": "Tlaltenango",
    "lat": "19.1433",
    "lon": "-98.3714",
    "country": "Mexico"
  },
  {
    "airport_code": "PBD",
    "airport_name": "Porbandar Airport",
    "name": "Porbandar",
    "lat": "21.6489",
    "lon": "69.6567",
    "country": "India"
  },
  
  {
    "airport_code": "PBH",
    "airport_name": "Paro Airport",
    "name": "Paro",
    "lat": "27.4033",
    "lon": "89.4292",
    "country": "Bhutan"
  },
  {
    "airport_code": "PBI",
    "airport_name": "Palm Beach International Airport",
    "name": "West Palm Beach",
    "lat": "26.6909",
    "lon": "-80.0889",
    "country": "United States"
  },
  {
    "airport_code": "PBJ",
    "airport_name": "Malampa",
    "name": "Paama",
    "lat": "-16.2368",
    "lon": "167.492",
    "country": "Vanuatu"
  },
  {
    "airport_code": "PBM",
    "airport_name": "Zandery Airport",
    "name": "Sabakoe",
    "lat": "5.45",
    "lon": "-55.1867",
    "country": "Suriname"
  },
  {
    "airport_code": "PBO",
    "airport_name": "Paraburdoo Airport",
    "name": "Paraburdoo",
    "lat": "-23.1688",
    "lon": "117.748",
    "country": "Australia"
  },
  {
    "airport_code": "PBP",
    "airport_name": "Punta Islita Airport",
    "name": "Punta Islita",
    "lat": "9.85917",
    "lon": "-85.3692",
    "country": "Costa Rica"
  },
  {
    "airport_code": "PBU",
    "airport_name": "Putao Airport",
    "name": "Putao",
    "lat": "27.33",
    "lon": "97.4306",
    "country": "Myanmar"
  },
  {
    "airport_code": "PCE",
    "airport_name": "Painter Creek",
    "name": "Painter Creek",
    "lat": "57.093",
    "lon": "-157.258",
    "country": "United States"
  },
  {
    "airport_code": "PCL",
    "airport_name": "Pucallpa Airport",
    "name": "Callaria",
    "lat": "-8.3753",
    "lon": "-74.5731",
    "country": "Peru"
  },
  {
    "airport_code": "PCR",
    "airport_name": "Puerto Carreno Airport",
    "name": "Puerto Carreño",
    "lat": "6.18333",
    "lon": "-67.6333",
    "country": "Colombia"
  },
  {
    "airport_code": "PDA",
    "airport_name": "Puerto Inirida Airport",
    "name": "Guaviare",
    "lat": "3.95607",
    "lon": "-67.784",
    "country": "Colombia"
  },
  {
    "airport_code": "PDB",
    "airport_name": "Pedro Bay",
    "name": "Pedro Bay",
    "lat": "59.7868",
    "lon": "-154.105",
    "country": "United States"
  },
  {
    "airport_code": "PDG",
    "airport_name": "Tabing Airport",
    "name": "Padang",
    "lat": "-0.8794",
    "lon": "100.352",
    "country": "Indonesia"
  },
  {
    "airport_code": "PDL",
    "airport_name": "Ponta Delgada Airport",
    "name": "Ponta Delgada",
    "lat": "37.7375",
    "lon": "-25.6983",
    "country": "Portugal"
  },
  {
    "airport_code": "PDP",
    "airport_name": "Maldonado Airport",
    "name": "Punta del Este",
    "lat": "-34.9111",
    "lon": "-54.9197",
    "country": "Uruguay"
  },
  {
    "airport_code": "PDS",
    "airport_name": "Piedras Negras International Airport",
    "name": "Piedras Negras",
    "lat": "28.7",
    "lon": "-100.55",
    "country": "Mexico"
  },
  {
    "airport_code": "PDT",
    "airport_name": "Eastern Oregon Regional Airport",
    "name": "Pendleton",
    "lat": "45.6893",
    "lon": "-118.839",
    "country": "United States"
  },
  {
    "airport_code": "PDX",
    "airport_name": "Portland International Airport",
    "name": "Portland",
    "lat": "45.5867",
    "lon": "-122.587",
    "country": "United States"
  },
  {
    "airport_code": "PEC",
    "airport_name": "Pelican Sea Plane Base",
    "name": "Pelican",
    "lat": "57.95",
    "lon": "-136.233",
    "country": "United States"
  },
  
  {
    "airport_code": "PEE",
    "airport_name": "Bolshesavino Airport",
    "name": "Perm'",
    "lat": "57.9114",
    "lon": "56.0174",
    "country": "Russia"
  },
  {
    "airport_code": "PEG",
    "airport_name": "Perugia Airport",
    "name": "Assisi",
    "lat": "43.1021",
    "lon": "12.5075",
    "country": "Italy"
  },
  {
    "airport_code": "PEI",
    "airport_name": "Matecana Airport",
    "name": "Pereira",
    "lat": "4.8147",
    "lon": "-75.745",
    "country": "Colombia"
  },
  {
    "airport_code": "PEK",
    "airport_name": "Beijing Capital Airport",
    "name": "Shunyi",
    "lat": "40.0724",
    "lon": "116.583",
    "country": "China"
  },
  {
    "airport_code": "PEM",
    "airport_name": "Padre Aldamiz Airport",
    "name": "Puerto Maldonado",
    "lat": "-12.6128",
    "lon": "-69.2297",
    "country": "Peru"
  },
  {
    "airport_code": "PEN",
    "airport_name": "Penang International Airport",
    "name": "Batu Maung",
    "lat": "5.2975",
    "lon": "100.278",
    "country": "Malaysia"
  },
  {
    "airport_code": "PER",
    "airport_name": "Perth International Airport",
    "name": "Perth",
    "lat": "-31.9336",
    "lon": "115.961",
    "country": "Australia"
  },
  {
    "airport_code": "PES",
    "airport_name": "Petrozavodsk Northwest Airport",
    "name": "Petrozavodsk",
    "lat": "61.8886",
    "lon": "34.1452",
    "country": "Russia"
  },
  {
    "airport_code": "PET",
    "airport_name": "Pelotas Airport",
    "name": "Pelotas",
    "lat": "-31.7181",
    "lon": "-52.3244",
    "country": "Brazil"
  },
  {
    "airport_code": "PEU",
    "airport_name": "Puerto Lempira Airport",
    "name": "Puerto Lempira",
    "lat": "15.2404",
    "lon": "-83.7794",
    "country": "Honduras"
  },
  {
    "airport_code": "PEW",
    "airport_name": "Peshawar Airport",
    "name": "Peshawar",
    "lat": "33.9933",
    "lon": "71.515",
    "country": "Pakistan"
  },
  {
    "airport_code": "PEX",
    "airport_name": "Pechora Southwest Airport",
    "name": "Ukhta",
    "lat": "65.1179",
    "lon": "57.1095",
    "country": "Russia"
  },
  
  {
    "airport_code": "PFB",
    "airport_name": "Lauro Kurtz Airport",
    "name": "Passo Fundo",
    "lat": "-28.2447",
    "lon": "-52.3317",
    "country": "Brazil"
  },
  {
    "airport_code": "PFN",
    "airport_name": "Panama City Bay County Airport",
    "name": "Panama City",
    "lat": "30.2071",
    "lon": "-85.6829",
    "country": "United States"
  },
  {
    "airport_code": "PFO",
    "airport_name": "Paphos International Airport",
    "name": "Paphos",
    "lat": "34.7194",
    "lon": "32.4847",
    "country": "Cyprus"
  },
  {
    "airport_code": "PFQ",
    "airport_name": "",
    "name": "Parsabad",
    "lat": "39.6053",
    "lon": "47.8758",
    "country": "Iran"
  },
  {
    "airport_code": "PGA",
    "airport_name": "Page Municipal Airport",
    "name": "Page",
    "lat": "36.9243",
    "lon": "-111.451",
    "country": "United States"
  },
  {
    "airport_code": "PGF",
    "airport_name": "Rivesaltes Airport",
    "name": "Perpignan",
    "lat": "42.74",
    "lon": "2.8692",
    "country": "France"
  },
  {
    "airport_code": "PGK",
    "airport_name": "Pangkalpinang Airport",
    "name": "Pangkalpinang",
    "lat": "-2.1606",
    "lon": "106.141",
    "country": "Indonesia"
  },
  {
    "airport_code": "PGM",
    "airport_name": "Port Graham",
    "name": "Port Graham",
    "lat": "59.35",
    "lon": "-151.833",
    "country": "United States"
  },
  {
    "airport_code": "PGU",
    "airport_name": "Page Municipal Airport",
    "name": "Asalouyeh",
    "lat": "36.9243",
    "lon": "-111.451",
    "country": "Iran"
  },
  {
    "airport_code": "PGV",
    "airport_name": "Pitt Greenville Airport",
    "name": "Greenville",
    "lat": "35.6336",
    "lon": "-77.3808",
    "country": "United States"
  },
  {
    "airport_code": "PGX",
    "airport_name": "Bassillac Airport",
    "name": "St-Pierre",
    "lat": "45.1951",
    "lon": "0.81208",
    "country": "France"
  },
  {
    "airport_code": "PHC",
    "airport_name": "Port Harcourt International Airport",
    "name": "Port Harcourt",
    "lat": "5.0125",
    "lon": "6.9625",
    "country": "Nigeria"
  },
  {
    "airport_code": "PHE",
    "airport_name": "Port Hedland Airport",
    "name": "Port Hedland",
    "lat": "-20.3772",
    "lon": "118.63",
    "country": "Australia"
  },
  {
    "airport_code": "PHF",
    "airport_name": "Newport News-Williamsburg International Airport",
    "name": "Newport News",
    "lat": "37.1306",
    "lon": "-76.5026",
    "country": "United States"
  },
  {
    "airport_code": "PHG",
    "airport_name": "Port Harcourt City",
    "name": "Port Harcourt",
    "lat": "4.85",
    "lon": "7.01667",
    "country": "Nigeria"
  },
  {
    "airport_code": "PHL",
    "airport_name": "Philadelphia International Airport",
    "name": "Philadelphia",
    "lat": "39.8768",
    "lon": "-75.2419",
    "country": "United States"
  },
  {
    "airport_code": "PHO",
    "airport_name": "Point Hope Airport",
    "name": "Point Hope",
    "lat": "68.3494",
    "lon": "-166.797",
    "country": "United States"
  },
  {
    "airport_code": "PHS",
    "airport_name": "Phitsanulok Airport",
    "name": "Phitsanulok",
    "lat": "16.7861",
    "lon": "100.278",
    "country": "Thailand"
  },
  {
    "airport_code": "PHW",
    "airport_name": "Hendrik Van Eck Airport",
    "name": "Phalaborwa",
    "lat": "-23.9336",
    "lon": "31.1561",
    "country": "South Africa"
  },
  {
    "airport_code": "PHX",
    "airport_name": "Sky Harbor International Airport",
    "name": "Phoenix",
    "lat": "33.4376",
    "lon": "-112.03",
    "country": "United States"
  },
  {
    "airport_code": "PIA",
    "airport_name": "Greater Peoria Regional Airport",
    "name": "Peoria",
    "lat": "40.6663",
    "lon": "-89.6909",
    "country": "United States"
  },
  {
    "airport_code": "PIB",
    "airport_name": "Pine Belt Regional Airport",
    "name": "Moselle",
    "lat": "31.4671",
    "lon": "-89.3333",
    "country": "United States"
  },
  {
    "airport_code": "PIE",
    "airport_name": "St. Petersburg-Clearwater International Airport",
    "name": "Clearwater",
    "lat": "27.9065",
    "lon": "-82.6924",
    "country": "United States"
  },
  {
    "airport_code": "PIF",
    "airport_name": "Pingdong Airport",
    "name": "Pingtung",
    "lat": "22.6781",
    "lon": "120.471",
    "country": "Taiwan"
  },
  {
    "airport_code": "PIH",
    "airport_name": "Pocatello Municipal Airport",
    "name": "Pocatello",
    "lat": "42.9056",
    "lon": "-112.588",
    "country": "United States"
  },
  {
    "airport_code": "PIK",
    "airport_name": "Glasgow Prestwick International Airport",
    "name": "Prestwick",
    "lat": "55.5091",
    "lon": "-4.6109",
    "country": "United Kingdom"
  },
  {
    "airport_code": "PIN",
    "airport_name": "Parintins Airport",
    "name": "Parintins",
    "lat": "-2.6658",
    "lon": "-56.7822",
    "country": "Brazil"
  },
  {
    "airport_code": "PIP",
    "airport_name": "Pilot Point Airport",
    "name": "Pilot Point",
    "lat": "57.5631",
    "lon": "-157.558",
    "country": "United States"
  },
  {
    "airport_code": "PIR",
    "airport_name": "Pierre Municipal Airport",
    "name": "Pierre",
    "lat": "44.3801",
    "lon": "-100.293",
    "country": "United States"
  },
  {
    "airport_code": "PIS",
    "airport_name": "Biard Airport",
    "name": "Vouneuil-sous-Biard",
    "lat": "46.5859",
    "lon": "0.31135",
    "country": "France"
  },
  {
    "airport_code": "PIT",
    "airport_name": "Pittsburgh International Airport",
    "name": "Coraopolis",
    "lat": "40.4914",
    "lon": "-80.2328",
    "country": "United States"
  },
  {
    "airport_code": "PIU",
    "airport_name": "Capitan Concha Airport",
    "name": "Piura",
    "lat": "-5.2022",
    "lon": "-80.6142",
    "country": "Peru"
  },
  
  {
    "airport_code": "PIX",
    "airport_name": "Pico Airport",
    "name": "Madalena",
    "lat": "38.5539",
    "lon": "-28.4442",
    "country": "Portugal"
  },
  {
    "airport_code": "PIZ",
    "airport_name": "Dew Station",
    "name": "Point Lay",
    "lat": "69.7333",
    "lon": "-163.017",
    "country": "United States"
  },
  {
    "airport_code": "PJA",
    "airport_name": "Sweden",
    "name": "Pajala",
    "lat": "62.1984",
    "lon": "17.5514",
    "country": "Sweden"
  },
  {
    "airport_code": "PJG",
    "airport_name": "Panjgur Airport",
    "name": "Panjgur",
    "lat": "26.9547",
    "lon": "64.1331",
    "country": "Pakistan"
  },
  {
    "airport_code": "PJM",
    "airport_name": "Puerto Jimenez Airport",
    "name": "Puerto Jiménez",
    "lat": "8.53994",
    "lon": "-83.3227",
    "country": "Costa Rica"
  },
  {
    "airport_code": "PKA",
    "airport_name": "Alaska",
    "name": "Napaskiak",
    "lat": "60.7049",
    "lon": "-161.766",
    "country": "United States"
  },
  {
    "airport_code": "PKB",
    "airport_name": "Wood County Airport-Gill Robb Wilson Field",
    "name": "Williamstown",
    "lat": "39.3462",
    "lon": "-81.4345",
    "country": "United States"
  },
  {
    "airport_code": "PKC",
    "airport_name": "Petropavlovsk Yelizovo Airport",
    "name": "Elizovo",
    "lat": "53.1663",
    "lon": "158.447",
    "country": "Russia"
  },
  {
    "airport_code": "PKE",
    "airport_name": "Parkes Airport",
    "name": "Parkes",
    "lat": "-33.1358",
    "lon": "148.235",
    "country": "Australia"
  },
  {
    "airport_code": "PKG",
    "airport_name": "Pangkor Airport",
    "name": "Pangkor",
    "lat": "4.21667",
    "lon": "100.55",
    "country": "Malaysia"
  },
  {
    "airport_code": "PKK",
    "airport_name": "Pakokku",
    "name": "Pakokku",
    "lat": "21.3333",
    "lon": "95.1",
    "country": "Myanmar"
  },
  {
    "airport_code": "PKP",
    "airport_name": "French Polynesia",
    "name": "Puka Puka",
    "lat": "-8.64687",
    "lon": "-131.787",
    "country": "French Polynesia"
  },
  {
    "airport_code": "PKR",
    "airport_name": "Pokhara Airport",
    "name": "Pokhara",
    "lat": "28.2",
    "lon": "83.9833",
    "country": "Nepal"
  },
  {
    "airport_code": "PKU",
    "airport_name": "Simpang Tiga Airport",
    "name": "Pekanbaru",
    "lat": "0.4642",
    "lon": "101.439",
    "country": "Indonesia"
  },
  {
    "airport_code": "PKY",
    "airport_name": "Tjilik Riwut Airport",
    "name": "Buntok",
    "lat": "-2.2228",
    "lon": "113.938",
    "country": "Indonesia"
  },
  {
    "airport_code": "PKZ",
    "airport_name": "Pakse Airport",
    "name": "Pakxe",
    "lat": "15.1303",
    "lon": "105.785",
    "country": "Laos"
  },
  {
    "airport_code": "PLD",
    "airport_name": "Playa Samara Airport",
    "name": "Nicoya",
    "lat": "9.88107",
    "lon": "-85.5507",
    "country": "Costa Rica"
  },
  {
    "airport_code": "PLH",
    "airport_name": "Roborough Airport",
    "name": "Plymouth",
    "lat": "50.423",
    "lon": "-4.11154",
    "country": "United Kingdom"
  },
  {
    "airport_code": "PLJ",
    "airport_name": "Belize",
    "name": "Placencia",
    "lat": "17.1929",
    "lon": "-88.6528",
    "country": "Belize"
  },
  {
    "airport_code": "PLM",
    "airport_name": "Sultan Mahmud Badaruddin Ii Airport",
    "name": "Palembang",
    "lat": "-2.9003",
    "lon": "104.698",
    "country": "Indonesia"
  },
  {
    "airport_code": "PLN",
    "airport_name": "Pellston Regional Airport",
    "name": "Pellston",
    "lat": "45.571",
    "lon": "-84.7857",
    "country": "United States"
  },
  {
    "airport_code": "PLO",
    "airport_name": "Port Lincoln Airport",
    "name": "Port Lincoln",
    "lat": "-34.6041",
    "lon": "135.879",
    "country": "Australia"
  },
  {
    "airport_code": "PLQ",
    "airport_name": "Palanga International",
    "name": "Klaipeda/Palanga",
    "lat": "55.9661",
    "lon": "21.0825",
    "country": "Lithuania"
  },
  {
    "airport_code": "PLS",
    "airport_name": "Providenciales Airport",
    "name": "The Bight Settlements",
    "lat": "21.7728",
    "lon": "-72.2683",
    "country": "Turks And Caicos Islands"
  },
  {
    "airport_code": "PLU",
    "airport_name": "Pampulha Airport",
    "name": "Belo Horizonte",
    "lat": "-19.8517",
    "lon": "-43.9508",
    "country": "Brazil"
  },
  {
    "airport_code": "PLW",
    "airport_name": "Mutiara Airport",
    "name": "Palu",
    "lat": "-0.917694",
    "lon": "119.909",
    "country": "Indonesia"
  },
  {
    "airport_code": "PLX",
    "airport_name": "",
    "name": "Semipalatinsk",
    "lat": "50.3517",
    "lon": "80.2336",
    "country": "Kazakhstan"
  },
  {
    "airport_code": "PLZ",
    "airport_name": "H F Verwoerd Airport",
    "name": "Port Elizabeth",
    "lat": "-33.9861",
    "lon": "25.6139",
    "country": "South Africa"
  },
  {
    "airport_code": "PMA",
    "airport_name": "Pemba Airport",
    "name": "Pemba",
    "lat": "-5.2539",
    "lon": "39.8125",
    "country": "Tanzania"
  },
  {
    "airport_code": "PMC",
    "airport_name": "El Tepual International Airport",
    "name": "Los Quemas",
    "lat": "-41.4319",
    "lon": "-73.0928",
    "country": "Chile"
  },
  
  
  {
    "airport_code": "PMF",
    "airport_name": "Parma Airport",
    "name": "Parma",
    "lat": "44.8232",
    "lon": "10.2949",
    "country": "Italy"
  },
  {
    "airport_code": "PMI",
    "airport_name": "Palma de Mallorca Airport",
    "name": "Palma",
    "lat": "39.5495",
    "lon": "2.73188",
    "country": "Spain"
  },
  
  {
    "airport_code": "PMO",
    "airport_name": "Palermo Airport",
    "name": "Cinisi",
    "lat": "38.1822",
    "lon": "13.1031",
    "country": "Italy"
  },
  {
    "airport_code": "PMR",
    "airport_name": "Palmerston North Airport",
    "name": "Palmerston North",
    "lat": "-40.3227",
    "lon": "175.611",
    "country": "New Zealand"
  },
  {
    "airport_code": "PMV",
    "airport_name": "Del Caribe International Airport",
    "name": "Pampatar",
    "lat": "10.9167",
    "lon": "-63.98",
    "country": "Venezuela"
  },
  {
    "airport_code": "PMW",
    "airport_name": "Palmas Airport",
    "name": "Palmas",
    "lat": "-10.2417",
    "lon": "-48.3528",
    "country": "Brazil"
  },
  {
    "airport_code": "PMY",
    "airport_name": "El Tehuelche Airport",
    "name": "Puerto Madryn",
    "lat": "-42.7597",
    "lon": "-65.11",
    "country": "Argentina"
  },
  {
    "airport_code": "PMZ",
    "airport_name": "Palmar Sur Airport",
    "name": "Palmar Sur",
    "lat": "8.9531",
    "lon": "-83.4703",
    "country": "Costa Rica"
  },
  {
    "airport_code": "PNA",
    "airport_name": "Pamplona Airport",
    "name": "Noáin",
    "lat": "42.7672",
    "lon": "-1.64017",
    "country": "Spain"
  },
  {
    "airport_code": "PND",
    "airport_name": "Punta Gorda Airport",
    "name": "Punta Gorda",
    "lat": "16.0977",
    "lon": "-88.8303",
    "country": "Belize"
  },
  {
    "airport_code": "PNH",
    "airport_name": "Pochentong Airport",
    "name": "Phnom Penh",
    "lat": "11.5458",
    "lon": "104.849",
    "country": "Cambodia"
  },
  {
    "airport_code": "PNI",
    "airport_name": "Pohnpei International Airport",
    "name": "Palikir",
    "lat": "6.9847",
    "lon": "158.215",
    "country": "Federated States of Micronesia"
  },
  {
    "airport_code": "PNK",
    "airport_name": "Supadio Airport",
    "name": "Pontianak",
    "lat": "-0.1481",
    "lon": "109.403",
    "country": "Indonesia"
  },
  {
    "airport_code": "PNL",
    "airport_name": "Pantelleria Airport",
    "name": "Pantelleria",
    "lat": "36.8185",
    "lon": "11.963",
    "country": "Italy"
  },
  {
    "airport_code": "PNP",
    "airport_name": "Girua Airport",
    "name": "Popondetta",
    "lat": "-8.8056",
    "lon": "148.309",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "PNQ",
    "airport_name": "Pune Airport",
    "name": "Pune",
    "lat": "18.5817",
    "lon": "73.9206",
    "country": "India"
  },
  {
    "airport_code": "PNR",
    "airport_name": "Pointe Noire Airport",
    "name": "Pointe-Noire",
    "lat": "-4.8128",
    "lon": "11.8856",
    "country": "Congo"
  },
  {
    "airport_code": "PNS",
    "airport_name": "Pensacola Regional Airport",
    "name": "Pensacola",
    "lat": "30.4761",
    "lon": "-87.1941",
    "country": "United States"
  },
  {
    "airport_code": "PNZ",
    "airport_name": "Senador Nilo Coelho Airport",
    "name": "Petrolina",
    "lat": "-9.3647",
    "lon": "-40.5658",
    "country": "Brazil"
  },
  {
    "airport_code": "POA",
    "airport_name": "Salgado Filho International Airport",
    "name": "Porto Alegre",
    "lat": "-29.9933",
    "lon": "-51.1708",
    "country": "Brazil"
  },
  {
    "airport_code": "POG",
    "airport_name": "Port Gentil Airport",
    "name": "Port-Gentil",
    "lat": "-0.7197",
    "lon": "8.7514",
    "country": "Gabon"
  },
  {
    "airport_code": "POL",
    "airport_name": "Pemba Airport",
    "name": "Pemba",
    "lat": "-12.9883",
    "lon": "40.5225",
    "country": "Mozambique"
  },
  {
    "airport_code": "POM",
    "airport_name": "Port Moresby International Airport",
    "name": "Port Moresby",
    "lat": "-9.4425",
    "lon": "147.219",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "POP",
    "airport_name": "Puerto Plata International Airport",
    "name": "San Felipe de Puerto Plata",
    "lat": "19.7575",
    "lon": "-70.5692",
    "country": "Dominican Republic"
  },
  {
    "airport_code": "POR",
    "airport_name": "Pori Airport",
    "name": "Pori",
    "lat": "61.462",
    "lon": "21.7988",
    "country": "Finland"
  },
  {
    "airport_code": "POS",
    "airport_name": "Piarco Airport",
    "name": "Trinidad",
    "lat": "10.5936",
    "lon": "-61.3386",
    "country": "Trinidad and Tobago"
  },
  {
    "airport_code": "POZ",
    "airport_name": "Lawica Airport",
    "name": "Poznan",
    "lat": "52.4284",
    "lon": "16.8208",
    "country": "Poland"
  },
  {
    "airport_code": "PPB",
    "airport_name": "Presidente Prudente Airport",
    "name": "Presidente Prudente",
    "lat": "-22.1778",
    "lon": "-51.4208",
    "country": "Brazil"
  },
  
  {
    "airport_code": "PPG",
    "airport_name": "Pago Pago International Airport",
    "name": "Pago Pago",
    "lat": "-14.3242",
    "lon": "-170.706",
    "country": "United States"
  },
  {
    "airport_code": "PPK",
    "airport_name": "Petropavlovsk",
    "name": "Petropavlovsk",
    "lat": "54.7833",
    "lon": "69.1833",
    "country": "Kazakhstan"
  },
  
  {
    "airport_code": "PPN",
    "airport_name": "Guillermo Leon Valencia Airport",
    "name": "Popayán",
    "lat": "2.45",
    "lon": "-76.6164",
    "country": "Colombia"
  },
  {
    "airport_code": "PPP",
    "airport_name": "Proserpine Aerodrome",
    "name": "Brandy Creek",
    "lat": "-20.4939",
    "lon": "148.554",
    "country": "Australia"
  },
  {
    "airport_code": "PPS",
    "airport_name": "Puerto Princesa International Airport",
    "name": "Puerto Princesa",
    "lat": "9.7433",
    "lon": "118.756",
    "country": "Philippines"
  },
  {
    "airport_code": "PPT",
    "airport_name": "Tahiti Faaa Airport",
    "name": "Papeete",
    "lat": "-17.5578",
    "lon": "-149.611",
    "country": "French Polynesia"
  },
  {
    "airport_code": "PPV",
    "airport_name": "Alaska",
    "name": "Port Protection",
    "lat": "62.8903",
    "lon": "-149.054",
    "country": "United States"
  },
  {
    "airport_code": "PQC",
    "airport_name": "Duong Dong Airport",
    "name": "Kien Giang",
    "lat": "10.2233",
    "lon": "103.958",
    "country": "Vietnam"
  },
  {
    "airport_code": "PQI",
    "airport_name": "Northern Maine Regional Airport",
    "name": "Presque Isle",
    "lat": "46.6921",
    "lon": "-68.0447",
    "country": "United States"
  },
  {
    "airport_code": "PQQ",
    "airport_name": "Port Macquarie Airport",
    "name": "Port Macquarie",
    "lat": "-31.4309",
    "lon": "152.866",
    "country": "Australia"
  },
  {
    "airport_code": "PQS",
    "airport_name": "Pilot Station",
    "name": "Pilot Station",
    "lat": "61.9362",
    "lon": "-162.882",
    "country": "United States"
  },
  {
    "airport_code": "PRC",
    "airport_name": "Ernest A Love Field Airport",
    "name": "Prescott",
    "lat": "34.6492",
    "lon": "-112.428",
    "country": "United States"
  },
  {
    "airport_code": "PRG",
    "airport_name": "Prague Ruzyne Airport",
    "name": "Prague 6",
    "lat": "50.1079",
    "lon": "14.2675",
    "country": "Czech Republic"
  },
  {
    "airport_code": "PRI",
    "airport_name": "Praslin Airport",
    "name": "Praslin Island",
    "lat": "-4.3158",
    "lon": "55.6958",
    "country": "Seychelles"
  },
  {
    "airport_code": "PRN",
    "airport_name": "Pristina Airport",
    "name": "Prishtina",
    "lat": "42.5753",
    "lon": "21.0364",
    "country": "Serbia"
  },
  {
    "airport_code": "PSA",
    "airport_name": "Pisa Airport",
    "name": "Pisa",
    "lat": "43.6959",
    "lon": "10.3976",
    "country": "Italy"
  },
  {
    "airport_code": "PSC",
    "airport_name": "Tri Cities Airport",
    "name": "Pasco",
    "lat": "46.2592",
    "lon": "-119.117",
    "country": "United States"
  },
  {
    "airport_code": "PSE",
    "airport_name": "Mercedita Airport",
    "name": "Coto Laurel",
    "lat": "18.0116",
    "lon": "-66.5664",
    "country": "United States"
  },
  {
    "airport_code": "PSG",
    "airport_name": "Petersburg James A Johnson Airport",
    "name": "Petersburg",
    "lat": "56.8067",
    "lon": "-132.933",
    "country": "United States"
  },
  {
    "airport_code": "PSO",
    "airport_name": "Antonio Narino Airport",
    "name": "Chachagüí",
    "lat": "1.4108",
    "lon": "-77.2922",
    "country": "Colombia"
  },
  {
    "airport_code": "PSP",
    "airport_name": "Palm Springs International Airport",
    "name": "Palm Springs",
    "lat": "33.8227",
    "lon": "-116.509",
    "country": "United States"
  },
  {
    "airport_code": "PSR",
    "airport_name": "Pescara Airport",
    "name": "Pescara",
    "lat": "42.4337",
    "lon": "14.1846",
    "country": "Italy"
  },
  {
    "airport_code": "PSS",
    "airport_name": "Posadas Airport",
    "name": "Posadas",
    "lat": "-27.3839",
    "lon": "-55.9675",
    "country": "Argentina"
  },
  {
    "airport_code": "PSZ",
    "airport_name": "Salvador Ogaya Gutierrez Airport",
    "name": "Puerto Suárez",
    "lat": "-18.9747",
    "lon": "-57.8194",
    "country": "Bolivia"
  },
  {
    "airport_code": "PTA",
    "airport_name": "Port Alsworth",
    "name": "Port Alsworth",
    "lat": "60.3956",
    "lon": "-154.494",
    "country": "United States"
  },
  {
    "airport_code": "PTF",
    "airport_name": "Malololailai Airport",
    "name": "Malololailai",
    "lat": "-17.7818",
    "lon": "177.2",
    "country": "Fiji"
  },
  {
    "airport_code": "PTG",
    "airport_name": "Pietersburg Municipal Airport",
    "name": "Pietersburg",
    "lat": "-23.9236",
    "lon": "29.4833",
    "country": "South Africa"
  },
  {
    "airport_code": "PTH",
    "airport_name": "Port Heiden Airport",
    "name": "Port Heiden",
    "lat": "56.9667",
    "lon": "-158.633",
    "country": "United States"
  },
  {
    "airport_code": "PTP",
    "airport_name": "Le Raizet Airport",
    "name": "Les Abymes",
    "lat": "16.2675",
    "lon": "-61.5281",
    "country": "Guadeloupe"
  },
  {
    "airport_code": "PTU",
    "airport_name": "Platinum",
    "name": "Platinum",
    "lat": "58.9216",
    "lon": "-161.727",
    "country": "United States"
  },
  {
    "airport_code": "PTY",
    "airport_name": "Tocumen International Airport",
    "name": "Tocumen",
    "lat": "9.07",
    "lon": "-79.3836",
    "country": "Panama"
  },
  {
    "airport_code": "PUB",
    "airport_name": "Pueblo Memorial Airport",
    "name": "Pueblo",
    "lat": "38.2836",
    "lon": "-104.496",
    "country": "United States"
  },
  {
    "airport_code": "PUF",
    "airport_name": "Pont Long Uzein Airport",
    "name": "Lescar",
    "lat": "43.3823",
    "lon": "-0.4166",
    "country": "France"
  },
  {
    "airport_code": "PUJ",
    "airport_name": "Punta Cana Airport",
    "name": "Salvaleón de Higüey",
    "lat": "18.5675",
    "lon": "-68.3469",
    "country": "Dominican Republic"
  },
  {
    "airport_code": "PUK",
    "airport_name": "",
    "name": "Pukarua",
    "lat": "21.0754",
    "lon": "-156.793",
    "country": "French Polynesia"
  },
  {
    "airport_code": "PUQ",
    "airport_name": "Carlos Ibanez de Campo International Airport",
    "name": "Punta Arenas",
    "lat": "-53.0033",
    "lon": "-70.8558",
    "country": "Chile"
  },
  {
    "airport_code": "PUS",
    "airport_name": "Kimhae International Airport",
    "name": "Busan",
    "lat": "35.1777",
    "lon": "128.937",
    "country": "South Korea"
  },
  {
    "airport_code": "PUU",
    "airport_name": "Puerto Asis Airport",
    "name": "Puerto Asís",
    "lat": "0.5061",
    "lon": "-76.5022",
    "country": "Colombia"
  },
  {
    "airport_code": "PUW",
    "airport_name": "Pullman-Moscow Regional Airport",
    "name": "Pullman",
    "lat": "46.743",
    "lon": "-117.119",
    "country": "United States"
  },
  {
    "airport_code": "PUY",
    "airport_name": "Pula Airport",
    "name": "Pluj",
    "lat": "44.8939",
    "lon": "13.9272",
    "country": "Croatia"
  },
  {
    "airport_code": "PVA",
    "airport_name": "Providencia Island Airport",
    "name": "San Andrés",
    "lat": "13.3577",
    "lon": "-81.3535",
    "country": "Colombia"
  },
  {
    "airport_code": "PVC",
    "airport_name": "Provincetown Municipal Airport",
    "name": "Provincetown",
    "lat": "42.0771",
    "lon": "-70.2169",
    "country": "United States"
  },
  {
    "airport_code": "PVD",
    "airport_name": "Theodore Francis Green State Airport",
    "name": "Warwick",
    "lat": "41.723",
    "lon": "-71.4399",
    "country": "United States"
  },
  {
    "airport_code": "PVG",
    "airport_name": "Pudong International Airport",
    "name": "Huinan",
    "lat": "31.1156",
    "lon": "121.803",
    "country": "China"
  },
  {
    "airport_code": "PVH",
    "airport_name": "Governador Jorge Teixeira de Oliveira Internatio",
    "name": "Pôrto Velho",
    "lat": "-8.7133",
    "lon": "-63.9022",
    "country": "Brazil"
  },
  {
    "airport_code": "PVK",
    "airport_name": "Preveza Airport",
    "name": "Paliambela",
    "lat": "38.9261",
    "lon": "20.7667",
    "country": "Greece"
  },
  {
    "airport_code": "PVR",
    "airport_name": "Lic Gustavo Diaz Ordaz International Airport",
    "name": "Puerto Vallarta",
    "lat": "20.6819",
    "lon": "-105.248",
    "country": "Mexico"
  },
  {
    "airport_code": "PWE",
    "airport_name": "Under Construction Pevek Airport",
    "name": "Anadyr'",
    "lat": "69.7862",
    "lon": "170.642",
    "country": "Russia"
  },
  {
    "airport_code": "PWK",
    "airport_name": "Pal Waukee Airport",
    "name": "Wheeling",
    "lat": "42.1162",
    "lon": "-87.8987",
    "country": "United States"
  },
  {
    "airport_code": "PWM",
    "airport_name": "Jetport International Airport",
    "name": "Portland",
    "lat": "43.6475",
    "lon": "-70.3103",
    "country": "United States"
  },
  {
    "airport_code": "PWQ",
    "airport_name": "Pavlodar South Airport",
    "name": "Pavlodar",
    "lat": "52.1859",
    "lon": "77.0858",
    "country": "Kazakhstan"
  },
  {
    "airport_code": "PXM",
    "airport_name": "Puerto Escondido Airport",
    "name": "San Pedro Juchatengo",
    "lat": "15.8725",
    "lon": "-97.0861",
    "country": "Mexico"
  },
  {
    "airport_code": "PXO",
    "airport_name": "Porto Santo Airport",
    "name": "Porto Santo",
    "lat": "33.0667",
    "lon": "-16.35",
    "country": "Portugal"
  },
  {
    "airport_code": "PXU",
    "airport_name": "Pleiku Area Airport",
    "name": "Gia Lai",
    "lat": "13.9747",
    "lon": "108.041",
    "country": "Vietnam"
  },
  {
    "airport_code": "PYH",
    "airport_name": "Puerto Ayacucho Airport",
    "name": "Maroa",
    "lat": "5.5833",
    "lon": "-67.6167",
    "country": "Venezuela"
  },
  {
    "airport_code": "PYJ",
    "airport_name": "Russia",
    "name": "Polyarnyj",
    "lat": "69.1966",
    "lon": "33.4842",
    "country": "Russia"
  },
  {
    "airport_code": "PZB",
    "airport_name": "Pietermaritzburg Airport",
    "name": "Pietermaritzburg",
    "lat": "-29.6514",
    "lon": "30.3994",
    "country": "South Africa"
  },
  {
    "airport_code": "PZE",
    "airport_name": "Penzance Heliport",
    "name": "Penzance",
    "lat": "50.1282",
    "lon": "-5.51945",
    "country": "United Kingdom"
  },
  {
    "airport_code": "PZI",
    "airport_name": "Pan Zhi Hua Bao AnYing",
    "name": "Pan Zhi Hua",
    "lat": "21.652",
    "lon": "110.623",
    "country": "China"
  },
  {
    "airport_code": "PZO",
    "airport_name": "Puerto Ordaz Airport",
    "name": "Ciudad Guayana",
    "lat": "8.3",
    "lon": "-62.7333",
    "country": "Venezuela"
  },
  {
    "airport_code": "PZU",
    "airport_name": "Port Sudan International Airport",
    "name": "Port Sudan",
    "lat": "19.5761",
    "lon": "37.2167",
    "country": "Sudan"
  },
  {
    "airport_code": "QBC",
    "airport_name": "Bella Coola Airport",
    "name": "Masset",
    "lat": "52.3843",
    "lon": "-126.585",
    "country": "Canada"
  },
  {
    "airport_code": "QDH",
    "airport_name": "Ashford International Rail Station",
    "name": "Ashford",
    "lat": "51.08",
    "lon": "0.53",
    "country": "United Kingdom"
  },
  
  
  
  {
    "airport_code": "QJY",
    "airport_name": "Cheju International Airport",
    "name": "Jeju-Si",
    "lat": "33.5056",
    "lon": "126.495",
    "country": "South Korea"
  },
  
  
  {
    "airport_code": "QOW",
    "airport_name": "Owerri",
    "name": "Owerri",
    "lat": "5.49341",
    "lon": "7.0261",
    "country": "Nigeria"
  },
  {
    "airport_code": "QQD",
    "airport_name": "Dover Rail Station",
    "name": "Dover",
    "lat": "51.07",
    "lon": "1.19",
    "country": "United Kingdom"
  },
  
  
  
  
  
  
  
  
  
  
  
  {
    "airport_code": "QRO",
    "airport_name": "Queretaro Airport",
    "name": "Queretaro",
    "lat": "20.6228",
    "lon": "-100.369",
    "country": "Mexico"
  },
  {
    "airport_code": "QRW",
    "airport_name": "Delta",
    "name": "Warri",
    "lat": "5.75242",
    "lon": "5.86487",
    "country": "Nigeria"
  },
  {
    "airport_code": "QSF",
    "airport_name": "Setif",
    "name": "Setif",
    "lat": "36.1914",
    "lon": "5.40944",
    "country": "Algeria"
  },
  {
    "airport_code": "QUL",
    "airport_name": "",
    "name": "Qulin",
    "lat": "36.5922",
    "lon": "-90.2465",
    "country": "United States"
  },
  {
    "airport_code": "QWB",
    "airport_name": "Afonso Pena International Airport",
    "name": "Sao Jose dos Pinhais",
    "lat": "-25.5275",
    "lon": "-49.1731",
    "country": "Brazil"
  },
  {
    "airport_code": "QXB",
    "airport_name": "Aix Les Milles Airport",
    "name": "Aix-les-milles",
    "lat": "43.5048",
    "lon": "5.36794",
    "country": "France"
  },
  
  
  
  {
    "airport_code": "RAB",
    "airport_name": "Rabaul Airport",
    "name": "Rabaul",
    "lat": "-4.2272",
    "lon": "152.184",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "RAE",
    "airport_name": "Arar Airport",
    "name": "Arar",
    "lat": "30.9086",
    "lon": "41.1367",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "RAH",
    "airport_name": "Rafha Airport",
    "name": "Rafha",
    "lat": "29.6278",
    "lon": "43.4944",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "RAI",
    "airport_name": "Francisco Mendes Airport",
    "name": "Praia",
    "lat": "14.9253",
    "lon": "-23.5031",
    "country": "Cape Verde"
  },
  {
    "airport_code": "RAJ",
    "airport_name": "Rajkot Airport",
    "name": "Rajkot",
    "lat": "22.3169",
    "lon": "70.769",
    "country": "India"
  },
  {
    "airport_code": "RAK",
    "airport_name": "Menara Airport",
    "name": "Marrakesh",
    "lat": "31.6167",
    "lon": "-8.05",
    "country": "Morocco"
  },
  {
    "airport_code": "RAO",
    "airport_name": "Leite Lopes Airport",
    "name": "Ribeirão Prêto",
    "lat": "-21.1322",
    "lon": "-47.7744",
    "country": "Brazil"
  },
  {
    "airport_code": "RAP",
    "airport_name": "Rapid City Regional Airport",
    "name": "Rapid City",
    "lat": "44.037",
    "lon": "-103.06",
    "country": "United States"
  },
  {
    "airport_code": "RAR",
    "airport_name": "Rarotonga International Airport",
    "name": "Avarua",
    "lat": "-21.2",
    "lon": "-159.8",
    "country": "Cook Islands"
  },
  {
    "airport_code": "RAS",
    "airport_name": "Rasht Airport",
    "name": "Rasht",
    "lat": "37.3256",
    "lon": "49.6092",
    "country": "Iran"
  },
  {
    "airport_code": "RBA",
    "airport_name": "Sale Airport",
    "name": "Rabat",
    "lat": "34.0475",
    "lon": "-6.7578",
    "country": "Morocco"
  },
  {
    "airport_code": "RBH",
    "airport_name": "Brooks Lodge",
    "name": "Brooks Lodge",
    "lat": "64.7381",
    "lon": "-155.489",
    "country": "United States"
  },
  {
    "airport_code": "RBQ",
    "airport_name": "Rurrenabaque Airport",
    "name": "Rurrenabaque",
    "lat": "-14.45",
    "lon": "-67.55",
    "country": "Bolivia"
  },
  {
    "airport_code": "RBR",
    "airport_name": "Presidente Medici International Airport",
    "name": "Rio Branco",
    "lat": "-9.9981",
    "lon": "-67.7997",
    "country": "Brazil"
  },
  {
    "airport_code": "RBV",
    "airport_name": "Ramata",
    "name": "Ramata",
    "lat": "58.05",
    "lon": "25.1",
    "country": "Solomon Islands"
  },
  {
    "airport_code": "RBX",
    "airport_name": "Roundup Airport",
    "name": "Roundup",
    "lat": "46.4717",
    "lon": "-108.55",
    "country": "United States"
  },
  {
    "airport_code": "RBY",
    "airport_name": "Ruby Airport",
    "name": "Ruby",
    "lat": "64.7381",
    "lon": "-155.489",
    "country": "United States"
  },
  {
    "airport_code": "RCB",
    "airport_name": "Richards Bay Airport",
    "name": "Empangeni",
    "lat": "-28.7386",
    "lon": "32.0928",
    "country": "South Africa"
  },
  {
    "airport_code": "RCE",
    "airport_name": "Roche Harbor Airport",
    "name": "Friday Harbor",
    "lat": "48.6126",
    "lon": "-123.14",
    "country": "United States"
  },
  {
    "airport_code": "RCH",
    "airport_name": "Almirante Padilla Airport",
    "name": "Ríohacha",
    "lat": "11.5292",
    "lon": "-72.9244",
    "country": "Colombia"
  },
  {
    "airport_code": "RCL",
    "airport_name": "",
    "name": "Redcliffe",
    "lat": "-15.4802",
    "lon": "167.834",
    "country": "Vanuatu"
  },
  {
    "airport_code": "RCM",
    "airport_name": "Richmond Aerodrome",
    "name": "Bellfield",
    "lat": "-20.7021",
    "lon": "143.115",
    "country": "Australia"
  },
  {
    "airport_code": "RCP",
    "airport_name": "",
    "name": "Cinder River",
    "lat": "51.5257",
    "lon": "-0.14499",
    "country": "United States"
  },
  {
    "airport_code": "RDB",
    "airport_name": "Red Dog",
    "name": "Red Dog",
    "lat": "67.75",
    "lon": "-163.667",
    "country": "United States"
  },
  {
    "airport_code": "RDD",
    "airport_name": "Redding Municipal Airport",
    "name": "Redding",
    "lat": "40.5056",
    "lon": "-122.302",
    "country": "United States"
  },
  {
    "airport_code": "RDM",
    "airport_name": "Roberts Field Airport",
    "name": "Redmond",
    "lat": "44.2533",
    "lon": "-121.162",
    "country": "United States"
  },
  {
    "airport_code": "RDN",
    "airport_name": "Malaysia",
    "name": "Redang",
    "lat": "3.94515",
    "lon": "114.402",
    "country": "Malaysia"
  },
  {
    "airport_code": "RDU",
    "airport_name": "Durham International Airport",
    "name": "Raleigh/Durham",
    "lat": "35.8729",
    "lon": "-78.7923",
    "country": "United States"
  },
  {
    "airport_code": "RDV",
    "airport_name": "Red Devil",
    "name": "Red Devil",
    "lat": "61.7645",
    "lon": "-157.312",
    "country": "United States"
  },
  {
    "airport_code": "RDZ",
    "airport_name": "Marcillac Airport",
    "name": "Marcillac",
    "lat": "44.41",
    "lon": "2.48254",
    "country": "France"
  },
  {
    "airport_code": "REA",
    "airport_name": "Reao",
    "name": "Reao",
    "lat": "-19",
    "lon": "-135.1",
    "country": "French Polynesia"
  },
  {
    "airport_code": "REC",
    "airport_name": "Gilberto Freyre International Airport",
    "name": "Recife",
    "lat": "-8.1261",
    "lon": "-34.9225",
    "country": "Brazil"
  },
  {
    "airport_code": "REG",
    "airport_name": "Reggio Calabria Airport",
    "name": "Reggio di Calabria",
    "lat": "38.0731",
    "lon": "15.6498",
    "country": "Italy"
  },
  {
    "airport_code": "REL",
    "airport_name": "Trelew Almirante Zar Airport",
    "name": "Trelew",
    "lat": "-43.2111",
    "lon": "-65.2681",
    "country": "Argentina"
  },
  {
    "airport_code": "REN",
    "airport_name": "Orenburg East Airport",
    "name": "Orenburg",
    "lat": "51.7953",
    "lon": "55.4498",
    "country": "Russia"
  },
  {
    "airport_code": "REP",
    "airport_name": "Siem Reap Airport",
    "name": "Siemrap",
    "lat": "13.4092",
    "lon": "103.816",
    "country": "Cambodia"
  },
  {
    "airport_code": "RES",
    "airport_name": "Resistencia Airport",
    "name": "Makallé",
    "lat": "-27.4514",
    "lon": "-59.0508",
    "country": "Argentina"
  },
  {
    "airport_code": "REU",
    "airport_name": "Reus Airport",
    "name": "Reus",
    "lat": "41.1444",
    "lon": "1.15631",
    "country": "Spain"
  },
  {
    "airport_code": "REX",
    "airport_name": "Reynosa International Airport",
    "name": "Reynosa",
    "lat": "26.0133",
    "lon": "-98.2319",
    "country": "Mexico"
  },
  {
    "airport_code": "RFD",
    "airport_name": "Greater Rockford Airport",
    "name": "Rockford",
    "lat": "42.2035",
    "lon": "-89.0955",
    "country": "United States"
  },
  {
    "airport_code": "RFP",
    "airport_name": "Raiatea Island Airport",
    "name": "Papeete",
    "lat": "-16.7167",
    "lon": "-151.467",
    "country": "French Polynesia"
  },
  {
    "airport_code": "RGA",
    "airport_name": "Rio Grande Airport",
    "name": "Río Grande",
    "lat": "-53.7792",
    "lon": "-67.7667",
    "country": "Argentina"
  },
  {
    "airport_code": "RGI",
    "airport_name": "Rangiroa Airport",
    "name": "Papeete",
    "lat": "-14.9516",
    "lon": "-147.649",
    "country": "French Polynesia"
  },
  {
    "airport_code": "RGL",
    "airport_name": "Rio Gallegos Airport",
    "name": "Río Gallegos",
    "lat": "-51.6092",
    "lon": "-69.3131",
    "country": "Argentina"
  },
  {
    "airport_code": "RGN",
    "airport_name": "Mingaladon Airport",
    "name": "Insein",
    "lat": "16.9064",
    "lon": "96.1389",
    "country": "Myanmar"
  },
  {
    "airport_code": "RHI",
    "airport_name": "Rhinelander-Oneida County Airport",
    "name": "Rhinelander",
    "lat": "45.626",
    "lon": "-89.4626",
    "country": "United States"
  },
  {
    "airport_code": "RHO",
    "airport_name": "Paradisi Airport",
    "name": "Rodhos",
    "lat": "36.4044",
    "lon": "28.0867",
    "country": "Greece"
  },
  {
    "airport_code": "RIA",
    "airport_name": "Santa Maria Airport",
    "name": "Santa Maria",
    "lat": "-29.7106",
    "lon": "-53.6875",
    "country": "Brazil"
  },
  {
    "airport_code": "RIB",
    "airport_name": "Gen. Buech Airport",
    "name": "Riberalta",
    "lat": "-11.0167",
    "lon": "-66.0833",
    "country": "Bolivia"
  },
  {
    "airport_code": "RIC",
    "airport_name": "Richmond International Airport",
    "name": "Richmond",
    "lat": "37.5108",
    "lon": "-77.3332",
    "country": "United States"
  },
  
  {
    "airport_code": "RIS",
    "airport_name": "Rishiri Airport",
    "name": "Rishirifuji-cho",
    "lat": "45.2419",
    "lon": "141.186",
    "country": "Japan"
  },
  
  {
    "airport_code": "RIW",
    "airport_name": "Riverton Regional Airport",
    "name": "Riverton",
    "lat": "43.0611",
    "lon": "-108.458",
    "country": "United States"
  },
  {
    "airport_code": "RIX",
    "airport_name": "Riga Airport",
    "name": "Marupe",
    "lat": "56.9231",
    "lon": "23.9717",
    "country": "Latvia"
  },
  {
    "airport_code": "RIY",
    "airport_name": "Riyan Airport",
    "name": "Shuhayr",
    "lat": "14.6611",
    "lon": "49.3761",
    "country": "Yemen"
  },
  {
    "airport_code": "RJA",
    "airport_name": "Rajahmundry Airport",
    "name": "Kapavaram",
    "lat": "17.1081",
    "lon": "81.82",
    "country": "India"
  },
  {
    "airport_code": "RJK",
    "airport_name": "Rijeka Krk Airport",
    "name": "Rijeka",
    "lat": "45.2167",
    "lon": "14.5683",
    "country": "Croatia"
  },
  {
    "airport_code": "RJL",
    "airport_name": "Agoncillo",
    "name": "Logrono",
    "lat": "42.4563",
    "lon": "-2.31476",
    "country": "Spain"
  },
  {
    "airport_code": "RJN",
    "airport_name": "Kerman",
    "name": "Rafsanjan",
    "lat": "30.2803",
    "lon": "57.067",
    "country": "Iran"
  },
  {
    "airport_code": "RKD",
    "airport_name": "Knox County Regional Airport",
    "name": "Owls Head",
    "lat": "44.0612",
    "lon": "-69.0943",
    "country": "United States"
  },
  {
    "airport_code": "RKS",
    "airport_name": "Rock Springs-Sweetwater County Airport",
    "name": "Rock Springs",
    "lat": "41.5988",
    "lon": "-109.072",
    "country": "United States"
  },
  
  {
    "airport_code": "RKV",
    "airport_name": "Reykjavik Airport",
    "name": "Reykjavik",
    "lat": "64.1311",
    "lon": "-21.9389",
    "country": "Iceland"
  },
  {
    "airport_code": "RLG",
    "airport_name": "",
    "name": "Rostock-laage",
    "lat": "46.7427",
    "lon": "-96.2383",
    "country": "Germany"
  },
  {
    "airport_code": "RMA",
    "airport_name": "Roma Aerodrome",
    "name": "Blythdale",
    "lat": "-26.5457",
    "lon": "148.773",
    "country": "Australia"
  },
  {
    "airport_code": "RMF",
    "airport_name": "Marsa Alam International",
    "name": "Marsa Alam",
    "lat": "25.07",
    "lon": "34.9",
    "country": "Egypt"
  },
  {
    "airport_code": "RMI",
    "airport_name": "Rimini Airport",
    "name": "Rimini",
    "lat": "44.0225",
    "lon": "12.618",
    "country": "Italy"
  },
  {
    "airport_code": "RMP",
    "airport_name": "Rampart",
    "name": "Rampart",
    "lat": "65.5063",
    "lon": "-150.169",
    "country": "United States"
  },
  {
    "airport_code": "RMQ",
    "airport_name": "Taiwan",
    "name": "Taichung",
    "lat": "23.5998",
    "lon": "121.024",
    "country": "Taiwan"
  },
  {
    "airport_code": "RMT",
    "airport_name": "Remada Airport",
    "name": "Tatawin",
    "lat": "32.3103",
    "lon": "10.3856",
    "country": "Tunisia"
  },
  {
    "airport_code": "RNA",
    "airport_name": "Ulawa Airport",
    "name": "Arona",
    "lat": "-19.3",
    "lon": "44.8167",
    "country": "Solomon Islands"
  },
  {
    "airport_code": "RNB",
    "airport_name": "Ronneby Airport",
    "name": "Kallinge",
    "lat": "56.2542",
    "lon": "15.2672",
    "country": "Sweden"
  },
  {
    "airport_code": "RNL",
    "airport_name": "Rennell",
    "name": "Rennell",
    "lat": "-11.6667",
    "lon": "160.3",
    "country": "Solomon Islands"
  },
  {
    "airport_code": "RNN",
    "airport_name": "Bornholm Airport",
    "name": "Ronne",
    "lat": "55.0681",
    "lon": "14.7472",
    "country": "Denmark"
  },
  {
    "airport_code": "RNO",
    "airport_name": "Reno-Tahoe International Airport",
    "name": "Reno",
    "lat": "39.5064",
    "lon": "-119.776",
    "country": "United States"
  },
  {
    "airport_code": "RNP",
    "airport_name": "Rongelap Island",
    "name": "Rongelap Island",
    "lat": "11.15",
    "lon": "166.883",
    "country": "Marshall Islands"
  },
  {
    "airport_code": "RNS",
    "airport_name": "St Jacques Airport",
    "name": "St-Jacques",
    "lat": "48.0686",
    "lon": "-1.72536",
    "country": "France"
  },
  {
    "airport_code": "ROA",
    "airport_name": "Roanoke Regional Airport-Woodrum Field",
    "name": "Roanoke",
    "lat": "37.3203",
    "lon": "-79.9688",
    "country": "United States"
  },
  {
    "airport_code": "ROB",
    "airport_name": "Roberts International Airport",
    "name": "Harbelville",
    "lat": "6.2328",
    "lon": "-10.365",
    "country": "Liberia"
  },
  {
    "airport_code": "ROC",
    "airport_name": "Greater Rochester International Airport",
    "name": "Rochester",
    "lat": "43.1309",
    "lon": "-77.6697",
    "country": "United States"
  },
  {
    "airport_code": "ROI",
    "airport_name": "Mueang Poi Et",
    "name": "Roi Et",
    "lat": "16.0142",
    "lon": "103.592",
    "country": "Thailand"
  },
  {
    "airport_code": "ROK",
    "airport_name": "Rockhampton Airport",
    "name": "Rockhampton",
    "lat": "-23.3768",
    "lon": "150.474",
    "country": "Australia"
  },
  
  {
    "airport_code": "ROP",
    "airport_name": "Rota International Airport",
    "name": "Rota",
    "lat": "14.1667",
    "lon": "145.25",
    "country": "United States"
  },
  {
    "airport_code": "ROR",
    "airport_name": "Koror Airport",
    "name": "Koror",
    "lat": "7.35743",
    "lon": "134.547",
    "country": "Palau"
  },
  {
    "airport_code": "ROS",
    "airport_name": "Rosario Airport",
    "name": "Rosario",
    "lat": "-32.9033",
    "lon": "-60.7856",
    "country": "Argentina"
  },
  {
    "airport_code": "ROT",
    "airport_name": "Rotorua Airport",
    "name": "Rotorua",
    "lat": "-38.1047",
    "lon": "176.314",
    "country": "New Zealand"
  },
  {
    "airport_code": "ROV",
    "airport_name": "Rostov East Airport",
    "name": "Taganrog",
    "lat": "47.2556",
    "lon": "39.8169",
    "country": "Russia"
  },
  {
    "airport_code": "ROW",
    "airport_name": "Roswell Industrial Air Center",
    "name": "Roswell",
    "lat": "33.3071",
    "lon": "-104.519",
    "country": "United States"
  },
  {
    "airport_code": "RPR",
    "airport_name": "Raipur Airport",
    "name": "Banarsi",
    "lat": "21.1671",
    "lon": "81.7473",
    "country": "India"
  },
  {
    "airport_code": "RRG",
    "airport_name": "Mauritius",
    "name": "Rodrigues Is",
    "lat": "-20.2554",
    "lon": "57.5517",
    "country": "Mauritius"
  },
  {
    "airport_code": "RRS",
    "airport_name": "Roeros Airport",
    "name": "Roros",
    "lat": "62.5792",
    "lon": "11.3458",
    "country": "Norway"
  },
  {
    "airport_code": "RSA",
    "airport_name": "Santa Rosa Airport",
    "name": "Santa Rosa",
    "lat": "-36.5881",
    "lon": "-64.2756",
    "country": "Argentina"
  },
  {
    "airport_code": "RSD",
    "airport_name": "Rock Sound Airport",
    "name": "Rock Sound",
    "lat": "24.8917",
    "lon": "-76.1781",
    "country": "Bahamas"
  },
  
  {
    "airport_code": "RSJ",
    "airport_name": "Rosario Seaplane Base",
    "name": "Olga",
    "lat": "48.6339",
    "lon": "-122.81",
    "country": "United States"
  },
  {
    "airport_code": "RST",
    "airport_name": "Rochester International Airport",
    "name": "Rochester",
    "lat": "43.9101",
    "lon": "-92.4884",
    "country": "United States"
  },
  {
    "airport_code": "RSU",
    "airport_name": "Yeosu Airport",
    "name": "Yeosu-Si",
    "lat": "34.8369",
    "lon": "127.619",
    "country": "South Korea"
  },
  {
    "airport_code": "RSW",
    "airport_name": "Southwest Florida International Airport",
    "name": "Fort Myers",
    "lat": "26.5228",
    "lon": "-81.7531",
    "country": "United States"
  },
  {
    "airport_code": "RTA",
    "airport_name": "Rotuma",
    "name": "Rotuma Island",
    "lat": "-12.5017",
    "lon": "177.066",
    "country": "Fiji"
  },
  {
    "airport_code": "RTB",
    "airport_name": "Roatan Island Airport",
    "name": "Roatán",
    "lat": "16.3242",
    "lon": "-86.5323",
    "country": "Honduras"
  },
  {
    "airport_code": "RTG",
    "airport_name": "Satartacik Airport",
    "name": "Ruteng",
    "lat": "-8.5878",
    "lon": "120.483",
    "country": "Indonesia"
  },
  {
    "airport_code": "RTM",
    "airport_name": "Rotterdam Airport",
    "name": "Rotterdam",
    "lat": "51.9525",
    "lon": "4.4392",
    "country": "Netherlands"
  },
  {
    "airport_code": "RTW",
    "airport_name": "Saratov Airport",
    "name": "Saratov",
    "lat": "51.5617",
    "lon": "46.0419",
    "country": "Russia"
  },
  {
    "airport_code": "RUA",
    "airport_name": "",
    "name": "Arua",
    "lat": "37.5534",
    "lon": "-76.3539",
    "country": "Uganda"
  },
  {
    "airport_code": "RUD",
    "airport_name": "",
    "name": "Oslo",
    "lat": "59.9448",
    "lon": "10.6382",
    "country": "Norway"
  },
  {
    "airport_code": "RUH",
    "airport_name": "King Khalid International Airport",
    "name": "Riyadh",
    "lat": "24.9625",
    "lon": "46.7078",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "RUK",
    "airport_name": "Nepal",
    "name": "Rukumkot",
    "lat": "28.3948",
    "lon": "84.1278",
    "country": "Nepal"
  },
  {
    "airport_code": "RUM",
    "airport_name": "Rumjatar Airport",
    "name": "Rumjatar",
    "lat": "27.3333",
    "lon": "86.55",
    "country": "Nepal"
  },
  {
    "airport_code": "RUN",
    "airport_name": "Saint Denis Gillot Airport",
    "name": "Sainte-Marie",
    "lat": "-20.8772",
    "lon": "55.5214",
    "country": "Reunion"
  },
  {
    "airport_code": "RUR",
    "airport_name": "",
    "name": "Rurutu",
    "lat": "51.0804",
    "lon": "6.14209",
    "country": "French Polynesia"
  },
  {
    "airport_code": "RUT",
    "airport_name": "Rutland State Airport",
    "name": "North Clarendon",
    "lat": "43.5291",
    "lon": "-72.945",
    "country": "United States"
  },
  {
    "airport_code": "RVA",
    "airport_name": "",
    "name": "Farafangana",
    "lat": "-22.8053",
    "lon": "47.8206",
    "country": "Madagascar"
  },
  {
    "airport_code": "RVE",
    "airport_name": "Saravena El Eden Airport",
    "name": "Saravena",
    "lat": "6.9581",
    "lon": "-71.855",
    "country": "Colombia"
  },
  {
    "airport_code": "RVK",
    "airport_name": "Ryumsjoen Airport",
    "name": "Rorvik",
    "lat": "64.8402",
    "lon": "11.1352",
    "country": "Norway"
  },
  {
    "airport_code": "RVN",
    "airport_name": "Rovaniemi Airport",
    "name": "Saarenkylä",
    "lat": "66.5628",
    "lon": "25.8266",
    "country": "Finland"
  },
  {
    "airport_code": "RVT",
    "airport_name": "Western Australia",
    "name": "Ravensthorpe",
    "lat": "-24.4378",
    "lon": "121.079",
    "country": "Australia"
  },
  {
    "airport_code": "RVV",
    "airport_name": "Raivavae Airport",
    "name": "Rairua",
    "lat": "-23.8862",
    "lon": "-147.665",
    "country": "French Polynesia"
  },
  {
    "airport_code": "RXS",
    "airport_name": "Roxas Airport",
    "name": "Ivisan",
    "lat": "11.6",
    "lon": "122.751",
    "country": "Philippines"
  },
  {
    "airport_code": "RYG",
    "airport_name": "Moss Airport",
    "name": "Rygge",
    "lat": "59.3789",
    "lon": "10.7856",
    "country": "Norway"
  },
  {
    "airport_code": "RYK",
    "airport_name": "Rahim Yar Khan",
    "name": "Rahim Yar Khan",
    "lat": "28.4",
    "lon": "70.2833",
    "country": "Pakistan"
  },
  {
    "airport_code": "RZE",
    "airport_name": "Jasionka Airport",
    "name": "Trzebownisko",
    "lat": "50.1062",
    "lon": "22.0243",
    "country": "Poland"
  },
  {
    "airport_code": "RZP",
    "airport_name": "Philippines",
    "name": "Taytay Sandoval",
    "lat": "15.5931",
    "lon": "120.739",
    "country": "Philippines"
  },
  {
    "airport_code": "RZR",
    "airport_name": "Ramsar Airport",
    "name": "Ramsar",
    "lat": "36.9108",
    "lon": "50.6806",
    "country": "Iran"
  },
  {
    "airport_code": "RZS",
    "airport_name": "",
    "name": "Sawan",
    "lat": "33.6403",
    "lon": "73.8569",
    "country": "Pakistan"
  },
  
  {
    "airport_code": "SAH",
    "airport_name": "Sanaa International Airport",
    "name": "Ar Raudha",
    "lat": "15.48",
    "lon": "44.2208",
    "country": "Yemen"
  },
  {
    "airport_code": "SAL",
    "airport_name": "El Salvador International Airport",
    "name": "San Luis",
    "lat": "13.44",
    "lon": "-89.0558",
    "country": "El Salvador"
  },
  {
    "airport_code": "SAN",
    "airport_name": "San Diego International Airport",
    "name": "San Diego",
    "lat": "32.7299",
    "lon": "-117.195",
    "country": "United States"
  },
  {
    "airport_code": "SAP",
    "airport_name": "La Mesa International Airport",
    "name": "San Pedro Sula",
    "lat": "15.4514",
    "lon": "-87.9242",
    "country": "Honduras"
  },
  {
    "airport_code": "SAQ",
    "airport_name": "San Andros Municipal Airport",
    "name": "San Andros",
    "lat": "25.05",
    "lon": "-78.0333",
    "country": "Bahamas"
  },
  {
    "airport_code": "SAT",
    "airport_name": "San Antonio International Airport",
    "name": "San Antonio",
    "lat": "29.5252",
    "lon": "-98.4729",
    "country": "United States"
  },
  {
    "airport_code": "SAV",
    "airport_name": "Savannah International Airport",
    "name": "Savannah",
    "lat": "32.1338",
    "lon": "-81.2133",
    "country": "United States"
  },
  {
    "airport_code": "SAW",
    "airport_name": "Istanbul Sabiha Gokcen Airport",
    "name": "Umraniye",
    "lat": "40.9928",
    "lon": "29.034",
    "country": "Turkey"
  },
  {
    "airport_code": "SBA",
    "airport_name": "Santa Barbara Municipal Airport",
    "name": "Goleta",
    "lat": "34.4255",
    "lon": "-119.835",
    "country": "United States"
  },
  {
    "airport_code": "SBH",
    "airport_name": "Gustavia Airport",
    "name": "Gustavia",
    "lat": "17.8667",
    "lon": "-62.8333",
    "country": "Guadeloupe"
  },
  {
    "airport_code": "SBL",
    "airport_name": "Santa Ana de Yacuma Airport",
    "name": "Santa Ana",
    "lat": "-13.7667",
    "lon": "-65.5833",
    "country": "Bolivia"
  },
  {
    "airport_code": "SBN",
    "airport_name": "South Bend Regional Airport",
    "name": "South Bend",
    "lat": "41.7006",
    "lon": "-86.311",
    "country": "United States"
  },
  {
    "airport_code": "SBP",
    "airport_name": "San Luis Obispo County Airport",
    "name": "San Luis Obispo",
    "lat": "35.239",
    "lon": "-120.641",
    "country": "United States"
  },
  {
    "airport_code": "SBR",
    "airport_name": "Saibai Island",
    "name": "Saibai Island",
    "lat": "-9.4",
    "lon": "142.667",
    "country": "Australia"
  },
  {
    "airport_code": "SBW",
    "airport_name": "Sibu Airport",
    "name": "Sibu",
    "lat": "2.3417",
    "lon": "111.838",
    "country": "Malaysia"
  },
  {
    "airport_code": "SBY",
    "airport_name": "Salisbury-Wicomico County Regional Airport",
    "name": "Salisbury",
    "lat": "38.3431",
    "lon": "-75.517",
    "country": "United States"
  },
  {
    "airport_code": "SBZ",
    "airport_name": "Turnisor Airport",
    "name": "Sibiu",
    "lat": "45.7882",
    "lon": "24.0943",
    "country": "Romania"
  },
  {
    "airport_code": "SCC",
    "airport_name": "Deadhorse Airport",
    "name": "Prudhoe Bay",
    "lat": "70.1975",
    "lon": "-148.458",
    "country": "United States"
  },
  {
    "airport_code": "SCE",
    "airport_name": "University Park Airport",
    "name": "State College",
    "lat": "40.8515",
    "lon": "-77.851",
    "country": "United States"
  },
  {
    "airport_code": "SCK",
    "airport_name": "Stockton Metropolitan Airport",
    "name": "Stockton",
    "lat": "37.8973",
    "lon": "-121.253",
    "country": "United States"
  },
  {
    "airport_code": "SCL",
    "airport_name": "Arturo Merino Benitez International Airport",
    "name": "Lo Amor",
    "lat": "-33.39",
    "lon": "-70.785",
    "country": "Chile"
  },
  
  {
    "airport_code": "SCN",
    "airport_name": "Saarbrucken Airport",
    "name": "Sarrebruck",
    "lat": "49.2188",
    "lon": "7.11263",
    "country": "Germany"
  },
  {
    "airport_code": "SCO",
    "airport_name": "Aktau",
    "name": "Aktau",
    "lat": "43.8667",
    "lon": "51.1",
    "country": "Kazakhstan"
  },
  {
    "airport_code": "SCQ",
    "airport_name": "Santiago Airport",
    "name": "Santiago",
    "lat": "42.8991",
    "lon": "-8.41646",
    "country": "Spain"
  },
  {
    "airport_code": "SCT",
    "airport_name": "",
    "name": "Socotra",
    "lat": "25.6472",
    "lon": "-100.172",
    "country": "Yemen"
  },
  
  
  {
    "airport_code": "SCW",
    "airport_name": "Russia",
    "name": "Syktyvkar",
    "lat": "61.6726",
    "lon": "50.822",
    "country": "Russia"
  },
  {
    "airport_code": "SCX",
    "airport_name": "Salina Cruz",
    "name": "Salina Cruz",
    "lat": "16.2104",
    "lon": "-95.1989",
    "country": "Mexico"
  },
  
  {
    "airport_code": "SCZ",
    "airport_name": "Santa Cruz Is",
    "name": "Santa Cruz Is",
    "lat": "-11.6167",
    "lon": "166.85",
    "country": "Solomon Islands"
  },
  {
    "airport_code": "SDD",
    "airport_name": "Lubango Airport",
    "name": "Lubango",
    "lat": "-14.9244",
    "lon": "13.5767",
    "country": "Angola"
  },
  {
    "airport_code": "SDE",
    "airport_name": "Santiago del Estero Airport",
    "name": "Frías",
    "lat": "-27.7675",
    "lon": "-64.3106",
    "country": "Argentina"
  },
  {
    "airport_code": "SDF",
    "airport_name": "Louisville International Airport",
    "name": "Louisville",
    "lat": "38.1865",
    "lon": "-85.7462",
    "country": "United States"
  },
  {
    "airport_code": "SDG",
    "airport_name": "Sanandaj Airport",
    "name": "Sanandaj",
    "lat": "35.25",
    "lon": "47.0092",
    "country": "Iran"
  },
  {
    "airport_code": "SDJ",
    "airport_name": "Sendai Airport",
    "name": "Natori-shi",
    "lat": "38.1401",
    "lon": "140.918",
    "country": "Japan"
  },
  {
    "airport_code": "SDK",
    "airport_name": "Sandakan Airport",
    "name": "Sandakan",
    "lat": "5.9017",
    "lon": "118.053",
    "country": "Malaysia"
  },
  {
    "airport_code": "SDL",
    "airport_name": "Sundsvall Harnosand Airport",
    "name": "Bergeforsen",
    "lat": "62.5249",
    "lon": "17.4407",
    "country": "Sweden"
  },
  {
    "airport_code": "SDN",
    "airport_name": "Sandane Airport",
    "name": "Sandene",
    "lat": "61.8296",
    "lon": "6.10628",
    "country": "Norway"
  },
  {
    "airport_code": "SDP",
    "airport_name": "Sand Point Airport",
    "name": "Sand Point",
    "lat": "55.3184",
    "lon": "-160.523",
    "country": "United States"
  },
  {
    "airport_code": "SDQ",
    "airport_name": "De Las Americas International Airport",
    "name": "Santo Domingo",
    "lat": "18.4292",
    "lon": "-69.6692",
    "country": "Dominican Republic"
  },
  {
    "airport_code": "SDR",
    "airport_name": "Santander Airport",
    "name": "Santander",
    "lat": "43.4232",
    "lon": "-3.82375",
    "country": "Spain"
  },
  {
    "airport_code": "SDT",
    "airport_name": "Saidu Sharif Airport",
    "name": "Saidu",
    "lat": "34.8125",
    "lon": "72.3528",
    "country": "Pakistan"
  },
  {
    "airport_code": "SDU",
    "airport_name": "Santos Dumont Airport",
    "name": "Rio de Janeiro",
    "lat": "-22.9107",
    "lon": "-43.1707",
    "country": "Brazil"
  },
  {
    "airport_code": "SDV",
    "airport_name": "Sde Dov Airport",
    "name": "Tel Aviv Yafo",
    "lat": "32.1104",
    "lon": "34.7823",
    "country": "Israel"
  },
  {
    "airport_code": "SDY",
    "airport_name": "Sidney Richland Municipal Airport",
    "name": "Sidney",
    "lat": "47.7113",
    "lon": "-104.184",
    "country": "United States"
  },
  {
    "airport_code": "SEA",
    "airport_name": "Tacoma International Airport",
    "name": "Seattle",
    "lat": "47.4405",
    "lon": "-122.296",
    "country": "United States"
  },
  {
    "airport_code": "SEB",
    "airport_name": "Sebha Airport",
    "name": "Sabha",
    "lat": "26.9933",
    "lon": "14.4669",
    "country": "Libya"
  },
  {
    "airport_code": "SEN",
    "airport_name": "Southend Airport",
    "name": "Southend on Sea",
    "lat": "51.5678",
    "lon": "0.69928",
    "country": "United Kingdom"
  },
  {
    "airport_code": "SEW",
    "airport_name": "",
    "name": "Siwa",
    "lat": "40.6438",
    "lon": "-93.2598",
    "country": "Egypt"
  },
  {
    "airport_code": "SEZ",
    "airport_name": "Seychelles International Airport",
    "name": "Victoria",
    "lat": "-4.6751",
    "lon": "55.5177",
    "country": "Seychelles"
  },
  {
    "airport_code": "SFA",
    "airport_name": "El Maou Airport",
    "name": "Safaqis",
    "lat": "34.7181",
    "lon": "10.6917",
    "country": "Tunisia"
  },
  {
    "airport_code": "SFB",
    "airport_name": "Orlando Sanford International Airport",
    "name": "Sanford",
    "lat": "28.773",
    "lon": "-81.2403",
    "country": "United States"
  },
  {
    "airport_code": "SFD",
    "airport_name": "San Fernando de Apure Airport",
    "name": "San Fernando de Apure",
    "lat": "7.8856",
    "lon": "-67.4406",
    "country": "Venezuela"
  },
  {
    "airport_code": "SFE",
    "airport_name": "San Fernando Airport",
    "name": "San Fernando",
    "lat": "16.5958",
    "lon": "120.302",
    "country": "Philippines"
  },
  
  {
    "airport_code": "SFJ",
    "airport_name": "Kangerlussuaq",
    "name": "Kangerlussuaq",
    "lat": "67.0169",
    "lon": "-50.6892",
    "country": "Greenland"
  },
  {
    "airport_code": "SFL",
    "airport_name": "",
    "name": "Sao Filipe",
    "lat": "14.9",
    "lon": "-24.5167",
    "country": "Cape Verde"
  },
  {
    "airport_code": "SFN",
    "airport_name": "Sauce Viejo Airport",
    "name": "Santa Fe",
    "lat": "-31.7108",
    "lon": "-60.8117",
    "country": "Argentina"
  },
  {
    "airport_code": "SFO",
    "airport_name": "San Francisco International Airport",
    "name": "San Francisco",
    "lat": "37.6148",
    "lon": "-122.392",
    "country": "United States"
  },
  {
    "airport_code": "SFT",
    "airport_name": "Skelleftea Airport",
    "name": "Skelleftea",
    "lat": "64.6236",
    "lon": "21.0675",
    "country": "Sweden"
  },
  {
    "airport_code": "SGC",
    "airport_name": "Surgut North Airport",
    "name": "Khanty-Mansiysk",
    "lat": "61.3468",
    "lon": "73.4182",
    "country": "Russia"
  },
  {
    "airport_code": "SGD",
    "airport_name": "Sonderborg Airport",
    "name": "Sonderborg",
    "lat": "54.963",
    "lon": "9.78978",
    "country": "Denmark"
  },
  {
    "airport_code": "SGF",
    "airport_name": "Springfield Regional Airport",
    "name": "Springfield",
    "lat": "37.243",
    "lon": "-93.3817",
    "country": "United States"
  },
  {
    "airport_code": "SGN",
    "airport_name": "Tan Son Nhut Airport",
    "name": "Ho Chi Minh City",
    "lat": "10.8191",
    "lon": "106.658",
    "country": "Vietnam"
  },
  {
    "airport_code": "SGO",
    "airport_name": "St George",
    "name": "St George",
    "lat": "-28.0833",
    "lon": "148.75",
    "country": "Australia"
  },
  {
    "airport_code": "SGU",
    "airport_name": "St George Municipal Airport",
    "name": "St. George",
    "lat": "37.0973",
    "lon": "-113.591",
    "country": "United States"
  },
  {
    "airport_code": "SGX",
    "airport_name": "Ruvuma",
    "name": "Songea",
    "lat": "-10.6668",
    "lon": "36.3287",
    "country": "Tanzania"
  },
  {
    "airport_code": "SGY",
    "airport_name": "Skagway Airport",
    "name": "Skagway",
    "lat": "59.4594",
    "lon": "-135.314",
    "country": "United States"
  },
  {
    "airport_code": "SHA",
    "airport_name": "Hongqiao Airport",
    "name": "Shanghai",
    "lat": "31.1865",
    "lon": "121.34",
    "country": "China"
  },
  {
    "airport_code": "SHB",
    "airport_name": "Nakashibetsu Airport",
    "name": "Nakashibetsu-cho",
    "lat": "43.5767",
    "lon": "144.958",
    "country": "Japan"
  },
  {
    "airport_code": "SHC",
    "airport_name": "",
    "name": "Indaselassie",
    "lat": "14.0833",
    "lon": "38.2833",
    "country": "Ethiopia"
  },
  {
    "airport_code": "SHD",
    "airport_name": "Shenandoah Valley Regional Airport",
    "name": "Weyers Cave",
    "lat": "38.2637",
    "lon": "-78.9013",
    "country": "United States"
  },
  {
    "airport_code": "SHE",
    "airport_name": "Dongta Airport",
    "name": "Shenyang",
    "lat": "41.7857",
    "lon": "123.529",
    "country": "China"
  },
  {
    "airport_code": "SHG",
    "airport_name": "Shungnak Airport",
    "name": "Shungnak",
    "lat": "66.8801",
    "lon": "-157.067",
    "country": "United States"
  },
  {
    "airport_code": "SHH",
    "airport_name": "Shishmaref",
    "name": "Shishmaref",
    "lat": "66.2568",
    "lon": "-166.067",
    "country": "United States"
  },
  {
    "airport_code": "SHJ",
    "airport_name": "Sharjah International Airport",
    "name": "Ajman",
    "lat": "25.3297",
    "lon": "55.5178",
    "country": "United Arab Emirates"
  },
  {
    "airport_code": "SHL",
    "airport_name": "",
    "name": "Shillong",
    "lat": "25.5667",
    "lon": "91.8833",
    "country": "India"
  },
  {
    "airport_code": "SHM",
    "airport_name": "Nanki-Shirahama Airport",
    "name": "Shirahama-cho",
    "lat": "33.664",
    "lon": "135.362",
    "country": "Japan"
  },
  {
    "airport_code": "SHP",
    "airport_name": "Qinhuangdao",
    "name": "Qinhuangdao",
    "lat": "45.0167",
    "lon": "119.75",
    "country": "China"
  },
  {
    "airport_code": "SHR",
    "airport_name": "Sheridan County Airport",
    "name": "Sheridan",
    "lat": "44.7739",
    "lon": "-106.97",
    "country": "United States"
  },
  {
    "airport_code": "SHV",
    "airport_name": "Shreveport Regional Airport",
    "name": "Shreveport",
    "lat": "32.4549",
    "lon": "-93.8285",
    "country": "United States"
  },
  {
    "airport_code": "SHW",
    "airport_name": "Sharurah Airport",
    "name": "As-Saraura",
    "lat": "17.4686",
    "lon": "47.1242",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "SHX",
    "airport_name": "Shageluk",
    "name": "Shageluk",
    "lat": "62.6333",
    "lon": "-159.583",
    "country": "United States"
  },
  {
    "airport_code": "SHY",
    "airport_name": "Shinyanga",
    "name": "Shinyanga",
    "lat": "-3.66487",
    "lon": "33.4212",
    "country": "Tanzania"
  },
  {
    "airport_code": "SIA",
    "airport_name": "Xiguan Airport",
    "name": "Xi'an",
    "lat": "34.3667",
    "lon": "108.7",
    "country": "China"
  },
  {
    "airport_code": "SIC",
    "airport_name": "",
    "name": "Sinop",
    "lat": "42.0189",
    "lon": "35.0792",
    "country": "Turkey"
  },
  {
    "airport_code": "SID",
    "airport_name": "Amilcar Cabral International Airport",
    "name": "Santa Maria",
    "lat": "16.745",
    "lon": "-22.9517",
    "country": "Cape Verde"
  },
  {
    "airport_code": "SIF",
    "airport_name": "Simara Airport",
    "name": "Simara",
    "lat": "27",
    "lon": "85.5333",
    "country": "Nepal"
  },
  {
    "airport_code": "SIG",
    "airport_name": "Isla Grande Airport",
    "name": "San Juan",
    "lat": "18.4558",
    "lon": "-66.0981",
    "country": "United States"
  },
  {
    "airport_code": "SIN",
    "airport_name": "Singapore Changi Airport",
    "name": "Singapore",
    "lat": "1.3578",
    "lon": "103.991",
    "country": "Singapore"
  },
  {
    "airport_code": "SIP",
    "airport_name": "Simferopol North Airport",
    "name": "Simferopol'",
    "lat": "45.0153",
    "lon": "33.9941",
    "country": "Ukraine"
  },
  {
    "airport_code": "SIT",
    "airport_name": "Sitka Airport",
    "name": "Sitka",
    "lat": "57.0535",
    "lon": "-135.366",
    "country": "United States"
  },
  {
    "airport_code": "SJC",
    "airport_name": "Norman Y Mineta San Jose International Airport",
    "name": "San Jose",
    "lat": "37.3679",
    "lon": "-121.926",
    "country": "United States"
  },
  {
    "airport_code": "SJD",
    "airport_name": "Los Cabos International Airport",
    "name": "S. Jose del Cabo",
    "lat": "23.1564",
    "lon": "-109.723",
    "country": "Mexico"
  },
  {
    "airport_code": "SJE",
    "airport_name": "San Jose del Guaviaro Airport",
    "name": "San Jose del Guavuare",
    "lat": "2.59328",
    "lon": "-72.6081",
    "country": "Colombia"
  },
  {
    "airport_code": "SJI",
    "airport_name": "San Jose Airport",
    "name": "San Jose",
    "lat": "12.3611",
    "lon": "121.047",
    "country": "Philippines"
  },
  {
    "airport_code": "SJJ",
    "airport_name": "Sarajevo Airport",
    "name": "Ilidža",
    "lat": "43.8247",
    "lon": "18.3361",
    "country": "Bosnia and Herzegovina"
  },
  {
    "airport_code": "SJK",
    "airport_name": "Sao Jose dos Campos Airport",
    "name": "Sao Jose dos Campos",
    "lat": "-23.2283",
    "lon": "-45.8706",
    "country": "Brazil"
  },
  {
    "airport_code": "SJO",
    "airport_name": "Juan Santamaria International Airport",
    "name": "Heredia",
    "lat": "9.9919",
    "lon": "-84.2114",
    "country": "Costa Rica"
  },
  {
    "airport_code": "SJP",
    "airport_name": "Sao Jose do Rio Preto Airport",
    "name": "São José do Rio Prêto",
    "lat": "-20.8156",
    "lon": "-49.4042",
    "country": "Brazil"
  },
  {
    "airport_code": "SJT",
    "airport_name": "Mathis Field Airport",
    "name": "San Angelo",
    "lat": "31.3616",
    "lon": "-100.507",
    "country": "United States"
  },
  {
    "airport_code": "SJU",
    "airport_name": "Luis Munoz Marin Airport",
    "name": "Carolina",
    "lat": "18.4367",
    "lon": "-66.0095",
    "country": "United States"
  },
  {
    "airport_code": "SJW",
    "airport_name": "Shijiazhuang",
    "name": "Shijiazhuang",
    "lat": "38.0492",
    "lon": "114.489",
    "country": "China"
  },
  {
    "airport_code": "SJY",
    "airport_name": "Ilmajoki Airport",
    "name": "Seinajoki",
    "lat": "62.6937",
    "lon": "22.8289",
    "country": "Finland"
  },
  {
    "airport_code": "SJZ",
    "airport_name": "Sao Jorge Airport",
    "name": "Velas",
    "lat": "38.6653",
    "lon": "-28.175",
    "country": "Portugal"
  },
  {
    "airport_code": "SKB",
    "airport_name": "Golden Rock Airport",
    "name": "Basseterre",
    "lat": "17.3128",
    "lon": "-62.7178",
    "country": "Saint Kitts and Nevis"
  },
  {
    "airport_code": "SKC",
    "airport_name": "Papua New Guinea",
    "name": "Suki",
    "lat": "-6.65619",
    "lon": "145.859",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "SKD",
    "airport_name": "Samarqand",
    "name": "Samarkand",
    "lat": "39.6667",
    "lon": "66.9667",
    "country": "Uzbekistan"
  },
  {
    "airport_code": "SKE",
    "airport_name": "Geiterygen Airport",
    "name": "Skien",
    "lat": "59.1844",
    "lon": "9.56938",
    "country": "Norway"
  },
  {
    "airport_code": "SKG",
    "airport_name": "Thessaloniki Airport",
    "name": "Thessaloniki",
    "lat": "40.5208",
    "lon": "22.9722",
    "country": "Greece"
  },
  {
    "airport_code": "SKH",
    "airport_name": "Surkhet",
    "name": "Surkhet",
    "lat": "28.4908",
    "lon": "81.7689",
    "country": "Nepal"
  },
  {
    "airport_code": "SKK",
    "airport_name": "Shaktoolik",
    "name": "Shaktoolik",
    "lat": "64.3549",
    "lon": "-161.193",
    "country": "United States"
  },
  {
    "airport_code": "SKN",
    "airport_name": "Stokmarknes Airport",
    "name": "Stokkmarknes",
    "lat": "68.5802",
    "lon": "15.0325",
    "country": "Norway"
  },
  {
    "airport_code": "SKO",
    "airport_name": "Sadiq Abubakar Iii Airport",
    "name": "Shunni",
    "lat": "12.9164",
    "lon": "5.2075",
    "country": "Nigeria"
  },
  {
    "airport_code": "SKP",
    "airport_name": "Petrovec",
    "name": "Skopje",
    "lat": "41.9606",
    "lon": "21.6217",
    "country": "Macedonia"
  },
  
  {
    "airport_code": "SKU",
    "airport_name": "Skiros Airport",
    "name": "Skiros",
    "lat": "38.9683",
    "lon": "24.4881",
    "country": "Greece"
  },
  {
    "airport_code": "SKZ",
    "airport_name": "Sukkur Airport",
    "name": "Sukkur",
    "lat": "27.7236",
    "lon": "68.7903",
    "country": "Pakistan"
  },
  {
    "airport_code": "SLA",
    "airport_name": "Salta Airport",
    "name": "La Caldera",
    "lat": "-24.8589",
    "lon": "-65.4756",
    "country": "Argentina"
  },
  {
    "airport_code": "SLC",
    "airport_name": "Salt Lake City International Airport",
    "name": "Salt Lake City",
    "lat": "40.7862",
    "lon": "-111.982",
    "country": "United States"
  },
  {
    "airport_code": "SLE",
    "airport_name": "Mcnary Field Airport",
    "name": "Salem",
    "lat": "44.9104",
    "lon": "-123.008",
    "country": "United States"
  },
  {
    "airport_code": "SLH",
    "airport_name": "Torba",
    "name": "Sola",
    "lat": "-14.2459",
    "lon": "167.509",
    "country": "Vanuatu"
  },
  
  {
    "airport_code": "SLK",
    "airport_name": "Adirondack Regional Airport",
    "name": "Saranac Lake",
    "lat": "44.3804",
    "lon": "-74.2038",
    "country": "United States"
  },
  {
    "airport_code": "SLL",
    "airport_name": "Salalah Airport",
    "name": "Salalah",
    "lat": "17.0411",
    "lon": "54.0944",
    "country": "Oman"
  },
  {
    "airport_code": "SLM",
    "airport_name": "Salamanca Airport",
    "name": "Villagonzalo de Tormes",
    "lat": "40.9465",
    "lon": "-5.50744",
    "country": "Spain"
  },
  {
    "airport_code": "SLN",
    "airport_name": "Salina Municipal Airport",
    "name": "Salina",
    "lat": "38.7786",
    "lon": "-97.6397",
    "country": "United States"
  },
  {
    "airport_code": "SLP",
    "airport_name": "San Luis Potosi Airport",
    "name": "S. Luis Potosi",
    "lat": "22.2539",
    "lon": "-100.927",
    "country": "Mexico"
  },
  {
    "airport_code": "SLQ",
    "airport_name": "Sleetmute Airport",
    "name": "Sleetmute",
    "lat": "61.7",
    "lon": "-157.117",
    "country": "United States"
  },
  {
    "airport_code": "SLU",
    "airport_name": "Vigie Airport",
    "name": "St Lucia",
    "lat": "14.0192",
    "lon": "-60.9928",
    "country": "St. Lucia"
  },
  
  {
    "airport_code": "SLW",
    "airport_name": "Plan de Guadalupe Airport",
    "name": "General Cepeda",
    "lat": "25.5467",
    "lon": "-100.929",
    "country": "Mexico"
  },
  {
    "airport_code": "SLX",
    "airport_name": "Salt Cay Airport",
    "name": "Salt Cay",
    "lat": "21.3223",
    "lon": "-71.1983",
    "country": "Turks And Caicos Islands"
  },
  {
    "airport_code": "SLY",
    "airport_name": "Russia",
    "name": "Salekhard",
    "lat": "59.4615",
    "lon": "108.832",
    "country": "Russia"
  },
  {
    "airport_code": "SLZ",
    "airport_name": "Marechal Cunha Machado International Airport",
    "name": "Salvador",
    "lat": "-2.5867",
    "lon": "-44.2358",
    "country": "Brazil"
  },
  {
    "airport_code": "SMA",
    "airport_name": "Santa Maria Airport",
    "name": "Vila do Porto",
    "lat": "36.9658",
    "lon": "-25.1714",
    "country": "Portugal"
  },
  {
    "airport_code": "SMF",
    "airport_name": "Sacramento International Airport",
    "name": "Sacramento",
    "lat": "38.683",
    "lon": "-121.591",
    "country": "United States"
  },
  {
    "airport_code": "SMI",
    "airport_name": "Samos Airport",
    "name": "Pithagorion",
    "lat": "37.6903",
    "lon": "26.9128",
    "country": "Greece"
  },
  {
    "airport_code": "SMK",
    "airport_name": "Alaska",
    "name": "St Michael",
    "lat": "63.4735",
    "lon": "-162.052",
    "country": "United States"
  },
  {
    "airport_code": "SML",
    "airport_name": "Stella Maris Airport",
    "name": "Simms",
    "lat": "23.5833",
    "lon": "-75.2681",
    "country": "Bahamas"
  },
  {
    "airport_code": "SMN",
    "airport_name": "Lemhi County Airport",
    "name": "Salmon",
    "lat": "45.1148",
    "lon": "-113.888",
    "country": "United States"
  },
  
  {
    "airport_code": "SMS",
    "airport_name": "Sainte Marie Airport",
    "name": "Toamasina",
    "lat": "-17.0939",
    "lon": "49.8158",
    "country": "Madagascar"
  },
  {
    "airport_code": "SMX",
    "airport_name": "Santa Maria Public Airport",
    "name": "Santa Maria",
    "lat": "34.8888",
    "lon": "-120.437",
    "country": "United States"
  },
  {
    "airport_code": "SNA",
    "airport_name": "John Wayne Airport",
    "name": "Santa Ana",
    "lat": "33.6813",
    "lon": "-117.859",
    "country": "United States"
  },
  {
    "airport_code": "SNC",
    "airport_name": "General Ulpiano Paez Airport",
    "name": "Salinas",
    "lat": "-2.2",
    "lon": "-80.985",
    "country": "Ecuador"
  },
  {
    "airport_code": "SNE",
    "airport_name": "Preguica Airport",
    "name": "Ribeira Brava",
    "lat": "16.5869",
    "lon": "-24.2886",
    "country": "Cape Verde"
  },
  {
    "airport_code": "SNN",
    "airport_name": "Shannon Airport",
    "name": "Shannon Airport",
    "lat": "52.6931",
    "lon": "-8.92047",
    "country": "Ireland"
  },
  {
    "airport_code": "SNO",
    "airport_name": "Sakon Nakhon Airport",
    "name": "Sakon Nakhon",
    "lat": "17.2847",
    "lon": "104.107",
    "country": "Thailand"
  },
  {
    "airport_code": "SNP",
    "airport_name": "Saint Paul Island",
    "name": "Saint Paul Island",
    "lat": "57.1667",
    "lon": "-170.217",
    "country": "United States"
  },
  
  
  {
    "airport_code": "SNW",
    "airport_name": "Myanmar",
    "name": "Thandwe",
    "lat": "18.4587",
    "lon": "94.3696",
    "country": "Myanmar"
  },
  
  {
    "airport_code": "SOC",
    "airport_name": "Adi Sumarmo Wiryokusumo Airport",
    "name": "Surakarta",
    "lat": "-7.5181",
    "lon": "110.751",
    "country": "Indonesia"
  },
  {
    "airport_code": "SOF",
    "airport_name": "Vrazhdebna Airport",
    "name": "Sofia",
    "lat": "42.6895",
    "lon": "23.4024",
    "country": "Bulgaria"
  },
  {
    "airport_code": "SOG",
    "airport_name": "Haukasen Airport",
    "name": "Kaupanger",
    "lat": "61.1566",
    "lon": "7.13623",
    "country": "Norway"
  },
  {
    "airport_code": "SOJ",
    "airport_name": "Sorkjosen Airport",
    "name": "Sørkjosen",
    "lat": "69.7833",
    "lon": "20.9333",
    "country": "Norway"
  },
  {
    "airport_code": "SOM",
    "airport_name": "San Tome Airport",
    "name": "Cantaura",
    "lat": "8.9489",
    "lon": "-64.1478",
    "country": "Venezuela"
  },
  
  {
    "airport_code": "SOO",
    "airport_name": "Soderhamn Airport",
    "name": "Soderhamn",
    "lat": "61.2698",
    "lon": "17.0906",
    "country": "Sweden"
  },
  {
    "airport_code": "SOQ",
    "airport_name": "Jefman Airport",
    "name": "Sorong",
    "lat": "-0.9326",
    "lon": "131.12",
    "country": "Indonesia"
  },
  {
    "airport_code": "SOU",
    "airport_name": "Southampton International Airport",
    "name": "Southampton",
    "lat": "50.9512",
    "lon": "-1.36139",
    "country": "United Kingdom"
  },
  {
    "airport_code": "SOV",
    "airport_name": "",
    "name": "Seldovia",
    "lat": "59.4428",
    "lon": "-151.705",
    "country": "United States"
  },
  
  {
    "airport_code": "SPB",
    "airport_name": "St Thomas Seaplane Base",
    "name": "Charlotte Amalie",
    "lat": "18.3409",
    "lon": "-64.9698",
    "country": "United States"
  },
  {
    "airport_code": "SPC",
    "airport_name": "Santa Cruz de la Palma Airport",
    "name": "Breña Alta",
    "lat": "28.6676",
    "lon": "-17.7708",
    "country": "Spain"
  },
  {
    "airport_code": "SPD",
    "airport_name": "Saidpur Airport",
    "name": "Dinajpur",
    "lat": "25.7625",
    "lon": "88.91",
    "country": "Bangladesh"
  },
  {
    "airport_code": "SPI",
    "airport_name": "Capital Airport",
    "name": "Springfield",
    "lat": "39.8445",
    "lon": "-89.672",
    "country": "United States"
  },
  {
    "airport_code": "SPL",
    "airport_name": "Santa Maria Airport",
    "name": "Vila do Porto",
    "lat": "36.9658",
    "lon": "-25.1714",
    "country": "Portugal"
  },
  {
    "airport_code": "SPN",
    "airport_name": "Saipan International Airport",
    "name": "Saipan",
    "lat": "15.1333",
    "lon": "145.717",
    "country": "United States"
  },
  {
    "airport_code": "SPP",
    "airport_name": "Menongue East Airport",
    "name": "Menongue",
    "lat": "-14.6542",
    "lon": "17.7247",
    "country": "Angola"
  },
  {
    "airport_code": "SPR",
    "airport_name": "San Pedro Airport",
    "name": "San Pedro",
    "lat": "17.9167",
    "lon": "-87.9667",
    "country": "Belize"
  },
  
  {
    "airport_code": "SPU",
    "airport_name": "Split Airport",
    "name": "Split",
    "lat": "43.5406",
    "lon": "16.3",
    "country": "Croatia"
  },
  {
    "airport_code": "SQO",
    "airport_name": "Sweden",
    "name": "Storuman",
    "lat": "62.1984",
    "lon": "17.5514",
    "country": "Sweden"
  },
  {
    "airport_code": "SRA",
    "airport_name": "Santa Rosa Airport",
    "name": "Santa Rosa",
    "lat": "-27.9083",
    "lon": "-54.5217",
    "country": "Brazil"
  },
  {
    "airport_code": "SRE",
    "airport_name": "Juana Azurduy de Padilla Airport",
    "name": "Sucre",
    "lat": "-19.0008",
    "lon": "-65.2878",
    "country": "Bolivia"
  },
  {
    "airport_code": "SRG",
    "airport_name": "Achmad Yani Airport",
    "name": "Semarang",
    "lat": "-6.9758",
    "lon": "110.38",
    "country": "Indonesia"
  },
  {
    "airport_code": "SRJ",
    "airport_name": "Capitan G Q Guardia",
    "name": "San Borja",
    "lat": "-14.8573",
    "lon": "-66.7383",
    "country": "Bolivia"
  },
  {
    "airport_code": "SRP",
    "airport_name": "Sorstukken Airport",
    "name": "Skjold",
    "lat": "59.7928",
    "lon": "5.33972",
    "country": "Norway"
  },
  {
    "airport_code": "SRQ",
    "airport_name": "Sarasota Bradenton Airport",
    "name": "Sarasota",
    "lat": "27.3868",
    "lon": "-82.5516",
    "country": "United States"
  },
  {
    "airport_code": "SRV",
    "airport_name": "Alaska",
    "name": "Stony River",
    "lat": "62.8903",
    "lon": "-149.054",
    "country": "United States"
  },
  {
    "airport_code": "SRX",
    "airport_name": "Surt",
    "name": "Sert",
    "lat": "31.206",
    "lon": "16.5924",
    "country": "Libya"
  },
  {
    "airport_code": "SRY",
    "airport_name": "",
    "name": "Sary",
    "lat": "36.635",
    "lon": "53.1933",
    "country": "Iran"
  },
  {
    "airport_code": "SRZ",
    "airport_name": "El Trompillo Airport",
    "name": "Santa Cruz de la Sierra",
    "lat": "-17.8072",
    "lon": "-63.1708",
    "country": "Bolivia"
  },
  {
    "airport_code": "SSA",
    "airport_name": "Deputado Luis Eduardo Magalhaes International Ai",
    "name": "Salvador",
    "lat": "-12.9081",
    "lon": "-38.3222",
    "country": "Brazil"
  },
  {
    "airport_code": "SSB",
    "airport_name": "Christiansted Harbor Seaplane Base",
    "name": "Christiansted",
    "lat": "17.75",
    "lon": "-64.7",
    "country": "United States"
  },
  {
    "airport_code": "SSG",
    "airport_name": "Malabo Airport",
    "name": "Malabo",
    "lat": "3.7472",
    "lon": "8.7083",
    "country": "Equatorial Guinea"
  },
  {
    "airport_code": "SSH",
    "airport_name": "Ras Nasrani Airport",
    "name": "Al Arish",
    "lat": "27.975",
    "lon": "34.3897",
    "country": "Egypt"
  },
  {
    "airport_code": "SSJ",
    "airport_name": "Stokka Airport",
    "name": "Sandnessjoen",
    "lat": "65.9612",
    "lon": "12.474",
    "country": "Norway"
  },
  {
    "airport_code": "SSR",
    "airport_name": "Vanuatu",
    "name": "Sara",
    "lat": "-15.1468",
    "lon": "167.038",
    "country": "Vanuatu"
  },
  {
    "airport_code": "SSY",
    "airport_name": "Mbanza Congo Airport",
    "name": "M'banza Congo",
    "lat": "-6.2739",
    "lon": "14.2503",
    "country": "Angola"
  },
  {
    "airport_code": "STC",
    "airport_name": "St Cloud Regional Airport",
    "name": "St. Cloud",
    "lat": "45.5463",
    "lon": "-94.066",
    "country": "United States"
  },
  {
    "airport_code": "STD",
    "airport_name": "Mayor Buenaventura Vivas Airport",
    "name": "Santa Ana del Tachira",
    "lat": "7.57033",
    "lon": "-72.0443",
    "country": "Venezuela"
  },
  {
    "airport_code": "STG",
    "airport_name": "Alaska",
    "name": "St George Island",
    "lat": "62.8903",
    "lon": "-149.054",
    "country": "United States"
  },
  {
    "airport_code": "STI",
    "airport_name": "Cibao International Airport",
    "name": "La Lomota",
    "lat": "19.4692",
    "lon": "-70.7003",
    "country": "Dominican Republic"
  },
  {
    "airport_code": "STL",
    "airport_name": "Lambert St Louis International Airport",
    "name": "St. Louis",
    "lat": "38.7414",
    "lon": "-90.3647",
    "country": "United States"
  },
  {
    "airport_code": "STM",
    "airport_name": "Santarem International Airport",
    "name": "Santarém",
    "lat": "-2.4244",
    "lon": "-54.7853",
    "country": "Brazil"
  },
  {
    "airport_code": "STN",
    "airport_name": "London Stansted International Airport",
    "name": "Stansted Mountfitchet",
    "lat": "51.8894",
    "lon": "0.26151",
    "country": "United Kingdom"
  },
  {
    "airport_code": "STR",
    "airport_name": "Stuttgart Airport",
    "name": "Stuttgart",
    "lat": "48.6895",
    "lon": "9.19298",
    "country": "Germany"
  },
  {
    "airport_code": "STS",
    "airport_name": "Sonoma County Airport",
    "name": "Windsor",
    "lat": "38.511",
    "lon": "-122.805",
    "country": "United States"
  },
  {
    "airport_code": "STT",
    "airport_name": "Cyril E King International Airport",
    "name": "Charlotte Amalie",
    "lat": "18.3333",
    "lon": "-64.9667",
    "country": "United States"
  },
  {
    "airport_code": "STV",
    "airport_name": "Surat Airport",
    "name": "Un",
    "lat": "21.1667",
    "lon": "72.8333",
    "country": "India"
  },
  {
    "airport_code": "STW",
    "airport_name": "Mikhaylovskoye Airport",
    "name": "Stavropol'",
    "lat": "45.1104",
    "lon": "42.1089",
    "country": "Russia"
  },
  {
    "airport_code": "STX",
    "airport_name": "Henry E Rohlson International Airport",
    "name": "Frederiksted",
    "lat": "17.6988",
    "lon": "-64.7977",
    "country": "United States"
  },
  {
    "airport_code": "SUB",
    "airport_name": "Juanda Airport",
    "name": "Sidoarjo",
    "lat": "-7.38",
    "lon": "112.785",
    "country": "Indonesia"
  },
  {
    "airport_code": "SUF",
    "airport_name": "Lamezia Terme Airport",
    "name": "Case Cervi",
    "lat": "38.9087",
    "lon": "16.2443",
    "country": "Italy"
  },
  {
    "airport_code": "SUG",
    "airport_name": "Surigao Airport",
    "name": "Surigao City",
    "lat": "9.7589",
    "lon": "125.479",
    "country": "Philippines"
  },
  {
    "airport_code": "SUJ",
    "airport_name": "Satu Mare Airport",
    "name": "Satu Mare",
    "lat": "47.7134",
    "lon": "22.8887",
    "country": "Romania"
  },
  {
    "airport_code": "SUN",
    "airport_name": "Friedman Memorial Airport",
    "name": "Hailey",
    "lat": "43.5065",
    "lon": "-114.301",
    "country": "United States"
  },
  {
    "airport_code": "SUR",
    "airport_name": "Summer Beaver",
    "name": "Summer Beaver",
    "lat": "52.7086",
    "lon": "-88.5419",
    "country": "Canada"
  },
  {
    "airport_code": "SUV",
    "airport_name": "Nausori International Airport",
    "name": "Nausori",
    "lat": "-18.05",
    "lon": "178.567",
    "country": "Fiji"
  },
  {
    "airport_code": "SUX",
    "airport_name": "Sioux Gateway Airport",
    "name": "Sioux City",
    "lat": "42.4012",
    "lon": "-96.3784",
    "country": "United States"
  },
  {
    "airport_code": "SVA",
    "airport_name": "Alaska",
    "name": "Savoonga",
    "lat": "63.6951",
    "lon": "-170.465",
    "country": "United States"
  },
  {
    "airport_code": "SVB",
    "airport_name": "Sambava",
    "name": "Sambava",
    "lat": "-14.2505",
    "lon": "50.1539",
    "country": "Madagascar"
  },
  {
    "airport_code": "SVC",
    "airport_name": "Silver City-Grant County Airport",
    "name": "Silver City",
    "lat": "32.6301",
    "lon": "-108.164",
    "country": "United States"
  },
  {
    "airport_code": "SVD",
    "airport_name": "E T Joshua Airport",
    "name": "Kingstown",
    "lat": "13.1422",
    "lon": "-61.2111",
    "country": "Saint Vincent and the Grenadines"
  },
  {
    "airport_code": "SVG",
    "airport_name": "Stavanger Sola Airport",
    "name": "Rage",
    "lat": "58.8806",
    "lon": "5.63019",
    "country": "Norway"
  },
  {
    "airport_code": "SVI",
    "airport_name": "San Vicente del Caguan Airport",
    "name": "San Vicente del Caguán",
    "lat": "2.1464",
    "lon": "-74.7622",
    "country": "Colombia"
  },
  {
    "airport_code": "SVJ",
    "airport_name": "Helle Airport",
    "name": "Svolvar",
    "lat": "68.2441",
    "lon": "14.6669",
    "country": "Norway"
  },
  {
    "airport_code": "SVL",
    "airport_name": "Savonlinna Airport",
    "name": "Savonlinna",
    "lat": "61.9464",
    "lon": "28.9355",
    "country": "Finland"
  },
  {
    "airport_code": "SVO",
    "airport_name": "Sheremtyevo Airport",
    "name": "Zelenograd",
    "lat": "55.9621",
    "lon": "37.4189",
    "country": "Russia"
  },
  {
    "airport_code": "SVQ",
    "airport_name": "Sevilla Airport",
    "name": "Seville",
    "lat": "37.4224",
    "lon": "-5.89796",
    "country": "Spain"
  },
  {
    "airport_code": "SVS",
    "airport_name": "Stevens Village",
    "name": "Stevens Village",
    "lat": "66.0044",
    "lon": "-149.091",
    "country": "United States"
  },
  {
    "airport_code": "SVU",
    "airport_name": "Savusavu Airport",
    "name": "Labasa",
    "lat": "-16.8",
    "lon": "179.35",
    "country": "Fiji"
  },
  {
    "airport_code": "SVX",
    "airport_name": "Koltsovo Airport",
    "name": "Yekaterinburg",
    "lat": "56.7435",
    "lon": "60.7911",
    "country": "Russia"
  },
  {
    "airport_code": "SVZ",
    "airport_name": "San Antonio del Tachira Airport",
    "name": "Táriba",
    "lat": "7.8431",
    "lon": "-72.4381",
    "country": "Venezuela"
  },
  {
    "airport_code": "SWA",
    "airport_name": "Shantou Northeast Airport",
    "name": "Chenghai",
    "lat": "23.425",
    "lon": "116.759",
    "country": "China"
  },
  {
    "airport_code": "SWF",
    "airport_name": "Stewart International Airport",
    "name": "New Windsor",
    "lat": "41.4869",
    "lon": "-74.0974",
    "country": "United States"
  },
  {
    "airport_code": "SWJ",
    "airport_name": "South West Bay Airport",
    "name": "South West Bay",
    "lat": "-16.4917",
    "lon": "167.439",
    "country": "Vanuatu"
  },
  
  
  {
    "airport_code": "SWQ",
    "airport_name": "Brang Bidji Airport",
    "name": "Sumbawa Besar",
    "lat": "-8.4933",
    "lon": "117.421",
    "country": "Indonesia"
  },
  {
    "airport_code": "SWS",
    "airport_name": "Swansea Airport",
    "name": "Swansea",
    "lat": "51.6006",
    "lon": "-4.07",
    "country": "United Kingdom"
  },
  {
    "airport_code": "SXB",
    "airport_name": "Entzheim Airport",
    "name": "Entzheim",
    "lat": "48.5427",
    "lon": "7.63466",
    "country": "France"
  },
  {
    "airport_code": "SXF",
    "airport_name": "Berlin-Schonefeld International Airport",
    "name": "Schönefeld",
    "lat": "52.3886",
    "lon": "13.5188",
    "country": "Germany"
  },
  {
    "airport_code": "SXL",
    "airport_name": "Sligo Airport",
    "name": "Larass",
    "lat": "54.275",
    "lon": "-8.6",
    "country": "Ireland"
  },
  
  {
    "airport_code": "SXP",
    "airport_name": "Sheldon SPB",
    "name": "Sheldon Point",
    "lat": "62.5333",
    "lon": "-164.833",
    "country": "United States"
  },
  {
    "airport_code": "SXR",
    "airport_name": "Srinagar Airport",
    "name": "Srinagar",
    "lat": "33.9833",
    "lon": "74.7833",
    "country": "India"
  },
  {
    "airport_code": "SYB",
    "airport_name": "Seal Bay Airport",
    "name": "Kodiak",
    "lat": "58.1667",
    "lon": "-152.5",
    "country": "United States"
  },
  {
    "airport_code": "SYD",
    "airport_name": "Kingsford Smith Airport",
    "name": "Sydney",
    "lat": "-33.9344",
    "lon": "151.168",
    "country": "Australia"
  },
  {
    "airport_code": "SYJ",
    "airport_name": "",
    "name": "Sirjan",
    "lat": "29.5504",
    "lon": "55.6708",
    "country": "Iran"
  },
  {
    "airport_code": "SYM",
    "airport_name": "Simao",
    "name": "Simao",
    "lat": "22.8333",
    "lon": "101",
    "country": "China"
  },
  {
    "airport_code": "SYO",
    "airport_name": "Shonai",
    "name": "Shonai",
    "lat": "38.7061",
    "lon": "140.018",
    "country": "Japan"
  },
  {
    "airport_code": "SYR",
    "airport_name": "Hancock International Airport",
    "name": "Syracuse",
    "lat": "43.1141",
    "lon": "-76.1121",
    "country": "United States"
  },
  {
    "airport_code": "SYU",
    "airport_name": "Australia",
    "name": "Sue Island",
    "lat": "-31.875",
    "lon": "136.081",
    "country": "Australia"
  },
  {
    "airport_code": "SYX",
    "airport_name": "Sanya",
    "name": "Sanya",
    "lat": "18.281",
    "lon": "109.498",
    "country": "China"
  },
  {
    "airport_code": "SYY",
    "airport_name": "Stornoway Airport",
    "name": "Isle of lewis",
    "lat": "58.2119",
    "lon": "-6.32319",
    "country": "United Kingdom"
  },
  {
    "airport_code": "SYZ",
    "airport_name": "Shiraz International Airport",
    "name": "Shiraz",
    "lat": "29.54",
    "lon": "52.5897",
    "country": "Iran"
  },
  {
    "airport_code": "SZA",
    "airport_name": "Soyo Airport",
    "name": "Santo António do Zaire",
    "lat": "-6.1389",
    "lon": "12.3764",
    "country": "Angola"
  },
  {
    "airport_code": "SZB",
    "airport_name": "Sultan Abdul Aziz Shah Airport",
    "name": "Kampong Baru Subang",
    "lat": "3.1303",
    "lon": "101.551",
    "country": "Malaysia"
  },
  {
    "airport_code": "SZD",
    "airport_name": "Sheffield City Airport",
    "name": "Sheffield",
    "lat": "53.3957",
    "lon": "-1.38232",
    "country": "United Kingdom"
  },
  {
    "airport_code": "SZF",
    "airport_name": "Çarşamba",
    "name": "Samsun",
    "lat": "41.1959",
    "lon": "36.7248",
    "country": "Turkey"
  },
  {
    "airport_code": "SZG",
    "airport_name": "Salzburg Airport",
    "name": "Salzburg",
    "lat": "47.7937",
    "lon": "13.0043",
    "country": "Austria"
  },
  {
    "airport_code": "SZV",
    "airport_name": "China",
    "name": "Suzhou",
    "lat": "31.3092",
    "lon": "120.613",
    "country": "China"
  },
  {
    "airport_code": "SZX",
    "airport_name": "Shenzhen Airport",
    "name": "Shenzhen",
    "lat": "22.5333",
    "lon": "113.967",
    "country": "China"
  },
  {
    "airport_code": "SZZ",
    "airport_name": "Golenow Airport",
    "name": "Goleniów",
    "lat": "53.5686",
    "lon": "14.8676",
    "country": "Poland"
  },
  {
    "airport_code": "TAB",
    "airport_name": "Crown Point Airport",
    "name": "Plymouth",
    "lat": "11.25",
    "lon": "-60.6667",
    "country": "Trinidad and Tobago"
  },
  {
    "airport_code": "TAC",
    "airport_name": "Daniel Z Romualdez Airport",
    "name": "Tacloban City",
    "lat": "11.2283",
    "lon": "125.023",
    "country": "Philippines"
  },
  {
    "airport_code": "TAE",
    "airport_name": "Daegu International Airport",
    "name": "Daegu",
    "lat": "35.9007",
    "lon": "128.641",
    "country": "South Korea"
  },
  {
    "airport_code": "TAG",
    "airport_name": "Tagbilaran Airport",
    "name": "Tagbilaran City",
    "lat": "9.6644",
    "lon": "123.852",
    "country": "Philippines"
  },
  {
    "airport_code": "TAH",
    "airport_name": "Tanna Airport",
    "name": "Isangel",
    "lat": "-19.4867",
    "lon": "169.362",
    "country": "Vanuatu"
  },
  {
    "airport_code": "TAI",
    "airport_name": "Taiz Ganed Airport",
    "name": "Al-Ganad",
    "lat": "13.6889",
    "lon": "44.1375",
    "country": "Yemen"
  },
  {
    "airport_code": "TAK",
    "airport_name": "Japan",
    "name": "Takamatsu",
    "lat": "34.2557",
    "lon": "134.046",
    "country": "Japan"
  },
  {
    "airport_code": "TAL",
    "airport_name": "Ralph Calhoun",
    "name": "Tanana",
    "lat": "47.7184",
    "lon": "-115.431",
    "country": "United States"
  },
  {
    "airport_code": "TAM",
    "airport_name": "Gen Francisco J Mina International Airport",
    "name": "Tampico",
    "lat": "22.2881",
    "lon": "-97.8633",
    "country": "Mexico"
  },
  {
    "airport_code": "TAO",
    "airport_name": "Liuting Airport",
    "name": "Wanggezhuang",
    "lat": "36.2311",
    "lon": "120.389",
    "country": "China"
  },
  {
    "airport_code": "TAP",
    "airport_name": "Tapachula International Airport",
    "name": "Tapachula",
    "lat": "14.7931",
    "lon": "-92.37",
    "country": "Mexico"
  },
  {
    "airport_code": "TAS",
    "airport_name": "Tashkent South Airport",
    "name": "Tashkent",
    "lat": "41.2552",
    "lon": "69.2846",
    "country": "Uzbekistan"
  },
  {
    "airport_code": "TAT",
    "airport_name": "Poprad Tatry Airport",
    "name": "Poprad",
    "lat": "49.0663",
    "lon": "20.2445",
    "country": "Slovakia"
  },
  {
    "airport_code": "TBB",
    "airport_name": "Tuy Hoa Airport",
    "name": "Tuy Hoa",
    "lat": "13.0494",
    "lon": "109.334",
    "country": "Vietnam"
  },
  {
    "airport_code": "TBG",
    "airport_name": "Western",
    "name": "Tabubil",
    "lat": "-7.18482",
    "lon": "142.374",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "TBH",
    "airport_name": "Romblon Airport",
    "name": "Alcantara",
    "lat": "12.3133",
    "lon": "122.079",
    "country": "Philippines"
  },
  {
    "airport_code": "TBI",
    "airport_name": "The Bight Airport",
    "name": "New Bight",
    "lat": "24.315",
    "lon": "-75.4536",
    "country": "Bahamas"
  },
  {
    "airport_code": "TBJ",
    "airport_name": "Tabarka Airport",
    "name": "Jundobah",
    "lat": "36.9777",
    "lon": "8.87678",
    "country": "Tunisia"
  },
  {
    "airport_code": "TBN",
    "airport_name": "Waynesville Regional Airport At Forney Field",
    "name": "Fort Leonard Wood",
    "lat": "37.7327",
    "lon": "-92.1361",
    "country": "United States"
  },
  {
    "airport_code": "TBO",
    "airport_name": "",
    "name": "Tabora",
    "lat": "5.08333",
    "lon": "32.8333",
    "country": "Tanzania"
  },
  {
    "airport_code": "TBP",
    "airport_name": "Pedro Canga Airport",
    "name": "Tumbes",
    "lat": "-3.5494",
    "lon": "-80.3781",
    "country": "Peru"
  },
  {
    "airport_code": "TBS",
    "airport_name": "Tbilisi-Noyo Alekseyevka Airport",
    "name": "Tbilisi",
    "lat": "41.6716",
    "lon": "44.9556",
    "country": "Georgia"
  },
  {
    "airport_code": "TBU",
    "airport_name": "Fua'amotu International Airport",
    "name": "Nuku'alofa",
    "lat": "-21.2486",
    "lon": "-175.136",
    "country": "Tonga"
  },
  {
    "airport_code": "TBW",
    "airport_name": "",
    "name": "Tambov",
    "lat": "52.7056",
    "lon": "41.3686",
    "country": "Russia"
  },
  {
    "airport_code": "TBZ",
    "airport_name": "Tabriz Airport",
    "name": "Tabriz",
    "lat": "38.1322",
    "lon": "46.2431",
    "country": "Iran"
  },
  {
    "airport_code": "TCB",
    "airport_name": "Treasure Cay Airport",
    "name": "Green Turtle Cay",
    "lat": "26.7461",
    "lon": "-77.3931",
    "country": "Bahamas"
  },
  {
    "airport_code": "TCE",
    "airport_name": "Cataloi Airport",
    "name": "Tulcea",
    "lat": "45.0653",
    "lon": "28.7232",
    "country": "Romania"
  },
  {
    "airport_code": "TCH",
    "airport_name": "",
    "name": "Tchibanga",
    "lat": "47.4463",
    "lon": "-52.9283",
    "country": "Gabon"
  },
  {
    "airport_code": "TCO",
    "airport_name": "La Florida Airport",
    "name": "Tumaco",
    "lat": "1.8208",
    "lon": "-78.7528",
    "country": "Colombia"
  },
  {
    "airport_code": "TCP",
    "airport_name": "Taba",
    "name": "Taba",
    "lat": "29.4945",
    "lon": "34.8918",
    "country": "Egypt"
  },
  {
    "airport_code": "TCQ",
    "airport_name": "Cor Fap Carlos C Santa Rosa Airport",
    "name": "Tacna",
    "lat": "-18.0508",
    "lon": "-70.2739",
    "country": "Peru"
  },
  {
    "airport_code": "TCR",
    "airport_name": "",
    "name": "Tuticorin",
    "lat": "8.78333",
    "lon": "78.1333",
    "country": "India"
  },
  {
    "airport_code": "TCT",
    "airport_name": "Takotna",
    "name": "Takotna",
    "lat": "62.9845",
    "lon": "-156.07",
    "country": "United States"
  },
  {
    "airport_code": "TDD",
    "airport_name": "Jorge Henrich Arauz Airport",
    "name": "Trinidad",
    "lat": "-14.8156",
    "lon": "-64.9161",
    "country": "Bolivia"
  },
  {
    "airport_code": "TDX",
    "airport_name": "Mueang Trat",
    "name": "Trat",
    "lat": "12.2229",
    "lon": "102.593",
    "country": "Thailand"
  },
  {
    "airport_code": "TEB",
    "airport_name": "Teterboro Airport",
    "name": "Teterboro",
    "lat": "40.8541",
    "lon": "-74.0662",
    "country": "United States"
  },
  {
    "airport_code": "TEE",
    "airport_name": "Tebessa Airport",
    "name": "Tebessa",
    "lat": "35.4308",
    "lon": "8.1244",
    "country": "Algeria"
  },
  {
    "airport_code": "TEK",
    "airport_name": "Tatitlek Seaplane Base",
    "name": "Valdez",
    "lat": "60.8644",
    "lon": "-146.693",
    "country": "United States"
  },
  {
    "airport_code": "TEN",
    "airport_name": "Tongren",
    "name": "Tongren",
    "lat": "35.5089",
    "lon": "102.011",
    "country": "China"
  },
  {
    "airport_code": "TER",
    "airport_name": "Lajes Airport",
    "name": "Praia da Vitória",
    "lat": "38.765",
    "lon": "-27.0958",
    "country": "Portugal"
  },
  {
    "airport_code": "TET",
    "airport_name": "Tete Chingozi Airport",
    "name": "Tete",
    "lat": "-16.1033",
    "lon": "33.6389",
    "country": "Mozambique"
  },
  {
    "airport_code": "TEX",
    "airport_name": "Telluride Regional Airport",
    "name": "Telluride",
    "lat": "37.9544",
    "lon": "-107.901",
    "country": "United States"
  },
  {
    "airport_code": "TFI",
    "airport_name": "",
    "name": "Tufi",
    "lat": "-9.08333",
    "lon": "149.317",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "TFN",
    "airport_name": "Norte-Los Rodeos Airport",
    "name": "Tegueste",
    "lat": "28.4978",
    "lon": "-16.3419",
    "country": "Spain"
  },
  {
    "airport_code": "TFS",
    "airport_name": "Sur-Reina Sofia Airport",
    "name": "Granadilla",
    "lat": "28.0474",
    "lon": "-16.5705",
    "country": "Spain"
  },
  {
    "airport_code": "TGC",
    "airport_name": "Gibson County Airport",
    "name": "Milan",
    "lat": "35.9349",
    "lon": "-88.8506",
    "country": "United States"
  },
  {
    "airport_code": "TGD",
    "airport_name": "Titograd Airport",
    "name": "Podgorica",
    "lat": "42.3675",
    "lon": "19.275",
    "country": "Montenegro"
  },
  {
    "airport_code": "TGG",
    "airport_name": "Sultan Mahmud Airport",
    "name": "Kuala Terengganu",
    "lat": "5.3811",
    "lon": "103.11",
    "country": "Malaysia"
  },
  
  {
    "airport_code": "TGJ",
    "airport_name": "Loyaute",
    "name": "Tiga",
    "lat": "-20.9314",
    "lon": "167.229",
    "country": "New Caledonia"
  },
  
  {
    "airport_code": "TGO",
    "airport_name": "Tongliao",
    "name": "Tongliao",
    "lat": "43.6125",
    "lon": "122.265",
    "country": "China"
  },
  {
    "airport_code": "TGR",
    "airport_name": "Touggourt Airport",
    "name": "Ouargla",
    "lat": "33.0675",
    "lon": "6.0883",
    "country": "Algeria"
  },
  {
    "airport_code": "TGU",
    "airport_name": "Toncontin International Airport",
    "name": "Tegucigalpa",
    "lat": "14.0603",
    "lon": "-87.2172",
    "country": "Honduras"
  },
  {
    "airport_code": "TGZ",
    "airport_name": "Tuxtla Gutierrez Airport",
    "name": "San Fernando",
    "lat": "16.7683",
    "lon": "-93.3422",
    "country": "Mexico"
  },
  {
    "airport_code": "THE",
    "airport_name": "Senador Petronio Portella Airport",
    "name": "Teresina",
    "lat": "-5.0603",
    "lon": "-42.8239",
    "country": "Brazil"
  },
  {
    "airport_code": "THF",
    "airport_name": "Tempelhof Central Airport",
    "name": "Berlin",
    "lat": "52.4825",
    "lon": "13.3892",
    "country": "Germany"
  },
  {
    "airport_code": "THL",
    "airport_name": "Tachilek Airport",
    "name": "Tachilek",
    "lat": "20.4842",
    "lon": "99.9322",
    "country": "Myanmar"
  },
  {
    "airport_code": "THN",
    "airport_name": "Trollhattan Vanersborg Airport",
    "name": "Trollhatan",
    "lat": "58.3161",
    "lon": "12.3507",
    "country": "Sweden"
  },
  {
    "airport_code": "THO",
    "airport_name": "Thorshofn Airport",
    "name": "Thorshofn",
    "lat": "66.2",
    "lon": "-15.3333",
    "country": "Iceland"
  },
  {
    "airport_code": "THR",
    "airport_name": "Mehrabad International Airport",
    "name": "Tehran",
    "lat": "35.6908",
    "lon": "51.3144",
    "country": "Iran"
  },
  {
    "airport_code": "THS",
    "airport_name": "Sukhothai Airport",
    "name": "Sawankhalok",
    "lat": "17.2167",
    "lon": "99.8167",
    "country": "Thailand"
  },
  {
    "airport_code": "THU",
    "airport_name": "Pituffik",
    "name": "Pituffik",
    "lat": "76.53",
    "lon": "-68.7058",
    "country": "Greenland"
  },
  {
    "airport_code": "TIA",
    "airport_name": "Tirane Rinas Airport",
    "name": "Krna",
    "lat": "41.4247",
    "lon": "19.7147",
    "country": "Albania"
  },
  
  {
    "airport_code": "TIH",
    "airport_name": "French Polynesia",
    "name": "Tikehau Atoll",
    "lat": "-17.6902",
    "lon": "-149.376",
    "country": "French Polynesia"
  },
  {
    "airport_code": "TIJ",
    "airport_name": "General Abelardo L Rodriguez International Airpo",
    "name": "Tijuana",
    "lat": "32.5411",
    "lon": "-116.972",
    "country": "Mexico"
  },
  {
    "airport_code": "TIM",
    "airport_name": "Tembagapura Airport",
    "name": "Nabire",
    "lat": "-4.5347",
    "lon": "136.888",
    "country": "Indonesia"
  },
  {
    "airport_code": "TIN",
    "airport_name": "",
    "name": "Tindouf",
    "lat": "39.5354",
    "lon": "-93.4399",
    "country": "Algeria"
  },
  {
    "airport_code": "TIP",
    "airport_name": "International",
    "name": "Tripoli",
    "lat": "31",
    "lon": "15",
    "country": "Libyan Arab Jamahiriya"
  },
  {
    "airport_code": "TIQ",
    "airport_name": "Tinian",
    "name": "Tinian",
    "lat": "45.0039",
    "lon": "12.2686",
    "country": "Northern Mariana Islands"
  },
  {
    "airport_code": "TIR",
    "airport_name": "Tirupathi Airport",
    "name": "Renigunta",
    "lat": "13.6319",
    "lon": "79.5444",
    "country": "India"
  },
  {
    "airport_code": "TIS",
    "airport_name": "Thursday Island Airport",
    "name": "Kubin Village",
    "lat": "-10.586",
    "lon": "142.293",
    "country": "Australia"
  },
  {
    "airport_code": "TIU",
    "airport_name": "Richard Pearse Airport",
    "name": "Timaru",
    "lat": "-44.3015",
    "lon": "171.223",
    "country": "New Zealand"
  },
  {
    "airport_code": "TIV",
    "airport_name": "Tivat Airport",
    "name": "Teodo",
    "lat": "42.4047",
    "lon": "18.7233",
    "country": "Montenegro"
  },
  {
    "airport_code": "TIZ",
    "airport_name": "Tari Airport",
    "name": "Mendi",
    "lat": "-5.83333",
    "lon": "142.95",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "TJA",
    "airport_name": "Capitan Oriel Lea Plaza Airport",
    "name": "Tarija",
    "lat": "-21.5503",
    "lon": "-64.7044",
    "country": "Bolivia"
  },
  {
    "airport_code": "TJM",
    "airport_name": "Tyumen Northwest Airport",
    "name": "Tyumen'",
    "lat": "57.1704",
    "lon": "65.3561",
    "country": "Russia"
  },
  {
    "airport_code": "TJN",
    "airport_name": "French Polynesia",
    "name": "Takume",
    "lat": "-17.6902",
    "lon": "-149.376",
    "country": "French Polynesia"
  },
  {
    "airport_code": "TJQ",
    "airport_name": "Bulutumbang Airport",
    "name": "Tanjungpandan",
    "lat": "-2.7494",
    "lon": "107.763",
    "country": "Indonesia"
  },
  
  {
    "airport_code": "TKG",
    "airport_name": "Branti Airport",
    "name": "Tanjungkarang",
    "lat": "-5.2403",
    "lon": "105.178",
    "country": "Indonesia"
  },
  {
    "airport_code": "TKJ",
    "airport_name": "",
    "name": "Tok",
    "lat": "48.1205",
    "lon": "21.4125",
    "country": "United States"
  },
  {
    "airport_code": "TKK",
    "airport_name": "Truk International Airport",
    "name": "Weno",
    "lat": "7.4569",
    "lon": "151.84",
    "country": "Federated States of Micronesia"
  },
  {
    "airport_code": "TKN",
    "airport_name": "Tokunoshima Airport",
    "name": "Amagi-cho",
    "lat": "27.834",
    "lon": "128.882",
    "country": "Japan"
  },
  {
    "airport_code": "TKP",
    "airport_name": "French Polynesia",
    "name": "Takapoto",
    "lat": "-17.6902",
    "lon": "-149.376",
    "country": "French Polynesia"
  },
  {
    "airport_code": "TKQ",
    "airport_name": "Tanzania",
    "name": "Kigoma",
    "lat": "-4.88005",
    "lon": "29.628",
    "country": "Tanzania"
  },
  {
    "airport_code": "TKS",
    "airport_name": "Tokushima Airport",
    "name": "Matsushige-cho",
    "lat": "34.1339",
    "lon": "134.603",
    "country": "Japan"
  },
  {
    "airport_code": "TKU",
    "airport_name": "Turku Airport",
    "name": "Turku",
    "lat": "60.5138",
    "lon": "22.272",
    "country": "Finland"
  },
  {
    "airport_code": "TKV",
    "airport_name": "French Polynesia",
    "name": "Tatakoto",
    "lat": "-17.3371",
    "lon": "-138.408",
    "country": "French Polynesia"
  },
  {
    "airport_code": "TKX",
    "airport_name": "Takaroa",
    "name": "Takaroa",
    "lat": "-14.4667",
    "lon": "-1.96667",
    "country": "French Polynesia"
  },
  {
    "airport_code": "TLA",
    "airport_name": "Teller",
    "name": "Teller",
    "lat": "65.2413",
    "lon": "-166.331",
    "country": "United States"
  },
  {
    "airport_code": "TLC",
    "airport_name": "Jose Maria Morelos Y Pavon Airport",
    "name": "Toluca de Lerdo",
    "lat": "19.3356",
    "lon": "-99.565",
    "country": "Mexico"
  },
  {
    "airport_code": "TLE",
    "airport_name": "Toliara Airport",
    "name": "Toliara",
    "lat": "-23.3864",
    "lon": "43.7264",
    "country": "Madagascar"
  },
  {
    "airport_code": "TLH",
    "airport_name": "Tallahassee Regional Airport",
    "name": "Tallahassee",
    "lat": "30.3964",
    "lon": "-84.3503",
    "country": "United States"
  },
  
  {
    "airport_code": "TLL",
    "airport_name": "Ulemiste Airport",
    "name": "Tallinn",
    "lat": "59.4121",
    "lon": "24.8297",
    "country": "Estonia"
  },
  {
    "airport_code": "TLM",
    "airport_name": "Zenata Airport",
    "name": "Tlemcen",
    "lat": "35.0139",
    "lon": "-1.4572",
    "country": "Algeria"
  },
  {
    "airport_code": "TLN",
    "airport_name": "Le Palyvestre Airport",
    "name": "Hyeres",
    "lat": "43.093",
    "lon": "6.15712",
    "country": "France"
  },
  {
    "airport_code": "TLS",
    "airport_name": "Blagnac Airport",
    "name": "Blagnac",
    "lat": "43.6294",
    "lon": "1.3747",
    "country": "France"
  },
  {
    "airport_code": "TLT",
    "airport_name": "Tuluksak",
    "name": "Tuluksak",
    "lat": "61.0959",
    "lon": "-160.968",
    "country": "United States"
  },
  {
    "airport_code": "TLV",
    "airport_name": "Ben Gurion Airport",
    "name": "Petaẖ Tiqwa",
    "lat": "32.0117",
    "lon": "34.8861",
    "country": "Israel"
  },
  {
    "airport_code": "TMC",
    "airport_name": "Tambolaka Airport",
    "name": "Tambolaka",
    "lat": "-9.4117",
    "lon": "119.25",
    "country": "Indonesia"
  },
  {
    "airport_code": "TME",
    "airport_name": "Tame Airport",
    "name": "Tame",
    "lat": "6.4536",
    "lon": "-71.7614",
    "country": "Colombia"
  },
  {
    "airport_code": "TMJ",
    "airport_name": "Termez Airport",
    "name": "Termiz",
    "lat": "37.2808",
    "lon": "67.3064",
    "country": "Uzbekistan"
  },
  {
    "airport_code": "TML",
    "airport_name": "Tamale Airport",
    "name": "Savelugu",
    "lat": "9.5636",
    "lon": "-0.8625",
    "country": "Ghana"
  },
  {
    "airport_code": "TMM",
    "airport_name": "Toamasina Airport",
    "name": "Toamasina",
    "lat": "-18.1064",
    "lon": "49.3919",
    "country": "Madagascar"
  },
  {
    "airport_code": "TMP",
    "airport_name": "Tampere Pirkkala Airport",
    "name": "Pitkäniemi",
    "lat": "61.4166",
    "lon": "23.615",
    "country": "Finland"
  },
  {
    "airport_code": "TMR",
    "airport_name": "Tamanrasset Airport",
    "name": "Tamanrasset",
    "lat": "22.8147",
    "lon": "5.4592",
    "country": "Algeria"
  },
  {
    "airport_code": "TMS",
    "airport_name": "Sao Tome Salazar Airport",
    "name": "Sao Tome",
    "lat": "0.3783",
    "lon": "6.725",
    "country": "Sao Tome and Principe"
  },
  {
    "airport_code": "TMT",
    "airport_name": "Trombetas",
    "name": "Trombetas",
    "lat": "-1.48667",
    "lon": "-56.3961",
    "country": "Brazil"
  },
  {
    "airport_code": "TMU",
    "airport_name": "Tambor Airport",
    "name": "Lepanto",
    "lat": "9.73167",
    "lon": "-85.0251",
    "country": "Costa Rica"
  },
  {
    "airport_code": "TMW",
    "airport_name": "Tamworth Airport",
    "name": "Barry",
    "lat": "-31.0839",
    "lon": "150.849",
    "country": "Australia"
  },
  {
    "airport_code": "TMX",
    "airport_name": "Adrar",
    "name": "Timimoun",
    "lat": "27.8676",
    "lon": "-0.28984",
    "country": "Algeria"
  },
  {
    "airport_code": "TNA",
    "airport_name": "Shandong",
    "name": "Jinan",
    "lat": "36.3306",
    "lon": "118.761",
    "country": "China"
  },
  
  {
    "airport_code": "TNG",
    "airport_name": "Boukhalf Airport",
    "name": "Tangiers",
    "lat": "35.7283",
    "lon": "-5.9175",
    "country": "Morocco"
  },
  {
    "airport_code": "TNJ",
    "airport_name": "Kijang Airport",
    "name": "Tanjungpinang",
    "lat": "0.9192",
    "lon": "104.536",
    "country": "Indonesia"
  },
  {
    "airport_code": "TNK",
    "airport_name": "Tununak Airport",
    "name": "Tununak",
    "lat": "60.5813",
    "lon": "-165.253",
    "country": "United States"
  },
  {
    "airport_code": "TNN",
    "airport_name": "Tainan Airport",
    "name": "Tainan City",
    "lat": "22.9634",
    "lon": "120.216",
    "country": "Taiwan"
  },
  {
    "airport_code": "TNO",
    "airport_name": "Tamarindo Airport",
    "name": "Liberia",
    "lat": "10.9333",
    "lon": "-85.4667",
    "country": "Costa Rica"
  },
  {
    "airport_code": "TNR",
    "airport_name": "Antananarivo Ivato Airport",
    "name": "Ambohidratrimo",
    "lat": "-18.7953",
    "lon": "47.4861",
    "country": "Madagascar"
  },
  {
    "airport_code": "TNZ",
    "airport_name": "Hovsgol",
    "name": "Tosontsengel",
    "lat": "50.2394",
    "lon": "99.8604",
    "country": "Mongolia"
  },
  {
    "airport_code": "TOD",
    "airport_name": "Tioman Airport",
    "name": "Kampung Genting",
    "lat": "2.8",
    "lon": "104.167",
    "country": "Malaysia"
  },
  {
    "airport_code": "TOE",
    "airport_name": "Nefta Airport",
    "name": "Tawzar",
    "lat": "33.9308",
    "lon": "8.1042",
    "country": "Tunisia"
  },
  {
    "airport_code": "TOF",
    "airport_name": "",
    "name": "Tomsk",
    "lat": "56.3833",
    "lon": "85.2",
    "country": "Russia"
  },
  {
    "airport_code": "TOG",
    "airport_name": "Togiak Village",
    "name": "Togiak Village",
    "lat": "37.1198",
    "lon": "-89.8786",
    "country": "United States"
  },
  {
    "airport_code": "TOH",
    "airport_name": "Vanuatu",
    "name": "Torres",
    "lat": "-15.1468",
    "lon": "167.038",
    "country": "Vanuatu"
  },
  {
    "airport_code": "TOL",
    "airport_name": "Toledo Express Airport",
    "name": "Swanton",
    "lat": "41.5923",
    "lon": "-83.8072",
    "country": "United States"
  },
  
  {
    "airport_code": "TOS",
    "airport_name": "Tromso Langnes Airport",
    "name": "Tromso",
    "lat": "69.6787",
    "lon": "18.9096",
    "country": "Norway"
  },
  {
    "airport_code": "TOU",
    "airport_name": "",
    "name": "Touho",
    "lat": "41.1258",
    "lon": "-96.832",
    "country": "New Caledonia"
  },
  {
    "airport_code": "TOY",
    "airport_name": "Toyama Airport",
    "name": "Toyama-shi",
    "lat": "36.6495",
    "lon": "137.187",
    "country": "Japan"
  },
  {
    "airport_code": "TPA",
    "airport_name": "Tampa International Airport",
    "name": "Tampa",
    "lat": "27.9744",
    "lon": "-82.5356",
    "country": "United States"
  },
  {
    "airport_code": "TPE",
    "airport_name": "Taiwan Taoyuan International Airport",
    "name": "Taoyuan City",
    "lat": "25.081",
    "lon": "121.237",
    "country": "Taiwan"
  },
  {
    "airport_code": "TPJ",
    "airport_name": "Taplejung Suketar",
    "name": "Taplejung",
    "lat": "27.2999",
    "lon": "87.7011",
    "country": "Nepal"
  },
  {
    "airport_code": "TPP",
    "airport_name": "Tarapoto Airport",
    "name": "Tarapoto",
    "lat": "-6.5058",
    "lon": "-76.3714",
    "country": "Peru"
  },
  {
    "airport_code": "TPQ",
    "airport_name": "Tepic Airport",
    "name": "Tepic",
    "lat": "21.4758",
    "lon": "-104.881",
    "country": "Mexico"
  },
  {
    "airport_code": "TPS",
    "airport_name": "Trapani Birgi Airport",
    "name": "Trapani",
    "lat": "37.9021",
    "lon": "12.4994",
    "country": "Italy"
  },
  {
    "airport_code": "TQR",
    "airport_name": "",
    "name": "San Domino Island",
    "lat": "43.2667",
    "lon": "10.9333",
    "country": "Italy"
  },
  {
    "airport_code": "TRC",
    "airport_name": "Torreon International Airport",
    "name": "Torreón",
    "lat": "25.5683",
    "lon": "-103.411",
    "country": "Mexico"
  },
  {
    "airport_code": "TRD",
    "airport_name": "Trondheim Vaernes Airport",
    "name": "Stjordal",
    "lat": "63.4578",
    "lon": "10.9229",
    "country": "Norway"
  },
  {
    "airport_code": "TRE",
    "airport_name": "Tiree Aerodrome",
    "name": "Crossapol",
    "lat": "56.4998",
    "lon": "-6.87066",
    "country": "United Kingdom"
  },
  {
    "airport_code": "TRF",
    "airport_name": "Torp Airport",
    "name": "Sandefjord",
    "lat": "59.182",
    "lon": "10.2509",
    "country": "Norway"
  },
  {
    "airport_code": "TRG",
    "airport_name": "Tauranga Airport",
    "name": "Tauranga",
    "lat": "-37.6738",
    "lon": "176.19",
    "country": "New Zealand"
  },
  {
    "airport_code": "TRI",
    "airport_name": "Tri-Cities Regional Airport",
    "name": "Blountville",
    "lat": "36.4805",
    "lon": "-82.4087",
    "country": "United States"
  },
  {
    "airport_code": "TRK",
    "airport_name": "Tarakan Airport",
    "name": "Tarakan",
    "lat": "3.3258",
    "lon": "117.567",
    "country": "Indonesia"
  },
  {
    "airport_code": "TRN",
    "airport_name": "Turin International Airport",
    "name": "Caselle",
    "lat": "45.1975",
    "lon": "7.64937",
    "country": "Italy"
  },
  {
    "airport_code": "TRO",
    "airport_name": "Taree Airport",
    "name": "Taree",
    "lat": "-31.8887",
    "lon": "152.518",
    "country": "Australia"
  },
  {
    "airport_code": "TRS",
    "airport_name": "Ronchi Dei Legionari Airport",
    "name": "Ronchi",
    "lat": "45.8234",
    "lon": "13.4841",
    "country": "Italy"
  },
  {
    "airport_code": "TRU",
    "airport_name": "Cap C Martinez de Pinillos Airport",
    "name": "Huanchaco",
    "lat": "-8.09",
    "lon": "-79.115",
    "country": "Peru"
  },
  {
    "airport_code": "TRV",
    "airport_name": "Thiruvananthapuram Airport",
    "name": "Thiruvananthapuram",
    "lat": "8.47824",
    "lon": "76.9215",
    "country": "India"
  },
  {
    "airport_code": "TRW",
    "airport_name": "Bonriki International Airport",
    "name": "Tarawa",
    "lat": "1.38",
    "lon": "173.151",
    "country": "Kiribati"
  },
  {
    "airport_code": "TRZ",
    "airport_name": "",
    "name": "Tiruchirapally",
    "lat": "10.7645",
    "lon": "78.7396",
    "country": "India"
  },
  {
    "airport_code": "TSA",
    "airport_name": "Taipei Songshan Airport",
    "name": "Taipei City",
    "lat": "25.0637",
    "lon": "121.552",
    "country": "Taiwan"
  },
  {
    "airport_code": "TSE",
    "airport_name": "Tselinograd South Airport",
    "name": "Aqmola",
    "lat": "51.0266",
    "lon": "71.4782",
    "country": "Kazakhstan"
  },
  {
    "airport_code": "TSF",
    "airport_name": "Treviso Airport",
    "name": "Treviso",
    "lat": "45.6513",
    "lon": "12.2022",
    "country": "Italy"
  },
  {
    "airport_code": "TSJ",
    "airport_name": "Tsushima Airport",
    "name": "Tsushima-shi",
    "lat": "34.2856",
    "lon": "129.33",
    "country": "Japan"
  },
  {
    "airport_code": "TSL",
    "airport_name": "Tamuin Airport",
    "name": "Ciudad Valles",
    "lat": "22.0458",
    "lon": "-98.8042",
    "country": "Mexico"
  },
  {
    "airport_code": "TSN",
    "airport_name": "Zhangguizhuang Airport",
    "name": "Tanggu",
    "lat": "39.1333",
    "lon": "117.35",
    "country": "China"
  },
  
  
  
  {
    "airport_code": "TST",
    "airport_name": "Trang Airport",
    "name": "Muang Trang",
    "lat": "7.5081",
    "lon": "99.625",
    "country": "Thailand"
  },
  {
    "airport_code": "TSV",
    "airport_name": "Townsville Airport",
    "name": "Townsville",
    "lat": "-19.2542",
    "lon": "146.764",
    "country": "Australia"
  },
  {
    "airport_code": "TTA",
    "airport_name": "Tan-Tan",
    "name": "Tan Tan",
    "lat": "28.4294",
    "lon": "-11.098",
    "country": "Morocco"
  },
  {
    "airport_code": "TTE",
    "airport_name": "Babullah Airport",
    "name": "Ternate",
    "lat": "0.8308",
    "lon": "127.377",
    "country": "Indonesia"
  },
  {
    "airport_code": "TTJ",
    "airport_name": "Tottori Airport",
    "name": "Tottori-shi",
    "lat": "35.5298",
    "lon": "134.166",
    "country": "Japan"
  },
  
  {
    "airport_code": "TTT",
    "airport_name": "Taitung Airport",
    "name": "Taitung City",
    "lat": "22.7561",
    "lon": "121.107",
    "country": "Taiwan"
  },
  {
    "airport_code": "TTU",
    "airport_name": "Sania Ramel Airport",
    "name": "Tetouan",
    "lat": "35.5953",
    "lon": "-5.3261",
    "country": "Morocco"
  },
  {
    "airport_code": "TUA",
    "airport_name": "El Rosal Teniente Guerrero Airport",
    "name": "Urbina",
    "lat": "0.8111",
    "lon": "-77.7069",
    "country": "Ecuador"
  },
  {
    "airport_code": "TUB",
    "airport_name": "",
    "name": "Tubuai",
    "lat": "31.6123",
    "lon": "-111.052",
    "country": "French Polynesia"
  },
  {
    "airport_code": "TUC",
    "airport_name": "Teniente Benjamin Matienzo Airport",
    "name": "Banda del Río Salí",
    "lat": "-26.8397",
    "lon": "-65.1019",
    "country": "Argentina"
  },
  {
    "airport_code": "TUD",
    "airport_name": "Tambacounda Airport",
    "name": "Tambacounda",
    "lat": "13.7347",
    "lon": "-13.6561",
    "country": "Senegal"
  },
  
  {
    "airport_code": "TUG",
    "airport_name": "Tuguegarao Airport",
    "name": "Tuguegarao",
    "lat": "17.6417",
    "lon": "121.731",
    "country": "Philippines"
  },
  {
    "airport_code": "TUI",
    "airport_name": "Turaif Airport",
    "name": "Turayf",
    "lat": "31.6917",
    "lon": "38.7289",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "TUK",
    "airport_name": "Turbat Airport",
    "name": "Turbat",
    "lat": "25.9833",
    "lon": "63.0319",
    "country": "Pakistan"
  },
  {
    "airport_code": "TUL",
    "airport_name": "Tulsa International Airport",
    "name": "Tulsa",
    "lat": "36.1877",
    "lon": "-95.8892",
    "country": "United States"
  },
  {
    "airport_code": "TUN",
    "airport_name": "Aeroport Tunis",
    "name": "Tunis",
    "lat": "36.8435",
    "lon": "10.2348",
    "country": "Tunisia"
  },
  {
    "airport_code": "TUO",
    "airport_name": "Taupo Aerodrome",
    "name": "Taupo",
    "lat": "-38.7383",
    "lon": "176.088",
    "country": "New Zealand"
  },
  {
    "airport_code": "TUP",
    "airport_name": "Tupelo Municipal-C D Lemons Airport",
    "name": "Tupelo",
    "lat": "34.2662",
    "lon": "-88.766",
    "country": "United States"
  },
  {
    "airport_code": "TUR",
    "airport_name": "Tucurui Airport",
    "name": "Tucuruí",
    "lat": "-3.7767",
    "lon": "-49.7192",
    "country": "Brazil"
  },
  {
    "airport_code": "TUS",
    "airport_name": "Tucson International Airport",
    "name": "Tucson",
    "lat": "32.1204",
    "lon": "-110.936",
    "country": "United States"
  },
  {
    "airport_code": "TUU",
    "airport_name": "Tabuk Airport",
    "name": "Tabuk",
    "lat": "28.3722",
    "lon": "36.6253",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "TVC",
    "airport_name": "Cherry Capital Airport",
    "name": "Traverse City",
    "lat": "44.7365",
    "lon": "-85.5796",
    "country": "United States"
  },
  {
    "airport_code": "TVF",
    "airport_name": "Thief River Falls Regional Airport",
    "name": "Thief River Falls",
    "lat": "48.0655",
    "lon": "-96.1791",
    "country": "United States"
  },
  {
    "airport_code": "TVU",
    "airport_name": "Taveuni Airport",
    "name": "Taveuni",
    "lat": "-16.8494",
    "lon": "-179.97",
    "country": "Fiji"
  },
  {
    "airport_code": "TVY",
    "airport_name": "",
    "name": "Dawe",
    "lat": "14.1017",
    "lon": "98.2067",
    "country": "Myanmar"
  },
  {
    "airport_code": "TWA",
    "airport_name": "Twin Hills",
    "name": "Twin Hills",
    "lat": "36.8259",
    "lon": "-83.3212",
    "country": "United States"
  },
  {
    "airport_code": "TWB",
    "airport_name": "Toowoomba Airport",
    "name": "Toowoomba",
    "lat": "-27.5444",
    "lon": "151.914",
    "country": "Australia"
  },
  {
    "airport_code": "TWF",
    "airport_name": "Twin Falls-Sun Valley Regional Airport",
    "name": "Twin Falls",
    "lat": "42.4838",
    "lon": "-114.485",
    "country": "United States"
  },
  {
    "airport_code": "TWT",
    "airport_name": "Tawitawi",
    "name": "Tawitawi",
    "lat": "7.1",
    "lon": "124.65",
    "country": "Philippines"
  },
  {
    "airport_code": "TWU",
    "airport_name": "Tawau Airport",
    "name": "Tawau",
    "lat": "4.2642",
    "lon": "117.885",
    "country": "Malaysia"
  },
  {
    "airport_code": "TXK",
    "airport_name": "Texarkana Regional Airport",
    "name": "Texarkana",
    "lat": "33.457",
    "lon": "-93.9943",
    "country": "United States"
  },
  {
    "airport_code": "TXL",
    "airport_name": "Berlin-Tegel International Airport",
    "name": "Berlin",
    "lat": "52.5548",
    "lon": "13.289",
    "country": "Germany"
  },
  {
    "airport_code": "TXN",
    "airport_name": "Tunxi Airport",
    "name": "Haiyang",
    "lat": "29.7354",
    "lon": "118.262",
    "country": "China"
  },
  {
    "airport_code": "TYF",
    "airport_name": "Fryklanda Airport",
    "name": "Torsby",
    "lat": "60.154",
    "lon": "12.9958",
    "country": "Sweden"
  },
  {
    "airport_code": "TYN",
    "airport_name": "Taiyuan Wusu Airport",
    "name": "Taiyuan",
    "lat": "37.774",
    "lon": "112.614",
    "country": "China"
  },
  {
    "airport_code": "TYR",
    "airport_name": "Tyler Pounds Field Airport",
    "name": "Tyler",
    "lat": "32.3506",
    "lon": "-95.4118",
    "country": "United States"
  },
  {
    "airport_code": "TYS",
    "airport_name": "Mcghee Tyson Airport",
    "name": "Knoxville",
    "lat": "35.8064",
    "lon": "-83.9889",
    "country": "United States"
  },
  {
    "airport_code": "TZA",
    "airport_name": "Belize City Municipal Airport",
    "name": "Hattieville",
    "lat": "17.5347",
    "lon": "-88.3028",
    "country": "Belize"
  },
  {
    "airport_code": "TZN",
    "airport_name": "South Andros Airport",
    "name": "Mangrove Cay",
    "lat": "24.1543",
    "lon": "-77.5885",
    "country": "Bahamas"
  },
  {
    "airport_code": "TZX",
    "airport_name": "Trabzon Air Base",
    "name": "Trabzon",
    "lat": "41",
    "lon": "39.7167",
    "country": "Turkey"
  },
  {
    "airport_code": "UAH",
    "airport_name": "French Polynesia",
    "name": "Ua Huka",
    "lat": "-8.91445",
    "lon": "-139.548",
    "country": "French Polynesia"
  },
  {
    "airport_code": "UAK",
    "airport_name": "Narsarsuaq Airport",
    "name": "Narsarssurk",
    "lat": "61.1611",
    "lon": "-45.4278",
    "country": "Greenland"
  },
  {
    "airport_code": "UAP",
    "airport_name": "French Polynesia",
    "name": "Ua Pou",
    "lat": "-9.41207",
    "lon": "-140.068",
    "country": "French Polynesia"
  },
  {
    "airport_code": "UAQ",
    "airport_name": "San Juan Airport",
    "name": "9 de Julio",
    "lat": "-31.6024",
    "lon": "-68.5472",
    "country": "Argentina"
  },
  {
    "airport_code": "UAS",
    "airport_name": "Samburu Airport",
    "name": "Samburu",
    "lat": "0.466667",
    "lon": "37.5667",
    "country": "Kenya"
  },
  {
    "airport_code": "UBA",
    "airport_name": "Uberaba",
    "name": "Uberaba",
    "lat": "-19.75",
    "lon": "-47.95",
    "country": "Brazil"
  },
  {
    "airport_code": "UBJ",
    "airport_name": "Yamaguchi-Ube Airport",
    "name": "Ube-shi",
    "lat": "33.931",
    "lon": "131.276",
    "country": "Japan"
  },
  {
    "airport_code": "UBP",
    "airport_name": "Ubon Airport",
    "name": "Don Mot Daeng",
    "lat": "15.2489",
    "lon": "104.873",
    "country": "Thailand"
  },
  {
    "airport_code": "UCT",
    "airport_name": "Ust Ukhta Airport",
    "name": "Ukhta",
    "lat": "63.5577",
    "lon": "53.7894",
    "country": "Russia"
  },
  {
    "airport_code": "UDI",
    "airport_name": "Coronel Aviador Cesar Bombonato Airport",
    "name": "Uberlandia",
    "lat": "-18.8833",
    "lon": "-48.2247",
    "country": "Brazil"
  },
  {
    "airport_code": "UDJ",
    "airport_name": "Uzhgorod Airport",
    "name": "Uzhhorod",
    "lat": "48.636",
    "lon": "22.2738",
    "country": "Ukraine"
  },
  {
    "airport_code": "UDR",
    "airport_name": "Udaipur Airport",
    "name": "Debari",
    "lat": "24.6041",
    "lon": "73.7726",
    "country": "India"
  },
  {
    "airport_code": "UEL",
    "airport_name": "Quelimane Airport",
    "name": "Quelimane",
    "lat": "-17.8569",
    "lon": "36.8556",
    "country": "Mozambique"
  },
  {
    "airport_code": "UEO",
    "airport_name": "Kumejima Airport",
    "name": "Kumejima-cho",
    "lat": "26.3677",
    "lon": "126.716",
    "country": "Japan"
  },
  
  {
    "airport_code": "UFA",
    "airport_name": "Ufa South Airport",
    "name": "Oufa",
    "lat": "54.5569",
    "lon": "55.8893",
    "country": "Russia"
  },
  {
    "airport_code": "UGB",
    "airport_name": "Ugashik Bay Airport",
    "name": "Pilot Point",
    "lat": "57.4253",
    "lon": "-157.74",
    "country": "United States"
  },
  {
    "airport_code": "UGC",
    "airport_name": "Urganch",
    "name": "Urgench",
    "lat": "41.5434",
    "lon": "60.6368",
    "country": "Uzbekistan"
  },
  {
    "airport_code": "UGI",
    "airport_name": "Uganik Airport",
    "name": "Kodiak",
    "lat": "57.8838",
    "lon": "-153.369",
    "country": "United States"
  },
  {
    "airport_code": "UIB",
    "airport_name": "El Carano Airport",
    "name": "Quibdó",
    "lat": "5.6903",
    "lon": "-76.6464",
    "country": "Colombia"
  },
  {
    "airport_code": "UIH",
    "airport_name": "Vietnam",
    "name": "Qui Nhon",
    "lat": "13.7673",
    "lon": "109.256",
    "country": "Vietnam"
  },
  {
    "airport_code": "UII",
    "airport_name": "Utila Airport",
    "name": "Utila",
    "lat": "16.0969",
    "lon": "-86.9337",
    "country": "Honduras"
  },
  {
    "airport_code": "UIN",
    "airport_name": "Quincy Municipal Airport-Baldwin Field",
    "name": "Quincy",
    "lat": "39.9348",
    "lon": "-91.196",
    "country": "United States"
  },
  {
    "airport_code": "UIO",
    "airport_name": "Mariscal Sucre International Airport",
    "name": "Quito",
    "lat": "-0.1381",
    "lon": "-78.4833",
    "country": "Ecuador"
  },
  {
    "airport_code": "UIP",
    "airport_name": "Pluguffan Airport",
    "name": "Plomelin",
    "lat": "47.9751",
    "lon": "-4.17416",
    "country": "France"
  },
  {
    "airport_code": "UKB",
    "airport_name": "Kobe Airport",
    "name": "Kobe-shi",
    "lat": "34.6356",
    "lon": "135.22",
    "country": "Japan"
  },
  {
    "airport_code": "UKK",
    "airport_name": "",
    "name": "Ust-kamenogorsk",
    "lat": "47.0436",
    "lon": "17.2142",
    "country": "Kazakhstan"
  },
  {
    "airport_code": "ULB",
    "airport_name": "Ulei Airport",
    "name": "Port-Vato",
    "lat": "-16.3333",
    "lon": "168.294",
    "country": "Vanuatu"
  },
  {
    "airport_code": "ULN",
    "airport_name": "Ulaanbaatar Southwest Airport",
    "name": "Ulan Bator",
    "lat": "47.8458",
    "lon": "106.759",
    "country": "Mongolia"
  },
  {
    "airport_code": "ULO",
    "airport_name": "Ulaangom",
    "name": "Ulaangom",
    "lat": "49.9674",
    "lon": "92.0767",
    "country": "Mongolia"
  },
  {
    "airport_code": "ULP",
    "airport_name": "Quilpie Aerodrome",
    "name": "Quilpie",
    "lat": "-26.6087",
    "lon": "144.255",
    "country": "Australia"
  },
  {
    "airport_code": "ULU",
    "airport_name": "Gulu Airport",
    "name": "Gulu",
    "lat": "2.81",
    "lon": "32.2683",
    "country": "Uganda"
  },
  {
    "airport_code": "ULY",
    "airport_name": "Ulyanovsk Northeast Airport",
    "name": "Dimitrovgrad",
    "lat": "54.4145",
    "lon": "48.8063",
    "country": "Russia"
  },
  {
    "airport_code": "UMD",
    "airport_name": "Uummannaq Airport",
    "name": "Uummannaq",
    "lat": "70.6801",
    "lon": "-52.1221",
    "country": "Greenland"
  },
  {
    "airport_code": "UME",
    "airport_name": "Umea Airport",
    "name": "Umea",
    "lat": "63.7932",
    "lon": "20.2848",
    "country": "Sweden"
  },
  {
    "airport_code": "UNG",
    "airport_name": "",
    "name": "Kiunga",
    "lat": "-23.4941",
    "lon": "-46.5488",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "UNK",
    "airport_name": "Unalakleet",
    "name": "Unalakleet",
    "lat": "63.8833",
    "lon": "-160.783",
    "country": "United States"
  },
  {
    "airport_code": "UNN",
    "airport_name": "Ranong Airport",
    "name": "Ranong",
    "lat": "9.85278",
    "lon": "98.6292",
    "country": "Thailand"
  },
  {
    "airport_code": "UPB",
    "airport_name": "Playa Baracoa",
    "name": "Havana",
    "lat": "23.0805",
    "lon": "-82.517",
    "country": "Cuba"
  },
  {
    "airport_code": "UPG",
    "airport_name": "Hasanuddin Airport",
    "name": "Maros",
    "lat": "-5.0694",
    "lon": "119.55",
    "country": "Indonesia"
  },
  {
    "airport_code": "URA",
    "airport_name": "Podstepnyy Airport",
    "name": "Oral",
    "lat": "51.1526",
    "lon": "51.5336",
    "country": "Kazakhstan"
  },
  {
    "airport_code": "URC",
    "airport_name": "Diwopu Airport",
    "name": "Urumqi",
    "lat": "43.9333",
    "lon": "87.4667",
    "country": "China"
  },
  {
    "airport_code": "URE",
    "airport_name": "Kuressarre Airport",
    "name": "Kingissepa",
    "lat": "58.2432",
    "lon": "22.5041",
    "country": "Estonia"
  },
  {
    "airport_code": "URG",
    "airport_name": "Rubem Berta International Airport",
    "name": "Uruguaiana",
    "lat": "-29.7817",
    "lon": "-57.0383",
    "country": "Brazil"
  },
  {
    "airport_code": "URJ",
    "airport_name": "Uraj",
    "name": "Uraj",
    "lat": "60.1167",
    "lon": "64.8333",
    "country": "Russian Federation"
  },
  {
    "airport_code": "URO",
    "airport_name": "Boos Airport",
    "name": "St-Pierre",
    "lat": "49.3827",
    "lon": "1.26106",
    "country": "France"
  },
  
  {
    "airport_code": "URT",
    "airport_name": "Surat Thani Airport",
    "name": "Phun Phin",
    "lat": "9.1367",
    "lon": "99.1417",
    "country": "Thailand"
  },
  {
    "airport_code": "URY",
    "airport_name": "Guriat Airport",
    "name": "Gurayat",
    "lat": "31.415",
    "lon": "37.2744",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "USH",
    "airport_name": "Ushuaia Airport",
    "name": "Ushuaia",
    "lat": "-54.8176",
    "lon": "-68.326",
    "country": "Argentina"
  },
  {
    "airport_code": "USK",
    "airport_name": "",
    "name": "Usinsk",
    "lat": "48.3136",
    "lon": "-117.281",
    "country": "Russia"
  },
  {
    "airport_code": "USM",
    "airport_name": "Koh Samui Airport",
    "name": "Ko Samui",
    "lat": "9.55",
    "lon": "100.067",
    "country": "Thailand"
  },
  {
    "airport_code": "USN",
    "airport_name": "Ulsan Airport",
    "name": "Ulsan",
    "lat": "35.5906",
    "lon": "129.357",
    "country": "South Korea"
  },
  {
    "airport_code": "USQ",
    "airport_name": "",
    "name": "Usak",
    "lat": "38.681",
    "lon": "29.4716",
    "country": "Turkey"
  },
  {
    "airport_code": "USU",
    "airport_name": "Busuanga Airport",
    "name": "Coron",
    "lat": "12.1",
    "lon": "120.167",
    "country": "Philippines"
  },
  {
    "airport_code": "UTH",
    "airport_name": "Udon Airport",
    "name": "Changwat Udon Thani; Udon Thani",
    "lat": "17.3831",
    "lon": "102.794",
    "country": "Thailand"
  },
  {
    "airport_code": "UTN",
    "airport_name": "Pierre Van Ryneveld Airport",
    "name": "Upington",
    "lat": "-28.3986",
    "lon": "21.2528",
    "country": "South Africa"
  },
  {
    "airport_code": "UTP",
    "airport_name": "Rayong Airport",
    "name": "Ban Chang",
    "lat": "12.6778",
    "lon": "101.009",
    "country": "Thailand"
  },
  {
    "airport_code": "UTT",
    "airport_name": "K D Matanzima Airport",
    "name": "Umtata",
    "lat": "-31.5472",
    "lon": "28.6694",
    "country": "South Africa"
  },
  {
    "airport_code": "UUD",
    "airport_name": "Ulan Ude-Mukhino Airport",
    "name": "Kabansk",
    "lat": "51.8063",
    "lon": "107.443",
    "country": "Russia"
  },
  {
    "airport_code": "UUN",
    "airport_name": "Baruun Urt Airport",
    "name": "Baruun-Urt",
    "lat": "46.663",
    "lon": "113.287",
    "country": "Mongolia"
  },
  {
    "airport_code": "UUS",
    "airport_name": "Yuzhno Sakhalinsk South Airport",
    "name": "Kholmsk",
    "lat": "46.8885",
    "lon": "142.724",
    "country": "Russia"
  },
  {
    "airport_code": "UVE",
    "airport_name": "Ouloup Airport",
    "name": "Fayaoué",
    "lat": "-20.5542",
    "lon": "166.571",
    "country": "New Caledonia"
  },
  {
    "airport_code": "UVF",
    "airport_name": "Hewanorra International Airport",
    "name": "Vieux Fort",
    "lat": "13.7336",
    "lon": "-60.9542",
    "country": "St. Lucia"
  },
  {
    "airport_code": "UWE",
    "airport_name": "Metropolitan Area",
    "name": "Wiesbaden",
    "lat": "51.4997",
    "lon": "-2.54595",
    "country": "Germany"
  },
  {
    "airport_code": "UYL",
    "airport_name": "Janub Darfur",
    "name": "Nyala",
    "lat": "10.9342",
    "lon": "25.3411",
    "country": "Sudan"
  },
  {
    "airport_code": "UYN",
    "airport_name": "Yulin Airport",
    "name": "Yulin",
    "lat": "38.2768",
    "lon": "109.769",
    "country": "China"
  },
  {
    "airport_code": "VAA",
    "airport_name": "Vaasa Airport",
    "name": "Vaasa",
    "lat": "63.0396",
    "lon": "21.7691",
    "country": "Finland"
  },
  {
    "airport_code": "VAI",
    "airport_name": "",
    "name": "Vanimo",
    "lat": "35.253",
    "lon": "26.2538",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "VAK",
    "airport_name": "Chevak Airport",
    "name": "Hooper Bay",
    "lat": "61.5338",
    "lon": "-165.584",
    "country": "United States"
  },
  {
    "airport_code": "VAN",
    "airport_name": "Van Airport",
    "name": "Van",
    "lat": "38.4681",
    "lon": "43.3308",
    "country": "Turkey"
  },
  {
    "airport_code": "VAO",
    "airport_name": "Suavanao Airstrip",
    "name": "Suavanao",
    "lat": "7.56667",
    "lon": "154.667",
    "country": "Solomon Islands"
  },
  {
    "airport_code": "VAR",
    "airport_name": "Topoli Airport",
    "name": "Varna",
    "lat": "43.2416",
    "lon": "27.8137",
    "country": "Bulgaria"
  },
  {
    "airport_code": "VAS",
    "airport_name": "Sivas Airport",
    "name": "Sivas",
    "lat": "39.8147",
    "lon": "36.9039",
    "country": "Turkey"
  },
  {
    "airport_code": "VAV",
    "airport_name": "Lupepau'u Airport",
    "name": "Neiafu",
    "lat": "-18.65",
    "lon": "-173.967",
    "country": "Tonga"
  },
  {
    "airport_code": "VAW",
    "airport_name": "Vardoe Airport",
    "name": "Vardo",
    "lat": "70.3569",
    "lon": "31.0471",
    "country": "Norway"
  },
  {
    "airport_code": "VBM",
    "airport_name": "Alaska",
    "name": "Blue Mountain",
    "lat": "62.8903",
    "lon": "-149.054",
    "country": "United States"
  },
  {
    "airport_code": "VBS",
    "airport_name": "Brescia Montichiari",
    "name": "Verona",
    "lat": "45.4343",
    "lon": "10.3214",
    "country": "Italy"
  },
  {
    "airport_code": "VBV",
    "airport_name": "",
    "name": "Vanuabalavu",
    "lat": "16.4843",
    "lon": "73.746",
    "country": "Fiji"
  },
  {
    "airport_code": "VBY",
    "airport_name": "Visby Airport",
    "name": "Visby",
    "lat": "57.6603",
    "lon": "18.3397",
    "country": "Sweden"
  },
  {
    "airport_code": "VCE",
    "airport_name": "Marco Polo International Airport",
    "name": "Venice",
    "lat": "45.505",
    "lon": "12.3433",
    "country": "Italy"
  },
  {
    "airport_code": "VCL",
    "airport_name": "Chulai",
    "name": "Tamky",
    "lat": "15.9742",
    "lon": "107.868",
    "country": "Vietnam"
  },
  {
    "airport_code": "VCP",
    "airport_name": "Viracopos International Airport",
    "name": "Campinas",
    "lat": "-23.0067",
    "lon": "-47.1344",
    "country": "Brazil"
  },
  {
    "airport_code": "VCS",
    "airport_name": "Vietnam",
    "name": "Con Dao",
    "lat": "15.9742",
    "lon": "107.868",
    "country": "Vietnam"
  },
  {
    "airport_code": "VCT",
    "airport_name": "Victoria Regional Airport",
    "name": "Victoria",
    "lat": "28.8449",
    "lon": "-96.9201",
    "country": "United States"
  },
  
  {
    "airport_code": "VDA",
    "airport_name": "Ovda Airport",
    "name": "Ovda",
    "lat": "29.9528",
    "lon": "34.9583",
    "country": "Israel"
  },
  {
    "airport_code": "VDB",
    "airport_name": "Fagernes Leirin Airport",
    "name": "Fagernes",
    "lat": "61.0105",
    "lon": "9.29374",
    "country": "Norway"
  },
  {
    "airport_code": "VDC",
    "airport_name": "Vitoria da Conquista Airport",
    "name": "Vitória da Conquista",
    "lat": "-14.8633",
    "lon": "-40.8628",
    "country": "Brazil"
  },
  {
    "airport_code": "VDE",
    "airport_name": "Valverde Airport",
    "name": "Valverde",
    "lat": "27.8145",
    "lon": "-17.885",
    "country": "Spain"
  },
  {
    "airport_code": "VDM",
    "airport_name": "Gobernador Castello Airport",
    "name": "Viedma",
    "lat": "-40.8697",
    "lon": "-62.9994",
    "country": "Argentina"
  },
  {
    "airport_code": "VDS",
    "airport_name": "Vadso Airport",
    "name": "Vadso",
    "lat": "70.0653",
    "lon": "29.8416",
    "country": "Norway"
  },
  {
    "airport_code": "VDZ",
    "airport_name": "Valdez Airport",
    "name": "Valdez",
    "lat": "61.1294",
    "lon": "-146.256",
    "country": "United States"
  },
  {
    "airport_code": "VEE",
    "airport_name": "Venetie",
    "name": "Venetie",
    "lat": "67.009",
    "lon": "-146.406",
    "country": "United States"
  },
  {
    "airport_code": "VEL",
    "airport_name": "Vernal Airport",
    "name": "Vernal",
    "lat": "40.4485",
    "lon": "-109.514",
    "country": "United States"
  },
  {
    "airport_code": "VER",
    "airport_name": "General Heriberto Jara International Airport",
    "name": "Teocelo",
    "lat": "19.145",
    "lon": "-96.1878",
    "country": "Mexico"
  },
  {
    "airport_code": "VEY",
    "airport_name": "Vestmannaeyjar Airport",
    "name": "Vestmannaeyjar",
    "lat": "63.4273",
    "lon": "-20.2682",
    "country": "Iceland"
  },
  
  {
    "airport_code": "VGA",
    "airport_name": "Vijaywada Airport",
    "name": "Manthena",
    "lat": "16.5167",
    "lon": "80.8",
    "country": "India"
  },
  {
    "airport_code": "VGO",
    "airport_name": "Vigo Airport",
    "name": "Vigo",
    "lat": "42.2258",
    "lon": "-8.63269",
    "country": "Spain"
  },
  {
    "airport_code": "VGZ",
    "airport_name": "Villagarzon Airport",
    "name": "Villagarzon",
    "lat": "1.06667",
    "lon": "-76.7167",
    "country": "Colombia"
  },
  {
    "airport_code": "VHC",
    "airport_name": "Saurimo Airport",
    "name": "Saurimo",
    "lat": "-9.6889",
    "lon": "20.43",
    "country": "Angola"
  },
  {
    "airport_code": "VHM",
    "airport_name": "Vilhelmina Airport",
    "name": "Vilhelmina",
    "lat": "64.5797",
    "lon": "16.8374",
    "country": "Sweden"
  },
  {
    "airport_code": "VHZ",
    "airport_name": "French Polynesia",
    "name": "Vahitahi",
    "lat": "-17.6902",
    "lon": "-149.376",
    "country": "French Polynesia"
  },
  {
    "airport_code": "VIE",
    "airport_name": "Vienna Schwechat International Airport",
    "name": "Klein-Neusiedl",
    "lat": "48.1036",
    "lon": "16.5804",
    "country": "Austria"
  },
  {
    "airport_code": "VIG",
    "airport_name": "",
    "name": "El Vigia",
    "lat": "39.2505",
    "lon": "-82.7916",
    "country": "Venezuela"
  },
  {
    "airport_code": "VII",
    "airport_name": "Vinh",
    "name": "Vinh City",
    "lat": "18.6688",
    "lon": "105.672",
    "country": "Vietnam"
  },
  {
    "airport_code": "VIJ",
    "airport_name": "Virgin Gorda Airport",
    "name": "Virgin Gorda",
    "lat": "18.4728",
    "lon": "-64.418",
    "country": "British Virgin Islands"
  },
  {
    "airport_code": "VIL",
    "airport_name": "Dakhla Airport",
    "name": "Ad Dakhla",
    "lat": "23.7333",
    "lon": "-15.9167",
    "country": "Western Sahara"
  },
  {
    "airport_code": "VIS",
    "airport_name": "Visalia Municipal Airport",
    "name": "Visalia",
    "lat": "36.3253",
    "lon": "-119.394",
    "country": "United States"
  },
  {
    "airport_code": "VIT",
    "airport_name": "Vitoria Airport",
    "name": "Vitoria",
    "lat": "42.8844",
    "lon": "-2.73051",
    "country": "Spain"
  },
  {
    "airport_code": "VIX",
    "airport_name": "Goiabeiras Airport",
    "name": "Vitoria",
    "lat": "-20.2578",
    "lon": "-40.2864",
    "country": "Brazil"
  },
  {
    "airport_code": "VKG",
    "airport_name": "Kien Giang Airport",
    "name": "Kien Giang",
    "lat": "9.945",
    "lon": "105.135",
    "country": "Vietnam"
  },
  {
    "airport_code": "VKO",
    "airport_name": "Ynukovo Airport",
    "name": "Podol'sk",
    "lat": "55.5978",
    "lon": "37.285",
    "country": "Russia"
  },
  {
    "airport_code": "VKT",
    "airport_name": "Vorkuta Airport",
    "name": "Ukhta",
    "lat": "67.491",
    "lon": "63.995",
    "country": "Russia"
  },
  {
    "airport_code": "VLC",
    "airport_name": "Valencia Airport",
    "name": "Manises",
    "lat": "39.4929",
    "lon": "-0.47617",
    "country": "Spain"
  },
  {
    "airport_code": "VLD",
    "airport_name": "Valdosta Regional Airport",
    "name": "Valdosta",
    "lat": "30.7892",
    "lon": "-83.2787",
    "country": "United States"
  },
  {
    "airport_code": "VLI",
    "airport_name": "Port Vila Bauerfield Airport",
    "name": "Port-Vila",
    "lat": "-17.7039",
    "lon": "168.312",
    "country": "Vanuatu"
  },
  {
    "airport_code": "VLL",
    "airport_name": "Valladolid Airport",
    "name": "Valladolid",
    "lat": "41.7077",
    "lon": "-4.84504",
    "country": "Spain"
  },
  {
    "airport_code": "VLN",
    "airport_name": "Zim Valencia Airport",
    "name": "Valencia",
    "lat": "10.1556",
    "lon": "-67.9319",
    "country": "Venezuela"
  },
  {
    "airport_code": "VLS",
    "airport_name": "Vanuatu",
    "name": "Valesdir",
    "lat": "-15.1468",
    "lon": "167.038",
    "country": "Vanuatu"
  },
  {
    "airport_code": "VLV",
    "airport_name": "Dr Antonio Nicolas Briceno Airport",
    "name": "Siquisique",
    "lat": "9.3414",
    "lon": "-70.5844",
    "country": "Venezuela"
  },
  {
    "airport_code": "VLY",
    "airport_name": "Wales",
    "name": "Anglesey",
    "lat": "52.3685",
    "lon": "-3.98509",
    "country": "United Kingdom"
  },
  {
    "airport_code": "VNO",
    "airport_name": "Vilnius Airport",
    "name": "Vilnius",
    "lat": "54.64",
    "lon": "25.2803",
    "country": "Lithuania"
  },
  {
    "airport_code": "VNS",
    "airport_name": "Varanasi Airport",
    "name": "Baragaon",
    "lat": "25.4541",
    "lon": "82.8642",
    "country": "India"
  },
  {
    "airport_code": "VNX",
    "airport_name": "Vilanculos Airport",
    "name": "Vilanculos",
    "lat": "-22.0142",
    "lon": "35.3119",
    "country": "Mozambique"
  },
  {
    "airport_code": "VOG",
    "airport_name": "Gumrak Airport",
    "name": "Kamyshin",
    "lat": "48.7788",
    "lon": "44.3382",
    "country": "Russia"
  },
  
  {
    "airport_code": "VOZ",
    "airport_name": "Voronezh-Chertovitskoye Airport",
    "name": "Semiluki",
    "lat": "51.8089",
    "lon": "39.2242",
    "country": "Russia"
  },
  {
    "airport_code": "VPE",
    "airport_name": "Ondjiva",
    "name": "Ongiva",
    "lat": "-17.0704",
    "lon": "15.7258",
    "country": "Angola"
  },
  {
    "airport_code": "VPN",
    "airport_name": "Vopnafjordur Airport",
    "name": "Egilsstadir",
    "lat": "65.7177",
    "lon": "-14.8348",
    "country": "Iceland"
  },
  {
    "airport_code": "VPS",
    "airport_name": "Eglin Air Force Base",
    "name": "Eglin Village",
    "lat": "30.496",
    "lon": "-86.55",
    "country": "United States"
  },
  {
    "airport_code": "VPY",
    "airport_name": "Chimoio Airport",
    "name": "Chimoio",
    "lat": "-19.1506",
    "lon": "33.4311",
    "country": "Mozambique"
  },
  {
    "airport_code": "VQS",
    "airport_name": "Aeropuerto Antonio Rivera Rodríguez",
    "name": "Puerto Ferro",
    "lat": "18.1355",
    "lon": "-65.487",
    "country": "United States"
  },
  {
    "airport_code": "VRA",
    "airport_name": "Varadero Airport",
    "name": "Varadero",
    "lat": "23.0306",
    "lon": "-81.4367",
    "country": "Cuba"
  },
  {
    "airport_code": "VRC",
    "airport_name": "Virac Airport",
    "name": "Virac",
    "lat": "13.5792",
    "lon": "124.204",
    "country": "Philippines"
  },
  {
    "airport_code": "VRK",
    "airport_name": "Varkaus Airport",
    "name": "Varkaus",
    "lat": "62.1742",
    "lon": "27.8658",
    "country": "Finland"
  },
  {
    "airport_code": "VRN",
    "airport_name": "Verona Airport",
    "name": "Sommacampagna",
    "lat": "45.4033",
    "lon": "10.9053",
    "country": "Italy"
  },
  {
    "airport_code": "VRY",
    "airport_name": "Vaeroy Airport",
    "name": "Varoy",
    "lat": "67.6667",
    "lon": "12.6833",
    "country": "Norway"
  },
  {
    "airport_code": "VSA",
    "airport_name": "Villahermosa Airport",
    "name": "Villahermosa",
    "lat": "17.9958",
    "lon": "-92.8189",
    "country": "Mexico"
  },
  {
    "airport_code": "VSG",
    "airport_name": "Lugansk Airport",
    "name": "Luhans'k",
    "lat": "48.5667",
    "lon": "39.3333",
    "country": "Ukraine"
  },
  {
    "airport_code": "VST",
    "airport_name": "Hasslo Airport",
    "name": "Vasteras",
    "lat": "59.6007",
    "lon": "16.6367",
    "country": "Sweden"
  },
  {
    "airport_code": "VTE",
    "airport_name": "Vientiane Airport",
    "name": "Vientiane",
    "lat": "17.9833",
    "lon": "102.565",
    "country": "Laos"
  },
  {
    "airport_code": "VTU",
    "airport_name": "Las Tunas Airport",
    "name": "Becerra",
    "lat": "20.9894",
    "lon": "-76.9361",
    "country": "Cuba"
  },
  {
    "airport_code": "VTZ",
    "airport_name": "Vishakapatnam Airport",
    "name": "Visakhapatnam",
    "lat": "17.7214",
    "lon": "83.2201",
    "country": "India"
  },
  {
    "airport_code": "VUP",
    "airport_name": "Alfonso Lopez Airport",
    "name": "Valledupar",
    "lat": "10.4433",
    "lon": "-73.245",
    "country": "Colombia"
  },
  {
    "airport_code": "VVC",
    "airport_name": "Vanguardia Airport",
    "name": "Villavicencio",
    "lat": "4.1708",
    "lon": "-73.6117",
    "country": "Colombia"
  },
  {
    "airport_code": "VVI",
    "airport_name": "Viru Viru International Airport",
    "name": "Santa Cruz",
    "lat": "-17.6411",
    "lon": "-63.1339",
    "country": "Bolivia"
  },
  {
    "airport_code": "VVO",
    "airport_name": "Artem North Airport",
    "name": "Nakhodka",
    "lat": "43.3972",
    "lon": "132.156",
    "country": "Russia"
  },
  {
    "airport_code": "VVZ",
    "airport_name": "Illizi",
    "name": "Illizi",
    "lat": "26.5001",
    "lon": "8.47094",
    "country": "Algeria"
  },
  {
    "airport_code": "VXC",
    "airport_name": "Lichinga Airport",
    "name": "Lichinga",
    "lat": "-13.2761",
    "lon": "35.2533",
    "country": "Mozambique"
  },
  {
    "airport_code": "VXE",
    "airport_name": "San Pedro Airport",
    "name": "Mindelo",
    "lat": "16.8306",
    "lon": "-25.0636",
    "country": "Cape Verde"
  },
  {
    "airport_code": "VXO",
    "airport_name": "Kronoberg Airport",
    "name": "Vaxjo",
    "lat": "56.9242",
    "lon": "14.7318",
    "country": "Sweden"
  },
  {
    "airport_code": "WAA",
    "airport_name": "Wales",
    "name": "Wales",
    "lat": "65.6112",
    "lon": "-168.098",
    "country": "United States"
  },
  {
    "airport_code": "WAE",
    "airport_name": "Saudi Arabia",
    "name": "Wadi Ad Dawasir",
    "lat": "23.9175",
    "lon": "45.1202",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "WAG",
    "airport_name": "Wanganui Airport",
    "name": "Wanganui",
    "lat": "-39.9635",
    "lon": "175.029",
    "country": "New Zealand"
  },
  {
    "airport_code": "WAQ",
    "airport_name": "Mahajanga",
    "name": "Antsalova",
    "lat": "-15.7137",
    "lon": "46.3155",
    "country": "Madagascar"
  },
  {
    "airport_code": "WAT",
    "airport_name": "Waterford Airport",
    "name": "Waterford",
    "lat": "52.1972",
    "lon": "-7.0889",
    "country": "Ireland"
  },
  {
    "airport_code": "WAW",
    "airport_name": "Okecie International Airport",
    "name": "Warsaw",
    "lat": "52.17",
    "lon": "20.9725",
    "country": "Poland"
  },
  {
    "airport_code": "WBB",
    "airport_name": "Stebbins",
    "name": "Stebbins",
    "lat": "63.52",
    "lon": "-162.279",
    "country": "United States"
  },
  {
    "airport_code": "WBQ",
    "airport_name": "Alaska",
    "name": "Beaver",
    "lat": "66.359",
    "lon": "-147.396",
    "country": "United States"
  },
  
  {
    "airport_code": "WEF",
    "airport_name": "Shandong",
    "name": "Weifang",
    "lat": "36.3306",
    "lon": "118.761",
    "country": "China"
  },
  {
    "airport_code": "WEH",
    "airport_name": "Shandong",
    "name": "Weihai",
    "lat": "36.3306",
    "lon": "118.761",
    "country": "China"
  },
  {
    "airport_code": "WEI",
    "airport_name": "Weipa Aerodrome",
    "name": "Weipa",
    "lat": "-12.6773",
    "lon": "141.923",
    "country": "Australia"
  },
  {
    "airport_code": "WGA",
    "airport_name": "Wagga Wagga Airport",
    "name": "Forest Hill",
    "lat": "-35.159",
    "lon": "147.467",
    "country": "Australia"
  },
  {
    "airport_code": "WGE",
    "airport_name": "Walgett Airport",
    "name": "Walgett",
    "lat": "-30.0331",
    "lon": "148.118",
    "country": "Australia"
  },
  {
    "airport_code": "WGP",
    "airport_name": "Mau Hau Airport",
    "name": "Waingapu",
    "lat": "-9.6722",
    "lon": "120.308",
    "country": "Indonesia"
  },
  {
    "airport_code": "WHF",
    "airport_name": "Wadi Halfa'",
    "name": "Wadi Halfa",
    "lat": "21.7929",
    "lon": "31.3713",
    "country": "Sudan"
  },
  {
    "airport_code": "WHK",
    "airport_name": "Whakatane Airport",
    "name": "Whakatane",
    "lat": "-37.9213",
    "lon": "176.919",
    "country": "New Zealand"
  },
  {
    "airport_code": "WIC",
    "airport_name": "Wick Airport",
    "name": "Wick",
    "lat": "58.4538",
    "lon": "-3.08767",
    "country": "United Kingdom"
  },
  {
    "airport_code": "WIL",
    "airport_name": "Nairobi Wilson Airport",
    "name": "Nairobi",
    "lat": "-1.31888",
    "lon": "36.8157",
    "country": "Kenya"
  },
  {
    "airport_code": "WIN",
    "airport_name": "Winton Aerodrome",
    "name": "Corfield",
    "lat": "-22.3635",
    "lon": "143.082",
    "country": "Australia"
  },
  {
    "airport_code": "WJA",
    "airport_name": "Woja",
    "name": "Woja",
    "lat": "7.46667",
    "lon": "168.567",
    "country": "Marshall Islands"
  },
  {
    "airport_code": "WJU",
    "airport_name": "Wonju Airport",
    "name": "WonJu",
    "lat": "37.4904",
    "lon": "127.989",
    "country": "South Korea"
  },
  {
    "airport_code": "WKA",
    "airport_name": "Wanaka Airport",
    "name": "Wanaka",
    "lat": "-44.725",
    "lon": "169.243",
    "country": "New Zealand"
  },
  {
    "airport_code": "WKJ",
    "airport_name": "Wakkanai Airport",
    "name": "Wakkanai-shi",
    "lat": "45.4041",
    "lon": "141.801",
    "country": "Japan"
  },
  {
    "airport_code": "WKK",
    "airport_name": "Aleknagik",
    "name": "Aleknagik",
    "lat": "59.2667",
    "lon": "-158.633",
    "country": "United States"
  },
  {
    "airport_code": "WLG",
    "airport_name": "Wellington International Airport",
    "name": "Wellington",
    "lat": "-41.3295",
    "lon": "174.806",
    "country": "New Zealand"
  },
  {
    "airport_code": "WLH",
    "airport_name": "Vanuatu",
    "name": "Walaha",
    "lat": "-15.1468",
    "lon": "167.038",
    "country": "Vanuatu"
  },
  {
    "airport_code": "WLK",
    "airport_name": "Alaska",
    "name": "Selawik",
    "lat": "62.8903",
    "lon": "-149.054",
    "country": "United States"
  },
  {
    "airport_code": "WLS",
    "airport_name": "Wallis Island",
    "name": "Wallis Island",
    "lat": "-13.3",
    "lon": "-176.167",
    "country": "Wallis and Futuna Islands"
  },
  {
    "airport_code": "WMK",
    "airport_name": "Meyers Chuck",
    "name": "Meyers Chuck",
    "lat": "55.7389",
    "lon": "-132.258",
    "country": "United States"
  },
  {
    "airport_code": "WMN",
    "airport_name": "Maroantsetra Airport",
    "name": "Maroantsetra",
    "lat": "-15.4367",
    "lon": "49.6883",
    "country": "Madagascar"
  },
  {
    "airport_code": "WMO",
    "airport_name": "White Mountain",
    "name": "White Mountain",
    "lat": "64.6811",
    "lon": "-163.408",
    "country": "United States"
  },
  {
    "airport_code": "WMR",
    "airport_name": "Mananara",
    "name": "Mananara",
    "lat": "-16.167",
    "lon": "49.7556",
    "country": "Madagascar"
  },
  {
    "airport_code": "WNA",
    "airport_name": "Napaskiak",
    "name": "Napakiak",
    "lat": "60.7049",
    "lon": "-161.766",
    "country": "United States"
  },
  {
    "airport_code": "WNN",
    "airport_name": "Wunnummin Lake Airport",
    "name": "Casummit Lake",
    "lat": "52.9228",
    "lon": "-89.1934",
    "country": "Canada"
  },
  {
    "airport_code": "WNP",
    "airport_name": "Naga Airport",
    "name": "Pili",
    "lat": "13.5872",
    "lon": "123.27",
    "country": "Philippines"
  },
  {
    "airport_code": "WNR",
    "airport_name": "Windorah Airport",
    "name": "Tanbar",
    "lat": "-25.4104",
    "lon": "142.67",
    "country": "Australia"
  },
  
  {
    "airport_code": "WNZ",
    "airport_name": "Wenzhou Airport",
    "name": "Wenzhou",
    "lat": "28.0025",
    "lon": "120.648",
    "country": "China"
  },
  {
    "airport_code": "WPM",
    "airport_name": "Wipim",
    "name": "Wipim",
    "lat": "-8.79133",
    "lon": "142.869",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "WRE",
    "airport_name": "Whangarei Airport",
    "name": "Whangarei",
    "lat": "-35.7705",
    "lon": "174.36",
    "country": "New Zealand"
  },
  
  {
    "airport_code": "WRL",
    "airport_name": "Worland Municipal Airport",
    "name": "Worland",
    "lat": "43.9747",
    "lon": "-107.953",
    "country": "United States"
  },
  {
    "airport_code": "WRO",
    "airport_name": "Strachowice Airport",
    "name": "Wroclaw",
    "lat": "51.1039",
    "lon": "16.8985",
    "country": "Poland"
  },
  {
    "airport_code": "WSN",
    "airport_name": "Naknek",
    "name": "South Naknek",
    "lat": "58.7285",
    "lon": "-157.014",
    "country": "United States"
  },
  {
    "airport_code": "WST",
    "airport_name": "Westerly State Airport",
    "name": "Westerly",
    "lat": "41.3492",
    "lon": "-71.8115",
    "country": "United States"
  },
  {
    "airport_code": "WSX",
    "airport_name": "United States",
    "name": "Westsound",
    "lat": "48.8907",
    "lon": "-116.982",
    "country": "United States"
  },
  {
    "airport_code": "WSZ",
    "airport_name": "Westport Airport",
    "name": "Westport",
    "lat": "-41.7383",
    "lon": "171.58",
    "country": "New Zealand"
  },
  {
    "airport_code": "WTK",
    "airport_name": "Alaska",
    "name": "Noatak",
    "lat": "62.8903",
    "lon": "-149.054",
    "country": "United States"
  },
  {
    "airport_code": "WTL",
    "airport_name": "Tuntutuliak",
    "name": "Tuntutuliak",
    "lat": "60.3432",
    "lon": "-162.664",
    "country": "United States"
  },
  {
    "airport_code": "WTS",
    "airport_name": "Antananarivo",
    "name": "Tsiroanomandidy",
    "lat": "-18.9076",
    "lon": "47.5277",
    "country": "Madagascar"
  },
  {
    "airport_code": "WUA",
    "airport_name": "Wu Hai",
    "name": "Wu Hai",
    "lat": "34.668",
    "lon": "104.166",
    "country": "China"
  },
  {
    "airport_code": "WUH",
    "airport_name": "Wuchang Nanhu Airport",
    "name": "Wuhan",
    "lat": "30.5069",
    "lon": "114.31",
    "country": "China"
  },
  {
    "airport_code": "WUN",
    "airport_name": "",
    "name": "Wiluna",
    "lat": "20.0564",
    "lon": "78.9567",
    "country": "Australia"
  },
  {
    "airport_code": "WUS",
    "airport_name": "Wuyishan",
    "name": "Wuyishan",
    "lat": "34.668",
    "lon": "104.166",
    "country": "China"
  },
  {
    "airport_code": "WUX",
    "airport_name": "Wuxi",
    "name": "Wuxi",
    "lat": "31.574",
    "lon": "120.288",
    "country": "China"
  },
  {
    "airport_code": "WVB",
    "airport_name": "Rooikop",
    "name": "Walvis Bay",
    "lat": "22.9667",
    "lon": "14.4833",
    "country": "South Africa"
  },
  {
    "airport_code": "WWK",
    "airport_name": "Wewak International Airport",
    "name": "Wewak",
    "lat": "-3.5858",
    "lon": "143.667",
    "country": "Papua New Guinea"
  },
  {
    "airport_code": "WWP",
    "airport_name": "Alaska",
    "name": "Whale Pass",
    "lat": "62.8903",
    "lon": "-149.054",
    "country": "United States"
  },
  {
    "airport_code": "WWT",
    "airport_name": "Alaska",
    "name": "Newtok",
    "lat": "62.8903",
    "lon": "-149.054",
    "country": "United States"
  },
  {
    "airport_code": "WXN",
    "airport_name": "Wanxian",
    "name": "Wanxian",
    "lat": "30.811",
    "lon": "108.375",
    "country": "China"
  },
  {
    "airport_code": "WYA",
    "airport_name": "Whyalla Airport",
    "name": "Whyalla",
    "lat": "-33.0608",
    "lon": "137.516",
    "country": "Australia"
  },
  {
    "airport_code": "WYS",
    "airport_name": "Yellowstone Airport",
    "name": "West Yellowstone",
    "lat": "44.6876",
    "lon": "-111.114",
    "country": "United States"
  },
  
  {
    "airport_code": "XAP",
    "airport_name": "Chapeco Airport",
    "name": "Chapeco",
    "lat": "-27.1325",
    "lon": "-52.6611",
    "country": "Brazil"
  },
  
  
  
  {
    "airport_code": "XBE",
    "airport_name": "Bearskin Lake Airport",
    "name": "Casummit Lake",
    "lat": "53.9214",
    "lon": "-90.985",
    "country": "Canada"
  },
  {
    "airport_code": "XBJ",
    "airport_name": "Birjand Airport",
    "name": "Birjand",
    "lat": "32.8983",
    "lon": "59.2631",
    "country": "Iran"
  },
  {
    "airport_code": "XBR",
    "airport_name": "Brockville Airport",
    "name": "Brockville",
    "lat": "44.6353",
    "lon": "-75.7502",
    "country": "Canada"
  },
  {
    "airport_code": "XCH",
    "airport_name": "Christmas Island Airport",
    "name": "The Settlement",
    "lat": "-10.4503",
    "lon": "105.689",
    "country": "Christmas Island"
  },
  
  {
    "airport_code": "XCM",
    "airport_name": "Chatham Airport",
    "name": "Chatham",
    "lat": "42.4",
    "lon": "-82.1833",
    "country": "Canada"
  },
  {
    "airport_code": "XCR",
    "airport_name": "Europort Vatry",
    "name": "Coole",
    "lat": "48.7761",
    "lon": "4.1917",
    "country": "France"
  },
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  {
    "airport_code": "XET",
    "airport_name": "London City Airport",
    "name": "London",
    "lat": "51.5039",
    "lon": "0.04981",
    "country": "United Kingdom"
  },
  
  
  
  
  
  
  
  
  
  {
    "airport_code": "XFN",
    "airport_name": "Xiangfan",
    "name": "Xiangfan",
    "lat": "32.05",
    "lon": "112.017",
    "country": "China"
  },
  
  
  
  
  
  
  {
    "airport_code": "XFW",
    "airport_name": "Finkenwerder Airport",
    "name": "Hamburg",
    "lat": "53.5356",
    "lon": "9.8342",
    "country": "Germany"
  },
  
  
  
  
  
  
  {
    "airport_code": "XGR",
    "airport_name": "Kangiqsualujjuaq Airport",
    "name": "Chisasibi",
    "lat": "58.5344",
    "lon": "-65.8892",
    "country": "Canada"
  },
  
  
  
  
  
  
  
  
  {
    "airport_code": "XIC",
    "airport_name": "Xichang North Airport",
    "name": "Xichang",
    "lat": "27.9935",
    "lon": "102.179",
    "country": "China"
  },
  
  
  {
    "airport_code": "XIL",
    "airport_name": "Xilinhot Airport",
    "name": "Xilin Hot",
    "lat": "43.9667",
    "lon": "116.067",
    "country": "China"
  },
  
  
  
  {
    "airport_code": "XIT",
    "airport_name": "London City Airport",
    "name": "London",
    "lat": "51.5039",
    "lon": "0.04981",
    "country": "United Kingdom"
  },
  {
    "airport_code": "XIY",
    "airport_name": "Hsien Yang Airport",
    "name": "Xianyang",
    "lat": "34.3667",
    "lon": "108.7",
    "country": "China"
  },
  
  
  {
    "airport_code": "XKH",
    "airport_name": "Xieng Khouang",
    "name": "Xieng Khouang",
    "lat": "19.5",
    "lon": "103",
    "country": "Lao People's Democratic Republic"
  },
  
  {
    "airport_code": "XKS",
    "airport_name": "Kasabonika Airport",
    "name": "Casummit Lake",
    "lat": "53.513",
    "lon": "-88.6475",
    "country": "Canada"
  },
  
  {
    "airport_code": "XLB",
    "airport_name": "Lac Brochet",
    "name": "Lac Brochet",
    "lat": "58.65",
    "lon": "-97.3667",
    "country": "Canada"
  },
  
  
  
  
  
  
  
  {
    "airport_code": "XMH",
    "airport_name": "Manihi Airport",
    "name": "Manihi",
    "lat": "-14.4252",
    "lon": "-146.068",
    "country": "French Polynesia"
  },
  {
    "airport_code": "XMN",
    "airport_name": "Xiamen Airport",
    "name": "Xiamen",
    "lat": "24.5333",
    "lon": "118.117",
    "country": "China"
  },
  {
    "airport_code": "XMS",
    "airport_name": "Macas Airport",
    "name": "Zúñac",
    "lat": "-2.335",
    "lon": "-78.1669",
    "country": "Ecuador"
  },
  {
    "airport_code": "XMY",
    "airport_name": "Yam Island",
    "name": "Yam Island",
    "lat": "-10.4833",
    "lon": "142.45",
    "country": "Australia"
  },
  {
    "airport_code": "XNA",
    "airport_name": "Northwest Arkansas Regional Airport",
    "name": "Bentonville",
    "lat": "36.2756",
    "lon": "-94.2955",
    "country": "United States"
  },
  {
    "airport_code": "XNB",
    "airport_name": "Sinop Airport",
    "name": "Santo Antônio do Içá",
    "lat": "-3.08333",
    "lon": "-67.9333",
    "country": "Brazil"
  },
  
  {
    "airport_code": "XNN",
    "airport_name": "Xining Airport",
    "name": "Xining",
    "lat": "36.5678",
    "lon": "101.862",
    "country": "China"
  },
  
  
  {
    "airport_code": "XNY",
    "airport_name": "York",
    "name": "New York",
    "lat": "42.8767",
    "lon": "-77.8826",
    "country": "United States"
  },
  
  
  
  
  
  
  
  {
    "airport_code": "XPQ",
    "airport_name": "",
    "name": "Port Klang",
    "lat": "3",
    "lon": "101.4",
    "country": "Malaysia"
  },
  
  
  {
    "airport_code": "XQE",
    "airport_name": "United Kingdom",
    "name": "London",
    "lat": "54.3139",
    "lon": "-2.23218",
    "country": "United Kingdom"
  },
  
  
  
  {
    "airport_code": "XQP",
    "airport_name": "Quepos Managua Airport",
    "name": "Quepos",
    "lat": "9.4442",
    "lon": "-84.1311",
    "country": "Costa Rica"
  },
  {
    "airport_code": "XQU",
    "airport_name": "Qualicum Beach Airport",
    "name": "Qualicum Beach",
    "lat": "49.3384",
    "lon": "-124.392",
    "country": "Canada"
  },
  
  
  
  
  {
    "airport_code": "XRY",
    "airport_name": "Jerez Airport",
    "name": "Jerez",
    "lat": "36.7497",
    "lon": "-6.06054",
    "country": "Spain"
  },
  {
    "airport_code": "XSC",
    "airport_name": "South Caicos Airport",
    "name": "Cockburn Harbour",
    "lat": "21.5158",
    "lon": "-71.5297",
    "country": "Turks And Caicos Islands"
  },
  
  {
    "airport_code": "XSI",
    "airport_name": "South Indian Lake Airport",
    "name": "Nelson House",
    "lat": "56.7819",
    "lon": "-98.9558",
    "country": "Canada"
  },
  {
    "airport_code": "XSP",
    "airport_name": "Seletar Airport",
    "name": "Singapore",
    "lat": "1.4167",
    "lon": "103.869",
    "country": "Singapore"
  },
  
  {
    "airport_code": "XTG",
    "airport_name": "Thargomindah Aerodrome",
    "name": "Thargomindah",
    "lat": "-27.9829",
    "lon": "143.812",
    "country": "Australia"
  },
  
  {
    "airport_code": "XTL",
    "airport_name": "Tadoule Lake Airport",
    "name": "Nelson House",
    "lat": "58.5999",
    "lon": "-98.349",
    "country": "Canada"
  },
  
  {
    "airport_code": "XUZ",
    "airport_name": "Jiangsu",
    "name": "Xuzhou",
    "lat": "32.9444",
    "lon": "119.119",
    "country": "China"
  },
  
  
  
  {
    "airport_code": "XVG",
    "airport_name": "Longville Municipal Airport",
    "name": "Longville",
    "lat": "46.9929",
    "lon": "-94.2075",
    "country": "United States"
  },
  
  
  
  
  
  
  
  
  
  
  
  
  {
    "airport_code": "XWQ",
    "airport_name": "Sweden",
    "name": "Enkoping",
    "lat": "62.1984",
    "lon": "17.5514",
    "country": "Sweden"
  },
  
  
  
  
  {
    "airport_code": "XWZ",
    "airport_name": "Sweden",
    "name": "Nykoping",
    "lat": "62.1984",
    "lon": "17.5514",
    "country": "Sweden"
  },
  {
    "airport_code": "XXA",
    "airport_name": "Sweden",
    "name": "Alvesta",
    "lat": "62.1984",
    "lon": "17.5514",
    "country": "Sweden"
  },
  
  {
    "airport_code": "XXK",
    "airport_name": "Katrineholm",
    "name": "Katrineholm",
    "lat": "59.0167",
    "lon": "16.2167",
    "country": "Sweden"
  },
  
  {
    "airport_code": "XXN",
    "airport_name": "Riyadh Air Base",
    "name": "Riyadh",
    "lat": "46.4931",
    "lon": "-90.4134",
    "country": "Saudi Arabia"
  },
  
  {
    "airport_code": "XXT",
    "airport_name": "Sophia Antipolis Heliport",
    "name": "Valbonne",
    "lat": "43.6167",
    "lon": "7.05",
    "country": "France"
  },
  
  
  {
    "airport_code": "XYA",
    "airport_name": "Yandina",
    "name": "Yandina",
    "lat": "-9.06667",
    "lon": "159.233",
    "country": "Solomon Islands"
  },
  
  
  
  
  
  {
    "airport_code": "XYI",
    "airport_name": "Sweden",
    "name": "Flen",
    "lat": "62.1984",
    "lon": "17.5514",
    "country": "Sweden"
  },
  
  
  
  
  
  
  
  
  
  {
    "airport_code": "XZJ",
    "airport_name": "",
    "name": "Rail (Generic)",
    "lat": "37.7167",
    "lon": "28.9667",
    "country": "Japan"
  },
  
  {
    "airport_code": "XZM",
    "airport_name": "Macau Ferry",
    "name": "Macau",
    "lat": "-7.45",
    "lon": "-70.55",
    "country": "Macao"
  },
  
  
  
  {
    "airport_code": "XZV",
    "airport_name": "TGV Station",
    "name": "Toulon",
    "lat": "46.4833",
    "lon": "-0.633333",
    "country": "France"
  },
  {
    "airport_code": "YAA",
    "airport_name": "Anahim Lake Airport",
    "name": "Alexis Creek",
    "lat": "52.4539",
    "lon": "-125.304",
    "country": "Canada"
  },
  {
    "airport_code": "YAC",
    "airport_name": "Cat Lake Airport",
    "name": "Casummit Lake",
    "lat": "51.6667",
    "lon": "-91.8333",
    "country": "Canada"
  },
  {
    "airport_code": "YAG",
    "airport_name": "Fort Frances Municipal Airport",
    "name": "Fort Frances",
    "lat": "48.6498",
    "lon": "-93.4279",
    "country": "Canada"
  },
  {
    "airport_code": "YAK",
    "airport_name": "Yakutat Airport",
    "name": "Yakutat",
    "lat": "59.5103",
    "lon": "-139.668",
    "country": "United States"
  },
  {
    "airport_code": "YAM",
    "airport_name": "Sault Ste Marie Airport",
    "name": "Sault Ste. Marie",
    "lat": "46.4853",
    "lon": "-84.5002",
    "country": "Canada"
  },
  
  {
    "airport_code": "YAP",
    "airport_name": "Yap International Airport",
    "name": "Colonia",
    "lat": "9.48333",
    "lon": "138.083",
    "country": "Federated States of Micronesia"
  },
  {
    "airport_code": "YAT",
    "airport_name": "Attawapiskat Airport",
    "name": "Winisk",
    "lat": "52.9338",
    "lon": "-82.392",
    "country": "Canada"
  },
  {
    "airport_code": "YAX",
    "airport_name": "Angling Lake Airport",
    "name": "Casummit Lake",
    "lat": "53.2519",
    "lon": "-89.565",
    "country": "Canada"
  },
  {
    "airport_code": "YAY",
    "airport_name": "St Anthony Airport",
    "name": "St. Anthony",
    "lat": "51.3883",
    "lon": "-56.0901",
    "country": "Canada"
  },
  {
    "airport_code": "YAZ",
    "airport_name": "Tofino Airport",
    "name": "Lake Cowichan",
    "lat": "49.0797",
    "lon": "-125.769",
    "country": "Canada"
  },
  {
    "airport_code": "YBB",
    "airport_name": "Pelly Bay Townsite Airport",
    "name": "Cambridge Bay",
    "lat": "68.5333",
    "lon": "-89.8167",
    "country": "Canada"
  },
  {
    "airport_code": "YBC",
    "airport_name": "Baie Comeau Airport",
    "name": "Betsiamites",
    "lat": "49.1368",
    "lon": "-68.1995",
    "country": "Canada"
  },
  {
    "airport_code": "YBG",
    "airport_name": "Bagotville Airport",
    "name": "Saguenay",
    "lat": "48.3368",
    "lon": "-70.9998",
    "country": "Canada"
  },
  {
    "airport_code": "YBI",
    "airport_name": "Black Tickle Airport",
    "name": "St. Anthony",
    "lat": "53.4552",
    "lon": "-55.7653",
    "country": "Canada"
  },
  {
    "airport_code": "YBK",
    "airport_name": "Baker Lake Airport",
    "name": "Chesterfield Inlet",
    "lat": "64.3003",
    "lon": "-96.0846",
    "country": "Canada"
  },
  {
    "airport_code": "YBL",
    "airport_name": "Campbell River Airport",
    "name": "Gold River",
    "lat": "49.954",
    "lon": "-125.27",
    "country": "Canada"
  },
  {
    "airport_code": "YBP",
    "airport_name": "Yibin",
    "name": "Yibin",
    "lat": "28.766",
    "lon": "104.623",
    "country": "China"
  },
  
  {
    "airport_code": "YBT",
    "airport_name": "Brochet",
    "name": "Brochet",
    "lat": "57.8833",
    "lon": "-101.683",
    "country": "Canada"
  },
  {
    "airport_code": "YBV",
    "airport_name": "Berens River Airport",
    "name": "Nelson House",
    "lat": "52.4333",
    "lon": "-97.0333",
    "country": "Canada"
  },
  
  {
    "airport_code": "YBX",
    "airport_name": "Lourdes-De-Blanc-Sablon Airport",
    "name": "Havre-St-Pierre",
    "lat": "51.4436",
    "lon": "-57.1861",
    "country": "Canada"
  },
  
  
  {
    "airport_code": "YCB",
    "airport_name": "Cambridge Bay Airport",
    "name": "Cambridge Bay",
    "lat": "69.0981",
    "lon": "-105.134",
    "country": "Canada"
  },
  {
    "airport_code": "YCC",
    "airport_name": "Cornwall Regional Airport",
    "name": "Moose Creek",
    "lat": "45.092",
    "lon": "-74.56",
    "country": "Canada"
  },
  {
    "airport_code": "YCD",
    "airport_name": "Nanaimo Airport",
    "name": "Nanaimo",
    "lat": "49.0521",
    "lon": "-123.874",
    "country": "Canada"
  },
  {
    "airport_code": "YCG",
    "airport_name": "Castlegar Airport",
    "name": "Castlegar",
    "lat": "49.3002",
    "lon": "-117.637",
    "country": "Canada"
  },
  {
    "airport_code": "YCK",
    "airport_name": "Colville Lake Airport",
    "name": "Hay River",
    "lat": "67.0454",
    "lon": "-125.853",
    "country": "Canada"
  },
  
  {
    "airport_code": "YCO",
    "airport_name": "Coppermine Airport",
    "name": "Cambridge Bay",
    "lat": "67.8182",
    "lon": "-115.147",
    "country": "Canada"
  },
  {
    "airport_code": "YCR",
    "airport_name": "Cross Lake Airport",
    "name": "Nelson House",
    "lat": "54.6042",
    "lon": "-97.7607",
    "country": "Canada"
  },
  {
    "airport_code": "YCS",
    "airport_name": "Chesterfield Inlet Airport",
    "name": "Chesterfield Inlet",
    "lat": "63.3358",
    "lon": "-90.734",
    "country": "Canada"
  },
  {
    "airport_code": "YCU",
    "airport_name": "Cullaton Lake Airport",
    "name": "Chesterfield Inlet",
    "lat": "61.3167",
    "lon": "-98.5",
    "country": "Canada"
  },
  {
    "airport_code": "YCY",
    "airport_name": "Clyde River Airport",
    "name": "Iqaluit",
    "lat": "70.4833",
    "lon": "-68.5167",
    "country": "Canada"
  },
  {
    "airport_code": "YDA",
    "airport_name": "Dawson Airport",
    "name": "Dawson",
    "lat": "64.0448",
    "lon": "-139.126",
    "country": "Canada"
  },
  {
    "airport_code": "YDF",
    "airport_name": "Deer Lake Airport",
    "name": "St. Anthony",
    "lat": "49.2085",
    "lon": "-57.3999",
    "country": "Canada"
  },
  
  {
    "airport_code": "YDP",
    "airport_name": "Nain Airport",
    "name": "Happy Valley-Goose Bay",
    "lat": "56.5333",
    "lon": "-61.6667",
    "country": "Canada"
  },
  {
    "airport_code": "YDQ",
    "airport_name": "Dawson Creek Airport",
    "name": "Dawson Creek",
    "lat": "55.739",
    "lon": "-120.187",
    "country": "Canada"
  },
  {
    "airport_code": "YEG",
    "airport_name": "Edmonton International Airport",
    "name": "Leduc",
    "lat": "53.3078",
    "lon": "-113.584",
    "country": "Canada"
  },
  
  {
    "airport_code": "YEK",
    "airport_name": "Arviat Airport",
    "name": "Chesterfield Inlet",
    "lat": "61.1019",
    "lon": "-94.0622",
    "country": "Canada"
  },
  {
    "airport_code": "YER",
    "airport_name": "Fort Severn Airport",
    "name": "Casummit Lake",
    "lat": "56",
    "lon": "-87.6333",
    "country": "Canada"
  },
  {
    "airport_code": "YES",
    "airport_name": "",
    "name": "Yasouj",
    "lat": "34.4382",
    "lon": "-104.611",
    "country": "Iran"
  },
  {
    "airport_code": "YEV",
    "airport_name": "Inuvik Airport",
    "name": "Hay River",
    "lat": "68.3063",
    "lon": "-133.497",
    "country": "Canada"
  },
  {
    "airport_code": "YFA",
    "airport_name": "Fort Albany Airport",
    "name": "Winisk",
    "lat": "52.2417",
    "lon": "-81.5917",
    "country": "Canada"
  },
  {
    "airport_code": "YFB",
    "airport_name": "Iqaluit Airport",
    "name": "Iqaluit",
    "lat": "63.7514",
    "lon": "-68.5353",
    "country": "Canada"
  },
  {
    "airport_code": "YFC",
    "airport_name": "Fredericton Airport",
    "name": "Fredericton",
    "lat": "45.873",
    "lon": "-66.5296",
    "country": "Canada"
  },
  {
    "airport_code": "YFH",
    "airport_name": "Fort Hope Airport",
    "name": "Marathon",
    "lat": "51.5466",
    "lon": "-87.9859",
    "country": "Canada"
  },
  {
    "airport_code": "YFJ",
    "airport_name": "Snare Lake",
    "name": "Snare Lake",
    "lat": "64.1904",
    "lon": "-114.183",
    "country": "Canada"
  },
  {
    "airport_code": "YFO",
    "airport_name": "Flin Flon Airport",
    "name": "Flin Flon",
    "lat": "54.7483",
    "lon": "-101.83",
    "country": "Canada"
  },
  {
    "airport_code": "YFS",
    "airport_name": "Fort Simpson Airport",
    "name": "Hay River",
    "lat": "61.7556",
    "lon": "-121.238",
    "country": "Canada"
  },
  
  {
    "airport_code": "YGB",
    "airport_name": "Gillies Bay Airport",
    "name": "Gibsons",
    "lat": "49.6942",
    "lon": "-124.516",
    "country": "Canada"
  },
  
  {
    "airport_code": "YGH",
    "airport_name": "Fort Good Hope Airport",
    "name": "Hay River",
    "lat": "66.2653",
    "lon": "-128.617",
    "country": "Canada"
  },
  {
    "airport_code": "YGJ",
    "airport_name": "Yonago Airport",
    "name": "Sakaiminato-shi",
    "lat": "35.4943",
    "lon": "133.237",
    "country": "Japan"
  },
  {
    "airport_code": "YGK",
    "airport_name": "Kingston Airport",
    "name": "Kingston",
    "lat": "44.2333",
    "lon": "-76.5833",
    "country": "Canada"
  },
  {
    "airport_code": "YGL",
    "airport_name": "La Grande Riviere Airport",
    "name": "Chisasibi",
    "lat": "53.6256",
    "lon": "-77.705",
    "country": "Canada"
  },
  {
    "airport_code": "YGO",
    "airport_name": "Gods Lake Narrows Airport",
    "name": "Nelson House",
    "lat": "54.55",
    "lon": "-94.4833",
    "country": "Canada"
  },
  {
    "airport_code": "YGP",
    "airport_name": "Gaspe Airport",
    "name": "Gaspé",
    "lat": "48.7782",
    "lon": "-64.4738",
    "country": "Canada"
  },
  {
    "airport_code": "YGR",
    "airport_name": "Iles de la Madeleine Airport",
    "name": "Fatima",
    "lat": "47.42",
    "lon": "-61.7743",
    "country": "Canada"
  },
  {
    "airport_code": "YGT",
    "airport_name": "Igloolik Airport",
    "name": "Iqaluit",
    "lat": "69.3674",
    "lon": "-81.8254",
    "country": "Canada"
  },
  
  {
    "airport_code": "YGW",
    "airport_name": "Kuujjuarapik Airport",
    "name": "Chisasibi",
    "lat": "55.2825",
    "lon": "-77.7583",
    "country": "Canada"
  },
  
  {
    "airport_code": "YGZ",
    "airport_name": "Grise Fiord Airport",
    "name": "Iqaluit",
    "lat": "76.425",
    "lon": "-82.9458",
    "country": "Canada"
  },
  {
    "airport_code": "YHA",
    "airport_name": "Port Hope Simpson Aerodrome",
    "name": "St. Anthony",
    "lat": "52.5333",
    "lon": "-56.3",
    "country": "Canada"
  },
  
  {
    "airport_code": "YHD",
    "airport_name": "Dryden Regional Airport",
    "name": "Dryden",
    "lat": "49.8284",
    "lon": "-92.7465",
    "country": "Canada"
  },
  {
    "airport_code": "YHG",
    "airport_name": "Charlottetown Airport",
    "name": "St. Anthony",
    "lat": "52.7667",
    "lon": "-56.1",
    "country": "Canada"
  },
  {
    "airport_code": "YHI",
    "airport_name": "Holman Airport",
    "name": "Holman",
    "lat": "70.7766",
    "lon": "-117.831",
    "country": "Canada"
  },
  {
    "airport_code": "YHK",
    "airport_name": "Gjoa Haven Airport",
    "name": "Cambridge Bay",
    "lat": "68.6337",
    "lon": "-95.8561",
    "country": "Canada"
  },
  {
    "airport_code": "YHM",
    "airport_name": "Hamilton Airport",
    "name": "Beamsville",
    "lat": "43.1632",
    "lon": "-79.9266",
    "country": "Canada"
  },
  {
    "airport_code": "YHO",
    "airport_name": "Hopedale Airport",
    "name": "Happy Valley-Goose Bay",
    "lat": "55.4667",
    "lon": "-60.2167",
    "country": "Canada"
  },
  {
    "airport_code": "YHP",
    "airport_name": "Poplar Hill Airport",
    "name": "Casummit Lake",
    "lat": "52.0801",
    "lon": "-94.3094",
    "country": "Canada"
  },
  {
    "airport_code": "YHR",
    "airport_name": "Harrington Harbour Airport",
    "name": "Havre-St-Pierre",
    "lat": "50.5013",
    "lon": "-59.4799",
    "country": "Canada"
  },
  {
    "airport_code": "YHS",
    "airport_name": "Sechelt Water Aerodrome",
    "name": "Gibsons",
    "lat": "49.4735",
    "lon": "-123.747",
    "country": "Canada"
  },
  
  {
    "airport_code": "YHY",
    "airport_name": "Hay River Airport",
    "name": "Hay River",
    "lat": "60.8392",
    "lon": "-115.781",
    "country": "Canada"
  },
  {
    "airport_code": "YHZ",
    "airport_name": "Halifax International Airport",
    "name": "Fall River",
    "lat": "44.8868",
    "lon": "-63.5154",
    "country": "Canada"
  },
  {
    "airport_code": "YIF",
    "airport_name": "Pakuashipi Airport",
    "name": "Havre-St-Pierre",
    "lat": "51.2117",
    "lon": "-58.6592",
    "country": "Canada"
  },
  {
    "airport_code": "YIH",
    "airport_name": "China",
    "name": "Yichang",
    "lat": "30.9007",
    "lon": "111.06",
    "country": "China"
  },
  {
    "airport_code": "YIK",
    "airport_name": "Ivujivik Airport",
    "name": "Chisasibi",
    "lat": "62.4137",
    "lon": "-77.9323",
    "country": "Canada"
  },
  {
    "airport_code": "YIN",
    "airport_name": "Yining",
    "name": "Yining",
    "lat": "43.9375",
    "lon": "81.3029",
    "country": "China"
  },
  {
    "airport_code": "YIO",
    "airport_name": "Pond Inlet Airport",
    "name": "Iqaluit",
    "lat": "72.6806",
    "lon": "-77.9981",
    "country": "Canada"
  },
  
  {
    "airport_code": "YIV",
    "airport_name": "Island Lake-Garden Hill Airport",
    "name": "Nelson House",
    "lat": "53.859",
    "lon": "-94.6296",
    "country": "Canada"
  },
  {
    "airport_code": "YIW",
    "airport_name": "",
    "name": "Yiwu",
    "lat": "0.688365",
    "lon": "129.154",
    "country": "China"
  },
  {
    "airport_code": "YJT",
    "airport_name": "Stephenville International Airport",
    "name": "Stephenville",
    "lat": "48.5456",
    "lon": "-58.5626",
    "country": "Canada"
  },
  {
    "airport_code": "YKA",
    "airport_name": "Kamloops Airport",
    "name": "Kamloops",
    "lat": "50.7054",
    "lon": "-120.442",
    "country": "Canada"
  },
  {
    "airport_code": "YKF",
    "airport_name": "Kitchener Airport",
    "name": "Kitchener",
    "lat": "43.45",
    "lon": "-80.4833",
    "country": "Canada"
  },
  {
    "airport_code": "YKG",
    "airport_name": "Kangirsuk Airport",
    "name": "Chisasibi",
    "lat": "60.0199",
    "lon": "-69.9964",
    "country": "Canada"
  },
  {
    "airport_code": "YKL",
    "airport_name": "Schefferville Airport",
    "name": "Chisasibi",
    "lat": "54.8056",
    "lon": "-66.8067",
    "country": "Canada"
  },
  {
    "airport_code": "YKM",
    "airport_name": "Yakima Air Terminal",
    "name": "Yakima",
    "lat": "46.5703",
    "lon": "-120.54",
    "country": "United States"
  },
  {
    "airport_code": "YKQ",
    "airport_name": "Waskaganish Airport",
    "name": "Chisasibi",
    "lat": "51.485",
    "lon": "-78.7483",
    "country": "Canada"
  },
  {
    "airport_code": "YKS",
    "airport_name": "Yakutsk Airport",
    "name": "Yakutsk",
    "lat": "62.0953",
    "lon": "129.767",
    "country": "Russia"
  },
  {
    "airport_code": "YKT",
    "airport_name": "Klemtu Water Aerodrome",
    "name": "Masset",
    "lat": "52.5995",
    "lon": "-128.529",
    "country": "Canada"
  },
  {
    "airport_code": "YKU",
    "airport_name": "Chisasibi Aerodrome",
    "name": "Chisasibi",
    "lat": "53.8167",
    "lon": "-79",
    "country": "Canada"
  },
  {
    "airport_code": "YLC",
    "airport_name": "Lake Harbour Airport",
    "name": "Iqaluit",
    "lat": "62.85",
    "lon": "-69.8833",
    "country": "Canada"
  },
  {
    "airport_code": "YLE",
    "airport_name": "Lac la Martre Aerodrome",
    "name": "Hay River",
    "lat": "63.15",
    "lon": "-117.267",
    "country": "Canada"
  },
  {
    "airport_code": "YLH",
    "airport_name": "Lansdowne House Airport",
    "name": "Marathon",
    "lat": "52.2069",
    "lon": "-87.9102",
    "country": "Canada"
  },
  {
    "airport_code": "YLL",
    "airport_name": "Lloydminster Airport",
    "name": "Vegreville",
    "lat": "53.3122",
    "lon": "-110.073",
    "country": "Canada"
  },
  
  {
    "airport_code": "YLW",
    "airport_name": "Kelowna International Airport",
    "name": "Kelowna",
    "lat": "49.9509",
    "lon": "-119.382",
    "country": "Canada"
  },
  {
    "airport_code": "YMH",
    "airport_name": "Mary's Harbour Airport",
    "name": "St. Anthony",
    "lat": "52.3",
    "lon": "-55.8333",
    "country": "Canada"
  },
  {
    "airport_code": "YMM",
    "airport_name": "Fort Mcmurray Airport",
    "name": "Fort Chipewyan",
    "lat": "56.6512",
    "lon": "-111.246",
    "country": "Canada"
  },
  {
    "airport_code": "YMN",
    "airport_name": "Makkovik Airport",
    "name": "Happy Valley-Goose Bay",
    "lat": "55.0872",
    "lon": "-59.1714",
    "country": "Canada"
  },
  {
    "airport_code": "YMO",
    "airport_name": "Moosonee Airport",
    "name": "Winisk",
    "lat": "51.2855",
    "lon": "-80.6131",
    "country": "Canada"
  },
  {
    "airport_code": "YMT",
    "airport_name": "Aéroport de Chapais-Chibougamau",
    "name": "Métabetchouan",
    "lat": "49.7793",
    "lon": "-74.5295",
    "country": "Canada"
  },
  {
    "airport_code": "YMX",
    "airport_name": "Mirabel International Airport",
    "name": "Mirabel",
    "lat": "45.6667",
    "lon": "-74.03",
    "country": "Canada"
  },
  
  {
    "airport_code": "YNA",
    "airport_name": "Natashquan Airport",
    "name": "Havre-St-Pierre",
    "lat": "50.1903",
    "lon": "-61.79",
    "country": "Canada"
  },
  {
    "airport_code": "YNB",
    "airport_name": "Yenbo Airport",
    "name": "Yanbu al Bahr",
    "lat": "24.145",
    "lon": "38.0636",
    "country": "Saudi Arabia"
  },
  {
    "airport_code": "YNC",
    "airport_name": "Wemindji Airport",
    "name": "Chisasibi",
    "lat": "52.9972",
    "lon": "-78.8333",
    "country": "Canada"
  },
  
  {
    "airport_code": "YNE",
    "airport_name": "Norway House Airport",
    "name": "Nelson House",
    "lat": "53.9833",
    "lon": "-97.8",
    "country": "Canada"
  },
  {
    "airport_code": "YNG",
    "airport_name": "Youngstown-Warren Regional Airport",
    "name": "Vienna",
    "lat": "41.2576",
    "lon": "-80.6648",
    "country": "United States"
  },
  {
    "airport_code": "YNJ",
    "airport_name": "Yanji",
    "name": "Yanji",
    "lat": "42.65",
    "lon": "129.5",
    "country": "China"
  },
  {
    "airport_code": "YNO",
    "airport_name": "North Spirit Lake Airport",
    "name": "Casummit Lake",
    "lat": "52.4953",
    "lon": "-92.8807",
    "country": "Canada"
  },
  {
    "airport_code": "YNP",
    "airport_name": "",
    "name": "Natuashish",
    "lat": "62.3587",
    "lon": "-96.5821",
    "country": "Canada"
  },
  {
    "airport_code": "YNS",
    "airport_name": "Nemiscau Airport",
    "name": "Chisasibi",
    "lat": "51.6896",
    "lon": "-76.1421",
    "country": "Canada"
  },
  {
    "airport_code": "YNT",
    "airport_name": "Yantai Airport",
    "name": "Yantai",
    "lat": "37.55",
    "lon": "121.333",
    "country": "China"
  },
  {
    "airport_code": "YNY",
    "airport_name": "Yang Yang International Airport",
    "name": "Sonyang-Myeon",
    "lat": "38.0481",
    "lon": "128.656",
    "country": "South Korea"
  },
  {
    "airport_code": "YNZ",
    "airport_name": "",
    "name": "Yancheng",
    "lat": "33.3856",
    "lon": "120.125",
    "country": "China"
  },
  {
    "airport_code": "YOC",
    "airport_name": "Old Crow Airport",
    "name": "Dawson",
    "lat": "67.5734",
    "lon": "-139.849",
    "country": "Canada"
  },
  {
    "airport_code": "YOG",
    "airport_name": "Ogoki Aerodrome",
    "name": "Marathon",
    "lat": "51.6291",
    "lon": "-85.954",
    "country": "Canada"
  },
  {
    "airport_code": "YOH",
    "airport_name": "Oxford House Airport",
    "name": "Nelson House",
    "lat": "54.9357",
    "lon": "-95.2757",
    "country": "Canada"
  },
  {
    "airport_code": "YOJ",
    "airport_name": "High Level Airport",
    "name": "Brownvale",
    "lat": "58.6137",
    "lon": "-117.163",
    "country": "Canada"
  },
  {
    "airport_code": "YOO",
    "airport_name": "Oshawa Airport",
    "name": "Oshawa",
    "lat": "43.9263",
    "lon": "-78.8959",
    "country": "Canada"
  },
  {
    "airport_code": "YOP",
    "airport_name": "Rainbow Lake Airport",
    "name": "Brownvale",
    "lat": "58.4906",
    "lon": "-119.402",
    "country": "Canada"
  },
  {
    "airport_code": "YOW",
    "airport_name": "Ottawa International Airport",
    "name": "Ottawa",
    "lat": "45.3248",
    "lon": "-75.6666",
    "country": "Canada"
  },
  {
    "airport_code": "YPB",
    "airport_name": "Port Alberni Airport",
    "name": "Lake Cowichan",
    "lat": "49.2618",
    "lon": "-124.836",
    "country": "Canada"
  },
  {
    "airport_code": "YPC",
    "airport_name": "Paulatuk Airport",
    "name": "Hay River",
    "lat": "69.3499",
    "lon": "-124.085",
    "country": "Canada"
  },
  {
    "airport_code": "YPE",
    "airport_name": "Peace River Airport",
    "name": "Brownvale",
    "lat": "56.2314",
    "lon": "-117.448",
    "country": "Canada"
  },
  {
    "airport_code": "YPH",
    "airport_name": "Inukjuak Airport",
    "name": "Chisasibi",
    "lat": "58.4575",
    "lon": "-78.1327",
    "country": "Canada"
  },
  {
    "airport_code": "YPJ",
    "airport_name": "Aupaluk Airport",
    "name": "Chisasibi",
    "lat": "58.8566",
    "lon": "-69.3528",
    "country": "Canada"
  },
  {
    "airport_code": "YPL",
    "airport_name": "Pickle Lake Airport",
    "name": "Casummit Lake",
    "lat": "51.4503",
    "lon": "-90.2155",
    "country": "Canada"
  },
  {
    "airport_code": "YPM",
    "airport_name": "Pikangikum Airport",
    "name": "Casummit Lake",
    "lat": "51.8117",
    "lon": "-93.9886",
    "country": "Canada"
  },
  {
    "airport_code": "YPO",
    "airport_name": "Peawanuck Airport",
    "name": "Winisk",
    "lat": "54.9906",
    "lon": "-85.4393",
    "country": "Canada"
  },
  {
    "airport_code": "YPR",
    "airport_name": "Prince Rupert Airport",
    "name": "Prince Rupert",
    "lat": "54.292",
    "lon": "-130.446",
    "country": "Canada"
  },
  {
    "airport_code": "YPW",
    "airport_name": "Powell River Airport",
    "name": "Powell River",
    "lat": "49.8369",
    "lon": "-124.496",
    "country": "Canada"
  },
  {
    "airport_code": "YPX",
    "airport_name": "Povungnituk Airport",
    "name": "Chisasibi",
    "lat": "59.8141",
    "lon": "-77.2512",
    "country": "Canada"
  },
  
  {
    "airport_code": "YQB",
    "airport_name": "Quebec Airport",
    "name": "Ste-Foy",
    "lat": "46.791",
    "lon": "-71.3837",
    "country": "Canada"
  },
  {
    "airport_code": "YQC",
    "airport_name": "Quaqtaq Airport",
    "name": "Chisasibi",
    "lat": "61.0495",
    "lon": "-69.6207",
    "country": "Canada"
  },
  {
    "airport_code": "YQD",
    "airport_name": "The Pas Airport",
    "name": "The Pas",
    "lat": "53.8234",
    "lon": "-101.205",
    "country": "Canada"
  },
  
  {
    "airport_code": "YQG",
    "airport_name": "Windsor Airport",
    "name": "Windsor",
    "lat": "42.2657",
    "lon": "-82.9602",
    "country": "Canada"
  },
  {
    "airport_code": "YQK",
    "airport_name": "Kenora Airport",
    "name": "Kenora",
    "lat": "49.7893",
    "lon": "-94.3676",
    "country": "Canada"
  },
  {
    "airport_code": "YQL",
    "airport_name": "Lethbridge Airport",
    "name": "Pincher",
    "lat": "49.6344",
    "lon": "-112.787",
    "country": "Canada"
  },
  {
    "airport_code": "YQM",
    "airport_name": "Greater Moncton International Airport",
    "name": "Moncton",
    "lat": "46.1166",
    "lon": "-64.6883",
    "country": "Canada"
  },
  
  {
    "airport_code": "YQQ",
    "airport_name": "Comox Airport",
    "name": "Comox",
    "lat": "49.7083",
    "lon": "-124.897",
    "country": "Canada"
  },
  {
    "airport_code": "YQR",
    "airport_name": "Regina Airport",
    "name": "Regina",
    "lat": "50.4345",
    "lon": "-104.655",
    "country": "Canada"
  },
  {
    "airport_code": "YQT",
    "airport_name": "Thunder Bay International Airport",
    "name": "Thunder Bay",
    "lat": "48.3718",
    "lon": "-89.3118",
    "country": "Canada"
  },
  {
    "airport_code": "YQU",
    "airport_name": "Grande Prairie Airport",
    "name": "Brownvale",
    "lat": "55.1787",
    "lon": "-118.872",
    "country": "Canada"
  },
  {
    "airport_code": "YQX",
    "airport_name": "Gander International Airport",
    "name": "Gander",
    "lat": "48.9465",
    "lon": "-54.5802",
    "country": "Canada"
  },
  {
    "airport_code": "YQY",
    "airport_name": "Sydney Airport",
    "name": "Sydney",
    "lat": "46.1675",
    "lon": "-60.0473",
    "country": "Canada"
  },
  {
    "airport_code": "YQZ",
    "airport_name": "Quesnel Airport",
    "name": "Quesnel",
    "lat": "53.0275",
    "lon": "-122.507",
    "country": "Canada"
  },
  {
    "airport_code": "YRA",
    "airport_name": "Rae Lakes Aerodrome",
    "name": "Hay River",
    "lat": "64.1111",
    "lon": "-117.353",
    "country": "Canada"
  },
  {
    "airport_code": "YRB",
    "airport_name": "Resolute Airport",
    "name": "Iqaluit",
    "lat": "74.7167",
    "lon": "-94.9667",
    "country": "Canada"
  },
  {
    "airport_code": "YRF",
    "airport_name": "Cartwright Airport",
    "name": "St. Anthony",
    "lat": "53.7084",
    "lon": "-57.0014",
    "country": "Canada"
  },
  {
    "airport_code": "YRG",
    "airport_name": "Rigolet Aerodrome",
    "name": "Happy Valley-Goose Bay",
    "lat": "54.2102",
    "lon": "-58.4141",
    "country": "Canada"
  },
  {
    "airport_code": "YRJ",
    "airport_name": "Roberval Airport",
    "name": "Roberval",
    "lat": "48.52",
    "lon": "-72.2661",
    "country": "Canada"
  },
  {
    "airport_code": "YRL",
    "airport_name": "Red Lake Airport",
    "name": "Casummit Lake",
    "lat": "51.0683",
    "lon": "-93.8015",
    "country": "Canada"
  },
  {
    "airport_code": "YRS",
    "airport_name": "Red Sucker Lake Airport",
    "name": "Nelson House",
    "lat": "54.1623",
    "lon": "-93.5887",
    "country": "Canada"
  },
  {
    "airport_code": "YRT",
    "airport_name": "Rankin Inlet Airport",
    "name": "Chesterfield Inlet",
    "lat": "62.8042",
    "lon": "-92.1026",
    "country": "Canada"
  },
  {
    "airport_code": "YSB",
    "airport_name": "Sudbury Airport",
    "name": "Garson",
    "lat": "46.6229",
    "lon": "-80.7953",
    "country": "Canada"
  },
  {
    "airport_code": "YSG",
    "airport_name": "Snowdrift Aerodrome",
    "name": "Hay River",
    "lat": "62.4009",
    "lon": "-110.693",
    "country": "Canada"
  },
  
  {
    "airport_code": "YSJ",
    "airport_name": "Saint John Airport",
    "name": "St. John",
    "lat": "45.3294",
    "lon": "-65.8903",
    "country": "Canada"
  },
  {
    "airport_code": "YSK",
    "airport_name": "Sanikiluaq Airport",
    "name": "Iqaluit",
    "lat": "56.2385",
    "lon": "-78.8122",
    "country": "Canada"
  },
  {
    "airport_code": "YSM",
    "airport_name": "Fort Smith Airport",
    "name": "Hay River",
    "lat": "60.0208",
    "lon": "-111.963",
    "country": "Canada"
  },
  {
    "airport_code": "YSO",
    "airport_name": "Postville Aerodrome",
    "name": "Happy Valley-Goose Bay",
    "lat": "54.9119",
    "lon": "-59.7708",
    "country": "Canada"
  },
  {
    "airport_code": "YSR",
    "airport_name": "Nanisivik Airport",
    "name": "Iqaluit",
    "lat": "72.9833",
    "lon": "-84.6333",
    "country": "Canada"
  },
  {
    "airport_code": "YST",
    "airport_name": "Shante Airport",
    "name": "Meiktila",
    "lat": "20.9417",
    "lon": "95.9181",
    "country": "Myanmar"
  },
  {
    "airport_code": "YSY",
    "airport_name": "Sachs Harbour Airport",
    "name": "Hay River",
    "lat": "72",
    "lon": "-125.267",
    "country": "Canada"
  },
  
  {
    "airport_code": "YTE",
    "airport_name": "Cape Dorset Airport",
    "name": "Iqaluit",
    "lat": "64.2228",
    "lon": "-76.5337",
    "country": "Canada"
  },
  {
    "airport_code": "YTF",
    "airport_name": "Alma",
    "name": "Alma",
    "lat": "48.55",
    "lon": "-71.65",
    "country": "Canada"
  },
  {
    "airport_code": "YTH",
    "airport_name": "Thompson Airport",
    "name": "Nelson House",
    "lat": "55.7999",
    "lon": "-97.8598",
    "country": "Canada"
  },
  {
    "airport_code": "YTL",
    "airport_name": "Big Trout Lake Airport",
    "name": "Casummit Lake",
    "lat": "53.7767",
    "lon": "-89.9697",
    "country": "Canada"
  },
  {
    "airport_code": "YTM",
    "airport_name": "La Macaza",
    "name": "Mont Tremblant",
    "lat": "46.25",
    "lon": "-74.5833",
    "country": "Canada"
  },
  {
    "airport_code": "YTQ",
    "airport_name": "Tasiujuaq Airport",
    "name": "Chisasibi",
    "lat": "53.6833",
    "lon": "-69.9333",
    "country": "Canada"
  },
  {
    "airport_code": "YTS",
    "airport_name": "Timmins Airport",
    "name": "South Porcupine",
    "lat": "48.5655",
    "lon": "-81.3718",
    "country": "Canada"
  },
  {
    "airport_code": "YTZ",
    "airport_name": "Toronto City Centre Airport",
    "name": "Toronto",
    "lat": "43.6321",
    "lon": "-79.3962",
    "country": "Canada"
  },
  {
    "airport_code": "YUB",
    "airport_name": "Tuktoyaktuk Airport",
    "name": "Hay River",
    "lat": "69.4335",
    "lon": "-133.02",
    "country": "Canada"
  },
  {
    "airport_code": "YUD",
    "airport_name": "Umiujaq Airport",
    "name": "Chisasibi",
    "lat": "56.4835",
    "lon": "-76.4426",
    "country": "Canada"
  },
  {
    "airport_code": "YUL",
    "airport_name": "Aéroport International Pierre-Elliott-Trudeau d",
    "name": "Dorval",
    "lat": "45.4562",
    "lon": "-73.7473",
    "country": "Canada"
  },
  {
    "airport_code": "YUM",
    "airport_name": "Yuma International Airport",
    "name": "Yuma",
    "lat": "32.6685",
    "lon": "-114.599",
    "country": "United States"
  },
  {
    "airport_code": "YUT",
    "airport_name": "Repulse Bay Airport",
    "name": "Chesterfield Inlet",
    "lat": "66.5333",
    "lon": "-86.25",
    "country": "Canada"
  },
  {
    "airport_code": "YUX",
    "airport_name": "Hall Beach Airport",
    "name": "Iqaluit",
    "lat": "68.7804",
    "lon": "-81.2429",
    "country": "Canada"
  },
  {
    "airport_code": "YUY",
    "airport_name": "Rouyn Noranda Airport",
    "name": "Évain",
    "lat": "48.2135",
    "lon": "-78.8287",
    "country": "Canada"
  },
  
  {
    "airport_code": "YVB",
    "airport_name": "Bonaventure Airport",
    "name": "Percé",
    "lat": "48.0717",
    "lon": "-65.4614",
    "country": "Canada"
  },
  {
    "airport_code": "YVM",
    "airport_name": "Broughton Island Airport",
    "name": "Iqaluit",
    "lat": "67.5412",
    "lon": "-63.9855",
    "country": "Canada"
  },
  {
    "airport_code": "YVO",
    "airport_name": "Val d'or Airport",
    "name": "Val-d'or",
    "lat": "48.0623",
    "lon": "-77.7896",
    "country": "Canada"
  },
  {
    "airport_code": "YVP",
    "airport_name": "Kuujjuaq Airport",
    "name": "Chisasibi",
    "lat": "58.102",
    "lon": "-68.4333",
    "country": "Canada"
  },
  {
    "airport_code": "YVQ",
    "airport_name": "Norman Wells Airport",
    "name": "Hay River",
    "lat": "65.2825",
    "lon": "-126.798",
    "country": "Canada"
  },
  {
    "airport_code": "YVR",
    "airport_name": "Vancouver International Airport",
    "name": "Richmond",
    "lat": "49.1931",
    "lon": "-123.172",
    "country": "Canada"
  },
  {
    "airport_code": "YVZ",
    "airport_name": "Deer Lake Airport",
    "name": "Casummit Lake",
    "lat": "52.6528",
    "lon": "-94.1569",
    "country": "Canada"
  },
  {
    "airport_code": "YWB",
    "airport_name": "Kangiqsujuaq Airport",
    "name": "Chisasibi",
    "lat": "61.6013",
    "lon": "-71.9503",
    "country": "Canada"
  },
  {
    "airport_code": "YWG",
    "airport_name": "Winnipeg International Airport",
    "name": "Winnipeg",
    "lat": "49.9045",
    "lon": "-97.2253",
    "country": "Canada"
  },
  {
    "airport_code": "YWH",
    "airport_name": "Inner Harbour Airport",
    "name": "Hay River",
    "lat": "70.9166",
    "lon": "-109.985",
    "country": "Canada"
  },
  {
    "airport_code": "YWJ",
    "airport_name": "Fort Franklin Airport",
    "name": "Hay River",
    "lat": "65.1994",
    "lon": "-123.431",
    "country": "Canada"
  },
  {
    "airport_code": "YWK",
    "airport_name": "Wabush Airport",
    "name": "Wabush",
    "lat": "52.9261",
    "lon": "-66.873",
    "country": "Canada"
  },
  {
    "airport_code": "YWL",
    "airport_name": "Williams Lake Airport",
    "name": "Williams Lake",
    "lat": "52.1866",
    "lon": "-122.068",
    "country": "Canada"
  },
  
  {
    "airport_code": "YWP",
    "airport_name": "Webequie Airport",
    "name": "Marathon",
    "lat": "52.978",
    "lon": "-87.3578",
    "country": "Canada"
  },
  
  {
    "airport_code": "YXC",
    "airport_name": "Cranbrook Airport",
    "name": "Cranbrook",
    "lat": "49.6148",
    "lon": "-115.786",
    "country": "Canada"
  },
  {
    "airport_code": "YXE",
    "airport_name": "John G Diefenbaker International Airport",
    "name": "Saskatoon",
    "lat": "52.1703",
    "lon": "-106.689",
    "country": "Canada"
  },
  {
    "airport_code": "YXH",
    "airport_name": "Medicine Hat Airport",
    "name": "Medicine Hat",
    "lat": "50.0219",
    "lon": "-110.722",
    "country": "Canada"
  },
  {
    "airport_code": "YXJ",
    "airport_name": "North Peace Airport",
    "name": "Fort St. John",
    "lat": "56.2464",
    "lon": "-120.737",
    "country": "Canada"
  },
  
  {
    "airport_code": "YXL",
    "airport_name": "Sioux Lookout Airport",
    "name": "Sioux Lookout",
    "lat": "50.1153",
    "lon": "-91.9056",
    "country": "Canada"
  },
  {
    "airport_code": "YXN",
    "airport_name": "Whale Cove Airport",
    "name": "Chesterfield Inlet",
    "lat": "62.2273",
    "lon": "-92.5948",
    "country": "Canada"
  },
  {
    "airport_code": "YXP",
    "airport_name": "Pangnirtung Airport",
    "name": "Iqaluit",
    "lat": "66.1349",
    "lon": "-65.7142",
    "country": "Canada"
  },
  {
    "airport_code": "YXS",
    "airport_name": "Prince George Airport",
    "name": "Prince George",
    "lat": "53.8805",
    "lon": "-122.676",
    "country": "Canada"
  },
  {
    "airport_code": "YXT",
    "airport_name": "Terrace Airport",
    "name": "Terrace",
    "lat": "54.4727",
    "lon": "-128.577",
    "country": "Canada"
  },
  {
    "airport_code": "YXU",
    "airport_name": "London International Airport",
    "name": "London",
    "lat": "43.0285",
    "lon": "-81.1497",
    "country": "Canada"
  },
  {
    "airport_code": "YXX",
    "airport_name": "Abbotsford International Airport",
    "name": "Abbotsford",
    "lat": "49.0221",
    "lon": "-122.382",
    "country": "Canada"
  },
  {
    "airport_code": "YXY",
    "airport_name": "Whitehorse International Airport",
    "name": "Whitehorse",
    "lat": "60.7141",
    "lon": "-135.076",
    "country": "Canada"
  },
  {
    "airport_code": "YYB",
    "airport_name": "North Bay Airport",
    "name": "North Bay",
    "lat": "46.3564",
    "lon": "-79.4285",
    "country": "Canada"
  },
  {
    "airport_code": "YYC",
    "airport_name": "Calgary International Airport",
    "name": "Calgary",
    "lat": "51.1343",
    "lon": "-114.007",
    "country": "Canada"
  },
  {
    "airport_code": "YYD",
    "airport_name": "Smithers Airport",
    "name": "Smithers",
    "lat": "54.8247",
    "lon": "-127.181",
    "country": "Canada"
  },
  {
    "airport_code": "YYE",
    "airport_name": "Fort Nelson Airport",
    "name": "Fort Nelson",
    "lat": "58.8429",
    "lon": "-122.579",
    "country": "Canada"
  },
  {
    "airport_code": "YYF",
    "airport_name": "Penticton Airport",
    "name": "Penticton",
    "lat": "49.4614",
    "lon": "-119.606",
    "country": "Canada"
  },
  {
    "airport_code": "YYG",
    "airport_name": "Charlottetown Airport",
    "name": "Charlottetown",
    "lat": "46.2833",
    "lon": "-63.1333",
    "country": "Canada"
  },
  {
    "airport_code": "YYH",
    "airport_name": "Taloyoak Airport",
    "name": "Cambridge Bay",
    "lat": "69.5466",
    "lon": "-93.5751",
    "country": "Canada"
  },
  {
    "airport_code": "YYJ",
    "airport_name": "Victoria International Airport",
    "name": "Sidney",
    "lat": "48.6402",
    "lon": "-123.43",
    "country": "Canada"
  },
  
  {
    "airport_code": "YYQ",
    "airport_name": "Churchill Airport",
    "name": "Nelson House",
    "lat": "58.7557",
    "lon": "-94.0678",
    "country": "Canada"
  },
  {
    "airport_code": "YYR",
    "airport_name": "Goose Bay Airport",
    "name": "Happy Valley-Goose Bay",
    "lat": "53.3263",
    "lon": "-60.4106",
    "country": "Canada"
  },
  {
    "airport_code": "YYT",
    "airport_name": "St John's International Airport",
    "name": "St. John's",
    "lat": "47.6124",
    "lon": "-52.7425",
    "country": "Canada"
  },
  {
    "airport_code": "YYU",
    "airport_name": "Kapuskasing Airport",
    "name": "Kapuskasing",
    "lat": "49.4098",
    "lon": "-82.4618",
    "country": "Canada"
  },
  {
    "airport_code": "YYY",
    "airport_name": "Mont Joli Airport",
    "name": "Mont-Joli",
    "lat": "48.6069",
    "lon": "-68.2111",
    "country": "Canada"
  },
  {
    "airport_code": "YYZ",
    "airport_name": "Toronto Lester B Pearson International Airport",
    "name": "Mississauga",
    "lat": "43.685",
    "lon": "-79.6142",
    "country": "Canada"
  },
  {
    "airport_code": "YZF",
    "airport_name": "Yellowknife Airport",
    "name": "Yellowknife",
    "lat": "62.4699",
    "lon": "-114.433",
    "country": "Canada"
  },
  {
    "airport_code": "YZG",
    "airport_name": "Salluit Airport",
    "name": "Chisasibi",
    "lat": "62.1853",
    "lon": "-75.6685",
    "country": "Canada"
  },
  {
    "airport_code": "YZP",
    "airport_name": "Sandspit Airport",
    "name": "Masset",
    "lat": "53.2528",
    "lon": "-131.814",
    "country": "Canada"
  },
  {
    "airport_code": "YZR",
    "airport_name": "Sarnia Airport",
    "name": "Sarnia",
    "lat": "42.9965",
    "lon": "-82.3078",
    "country": "Canada"
  },
  {
    "airport_code": "YZS",
    "airport_name": "Coral Harbour Airport",
    "name": "Chesterfield Inlet",
    "lat": "64.2",
    "lon": "-83.3667",
    "country": "Canada"
  },
  {
    "airport_code": "YZT",
    "airport_name": "Port Hardy Airport",
    "name": "Gibsons",
    "lat": "50.6843",
    "lon": "-127.377",
    "country": "Canada"
  },
  {
    "airport_code": "YZV",
    "airport_name": "Sept Iles Airport",
    "name": "Sept-Îles",
    "lat": "50.2169",
    "lon": "-66.2654",
    "country": "Canada"
  },
  {
    "airport_code": "YZZ",
    "airport_name": "Trail Airport",
    "name": "Trail",
    "lat": "37.0625",
    "lon": "-95.6771",
    "country": "Canada"
  },
  {
    "airport_code": "ZAC",
    "airport_name": "York Landing Airport",
    "name": "Nelson House",
    "lat": "56.0763",
    "lon": "-96.09",
    "country": "Canada"
  },
  {
    "airport_code": "ZAD",
    "airport_name": "Zadar Airport",
    "name": "Zadar",
    "lat": "44.0978",
    "lon": "15.3567",
    "country": "Croatia"
  },
  {
    "airport_code": "ZAG",
    "airport_name": "Zagreb Airport",
    "name": "Nagygoricza",
    "lat": "45.7402",
    "lon": "16.0704",
    "country": "Croatia"
  },
  {
    "airport_code": "ZAH",
    "airport_name": "Zahedan International Airport",
    "name": "Dowzdab",
    "lat": "29.4764",
    "lon": "60.9044",
    "country": "Iran"
  },
  {
    "airport_code": "ZAL",
    "airport_name": "Pichoy Airport",
    "name": "Pelchuquin",
    "lat": "-39.6458",
    "lon": "-73.0847",
    "country": "Chile"
  },
  {
    "airport_code": "ZAM",
    "airport_name": "Zamboanga International Airport",
    "name": "Zamboanga",
    "lat": "6.9244",
    "lon": "122.061",
    "country": "Philippines"
  },
  
  {
    "airport_code": "ZAT",
    "airport_name": "Zhaotong",
    "name": "Zhaotong",
    "lat": "27.3167",
    "lon": "103.8",
    "country": "China"
  },
  
  
  {
    "airport_code": "ZBF",
    "airport_name": "Bathurst Airport",
    "name": "Bathurst",
    "lat": "47.6325",
    "lon": "-65.74",
    "country": "Canada"
  },
  
  
  {
    "airport_code": "ZBR",
    "airport_name": "Chah Bahar Airport",
    "name": "Chabahar",
    "lat": "25.445",
    "lon": "60.3819",
    "country": "Iran"
  },
  
  {
    "airport_code": "ZCL",
    "airport_name": "Zacatecas Airport",
    "name": "Pánuco",
    "lat": "22.8972",
    "lon": "-102.685",
    "country": "Mexico"
  },
  {
    "airport_code": "ZCO",
    "airport_name": "Maquehue Airport",
    "name": "Padre Las Casas",
    "lat": "-38.7639",
    "lon": "-72.6378",
    "country": "Chile"
  },
  
  {
    "airport_code": "ZDN",
    "airport_name": "Kingsford Smith Airport",
    "name": "Sydney",
    "lat": "-33.9344",
    "lon": "151.168",
    "country": "Australia"
  },
  
  {
    "airport_code": "ZEE",
    "airport_name": "Kelsey Airport",
    "name": "Kelsey",
    "lat": "30.754",
    "lon": "-91.3415",
    "country": "Canada"
  },
  {
    "airport_code": "ZEI",
    "airport_name": "",
    "name": "Zei",
    "lat": "12.9794",
    "lon": "11.8559",
    "country": "Nigeria"
  },
  
  {
    "airport_code": "ZEL",
    "airport_name": "Bella Bella Airport",
    "name": "Masset",
    "lat": "52.152",
    "lon": "-128.155",
    "country": "Canada"
  },
  {
    "airport_code": "ZEM",
    "airport_name": "East Main Airport",
    "name": "Chisasibi",
    "lat": "52.2399",
    "lon": "-78.5077",
    "country": "Canada"
  },
  
  {
    "airport_code": "ZEU",
    "airport_name": "",
    "name": "Zeu",
    "lat": "2.51769",
    "lon": "30.7978",
    "country": "Uganda"
  },
  
  
  {
    "airport_code": "ZFM",
    "airport_name": "Fort Mcpherson Airport",
    "name": "Hay River",
    "lat": "67.4024",
    "lon": "-134.849",
    "country": "Canada"
  },
  {
    "airport_code": "ZFN",
    "airport_name": "Fort Norman Airport",
    "name": "Hay River",
    "lat": "64.9",
    "lon": "-125.583",
    "country": "Canada"
  },
  
  
  {
    "airport_code": "ZFZ",
    "airport_name": "New York",
    "name": "Buffalo",
    "lat": "40.7145",
    "lon": "-74.0071",
    "country": "United States"
  },
  
  
  
  {
    "airport_code": "ZGI",
    "airport_name": "Gods River Airport",
    "name": "Nelson House",
    "lat": "54.6768",
    "lon": "-94.1459",
    "country": "Canada"
  },
  {
    "airport_code": "ZGN",
    "airport_name": "Zhongshan Ferry Port",
    "name": "Zhongshan",
    "lat": "22.5167",
    "lon": "113.367",
    "country": "China"
  },
  
  {
    "airport_code": "ZGS",
    "airport_name": "Gethsemani Airport",
    "name": "Havre-St-Pierre",
    "lat": "50.3016",
    "lon": "-60.6776",
    "country": "Canada"
  },
  {
    "airport_code": "ZGU",
    "airport_name": "Gaua Airport",
    "name": "Gaua",
    "lat": "-14.25",
    "lon": "167.5",
    "country": "Vanuatu"
  },
  {
    "airport_code": "ZHA",
    "airport_name": "Zhanjiang Airport",
    "name": "Zhanjiang",
    "lat": "21.2151",
    "lon": "110.362",
    "country": "China"
  },
  
  
  {
    "airport_code": "ZIG",
    "airport_name": "Ziguinchor Airport",
    "name": "Ziguinchor",
    "lat": "12.5561",
    "lon": "-16.2758",
    "country": "Senegal"
  },
  {
    "airport_code": "ZIH",
    "airport_name": "Ixtapa Zihuatanejo International Airport",
    "name": "Petatlán",
    "lat": "17.6025",
    "lon": "-101.458",
    "country": "Mexico"
  },
  
  {
    "airport_code": "ZJT",
    "airport_name": "",
    "name": "Tanjung Pelepas",
    "lat": "1.58333",
    "lon": "110.483",
    "country": "Malaysia"
  },
  {
    "airport_code": "ZKE",
    "airport_name": "Kaschechewan Airport",
    "name": "Winisk",
    "lat": "52.3117",
    "lon": "-81.6078",
    "country": "Canada"
  },
  {
    "airport_code": "ZKG",
    "airport_name": "Kegaska Airport",
    "name": "Havre-St-Pierre",
    "lat": "50.1937",
    "lon": "-61.2817",
    "country": "Canada"
  },
  
  {
    "airport_code": "ZLO",
    "airport_name": "Playa de Oro International Airport",
    "name": "Manzanillo",
    "lat": "19.1478",
    "lon": "-104.56",
    "country": "Mexico"
  },
  
  
  
  
  
  {
    "airport_code": "ZML",
    "airport_name": "General Mitchell International Airport",
    "name": "Milwaukee",
    "lat": "42.9471",
    "lon": "-87.9051",
    "country": "United States"
  },
  {
    "airport_code": "ZMT",
    "airport_name": "Masset Airport",
    "name": "Masset",
    "lat": "54.012",
    "lon": "-132.134",
    "country": "Canada"
  },
  
  
  {
    "airport_code": "ZNA",
    "airport_name": "Nanaimo Harbour Airport",
    "name": "Nanaimo",
    "lat": "49.1617",
    "lon": "-123.893",
    "country": "Canada"
  },
  {
    "airport_code": "ZNB",
    "airport_name": "Sinop Airport",
    "name": "Santo Antônio do Içá",
    "lat": "-3.08333",
    "lon": "-67.9333",
    "country": "Brazil"
  },
  {
    "airport_code": "ZNE",
    "airport_name": "Newman Airport",
    "name": "Newman",
    "lat": "-23.4169",
    "lon": "119.803",
    "country": "Australia"
  },
  {
    "airport_code": "ZNV",
    "airport_name": "Santa Elena Airport",
    "name": "Santa Elena de Uairén",
    "lat": "4.6",
    "lon": "-61.1",
    "country": "Venezuela"
  },
  {
    "airport_code": "ZNZ",
    "airport_name": "Zanzibar Airport",
    "name": "Stone Town",
    "lat": "-6.2203",
    "lon": "39.2228",
    "country": "Tanzania"
  },
  {
    "airport_code": "ZOS",
    "airport_name": "Canal Bajo Carlos H Siebert Airport",
    "name": "Osorno",
    "lat": "-40.6072",
    "lon": "-73.0567",
    "country": "Chile"
  },
  {
    "airport_code": "ZPB",
    "airport_name": "Sachigo Lake Airport",
    "name": "Casummit Lake",
    "lat": "53.8648",
    "lon": "-92.1915",
    "country": "Canada"
  },
  {
    "airport_code": "ZQN",
    "airport_name": "Frankton Airport",
    "name": "Queenstown",
    "lat": "-45.0217",
    "lon": "168.737",
    "country": "New Zealand"
  },
  {
    "airport_code": "ZQW",
    "airport_name": "Rheinland-Pfalz",
    "name": "Zweibrucken",
    "lat": "49.9545",
    "lon": "7.31024",
    "country": "Germany"
  },
  
  
  {
    "airport_code": "ZRH",
    "airport_name": "Zurich International Airport",
    "name": "Kloten",
    "lat": "47.454",
    "lon": "8.56137",
    "country": "Switzerland"
  },
  {
    "airport_code": "ZRJ",
    "airport_name": "Round Lake Airport",
    "name": "Casummit Lake",
    "lat": "52.95",
    "lon": "-91.3167",
    "country": "Canada"
  },
  
  
  
  
  
  {
    "airport_code": "ZSA",
    "airport_name": "San Salvador Airport",
    "name": "Cockburn Town",
    "lat": "24.06",
    "lon": "-74.5331",
    "country": "Bahamas"
  },
  {
    "airport_code": "ZSE",
    "airport_name": "Réunion",
    "name": "St Pierre dela Reunion",
    "lat": "-20.8833",
    "lon": "55.5333",
    "country": "Reunion"
  },
  
  {
    "airport_code": "ZSJ",
    "airport_name": "Sandy Lake Airport",
    "name": "Casummit Lake",
    "lat": "53.0513",
    "lon": "-93.2491",
    "country": "Canada"
  },
  {
    "airport_code": "ZSN",
    "airport_name": "South Indian Lake Airport",
    "name": "South Indian Lake",
    "lat": "56.7819",
    "lon": "-98.9558",
    "country": "Canada"
  },
  {
    "airport_code": "ZTA",
    "airport_name": "",
    "name": "Tureira",
    "lat": "41.3",
    "lon": "-6.46667",
    "country": "French Polynesia"
  },
  {
    "airport_code": "ZTB",
    "airport_name": "Tete-a-la-Baleine Airport",
    "name": "Havre-St-Pierre",
    "lat": "50.6876",
    "lon": "-59.3545",
    "country": "Canada"
  },
  
  
  
  {
    "airport_code": "ZTH",
    "airport_name": "Zakinthos Airport",
    "name": "Zante",
    "lat": "37.7522",
    "lon": "20.8847",
    "country": "Greece"
  },
  {
    "airport_code": "ZTI",
    "airport_name": "Humen Port",
    "name": "Humen",
    "lat": "22.8267",
    "lon": "113.672",
    "country": "China"
  },
  
  {
    "airport_code": "ZTM",
    "airport_name": "Shamattawa Airport",
    "name": "Nelson House",
    "lat": "55.8667",
    "lon": "-92.0833",
    "country": "Canada"
  },
  
  
  {
    "airport_code": "ZTV",
    "airport_name": "Louisville International Airport",
    "name": "Louisville",
    "lat": "38.1865",
    "lon": "-85.7462",
    "country": "United States"
  },
  
  
  
  {
    "airport_code": "ZUH",
    "airport_name": "Zhuhai Airport",
    "name": "Zhuhai",
    "lat": "22.277",
    "lon": "113.557",
    "country": "China"
  },
  {
    "airport_code": "ZUM",
    "airport_name": "Churchill Falls Airport",
    "name": "Wabush",
    "lat": "53.5619",
    "lon": "-64.1072",
    "country": "Canada"
  },
  {
    "airport_code": "ZUN",
    "airport_name": "Black Rock Airport",
    "name": "Zuni",
    "lat": "35.0843",
    "lon": "-108.789",
    "country": "United States"
  },
  
  {
    "airport_code": "ZVK",
    "airport_name": "Savannakhet Airport",
    "name": "Savannakhet",
    "lat": "16.5536",
    "lon": "104.763",
    "country": "Laos"
  },
  
  
  
  
  
  
  {
    "airport_code": "ZWV",
    "airport_name": "Illinois",
    "name": "Glenview",
    "lat": "39.7393",
    "lon": "-89.5041",
    "country": "United States"
  },
  
  
  
  
  {
    "airport_code": "ZYK",
    "airport_name": "Shekou Port",
    "name": "Shekou",
    "lat": "30.7",
    "lon": "114.35",
    "country": "China"
  },
  {
    "airport_code": "ZYL",
    "airport_name": "Osmany Sylhet Airport",
    "name": "Sylhet",
    "lat": "24.9589",
    "lon": "91.8744",
    "country": "Bangladesh"
  },
  {
    "airport_code": "TNM",
    "airport_name": "Teniente R. Marsh Airport",
    "name": "Teniente R. Marsh",
    "lat": "-81.5",
    "lon": "0",
    "country": "Antarctica"
  }
];

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
    this.setState({...this.state, selectedPlace: event.target.innerText.toLowerCase()});
  }

  handleCreateTrip = (values, event) => {
    event.preventDefault();
    let departing = new Date(values.departing);
    let arriving = new Date(values.arriving);
    if (!(departing < arriving) || values.from === values.to) {
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
          <Form place="home" inputs={createTripFormInputs} onSubmit={this.handleCreateTrip} />
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