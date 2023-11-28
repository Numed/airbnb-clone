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
    addReview,
  };
};
