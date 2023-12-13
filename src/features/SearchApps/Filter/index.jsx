import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/Accordion";
import { useRequestService } from "../../../services";
import { notifyError } from "../../../utils/notifications";

const Filter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [selectedAdvangages, setSelectedAdvangages] = useState([]);
  const [searchParams, setSearchParams] = useState({
    minPrice,
    maxPrice,
    selectedAdvangages,
    rating,
  });
  const [advantages, setAdvantages] = useState([]);
  const { filterApps, getAdvantages } = useRequestService();

  useEffect(() => {
    getAdvantages()
      .then((res) => setAdvantages(res))
      .catch((err) => notifyError(err));
  }, []);

  useEffect(() => {
    setSearchParams({
      ...searchParams,
      minPrice,
      maxPrice,
      selectedAdvangages,
      rating,
    });
    // eslint-disable-next-line
  }, [minPrice, maxPrice, selectedAdvangages, rating]);

  useEffect(() => {
    if (searchParams) {
      const queryString = new URLSearchParams(searchParams).toString();
      filterApps(queryString);
    }
    // eslint-disable-next-line
  }, [searchParams]);

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
                      type="number"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      min="0"
                      max="1000"
                    />
                  </label>
                  <label>
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
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
                className="font-medium text-sm text-blackishGreen border border-mintGreen w-6 py-2 px-4 hover:bg-mintGreen hover:text-white transition-all"
                onClick={() => setRating(1)}
              >
                1+
              </button>
              <button
                className="font-medium text-sm text-blackishGreen border border-mintGreen w-6 py-2 px-4 hover:bg-mintGreen hover:text-white transition-all"
                onClick={() => setRating(2)}
              >
                2+
              </button>
              <button
                className="font-medium text-sm text-blackishGreen border border-mintGreen w-6 py-2 px-4 hover:bg-mintGreen hover:text-white transition-all"
                onClick={() => setRating(3)}
              >
                3+
              </button>
              <button
                className="font-medium text-sm text-blackishGreen border border-mintGreen w-6 py-2 px-4 hover:bg-mintGreen hover:text-white transition-all"
                onClick={() => setRating(4)}
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
                    onChange={(e) =>
                      setSelectedAdvangages([
                        ...selectedAdvangages,
                        e.target.value,
                      ])
                    }
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
