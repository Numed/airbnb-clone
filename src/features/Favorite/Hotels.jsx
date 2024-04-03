import { AiOutlineHeart } from "react-icons/ai";

import { Skeleton } from "../../components/Skeleton";
import { useIsLoading } from "../../store";
import { useFavorite } from "./useFavorite";

const FavoriteHotelsApp = () => {
  const { isLoading } = useIsLoading();
  const { onFavoriteHandler, flights } = useFavorite();
  return (
    <>
      {flights.length === 0 ? (
        <div className="w-full h-full">
          <h3 className="text-blackishGreen/50 text-xl">
            {isLoading ? (
              <Skeleton className="h-[14rem] w-[14rem]" />
            ) : (
              "No Flights added to favorites"
            )}
          </h3>
        </div>
      ) : (
        <>
          {flights.map(({ id, airlineLogo, rating, alt }) => (
            <div
              key={id}
              className="px-4 py-6 bg-white w-full h-auto flex flex-col items-center justify-center rounded-xl mb-8"
            >
              <div className="flex items-start justify-between flex-col w-full">
                <div>
                  <img
                    className="w-full h-full mr-8 rounded-xl"
                    src={airlineLogo}
                    alt={alt}
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-full h-full">
                  <div className="flex items-start justify-between space-x-6 w-full m-0 mt-3">
                    <div className="flex items-center justify-center flex-col xl:flex-row">
                      <div className="flex items-start justify-start flex-col">
                        <div className="flex items-center justify-center">
                          <span className="p-2 border border-mintGreen rounded-md text-center text-blackishGreen font-medium">
                            {rating}
                          </span>
                        </div>
                        <div className="flex flex-col items-start justify-start space-y-3 pb-3 mt-4">
                          <label className="flex  items-start justify-start flex-col space-y-4 xl:flex-row xl:space-y-0">
                            <div className="flex flex-col items-baseline justify-center">
                              <h4 className="text-base text-blackishGreen font-bold">
                                12:00pm - 01:28pm
                              </h4>
                              <h3 className="text-base text-blackishGreen/25 font-bold">
                                Emirates
                              </h3>
                            </div>
                            <span className="mx-10 text-sm text-blackishGreen/80 font-semibold">
                              non stop
                            </span>
                            <div className="flex flex-col items-baseline justify-center">
                              <h4 className="m-0 lg:mx-10 text-base text-blackishGreen/80 font-semibold">
                                2h 28m
                              </h4>
                              <h3 className="m-0 lg:mx-10 text-sm text-blackishGreen/40">
                                EWR-BNA
                              </h3>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="w-full pt-4 flex items-start justify-start">
                        <button
                          className="bg-mintGreen p-4 border border-mintGreen rounded-md hover:bg-mintGreen transition-all"
                          onClick={(e) => onFavoriteHandler(e.target, id, true)}
                        >
                          <AiOutlineHeart />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default FavoriteHotelsApp;
