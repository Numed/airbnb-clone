import { useNavigate } from "react-router-dom";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsFillCupFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

import { Skeleton } from "../../../components/Skeleton";
import { useActiveUser, useFetchingData } from "../../../store";
import { useRequestService } from "../../../services";
import { notifyError, onError } from "../../../utils/notifications";

const AppItem = ({ apps }) => {
  const navigate = useNavigate();
  const { user } = useActiveUser();
  const { addFavoriteHotel, deleteFavoriteHotel } = useRequestService();
  const { isFetchingData } = useFetchingData();

  const onFavoriteHandler = (e, hotelId) => {
    if (!user) {
      notifyError("You must be logged in to add to favorites");
      return;
    }

    const formatedData = {
      hotelId: hotelId,
      userId: user.id,
    };

    if (e.classList.contains("bg-mintGreen")) {
      return deleteFavoriteHotel(formatedData.userId, formatedData.hotelId)
        .then(e.classList.remove("bg-mintGreen"))
        .catch(onError);
    }
    addFavoriteHotel(formatedData)
      .then(e.classList.add("bg-mintGreen"))
      .catch(onError);
  };

  const goToApp = (slug, id) => {
    navigate(`/appartaments/${slug}`, { state: { id } });
  };

  return (
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
              <div className="w-1/3 h-full flex justify-center items-center">
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
                    <div className="w-full h-full">
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
                          <AiFillStar className="text-red-300 w-4 h-4 mr-1" />5
                          Starts Hotel
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
                        <span className="ml-2 font-semibold">Rating</span>
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
  );
};

export default AppItem;
