import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { IoBed } from "react-icons/io5";

import { cn } from "../../../utils";

const IntroSearch = () => {
  const [activeButton, setActiveButton] = useState("Flights");
  return (
    <div className="bg-white rounded-xl flex justify-start items-start w-[90%] h-auto mx-auto p-8 flex-col shadow-md">
      <div className="flex flex-col items-start justify-start">
        <div className="flex justify-around items-center space-x-4 divide-x-2 divide-gray-300 divide-solid">
          <div
            className={cn(
              activeButton === "Flights" && "border-b-4 border-b-mintGreen"
            )}
          >
            <button
              className="py-4 px-1 text-blackishGreen font-semibold flex items-center"
              onClick={() => setActiveButton("Flights")}
            >
              <MdFlight size="1.5em" className="mr-1" />
              Flights
            </button>
          </div>
          <div
            className={cn(
              activeButton === "Stays" && "border-b-4 border-b-mintGreen"
            )}
          >
            <button
              className="py-4 px-1 text-blackishGreen font-semibold flex items-center w-full h-auto p-2"
              onClick={() => setActiveButton("Stays")}
            >
              <IoBed size="1.5em" className="mx-1" />
              Stays
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-6 mt-12">
          <fieldset className="border border-black rounded-md p-2">
            <legend className="bg-white p-2 text-sm ml-2">From - To</legend>
            <input />
          </fieldset>
          <fieldset className="border border-black rounded-md p-2">
            <legend className="bg-white p-2 text-sm ml-2">Trip</legend>
            <input />
          </fieldset>
          <fieldset className="border border-black rounded-md p-2">
            <legend className="bg-white p-2 text-sm ml-2">
              Depart- Return
            </legend>
            <input />
          </fieldset>
          <fieldset className="border border-black rounded-md p-2">
            <legend className="bg-white p-2 text-sm ml-2">
              Passenger - Class
            </legend>
            <input />
          </fieldset>
        </div>
      </div>
      <div className="w-full flex justify-end mt-4">
        <button className="flex items-center text-sm text-blackishGreen bg-mintGreen p-4 hover:text-white transition-all">
          <FaPaperPlane className="mr-1" size="1rem" />
          Show flights
        </button>
      </div>
    </div>
  );
};

export default IntroSearch;
