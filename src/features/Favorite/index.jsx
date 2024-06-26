import { useState, useEffect } from "react";

import FavoriteAppContainer from "./Apps";
import FavoriteFlightsApp from "./Flights";
import { cn } from "../../utils";
import { onError } from "../../utils/notifications";
import { useActiveUser } from "../../store";
import { UserServices } from "../../services/user";
import { useFavorite } from "./useFavorite";

const FavoriteContainer = () => {
  const [active, setActive] = useState("Flights");
  const { user } = useActiveUser();
  const { getUserMe } = UserServices();
  const { onSetUser, apps, flights, setIsLoading } = useFavorite();

  useEffect(() => {
    if (user?.id?.length > 0) {
      const id = user?.id;
      setIsLoading(true);
      getUserMe(id).then(onSetUser).catch(onError);
    }
  }, []);

  return (
    <section className="mt-12 px-8 xl:px-[6.5rem] w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-full">
        <h3 className="text-black font-bold text-4xl">Favorite</h3>
        <div className="mt-6 w-full h-full flex items-start justify-start">
          <button
            className={cn(
              active === "Flights" && "border-b-4 border-b-mintGreen",
              "bg-white py-4 px-5 text-blackishGreen text-base font-semibold flex flex-col items-start justify-start w-1/2 border-r border-r-gray-300"
            )}
            onClick={() => setActive("Flights")}
          >
            Flights
            <span className="mt-2 text-blackishGreen/40 text-sm">
              {flights?.length > 0 ? flights?.length : 0} marked
            </span>
          </button>
          <button
            className={cn(
              active === "Places" && "border-b-4 border-b-mintGreen",
              "bg-white py-4 px-5 text-blackishGreen text-base font-semibold flex flex-col items-start justify-start w-1/2"
            )}
            onClick={() => setActive("Places")}
          >
            Appartmets
            <span className="mt-2 text-blackishGreen/40 text-sm">
              {apps?.length > 0 ? apps?.length : 0} marked
            </span>
          </button>
        </div>
      </div>
      <div className="w-full h-full">
        {active === "Flights" ? (
          <div className="mt-6 w-full h-full grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FavoriteFlightsApp flights={flights} />
          </div>
        ) : (
          <div className="mt-6 w-full h-full grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FavoriteAppContainer apps={apps} />
          </div>
        )}
      </div>
    </section>
  );
};

export default FavoriteContainer;
