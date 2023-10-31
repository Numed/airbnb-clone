import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchAppsContainer from "../features/SearchApps";

const SearchApps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <SearchAppsContainer />
      <Footer />
    </>
  );
};

export default SearchApps;
