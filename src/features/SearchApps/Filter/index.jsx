import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/Accordion";
import { useRequestService } from "../../../services";
import { notifyError, onError } from "../../../utils/notifications";
import { useApps, useCountApps } from "../../../store";
import { useDebounce } from "../../../hooks";

const Filter = () => {
  const [searchParams, setSearchParams] = useState({
    minPrice: 0,
    maxPrice: 500,
    advantages: [],
    rating: 1,
  });
  const debounceValue = useDebounce(searchParams, 300);
  const [advantages, setAdvantages] = useState([]);
  const { filterApps, getAdvantages } = useRequestService();
  const { setApps } = useApps();
  const setCountApps = useCountApps((state) => state.setCountApps);

  useEffect(() => {
    getAdvantages()
      .then((res) => setAdvantages(res))
      .catch((err) => notifyError(err));
  }, []);

  useEffect(() => {
    const queryString = new URLSearchParams(searchParams).toString();
    filterApps(queryString).then(onSetApps).catch(onError);
  }, [debounceValue]);

  const onSetApps = (data) => {
    setApps(data);
    setCountApps(data?.length);
  };

  const setAdvantage = (e) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      advantages: e.target.checked
        ? [...prevParams.advantages, e.target.value]
        : prevParams.advantages.filter(
            (advantag) => advantag !== e.target.value
          ),
    }));
  };

  const updateSearchParams = (key, value) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      [key]: value,
    }));
  };

  return (
    <div className="w-full mb-4 xl:w-1/5 xl:mb-0">
      <Accordion type="single" collapsible className="space-y-8">
        <div className="pt-4">
          <h3 className="mb-8 text-xl text-blackishGreen font-bold">Filter</h3>
          <div>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base font-bold text-blackishGreen">
                Price
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center justify-between">
                  <label>
                    <input
                      className="mt-2 p-3 cursor-pointer"
                      type="number"
                      name="minPrice"
                      value={searchParams.minPrice}
                      onChange={(e) =>
                        updateSearchParams("minPrice", +e.target.value)
                      }
                      min="0"
                      max="1000"
                    />
                  </label>
                  <label>
                    <input
                      className="mt-2 p-3 cursor-pointer"
                      type="number"
                      name="maxPrice"
                      value={searchParams.maxPrice}
                      onChange={(e) =>
                        updateSearchParams("maxPrice", +e.target.value)
                      }
                      min="0"
                      max="1000"
                    />
                  </label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </div>
        </div>
        <div>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-base font-bold text-blackishGreen">
              Rating
            </AccordionTrigger>
            <AccordionContent className="space-x-4 mt-6">
              <button
                className="w-1/5 sm:w-10 xl:w-1/5 font-medium text-sm text-blackishGreen border border-mintGreen py-2 px-4 hover:bg-mintGreen hover:text-white transition-all"
                onClick={() => updateSearchParams("rating", 1)}
              >
                1+
              </button>
              <button
                className="w-1/5 sm:w-10 xl:w-1/5 font-medium text-sm text-blackishGreen border border-mintGreen py-2 px-4 hover:bg-mintGreen hover:text-white transition-all"
                onClick={() => updateSearchParams("rating", 2)}
              >
                2+
              </button>
              <button
                className="w-1/5 sm:w-10 xl:w-1/5 font-medium text-sm text-blackishGreen border border-mintGreen py-2 px-4 hover:bg-mintGreen hover:text-white transition-all"
                onClick={() => updateSearchParams("rating", 3)}
              >
                3+
              </button>
              <button
                className="w-1/5 sm:w-10 xl:w-1/5 font-medium text-sm text-blackishGreen border border-mintGreen py-2 px-4 hover:bg-mintGreen hover:text-white transition-all"
                onClick={() => updateSearchParams("rating", 4)}
              >
                4+
              </button>
            </AccordionContent>
          </AccordionItem>
        </div>
        <div>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-base font-bold text-blackishGreen">
              Amenities
            </AccordionTrigger>
            <AccordionContent className="mt-6 flex flex-col items-start justify-center">
              {advantages.map((advantage, i) => (
                <label key={i}>
                  <input
                    type="checkbox"
                    className="mr-2 cursor-pointer"
                    value={advantage}
                    onChange={(e) => setAdvantage(e)}
                  />
                  {advantage}
                </label>
              ))}
            </AccordionContent>
          </AccordionItem>
        </div>
      </Accordion>
    </div>
  );
};

export default Filter;
