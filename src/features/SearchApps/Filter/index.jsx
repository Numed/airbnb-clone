import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Filter = () => {
  const [price, setPrice] = useState([60, 1200]);

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
              Freebies
            </summary>
            <div className="mt-6 flex flex-col items-start justify-center">
              <label>
                <input type="checkbox" className="mr-2" />
                Free breakfast
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Free parking
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Free airport shuttle
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Free cancellation
              </label>
            </div>
          </details>
        </div>
        <div className="border-t border-gray-300 pt-4">
          <details>
            <summary className="text-base font-bold text-blackishGreen">
              Amenities
            </summary>
            <div className="mt-6 flex flex-col items-start justify-center">
              <label>
                <input type="checkbox" className="mr-2" />
                24hr front desk
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Air-conditioned
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Grill zone
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Fitness
              </label>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Filter;
