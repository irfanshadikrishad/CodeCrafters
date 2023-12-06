import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("logger"));

  let isLoggedIn = !!token;

  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("logger", serverToken);
  };
  const logoutUser = () => {
    setToken("");
    return localStorage.removeItem("logger");
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
