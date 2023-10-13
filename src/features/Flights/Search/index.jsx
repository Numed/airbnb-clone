import { FaPaperPlane } from "react-icons/fa";

const FlightsSearch = () => {
  return (
    <div className="bg-white rounded-xl flex justify-start items-start w-[90%] h-auto mx-auto p-8 flex-col shadow-md -translate-y-16">
      <h2 className="text-2xl font-bold text-blackishGreen">
        Where are you flying?
      </h2>
      <div className="flex flex-col items-start justify-start">
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

export default FlightsSearch;
