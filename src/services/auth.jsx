import { useRequestService } from "./";

export const AuthServices = () => {
  const { makeRequest } = useRequestService();

  const signIn = (data) => makeRequest("/auth/signin", "POST", data);
  const signUp = (data) => makeRequest("/auth/signup", "POST", data);

  return { signIn, signUp };
};

