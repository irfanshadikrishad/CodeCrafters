import { createContext, useContext } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("logger", serverToken);
  };
  return (
    <AuthContext.Provider value={{ storeTokenInLS }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
