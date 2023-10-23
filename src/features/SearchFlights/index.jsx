import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import Search from "./Search";
import { flightMarks as marks } from "../../utils/flightMarks";

const SearchFlightsContainer = () => {
  const [flightMarks, setFlightMarks] = useState(marks);
  const [price, setPrice] = useState(null);

  return (
    <section className="w-full h-full">
      <Search />
      <div className="flex items-center justify-between px-[6.5rem]">
        <div className="w-1/5">
          <div className="space-y-8">
            <div className="py-4">
              <h3 className="mb-8 text-xl text-blackishGreen font-bold">
                Filter
              </h3>
              <div>
                <details>
                  <summary className="text-base font-bold text-blackishGreen">
                    Price
                  </summary>
                  <Slider
                    range
                    allowCross={false}
                    defaultValue={[50, 1200]}
                    draggableTrack
                    included={false}
                    onChange={setPrice}
                  />
                </details>
              </div>
            </div>
            <div className="border-t border-gray-300 pt-4">
              <details>
                <summary className="text-base font-bold text-blackishGreen">
                  Departure Time
                </summary>
                <Slider
                  className="mt-6"
                  range
                  allowCross={false}
                  defaultValue={[0, 10]}
                  marks={marks}
                  draggableTrack
                  onChange={setFlightMarks}
                />
              </details>
            </div>
            <div className="border-t border-gray-300 pt-4">
              <details>
                <summary className="text-base font-bold text-blackishGreen">
                  Rating
                </summary>
                <div className="space-x-4 mt-6">
                  <button className="font-medium text-sm text-blackishGreen border border-mintGreen w-6 p-2 hover:bg-mintGreen hover:text-white transition-all">
                    1
                  </button>
                  <button className="font-medium text-sm text-blackishGreen border border-mintGreen w-6 p-2 hover:bg-mintGreen hover:text-white transition-all">
                    2
                  </button>
                  <button className="font-medium text-sm text-blackishGreen border border-mintGreen w-6 p-2 hover:bg-mintGreen hover:text-white transition-all">
                    3
                  </button>
                  <button className="font-medium text-sm text-blackishGreen border border-mintGreen w-6 p-2 hover:bg-mintGreen hover:text-white transition-all">
                    4
                  </button>
                </div>
              </details>
            </div>
            <div className="border-t border-gray-300 pt-4">
              <details>
                <summary className="text-base font-bold text-blackishGreen">
                  Airlines
                </summary>
                <div className="mt-6 flex flex-col items-start justify-center">
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Round trip
                  </label>
                  <label>
                    <input type="checkbox" className="mr-2" />
                    On Way
                  </label>
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Multi-City
                  </label>
                  <label>
                    <input type="checkbox" className="mr-2" />
                    My Dates Are Flexible
                  </label>
                </div>
              </details>
            </div>
            <div className="border-t border-gray-300 pt-4">
              <details>
                <summary className="text-base font-bold text-blackishGreen">
                  Trips
                </summary>
                <div className="mt-6 flex flex-col items-start justify-center">
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Round trip
                  </label>
                  <label>
                    <input type="checkbox" className="mr-2" />
                    On Way
                  </label>
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Multi-City
                  </label>
                  <label>
                    <input type="checkbox" className="mr-2" />
                    My Dates Are Flexible
                  </label>
                </div>
              </details>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start w-4/5 ml-6">
          <div className="flex items-start justify-start w-full bg-white space-x-6 rounded-xl">
            <button className="flex flex-col items-start justify-start text-base text-blackishGreen font-semibold mb-2 bg-white px-6 py-4 border-gray-300 border-r">
              Cheapest
              <span className="text-sm text-blackishGreen/40">
                $99 | 2h 18m
              </span>
            </button>
            <button className="flex flex-col items-start justify-start text-base text-blackishGreen font-semibold mb-2 bg-white px-6 py-4 border-gray-300 border-r">
              Best
              <span className="text-sm text-blackishGreen/40">
                $120 | 1h 30m
              </span>
            </button>
            <button className="flex flex-col items-start justify-start text-base text-blackishGreen font-semibold mb-2 bg-white px-6 py-4">
              Quickest
              <span className="text-sm text-blackishGreen/40">
                $99 | 1h 18m
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFlightsContainer;
