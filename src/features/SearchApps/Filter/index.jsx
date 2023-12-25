import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/Accordion";
import { useRequestService } from "../../../services";
import { notifyError } from "../../../utils/notifications";
import { useApps } from "../../../store";
import { useDebounce } from "../../../hooks";
import { updateSearchParams } from "../../../utils";

const Filter = () => {
  const [searchParams, setSearchParams] = useState({
    minPrice: 0,
    maxPrice: 500,
    selectedAdvantages: [],
    rating: 1,
  });
  const debounceValue = useDebounce(searchParams, 300);
  const [advantages, setAdvantages] = useState([]);
  const { filterApps, getAdvantages } = useRequestService();
  const { setApps } = useApps();

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
  };

  const onError = (err) => {
    notifyError(err);
  };

  const setAdvantage = (e) => {
    if (e.target.checked) {
      setSearchParams((el) => [...el.selectedAdvantages, e.target.value]);
    } else {
      setSearchParams((el) =>
        el.selectedAdvantages.filter(
          (advantage) => advantage !== e.target.value
        )
      );
    }
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
                      className="mt-2 p-3"
                      type="number"
                      value={searchParams.minPrice}
                      onChange={(e) =>
                        updateSearchParams(
                          searchParams.minPrice,
                          +e.target.value,
                          setSearchParams
                        )
                      }
                      min="0"
                      max="1000"
                    />
                  </label>
                  <label>
                    <input
                      className="mt-2 p-3"
                      type="number"
                      value={searchParams.maxPrice}
                      onChange={(e) =>
                        updateSearchParams(
                          searchParams.maxPrice,
                          +e.target.value,
                          setSearchParams
                        )
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
                onClick={() =>
                  updateSearchParams(searchParams.rating, 1, setSearchParams)
                }
              >
                1+
              </button>
              <button
                className="w-1/5 sm:w-10 xl:w-1/5 font-medium text-sm text-blackishGreen border border-mintGreen py-2 px-4 hover:bg-mintGreen hover:text-white transition-all"
                onClick={() =>
                  updateSearchParams(searchParams.rating, 2, setSearchParams)
                }
              >
                2+
              </button>
              <button
                className="w-1/5 sm:w-10 xl:w-1/5 font-medium text-sm text-blackishGreen border border-mintGreen py-2 px-4 hover:bg-mintGreen hover:text-white transition-all"
                onClick={() =>
                  updateSearchParams(searchParams.rating, 3, setSearchParams)
                }
              >
                3+
              </button>
              <button
                className="w-1/5 sm:w-10 xl:w-1/5 font-medium text-sm text-blackishGreen border border-mintGreen py-2 px-4 hover:bg-mintGreen hover:text-white transition-all"
                onClick={() =>
                  updateSearchParams(searchParams.rating, 4, setSearchParams)
                }
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
                    className="mr-2"
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
