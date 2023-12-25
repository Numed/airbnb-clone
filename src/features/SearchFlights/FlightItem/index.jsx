import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

import { Skeleton } from "../../../components/Skeleton";
import { useRequestService } from "../../../services";
import { useActiveUser, useFetchingData, useIsLoading } from "../../../store";
import { notifyError } from "../../../utils/notifications";

const FlightItem = ({ flights }) => {
  const navigate = useNavigate();
  const { user } = useActiveUser();
  const { addFavoriteFlight, deleteFavorite } = useRequestService();
  const { isFetchingData, setIsFetchingData } = useFetchingData();
  const { setIsLoading } = useIsLoading();

  const onFavoriteHandler = (e, flightId) => {
    if (!user) {
      notifyError("You must be logged in to add to favorites");
      return;
    }
    const formatedData = {
      flightId: flightId,
      id: user.id,
    };

    if (e.classList.contains("bg-mintGreen")) {
      return deleteFavorite(formatedData)
        .then(e.classList.remove("bg-mintGreen"))
        .catch(onError);
    }
    addFavoriteFlight(formatedData)
      .then(e.classList.add("bg-mintGreen"))
      .catch(onError);
  };

  const goToFlight = (slug, id) => {
    navigate(`/flights/${slug}`, { state: { id } });
  };

  const onError = (err) => {
    notifyError(err);
    setIsLoading(false);
    setIsFetchingData(false);
  };
  return (
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
          arrivalTime,
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
                              {departureTime?.slice(11, 16)} -{" "}
                              {arrivalTime?.slice(11, 16)}
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
                  <button
                    className="flex items-center justify-center w-full h-full ml-4 bg-mintGreen text-sm rounded-sm font-semibold text-blackishGreen hover:text-white transition-colors py-4"
                    onClick={() => goToFlight(slug, id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default FlightItem;
