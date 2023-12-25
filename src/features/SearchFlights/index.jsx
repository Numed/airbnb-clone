import { useState, useEffect } from "react";

import Search from "./Search";
import Filter from "./Filter";
import Loader from "../../components/Loader";
import { useRequestService } from "../../services";
import { notifyError } from "../../utils/notifications";
import { cn } from "../../utils";
import { useFetchingData, useFlights, useIsLoading } from "../../store";
import { onSortFlights } from "../../utils/sort";
import FlightItem from "./FlightItem";

const SearchFlightsContainer = () => {
  const [flightsCount, setFlightsCount] = useState(0);
  const [offset, setOffset] = useState(0);
  const { isLoading, setIsLoading } = useIsLoading();
  const { setIsFetchingData } = useFetchingData();
  const { getAllFlights, filterFlights } = useRequestService();
  const flights = useFlights((state) => state.flights);
  const setFlights = useFlights((state) => state.setFlights);

  useEffect(() => {
    getFlights();
  }, []);

  const getFlights = () => {
    setIsLoading(true);
    setIsFetchingData(true);
    getAllFlights().then(onSetFlights).catch(onError);
  };

  const onFilter = (value) => {
    const queryString = new URLSearchParams(value).toString();
    filterFlights(queryString).then(onFiltered).catch(onError);
  };

  const onFiltered = (data) => {
    setFlights(data.slice(0, offset + 4));
    setIsLoading(false);
    setIsFetchingData(false);
  };

  const onSetFlights = (data) => {
    setFlightsCount(data.length);
    setOffset((prevOffset) => prevOffset + 4);
    setFlights(data.slice(0, offset + 4));
    setIsLoading(false);
    setIsFetchingData(false);
  };

  const onError = (err) => {
    notifyError(err);
    setIsLoading(false);
    setIsFetchingData(false);
  };

  return (
    <section className="w-full h-full">
      <Search />
      <div className="flex flex-col xl:flex-row items-start justify-between p-4 sm:px-12 xl:px-[6.5rem]">
        <Filter />
        <div className="flex flex-col items-start justify-start w-full xl:w-4/5 xl:ml-6">
          <div className="flex items-start justify-start flex-col sm:flex-row w-full bg-white space-y-6 sm:space-x-6 sm:space-y-0 rounded-xl">
            <button
              className="w-full sm:w-1/3 flex flex-col items-start justify-start text-base text-blackishGreen font-semibold mb-2 bg-white px-6 py-4 border-gray-300 border-b sm:border-r sm:border-b-0"
              onClick={(e) => onFilter(e.target.value)}
            >
              Cheapest
              <span className="text-sm text-blackishGreen/40">
                $99 | 2h 18m
              </span>
            </button>
            <button
              className="w-full sm:w-1/3 flex flex-col items-start justify-start text-base text-blackishGreen font-semibold mb-2 bg-white px-6 py-4 border-gray-300 border-b sm:border-r sm:border-b-0"
              onClick={(e) => onFilter(e.target.value)}
            >
              Best
              <span className="text-sm text-blackishGreen/40">
                $120 | 1h 30m
              </span>
            </button>
            <button
              className="w-full sm:w-1/3 flex flex-col items-start justify-start text-base text-blackishGreen font-semibold mb-2 bg-white px-6 py-4"
              onClick={(e) => onFilter(e.target.value)}
            >
              Quickest
              <span className="text-sm text-blackishGreen/40">
                $99 | 1h 18m
              </span>
            </button>
          </div>
          <div className="w-full flex items-center justify-between mt-6">
            <h4 className="text-sm text-blackishGreen font-semibold">
              Showing 4 of{" "}
              <span className="text-red-400">{flightsCount} places</span>
            </h4>
            <h5 className="text-sm text-blackishGreen">
              Sort by
              <select
                className="text-sm text-blackishGreen font-bold"
                onChange={(e) =>
                  onSortFlights(flights, e.target.value, setFlights)
                }
              >
                <option value="recommended">Recommended</option>
                <option value="newest">Newest</option>
                <option value="rating">Rating</option>
              </select>
            </h5>
          </div>
          <FlightItem flights={flights} />
          <button
            className={cn(
              "text-white bg-blackishGreen hover:bg-blackishGreen/90 text-center w-full py-4 transition-colors",
              offset === 12 && "hidden"
            )}
            onClick={() => getFlights()}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className="after:w-8 after:h-8" />
            ) : (
              "Show more results"
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchFlightsContainer;
