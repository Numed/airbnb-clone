import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const SingleAppHeader = ({ apps }) => {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate("/details", { state: { id: apps.id, type: "apps" } });
  };

  return (
    <div className="flex items-center justify-between py-12 w-full h-full flex-wrap lg:flex-nowrap">
      <div className="w-full sm:w-2/3">
        <div className="flex items-baseline justify-start flex-wrap ">
          <h3 className="mb-4 font-bold text-2xl">{apps.name}</h3>
          <span className="mb-4 xl:mb-0 xl:ml-4 flex items-center justify-start">
            <AiFillStar className="text-red-300 w-4 h-4" />
            <AiFillStar className="text-red-300 w-4 h-4" />
            <AiFillStar className="text-red-300 w-4 h-4" />
            <AiFillStar className="text-red-300 w-4 h-4" />
            <AiFillStar className="text-red-300 w-4 h-4 mr-1" />5 Star Hotel
          </span>
        </div>
        <h4 className="text-sm text-blackishGreen/75 mb-4 font-medium flex items-center justify-start">
          <ImLocation2 className="mr-2 w-6 h-6 sm:w-auto sm:h-auto" />{" "}
          {apps.location}
        </h4>
        <div>
          <span className="p-2 border border-mintGreen rounded-md text-center text-blackishGreen font-medium">
            {apps.rating} Very good
          </span>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="mb-4 text-4xl font-bold text-red-400 text-end">
          ${apps.price}/night
        </h3>
        <div className="flex items-center justify-center">
          <button
            onClick={goToDetails}
            className="text-sm text-blackishGreen font-semibold bg-mintGreen/90 hover:bg-mintGreen p-4 xl:py-3 xl:px-10 text-center rounded-sm transition-colors"
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleAppHeader;
