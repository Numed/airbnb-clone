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
  const [maxPrice, setMaxPrice] = useState(1000);
  const [startTime, setStartTime] = useState("12:15");
  const [endTime, setEndTime] = useState("02:30");
  const [rating, setRating] = useState(0);
  const [airlines, setAirlines] = useState([]);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [searchParams, setSearchParams] = useState({
    minPrice,
    maxPrice,
    startTime,
    endTime,
    rating,
    selectedAirlines,
  });
  const { filterFlights, getAirlines } = useRequestService();

  useEffect(() => {
    getAirlines()
      .then((res) => setAirlines(res))
      .catch((err) => notifyError(err));
  }, []);

  useEffect(() => {
    setSearchParams({
      ...searchParams,
      minPrice,
      maxPrice,
      startTime,
      endTime,
      rating,
      airlines,
    });
    // eslint-disable-next-line
  }, [minPrice, maxPrice, startTime, endTime, rating, airlines]);

  useEffect(() => {
    if (searchParams) {
      const queryString = new URLSearchParams(searchParams).toString();
      filterFlights(queryString);
    }
    // eslint-disable-next-line
  }, [searchParams]);

  return (
    <div className="w-full mb-4 xl:w-1/5 xl:mb-0">
      <Accordion type="single" collapsible className="space-y-8">
        <AccordionItem value="item-1" className="pt-4">
          <h3 className="mb-8 text-xl text-blackishGreen font-bold">Filter</h3>
          <div>
            <AccordionTrigger className="text-base font-bold text-blackishGreen">
              Price
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center justify-between">
                <label className="flex flex-col items-start justify-start">
                  Min Price
                  <input
                    className="p-3 mt-2"
                    type="number"
                    name="minPrice"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    min="0"
                    max="1000"
                  />
                </label>
                <label className="flex flex-col items-start justify-start">
                  Max Price
                  <input
                    className="p-3 mt-2"
                    type="number"
                    name="maxPrice"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    min="0"
                    max="1000"
                  />
                </label>
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-base font-bold text-blackishGreen">
            Departure Time
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center justify-between">
              <label className="flex flex-col items-start justify-start">
                Start Time
                <input
                  className="mt-2 p-3"
                  name="startTime"
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </label>
              <label className="flex flex-col items-start justify-start">
                End Time
                <input
                  className="mt-2 p-3"
                  name="endDeparture"
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-base font-bold text-blackishGreen">
            Rating
          </AccordionTrigger>
          <AccordionContent className="space-x-4 mt-6">
            <button
              className="font-medium text-sm text-blackishGreen border border-mintGreen w-6 py-2 px-4 hover:bg-mintGreen hover:text-white transition-all"
              name="rating"
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
              name="rating"
              onClick={() => setRating(3)}
            >
              3+
            </button>
            <button
              className="font-medium text-sm text-blackishGreen border border-mintGreen w-6 py-2 px-4 hover:bg-mintGreen hover:text-white transition-all"
              name="rating"
              onClick={() => setRating(4)}
            >
              4+
            </button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-base font-bold text-blackishGreen">
            Airlines
          </AccordionTrigger>
          <AccordionContent className="mt-6 flex flex-col items-start justify-center">
            {airlines.map((airline, i) => (
              <label key={i}>
                <input
                  name="airline"
                  type="checkbox"
                  className="mr-2"
                  onChange={(e) =>
                    setSelectedAirlines([...airlines, e.target.value])
                  }
                />
                {airline}
              </label>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filter;
