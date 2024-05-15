import { useRequestService } from "./";

export const ReviewServices = () => {
  const { makeRequest } = useRequestService();

  const reviewFlight = (id, data) => makeRequest(`/flights/review/${id}`, "POST", data);
  const reviewApps = (id, data) => makeRequest(`/hotels/review/${id}`, "POST", data);

  return { reviewFlight, reviewApps };
};