import { useHttp } from "../hooks";

export const useRequestService = () => {
  const { request } = useHttp();

  const signIn = (data) => {
    const response = request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/auth/signin`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const signUp = (data) => {
    const response = request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/auth/signup`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const updateApps = (data, id) => {
    const response = request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/hotels/${id}`,
      "PUT",
      JSON.stringify(data)
    );
    return response;
  };

  const getAppsByID = (id) => {
    const response = request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/hotels/${id}`
    );
    return response;
  };

  const getAllApps = () => {
    const response = request(`${process.env.REACT_APP_FETCH_TEMPLATE}/hotels`);
    return response;
  };

  const addApps = (data) => {
    const response = request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/hotels`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const deleteApps = (id) => {
    const response = request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/hotels/${id}`,
      "DELETE"
    );
    return response;
  };

  const addReview = (data) => {
    const response = request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/hotels/reviews`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const getAllFlights = () => {
    const response = request(`${process.env.REACT_APP_FETCH_TEMPLATE}/flights`);
    return response;
  };

  const addFlight = (data) => {
    const response = request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/flights`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const getFlightById = (id) => {
    const response = request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/flights/${id}`
    );
    return response;
  };

  const updateFlight = (data, id) => {
    const response = request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/flights/${id}`,
      "PUT",
      JSON.stringify(data)
    );
    return response;
  };

  const deleteFlight = (id) => {
    const response = request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/flights/${id}`,
      "DELETE"
    );
    return response;
  };

  const addFavorite = (data) => {
    const response = request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/user/favorites`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const deleteFavorite = (id) => {
    const response = request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/user/favorites/${id}`,
      "DELETE"
    );
    return response;
  };

  const updateEmail = (data) => {
    const response = request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/user/email`,
      "PATCH",
      JSON.stringify(data)
    );
    return response;
  };

  const updatePassword = (data) => {
    const response = request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/user/password`,
      "PATCH",
      JSON.stringify(data)
    );
    return response;
  };

  const updateName = (data) => {
    const response = request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/user/name`,
      "PATCH",
      JSON.stringify(data)
    );
    return response;
  };

  const updateAvatar = (data) => {
    const response = request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/user/avatar`,
      "PATCH",
      JSON.stringify(data)
    );
    return response;
  };

  const updatePhone = (data) => {
    const response = request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/user/phone`,
      "PATCH",
      JSON.stringify(data)
    );
    return response;
  };

  const updateAddress = (data) => {
    const response = request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/user/address`,
      "PATCH",
      JSON.stringify(data)
    );
    return response;
  };

  const updateDateOfBirth = (data) => {
    const response = request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/user/dateOfBirth`,
      "PATCH",
      JSON.stringify(data)
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
  };
};
