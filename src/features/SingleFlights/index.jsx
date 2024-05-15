import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PiTimerFill } from "react-icons/pi";

import FlightDetails from "../../components/FlightDetails";
import SingleFlightHeader from "./Header";
import { FlightsService } from "../../services/flights";
import { notifyError } from "../../utils/notifications";
import { useFlights } from "../../store";

const SingleFlightsContainer = () => {
  let location = useLocation();
  const id = location.state.id;
  const { getFlightById } = FlightsService();
  const [flight, setFlight] = useState({});
  const flights = useFlights((state) => state.flights);

  useEffect(() => {
    getFlightById(id)
      .then((res) => setFlight(res))
      .catch((err) => notifyError(err));
  }, []);

  return (
    <main className="flex items-center justify-center flex-col w-full h-full px-12 lg:px-[6.5rem]">
      <section className="w-full h-full">
        <SingleFlightHeader flight={flight} />
        <img
          className="w-full h-1/2 rounded-xl object-cover"
          src={flight?.photo}
          alt={flight?.alt}
        />
        <div className="bg-mintGreen p-4 rounded-md mt-10">
          <h3 className="text-xl sm:text-2xl text-blackishGreen font-bold">
            Emirates Airlines Policies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 space-y-2 items-center justify-start mt-4">
            <div className="flex items-center justify-start">
              <PiTimerFill className="mr-4 w-6 h-6" />
              <p className="text-blackishGreen/75 text-base font-medium">
                Pre-flight cleaning, installation of cabin HEPA filters.
              </p>
            </div>
            <div className="flex items-center justify-start">
              <PiTimerFill className="mr-4 w-6 h-6" />
              <p className="text-blackishGreen/75 text-base font-medium">
                Pre-flight cleaning, installation of cabin HEPA filters.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FlightDetails flight={flight} />
    </main>
  );
};

export default SingleFlightsContainer;
