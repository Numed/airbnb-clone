import { useHttp } from "../hooks";

export const useRequestService = () => {
  const { request } = useHttp();

  const signIn = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/auth/signin`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const signUp = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/auth/signup`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const updateApps = async (data, id) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/hotels/${id}`,
      "PUT",
      JSON.stringify(data)
    );
    return response;
  };

  const getAppsByID = async (id) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/hotels/${id}`
    );
    return response;
  };

  const getAllApps = async () => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/hotels`
    );
    return response;
  };

  const addApps = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/hotels`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const deleteApps = async (id) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/hotels/${id}`,
      "DELETE"
    );
    return response;
  };

  const addReview = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/hotels/reviews`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const getAllFlights = async () => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/flights`
    );
    return response;
  };

  const addFlight = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/flights`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const getFlightById = async (id) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/flights/${id}`
    );
    return response;
  };

  const updateFlight = async (data, id) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/flights/${id}`,
      "PUT",
      JSON.stringify(data)
    );
    return response;
  };

  const deleteFlight = async (id) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/flights/${id}`,
      "DELETE"
    );
    return response;
  };

  const addFavorite = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/user/favorites`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const deleteFavorite = async (id) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/user/favorites/${id}`,
      "DELETE"
    );
    return response;
  };

  const updateEmail = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/user`,
      "PATCH",
      JSON.stringify(data)
    );
    return response;
  };

  const updatePassword = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/user`,
      "PATCH",
      JSON.stringify(data)
    );
    return response;
  };

  const updateName = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/user`,
      "PATCH",
      JSON.stringify(data)
    );
    return response;
  };

  const updateAvatar = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/user`,
      "PATCH",
      JSON.stringify(data)
    );
    return response;
  };

  const updatePhone = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/user`,
      "PATCH",
      JSON.stringify(data)
    );
    return response;
  };

  const updateAddress = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/user`,
      "PATCH",
      JSON.stringify(data)
    );
    return response;
  };

  const updateDateOfBirth = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/user`,
      "PATCH",
      JSON.stringify(data)
    );
    return response;
  };

  const filterApps = async (params) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/hotels?${params}`
    );
    return response;
  };

  const filterFlights = async (params) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/flights?${params}`
    );
    return response;
  };

  const getAdvantages = async () => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/hotels/advantages`
    );
    return response;
  };

  const getAirlines = async () => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/flights/airlines`
    );
    return response;
  };

  return {
    updateApps,
    getAppsByID,
    getAllApps,
    signIn,
    signUp,
    addApps,
    deleteApps,
    getAllFlights,
    getFlightById,
    addFlight,
    deleteFlight,
    updateFlight,
    addFavorite,
    deleteFavorite,
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
  };
};
