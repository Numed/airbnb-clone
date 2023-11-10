import { useState } from "react";
import { IoBed, IoPencil } from "react-icons/io5";
import { RiEditBoxFill } from "react-icons/ri";
import { MdFlight } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { BsFillCupFill } from "react-icons/bs";

import ava from "../../img/profile/ava.png";
import { cn } from "../../utils";
import { useActiveUser } from "../../store";
import { appsCards, flightCards } from "../../features/Contants";

const ProfileContainer = () => {
  const [activeSection, setActiveSection] = useState("Account");
  const [historySection, setHistorySection] = useState("Flights");
  const { user } = useActiveUser();
  return (
    <section className="p-[6.5rem]">
      <div className="w-full h-[22rem] bg-profileBackground bg-center bg-no-repeat bg-cover rounded-xl"></div>
      <div className="flex flex-col items-center justify-center">
        <div className="-translate-y-24 relative">
          <img src={ava} alt="Avatar Profile" />
          <button className="bg-red-400 w-10 h-10 rounded-full flex items-center justify-center absolute top-[55%] right-[10%]">
            <IoPencil size="1.5rem" />
          </button>
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold mb-2 text-2xl text-blackishGreen">
              John Doe
            </h3>
            <h4 className="text-base text-blackishGreen/75">
              john.doe@gmail.com
            </h4>
          </div>
        </div>
        <div className="mt-8 w-full h-auto flex items-center justify-center">
          <button
            className={cn(
              activeSection === "Account" &&
                "underline decoration-4 underline-offset-8 decoration-mintGreen",
              "w-1/3 text-base font-semibold text-blackishGreen bg-white rounded-s-xl px-6 py-8"
            )}
            onClick={() => setActiveSection("Account")}
          >
            Account
          </button>
          <button
            className={cn(
              activeSection === "History" &&
                "underline decoration-4 underline-offset-8 decoration-mintGreen",
              "w-1/3 border-l border-gray-300 text-base font-semibold text-blackishGreen bg-white rounded-e-xl px-6 py-8"
            )}
            onClick={() => setActiveSection("History")}
          >
            History
          </button>
        </div>
        <div className="mt-10 w-full h-auto">
          {activeSection === "Account" ? (
            <>
              <h2 className="mb-4 font-bold text-3xl">Account</h2>
              <div className="bg-white shadow-lg rounded-2xl py-8 px-6 w-full space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="mb-2 text-blackishGreen/75">Name</h4>
                    <h3 className="text-xl text-blackishGreen font-semibold">
                      John Doe
                    </h3>
                  </div>
                  <button className="flex items-center justify-center p-4 border border-mintGreen hover:bg-mintGreen hover:text-white transition-all">
                    <RiEditBoxFill className="mr-1" /> Change
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="mb-2 text-blackishGreen/75">Email</h4>
                    <h3 className="text-xl text-blackishGreen font-semibold">
                      john.doe@gmail.com
                    </h3>
                  </div>
                  <button className="flex items-center justify-center p-4 border border-mintGreen hover:bg-mintGreen hover:text-white transition-all">
                    <RiEditBoxFill className="mr-1" />
                    Change
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="mb-2 text-blackishGreen/75">Password</h4>
                    <h3 className="text-xl text-blackishGreen font-semibold">
                      ********
                    </h3>
                  </div>
                  <button className="flex items-center justify-center p-4 border border-mintGreen hover:bg-mintGreen hover:text-white transition-all">
                    <RiEditBoxFill className="mr-1" /> Change
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="mb-2 text-blackishGreen/75">Phone number</h4>
                    <h3 className="text-xl text-blackishGreen font-semibold">
                      +1 000-000-0000
                    </h3>
                  </div>
                  <button className="flex items-center justify-center p-4 border border-mintGreen hover:bg-mintGreen hover:text-white transition-all">
                    <RiEditBoxFill className="mr-1" /> Change
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="mb-2 text-blackishGreen/75">Address</h4>
                    <h3 className="text-xl text-blackishGreen font-semibold">
                      St 32 main downtown, Los Angeles, California, USA
                    </h3>
                  </div>
                  <button className="flex items-center justify-center p-4 border border-mintGreen hover:bg-mintGreen hover:text-white transition-all">
                    <RiEditBoxFill className="mr-1" /> Change
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="mb-2 text-blackishGreen/75">
                      Date of birth
                    </h4>
                    <h3 className="text-xl text-blackishGreen font-semibold">
                      01-01-1992
                    </h3>
                  </div>
                  <button className="flex items-center justify-center p-4 border border-mintGreen hover:bg-mintGreen hover:text-white transition-all">
                    <RiEditBoxFill className="mr-1" /> Change
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div>
              {user ? (
                <>
                  <h4 className="text-4xl text-black font-bold">History</h4>
                  <div className="mt-8 w-full h-auto flex items-center justify-center">
                    <button
                      className={cn(
                        historySection === "Flights" &&
                          "underline decoration-4 underline-offset-8 decoration-mintGreen",
                        "w-1/2 text-base font-semibold text-blackishGreen bg-white rounded-s-xl px-6 py-8 flex items-center justify-center"
                      )}
                      onClick={() => setHistorySection("Flights")}
                    >
                      <MdFlight size="1.5em" className="mr-1" />
                      Flights
                    </button>
                    <button
                      className={cn(
                        historySection === "Stays" &&
                          "underline decoration-4 underline-offset-8 decoration-mintGreen",
                        "w-1/2 border-l border-gray-300 text-base font-semibold text-blackishGreen bg-white rounded-e-xl px-6 py-8 flex items-center justify-center"
                      )}
                      onClick={() => setHistorySection("Stays")}
                    >
                      <IoBed size="1.5em" className="mr-1" />
                      Stays
                    </button>
                  </div>
                  <div className="w-full h-full">
                    {historySection === "Flights" ? (
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
                                              <BsFillCupFill className="mx-2" />{" "}
                                              20+
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
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <h3 className="text-2xl text-gray-400 font-bold text-center w-full">
                  You don't have history yet
                </h3>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfileContainer;
