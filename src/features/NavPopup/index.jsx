import { IoBed, IoChevronDownSharp, IoLogOut, IoClose } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { MdFlight, MdSpaceDashboard } from "react-icons/md";
import { useActiveUser, useOpenMenu, useOpenSubmodal } from "../../store";
import Link from "../../components/CustomLink";
import { convertNameFormat } from "../../utils";

const NavPopup = () => {
  const { user, setUser } = useActiveUser();
  const { isOpenMenu, setIsOpenMenu } = useOpenMenu();
  const { setOpenedSubmodal } = useOpenSubmodal();
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
    <div className="bg-black/80 w-full h-full z-20 fixed inset-0 my-0 mx-auto">
      <div className="flex flex-col w-full h-full items-center justify-center relative">
        <button onClick={() => setOpenedSubmodal(false)}>
          <IoClose className="w-8 h-8 text-white absolute top-5 right-5" />
        </button>
        <div className="flex flex-col space-y-8 text-sm items-center mb-8">
          <Link
            to="/flights"
            className="text-white font-semibold text-xl flex items-center hover:underline hover:underline-offset-4 transition-all"
          >
            <MdFlight size="1.5em" className="mr-1" />
            Find Flight
          </Link>
          <Link
            to="/appartaments"
            className="text-white font-semibold text-xl flex items-center hover:underline hover:underline-offset-4 transition-all"
          >
            <IoBed size="1.5em" className="mr-1" />
            Find Stays
          </Link>
        </div>
        {user !== null ? (
          <div className="text-sm flex flex-col items-center space-y-8">
            <Link
              to="/favorite"
              className="text-white font-semibold text-xl flex items-center hover:underline hover:underline-offset-4 transition-all"
            >
              <AiFillHeart size="1.5em" className="mr-1" />
              Favorites
            </Link>
            <Link
              to="/profile"
              className="text-white font-semibold text-xl flex items-center cursor-pointer relative"
            >
              <div
                className="relative mr-1"
                onClick={() => setIsOpenMenu(!isOpenMenu)}
              >
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={user.avatar}
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
                  {user.role === "admin" && (
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
            </Link>
          </div>
        ) : (
          <div className="text-sm flex flex-col space-y-8 items-center">
            <Link
              to="/sign-in"
              className="text-white font-semibold text-xl flex items-center rounded-lg px-6 py-4 transition-all hover:bg-white hover:text-blackishGreen"
            >
              Sign In
            </Link>
            <Link
              to="/sign-up"
              className="text-white font-semibold text-xl flex items-center rounded-lg px-6 py-4 transition-all hover:bg-white hover:text-blackishGreen"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavPopup;
