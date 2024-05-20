import { AiFillDelete } from "react-icons/ai";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";

import { useActiveUser, useModalType, useOpenModal } from "../../../store";
import { ModalCard } from "../../../components/Modal";
import { UserServices } from "../../../services/user";

const PaymentCards = () => {
  const { user, setUser } = useActiveUser();
  const { modalType, setModalType } = useModalType();
  const { isOpenModal, setOpenedModal } = useOpenModal();
  const { deleteUserCard } = UserServices();

  const onDelete = (id) => {
    deleteUserCard(user.id)
      .then((data) => onDeleted(data, id))
      .catch((err) => toast.error(err.message));
  };

  const onDeleted = (data, id) => {
    const newCards = user.cards.filter((card) => card.id !== id);
    setUser({ ...user, cards: newCards });
    toast.success(data);
  };

  const onSetModal = (type) => {
    setModalType(type);
    setOpenedModal(true);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-x-4 justify-between items-center w-full h-auto">
      {user?.cards?.map(({ number, valid, type, id }) => {
        return (
          <div
            className="w-full sm:w-[320px] lg:w-[350px] h-auto bg-mintGreen rounded-md p-4"
            key={id}
          >
            <div className="flex justify-between items-baseline">
              <span className="text-2xl font-semibold">
                **** **** ****
                <h3 className="font-semibold text-white text-3xl">
                  {number.slice(-4)}
                </h3>
              </span>
              <button onClick={() => onDelete(id)}>
                <AiFillDelete className="w-6 h-6 pointer-events-none" />
              </button>
            </div>
            <div className="w-full h-auto flex justify-between items-center mt-8">
              <div>
                <span className="text-xs font-semibold">Valid Thru</span>
                <h3 className="text-xl font-semibold">{valid}</h3>
              </div>
              <div>
                {type === "mastercard" ? (
                  <FaCcMastercard className="w-12 h-12" />
                ) : (
                  <FaCcVisa className="w-12 h-12" />
                )}
              </div>
            </div>
          </div>
        );
      })}
      <div className="w-full h-[185px] sm:w-[320px] lg:w-[350px]  border border-mintGreen rounded-md p-4 border-dashed flex flex-col justify-center items-center">
        <button onClick={() => onSetModal("card")}>
          <IoIosAddCircleOutline className="w-6 h-6 text-mintGreen" />
        </button>
        <span className="mt-3 text-xs font-semibold text-blackishGreen/75">
          Add New Card
        </span>
      </div>
      {isOpenModal === true && modalType === "card" ? <ModalCard /> : null}
    </div>
  );
};

export default PaymentCards;
