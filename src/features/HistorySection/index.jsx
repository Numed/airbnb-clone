import { MdFlight } from "react-icons/md";
import { IoBed } from "react-icons/io5";
import { useEffect, useState } from "react";
import { cn } from "../../utils";
import { useActiveUser } from "../../store";
import { UserServices } from "../../services/user";

const HistorySection = () => {
  const [historySection, setHistorySection] = useState("Flights");
  const { user, setUser } = useActiveUser();
  const { getUserOrders } = UserServices();

useEffect(() => {
  if (user?.flightOrders?.length > 0) return;
  getUserOrders().then((data) => setUser({ ...user, ...data }));
}, []);

useEffect(() => {
  if (user?.hotelOrders?.length > 0) return;
  getUserOrders().then((data) => setUser({ ...user, ...data }));
}, []);

  return (
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
              <div className="mt-6 w-full h-full grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {user?.flightOrders?.length > 0 ? (
                  user?.flightOrders?.map(
                    ({ id, partnerLogo, name, price, from, to }, i) => (
                      <div
                        key={i}
                        className="px-4 py-6 bg-white w-full h-auto flex flex-col items-center justify-center rounded-xl mb-8"
                      >
                        <div className="flex items-start justify-between flex-col w-full">
                          <div>
                            <img
                              className="w-full h-full mr-8 rounded-xl"
                              src={partnerLogo}
                              alt={name}
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start w-full h-full">
                            <div className="flex items-start justify-between space-x-6 w-full m-0 mt-3">
                              <div className="flex items-center justify-center">
                                <div className="flex items-start justify-start flex-col">
                                  <div className="flex items-center justify-center">
                                    <span className="p-2 border border-mintGreen rounded-md text-center text-blackishGreen font-medium">
                                      ${price}
                                    </span>
                                    <span className="ml-5 text-xs text-blackishGreen font-bold">
                                      {from + " - " + to}
                                    </span>
                                  </div>
                                  <div className="flex flex-col items-start justify-start space-y-3 pb-3 mt-4">
                                    <label className="flex  items-start justify-start">
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )
                ) : (
                  <h3 className="text-2xl text-gray-400 font-bold text-center w-full">
                    You don't have history yet
                  </h3>
                )}
              </div>
            ) : (
              <div className="mt-6 w-full h-full grid grid-cols-1 gap-5 sm:grid-cols-2">
                {user?.hotelOrders?.length > 0 ? (
                  user?.hotelOrders?.map(({ id, name, photo, price }) => (
                    <div
                      key={id}
                      className="px-4 py-6 bg-white w-full h-auto flex flex-col items-start justify-start rounded-xl mb-8"
                    >
                      <div className="flex w-full items-start justify-center sm:space-x-6 flex-wrap lg:no-wrap">
                        <div>
                          <img
                            className="w-full h-full mr-8 rounded-xl"
                            src={photo}
                            alt={name}
                          />
                        </div>
                        <div className="flex items-start justify-start flex-col w-full mt-4">
                          <div className="flex items-start justify-start w-full h-full">
                            <div className="w-full flex items-start justify-start lg:space-x-6">
                              <div>
                                <span className="p-2 border border-mintGreen rounded-md text-center text-blackishGreen font-medium">
                                  ${price}
                                </span>
                                <span className="ml-5 text-lg text-blackishGreen font-bold">
                                  {name}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <h3 className="text-2xl text-gray-400 font-bold text-center w-full">
                    You don't have history yet
                  </h3>
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
  );
};

export default HistorySection;
