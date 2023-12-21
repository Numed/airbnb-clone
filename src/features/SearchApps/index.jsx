import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsFillCupFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

import Search from "./Search";
import Filter from "./Filter";
import { useRequestService } from "../../services";
import { notifyError } from "../../utils/notifications";
import Loader from "../../components/Loader";
import { cn } from "../../utils";
import { Skeleton } from "../../components/Skeleton";
import { useActiveUser, useApps } from "../../store";
import { onSortApps } from "../../utils/sort";

const SearchAppsContainer = () => {
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [appsCounter, setAppsCounter] = useState(0);
  const { getAllApps, addFavoriteApps, deleteFavorite } = useRequestService();
  const { user } = useActiveUser();
  const { apps, setApps } = useApps();
  const navigate = useNavigate();

  useEffect(() => {
    getApps();
  }, []);

  const onFavoriteHandler = (e, hotelId) => {
    const formatedData = {
      hotelId: hotelId,
      id: user.id,
    };

    if (e.classList.contains("bg-mintGreen")) {
      return deleteFavorite(formatedData)
        .then(e.classList.remove("bg-mintGreen"))
        .catch(onError);
    }
    addFavoriteApps(formatedData)
      .then(e.classList.add("bg-mintGreen"))
      .catch(onError);
  };

  const getApps = () => {
    setIsLoading(true);
    setIsFetchingData(true);
    getAllApps().then(onSetApps).catch(onError);
  };

  const onSetApps = (data) => {
    setAppsCounter(data.length);
    setOffset(offset + 4);
    setApps(data.slice(0, offset + 4));
    setIsLoading(false);
    setIsFetchingData(false);
  };

  const onError = (err) => {
    setIsLoading(false);
    setIsFetchingData(false);
    return notifyError(err);
  };



  const goToApp = (slug, id) => {
    navigate(`/appartaments/${slug}`, { state: { id } });
  };

  return (
    <section className="w-full h-full">
      <Search />
      <div className="flex flex-col xl:flex-row items-start justify-between p-4 sm:px-12 xl:px-[6.5rem]">
        <Filter />
        <div className="flex flex-col items-start justify-start w-full xl:w-4/5 xl:ml-6">
          <div className="w-full flex items-center justify-between mt-6">
            <h4 className="text-sm text-blackishGreen font-semibold">
              Showing 4 of{" "}
              <span className="text-red-400">{appsCounter} places</span>
            </h4>
            <h5 className="text-sm text-blackishGreen">
              Sort by
              <select
                className="text-sm text-blackishGreen font-bold"
                onChange={(e) => onSortApps(apps, e.target.value, setApps)}
              >
                <option value="recommended">Recommended</option>
                <option value="newest">Newest</option>
                <option value="rating">Rating</option>
              </select>
            </h5>
          </div>
          <div className="mt-6 w-full h-full">
            {apps.map(
              ({
                id,
                photo,
                rating,
                price,
                location,
                name,
                alt,
                slug,
                advantages,
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
                          src={photo}
                          alt={alt}
                        />
                      )}
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
                                  <BsFillCupFill className="mx-2" />
                                  {advantages?.length > 20
                                    ? "20+"
                                    : advantages?.length}{" "}
                                  Aminities
                                </span>
                              </div>
                            </div>
                            <div className="my-4">
                              <span className="p-2 border border-mintGreen rounded-md text-center text-blackishGreen font-medium">
                                {rating}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="my-4 xl:my-0">
                          <h4 className="text-xs text-blackishGreen/75">
                            started from
                          </h4>
                          <h3 className="text-2xl font-bold text-red-300">
                            ${price}/night
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
                        <button
                          className="flex items-center justify-center w-full h-full ml-4 bg-mintGreen text-sm rounded-sm font-semibold text-blackishGreen hover:text-white transition-colors py-4"
                          onClick={() => goToApp(slug, id)}
                        >
                          View Place
                        </button>
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

export default SearchAppsContainer;
