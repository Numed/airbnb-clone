import { useRequestService } from ".";

export const AdminService = () => {
  const { makeRequest } = useRequestService();

  const getUser = (id) => makeRequest(`/user/${id}`);
  const getAllUsers = () => makeRequest("/users");
  const createHotels = (data) => makeRequest("/hotels", "POST", data);
  const updateUserName = (data, id) =>
    makeRequest(`/user/${id}`, "PATCH", data);
  const updateUserAvatar = (data, id) =>
    makeRequest(`/user/${id}`, "PATCH", data);
  const updateUserPhone = (data, id) =>
    makeRequest(`/user/${id}`, "PATCH", data);
  const updateUserAddress = (data, id) =>
    makeRequest(`/user/${id}`, "PATCH", data);
  const updateUserDateOfBirth = (data, id) =>
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
    updateUserName,
    updateUserAvatar,
    updateUserPhone,
    updateUserAddress,
    updateUserDateOfBirth,
    getAllApps,
    getAppsByID,
    addApps,
    updateApps,
    deleteApps,
  };
};
