import { AiOutlineHeart, AiFillStar, AiOutlineShareAlt } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";

const SingleAppHeader = () => {
  return (
    <div className="flex items-center justify-between py-12 w-full h-full">
      <div>
        <div className="flex items-baseline justify-start">
          <h3 className="mb-4 font-bold text-2xl">
            CVK Park Bosphorus Hotel Istanbul
          </h3>
          <span className="ml-4 flex items-center justify-start">
            <AiFillStar className="text-red-300 w-4 h-4" />
            <AiFillStar className="text-red-300 w-4 h-4" />
            <AiFillStar className="text-red-300 w-4 h-4" />
            <AiFillStar className="text-red-300 w-4 h-4" />
            <AiFillStar className="text-red-300 w-4 h-4 mr-1" />5 Star Hotel
          </span>
        </div>
        <h4 className="text-sm text-blackishGreen/75 mb-4 font-medium flex items-center justify-start">
          <ImLocation2 className="mr-2" /> Gümüssuyu Mah. Inönü Cad. No:8,
          Istanbul 34437
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
      <div>
        <h3 className="mb-4 text-4xl font-bold text-red-400 text-end">
          $240/night
        </h3>
        <div>
          <button className="p-3 border border-mintGreen hover:bg-mintGreen text-center text-blackishGreen font-medium mr-4 transition-colors">
            <AiOutlineHeart />
          </button>
          <button className="p-3 border border-mintGreen hover:bg-mintGreen text-center text-blackishGreen font-medium mr-4 transition-colors">
            <AiOutlineShareAlt />
          </button>
          <Link
            to="/details"
            className="text-sm text-blackishGreen font-semibold bg-mintGreen/90 hover:bg-mintGreen py-3 px-10 text-center rounded-sm transition-colors"
          >
            Book now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleAppHeader;
