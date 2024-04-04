import { BsFillBuildingsFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

const HotelDetails = ({detailsInfo}) =>{
    return(
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
    )
}

export default HotelDetails;