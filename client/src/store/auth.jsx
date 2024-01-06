import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("logger"));
  const [user, setUser] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  let isLoggedIn = !!token;

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
        setIsAdmin(data.user.isAdmin);
      } else {
        console.log(request.json());
      }
    } catch (error) {
      console.log(`[error] ${error}`);
    }
  }
  useEffect(() => {
    authenticate();
  }, [])
  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, logoutUser, user, token, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
