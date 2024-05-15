import { useRequestService } from ".";

export const FlightsService = () => {
  const { makeRequest } = useRequestService();

  const getAllFlights = () => makeRequest("/flights");
  const addFlight = (data) => makeRequest("/flights", "POST", data);
  const getFlightById = (id) => makeRequest(`/flights/${id}`);
  const updateFlight = (data, id) => makeRequest(`/flights/${id}`, "PATCH", data);
  const deleteFlight = (id) => makeRequest(`/flights/${id}`, "DELETE");
  const filterFlights = (params) => makeRequest(`/flights/filter?${params}`);
  const getAirlines = () => makeRequest("/flights/airlines");

  return {
    getAllFlights,
    getFlightById,
    addFlight,
    deleteFlight,
    updateFlight,
    filterFlights,
    getAirlines,
  };
};
