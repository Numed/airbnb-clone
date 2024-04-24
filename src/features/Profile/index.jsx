import { useState, useEffect } from "react";
import { IoPencil } from "react-icons/io5";
import { RiEditBoxFill } from "react-icons/ri";

import ava from "../../img/profile/ava.png";
import { cn } from "../../utils";
import {
  useOpenModal,
  useActiveUser,
  useUserProfile,
  useModalType,
} from "../../store";
import { ModalProfile } from "../../components/Modal";
import { UserServices } from "../../services/user";
import { notifyError } from "../../utils/notifications";
import HistorySection from "../HistorySection";
import PaymentCards from "./PaymentCards";

const ProfileContainer = () => {
  const [activeSection, setActiveSection] = useState("Account");
  const [type, setType] = useState("");
  const [initial, setInitial] = useState({});

  const { isOpenModal, setOpenedModal } = useOpenModal();
  const { modalType, setModalType } = useModalType();
  const { userProfile, setUserProfile } = useUserProfile();
  const { getUser } = UserServices();
  const { user } = useActiveUser();

  useEffect(() => {
    if (user?.id?.length > 0) {
      const id = user?.id;
      return () =>
        getUser(id)
          .then((data) => setUserProfile(data))
          .catch((er) => notifyError(er.message));
    }
  }, [user]);

  const handleModal = (type, initial) => {
    setOpenedModal(true);
    setModalType("profile");
    setInitial(initial);
    setType(type);
  };

  return (
    <section className="p-8 xl:p-[6.5rem]">
      <div className="w-full h-[22rem] bg-profileBackground bg-center bg-no-repeat bg-cover rounded-xl"></div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex relative flex-col justify-center items-center translate-y-16">
          <img className="w-3/4 h-3/4" src={ava} alt="Avatar Profile" />
          <button className="bg-red-400 w-10 h-10 rounded-full flex items-center justify-center absolute top-[55%] right-[25%]">
            <IoPencil size="1.5rem" />
          </button>
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold mb-2 text-2xl text-blackishGreen">
              {userProfile?.username}
            </h3>
            <h4 className="text-base text-blackishGreen/75">
              {userProfile?.email}
            </h4>
          </div>
        </div>
        <div className="w-full h-auto flex items-center justify-center">
          <button
            className={cn(
              activeSection === "Account" &&
                "underline decoration-4 underline-offset-8 decoration-mintGreen",
              "w-full sm:w-1/3 text-base font-semibold text-blackishGreen bg-white rounded-s-xl px-6 py-8"
            )}
            onClick={() => setActiveSection("Account")}
          >
            Account
          </button>
          <button
            className={cn(
              activeSection === "History" &&
                "underline decoration-4 underline-offset-8 decoration-mintGreen",
              "w-full sm:w-1/3 border-l border-gray-300 text-base font-semibold text-blackishGreen bg-white rounded-e-xl px-6 py-8"
            )}
            onClick={() => setActiveSection("History")}
          >
            History
          </button>
        </div>
        <div className="mt-10 w-full h-auto">
          {activeSection === "Account" ? (
            <>
              <h2 className="mb-4 font-bold text-3xl">Account</h2>
              <div className="bg-white shadow-lg rounded-2xl py-8 px-6 w-full space-y-8">
                <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row items-baseline sm:items-center justify-between">
                  <div>
                    <h4 className="mb-2 text-blackishGreen/75">Name</h4>
                    <h3 className="max-w-[25rem] text-lg sm:text-xl text-blackishGreen font-semibold">
                      {userProfile?.username}
                    </h3>
                  </div>
                  <button
                    className="flex items-center justify-center p-4 border border-mintGreen hover:bg-mintGreen hover:text-white transition-all"
                    onClick={() => handleModal("text", userProfile?.username)}
                  >
                    <RiEditBoxFill className="mr-1" /> Change
                  </button>
                </div>
                <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row items-baseline sm:items-center justify-between">
                  <div>
                    <h4 className="mb-2 text-blackishGreen/75">Email</h4>
                    <h3 className="max-w-[25rem] text-lg sm:text-xl text-blackishGreen font-semibold">
                      {userProfile?.email}
                    </h3>
                  </div>
                  <button
                    className="flex items-center justify-center p-4 border border-mintGreen hover:bg-mintGreen hover:text-white transition-all"
                    onClick={() => handleModal("email", userProfile?.email)}
                  >
                    <RiEditBoxFill className="mr-1" />
                    Change
                  </button>
                </div>
                <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row items-baseline sm:items-center justify-between">
                  <div>
                    <h4 className="mb-2 text-blackishGreen/75">Phone number</h4>
                    <h3 className="max-w-[25rem] text-lg sm:text-xl text-blackishGreen font-semibold">
                      {userProfile?.phone}
                    </h3>
                  </div>
                  <button
                    className="flex items-center justify-center p-4 border border-mintGreen hover:bg-mintGreen hover:text-white transition-all"
                    onClick={() => handleModal("phone", userProfile?.phone)}
                  >
                    <RiEditBoxFill className="mr-1" /> Change
                  </button>
                </div>
                <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row items-baseline sm:items-center justify-between">
                  <div>
                    <h4 className="mb-2 text-blackishGreen/75">Address</h4>
                    <h3 className="max-w-[25rem] text-lg sm:text-xl text-blackishGreen font-semibold">
                      {userProfile?.address !== undefined
                        ? userProfile.address
                        : "Not specified"}
                    </h3>
                  </div>
                  <button
                    className="flex items-center justify-center p-4 border border-mintGreen hover:bg-mintGreen hover:text-white transition-all"
                    onClick={() => handleModal("address", userProfile?.address)}
                  >
                    <RiEditBoxFill className="mr-1" /> Change
                  </button>
                </div>
                <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row items-baseline sm:items-center justify-between">
                  <div>
                    <h4 className="mb-2 text-blackishGreen/75">
                      Date of birth
                    </h4>
                    <h3 className="max-w-[25rem] text-lg sm:text-xl text-blackishGreen font-semibold">
                      {userProfile?.dataBirth !== undefined
                        ? userProfile.dataBirth
                        : "Not specified"}
                    </h3>
                  </div>
                  <button
                    className="flex items-center justify-center p-4 border border-mintGreen hover:bg-mintGreen hover:text-white transition-all"
                    onClick={() =>
                      handleModal("birthday", userProfile?.dataBirth)
                    }
                  >
                    <RiEditBoxFill className="mr-1" /> Change
                  </button>
                </div>
                <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row items-baseline sm:items-center justify-between">
                  <div>
                    <h4 className="mb-2 text-xl font-bold text-black">
                      Payment methods
                    </h4>
                    <PaymentCards />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <HistorySection />
          )}
        </div>
        {isOpenModal === true && modalType === "profile" ? (
          <ModalProfile type={type} initial={initial} />
        ) : null}
      </div>
    </section>
  );
};

export default ProfileContainer;
