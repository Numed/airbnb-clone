import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { BiSolidBed } from "react-icons/bi";
import { Link } from "react-router-dom";

import { useHotelsCities } from "../../../store";
import HotelDatePicker from "../../../components/DatePicker/HotelDatePicker";

const ApartmentsSearch = () => {
  const [count, setCount] = useState(1);
  const [rooms, setRooms] = useState(1);
  const [isOpened, setIsOpened] = useState(false);
  const { hotelsCities } = useHotelsCities();
  const [selectedApp, setSelectedApp] = useState(hotelsCities[0]);

  return (
    <div className="bg-white rounded-xl flex justify-start items-start w-[90%] h-auto mx-auto p-8 flex-col shadow-md -translate-y-16">
      <h2 className="text-2xl font-bold text-blackishGreen">
        Where are you flying?
      </h2>
      <div className="flex flex-col items-start justify-start w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 xg:space-x-6 mt-12 w-full">
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
          <div>
            <HotelDatePicker />
          </div>
          <div className="ml-[14rem] relative min-w-full sm:min-w-[20rem]">
            <fieldset className="border border-black rounded-md p-4 min-h-[90px] w-full xl:w-[90%]">
              <legend className="bg-white p-2 text-sm ml-2">
                Rooms & Guests
              </legend>
              <button onClick={() => setIsOpened(!isOpened)}>
                {rooms} Rooms, {count} Guests
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
                          setCount(count + 1 >= 15 ? 15 : count + 1)
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
        </div>
      </div>
      <div className="w-full flex justify-end mt-4">
        <Link
          to="/search-appartaments"
          className="flex items-center text-sm text-blackishGreen bg-mintGreen p-4 hover:text-white transition-all"
        >
          <FaPaperPlane className="mr-1" size="1rem" />
          Show Places
        </Link>
      </div>
    </div>
  );
};

export default ApartmentsSearch;
