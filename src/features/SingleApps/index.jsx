import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsStars } from "react-icons/bs";

import { useRequestService } from "../../services";
import Header from "./Header";
import { notifyError } from "../../utils/notifications";
import appBanner from "../../img/app-example.png";
import ava from "../../img/profile/ava.png";

const SingleAppContainer = () => {
  let { id } = useParams();
  const { getAppsByID } = useRequestService();
  const [app, setApp] = useState({});

  useEffect(() => {
    return () => {
      getAppsByID(id)
        .then((res) => setApp(res))
        .catch((err) => notifyError(err));
    };
  }, [id]);

  return (
    <main className="flex items-center justify-center flex-col w-full h-full px-[6.5rem]">
      <section className="w-full h-full">
        <Header />
      </section>
      <div className="w-full h-full my-5">
        <img
          className="w-1/2 h-full rounded-3xl"
          src={appBanner}
          alt="Appartament"
        />
      </div>
      <section className="border-t border-t-blackishGreen/25 py-12">
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
      <section className="border-t border-t-blackishGreen/25 py-12 w-full h-full">
        <div className="flex flex-col items-start justify-start w-full h-full">
          <h3 className="text-xl text-blackishGreen font-bold">Amenities</h3>
          <div className="flex items-start justify-between w-1/2 mt-8">
            <ul className="space-y-7 list-disc">
              <li className="text-base text-blackishGreen font-medium">
                Outdoor pool
              </li>
              <li className="text-base text-blackishGreen font-medium">
                Indoor pool
              </li>
              <li className="text-base text-blackishGreen font-medium">
                Spa and wellness center
              </li>
              <li className="text-base text-blackishGreen font-medium">
                Restaurant
              </li>
              <li className="text-base text-blackishGreen font-medium">
                Room service
              </li>
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
          <h4 className="text-5xl text-blackishGreen font-bold mr-4">4.5</h4>
          <h5 className="text-xl text-blackishGreen font-semibold">
            Very good
          </h5>
        </div>
        <section className="border-t border-t-blackishGreen/25 w-full h-full">
          <div className="flex flex-col items-center justify-start w-full h-auto border-b border-b-blackishGreen/25">
            <div className="flex items-center justify-start border-t border-t-blackishGreen/25 py-6">
              <img
                className="w-10 h-10 mr-2"
                src={ava}
                alt="Omar's Siphron Avatar"
              />
              <div className="w-full">
                <h3 className="mb-2 text-sm text-blackishGreen font-semibold">
                  5.0 Amazing
                  <span className="text-sm text-blackishGreen">
                    <span className="mx-2">|</span> Omar Siphron
                  </span>
                </h3>
                <p className="text-sm w-full h-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start border-t border-t-blackishGreen/25 py-6">
              <img
                className="w-10 h-10 mr-2"
                src={ava}
                alt="Omar's Siphron Avatar"
              />
              <div className="w-full">
                <h3 className="mb-2 text-sm text-blackishGreen font-semibold">
                  5.0 Amazing
                  <span className="text-sm text-blackishGreen">
                    <span className="mx-2">|</span> Omar Siphron
                  </span>
                </h3>
                <p className="text-sm w-full h-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start border-t border-t-blackishGreen/25 py-6">
              <img
                className="w-10 h-10 mr-2"
                src={ava}
                alt="Omar's Siphron Avatar"
              />
              <div className="w-full">
                <h3 className="mb-2 text-sm text-blackishGreen font-semibold">
                  5.0 Amazing
                  <span className="text-sm text-blackishGreen">
                    <span className="mx-2">|</span> Omar Siphron
                  </span>
                </h3>
                <p className="text-sm w-full h-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default SingleAppContainer;
