import { useState } from "react";
import { IoAirplane, IoWifi, IoTimeOutline } from "react-icons/io5";
import {
  MdOutlineFastfood,
  MdOutlineAirlineSeatReclineNormal,
} from "react-icons/md";
import { BsFillBuildingsFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

import flightPartner from "../../img/searchFlights/flight1.png";
import { cn } from "../../utils";

const DetailsContent = ({ detail }) => {
  const [isFlight, setIsFlight] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState("full-price");
  return (
    <main className="flex items-center justify-center flex-col w-full h-full px-[5rem] mt-12">
      <div className="flex items-center justify-between">
        <div className="h-full space-y-10 w-[50rem]">
          <section className="bg-white py-8 px-6 rounded-xl space-y-6 w-full">
            <div className="flex items-center justify-between">
              <h3 className="text-blackishGreen text-2xl font-bold w-[30rem]">
                Superior room - 1 double bed or 2 twin beds
              </h3>
              <h4 className="text-red-400 text-sm font-bold">
                <span className="text-red-400 text-3xl font-bold">$240</span>
                /night
              </h4>
            </div>
            <div>
              {isFlight ? (
                <>
                  <section className="mt-10 w-full h-full">
                    <div className="flex items-center justify-center">
                      <div className="w-full h-full space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center justify-start bg-white border border-mintGreen rounded-md px-8 py-6">
                            <img
                              className="w-16 h-11"
                              src={flightPartner}
                              alt="Emirates Airline"
                            />
                            <div className="ml-6">
                              <h4 className="text-blackishGreen font-semibold text-2xl">
                                Emirates
                              </h4>
                              <h5 className="mt-2 text-blackishGreen/6 font-medium text-sm">
                                Airbus A320
                              </h5>
                            </div>
                          </div>
                          <div className="flex items-center justify-start space-x-6 divide-x-2 divide-gray-300">
                            <IoAirplane className="w-8 h-8 pl-2" />
                            <IoWifi className="w-8 h-8 pl-2" />
                            <IoTimeOutline className="w-8 h-8 pl-2" />
                            <MdOutlineFastfood className="w-8 h-8 pl-2" />
                            <MdOutlineAirlineSeatReclineNormal className="w-8 h-8 pl-2" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between space-x-12 mt-10">
                          <div className="flex items-center justify-center">
                            <h3 className="text-2xl text-blackishGreen font-semibold">
                              12:00 pm
                            </h3>
                            <h4 className="text-base font-medium text-blackishGreen/60 ml-4">
                              Newark(EWR)
                            </h4>
                          </div>
                          <div className="flex items-center justify-center">
                            <span className="text-blackishGreen font-bold mr-6">
                              —
                            </span>
                            <IoAirplane className="w-12 h-12" />
                            <span className="text-blackishGreen font-bold ml-6">
                              —
                            </span>
                          </div>
                          <div className="flex items-center justify-center">
                            <h3 className="text-2xl text-blackishGreen font-semibold">
                              12:00 pm
                            </h3>
                            <h4 className="text-base font-medium text-blackishGreen/60 ml-4">
                              Newark(EWR)
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </>
              ) : (
                <section className="mt-10 w-full h-full">
                  <div className="flex items-center justify-center">
                    <div className="w-full h-full space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start bg-white border border-mintGreen rounded-md px-8 py-6 w-full">
                          <img
                            className="w-16 h-11"
                            src={flightPartner}
                            alt="Emirates Airline"
                          />
                          <div className="ml-6">
                            <h4 className="text-blackishGreen font-semibold text-2xl">
                              CVK Park Bosphorus Hotel Istanbul
                            </h4>
                            <h5 className="mt-2 text-blackishGreen/6 font-medium text-sm flex items-center justify-start">
                              <ImLocation2 className="mr-2" /> Gümüssuyu Mah.
                              Inönü Cad. No:8, Istanbul 34437
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between space-x-12 mt-10">
                        <div className="flex flex-col items-start justify-start">
                          <h3 className="text-2xl text-blackishGreen font-semibold">
                            Thursday, Dec 8
                          </h3>
                          <h4 className="text-base font-medium text-blackishGreen/60">
                            Check in
                          </h4>
                        </div>
                        <div className="flex items-center justify-center">
                          <span className="text-blackishGreen font-bold mr-6">
                            —
                          </span>
                          <BsFillBuildingsFill className="w-12 h-12" />
                          <span className="text-blackishGreen font-bold ml-6">
                            —
                          </span>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <h3 className="text-2xl text-blackishGreen font-semibold">
                            Friday, Dec 9
                          </h3>
                          <h4 className="text-base font-medium text-blackishGreen/60">
                            Check out
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>
          </section>
          <section className="p-4 rounded-xl bg-white">
            <div className="space-y-4">
              <label
                className={cn(
                  selectedPayment === "full-price" ? "bg-mintGreen" : "",
                  "flex items-center justify-between p-4 rounded-xl"
                )}
              >
                <div className="flex items-start justify-start flex-col">
                  <h3 className="text-base font-bold text-blackishGreen mb-2">
                    Pay in full
                  </h3>
                  <h4 className="text-sm text-blackishGreen max-w-[40rem]">
                    Pay the total and you are all set
                  </h4>
                </div>
                <input
                  className="accent-white form-radio form-radio-checked border-white outline-white"
                  type="radio"
                  name="payment"
                  value="full-price"
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  defaultChecked
                />
              </label>
              <label
                className={cn(
                  selectedPayment === "part-price" ? "bg-mintGreen" : "",
                  "flex items-center justify-between p-4 rounded-xl"
                )}
              >
                <div className="flex items-start justify-start flex-col">
                  <h3 className="text-base font-bold text-blackishGreen mb-2">
                    Pay part now, part later
                  </h3>
                  <h4 className="text-sm text-blackishGreen max-w-[40rem]">
                    Pay $207.43 now, and the rest ($207.43) will be
                    automatically charged to the same payment method on Nov 14,
                    2022. No extra fees.
                  </h4>
                </div>
                <input
                  className="accent-white form-radio form-radio-checked border-white outline-white"
                  type="radio"
                  name="payment"
                  value="part-price"
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
              </label>
            </div>
          </section>
        </div>
        <aside className="ml-10 bg-white rounded-xl p-6">
          <div className="flex items-start justify-start">
            <img
              className="w-[7.5rem] h-[7.5rem] mr-6"
              src={flightPartner}
              alt="Flight Partner"
            />
            <div className="flex flex-col items-start justify-start">
              <h4 className="text-blackishGreen/75 text-base font-medium">
                CVK Park Bosphorus...
              </h4>
              <h3 className="max-w-[16rem] font-semibold text-xl text-blackishGreen mt-1">
                Superior room - 1 double bed or 2 twin beds
              </h3>
              <div className="my-4">
                <span className="p-2 border border-mintGreen rounded-md text-center text-blackishGreen font-medium">
                  4.5
                </span>
                <span className="ml-2 text-xs text-blackishGreen font-bold">
                  Very good
                </span>
              </div>
            </div>
          </div>
          <div className="border-y border-y-gray-400 p-4">
            <h3 className="text-base text-blackishGreen font-medium">
              Your booking is protected by{" "}
              <span className="font-bold">golobe</span>
            </h3>
          </div>
          <div className="p-4">
            <h4 className="text-blackishGreen text-base font-semibold mb-4">
              Price details
            </h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h5 className="text-blackishGreen text-base font-medium">
                  Base Fare
                </h5>
                <span className="text-blackishGreen text-base font-semibold">
                  $240
                </span>
              </div>
              <div className="flex items-center justify-between">
                <h5 className="text-blackishGreen text-base font-medium">
                  Discount
                </h5>
                <span className="text-blackishGreen text-base font-semibold">
                  $0
                </span>
              </div>
              <div className="flex items-center justify-between">
                <h5 className="text-blackishGreen text-base font-medium">
                  Taxes
                </h5>
                <span className="text-blackishGreen text-base font-semibold">
                  $20
                </span>
              </div>
              <div className="flex items-center justify-between">
                <h5 className="text-blackishGreen text-base font-medium">
                  Service Fee
                </h5>
                <span className="text-blackishGreen text-base font-semibold">
                  $5
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-10 pt-4 border-t border-t-gray-400">
            <h5 className="text-blackishGreen text-base font-medium">Total</h5>
            <span className="text-blackishGreen text-base font-semibold">
              $265
            </span>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default DetailsContent;
