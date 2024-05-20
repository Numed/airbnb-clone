import { useRequestService } from ".";

export const AdminService = () => {
  const { makeRequest } = useRequestService();

  const getUser = (id) => makeRequest(`/user/${id}`);
  const getAllUsers = () => makeRequest("/user/all");
  const createHotels = (data) => makeRequest("/hotels", "POST", data);
  const updateUserById = (data, id) =>
    makeRequest(`/user/${id}`, "PATCH", data);
  const getAllApps = () => makeRequest("/hotels");
  const getAppsByID = (id) => makeRequest(`/hotels/${id}`);
  const addApps = (data) => makeRequest("/hotels", "POST", data);
  const updateApps = (data, id) => makeRequest(`/hotels/${id}`, "PATCH", data);
  const deleteApps = (id) => makeRequest(`/hotels/${id}`, "DELETE");

  return {
    getUser,
    getAllUsers,
    createHotels,
    updateUserById,
    getAllApps,
    getAppsByID,
    addApps,
    updateApps,
    deleteApps,
  };
};
