import { useEffect, useState } from "react";

import Search from "./Search";
import Filter from "./Filter";
import { useRequestService } from "../../services";
import { notifyError } from "../../utils/notifications";
import Loader from "../../components/Loader";
import { cn } from "../../utils";
import {
  useApps,
  useCountApps,
  useFetchingData,
  useIsLoading,
} from "../../store";
import { onSortApps } from "../../utils/sort";
import AppItem from "./AppItem";

const SearchAppsContainer = () => {
  const [offset, setOffset] = useState(0);

  const appsCounter = useCountApps((state) => state.countApps);
  const setAppsCounter = useCountApps((state) => state.setCountApps);
  const { isLoading, setIsLoading } = useIsLoading();
  const { setIsFetchingData } = useFetchingData();
  const { getAllApps } = useRequestService();
  const { apps, setApps } = useApps();

  useEffect(() => {
    getApps();
  }, []);

  const getApps = () => {
    setIsLoading(true);
    setIsFetchingData(true);
    getAllApps().then(onSetApps).catch(onError);
  };

  const onSetApps = (data) => {
    setAppsCounter(data?.length);
    setOffset(offset + 4);
    setApps(data.slice(0, offset + 4));
    setIsLoading(false);
    setIsFetchingData(false);
  };

  const onError = (err) => {
    setIsLoading(false);
    setIsFetchingData(false);
    return notifyError(err);
  };

  return (
    <section className="w-full h-full">
      <Search />
      <div className="flex flex-col xl:flex-row items-start justify-between p-4 sm:px-12 xl:px-[6.5rem]">
        <Filter />
        <div className="flex flex-col items-start justify-start w-full xl:w-4/5 xl:ml-6">
          <div className="w-full flex items-center justify-between mt-6">
            <h4 className="text-sm text-blackishGreen font-semibold">
              Showing of{" "}
              <span className="text-red-400">{appsCounter} places</span>
            </h4>
            <h5 className="text-sm text-blackishGreen">
              Sort by
              <select
                className="text-sm text-blackishGreen font-bold"
                onChange={(e) => onSortApps(apps, e.target.value, setApps)}
              >
                <option value="recommended">Recommended</option>
                <option value="newest">Newest</option>
                <option value="rating">Rating</option>
              </select>
            </h5>
          </div>
          <AppItem apps={apps} />
          <button
            className={cn(
              "text-white bg-blackishGreen hover:bg-blackishGreen/90 text-center w-full py-4 transition-colors",
              offset === 12 && "hidden"
            )}
            onClick={() => getApps()}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className="after:w-8 after:h-8" />
            ) : (
              "Show more results"
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchAppsContainer;
