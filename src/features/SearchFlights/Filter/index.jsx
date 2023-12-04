import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import {
  flightMarks,
  timeToValue,
  valueToTime,
} from "../../../utils/flightMarks";

const Filter = () => {
  const [value, setValue] = useState([
    timeToValue("12:15am"),
    timeToValue("2:30pm"),
  ]);
  const [price, setPrice] = useState([60, 1200]);

  const filteredMarks = value.reduce((obj, val) => {
    obj[val] = flightMarks[val];
    return obj;
  }, {});

  return (
    <div className="w-full mb-4 xl:w-1/5 xl:mb-0">
      <div className="space-y-8">
        <div className="pt-4">
          <h3 className="mb-8 text-xl text-blackishGreen font-bold">Filter</h3>
          <div>
            <details>
              <summary className="text-base font-bold text-blackishGreen">
                Price
              </summary>
              <Slider
                className="mt-6"
                range
                allowCross={false}
                defaultValue={[50, 1200]}
                draggableTrack
                value={price}
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
              marks={filteredMarks}
              draggableTrack
              tipFormatter={valueToTime}
              value={value}
              onChange={setValue}
            />
          </details>
        </div>
        <div className="border-t border-gray-300 pt-4">
          <details>
            <summary className="text-base font-bold text-blackishGreen">
              Rating
            </summary>
            <div className="space-x-4 mt-6">
              <Link
                className="font-medium text-sm text-blackishGreen border border-mintGreen w-6 py-2 px-4 hover:bg-mintGreen hover:text-white transition-all"
                to="/search-flights?rating=1"
              >
                1
              </Link>
              <Link
                className="font-medium text-sm text-blackishGreen border border-mintGreen w-6 py-2 px-4 hover:bg-mintGreen hover:text-white transition-all"
                to="/search-flights?rating=2"
              >
                2
              </Link>
              <Link
                className="font-medium text-sm text-blackishGreen border border-mintGreen w-6 py-2 px-4 hover:bg-mintGreen hover:text-white transition-all"
                to="/search-flights?rating=3"
              >
                3
              </Link>
              <Link
                className="font-medium text-sm text-blackishGreen border border-mintGreen w-6 py-2 px-4 hover:bg-mintGreen hover:text-white transition-all"
                to="/search-flights?rating=4"
              >
                4
              </Link>
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
  );
};

export default Filter;
