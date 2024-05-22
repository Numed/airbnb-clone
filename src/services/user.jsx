import { useRequestService } from ".";

export const UserServices = () => {
  const { makeRequest } = useRequestService();

  const addFavoriteHotel = (data) =>
    makeRequest("/user/favoriteHotel", "POST", data);
  const addFavoriteFlight = (data) =>
    makeRequest("/user/favoriteFlight", "POST", data);
  const deleteFavoriteHotel = (userId, hotelId) =>
    makeRequest(`/user/${userId}/favoriteHotel/${hotelId}`, "DELETE");
  const deleteFavoriteFlight = (userId, flightId) =>
    makeRequest(`/user/${userId}/favoriteFlight/${flightId}`, "DELETE");
  const updateEmail = (data, id) => makeRequest(`/user/${id}`, "PATCH", data);
  const updatePassword = (data, id) =>
    makeRequest(`/user/${id}`, "PATCH", data);
  const updateUserAvatar = (data, id) =>
    makeRequest(`/user/${id}`, "PATCH", data);
  const getUserMe = () => makeRequest("/user/me");
  const userMeUpdate = (data) => makeRequest("/user/me", "PATCH", data);
  const addUserCard = (data) => makeRequest("/user/card", "POST", data);
  const deleteUserCard = (userID, cardID) =>
    makeRequest(`/user/${userID}/card/${cardID}`, "DELETE");
  const createOrderedRoom = (data) =>
    makeRequest("/user/orderRoom", "POST", data);
  const createOrderedFlight = (data) =>
    makeRequest("/user/orderFlight", "POST", data);
  const getUserOrders = () => makeRequest("/user/orders");

  return {
    getUserMe,
    userMeUpdate,
    updateEmail,
    updatePassword,
    addFavoriteHotel,
    addFavoriteFlight,
    deleteFavoriteHotel,
    deleteFavoriteFlight,
    updateUserAvatar,
    addUserCard,
    deleteUserCard,
    createOrderedRoom,
    createOrderedFlight,
    getUserOrders,
  };
};
