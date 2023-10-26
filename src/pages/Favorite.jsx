import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsFillCupFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { cn } from "../utils";
import { appsCards, flightCards } from "../features/Contants";

const Favorite = () => {
  const [active, setActive] = useState("Flights");
  return (
    <>
      <Header />
      <section className="mt-12 px-[6.5rem] w-full h-full flex flex-col items-center justify-center">
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
                2 marked
              </span>
            </button>
            <button
              className={cn(
                active === "Places" && "border-b-4 border-b-mintGreen",
                "bg-white py-4 px-5 text-blackishGreen text-base font-semibold flex flex-col items-start justify-start w-1/2"
              )}
              onClick={() => setActive("Places")}
            >
              Places
              <span className="mt-2 text-blackishGreen/40 text-sm">
                3 marked
              </span>
            </button>
          </div>
        </div>
        <div className="w-full h-full">
          {active === "Flights" ? (
            <div className="mt-6 w-full h-full flex flex-col justify-center items-center">
              {flightCards.map(
                ({ id, img, rating, price, ratingText, alt }) => (
                  <div
                    key={id}
                    className="px-4 py-6 bg-white w-full h-auto flex flex-col items-center justify-center rounded-xl mb-8"
                  >
                    <div className="flex items-start justify-start space-x-6 w-full">
                      <div>
                        <img
                          className="w-full h-full scale-[1.1] mr-8"
                          src={img}
                          alt={alt}
                        />
                      </div>
                      <div className="ml-10 flex flex-col items-start justify-start w-full h-full">
                        <div className="flex items-start justify-between space-x-6 w-full">
                          <div>
                            <div className="flex items-start justify-start space-x-6 ">
                              <div>
                                <span className="p-2 border border-mintGreen rounded-md text-center text-blackishGreen font-medium">
                                  {rating}
                                </span>
                                <span className="ml-5 text-xs text-blackishGreen font-bold">
                                  {ratingText}
                                </span>
                              </div>
                              <div className="flex flex-col items-start justify-start space-y-3 pb-3">
                                <label className="flex  items-start justify-start">
                                  <input
                                    className="mt-1 mr-2"
                                    type="checkbox"
                                  />
                                  <div>
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
                                  <div>
                                    <h4 className="mx-10 text-base text-blackishGreen/80 font-semibold">
                                      2h 28m
                                    </h4>
                                    <h3 className="mx-10 text-sm text-blackishGreen/40">
                                      EWR-BNA
                                    </h3>
                                  </div>
                                </label>
                                <label className="flex  items-start justify-start">
                                  <input
                                    className="mt-1 mr-2"
                                    type="checkbox"
                                  />
                                  <div>
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
                                  <div>
                                    <h4 className="mx-10 text-base text-blackishGreen/80 font-semibold">
                                      2h 28m
                                    </h4>
                                    <h3 className="mx-10 text-sm text-blackishGreen/40">
                                      EWR-BNA
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
                            to={`/flights/${id}`}
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
          ) : (
            <div className="mt-6 w-full h-full">
              {appsCards.map(
                ({
                  id,
                  img,
                  rating,
                  price,
                  ratingText,
                  location,
                  title,
                  alt,
                }) => (
                  <div
                    key={id}
                    className="px-4 py-6 bg-white w-full h-auto flex flex-col items-start justify-start rounded-xl mb-8"
                  >
                    <div className="flex w-full items-start justify-start space-x-6">
                      <div>
                        <img
                          className="w-full h-full scale-[1.1] mr-8"
                          src={img}
                          alt={alt}
                        />
                      </div>
                      <div className="flex items-start justify-start flex-col w-full">
                        <div className="flex items-start justify-start w-full h-full">
                          <div className="w-full flex items-start justify-start space-x-6">
                            <div>
                              <div className="w-full h-full">
                                <h3 className="text-xl font-bold text-blackishGreen mb-4 max-w-[19rem]">
                                  {title}
                                </h3>
                                <p className="text-sm text-blackishGreen/50 mb-4 flex items-baseline justify-start">
                                  <ImLocation2 /> {location}
                                </p>
                              </div>
                              <div className="flex items-start justify-start">
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
                                  {rating}
                                </span>
                                <span className="ml-2 text-xs text-blackishGreen font-bold">
                                  {ratingText}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
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
                            to={`/appartaments/${id}`}
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
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Favorite;
