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

  return {
    getUser,
    getAllUsers,
    createHotels,
    updateUserName,
    updateUserAvatar,
    updateUserPhone,
    updateUserAddress,
    updateUserDateOfBirth,
  };
};
