import { ImLocation2 } from "react-icons/im";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsFillCupFill } from "react-icons/bs";

import { Skeleton } from "../../components/Skeleton";
import { useIsLoading } from "../../store";
import { useFavorite } from "./useFavorite";

const FavoriteAppContainer = () => {
  const { isLoading } = useIsLoading();
  const { onFavoriteHandler, apps } = useFavorite();
  return (
    <>
      {apps?.length === 0 ? (
        <div className="w-full h-full">
          <h3 className="text-blackishGreen/50 text-xl">
            {isLoading ? (
              <Skeleton className="h-[14rem] w-[14rem]" />
            ) : (
              "No Apps added to favorites"
            )}
          </h3>
        </div>
      ) : (
        <>
          {apps?.map(({ id, photo, rating, location, title, alt }) => (
            <div
              key={id}
              className="px-4 py-6 bg-white w-full h-auto flex flex-col items-start justify-start rounded-xl mb-8"
            >
              <div className="flex w-full items-start justify-center sm:space-x-6 flex-wrap lg:no-wrap">
                <div>
                  <img
                    className="rounded-xl max-w-[14rem] max-h-[14rem] object-cover mb-4 xl:mb-0"
                    src={photo}
                    alt={alt}
                  />
                </div>
                <div className="flex items-start justify-start flex-col w-full mt-4">
                  <div className="flex items-start justify-start w-full h-full">
                    <div className="w-full flex items-start justify-start lg:space-x-6">
                      <div>
                        <div className="w-full h-full">
                          <h3 className="text-xl font-bold text-blackishGreen mb-4 max-w-[15rem] sm:max-w-[19rem]">
                            {title}
                          </h3>
                          <p className="text-sm text-blackishGreen/50 mb-4 flex items-baseline justify-start max-w-[15rem] sm:max-w-none">
                            <ImLocation2 className="hidden sm:block" />{" "}
                            {location}
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-end sm:items-start justify-start">
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
                        <div className="my-4 hidden sm:block">
                          <span className="p-2 border border-mintGreen rounded-md text-center text-blackishGreen font-medium">
                            {rating}
                          </span>
                        </div>
                        <div className="w-full pt-4 flex items-start justify-start">
                          <button
                            className="bg-mintGreen p-4 border border-mintGreen rounded-md hover:bg-mintGreen transition-all"
                            onClick={(e) =>
                              onFavoriteHandler(e.target, id, false)
                            }
                          >
                            <AiOutlineHeart />
                          </button>
                        </div>
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

export default FavoriteAppContainer;
