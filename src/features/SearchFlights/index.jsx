import { useState, useEffect } from "react";
import Search from "./Search";
import Filter from "./Filter";
import Loader from "../../components/Loader";
import { FlightsService } from "../../services/flights";
import { notifyError } from "../../utils/notifications";
import { cn } from "../../utils";
import {
  useFetchingData,
  useFlights,
  useIsLoading,
  useCountFlights,
} from "../../store";
import { onSortFlights } from "../../utils/sort";
import FlightItem from "./FlightItem";
import { Skeleton } from "../../components/Skeleton";

const SearchFlightsContainer = () => {
  const [offset, setOffset] = useState(0);
  const { isLoading, setIsLoading } = useIsLoading();
  const { setIsFetchingData } = useFetchingData();
  const { getAllFlights, filterFlights } = FlightsService();
  const flights = useFlights((state) => state.flights);
  const setFlights = useFlights((state) => state.setFlights);
  const flightsCount = useCountFlights((state) => state.countFlights);
  const setCountFlights = useCountFlights((state) => state.setCountFlights);

  useEffect(() => {
    if (!flights.length) {
      getFlights();
    }
  }, [flights.length]); // Залежність лише від довжини flights

  const getFlights = () => {
    setIsLoading(true);
    setIsFetchingData(true);
    getAllFlights().then(onSetFlights).catch(onError);
  };

  const onSetFlights = (data) => {
    setCountFlights(data.length);
    setOffset((prevOffset) => prevOffset + 4);
    setFlights(data.slice(0, offset + 4));
    setIsLoading(false);
    setIsFetchingData(false);
  };

  let previousTarget = null;

  const onFilter = (target, value) => {
    const data = {
      sort: value,
    };

    const classes = ["border-b-2", "border-b-mintGreen"];

    if (previousTarget && previousTarget !== target) {
      classes.forEach((cls) => previousTarget.classList.remove(cls));
    }

    classes.forEach((cls) => target.classList.add(cls));

    previousTarget = target;

    const queryString = new URLSearchParams(data).toString();
    setIsLoading(true);
    setIsFetchingData(true);
    filterFlights(queryString).then(onFiltered).catch(onError);
  };

  const onFiltered = (data) => {
    setFlights(data.slice(0, offset + 4));
    setIsLoading(false);
    setIsFetchingData(false);
  };

  const onError = (err) => {
    notifyError(err);
    setIsLoading(false);
    setIsFetchingData(false);
  };

  const onRefetch = () => {
    getFlights();
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
              onClick={(e) =>
                onFilter(e.target, e.target.textContent.split("$")[0])
              }
            >
              Cheapest
              <span className="text-sm text-blackishGreen/40 pointer-events-none">
                {flights?.length > 0 ? (
                  `$ ${flights?.map((flight) => flight.price).sort()[0]} | ${
                    flights?.map((flight) => flight.duration).sort()[0]
                  }`
                ) : (
                  <Skeleton className="w-20 h-4 bg-gray-300" />
                )}
              </span>
            </button>
            <button
              className="w-full sm:w-1/3 flex flex-col items-start justify-start text-base text-blackishGreen font-semibold mb-2 bg-white px-6 py-4 border-gray-300 border-b sm:border-r sm:border-b-0"
              onClick={(e) =>
                onFilter(e.target, e.target.textContent.split("$")[0])
              }
            >
              Best
              <span className="text-sm text-blackishGreen/40 pointer-events-none">
                {flights?.length > 0 ? (
                  `$ ${flights?.map((flight) => flight.price).sort()[0]} | ${
                    flights?.map((flight) => flight.duration).sort()[0]
                  }`
                ) : (
                  <Skeleton className="w-20 h-4 bg-gray-300" />
                )}
              </span>
            </button>
            <button
              className="w-full sm:w-1/3 flex flex-col items-start justify-start text-base text-blackishGreen font-semibold mb-2 bg-white px-6 py-4"
              onClick={(e) =>
                onFilter(e.target, e.target.textContent.split("$")[0])
              }
            >
              Quickest
              <span className="text-sm text-blackishGreen/40 pointer-events-none">
                {flights?.length > 0 ? (
                  `$ ${flights?.map((flight) => flight.price).sort()[0]} | ${
                    flights?.map((flight) => flight.duration).sort()[0]
                  }`
                ) : (
                  <Skeleton className="w-20 h-4 bg-gray-300" />
                )}
              </span>
            </button>
          </div>
          <div className="w-full flex items-center justify-between mt-6">
            <h4 className="text-sm text-blackishGreen font-semibold">
              Showing of{" "}
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
          {isLoading ? (
            <div className="flex items-start justify-start w-full my-4">
              <Skeleton className="h-[14rem] w-[14rem] bg-gray-300" />
              <Skeleton className="h-[14rem] w-[44rem] bg-gray-300 ml-4" />
            </div>
          ) : (
            <FlightItem flights={flights} />
          )}
          <button
            className={cn(
              "text-white bg-blackishGreen hover:bg-blackishGreen/90 text-center w-full py-4 transition-colors",
              offset === 12 && "hidden"
            )}
            onClick={onRefetch}
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
