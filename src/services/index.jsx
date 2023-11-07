import { useHttp } from "../hooks";

export const useRequestService = () => {
  const { request } = useHttp();

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
  const getApps = async () => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/hotels/allHotels`
    );
    return response;
  };

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

  const addHotel = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/hotels/addHotel`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const deleteHotel = async (id) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/hotels/deleteHotel/${id}`,
      "DELETE"
    );
    return response;
  };

  const allFlights = async () => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/flights/allFlights`
    );
    return response;
  };

  const flightById = async (id) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/flights/flight/${id}`
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

  const deleteFlight = async (id) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/flights/deleteFlight/${id}`,
      "DELETE"
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

  return {
    updateApps,
    getAppsByID,
    getApps,
    signIn,
    signUp,
    addHotel,
    deleteHotel,
    allFlights,
    flightById,
    addFlight,
    deleteFlight,
    updateFlight,
  };
};
