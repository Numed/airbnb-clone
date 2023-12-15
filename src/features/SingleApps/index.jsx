import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsStars } from "react-icons/bs";

import { useRequestService } from "../../services";
import Header from "./Header";
import { notifyError } from "../../utils/notifications";

const SingleAppContainer = () => {
  let { id } = useParams();
  const { getAppsByID } = useRequestService();
  const [app, setApp] = useState({});

  useEffect(() => {
    getAppsByID(id)
      .then((res) => setApp(res))
      .catch((err) => notifyError(err));
  }, []);

  return (
    <main className="flex items-center justify-center flex-col w-full h-full px-12 lg:px-[6.5rem]">
      <section className="w-full h-full">
        <Header apps={app} />
      </section>
      <div className="w-full h-full my-5">
        <img
          className="w-full sm:w-1/2 h-full rounded-3xl"
          src={app?.photo}
          alt={app?.description}
        />
      </div>
      <section className="border-t border-t-blackishGreen/25 py-12">
        <div className="flex flex-col items-start justify-start">
          <h3 className="mb-4 text-xl font-bold text-blackishGreen">
            Overview
          </h3>
          <p className="text-base text-blackishGreen/75 font-medium">
            {app?.description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 lg:space-x-4 gap-y-5 my-8">
          <div className="bg-mintGreen border border-mintGreen rounded-lg p-4 w-[10rem] h-full flex items-start justify-between flex-col">
            <h3 className="text-4xl text-colorText font-bold mb-8">
              {app?.rating}
            </h3>
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
      <section className="border-t border-t-blackishGreen/25 py-12 w-full h-full">
        <div className="flex flex-col items-start justify-start w-full h-full">
          <h3 className="text-xl text-blackishGreen font-bold">Amenities</h3>
          <div className="flex items-start justify-between w-full flex-col sm:flex-row sm:w-1/2 mt-8 space-y-7">
            <ul className="space-y-7 list-disc">
              {app?.advantages?.map((advantage, i) => (
                <li
                  key={i}
                  className="text-base text-blackishGreen font-medium"
                >
                  {advantage}
                </li>
              ))}
            </ul>
            <ul className="space-y-7 list-disc">
              <li className="text-base text-blackishGreen font-medium">
                Fitness center
              </li>
              <li className="text-base text-blackishGreen font-medium">
                Bar/Lounge
              </li>
              <li className="text-base text-blackishGreen font-medium">
                Free Wi-Fi
              </li>
              <li className="text-base text-blackishGreen font-medium">
                Tea/coffee machine
              </li>
              <li className="text-base text-blackishGreen font-medium">
                +24 more
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="border-t border-t-blackishGreen/25 py-12 w-full h-full">
        <div className="mb-6 flex items-center justify-between w-full h-auto">
          <h3 className="text-xl text-blackishGreen font-bold">Reviews</h3>
          <button className="text-sm text-blackishGreen font-semibold p-4 bg-mintGreen/80 hover:bg-mintGreen transition-colors">
            Give your review
          </button>
        </div>
        <div className="flex items-start justify-start py-12">
          <h4 className="text-5xl text-blackishGreen font-bold mr-4">
            {app?.rating}
          </h4>
        </div>
        <section className="border-t border-t-blackishGreen/25 w-full h-full">
          <div className="flex flex-col items-center justify-start w-full h-auto border-b border-b-blackishGreen/25">
            {app?.reviews?.map(({ photo, name, rating, review }, i) => (
              <div
                key={i}
                className="flex items-center justify-start flex-col sm:flex-row border-t border-t-blackishGreen/25 py-6"
              >
                <img
                  className="w-full h-full sm:w-10 sm:h-10 mr-2"
                  src={photo}
                  alt={{ name } + " Avatar"}
                />
                <div className="w-full">
                  <h3 className="mb-2 text-sm text-blackishGreen font-semibold">
                    {rating}
                    <span className="text-sm text-blackishGreen">
                      <span className="mx-2">|</span> {name}
                    </span>
                  </h3>
                  <p className="text-sm w-full h-auto">{review}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default SingleAppContainer;
