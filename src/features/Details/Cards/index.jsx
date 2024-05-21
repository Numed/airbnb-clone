import { useState, useEffect } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa6";

import {
  useActiveUser,
  useDetailsInfo,
  useModalType,
  useOpenModal,
  useSelectedHotelsDate,
} from "../../../store";
import { cn } from "../../../utils";

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const { user } = useActiveUser();
  const { selectedHotelsDate } = useSelectedHotelsDate();
  const { detailsInfo, setDetailsInfo } = useDetailsInfo();
  const { modalType, setModalType } = useModalType();
  const { isOpenModal, setOpenedModal } = useOpenModal();

  useEffect(() => {
    onChooseCard();
  }, []);

  const onChooseCard = () => {
    if (user !== undefined && user?.cards?.length > 0) {
      const { number } = user.cards[0];
      setSelectedCard(number);
    }
  };

  const createOrderFlight = () => ({
    type: "flight",
    flightId: detailsInfo.id,
    cardId: selectedCard,
  });

  const createOrderRoom = () => ({
    type: "room",
    name: detailsInfo.room.id.name,
    hotelId: detailsInfo.id,
    roomId: detailsInfo.room.id.id,
    cardId: selectedCard,
    fromDate: selectedHotelsDate.from,
    toDate: selectedHotelsDate.to,
  });

  const onOrder = (type) => {
    const order =
      detailsInfo?.room?.id === undefined
        ? createOrderFlight()
        : createOrderRoom();
    setDetailsInfo(order);
    setModalType(type);
    setOpenedModal(true);
  };

  console.log(user);

  return (
    <div className="flex flex-col items-start justify-center bg-white rounded-md p-4">
      <div className="flex flex-col justify-between items-start w-full h-auto space-y-2">
        {user?.cards?.map(({ cardNumber, expiryDate, typeCard, id }) => {
          return (
            <div
              className="w-full h-auto bg=white rounded-md p-2 sm:p-4"
              key={id}
            >
              <label
                className={cn(
                  selectedCard === cardNumber ? "border bg-mintGreen" : "",
                  "flex items-center justify-between p-4 rounded-xl"
                )}
              >
                <div className="flex flex-col sm:flex-row items-start justify-center">
                  <h3 className="text-base font-bold text-blackishGreen mb-2 flex items-center justify-center">
                    {typeCard === "MasterCard" ? (
                      <FaCcMastercard className="w-6 h-6 mr-4" />
                    ) : (
                      <FaCcVisa className="w-6 h-6 mr-4" />
                    )}
                    **** <span className="ml-2">{cardNumber?.slice(-4)}</span>
                  </h3>
                  <h4 className="sm:ml-4 mt-[2px] text-sm text-blackishGreen max-w-[40rem]">
                    {expiryDate}
                  </h4>
                </div>
                <input
                  className="accent-white form-radio form-radio-checked border-white outline-white"
                  type="radio"
                  name="card"
                  value={cardNumber}
                  onChange={() => setSelectedCard(cardNumber)}
                />
              </label>
            </div>
          );
        })}
        <div className="flex flex-col items-start justify-center bg-white rounded-md p-4 w-full">
          <div className="w-full h-[185px]  border border-mintGreen rounded-md p-4 border-dashed flex flex-col justify-center items-center">
            <button onClick={() => onOrder("card")}>
              <IoIosAddCircleOutline className="w-6 h-6 text-mintGreen" />
            </button>
            <span className="mt-3 text-xs font-semibold text-blackishGreen/75">
              Add New Card
            </span>
          </div>
        </div>
      </div>
      <button
        className="text-white text-lg sm:text-xl bg-mintGreen hover:bg-mintGreen/70 text-center w-full py-2 sm:py-4 transition-colors"
        onClick={() => onOrder("succsess")}
      >
        Book now
      </button>
    </div>
  );
};

export default Cards;
