import { FaPaperPlane } from "react-icons/fa";

const IntroBanner = () => {
  return (
    <section className="flex justify-center items-center space-x-4 mt-20">
      <div className="w-full h-full bg-bannerFlights bg-center bg-no-repeat bg-contain rounded-xl">
        <div className="w-[37.75rem] h-[33.5rem] flex flex-col items-center justify-end bg-gradient-to-b from-transparent to-rgba(18, 18, 18, 0.75) via-transparent">
          <h2 className="text-4xl font-bold mb-2 text-white">Flights</h2>
          <h3 className="text-lg text-white mb-4 max-w-[24.5rem] text-center">
            Search Flights & Places Hire to our most popular destinations
          </h3>
          <button className="flex items-center text-sm text-blackishGreen bg-mintGreen p-4 hover:text-white transition-all mb-6">
            <FaPaperPlane className="mr-1" size="1rem" />
            Show flights
          </button>
        </div>
      </div>
      <div className="w-full h-auto bg-bannerHotels bg-center bg-no-repeat bg-contain rounded-xl">
        <div className="w-[37.75rem] h-[33.5rem] flex flex-col items-center justify-end bg-gradient-to-b from-transparent to-rgba(18, 18, 18, 0.75) via-transparent">
          <h2 className="text-4xl font-bold mb-2 text-white">Hotels</h2>
          <h3 className="text-lg text-white mb-4 max-w-[24.5rem] text-center">
            Search hotels & Places Hire to our most popular destinations
          </h3>
          <button className="flex items-center text-sm text-blackishGreen bg-mintGreen p-4 hover:text-white transition-all mb-6">
            <FaPaperPlane className="mr-1" size="1rem" />
            Show hotels
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntroBanner;
