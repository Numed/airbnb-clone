import { FaPaperPlane } from "react-icons/fa";

const ApartmentsSearch = () => {
  return (
    <div className="bg-white rounded-xl flex justify-start items-start w-[90%] h-auto mx-auto p-8 flex-col shadow-md -translate-y-16">
      <h2 className="text-2xl font-bold text-blackishGreen">
        Where are you flying?
      </h2>
      <div className="flex flex-col items-start justify-start">
        <div className="flex items-center space-x-6 mt-12">
          <fieldset className="border border-black rounded-md p-2">
            <legend className="bg-white p-2 text-sm ml-2">
              Enter Destination
            </legend>
            <input />
          </fieldset>
          <fieldset className="border border-black rounded-md p-2">
            <legend className="bg-white p-2 text-sm ml-2">Check In</legend>
            <input />
          </fieldset>
          <fieldset className="border border-black rounded-md p-2">
            <legend className="bg-white p-2 text-sm ml-2">Check Out</legend>
            <input />
          </fieldset>
          <fieldset className="border border-black rounded-md p-2">
            <legend className="bg-white p-2 text-sm ml-2">
              Rooms & Guests
            </legend>
            <input />
          </fieldset>
        </div>
      </div>
      <div className="w-full flex justify-end mt-4">
        <button className="flex items-center text-sm text-blackishGreen bg-mintGreen p-4 hover:text-white transition-all">
          <FaPaperPlane className="mr-1" size="1rem" />
          Show Places
        </button>
      </div>
    </div>
  );
};

export default ApartmentsSearch;
