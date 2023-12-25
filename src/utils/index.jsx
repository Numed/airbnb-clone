import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const convertNameFormat = (name) => {
  const nameArr = name.split(" ");
  const firstName = nameArr[0];
  const lastName = nameArr[nameArr.length - 1].slice("0", "1");
  return `${firstName} ${lastName[0]}.`;
};

export const updateSearchParams = (key, value, setSearchParams) => {
  setSearchParams((prevParams) => ({
    ...prevParams,
    [key]: value,
  }));
};