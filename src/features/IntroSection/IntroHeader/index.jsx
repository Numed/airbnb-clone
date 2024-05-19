import { MdFlight } from "react-icons/md";
import { IoBed, IoChevronDownSharp, IoLogOut, IoMenu } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { NavLink, Link, useLocation } from "react-router-dom";

import NavPopup from "../../NavPopup";
import logo from "../../../img/logo/logo-white.png";
import { useActiveUser, useOpenMenu, useOpenSubmodal } from "../../../store";
import { cn, convertNameFormat } from "../../../utils";

const IntroHeader = () => {
  const { user, setUser } = useActiveUser();
  const { isOpenMenu, setIsOpenMenu } = useOpenMenu();
  const { isOpenSubmodal, setOpenedSubmodal } = useOpenSubmodal();
  const location = useLocation();

  const onLogout = (e) => {
    e.preventDefault();
    setUser(null);
    localStorage.removeItem("token");
  };

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
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={user?.avatar}
                  alt="Profile Avatar"
                />
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
                    className={cn(
                      "flex items-center justify-center",
                      location.pathname === "/" && "text-blackishGreen"
                    )}
                    onClick={(e) => onLogout(e)}
                  >
                    <IoLogOut className="w-4 h-4 scale-105 mr-2" /> Logout
                  </button>
                </div>
              )}
              {convertNameFormat(user?.username)}
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
