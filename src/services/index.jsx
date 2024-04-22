import { useHttp } from "../hooks";

export const useRequestService = () => {
  const { request } = useHttp();

  const makeRequest = async (endpoint, method = "GET", data = null) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}${endpoint}`,
      method,
      data ? JSON.stringify(data) : null
    );
    return response;
  };

  const signIn = (data) => makeRequest("/auth/signin", "POST", data);
  const signUp = (data) => makeRequest("/auth/signup", "POST", data);
  const getUser = (id) => makeRequest(`/user/${id}`);
  const updateApps = (data, id) => makeRequest(`/hotels/${id}`, "PUT", data);
  const getAppsByID = (id) => makeRequest(`/hotels/${id}`);
  const getAllApps = () => makeRequest("/hotels");
  const addApps = (data) => makeRequest("/hotels", "POST", data);
  const deleteApps = (id) => makeRequest(`/hotels/${id}`, "DELETE");
  const addReview = (data) => makeRequest("/hotels/reviews", "POST", data);
  const getAllFlights = () => makeRequest("/flights");
  const addFlight = (data) => makeRequest("/flights", "POST", data);
  const getFlightById = (id) => makeRequest(`/flights/${id}`);
  const updateFlight = (data, id) => makeRequest(`/flights/${id}`, "PUT", data);
  const deleteFlight = (id) => makeRequest(`/flights/${id}`, "DELETE");
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
  const filterApps = (params) => makeRequest(`/hotels/filter?${params}`);
  const filterFlights = (params) => makeRequest(`/flights/filter?${params}`);
  const getAdvantages = () => makeRequest("/hotels/advantages");
  const getAirlines = () => makeRequest("/flights/airlines");
  const addUserCard = (userID, data) =>
    makeRequest(`/user/${userID}/card`, "POST", data);

  return {
    updateApps,
    getAppsByID,
    getAllApps,
    signIn,
    signUp,
    getUser,
    addApps,
    deleteApps,
    getAllFlights,
    getFlightById,
    addFlight,
    deleteFlight,
    updateFlight,
    addFavoriteHotel,
    addFavoriteFlight,
    deleteFavoriteHotel,
    deleteFavoriteFlight,
    addReview,
    updateEmail,
    updatePassword,
    updateName,
    updateAvatar,
    updatePhone,
    updateAddress,
    updateDateOfBirth,
    filterApps,
    filterFlights,
    getAdvantages,
    getAirlines,
    addUserCard,
  };
};
