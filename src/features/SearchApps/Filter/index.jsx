import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/Accordion";

const Filter = () => {
  const [price, setPrice] = useState([60, 1200]);

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
                <Slider
                  className="mt-6"
                  range
                  allowCross={false}
                  defaultValue={[50, 1200]}
                  draggableTrack
                  value={price}
                  onChange={setPrice}
                />
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
            </AccordionContent>
          </AccordionItem>
        </div>
        <div>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-base font-bold text-blackishGreen">
              Amenities
            </AccordionTrigger>
            <AccordionContent className="mt-6 flex flex-col items-start justify-center">
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
            </AccordionContent>
          </AccordionItem>
        </div>
      </Accordion>
    </div>
  );
};

export default Filter;
