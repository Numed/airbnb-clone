import { useRequestService } from ".";

export const UserServices = () => {
  const { makeRequest } = useRequestService();

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
  const getUserMe = () => makeRequest("/user/me");
  const userMeUpdate = (data) => makeRequest("/user/me", "PATCH", data);
  const addUserCard = (userID, data) =>
    makeRequest(`/user/${userID}/card`, "POST", data);
  const deleteUserCard = (userID, cardID) =>
    makeRequest(`/user/${userID}/card/${cardID}`, "DELETE");

  return {
    getUserMe,
    userMeUpdate,
    updateEmail,
    updatePassword,
    addFavoriteHotel,
    addFavoriteFlight,
    deleteFavoriteHotel,
    deleteFavoriteFlight,
    addUserCard,
    deleteUserCard,
  };
};
