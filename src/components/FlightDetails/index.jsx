import { IoAirplane, IoTimeOutline, IoWifi } from "react-icons/io5"
import { MdOutlineAirlineSeatReclineNormal, MdOutlineFastfood } from "react-icons/md"

const FlightDetails = ({flight}) => {
    return(
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
                  {flight?.departureTime?.slice(11, 16)}
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
                  {flight?.arrivalTime?.slice(11, 16)}
                </h3>
                <h4 className="text-base font-medium text-blackishGreen/60 ml-4">
                  {flight?.toArrive}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default FlightDetails;