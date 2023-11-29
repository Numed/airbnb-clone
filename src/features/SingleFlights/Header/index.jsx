import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";

const SingleFlightHeader = () => {
  return (
    <div className="flex items-center flex-col sm:flex-row justify-between py-12 w-full h-full ">
      <div>
        <div className="flex items-baseline justify-start">
          <h3 className="mb-4 font-bold text-2xl">Emirates A380 Airbus</h3>
        </div>
        <h4 className="text-sm text-blackishGreen/75 mb-4 font-medium flex items-center justify-start w-4/5 lg:w-full">
          <ImLocation2 className="mr-2 h-6 w-6 sm:h-auto sm:w-auto" /> Gümüssuyu
          Mah. Inönü Cad. No:8, Istanbul 34437
        </h4>
        <div>
          <span className="p-2 border border-mintGreen rounded-md text-center text-blackishGreen font-medium">
            4.5
          </span>
          <span className="ml-2 text-xs text-blackishGreen font-bold">
            Very good
          </span>
        </div>
      </div>
      <div className="mt-4 sm:mt-0">
        <h3 className="mb-4 text-4xl font-bold text-red-400 text-end">$240</h3>
        <div>
          <button className="p-3 border border-mintGreen hover:bg-mintGreen text-center text-blackishGreen font-medium mr-4 transition-colors">
            <AiOutlineHeart />
          </button>
          <button className="p-3 border border-mintGreen hover:bg-mintGreen text-center text-blackishGreen font-medium mr-4 transition-colors">
            <AiOutlineShareAlt />
          </button>
          <Link
            to="/details"
            className="text-sm text-blackishGreen font-semibold bg-mintGreen/90 hover:bg-mintGreen p-4 sm:py-3 sm:px-10 text-center rounded-sm transition-colors"
          >
            Book now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleFlightHeader;
