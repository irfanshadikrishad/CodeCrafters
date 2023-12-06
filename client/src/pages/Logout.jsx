import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export default function Logout() {
  const { logoutUser } = useAuth();
  useEffect(() => {
    logoutUser();
  }, [logoutUser]);
  return <Navigate to="/login" />;
}
