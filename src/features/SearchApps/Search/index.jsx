import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiSolidBed } from "react-icons/bi";
import { addDays, format } from "date-fns";

import Calendar from "../../../components/Calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/Popup";
import Button from "../../../components/Button";
import { cn } from "../../../utils";

const Search = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(addDays(new Date(), 2));
  const [rooms, setRooms] = useState(1);
  const [isOpened, setIsOpened] = useState(false);
  const [guess, setGuess] = useState(1);
  const [apps, setApps] = useState([
    { id: 1, name: "Istanbul, Turkey" },
    { id: 2, name: "Sydney, Australia" },
    { id: 3, name: "Malé, Maldives" },
  ]);

  return (
    <div className="bg-white rounded-xl flex justify-start items-start w-[90%] h-auto mx-auto p-4 flex-col shadow-md my-12">
      <div className="flex items-center space-x-6">
        <fieldset className="border border-black rounded-md p-2 flex items-center justify-start min-h-[90px]">
          <legend className="bg-white p-2 text-sm ml-2">
            Enter Destination
          </legend>
          <div className="flex items-center justify-start">
            <BiSolidBed className="mr-2" />
            <select className="appearance-none text-center">
              {apps.map(({ id, name }) => (
                <option key={id} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset className="border border-black rounded-md p-2 min-h-[90px]">
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
        <fieldset className="border border-black rounded-md p-2 min-h-[90px]">
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
          <fieldset className="border border-black rounded-md p-2 min-h-[90px]">
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
                      onClick={() => setGuess(guess + 1 >= 15 ? 15 : guess + 1)}
                    >
                      +
                    </button>
                    <span className="text-blackishGreen/70">{guess}</span>
                    <button
                      className="rounded-full border border-mintGreen text-colorText w-8 h-8"
                      onClick={() => setGuess(guess - 1 === 0 ? 1 : guess - 1)}
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
                      onClick={() => setRooms(rooms + 1 >= 9 ? 9 : rooms + 1)}
                    >
                      +
                    </button>
                    <span className="text-blackishGreen/70">{rooms}</span>
                    <button
                      className="rounded-full border border-mintGreen text-colorText w-8 h-8"
                      onClick={() => setRooms(rooms - 1 === 0 ? 1 : rooms - 1)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <button className="bg-mintGreen p-4 hover:text-white transition-all flex items-center justify-center mt-4">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
