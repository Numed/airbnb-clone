import { MdFlight, MdSpaceDashboard } from "react-icons/md";
import { IoBed, IoChevronDownSharp, IoLogOut, IoMenu } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import logo from "../../img/logo/logo.png";
import { useActiveUser, useOpenSubmodal, useOpenMenu } from "../../store";
import NavPopup from "../../features/NavPopup";
import Link from "../CustomLink";
import { convertNameFormat } from "../../utils";

const Header = () => {
  const { isOpenMenu, setIsOpenMenu } = useOpenMenu();
  const { isOpenSubmodal, setOpenedSubmodal } = useOpenSubmodal();
  const { user, setUser } = useActiveUser();
  const navigate = useNavigate();

  const onLogout = (e) => {
    e.preventDefault();
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  const onAdmin = (e) => {
    e.preventDefault();
    setOpenedSubmodal(false);
    setIsOpenMenu(false);
    navigate("/dashboard");
  };

  return (
    <header className="w-full flex justify-between items-center p-8 bg-white">
      <div className="hidden sm:flex text-sm items-center space-x-8">
        <Link
          to="/flights"
          className="text-blackishGreen font-semibold flex items-center hover:underline hover:underline-offset-4 transition-all"
        >
          <MdFlight size="1.5em" className="mr-1" />
          Find Flight
        </Link>
        <Link
          to="/appartaments"
          className="text-blackishGreen font-semibold flex items-center hover:underline hover:underline-offset-4 transition-all"
        >
          <IoBed size="1.5em" className="mr-1" />
          Find Stays
        </Link>
      </div>
      <Link to="/">
        <img src={logo} alt="Logo golobe" />
      </Link>
      <div>
        <button
          className="block sm:hidden"
          onClick={() => setOpenedSubmodal(true)}
        >
          <IoMenu className="w-8 h-8 text-blackishGreen" />
        </button>
        {user !== null ? (
          <div className="text-sm hidden sm:flex items-center space-x-8">
            <Link
              to="/favorite"
              className="text-blackishGreen font-semibold flex items-center hover:underline hover:underline-offset-4 transition-all"
            >
              <AiFillHeart size="1.5em" className="mr-1" />
              Favorites
            </Link>
            <span className="mx-4 text-blackishGreen">|</span>
            <div className="text-blackishGreen font-semibold flex items-center cursor-pointer relative">
              <div
                className="relative mr-1"
                onClick={() => setIsOpenMenu(!isOpenMenu)}
              >
                <Link to="/profile">
                  <img
                    className="rounded-full w-10 h-10 object-cover"
                    src={user?.avatar || "https://placehold.co/400"}
                    alt="Profile Avatar"
                  />
                </Link>
                <button
                  className="absolute bottom-0 right-0 flex items-center justify-center bg-red-400 w-3 h-3 rounded-full"
                  onClick={() => setIsOpenMenu(!isOpenMenu)}
                >
                  <IoChevronDownSharp />
                </button>
              </div>
              {isOpenMenu && (
                <div className="space-y-3 bg-white absolute z-10 top-12 left-0 p-4 border border-blackishGreen/40 rounded-lg">
                  {user.isAdmin && (
                    <button
                      className="flex items-center text-blackishGreen"
                      onClick={(e) => onAdmin(e)}
                    >
                      <MdSpaceDashboard className="w-4 h-4 scale-105 mr-2" />
                      Admin
                    </button>
                  )}
                  <button
                    className="flex items-center justify-center"
                    onClick={(e) => onLogout(e)}
                  >
                    <IoLogOut className="w-4 h-4 scale-105 mr-2" /> Logout
                  </button>
                </div>
              )}
              {convertNameFormat(user?.username)}
            </div>
          </div>
        ) : (
          <div className="text-sm hidden sm:flex items-center space-x-8">
            <Link
              to="/sign-in"
              className="text-blackishGreen font-semibold flex items-center rounded-lg px-6 py-4 transition-all hover:bg-blackishGreen hover:text-white"
            >
              Sign In
            </Link>
            <Link
              to="/sign-up"
              className="text-blackishGreen font-semibold flex items-center rounded-lg px-6 py-4 transition-all hover:bg-blackishGreen hover:text-white"
            >
              Sign Up
            </Link>
          </div>
        )}
        {isOpenSubmodal && <NavPopup />}
      </div>
    </header>
  );
};

export default Header;
