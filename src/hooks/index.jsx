import { useEffect, useState, useCallback } from "react";

export const useHttp = () => {
  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = {
        "Content-Type": "application/json",
        accepts: "application/json",
      }
    ) => {
      try {
        const response = await fetch(url, { method, body, headers });
        const data = await response.json();

        if (!response.ok) {
          throw (
            data.message || `Could not fetch ${url}, status: ${response.status}`
          );
        }

        return data;
      } catch (e) {
        throw e;
      }
    },
    []
  );

  return { request };
};

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};
