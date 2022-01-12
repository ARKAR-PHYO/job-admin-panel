import { createContext, useContext, useEffect, useState } from "react";
import apiCall from "../services/api-call";

export const AuthContext = createContext(null);

export const useGlobalState = () => {
  const state = useContext(AuthContext);

  if (state === undefined) {
    throw new Error("useGlobalState must be used within a AuthProvider");
  }

  return state;
};

export const AuthProvider = ({ children }) => {
  const [getAuthenticatedUser, setGetAuthenticatedUser] = useState();

  const getUser = async () => {
    apiCall()
      .get("/api/get-authenticated-user")
      .then((response) => setGetAuthenticatedUser(response.data));
  };

  const state = { getAuthenticatedUser, getUser };
  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
