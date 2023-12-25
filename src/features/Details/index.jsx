import { useEffect, useState } from "react";
import { IoAirplane, IoWifi, IoTimeOutline } from "react-icons/io5";
import {
  MdOutlineFastfood,
  MdOutlineAirlineSeatReclineNormal,
} from "react-icons/md";
import { BsFillBuildingsFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";

import { cn } from "../../utils";
import { useActiveUser, useOpenModal } from "../../store";
import { ModalSuccess } from "../../components/Modal";
import { useRequestService } from "../../services";
import { notifyError } from "../../utils/notifications";

const DetailsContent = () => {
  const [detailsInfo, setDetailsInfo] = useState();
  const [selectedPayment, setSelectedPayment] = useState("full-price");
  const { user } = useActiveUser();
  const { isOpenModal, setOpenedModal } = useOpenModal();
  const { getFlightById, getAppsByID } = useRequestService();

  let location = useLocation();
  let { id, type } = location.state;

  useEffect(() => {
    if (type === "flights") {
      getFlightById(id)
        .then((res) => setDetailsInfo(res))
        .catch((err) => notifyError(err));
    } else {
      getAppsByID(id)
        .then((res) => setDetailsInfo(res))
        .catch((err) => notifyError(err));
    }
  }, []);

  return (
    <main className="flex items-center justify-center flex-col w-full h-full px-8 sm:px-[5rem] mt-12">
      <div className="flex items-center lg:items-start justify-between flex-col-reverse px-8 xl:flex-row">
        <div className="h-full space-y-10 w-full lg:w-[50rem]">
          <section className="bg-white py-0 px-2 sm:py-8 sm:px-6 rounded-xl space-y-6 w-full">
            <div className="flex items-center justify-between flex-wrap sm:flex-nowrap">
              <h3 className="text-blackishGreen text-2xl font-bold w-full sm:w-2/3 lg:w-[28rem]">
                {detailsInfo?.airlineName || detailsInfo?.roomName}
              </h3>
              <h4 className="text-red-400 text-sm font-bold">
                <span className="text-red-400 text-3xl font-bold">
                  ${detailsInfo?.price}
                </span>
                {type === "apps" && "/night"}
              </h4>
            </div>
            <div>
              {type === "flights" ? (
                <>
                  <section className="mt-10 w-full h-full">
                    <div className="flex items-center justify-center">
                      <div className="w-full h-full space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center justify-start bg-white border border-mintGreen rounded-md p-4 sm:px-8 sm:py-6">
                            <img
                              className="w-16 h-11 object-contain mb-4 sm:mb-0"
                              src={detailsInfo?.partnerLogo}
                              alt={detailsInfo?.partnerName}
                            />
                            <div className="sm:ml-6">
                              <h4 className="text-blackishGreen font-semibold text-2xl">
                                {detailsInfo?.partnerName}
                              </h4>
                              <h5 className="mt-2 text-blackishGreen/6 font-medium text-sm">
                                {detailsInfo?.planeName}
                              </h5>
                            </div>
                          </div>
                          <div className="hidden sm:flex items-center justify-start space-x-6 divide-x-2 divide-gray-300">
                            <IoAirplane className="w-8 h-8 pl-2" />
                            <IoWifi className="w-8 h-8 pl-2" />
                            <IoTimeOutline className="w-8 h-8 pl-2" />
                            <MdOutlineFastfood className="w-8 h-8 pl-2" />
                            <MdOutlineAirlineSeatReclineNormal className="w-8 h-8 pl-2" />
                          </div>
                        </div>
                        <div className="flex items-center flex-wrap sm:flex-nowrap justify-center sm:justify-between sm:space-x-12 mt-10">
                          <div className="flex items-center justify-center">
                            <h3 className="text-xl sm:text-2xl text-blackishGreen font-semibold">
                              {detailsInfo?.departureTime?.slice(11,16)}
                            </h3>
                            <h4 className="text-base font-medium text-blackishGreen/60 ml-4">
                              {detailsInfo?.fromArrive}
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
                            <h3 className="text-xl sm:text-2xl text-blackishGreen font-semibold">
                              {detailsInfo?.arrivalTime?.slice(11,16)}
                            </h3>
                            <h4 className="text-base font-medium text-blackishGreen/60 ml-4">
                              {detailsInfo?.toArrive}
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
                        <div className="flex items-center justify-start flex-wrap sm:flex-nowrap bg-white border border-mintGreen rounded-md p-4 sm:px-8 sm:py-6 w-full">
                          <img
                            className="w-16 h-11 object-contain mb-4 sm:mb-0"
                            src={detailsInfo?.hotelLogo}
                            alt={detailsInfo?.alt}
                          />
                          <div className="sm:ml-6">
                            <h4 className="text-blackishGreen font-semibold text-xl sm:text-2xl">
                              {detailsInfo?.name}
                            </h4>
                            <h5 className="mt-2 text-blackishGreen/6 font-medium text-sm flex items-center justify-start">
                              <ImLocation2 className="hidden sm:block mr-2" />
                              {detailsInfo?.location}
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center flex-wrap sm:flex-nowrap sm:justify-between space-y-4 sm:space-x-12 mt-10">
                        <div className="flex flex-col items-start justify-start">
                          <h3 className="text-xl sm:text-2xl text-blackishGreen font-semibold">
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
                          <h3 className="text-xl sm:text-2xl text-blackishGreen font-semibold">
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
                  <h4 className="text-sm text-blackishGreen w-4/5 lg:max-w-[40rem]">
                    Pay $207.43 now, and the rest ($207.43) will be
                    automatically charged. No extra fees.
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
          <section className="w-full h-full">
            {user === undefined ? (
              <div className="flex flex-col items-start justify-center bg-white rounded-md p-4">
                <h3 className="text-2xl text-blackishGreen font-semibold">
                  You are not authorized
                </h3>
                <Link
                  className="mt-3 bg-mintGreen/90 hover:bg-mintGreen w-full h-full px-3 py-4 text-center text-white transition-all"
                  to="/sign-in"
                >
                  Go to Login
                </Link>
                <h4 className="text-blackishGreen/60 text-lg mt-2 mb-0 mx-auto">
                  Not register yet?
                  <Link
                    className="text-blue-300 font-medium text-base ml-3"
                    to="/sign-up"
                  >
                    Register now
                  </Link>
                </h4>
              </div>
            ) : (
              <button
                className="text-white text-xl bg-mintGreen hover:bg-mintGreen/70 text-center w-full py-4 transition-colors"
                onClick={() => setOpenedModal(true)}
              >
                Book now
              </button>
            )}
          </section>
        </div>
        <aside className="bg-white rounded-xl p-4 sm:p-6 w-full mb-8 xl:ml-10 xl:mb-0">
          <div className="flex items-start justify-start flex-col sm:flex-row">
            <img
              className="w-[3rem] h-[3rem] mb-2 sm:w-[7.5rem] sm:h-[7.5rem] sm:mr-6 sm:mb-0"
              src={detailsInfo?.partnerLogo || detailsInfo?.hotelLogo}
              alt={detailsInfo?.partnerName || detailsInfo?.alt}
            />
            <div className="flex flex-col items-start justify-start">
              <h4 className="text-blackishGreen/75 text-base font-medium line-clamp-1">
                {detailsInfo?.airlineName || detailsInfo?.name}
              </h4>
              <h3 className="max-w-[16rem] font-semibold text-lg sm:text-xl text-blackishGreen mt-1">
                {detailsInfo?.planeName || detailsInfo?.roomName}
              </h3>
              <div className="hidden sm:block my-4">
                <span className="p-2 border border-mintGreen rounded-md text-center text-blackishGreen font-medium">
                  {detailsInfo?.rating}
                </span>
              </div>
            </div>
          </div>
          <div className="border-y border-y-gray-400 py-2 sm:p-4">
            <h3 className="text-base text-blackishGreen font-medium">
              Your booking is protected by{" "}
              <span className="font-bold">golobe</span>
            </h3>
          </div>
          <div className="py-2 sm:p-4">
            <h4 className="text-blackishGreen text-base font-semibold mb-4">
              Price details
            </h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h5 className="text-blackishGreen text-base font-medium">
                  Base Fare
                </h5>
                <span className="text-blackishGreen text-base font-semibold">
                  ${detailsInfo?.price}
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
              ${detailsInfo?.price + 25}
            </span>
          </div>
        </aside>
      </div>
      {isOpenModal && <ModalSuccess />}
    </main>
  );
};

export default DetailsContent;
