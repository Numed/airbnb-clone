import { IoBed, IoChevronDownSharp, IoLogOut, IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

import profile from "../../img/profile.png";
import { MdFlight } from "react-icons/md";
import { useActiveUser, useOpenMenu, useOpenModal } from "../../store";

const NavPopup = () => {
  const { user, setUser } = useActiveUser();
  const { isOpenMenu, setIsOpenMenu } = useOpenMenu();
  const { setOpenedModal } = useOpenModal();
  return (
    <div className="bg-black/80 w-full h-full z-20 fixed inset-0 my-0 mx-auto">
      <div className="flex flex-col w-full h-full items-center justify-center relative">
        <button onClick={() => setOpenedModal(false)}>
          <IoClose className="w-8 h-8 text-white absolute top-5 right-5" />
        </button>
        <div className="flex flex-col space-y-8 text-sm items-center mb-8">
          <NavLink
            to="/flights"
            className="text-white font-semibold text-xl flex items-center hover:underline hover:underline-offset-4 transition-all"
          >
            <MdFlight size="1.5em" className="mr-1" />
            Find Flight
          </NavLink>
          <NavLink
            to="/appartaments"
            className="text-white font-semibold text-xl flex items-center hover:underline hover:underline-offset-4 transition-all"
          >
            <IoBed size="1.5em" className="mr-1" />
            Find Stays
          </NavLink>
        </div>
        {user !== null ? (
          <div className="text-sm flex flex-col items-center space-y-8">
            <NavLink
              to="/favorite"
              className="text-white font-semibold text-xl flex items-center hover:underline hover:underline-offset-4 transition-all"
            >
              <AiFillHeart size="1.5em" className="mr-1" />
              Favorites
            </NavLink>
            <NavLink
              to="/profile"
              className="text-white font-semibold text-xl flex items-center cursor-pointer relative"
            >
              <div
                className="relative mr-1"
                onClick={() => setIsOpenMenu(!isOpenMenu)}
              >
                <img src={profile} alt="Profile Avatar" />
                <button
                  className="absolute bottom-0 right-0 flex items-center justify-center bg-red-400 w-3 h-3 rounded-full"
                  onClick={() => setIsOpenMenu(!isOpenMenu)}
                >
                  <IoChevronDownSharp />
                </button>
              </div>
              {isOpenMenu && (
                <div className="space-y-3 bg-white absolute z-10 top-12 left-0 p-4 border border-blackishGreen/40 rounded-lg">
                  <button
                    className="flex items-center justify-center"
                    onClick={() => setUser(null)}
                  >
                    <IoLogOut className="w-4 h-4 scale-105 mr-2" /> Logout
                  </button>
                </div>
              )}
              John D.
            </NavLink>
          </div>
        ) : (
          <div className="text-sm flex flex-col space-y-8 items-center">
            <NavLink
              to="/sign-in"
              className="text-white font-semibold text-xl flex items-center rounded-lg px-6 py-4 transition-all hover:bg-white hover:text-blackishGreen"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/sign-up"
              className="text-white font-semibold text-xl flex items-center rounded-lg px-6 py-4 transition-all hover:bg-white hover:text-blackishGreen"
            >
              Sign Up
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavPopup;
