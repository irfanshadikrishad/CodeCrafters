import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
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
    const request = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
    });
    const response = await request.json();
    if (request.status === 201) {
      // await localStorage.setItem("logger", response.token);
      await storeTokenInLS(response.token);
      navigate("/");
    } else {
      errorToast(response.message);
    }
  };
  return (
    <section className="container register">
      <div className="register_image">
        <img src="/designer.svg" alt="register_image" draggable="false" />
      </div>
      <div className="register_form">
        <h1>Register</h1>
        <form onSubmit={submit}>
          <input
            name="username"
            onChange={handleInput}
            required
            value={register.username}
            type="text"
            placeholder="Username"
          />
          <input
            name="email"
            onChange={handleInput}
            required
            value={register.email}
            type="email"
            placeholder="Email"
          />
          <input
            name="phone"
            onChange={handleInput}
            required
            value={register.phone}
            type="phone"
            placeholder="Phone"
          />
          <input
            name="password"
            onChange={handleInput}
            required
            value={register.password}
            type="password"
            placeholder="Password"
          />
          <button type="submit">Register</button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}
