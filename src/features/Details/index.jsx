import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import AsideInfo from "./Aside";
import BookingSection from "./BookingSection";
import PaymentSection from "./Payment";
import HotelDetails from "./HotelDetails";
import FlightDetails from "./FlightDetails";

import { useModalType, useOpenModal } from "../../store";
import { ModalCard, ModalSuccess } from "../../components/Modal";
import { FlightsService } from "../../services/flights";
import { HotelsServices } from "../../services/hotels";
import { onError } from "../../utils/notifications";

const DetailsContent = () => {
  const [detailsInfo, setDetailsInfo] = useState();
  const { isOpenModal } = useOpenModal();
  const { modalType } = useModalType();
  const { getFlightById } = FlightsService();
  const { getAppsByID } = HotelsServices();

  let location = useLocation();
  let { id, type, room } = location.state;

  useEffect(() => {
    if (type === "flights") {
      getFlightById(id)
        .then((res) => setDetailsInfo(res))
        .catch(onError);
    } else {
      getAppsByID(id)
        .then((res) => setDetailsInfo(res))
        .catch(onError);
    }
  }, []);

  return (
    <main className="flex items-center justify-center flex-col w-full h-full px-8 sm:px-[5rem] mt-12">
      <div className="flex items-center lg:items-start justify-between flex-col-reverse px-0 sm:px-8 xl:flex-row">
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
                <FlightDetails detailsInfo={detailsInfo} />
              ) : (
                <HotelDetails detailsInfo={detailsInfo} />
              )}
            </div>
          </section>
          <PaymentSection price={detailsInfo?.price} />
          <BookingSection />
        </div>
        <AsideInfo detailsInfo={detailsInfo} />
      </div>
      {isOpenModal && modalType === "card" && <ModalCard />}
      {isOpenModal && modalType === "succsess" && (
        <ModalSuccess room={null} isFlight={type === "flights"} />
      )}
    </main>
  );
};

export default DetailsContent;
