import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PiTimerFill } from "react-icons/pi";
import { IoAirplane, IoWifi, IoTimeOutline } from "react-icons/io5";
import {
  MdOutlineFastfood,
  MdOutlineAirlineSeatReclineNormal,
} from "react-icons/md";

import SingleFlightHeader from "./Header";
import { useRequestService } from "../../services";
import { notifyError } from "../../utils/notifications";

const SingleFlightsContainer = () => {
  let { id } = useParams();
  const { getFlightById } = useRequestService();
  const [flight, setFlight] = useState({});

  useEffect(() => {
    getFlightById(id)
      .then((res) => setFlight(res))
      .catch((err) => notifyError(err));
  }, []);

  return (
    <main className="flex items-center justify-center flex-col w-full h-full px-12 lg:px-[6.5rem]">
      <section className="w-full h-full">
        <SingleFlightHeader flight={flight} />
        <img className="w-full h-auto" src={flight?.photo} alt={flight?.alt} />
        <div className="bg-mintGreen p-4 rounded-md mt-10">
          <h3 className="text-xl sm:text-2xl text-blackishGreen font-bold">
            Emirates Airlines Policies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 space-y-2 items-center justify-start mt-4">
            <div className="flex items-center justify-start">
              <PiTimerFill className="mr-4 w-6 h-6" />
              <p className="text-blackishGreen/75 text-base font-medium">
                Pre-flight cleaning, installation of cabin HEPA filters.
              </p>
            </div>
            <div className="flex items-center justify-start">
              <PiTimerFill className="mr-4 w-6 h-6" />
              <p className="text-blackishGreen/75 text-base font-medium">
                Pre-flight cleaning, installation of cabin HEPA filters.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 w-full h-full">
        <div className="flex items-center justify-center">
          <div className="w-full h-full bg-white rounded-2xl shadow py-8 px-6 space-y-6">
            <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row">
              <h3 className="text-xl text-blackishGreen font-bold">
                {flight?.date}
              </h3>
              <h4 className="text-xl text-blackishGreen/75 font-medium">
                {flight?.duration}
              </h4>
            </div>
            <div className="flex items-center justify-between flex-col sm:flex-row">
              <div className="flex items-center justify-start bg-white border border-mintGreen rounded-md px-8 py-6 flex-col sm:flex-row">
                <img
                  className="w-16 h-11"
                  src={flight?.partnerLogo}
                  alt={flight?.partnerName}
                />
                <div className="ml-6">
                  <h4 className="text-blackishGreen font-semibold text-2xl">
                    {flight?.partnerName}
                  </h4>
                  <h5 className="mt-2 text-blackishGreen/6 font-medium text-sm">
                    {flight?.planeName}
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
            <div className="flex items-center justify-center flex-col space-y-4 lg:flex-row lg:space-x-[5rem]">
              <div className="flex items-center justify-center">
                <h3 className="text-xl sm:text-2xl text-blackishGreen font-semibold">
                  {flight?.departureTime}
                </h3>
                <h4 className="text-base font-medium text-blackishGreen/60 ml-4">
                  {flight?.fromArrive}
                </h4>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-blackishGreen font-bold mr-6">—</span>
                <IoAirplane className="w-12 h-12" />
                <span className="text-blackishGreen font-bold ml-6">—</span>
              </div>
              <div className="flex items-center justify-center">
                <h3 className="text-xl sm:text-2xl text-blackishGreen font-semibold">
                  {flight?.arrivalTime}
                </h3>
                <h4 className="text-base font-medium text-blackishGreen/60 ml-4">
                  {flight?.toArrive}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleFlightsContainer;
