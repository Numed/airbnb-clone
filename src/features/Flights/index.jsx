import FlightHeader from "./Header";
import FlightsSearch from "./Search";
import globalMap from "../../img/map.png";
import { Link } from "react-router-dom";

const FlightsContainer = () => {
  return (
    <section className="w-full h-full">
      <FlightHeader />
      <FlightsSearch />
      <section className="w-full h-full mt-4">
        <div className="flex items-center justify-between w-full px-[6.5rem]">
          <div>
            <h3 className="text-3xl font-semibold text-black">
              Let's go places together
            </h3>
            <p className="text-blackishGreen/75 font-base mt-4">
              Discover the latest offers and news and start planning your next
              trip with us.
            </p>
          </div>
          <button className="px-4 py-3 text-sm text-blackishGreen border border-mintGreen hover:bg-mintGreen transition-colors">
            See more places
          </button>
        </div>
        <img
          className="object-cover mt-6 w-full"
          src={globalMap}
          alt="Global map"
        />
        <div className="w-full h-full mt-20">
          <div className="flex items-center justify-between w-full px-[6.5rem]">
            <div>
              <h3 className="text-3xl font-semibold text-black">
                Let's go places together
              </h3>
              <p className="text-blackishGreen/75 font-base mt-4">
                Discover the latest offers and news and start planning your next
                trip with us.
              </p>
            </div>
            <button className="px-4 py-3 text-sm text-blackishGreen border border-mintGreen hover:bg-mintGreen transition-colors">
              See all
            </button>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center mt-10">
          <div className="w-[18.5rem] h-[21.5rem] p-6 flex flex-col items-center justify-end bg-tripFlightMelbour">
            <div>
              <div className="flex w-full items-end justify-between space-x-6">
                <div>
                  <h3 className="text-white text-2xl font-semibold">
                    Melbourne
                  </h3>
                  <h4 className="text-white text-sm">An amazing journey</h4>
                </div>
                <h5 className="text-white text-2xl font-semibold">$ 700</h5>
              </div>
            </div>
            <Link
              to="/search-flights"
              className="p-4 w-full flex items-center justify-center bg-mintGreen/70 mt-4 hover:bg-mintGreen"
            >
              Book Flight
            </Link>
          </div>
          <div className="w-[18.5rem] h-[21.5rem] p-6 flex flex-col items-center justify-end bg-tripFlightParis">
            <div>
              <div className="flex w-full items-end justify-between space-x-6">
                <div>
                  <h3 className="text-white text-2xl font-semibold">Paris</h3>
                  <h4 className="text-white text-sm">An amazing journey</h4>
                </div>
                <h5 className="text-white text-2xl font-semibold">$ 600</h5>
              </div>
            </div>
            <Link
              to="/search-flights"
              className="p-4 w-full flex items-center justify-center bg-mintGreen/70 mt-4 hover:bg-mintGreen"
            >
              Book Flight
            </Link>
          </div>
          <div className="w-[18.5rem] h-[21.5rem] p-6 flex flex-col items-center justify-end bg-tripFlightLondon">
            <div>
              <div className="flex w-full items-end justify-between space-x-6">
                <div>
                  <h3 className="text-white text-2xl font-semibold">Londod</h3>
                  <h4 className="text-white text-sm">An amazing journey</h4>
                </div>
                <h5 className="text-white text-2xl font-semibold">$ 350</h5>
              </div>
            </div>
            <Link
              to="/search-flights"
              className="p-4 w-full flex items-center justify-center bg-mintGreen/70 mt-4 hover:bg-mintGreen"
            >
              Book Flight
            </Link>
          </div>
          <div className="w-[18.5rem] h-[21.5rem] p-6 flex flex-col items-center justify-end bg-tripFlightColumbia">
            <div>
              <div className="flex w-full items-end justify-between space-x-6">
                <div>
                  <h3 className="text-white text-2xl font-semibold">
                    Columbia
                  </h3>
                  <h4 className="text-white text-sm">An amazing journey</h4>
                </div>
                <h5 className="text-white text-2xl font-semibold">$ 700</h5>
              </div>
              <Link
                to="/search-flights"
                className="p-4 w-full flex items-center justify-center bg-mintGreen/70 mt-4 hover:bg-mintGreen"
              >
                Book Flight
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FlightsContainer;
