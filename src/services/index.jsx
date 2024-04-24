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

  return {
    makeRequest,
  };
};
