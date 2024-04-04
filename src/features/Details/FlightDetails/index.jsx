import { IoAirplane, IoTimeOutline, IoWifi } from "react-icons/io5";
import {
  MdOutlineAirlineSeatReclineNormal,
  MdOutlineFastfood,
} from "react-icons/md";

const FlightDetails = ({ detailsInfo }) => {
  return (
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
                {detailsInfo?.departureTime?.slice(11, 16)}
              </h3>
              <h4 className="text-base font-medium text-blackishGreen/60 ml-4">
                {detailsInfo?.fromArrive}
              </h4>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-blackishGreen font-bold mr-6">—</span>
              <IoAirplane className="w-12 h-12" />
              <span className="text-blackishGreen font-bold ml-6">—</span>
            </div>
            <div className="flex items-center justify-center">
              <h3 className="text-xl sm:text-2xl text-blackishGreen font-semibold">
                {detailsInfo?.arrivalTime?.slice(11, 16)}
              </h3>
              <h4 className="text-base font-medium text-blackishGreen/60 ml-4">
                {detailsInfo?.toArrive}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightDetails;
