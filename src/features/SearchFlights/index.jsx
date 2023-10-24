import Search from "./Search";
import Filter from "./Filter";
import { flightCards } from "../Contants";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

const SearchFlightsContainer = () => {
  return (
    <section className="w-full h-full">
      <Search />
      <div className="flex items-start justify-between px-[6.5rem]">
        <Filter />
        <div className="flex flex-col items-start justify-start w-4/5 ml-6">
          <div className="flex items-start justify-start w-full bg-white space-x-6 rounded-xl">
            <button className="flex flex-col items-start justify-start text-base text-blackishGreen font-semibold mb-2 bg-white px-6 py-4 border-gray-300 border-r">
              Cheapest
              <span className="text-sm text-blackishGreen/40">
                $99 | 2h 18m
              </span>
            </button>
            <button className="flex flex-col items-start justify-start text-base text-blackishGreen font-semibold mb-2 bg-white px-6 py-4 border-gray-300 border-r">
              Best
              <span className="text-sm text-blackishGreen/40">
                $120 | 1h 30m
              </span>
            </button>
            <button className="flex flex-col items-start justify-start text-base text-blackishGreen font-semibold mb-2 bg-white px-6 py-4">
              Quickest
              <span className="text-sm text-blackishGreen/40">
                $99 | 1h 18m
              </span>
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
            {flightCards.map(({ id, img, rating, price, ratingText, alt }) => (
              <div
                key={id}
                className="px-4 py-6 bg-white w-full h-auto flex flex-col items-start justify-start rounded-xl mb-8"
              >
                <div className="flex items-start justify-start space-x-6">
                  <div>
                    <img src={img} alt={alt} />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full h-full">
                    <div className="flex items-start justify-start space-x-6">
                      <div>
                        <div className="flex items-start justify-start space-x-6">
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
                              <input className="mt-1 mr-2" type="checkbox" />
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
                              <input className="mt-1 mr-2" type="checkbox" />
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
            ))}
          </div>
          <button className="text-white bg-blackishGreen hover:bg-blackishGreen/90 text-center w-full py-4 transition-colors">
            Show more results
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchFlightsContainer;
