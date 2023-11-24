import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import { cn } from "../../../utils";
import DatePickerWithRange from "../../../components/DatePicker";
import { IoSwapHorizontal } from "react-icons/io5";

const Search = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [count, setCount] = useState(1);
  const [classType, setClassType] = useState("Economy");
  const [flights, setFlights] = useState([
    { id: 1, name: "Kiev" },
    { id: 2, name: "Lviv" },
    { id: 3, name: "Odesa" },
  ]);

  return (
    <div className="bg-white rounded-xl flex justify-start items-start w-[90%] h-auto mx-auto p-4 flex-col shadow-md my-12">
      <div className="flex items-center space-x-6">
        <fieldset className="border border-blackishGreen rounded-md p-2 w-full sm:w-[20rem] min-h-[90px]">
          <legend className="bg-white p-2 text-sm ml-2">From - To</legend>
          <div className="flex items-center justify-between pr-4">
            <div>
              <select className="appearance-none text-center">
                {flights.map(({ id, name }) => (
                  <option key={id} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              <span className="mx-2 text-blackishGreen text-xl font-semibold">
                -
              </span>
              <select className="appearance-none text-center">
                {flights.map(({ id, name }) => (
                  <option key={id} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <IoSwapHorizontal />
          </div>
        </fieldset>
        <fieldset className="border border-blackishGreen rounded-md p-2 min-h-[90px]">
          <legend className="bg-white p-2 text-sm ml-0">Trip</legend>
          <select
            id="trip"
            class="border-none outline-none bg-transparent pr-10"
          >
            <option value="return">Return</option>
            <option value="stay">Stay</option>
          </select>
        </fieldset>
        <fieldset className="border border-blackishGreen rounded-md p-2 min-h-[90px]">
          <legend className="bg-white p-2 text-sm ml-2">Depart- Return</legend>
          <DatePickerWithRange />
        </fieldset>
        <div className="relative">
          <fieldset className="border border-blackishGreen rounded-md p-4 w-full sm:w-[20rem] min-h-[90px]">
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
                      onClick={() => setCount(count + 1 >= 9 ? 9 : count + 1)}
                    >
                      +
                    </button>
                    <span className="text-blackishGreen/70">{count}</span>
                    <button
                      className="rounded-full border border-mintGreen text-colorText w-8 h-8"
                      onClick={() => setCount(count - 1 === 0 ? 1 : count - 1)}
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
        <button className="bg-mintGreen p-4 hover:text-white transition-all flex items-center justify-center mt-4">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
