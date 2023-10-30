import { useState } from "react";
import { MdFlight } from "react-icons/md";
import { IoBed, IoChevronDownSharp, IoLogOut } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";

import logo from "../../../img/logo/logo-white.png";
import profile from "../../../img/profile.png";
import { useActiveUser } from "../../../store";

const IntroHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useActiveUser();
  return (
    <header className="w-full flex justify-between items-center p-8">
      <div className="text-sm flex items-center space-x-8">
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
      {user !== null ? (
        <div className="text-sm flex items-center space-x-8">
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
            className="text-blackishGreen font-semibold flex items-center cursor-pointer relative"
          >
            <div className="relative mr-1" onClick={() => setIsOpen(!isOpen)}>
              <img src={profile} alt="Profile Avatar" />
              <button
                className="absolute bottom-0 right-0 flex items-center justify-center bg-red-400 w-3 h-3 rounded-full"
                onClick={() => setIsOpen(!isOpen)}
              >
                <IoChevronDownSharp />
              </button>
            </div>
            {isOpen && (
              <div className="space-y-3 bg-white absolute z-10 top-12 left-0 p-4 border border-blackishGreen/40 rounded-lg">
                <NavLink
                  to="/profile"
                  className="flex items-center justify-center"
                >
                  <BsFillPersonFill className="w-4 h-4 scale-105 mr-2" />
                  Profile
                </NavLink>
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
        <div className="text-sm flex items-center space-x-8">
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
    </header>
  );
};

export default IntroHeader;
