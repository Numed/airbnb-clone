import { memo, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchFlightsContainer from "../features/SearchFlights";

const SearchFlights = memo(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <SearchFlightsContainer />
      <Footer />
    </>
  );
});

export default SearchFlights;
