import { useRequestService } from ".";

export const AdminService = () => {
  const { makeRequest } = useRequestService();

  const getUser = (id) => makeRequest(`/user/${id}`);
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
    updateUserName,
    updateUserAvatar,
    updateUserPhone,
    updateUserAddress,
    updateUserDateOfBirth,
  };
};
