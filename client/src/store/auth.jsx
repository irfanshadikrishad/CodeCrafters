import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("logger"));
  const [user, setUser] = useState("");

  let isLoggedIn = !!token;

  // storing token in localStorage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("logger", serverToken);
  };
  // logging out user
  const logoutUser = () => {
    setToken("");
    return localStorage.removeItem("logger");
  };
  // Authenticating User
  const authenticate = async () => {
    try {
      const request = await fetch("https://codecrafters.up.railway.app/api/auth/user", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ` + localStorage.getItem("logger")
        }
      })
      if (request.status === 200) {
        const data = await request.json();
        setUser(data);
      } else {
        console.log(request.json());
      }
    } catch (error) {
      console.log(`[error] ${error}`);
    }
  }
  useEffect(() => {
    authenticate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, logoutUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
