import { useState } from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsFillCupFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { cn } from "../utils";
import { useActiveUser } from "../store";
import { notifyError } from "../utils/notifications";
import { useRequestService } from "../services";

const Favorite = () => {
  const [flights, setFlights] = useState([]);
  const [apps, setApps] = useState([]);
  const [active, setActive] = useState("Flights");
  const { user } = useActiveUser();
  const { deleteFavoriteHotel, deleteFavoriteFlight } = useRequestService();
  const { favoritesHotels, favoritesFlights } = user;

  if (user?.favoritesHotels?.length > 0 || user?.favoritesFlights?.length > 0) {
    setFlights(favoritesHotels);
    setApps(favoritesFlights);
  }

  const onFavoriteHandler = (e, id, isFlight) => {
    const formatedData = {
      userId: user.id,
    };

    if (isFlight) {
      formatedData.flightId = id;
      return deleteFavoriteFlight(formatedData.userId, formatedData.flightId)
        .then(e.classList.remove("bg-mintGreen"))
        .catch(onError);
    } else {
      formatedData.hotelId = id;
      return deleteFavoriteHotel(formatedData.userId, formatedData.hotelId)
        .then(e.classList.remove("bg-mintGreen"))
        .catch(onError);
    }
  };

  const onError = (err) => {
    return notifyError(err);
  };

  return (
    <>
      <Header />
      <section className="mt-12 px-8 xl:px-[6.5rem] w-full h-full flex flex-col items-center justify-center">
        <div className="w-full h-full">
          <h3 className="text-black font-bold text-4xl">Favorite</h3>
          <div className="mt-6 w-full h-full flex items-start justify-start">
            <button
              className={cn(
                active === "Flights" && "border-b-4 border-b-mintGreen",
                "bg-white py-4 px-5 text-blackishGreen text-base font-semibold flex flex-col items-start justify-start w-1/2 border-r border-r-gray-300"
              )}
              onClick={() => setActive("Flights")}
            >
              Flights
              <span className="mt-2 text-blackishGreen/40 text-sm">
                {favoritesFlights?.length > 0 ? favoritesFlights?.length : 0}{" "}
                marked
              </span>
            </button>
            <button
              className={cn(
                active === "Places" && "border-b-4 border-b-mintGreen",
                "bg-white py-4 px-5 text-blackishGreen text-base font-semibold flex flex-col items-start justify-start w-1/2"
              )}
              onClick={() => setActive("Places")}
            >
              Appartmets
              <span className="mt-2 text-blackishGreen/40 text-sm">
                {favoritesHotels?.length > 0 ? favoritesHotels?.length : 0}{" "}
                marked
              </span>
            </button>
          </div>
        </div>
        <div className="w-full h-full">
          {active === "Flights" ? (
            <div className="mt-6 w-full h-full grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {flights.length === 0 ? (
                <div className="w-full h-full">
                  <h3 className="text-blackishGreen/50 text-xl">
                    No Flights added to favorites
                  </h3>
                </div>
              ) : (
                <>
                  {flights.map(({ flightId, img, rating, alt }) => (
                    <div
                      key={flightId}
                      className="px-4 py-6 bg-white w-full h-auto flex flex-col items-center justify-center rounded-xl mb-8"
                    >
                      <div className="flex items-start justify-between flex-col w-full">
                        <div>
                          <img
                            className="w-full h-full mr-8 rounded-xl"
                            src={img}
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
                                  onClick={(e) =>
                                    onFavoriteHandler(e.target, flightId)
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
                  ))}
                </>
              )}
            </div>
          ) : (
            <div className="mt-6 w-full h-full grid grid-cols-1 gap-5 sm:grid-cols-2">
              {apps.length === 0 ? (
                <div className="w-full h-full">
                  <h3 className="text-blackishGreen/50 text-xl">
                    No Apartments added to favorites
                  </h3>
                </div>
              ) : (
                <>
                  {apps.map(
                    ({ hotelId, img, rating, location, title, alt }) => (
                      <div
                        key={hotelId}
                        className="px-4 py-6 bg-white w-full h-auto flex flex-col items-start justify-start rounded-xl mb-8"
                      >
                        <div className="flex w-full items-start justify-center sm:space-x-6 flex-wrap lg:no-wrap">
                          <div>
                            <img
                              className="w-full h-full mr-8 rounded-xl"
                              src={img}
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
                                        onFavoriteHandler(e.target, hotelId)
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
                    )
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Favorite;
