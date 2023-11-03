import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { BsStars } from "react-icons/bs";

import { useRequestService } from "../../services";
import Header from "./Header";

const SingleAppContainer = () => {
  let { id } = useParams();
  const { getAppsByID } = useRequestService();
  //   const { isLoading, error, date } = useQuery(getAppsByID(id));
  //   const { title, geo, rating, ratingText, price } = date;
  return (
    <main className="flex items-center justify-center flex-col w-full h-full px-[6.5rem]">
      <section className="w-full h-full">
        <Header />
      </section>
      <section className="border-y border-y-blackishGreen/25 py-12">
        <div className="flex flex-col items-start justify-start">
          <h3 className="mb-4 text-xl font-bold text-blackishGreen">
            Overview
          </h3>
          <p className="text-base text-blackishGreen/75 font-medium">
            Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park
            Bosphorus Hotel Istanbul has risen from the ashes of the historic
            Park Hotel, which also served as Foreign Affairs Palace 120 years
            ago and is hosting its guests by assuming this hospitality mission.
            With its 452 luxurious rooms and suites, 8500 m2 SPA and fitness
            area, 18 meeting rooms including 4 dividable ones and 3 terraces
            with Bosphorus view, Istanbuls largest terrace with Bosphorus view
            (4500 m2) and latest technology infrastructure, CVK Park Bosphorus
            Hotel Istanbul is destined to be the popular attraction point of the
            city. Room and suite categories at various sizes with city and
            Bosphorus view, as well as 68 separate luxury suites, are offered to
            its special guests as a wide variety of selection.
          </p>
        </div>
        <div className="flex items-center justify-start space-x-4 my-8">
          <div className="bg-mintGreen border border-mintGreen rounded-lg p-4 w-[10rem] h-full flex items-start justify-between flex-col">
            <h3 className="text-4xl text-colorText font-bold mb-8">4.5</h3>
            <h4 className="text-base text-colorText font-bold">Very good</h4>
          </div>
          <div className="border border-mintGreen rounded-lg p-4 w-[10rem] h-full flex items-start justify-between flex-col">
            <h3 className="text-4xl text-colorText font-bold mb-8">
              <BsStars />
            </h3>
            <h4 className="text-base text-colorText font-bold">Near park</h4>
          </div>
          <div className="border border-mintGreen rounded-lg p-4 w-[10rem] h-full flex items-start justify-between flex-col">
            <h3 className="text-4xl text-colorText font-bold mb-8">
              <BsStars />
            </h3>
            <h4 className="text-base text-colorText font-bold">
              Near nightlife
            </h4>
          </div>
          <div className="border border-mintGreen rounded-lg p-4 w-[10rem] h-full flex items-start justify-between flex-col">
            <h3 className="text-4xl text-colorText font-bold mb-8">
              <BsStars />
            </h3>
            <h4 className="text-base text-colorText font-bold">Near theater</h4>
          </div>
          <div className="border border-mintGreen rounded-lg p-4 w-[10rem] h-full flex items-start justify-between flex-col">
            <h3 className="text-4xl text-colorText font-bold mb-8">
              <BsStars />
            </h3>
            <h4 className="text-base text-colorText font-bold">Clean Hotel</h4>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleAppContainer;
