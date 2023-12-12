import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search";
import Filter from "./Filter";
import { flightCards } from "../Contants";
import { useRequestService } from "../../services";
import { notifyError } from "../../utils/notifications";
import Loader from "../../components/Loader";
import { cn } from "../../utils";
import { Skeleton } from "../../components/Skeleton";
import { useActiveUser } from "../../store";

const SearchFlightsContainer = () => {
  const [flights, setFlights] = useState(flightCards);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [flightsCount, setFlightsCount] = useState(0);
  const { getAllFlights, addFavorite, deleteFavorite } = useRequestService();
  const { user } = useActiveUser();

  useEffect(() => {
    return () => getFlights();
  }, []);

  const getFlights = () => {
    setIsLoading(true);
    setIsFetchingData(true);
    getAllFlights().then(onSetFlights).catch(onError);
  };

  const onFavoriteHandler = (e, flightId) => {
    const formatedData = {
      flightId: flightId,
      id: user.id,
    };

    if (e.classList.contains("bg-mintGreen")) {
      return deleteFavorite(formatedData)
        .then(e.classList.remove("bg-mintGreen"))
        .catch(onError);
    }
    addFavorite(formatedData)
      .then(e.classList.add("bg-mintGreen"))
      .catch(onError);
  };

  const onSetFlights = (data) => {
    setFlightsCount(data.length);
    setOffset(offset + 4);
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
            <button className="w-full sm:w-1/3 flex flex-col items-start justify-start text-base text-blackishGreen font-semibold mb-2 bg-white px-6 py-4 border-gray-300 border-b sm:border-r sm:border-b-0">
              Cheapest
              <span className="text-sm text-blackishGreen/40">
                $99 | 2h 18m
              </span>
            </button>
            <button className="w-full sm:w-1/3 flex flex-col items-start justify-start text-base text-blackishGreen font-semibold mb-2 bg-white px-6 py-4 border-gray-300 border-b sm:border-r sm:border-b-0">
              Best
              <span className="text-sm text-blackishGreen/40">
                $120 | 1h 30m
              </span>
            </button>
            <button className="w-full sm:w-1/3 flex flex-col items-start justify-start text-base text-blackishGreen font-semibold mb-2 bg-white px-6 py-4">
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
              <select className="text-sm text-blackishGreen font-bold">
                <option value="recommended">Recommended</option>
                <option value="newest">Newest</option>
                <option value="rating">Rating</option>
              </select>
            </h5>
          </div>
          <div className="mt-6 w-full h-full">
            {flights.map(
              ({
                id,
                airlineLogo,
                rating,
                price,
                alt,
                duration,
                abbreviation,
                departureTime,
                slug,
                fromArrive,
              }) => (
                <div
                  key={id}
                  className="px-4 py-6 bg-white w-full h-auto flex flex-col items-start justify-start rounded-xl mb-8"
                >
                  <div className="flex w-full items-start justify-center xl:justify-start flex-wrap xl:flex-nowrap xl:space-x-6">
                    <div>
                      {isFetchingData ? (
                        <Skeleton className="h-[14rem] w-[14rem]" />
                      ) : (
                        <img
                          className="rounded-xl max-w-[14rem] max-h-[14rem] object-cover mb-4 xl:mb-0"
                          src={airlineLogo}
                          alt={alt}
                        />
                      )}
                    </div>
                    <div className="flex flex-col items-start justify-start w-full h-full">
                      <div className="flex items-start justify-start flex-wrap xl:flex-nowrap space-x-6 w-full sm:justify-between">
                        <div>
                          <div className="flex items-start justify-start flex-wrap xl:flex-nowrap space-x-6">
                            <div>
                              <span className="p-2 border border-mintGreen rounded-md text-center text-blackishGreen font-medium">
                                {rating}
                              </span>
                            </div>
                            <div className="flex flex-col items-start justify-start space-y-3 pb-3">
                              <label className="mt-4 sl:mt-0 flex items-start justify-start">
                                <div>
                                  <h4 className="text-base text-blackishGreen font-bold">
                                    {departureTime} - {duration}
                                  </h4>
                                  <h3 className="text-base text-blackishGreen/25 font-bold">
                                    {fromArrive}
                                  </h3>
                                </div>
                                <span className="mx-4 xl:mx-10 text-sm text-blackishGreen/80 font-semibold">
                                  non stop
                                </span>
                                <div>
                                  <h4 className="mx-4 xl:mx-10 text-base text-blackishGreen/80 font-semibold">
                                    {duration}
                                  </h4>
                                  <h3 className="mx-4 xl:mx-10 text-sm text-blackishGreen/40">
                                    {abbreviation}
                                  </h3>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs text-blackishGreen/75">
                            started from
                          </h4>
                          <h3 className="text-2xl font-bold text-red-300">
                            {price} $
                          </h3>
                        </div>
                      </div>
                      <div className="border-t border-t-blackishGreen/25 w-full pt-4 flex items-start justify-start">
                        <button
                          className="p-4 border border-mintGreen rounded-md hover:bg-mintGreen transition-all"
                          onClick={(e) => onFavoriteHandler(e.target, id)}
                        >
                          <AiOutlineHeart />
                        </button>
                        <Link
                          className="flex items-center justify-center w-full h-full ml-4 bg-mintGreen text-sm rounded-sm font-semibold text-blackishGreen hover:text-white transition-colors py-4"
                          to={`/flights/${slug}`}
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
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
