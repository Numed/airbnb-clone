import { useRequestService } from "./";

export const HotelsServices = () => {
  const { makeRequest } = useRequestService();

  const updateApps = (data, id) => makeRequest(`/hotels/${id}`, "PATCH", data);
  const getAppsByID = (id) => makeRequest(`/hotels/${id}`);
  const getAllApps = () => makeRequest("/hotels");
  const addApps = (data) => makeRequest("/hotels", "POST", data);
  const deleteApps = (id) => makeRequest(`/hotels/${id}`, "DELETE");
  const getAdvantages = () => makeRequest("/hotels/advantages");

  return {
    updateApps,
    getAppsByID,
    getAllApps,
    deleteApps,
    addApps,
    getAdvantages,
  };
};
