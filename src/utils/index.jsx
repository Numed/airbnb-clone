import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const convertNameFormat = (name) => {
  if (!name) {
    return "";
  }
  const nameArr = name.split(" ");
  if (nameArr.length === 1) {
    return nameArr[0];
  }
  const firstName = nameArr[0];
  const lastName = nameArr[nameArr.length - 1].slice(0, 1);
  return `${firstName} ${lastName[0]}.`;
};
