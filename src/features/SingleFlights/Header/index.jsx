import { AiOutlineHeart } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const SingleFlightHeader = ({ flight }) => {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate("/details", { state: { id: flight.id, type: "flights" } });
  };

  return (
    <div className="flex items-center flex-col sm:flex-row justify-between py-12 w-full h-full ">
      <div>
        <div className="flex items-baseline justify-start">
          <h3 className="mb-4 font-bold text-2xl">{flight.airlineName}</h3>
        </div>
        <h4 className="text-sm text-blackishGreen/75 mb-4 font-medium flex items-center justify-start w-4/5 lg:w-full">
          <ImLocation2 className="mr-2 h-6 w-6 sm:h-auto sm:w-auto" />{" "}
          {flight.geolocation}
        </h4>
        <div>
          <span className="p-2 border border-mintGreen rounded-md text-center text-blackishGreen font-medium">
            {flight.rating}
          </span>
        </div>
      </div>
      <div className="mt-4 sm:mt-0">
        <h3 className="mb-4 text-4xl font-bold text-red-400 text-end">
          ${flight.price}
        </h3>
        <div>
          <button
            onClick={goToDetails}
            className="text-sm text-blackishGreen font-semibold bg-mintGreen/90 hover:bg-mintGreen p-4 sm:py-3 sm:px-10 text-center rounded-sm transition-colors"
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleFlightHeader;
