import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BsStars } from "react-icons/bs";

import { HotelsServices } from "../../services/hotels";
import Header from "./Header";
import { notifyError } from "../../utils/notifications";

const SingleAppContainer = () => {
  let location = useLocation();
  const id = location.state.id;
  const { getAppsByID } = HotelsServices();
  const [app, setApp] = useState({});
  let median = Math.ceil(app?.advantages?.length / 2);
  let firstHalf = app?.advantages?.slice(0, median);
  let secondHalf = app?.advantages?.slice(median);
  const navigate = useNavigate();

  useEffect(() => {
    getAppsByID(id)
      .then((res) => setApp(res))
      .catch((err) => notifyError(err));
  }, []);

 const goToDetails = (appId, roomName = null) => {
  navigate("/details", { state: { id: appId, type: "apps", room: roomName } });
};

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
            <span className="flex text-xl text-blackishGreen font-bold">
              Very good
            </span>
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
          <h3 className="text-xl text-blackishGreen font-bold">
            Available Rooms
          </h3>
          <div className="flex items-start justify-between w-full flex-col mt-8 space-y-7">
            {app?.rooms?.map(({ name, price, photo }, i) => (
              <div
                key={i}
                className="w-full flex items-start justify-start flex-col sm:flex-row border-t border-t-blackishGreen/25 py-6"
              >
                <div className="w-full flex items-baseline justify-start">
                  <img
                    className="w-[48px] h-[48px] object-contain mr-4"
                    src={photo || "https://placehold.co/48"}
                    alt={name}
                  />

                  <h3 className="mb-2 text-base text-blackishGreen font-normal">
                    {name}
                  </h3>
                </div>
                <div className="w-1/2">
                  <span className="text-lg font-bold h-auto mr-4">
                    ${price}/night
                  </span>
                  <button className="w-1/2 text-sm text-blackishGreen font-semibold p-4 bg-mintGreen/80 hover:bg-mintGreen transition-colors"
                  onClick={() => goToDetails(app.id, {name})}>
                    Book now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-t-blackishGreen/25 py-12 w-full h-full">
        <div className="flex flex-col items-start justify-start w-full h-full">
          <h3 className="text-xl text-blackishGreen font-bold">Amenities</h3>
          <div className="flex items-start justify-between w-full flex-col sm:flex-row sm:w-1/2 mt-8 space-y-7">
            <ul className="space-y-7 list-disc">
              {firstHalf?.map((advantage, i) => (
                <li
                  key={i}
                  className="text-base text-blackishGreen font-medium"
                >
                  {advantage}
                </li>
              ))}
            </ul>
            {secondHalf?.length > 0 && (
              <ul className="space-y-7 list-disc">
                {secondHalf?.map((advantage, i) => (
                  <li
                    key={i}
                    className="text-base text-blackishGreen font-medium"
                  >
                    {advantage}
                  </li>
                ))}
              </ul>
            )}
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
          <h4 className="flex flex-col text-3xl text-blackishGreen font-bold mr-4">
            {app?.rating} Very good
            {app?.reviews?.length > 0 && (
              <span className="mt-4 text-blackishGreen text-lg font-medium">
                {app?.reviews?.length} reviews total
              </span>
            )}
          </h4>
        </div>
        <section className="border-t border-t-blackishGreen/25 w-full h-full">
          <div className="flex flex-col items-star justify-center w-full h-auto border-b border-b-blackishGreen/25">
            {app?.reviews?.map(({ photo, name, rating, comment }, i) => (
              <div
                key={i}
                className="flex items-start justify-start flex-col sm:flex-row border-t border-t-blackishGreen/25 py-6"
              >
                <img
                  className="w-full h-full sm:w-10 sm:h-10 mr-4"
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
                  <p className="text-sm w-full h-auto">{comment}</p>
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
