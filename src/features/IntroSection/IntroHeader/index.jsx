import { MdFlight } from "react-icons/md";
import { IoBed, IoChevronDownSharp, IoLogOut, IoMenu } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";

import NavPopup from "../../NavPopup";
import logo from "../../../img/logo/logo-white.png";
import profile from "../../../img/profile.png";
import { useActiveUser, useOpenMenu, useOpenSubmodal } from "../../../store";

const IntroHeader = () => {
  const { user, setUser } = useActiveUser();
  const { isOpenMenu, setIsOpenMenu } = useOpenMenu();
  const { isOpenSubmodal, setOpenedSubmodal } = useOpenSubmodal();

  return (
    <header className="w-full flex justify-between items-center p-8">
      <div className="hidden sm:flex text-sm items-center space-x-8">
        <NavLink
          to="/flights"
          className="text-white font-semibold flex items-center hover:underline hover:underline-offset-4 transition-all"
        >
          <MdFlight size="1.5em" className="mr-1" />
          Find Flight
        </NavLink>
        <NavLink
          to="/appartaments"
          className="text-white font-semibold flex items-center hover:underline hover:underline-offset-4 transition-all"
        >
          <IoBed size="1.5em" className="mr-1" />
          Find Stays
        </NavLink>
      </div>
      <Link to="/">
        <img src={logo} alt="Logo golobe" />
      </Link>
      <div>
        <button
          className="block sm:hidden"
          onClick={() => setOpenedSubmodal(true)}
        >
          <IoMenu className="w-8 h-8 text-white" />
        </button>
        {user !== null ? (
          <div className="text-sm hidden sm:flex items-center space-x-8">
            <NavLink
              to="/favorite"
              className="text-white font-semibold flex items-center hover:underline hover:underline-offset-4 transition-all"
            >
              <AiFillHeart size="1.5em" className="mr-1" />
              Favorites
            </NavLink>
            <span className="mx-4 text-white">|</span>
            <NavLink
              to="/profile"
              className="text-white font-semibold flex items-center cursor-pointer relative"
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
          <div className="text-sm hidden sm:flex items-center space-x-8">
            <NavLink
              to="/sign-in"
              className="text-white font-semibold flex items-center rounded-lg px-6 py-4 transition-all hover:bg-white hover:text-blackishGreen"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/sign-up"
              className="text-white font-semibold flex items-center rounded-lg px-6 py-4 transition-all hover:bg-white hover:text-blackishGreen"
            >
              Sign Up
            </NavLink>
          </div>
        )}
        {isOpenSubmodal && <NavPopup />}
      </div>
    </header>
  );
};

export default IntroHeader;
