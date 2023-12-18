import { useState } from "react";
import { useAuth } from "../store/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [defaultUser, setDefaultUser] = useState(true);
  const { user } = useAuth();
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  if (user && defaultUser) {
    setContact({
      username: user.user.username,
      email: user.user.email,
      message: ""
    })
    setDefaultUser(false);
  }
  const handleInput = (e) => {
    const { value, name } = e.target;
    setContact({ ...contact, [name]: value });
  };
  function successToast(success) {
    toast.success(success, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  function errorToast(error) {
    toast.error(error, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  const submit = async (e) => {
    e.preventDefault();
    const request = await fetch("https://codecrafters.up.railway.app/api/form/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
    })
    const response = await request.json();
    if (request.status === 200) {
      successToast(response.message);
      setContact({ ...contact, message: "" });
    } else {
      errorToast(response.message);
    }
  };
  return (
    <section className="container contact">
      <div>
        <img className="contact_image"
          src="/contact.svg"
          alt="contact image"
          draggable="false" />
      </div>
      <div>
        <h1>Contact Us</h1>
        <form onSubmit={submit} className="contact_form">
          <input
            onChange={handleInput}
            name="username"
            type="text"
            placeholder="Username"
            value={contact.username}
            autoCorrect="false"
            required={true}
          />
          <input
            onChange={handleInput}
            name="email"
            type="email"
            placeholder="Email"
            value={contact.email}
            autoCorrect="false"
            required={true}
          />
          <textarea
            onChange={handleInput}
            name="message"
            placeholder="Message"
            value={contact.message}
            autoCorrect="false"
            required={true}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}
