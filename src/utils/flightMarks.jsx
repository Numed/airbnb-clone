export const convertTo12HourFormat = (time) => {
  let [hours, minutes] = time.split(":");
  hours = parseInt(hours, 10);
  let period = "am";

  if (hours >= 12) {
    period = "pm";
    if (hours > 12) {
      hours -= 12;
    }
  } else if (hours === 0) {
    hours = 12;
  }

  return `${hours}:${minutes} ${period}`;
};
