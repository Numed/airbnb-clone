import { useRequestService } from "./";

export const HotelsServices = () => {
  const { makeRequest } = useRequestService();

  const getAllApps = () => makeRequest("/hotels");
  const getAppsByID = (id) => makeRequest(`/hotels/${id}`);
  const addApps = (data) => makeRequest("/hotels", "POST", data);
  const updateApps = (data, id) => makeRequest(`/hotels/${id}`, "PATCH", data);
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
