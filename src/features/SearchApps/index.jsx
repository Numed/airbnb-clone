import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsFillCupFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

import Search from "./Search";
import Filter from "./Filter";
import { appsCards } from "../Contants";
import { useRequestService } from "../../services";
import { notifyError } from "../../utils/notifications";
import Loader from "../../components/Loader";
import { cn } from "../../utils";

const SearchAppsContainer = () => {
  const { getAllApps } = useRequestService();
  const [apps, setApps] = useState(appsCards);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => getApps();
  }, []);

  const getApps = () => {
    setIsLoading(true);
    getAllApps().then(onSetApps).catch(onError);
  };

  const onSetApps = (data) => {
    setOffset(offset + 4);
    setApps(data.slice(0, offset + 4));
    setIsLoading(false);
  };

  const onError = (err) => {
    notifyError(err);
    setIsLoading(false);
  };

  return (
    <section className="w-full h-full">
      <Search />
      <div className="flex flex-col xl:flex-row items-start justify-between p-4 sm:px-12 xl:px-[6.5rem]">
        <Filter />
        <div className="flex flex-col items-start justify-start w-full xl:w-4/5 xl:ml-6">
          <div className="flex items-start justify-start flex-col sm:flex-row w-full bg-white space-y-6 sm:space-x-6 sm:space-y-0 rounded-xl">
            <button className="w-full sm:w-1/3 flex flex-col items-start justify-start text-base text-blackishGreen font-semibold mb-2 bg-white px-6 py-4 border-gray-300 border-b sm:border-r sm:border-b-0">
              Hotels
              <span className="text-sm text-blackishGreen/40">298 places</span>
            </button>
            <button className="w-full sm:w-1/3 flex flex-col items-start justify-start text-base text-blackishGreen font-semibold mb-2 bg-white px-6 py-4 border-gray-300 border-b sm:border-r sm:border-b-0">
              Motels
              <span className="text-sm text-blackishGreen/40">137 places</span>
            </button>
            <button className="w-full sm:w-1/3 flex flex-col items-start justify-start text-base text-blackishGreen font-semibold mb-2 bg-white px-6 py-4">
              Resorts
              <span className="text-sm text-blackishGreen/40">72 places</span>
            </button>
          </div>
          <div className="w-full flex items-center justify-between mt-6">
            <h4 className="text-sm text-blackishGreen font-semibold">
              Showing 4 of <span className="text-red-400">257 places</span>
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
            {apps.map(
              ({
                hotelId,
                photo,
                starRating,
                price,
                ratingText,
                location,
                name,
                alt,
              }) => (
                <div
                  key={hotelId}
                  className="px-4 py-6 bg-white w-full h-auto flex flex-col items-start justify-start rounded-xl mb-8"
                >
                  <div className="flex w-full items-start justify-center xl:justify-start flex-wrap xl:flex-nowrap xl:space-x-6">
                    <div>
                      <img
                        className="rounded-xl max-w-[14rem] max-h-[14rem] object-cover mb-4 xl:mb-0"
                        src={photo}
                        alt={alt}
                      />
                    </div>
                    <div className="flex items-start justify-start flex-col w-full">
                      <div className="flex items-start justify-start w-full h-full flex-wrap xl:flex-nowrap">
                        <div className="w-full flex items-start justify-start space-x-6">
                          <div>
                            <div className="w-full h-full">
                              <h3 className="text-xl font-bold text-blackishGreen mb-4 max-w-[19rem]">
                                {name}
                              </h3>
                              <p className="text-sm text-blackishGreen/50 mb-4 flex items-baseline justify-start">
                                <ImLocation2 /> {location}
                              </p>
                            </div>
                            <div className="flex items-end xl:items-start justify-start flex-col xl:flex-row">
                              <div className="flex items-center justify-center text-sm text-blackishGreen">
                                <AiFillStar className="text-red-300 w-4 h-4" />
                                <AiFillStar className="text-red-300 w-4 h-4" />
                                <AiFillStar className="text-red-300 w-4 h-4" />
                                <AiFillStar className="text-red-300 w-4 h-4" />
                                <AiFillStar className="text-red-300 w-4 h-4 mr-1" />
                                5 Starts Hotel
                              </div>
                              <div className="flex items-start justify-start text-blackishGreen ml-8">
                                <span className="font-semibold text-blackishGreen flex items-center justify-start">
                                  <BsFillCupFill className="mx-2" /> 20+
                                </span>
                                Aminities
                              </div>
                            </div>
                            <div className="my-4">
                              <span className="p-2 border border-mintGreen rounded-md text-center text-blackishGreen font-medium">
                                {starRating}
                              </span>
                              <span className="ml-2 text-xs text-blackishGreen font-bold">
                                {ratingText}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="my-4 xl:my-0">
                          <h4 className="text-xs text-blackishGreen/75">
                            started from
                          </h4>
                          <h3 className="text-2xl font-bold text-red-300">
                            {price}
                          </h3>
                        </div>
                      </div>
                      <div className="border-t border-t-blackishGreen/25 w-full pt-4 flex items-start justify-start">
                        <button className="p-4 border border-mintGreen rounded-md hover:bg-mintGreen transition-all">
                          <AiOutlineHeart />
                        </button>
                        <Link
                          className="flex items-center justify-center w-full h-full ml-4 bg-mintGreen text-sm rounded-sm font-semibold text-blackishGreen hover:text-white transition-colors py-4"
                          to={`/appartaments/${hotelId}`}
                        >
                          View Place
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
            onClick={() => getApps()}
            disabled={isLoading}
          >
            {isLoading ? <Loader /> : "Show more results"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchAppsContainer;
