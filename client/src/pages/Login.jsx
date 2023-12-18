import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../store/auth";

export default function Login() {
  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const errorToast = (error) => {
    toast.warn(`${error}`, {
      position: "top-right",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const submit = async (e) => {
    e.preventDefault();
    const request = await fetch("https://codecrafters.up.railway.app/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });
    const response = await request.json();
    console.log(response);
    if (request.status === 200) {
      storeTokenInLS(response.token);
      navigate("/");
    } else {
      errorToast(response.error);
    }
  };
  return (
    <section className="container register">
      <div className="register_image">
        <img src="/designer.svg" alt="register_image" draggable="false" />
      </div>
      <div className="register_form">
        <h1>Login</h1>
        <form onSubmit={submit}>
          <input
            name="email"
            onChange={handleInput}
            required
            value={login.email}
            type="email"
            placeholder="Email"
          />
          <input
            name="password"
            onChange={handleInput}
            required
            value={login.password}
            type="password"
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}
