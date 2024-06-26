import { tripCards } from "../Contants";
import IntroBanner from "./IntroBanner";
import IntroHeader from "./IntroHeader";
import IntroSearch from "./IntroSearch";
import IntroReviews from "./IntroReviews";
import Footer from "../../components/Footer";
import { useFlightsCities, useHotelsCities } from "../../store";
import { FlightsService } from "../../services/flights";
import { HotelsServices } from "../../services/hotels";
import { useEffect } from "react";
import { notifyError } from "../../utils/notifications";

const IntroSection = () => {
  const { hotelsCities, setHotelsCities } = useHotelsCities();
  const { flightsCities, setFlightsCities } = useFlightsCities();
  const { getFlightCities } = FlightsService();
  const { getAppCities } = HotelsServices();
  useEffect(() => {
    if (hotelsCities.length === 0) {
      getAppCities()
        .then((hotelsRes) => {
          setHotelsCities(hotelsRes);
        })
        .catch((err) => {
          notifyError(err);
        });
    }
  }, []);

  useEffect(() => {
    if (flightsCities.length === 0) {
      getFlightCities()
        .then((flightsRes) => {
          setFlightsCities(flightsRes);
        })
        .catch((err) => {
          notifyError(err);
        });
    }
  }, []);
  return (
    <section className="w-full h-full p-0 lg:p-5">
      <div className="h-screen bg-intro bg-center bg-no-repeat bg-cover rounded-xl ">
        <IntroHeader />
        <div className="w-full h-auto text-center  flex flex-col items-center justify-center my-20 px-2 sm:p-8">
          <h3 className="text-5xl font-bold text-white">Helping Others</h3>
          <h2 className="text-white font-bold text-[2.5rem] sm:text-[5rem] mt-1">
            Live & Travel
          </h2>
          <h4 className="text-white font-semibold text-2xl sm:text-lg mt-4">
            Special offers to suit your plan
          </h4>
        </div>
        <IntroSearch />
        <section className="w-full h-auto mt-20 flex items-center justify-center flex-col p-8 ">
          <div className="flex items-center justify-between w-full">
            <div>
              <h3 className="text-3xl font-semibold text-black">
                Plan your perfect trip
              </h3>
              <p className="text-blackishGreen/75 font-base mt-4">
                Search Flights & Places Hire to our most popular destinations
              </p>
            </div>
            <button className="px-4 py-3 text-sm text-blackishGreen border border-mintGreen hover:bg-mintGreen transition-colors">
              See more places
            </button>
          </div>
          <section className="grid grid-cols-1 sm:grid-cols-3 mt-8 w-full gap-8">
            {tripCards.map(({ id, img, alt, title }) => (
              <div
                key={id}
                className="bg-white shadow-md flex items-center space-x-4 rounded-xl p-4"
              >
                <img src={img} alt={alt} />
                <div>
                  <h5 className="text-blackishGreen/70 text-base font-semibold">
                    {title}
                  </h5>
                  <div className="space-x-2 mt-2">
                    <span className="text-sm text-blackishGreen">Flights</span>
                    <span className="text-sm text-blackishGreen">• Hotels</span>
                    <span className="text-sm text-blackishGreen">
                      • Resorts
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </section>
          <IntroBanner />
          <IntroReviews />
        </section>
        <Footer />
      </div>
    </section>
  );
};

export default IntroSection;
