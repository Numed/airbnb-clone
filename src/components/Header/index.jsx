import { MdFlight } from "react-icons/md";
import { IoBed } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";

import logo from "../../img/logo/logo.png";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center p-8 bg-white">
      <div className="text-sm flex items-center space-x-8">
        <NavLink className="text-blackishGreen font-semibold flex items-center hover:underline hover:underline-offset-4 transition-all">
          <MdFlight size="1.5em" className="mr-1" />
          Find Flight
        </NavLink>
        <NavLink className="text-blackishGreen font-semibold flex items-center hover:underline hover:underline-offset-4 transition-all">
          <IoBed size="1.5em" className="mr-1" />
          Find Stays
        </NavLink>
      </div>
      <Link to="/">
        <img src={logo} alt="Logo golobe" />
      </Link>
      <div className="text-sm flex items-center space-x-8">
        <NavLink className="text-blackishGreen font-semibold flex items-center rounded-lg px-6 py-4 transition-all hover:bg-blackishGreen hover:text-white">
          Sign In
        </NavLink>
        <NavLink className="text-blackishGreen font-semibold flex items-center  rounded-lg px-6 py-4 transition-all hover:bg-blackishGreen hover:text-white">
          Sign Up
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
