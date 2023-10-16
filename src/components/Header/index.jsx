import { MdFlight } from "react-icons/md";
import { IoBed, IoChevronDownSharp } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";

import logo from "../../img/logo/logo.png";
import profile from "../../img/profile.png";
import { useActiveUser } from "../../store";

const Header = () => {
  const { user } = useActiveUser();
  return (
    <header className="w-full flex justify-between items-center p-8 bg-white">
      <div className="text-sm flex items-center space-x-8">
        <NavLink
          to="/flights"
          className="text-blackishGreen font-semibold flex items-center hover:underline hover:underline-offset-4 transition-all"
        >
          <MdFlight size="1.5em" className="mr-1" />
          Find Flight
        </NavLink>
        <NavLink
          to="/appartaments"
          className="text-blackishGreen font-semibold flex items-center hover:underline hover:underline-offset-4 transition-all"
        >
          <IoBed size="1.5em" className="mr-1" />
          Find Stays
        </NavLink>
      </div>
      <Link to="/">
        <img src={logo} alt="Logo golobe" />
      </Link>
      {user !== null ? (
        <div className="text-sm flex items-center space-x-8">
          <NavLink
            to="/favorites"
            className="text-blackishGreen font-semibold flex items-center hover:underline hover:underline-offset-4 transition-all"
          >
            <AiFillHeart size="1.5em" className="mr-1" />
            Favorites
          </NavLink>
          <span className="mx-4">|</span>
          <NavLink
            to="/profile"
            className="text-blackishGreen font-semibold flex items-center cursor-pointer"
          >
            <div className="relative mr-1">
              <img src={profile} alt="Profile Avatar" />
              <button className="absolute bottom-0 right-0 flex items-center justify-center bg-red-400 w-3 h-3 rounded-full">
                <IoChevronDownSharp />
              </button>
            </div>
            John D.
          </NavLink>
        </div>
      ) : (
        <div className="text-sm flex items-center space-x-8">
          <NavLink
            to="/sign-in"
            className="text-blackishGreen font-semibold flex items-center rounded-lg px-6 py-4 transition-all hover:bg-blackishGreen hover:text-white"
          >
            Sign In
          </NavLink>
          <NavLink
            to="/sign-up"
            className="text-blackishGreen font-semibold flex items-center  rounded-lg px-6 py-4 transition-all hover:bg-blackishGreen hover:text-white"
          >
            Sign Up
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
