import { useRequestService } from ".";

export const FilterService = () => {
  const { makeRequest } = useRequestService();

  const filterApps = (params) => makeRequest(`/hotels/filter?${params}`);
  const filterFlights = (params) => makeRequest(`/flights/filter?${params}`);

  return {
    filterApps,
    filterFlights,
  };
};
