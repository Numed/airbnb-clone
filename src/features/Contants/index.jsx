import trip1 from "../../img/trips/trip-1.png";
import trip2 from "../../img/trips/trip-2.png";
import trip3 from "../../img/trips/trip-3.png";
import trip4 from "../../img/trips/trip-4.png";
import trip5 from "../../img/trips/trip-5.png";
import trip6 from "../../img/trips/trip-6.png";
import trip7 from "../../img/trips/trip-7.png";
import trip8 from "../../img/trips/trip-8.png";
import trip9 from "../../img/trips/trip-9.png";

import review1 from "../../img/reviews/review-1.png";
import review2 from "../../img/reviews/review-2.png";
import review3 from "../../img/reviews/review-3.png";

import flights1 from "../../img/searchFlights/flight1.png";
import flights2 from "../../img/searchFlights/flight2.png";
import flights3 from "../../img/searchFlights/flight3.png";
import flights4 from "../../img/searchFlights/flight4.png";

import apps1 from "../../img/searchApps/apps-1.png";
import apps2 from "../../img/searchApps/apps-2.png";
import apps3 from "../../img/searchApps/apps-3.png";
import apps4 from "../../img/searchApps/apps-4.png";

export const usersConstants = [
  {
    id: "1",
    username: "John Doe",
    email: "john-doe@gmail.com",
    password: "fdsafasd213412",
    role: "admin",
    cards: [
      { id: 1, number: "4111111111111535", valid: "12/25", type: "visa" },
      { id: 2, number: "5111111111111636", valid: "12/25", type: "mastercard" },
    ],
    orderRooms: [],
    orderFlights: [
      {
        userId: "1",
        flightId: "1",
        seat: "46B",
      },
      {
        userId: "1",
        flightId: "2",
        seat: "1A",
      },
    ],
  },
  {
    id: "2",
    username: "Volod'ka Kopach",
    email: "kirieshka@gmail.com",
    password: "fdsafasd213412",
    role: "user",
    cards: [
      { id: 1, number: "4111111111111535", valid: "12/25", type: "visa" },
      { id: 2, number: "5111111111111636", valid: "12/25", type: "mastercard" },
    ],
    orderRooms: [],
    orderFlights: [
      {
        userId: "1",
        flightId: "1",
        seat: "46B",
      },
      {
        userId: "1",
        flightId: "2",
        seat: "1A",
      },
    ],
  },
];

export const tripCards = [
  {
    id: 1,
    img: trip1,
    title: "Istanbul, Turkey",
    alt: "trip1",
  },
  {
    id: 2,
    img: trip2,
    title: "Malé, Maldives",
    alt: "trip2",
  },
  {
    id: 3,
    img: trip3,
    title: "London, UK",
    alt: "trip3",
  },
  {
    id: 4,
    img: trip4,
    title: "Sydney, Australia",
    alt: "trip4",
  },
  {
    id: 5,
    img: trip5,
    title: "Paris, France",
    alt: "trip5",
  },
  {
    id: 6,
    img: trip6,
    title: "Tokyo, Japan",
    alt: "trip6",
  },
  {
    id: 7,
    img: trip7,
    title: "Baku, Azerbaijan",
    alt: "trip7",
  },
  {
    id: 8,
    img: trip8,
    title: "New York, US",
    alt: "trip8",
  },
  {
    id: 9,
    img: trip9,
    title: "Dubai, UAE",
    alt: "trip9",
  },
];

export const reviewsCards = [
  {
    id: 1,
    title: "A real sense of community, nurtured",
    description:
      "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
    img: review1,
    alt: "Review card",
    rating: 5,
    author: "Olga",
    position: "Weave Studios – Kai Tak",
  },
  {
    id: 2,
    title: "The facilities are superb. Clean, slick, bright",
    description:
      "A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle",
    img: review2,
    alt: "Review card",
    rating: 5,
    author: "Thomas",
    position: "Weave Studios – Kai Tak",
  },
  {
    id: 3,
    title: "A real sense of community, nurtured",
    description:
      "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
    img: review3,
    alt: "Review card",
    rating: 5,
    author: "Eliot",
    position: "Weave Studios – Kai Tak",
  },
];

export const flightCards = [
  {
    id: 1,
    img: flights1,
    rating: "4.5",
    ratingText: "Very Good",
    price: "104",
    alt: "Emirates Airlines",
  },
  {
    id: 2,
    img: flights2,
    rating: "4.5",
    ratingText: "Very Good",
    price: "120",
    alt: "Flydubai Airlines",
  },
  {
    id: 3,
    img: flights3,
    rating: "4.5",
    ratingText: "Very Good",
    price: "130",
    alt: "Qatar Airways",
  },
  {
    id: 4,
    img: flights4,
    rating: "4.5",
    ratingText: "Very Good",
    price: "$97",
    alt: "Etihad Airways",
  },
];

export const appsCards = [
  {
    id: 1,
    img: apps1,
    rating: "4.5",
    ratingText: "Very Good",
    title: "CVK Park Bosphorus Hotel Istanbul",
    location: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437y",
    price: "104",
    alt: "Emirates Airlines",
  },
  {
    id: 2,
    img: apps2,
    rating: "4.5",
    ratingText: "Very Good",
    title: "Eresin Hotels Sultanahmet - Boutique Class",
    location: "Kucukayasofya No. 40 Sultanahmet, Istanbul 34022",
    price: "120",
    alt: "Flydubai Airlines",
  },
  {
    id: 3,
    img: apps3,
    rating: "4.5",
    ratingText: "Very Good",
    title: "Eresin Hotels Sultanahmet - Boutique Class",
    location: "Kucukayasofya No. 40 Sultanahmet, Istanbul 34022",
    price: "130",
    alt: "Qatar Airways",
  },
  {
    id: 4,
    img: apps4,
    rating: "4.5",
    ratingText: "Very Good",
    title: "Eresin Hotels Sultanahmet - Boutique Class",
    location: "Kucukayasofya No. 40 Sultanahmet, Istanbul 34022",
    price: "97",
    alt: "Etihad Airways",
  },
];
