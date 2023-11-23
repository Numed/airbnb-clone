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
      `${process.env.REACT_APP_FETCH_TEMPLATE}//hotels/hotel/${id}`,
      "PUT",
      JSON.stringify(data)
    );
    return response;
  };

  const getAppsByID = async (id) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/hotels/hotel/${id}`
    );
    return response;
  };

  const getAllApps = async () => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/hotels/allHotels`
    );
    return response;
  };

  const addApps = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/hotels/addHotel`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const deleteApps = async (id) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/hotels/deleteHotel/${id}`,
      "DELETE"
    );
    return response;
  };

  const getAllFlights = async () => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/flights/allFlights`
    );
    return response;
  };

  const addFlight = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/flights/addFlight`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const getFlightById = async (id) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/flights/flight/${id}`
    );
    return response;
  };

  const updateFlight = async (data, id) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/flights/flight/${id}`,
      "PUT",
      JSON.stringify(data)
    );
    return response;
  };

  const deleteFlight = async (id) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/flights/deleteFlight/${id}`,
      "DELETE"
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
  };
};
