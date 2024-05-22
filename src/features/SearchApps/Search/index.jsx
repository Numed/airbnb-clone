import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiSolidBed } from "react-icons/bi";
import { useHotelsCities } from "../../../store";
import HotelDatePicker from "../../../components/DatePicker/HotelDatePicker";

const Search = () => {
  const [rooms, setRooms] = useState(1);
  const [isOpened, setIsOpened] = useState(false);
  const [guess, setGuess] = useState(1);
  const { hotelsCities } = useHotelsCities();

  return (
    <div className="bg-white rounded-xl flex justify-start items-start w-full xl:w-[90%] h-auto mx-auto p-4 flex-col shadow-md my-12">
      <div className="flex flex-col  sm:grid sm:grid-cols-2 xl:flex xl:flex-row xl:items-center xl:justify-center gap-4 w-full h-full">
        <fieldset className="border border-black rounded-md p-2 flex items-center justify-start min-h-[90px]">
          <legend className="bg-white p-2 text-sm ml-2">
            Enter Destination
          </legend>
          <div className="flex items-center justify-start">
            <BiSolidBed className="mr-2" />
            <select className="appearance-none text-center">
              {hotelsCities.map((name, id) => (
                <option key={id} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
          <HotelDatePicker />
        <div className="relative min-w-full sm:min-w-[20rem]">
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
        <button className="col-span-2 xl:col-auto bg-mintGreen p-4 hover:text-white transition-all flex items-center justify-center mt-4">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
