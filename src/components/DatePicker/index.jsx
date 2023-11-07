import { addDays, format } from "date-fns";
import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";

import { cn } from "../../utils";
import { Popover, PopoverContent, PopoverTrigger } from "../Popup";
import Button from "../Button";
import Calendar from "../Calendar";

const DatePickerWithRange = ({ className }) => {
  const [date, setDate] = useState({
    from: new Date(2023, 9, 27),
    to: addDays(new Date(2023, 9, 30), 3),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"solid"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-gray-50"
            )}
          >
            <AiOutlineCalendar className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "dd LLL yy")} -{" "}
                  {format(date.to, "dd LLL yy")}
                </>
              ) : (
                format(date.from, "dd LLL y")
              )
            ) : (
              <span className="text-blackishGreen">Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePickerWithRange;
