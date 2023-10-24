import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { flightMarks as marks } from "../../../utils/flightMarks";

const Filter = () => {
  const [flightMarks, setFlightMarks] = useState(marks);
  const [price, setPrice] = useState(null);
  return (
    <div className="w-1/5">
      <div className="space-y-8">
        <div className="py-4">
          <h3 className="mb-8 text-xl text-blackishGreen font-bold">Filter</h3>
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
  );
};

export default Filter;
