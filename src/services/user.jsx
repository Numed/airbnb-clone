import { useRequestService } from ".";

export const UserServices = () => {
  const { makeRequest } = useRequestService();
  const getUser = (id) => makeRequest(`/user/${id}`);
  const addFavoriteHotel = (data) =>
    makeRequest("/user/favoriteHotel", "POST", data);
  const addFavoriteFlight = (data) =>
    makeRequest("/user/favoriteFlight", "POST", data);
  const deleteFavoriteHotel = (id) =>
    makeRequest(`/user/favoriteHotel/${id}`, "DELETE");
  const deleteFavoriteFlight = (id) =>
    makeRequest(`/user/favoriteFlight/${id}`, "DELETE");
  const updateEmail = (data, id) => makeRequest(`/user/${id}`, "PATCH", data);
  const updatePassword = (data, id) =>
    makeRequest(`/user/${id}`, "PATCH", data);
  const updateName = (data, id) => makeRequest(`/user/${id}`, "PATCH", data);
  const updateAvatar = (data, id) => makeRequest(`/user/${id}`, "PATCH", data);
  const updatePhone = (data, id) => makeRequest(`/user/${id}`, "PATCH", data);
  const updateAddress = (data, id) => makeRequest(`/user/${id}`, "PATCH", data);
  const updateDateOfBirth = (data, id) =>
    makeRequest(`/user/${id}`, "PATCH", data);
  const addUserCard = (userID, data) =>
    makeRequest(`/user/${userID}/card`, "POST", data);

  return {
    getUser,
    updateName,
    updateAvatar,
    updateEmail,
    updatePhone,
    updateAddress,
    updateDateOfBirth,
    updatePassword,
    addFavoriteHotel,
    addFavoriteFlight,
    deleteFavoriteHotel,
    deleteFavoriteFlight,
    addUserCard,
  };
};
