import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/Accordion";
import { FlightsService } from "../../../services/flights";
import { notifyError, onError } from "../../../utils/notifications";
import { useCountFlights, useFlights } from "../../../store";
import { useDebounce } from "../../../hooks";

const Filter = () => {
  const [searchParams, setSearchParams] = useState({
    minPrice: 0,
    maxPrice: 1000,
    startTime: "12:15",
    endTime: "02:30",
    rating: 0,
    selectedAirlines: [],
  });
  const [airlines, setAirlines] = useState([]);
  const debounceValue = useDebounce(searchParams, 300);
  const { filterFlights, getAirlines } = FlightsService();
  const { setFlights } = useFlights();
  const setCountFlights = useCountFlights((state) => state.setCountFlights);

  useEffect(() => {
    if(airlines.length > 0) return;
    getAirlines()
      .then((res) => setAirlines(res))
      .catch((err) => notifyError(err));
  }, []);

  useEffect(() => {
    const validSearchParams = {
      ...searchParams,
      startTime: "",
      endTime: "",
    };
    delete validSearchParams[0];
    const queryString = new URLSearchParams(validSearchParams).toString();
    filterFlights(queryString).then(onSetFlights).catch(onError);
  }, [debounceValue]);

  const onSetFlights = (data) => {
    setFlights(data);
    setCountFlights(data?.length);
  };

  const setSelectedAirline = (e) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      airLine: e.target.checked
        ? [...prevParams.selectedAirlines, e.target.value]
        : prevParams.selectedAirlines.filter(
            (airline) => airline !== e.target.value
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
                    className="p-3 mt-2 cursor-pointer"
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
                <label className="flex flex-col items-start justify-start">
                  Max Price
                  <input
                    className="p-3 mt-2 cursor-pointer"
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
                  className="mt-2 p-3 cursor-pointer"
                  name="startTime"
                  type="time"
                  value={searchParams.startTime}
                  onChange={(e) =>
                    updateSearchParams("startTime", e.target.value)
                  }
                />
              </label>
              <label className="flex flex-col items-start justify-start">
                End Time
                <input
                  className="mt-2 p-3 cursor-pointer"
                  name="endDeparture"
                  type="time"
                  value={searchParams.endTime}
                  onChange={(e) =>
                    updateSearchParams("endDeparture", e.target.value)
                  }
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
              className="w-1/5 sm:w-10 xl:w-1/5 font-medium text-sm text-blackishGreen border border-mintGreen py-2 px-4 hover:bg-mintGreen hover:text-white transition-all"
              name="rating"
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
              name="rating"
              onClick={() => updateSearchParams("rating", 3)}
            >
              3+
            </button>
            <button
              className="w-1/5 sm:w-10 xl:w-1/5 font-medium text-sm text-blackishGreen border border-mintGreen py-2 px-4 hover:bg-mintGreen hover:text-white transition-all"
              name="rating"
              onClick={() => updateSearchParams("rating", 4)}
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
                  className="mr-2 cursor-pointer"
                  value={airline}
                  onChange={(e) => setSelectedAirline(e)}
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
