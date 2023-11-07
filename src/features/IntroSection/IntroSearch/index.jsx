import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { IoBed } from "react-icons/io5";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiSolidBed } from "react-icons/bi";
import { addDays, format } from "date-fns";

import { cn } from "../../../utils";
import DatePickerWithRange from "../../../components/DatePicker";
import Calendar from "../../../components/Calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/Popup";
import Button from "../../../components/Button";
import { NavLink } from "react-router-dom";

const IntroSearch = () => {
  const [activeButton, setActiveButton] = useState("Flights");
  const [isOpened, setIsOpened] = useState(false);
  const [count, setCount] = useState(1);
  const [classType, setClassType] = useState("Economy");
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(addDays(new Date(), 2));
  const [guess, setGuess] = useState(1);
  const [rooms, setRooms] = useState(1);

  return (
    <div className="bg-white rounded-xl flex justify-start items-start w-[90%] h-auto mx-auto p-8 flex-col shadow-md">
      <div className="flex flex-col items-start justify-start">
        <div className="flex justify-around items-center space-x-4">
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
          <span className="w-auto h-full text-gray-300"> | </span>
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
          {activeButton === "Flights" ? (
            <>
              <fieldset className="border border-blackishGreen rounded-md p-2  w-[20rem] max-h-[90px]">
                <legend className="bg-white p-2 text-sm ml-2">From - To</legend>
                <input />
              </fieldset>
              <fieldset className="border border-blackishGreen rounded-md p-2 max-h-[90px]">
                <legend className="bg-white p-2 text-sm ml-0">Trip</legend>
                <select
                  id="trip"
                  class="border-none outline-none bg-transparent pr-10"
                >
                  <option value="return">Return</option>
                  <option value="stay">Stay</option>
                </select>
              </fieldset>
              <fieldset className="border border-blackishGreen rounded-md p-2 max-h-[90px]">
                <legend className="bg-white p-2 text-sm ml-2">
                  Depart- Return
                </legend>
                <DatePickerWithRange />
              </fieldset>
              <div className="relative">
                <fieldset className="border border-blackishGreen rounded-md p-4 w-[20rem] max-h-[90px]">
                  <legend className="bg-white p-2 text-sm ml-2">
                    Passenger - Class
                  </legend>
                  <button onClick={() => setIsOpened(!isOpened)}>
                    {count} Passanger, {classType}
                  </button>
                </fieldset>
                {isOpened && (
                  <div className="bg-white rounded-xl h-auto w-fit absolute -left-[10.5rem] top-[5.5rem] shadow-md p-6">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg text-gray-400">Passenger</h3>
                        <div className="space-x-4">
                          <button
                            className="rounded-full bg-mintGreen text-colorText w-8 h-8"
                            onClick={() =>
                              setCount(count + 1 >= 9 ? 9 : count + 1)
                            }
                          >
                            +
                          </button>
                          <span className="text-blackishGreen/70">{count}</span>
                          <button
                            className="rounded-full border border-mintGreen text-colorText w-8 h-8"
                            onClick={() =>
                              setCount(count - 1 === 0 ? 1 : count - 1)
                            }
                          >
                            -
                          </button>
                        </div>
                      </div>
                      <div>
                        <div className="flex space-x-3 justify-center items-center">
                          <button
                            className={cn(
                              "w-full rounded-md px-6 py-2 text-colorText border border-blackishGreen whitespace-nowrap hover:bg-blackishGreen hover:text-white transition-all",
                              classType === "Economy"
                                ? "text-white bg-blackishGreen border-blackishGreen"
                                : ""
                            )}
                            onClick={(e) => setClassType(e.target.textContent)}
                          >
                            Economy
                          </button>
                          <button
                            className={cn(
                              "w-full rounded-md px-6 py-2 text-colorText border border-blackishGreen whitespace-nowrap hover:bg-blackishGreen hover:text-white transition-all",
                              classType === "Business Class"
                                ? "text-white bg-blackishGreen border-blackishGreen"
                                : ""
                            )}
                            onClick={(e) => setClassType(e.target.textContent)}
                          >
                            Business Class
                          </button>
                          <button
                            className={cn(
                              "w-full rounded-md px-6 py-2 text-colorText border border-blackishGreen whitespace-nowrap hover:bg-blackishGreen hover:text-white transition-all",
                              classType === "First Class"
                                ? "text-white bg-blackishGreen border-blackishGreen"
                                : ""
                            )}
                            onClick={(e) => setClassType(e.target.textContent)}
                          >
                            First Class
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <fieldset className="border border-black rounded-md p-2 flex items-start justify-start">
                <legend className="bg-white p-2 text-sm ml-2">
                  Enter Destination
                </legend>
                <BiSolidBed className="mr-2" />
                <input />
              </fieldset>
              <fieldset className="border border-black rounded-md p-2">
                <legend className="bg-white p-2 text-sm ml-2">Check In</legend>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"solid"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !checkIn && "text-muted-foreground"
                      )}
                    >
                      {checkIn ? (
                        format(checkIn, "PPP")
                      ) : (
                        <span className="text-blackishGreen">Pick a date</span>
                      )}
                      <AiOutlineCalendar className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </fieldset>
              <fieldset className="border border-black rounded-md p-2">
                <legend className="bg-white p-2 text-sm ml-2">Check Out</legend>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"solid"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !checkOut && "text-muted-foreground"
                      )}
                    >
                      {checkOut ? (
                        format(checkOut, "PPP")
                      ) : (
                        <span className="text-blackishGreen">Pick a date</span>
                      )}
                      <AiOutlineCalendar className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </fieldset>
              <div className="relative min-w-[20rem]">
                <fieldset className="border border-black rounded-md p-2">
                  <legend className="bg-white p-2 text-sm ml-2">
                    Rooms & Guests
                  </legend>
                  <button onClick={() => setIsOpened(!isOpened)}>
                    {rooms} Rooms, {guess} Guests
                  </button>
                </fieldset>
                {isOpened && (
                  <div className="bg-white rounded-xl h-auto w-fit absolute left-0 top-[5.5rem] shadow-md p-6 min-w-[20rem]">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg text-gray-400">Guests</h3>
                        <div className="space-x-4">
                          <button
                            className="rounded-full bg-mintGreen text-colorText w-8 h-8"
                            onClick={() =>
                              setGuess(guess + 1 >= 15 ? 15 : guess + 1)
                            }
                          >
                            +
                          </button>
                          <span className="text-blackishGreen/70">{guess}</span>
                          <button
                            className="rounded-full border border-mintGreen text-colorText w-8 h-8"
                            onClick={() =>
                              setGuess(guess - 1 === 0 ? 1 : guess - 1)
                            }
                          >
                            -
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg text-gray-400">Rooms</h3>
                        <div className="space-x-4">
                          <button
                            className="rounded-full bg-mintGreen text-colorText w-8 h-8"
                            onClick={() =>
                              setRooms(rooms + 1 >= 9 ? 9 : rooms + 1)
                            }
                          >
                            +
                          </button>
                          <span className="text-blackishGreen/70">{rooms}</span>
                          <button
                            className="rounded-full border border-mintGreen text-colorText w-8 h-8"
                            onClick={() =>
                              setRooms(rooms - 1 === 0 ? 1 : rooms - 1)
                            }
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="w-full flex justify-end mt-4">
        {activeButton === "Flights" ? (
          <NavLink
            to="/search-flights"
            className="flex items-center text-sm text-blackishGreen bg-mintGreen p-4 hover:text-white transition-all"
          >
            <FaPaperPlane className="mr-1" size="1rem" />
            Show flights
          </NavLink>
        ) : (
          <NavLink
            to="/search-appartaments"
            className="flex items-center text-sm text-blackishGreen bg-mintGreen p-4 hover:text-white transition-all"
          >
            <FaPaperPlane className="mr-1" size="1rem" />
            Show places
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default IntroSearch;
