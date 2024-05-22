import { addDays, format, parseISO } from "date-fns";
import { useState, useEffect } from "react";
import { AiOutlineCalendar } from "react-icons/ai";

import { cn } from "../../utils";
import { Popover, PopoverContent, PopoverTrigger } from "../Popup";
import Button from "../Button";
import Calendar from "../Calendar";
import { useSelectedFlightsDate } from "../../store";

const FlightDatePicker = ({ className }) => {
  const { selectedFlightsDate, setSelectedFlightsDate } =
    useSelectedFlightsDate();

  const initialFromDate = selectedFlightsDate.departureTime
    ? parseISO(selectedFlightsDate.departureTime)
    : new Date();
  const initialToDate = selectedFlightsDate.arrivalTime
    ? parseISO(selectedFlightsDate.arrivalTime)
    : addDays(new Date(), 3);

  const [date, setDate] = useState({
    from: initialFromDate,
    to: initialToDate,
  });

  useEffect(() => {
    // Завантажити вибрані дати зі стану
    const { departureTime, arrivalTime } = selectedFlightsDate;
    if (departureTime && arrivalTime) {
      setDate({
        from: parseISO(departureTime),
        to: parseISO(arrivalTime),
      });
    }
  }, [selectedFlightsDate]);

  useEffect(() => {
    // Update selectedFlightsDate state
    setSelectedFlightsDate({
      departureTime: format(date.from, "yyyy-MM-dd'T'HH:mm:ss"),
      arrivalTime: format(date.to, "yyyy-MM-dd'T'HH:mm:ss"),
    });
  }, [date, setSelectedFlightsDate]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"solid"}
            className={cn(
              "w-full sm:w-[300px] justify-start text-left font-normal",
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
            onSelect={handleDateChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FlightDatePicker;
