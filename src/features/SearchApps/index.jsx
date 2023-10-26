import Search from "./Search";
import Filter from "./Filter";
import { appsCards } from "../Contants";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsFillCupFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

const SearchAppsContainer = () => {
  return (
    <section className="w-full h-full">
      <Search />
      <div className="flex items-start justify-between px-[6.5rem]">
        <Filter />
        <div className="flex flex-col items-start justify-start w-4/5 ml-6">
          <div className="flex items-start justify-start w-full bg-white space-x-6 rounded-xl">
            <button className="flex flex-col items-start justify-start text-base text-blackishGreen font-semibold mb-2 bg-white px-6 py-4 border-gray-300 border-r">
              Hotels
              <span className="text-sm text-blackishGreen/40">298 places</span>
            </button>
            <button className="flex flex-col items-start justify-start text-base text-blackishGreen font-semibold mb-2 bg-white px-6 py-4 border-gray-300 border-r">
              Motels
              <span className="text-sm text-blackishGreen/40">137 places</span>
            </button>
            <button className="flex flex-col items-start justify-start text-base text-blackishGreen font-semibold mb-2 bg-white px-6 py-4">
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
                      <img src={img} alt={alt} />
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
          <button className="text-white bg-blackishGreen hover:bg-blackishGreen/90 text-center w-full py-4 transition-colors">
            Show more results
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchAppsContainer;
