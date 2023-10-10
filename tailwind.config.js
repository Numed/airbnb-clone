/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        mintGreen: "#8DD3BB",
        blackishGreen: "#112211",
        colorText: "#1C1B1F",
        grey: "#79747E",
      },
      backgroundImage: {
        intro: "url('img/intro/intro.png')",
        flightIntro: "url('img/intro/intro-1.png')",
        bannerFlights: "url('img/banner/banner-flight.png')",
        bannerHotels: "url('img/banner/banner-hotels.png')",
        tripFlightMelbour: "url('img/flight-trips/trip1.png')",
        tripFlightParis: "url('img/flight-trips/trip2.png')",
        tripFlightLondon: "url('img/flight-trips/trip3.png')",
        tripFlightColumbia: "url('img/flight-trips/trip4.png')",
      },
    },
  },
  plugins: [],
};
