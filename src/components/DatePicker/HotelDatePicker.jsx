import { format, addDays, parseISO } from "date-fns";
import { useState, useEffect } from "react";
import { AiOutlineCalendar } from "react-icons/ai";

import { cn } from "../../utils";
import { Popover, PopoverContent, PopoverTrigger } from "../Popup";
import Button from "../Button";
import Calendar from "../Calendar";
import { useSelectedHotelsDate } from "../../store";

const HotelDatePicker = ({ className }) => {
  const { selectedHotelsDate, setSelectedHotelsDate } = useSelectedHotelsDate();

  const initialCheckIn = selectedHotelsDate.checkIn
    ? parseISO(selectedHotelsDate.checkIn)
    : new Date();
  const initialCheckOut = selectedHotelsDate.checkOut
    ? parseISO(selectedHotelsDate.checkOut)
    : addDays(new Date(), 1);

  const [checkIn, setCheckIn] = useState(initialCheckIn);
  const [checkOut, setCheckOut] = useState(initialCheckOut);

  useEffect(() => {
    const storedCheckIn = localStorage.getItem("selectedCheckIn");
    const storedCheckOut = localStorage.getItem("selectedCheckOut");

    if (storedCheckIn && storedCheckOut) {
      setSelectedHotelsDate({
        checkIn: storedCheckIn,
        checkOut: storedCheckOut,
      });
      setCheckIn(parseISO(storedCheckIn));
      setCheckOut(parseISO(storedCheckOut));
    }
  }, [setSelectedHotelsDate]);

  useEffect(() => {
    if (checkIn && checkOut) {
      const formattedCheckIn = format(checkIn, "yyyy-MM-dd'T'HH:mm:ss");
      const formattedCheckOut = format(checkOut, "yyyy-MM-dd'T'HH:mm:ss");

      setSelectedHotelsDate({
        checkIn: formattedCheckIn,
        checkOut: formattedCheckOut,
      });
    }
  }, [checkIn, checkOut, setSelectedHotelsDate]);

  return (
    <div className={cn("flex items-center justify-start space-x-2", className)}>
      <fieldset className="border border-black rounded-md p-2 min-h-[90px]">
        <legend className="bg-white p-2 text-sm ml-2">Check In</legend>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"solid"}
              className={cn(
                "w-full sm:w-[240px] pl-3 text-left font-normal",
                !checkIn && "text-muted-foreground"
              )}
            >
              {checkIn ? (
                format(checkIn, "PPP")
              ) : (
                <span className="text-blackishGreen">Pick a date</span>
              )}
              <AiOutlineCalendar className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={checkIn}
              onSelect={setCheckIn}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </fieldset>

      <fieldset className="border border-black rounded-md p-2 min-h-[90px]">
        <legend className="bg-white p-2 text-sm ml-2">Check Out</legend>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"solid"}
              className={cn(
                "w-full sm:w-[240px] pl-3 text-left font-normal",
                !checkOut && "text-muted-foreground"
              )}
            >
              {checkOut ? (
                format(checkOut, "PPP")
              ) : (
                <span className="text-blackishGreen">Pick a date</span>
              )}
              <AiOutlineCalendar className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={checkOut}
              onSelect={setCheckOut}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </fieldset>
    </div>
  );
};

export default HotelDatePicker;
